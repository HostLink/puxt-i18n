<?php

namespace PUXT\I18N;

use stdClass;
use Gettext\GettextTranslator;
use Gettext\Translations;
use Twig\Extensions\Node\TransNode;

class App
{

    public $root;
    public $config;

    public function __construct(string $root, array $config, string $path)
    {
        $this->root = $root;
        $this->config = $config;
        $this->path = $path;
    }

    private function parseTrans($nodes): array
    {
        $data = [];
        foreach ($nodes as $node) {
            if ($node instanceof TransNode) {
                $data[] = $node;
                continue;
            }

            $child = $this->parseTrans($node->getIterator());
            foreach ($child as $d) {
                $data[] = $d;
            }
        }
        return $data;
    }

    /**
     * Get all translate data
     */
    public function getTran(string $file)
    {
        $root = $this->root;
        $text_domain = preg_replace('/.[^.]*$/', '', $file);

        $data = [];
        foreach ($this->getLocales() as $lang) {
            $dd = [];
            $f = $root . DIRECTORY_SEPARATOR . "locale" . DIRECTORY_SEPARATOR . $lang . DIRECTORY_SEPARATOR . "LC_MESSAGES" . DIRECTORY_SEPARATOR . $text_domain . ".po";
            if (file_exists($f)) {
                $ts = \Gettext\Translations::fromPoFile($f);
                foreach ($ts as  $t) {

                    $org = $t->getOriginal();
                    $dd[$org] = $t->getTranslation();
                }
            }
            $data[$lang] = $dd;
        }



        $ds = [];
        foreach ($this->getToken($file) as $str) {
            $msgstr = [];
            foreach ($this->getLocales() as $lang) {
                $msgstr[$lang] = $data[$lang][$str];
                unset($data[$lang][$str]);
            }
            $ds[] = ["msgid" => $str, "msgstr" => $msgstr];
        }

        return ["data" => $ds, "unuse" => $data];
    }


    /**
     * Get all trans token from twig file
     */
    public function getToken(string $file): array
    {

        $this->template = null;
        $path = $this->root . DIRECTORY_SEPARATOR . $file;
        $code = file_get_contents($path);

        $loader = new \Twig\Loader\FilesystemLoader($this->root);
        $env = new \Twig\Environment($loader, ["debug" => true]);
        $env->addExtension(new \Twig\Extensions\I18nExtension());

        $stream = $env->tokenize(new \Twig\Source($code, "trans"));
        $node = $env->parse($stream);

        $trans = [];
        foreach ($this->parseTrans($node) as $t) {
            $trans[] = $t->getNode("body")->getAttribute("value");
        }
        $trans = array_unique($trans);
        return array_values($trans);
    }


    public function run()
    {
        $res = [];
        if ($this->path == "getFolder") {
            $res = $this->getFolder($_GET["path"]);
        } elseif ($this->path == "getLocales") {
            $res = $this->getLocales();
        } elseif ($this->path == "getTran") {
            $res = $this->getTran($_GET["path"]);
        } elseif ($this->path == "saveTran") {
            $post = json_decode(file_get_contents("php://input"), true);
            $res = $this->saveTran($post);
        } elseif ($this->path == "translate") {
            $post = json_decode(file_get_contents("php://input"), true);
            $res = $this->translate($post);
        } else {
            $path = $this->path;
            if ($path == "") {
                $path = "index.html";
            }
            $path = __DIR__ . "/dist/" . $path;
            if(substr($path,-3)==".js"){
                header("Content-type: application/javascript");        
            }

            readfile($path);
            die();
        }
        header("Content-type: application/json");
        echo json_encode($res, JSON_UNESCAPED_UNICODE);
    }

    private function translate($data)
    {
        if (!$data) return;
        $t = new \R\Translate();

        return ["data" => $t->translate($data["text"], $data["from"], $data["to"])];
    }

    public function saveTran($data)
    {
        if (!$data) return;
        $filename = basename($data["file"]);


        $po = $this->root . DIRECTORY_SEPARATOR . "locale" . DIRECTORY_SEPARATOR . $data["locale"] . DIRECTORY_SEPARATOR . "LC_MESSAGES" . DIRECTORY_SEPARATOR . $data["file"] . ".po";
        if (file_exists($po)) {
            $ts = Translations::fromPoFile($po);
        } else {
            mkdir(dirname($po), 0777, true);
            $ts = new Translations();
        }
        $ts->setLanguage($data["locale"]);
        foreach ($data["data"] as $d) {
            $t = $ts->find("", $d["msgid"]);
            if (!$t) {
                $t = $ts->insert("", $d["msgid"]);
            }
            $t->setTranslation($d["msgstr"]);
        }
        $ts->setHeader("Content-Type", "");

        //create po
        file_put_contents($po, "");
        $ts->toPoFile($po);

        // del all mo
        foreach (glob(dirname($po) . "/" . $filename . "-*.mo") as $mo) {
            unlink($mo);
        }
        // convert po to mo
        $mo = dirname($po) . DIRECTORY_SEPARATOR . "{$filename}-" . time() . ".mo";
        //create mo
        file_put_contents($mo, "");

        if (!$ts->toMoFile($mo)) {
            return ["error" => ["message" => "cannot write mo file $mo"]];
        }

        $result[] = ["po" => $po, "mo" => $mo];

        return ["data" => $result];
    }


    public function getLocales()
    {
        return $this->config["locales"];
    }

    public function getFolder(string $path = "")
    {

        $ret = [];

        foreach (glob($this->root . "/$path/*.twig") as $f) {
            $name = substr($f, strlen($this->root . "/$path/"));
            $ret[] = [
                "name" => $name,
                "type" => "file"
            ];
        }
        foreach (glob($this->root . "/$path/*", GLOB_ONLYDIR) as $f) {
            $name = substr($f, strlen($this->root . "/$path/"));
            $ret[] = [
                "name" => $name,
                "type" => "folder"
            ];
        }

        return $ret;
    }
}

return function ($options) {

    if (substr($this->context->route->path, 0, 5) == "_i18n") {

        if ($options) {
            //acl
            if (!isset($_SERVER['PHP_AUTH_USER'])) {
                header('WWW-Authenticate: Basic realm="puxt i18n"');
                header('HTTP/1.0 401 Unauthorized');
                exit;
            }

            if ($_SERVER['PHP_AUTH_USER'] != $options["username"] && $_SERVER['PHP_AUTH_PW'] != $options["password"]) {
                header('WWW-Authenticate: Basic realm="puxt i18n"');
                header('HTTP/1.0 401 Unauthorized');
                exit;
            }
        }

        $path = substr($this->context->route->path, 6);
        $app = new App($this->root, $this->config["i18n"], $path);
        $app->run();
        die();
    }
};
