(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{356:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("4e190760",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";var r=n(2),o=n(48).find,c=n(154),l=n(18),f=!0,d=l("find");"find"in[]&&Array(1).find((function(){f=!1})),r({target:"Array",proto:!0,forced:f||!d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("find")},358:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var r=function(){return"undefined"!=typeof window?window:t},o=function(){var t=r();return t&&t.tinymce?t.tinymce:null}}).call(this,n(25))},359:function(t,e,n){"use strict";n(356)},360:function(t,e,n){(e=n(68)(!1)).push([t.i,".tox-notification{display:none!important}",""]),t.exports=e},361:function(t,e,n){"use strict";n.r(e);n(357),n(65),n(38),n(95),n(12),n(66),n(67),n(37);var r,o=n(3),c=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],l=function(t){return-1!==c.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},f=function(t,e,n){var r=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";n.setContent(r||(e.initialized?e.cache:o)),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,r=Array.isArray(n)?n.join(" "):n;t.$watch("value",(function(n,r){e&&"string"==typeof n&&n!==r&&n!==e.getContent({format:t.$props.outputFormat})&&e.setContent(n)})),e.on(r||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter(l).forEach((function(r){var o=e[r];"function"==typeof o&&("onInit"===r?o(t,n):n.on(r.substring(2),(function(t){return o(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},d=0,m=function(t){var time=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++d+String(time)},h=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},v=function(){return{listeners:[],scriptId:m("tiny-script"),scriptLoaded:!1}},y=(r=v(),{load:function(t,e,n){r.scriptLoaded?n():(r.listeners.push(n),t.getElementById(r.scriptId)||function(t,e,n,r){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=n;var c=function(){o.removeEventListener("load",c),r()};o.addEventListener("load",c),e.head&&e.head.appendChild(o)}(r.scriptId,t,e,(function(){r.listeners.forEach((function(t){return t()})),r.scriptLoaded=!0})))},reinitialize:function(){r=v()}}),w=n(358),S={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},k=function(){return(k=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},x=function(t){return function(){var e,n,element,r=k(k({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,h(e).concat(h(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return f(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(element=t.element)&&"textarea"===element.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(w.a)().init(r)}};function $(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var C={components:{editor:{props:S,created:function(){this.elementId=this.$props.id||m("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(w.a)())x(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;y.load(this.element.ownerDocument,n,x(this))}},beforeDestroy:function(){null!==Object(w.a)()&&Object(w.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(w.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&x(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}}},props:{api:Object,file:String,locales:Array},data:function(){return{data:[],unuse:{},selected_data:null,selected_lang:null,edit_height:300}},watch:{file:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.loadFile(t);case 1:case"end":return n.stop()}}),n)})))()}},computed:{},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loadFile(t.file);case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{onChangeTinyMCE:function(t){t.is_tiny_mce=!t.is_tiny_mce;var e=this.$refs.table1.$children[this.$refs.table1.$children.length-1],n=e.$children[e.$children.length-1];n.$children[n.$children.length-1].$forceUpdate()},onRowClick:function(t,e,n){this.$refs.table1.toggleRowExpansion(t)},onClickTranFromSource:function(data,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$api.translate(data.msgid,"auto",t);case 2:data.msgstr[t]=n.sent;case 3:case"end":return n.stop()}}),n)})))()},onSaveAll:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$confirm("Save?");case 2:n=$(t.locales),e.prev=3,n.s();case 5:if((r=n.n()).done){e.next=11;break}return o=r.value,e.next=9,t.$api.saveTran(t.file.substring(0,t.file.length-5),[{msgid:data.msgid,msgstr:data.msgstr[o]}],o);case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})))()},copyFromSourceAll:function(data){data.is_tiny_mce=!0;var t,e=$(this.locales);try{for(e.s();!(t=e.n()).done;){var n=t.value;data.msgstr[n]=data.msgid}}catch(t){e.e(t)}finally{e.f()}},loadFile:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,e.$api.getTran(t);case 4:r=n.sent,e.data=r.data,e.data=e.data.map((function(t){return t.is_tiny_mce=!1,t})),e.unuse=r.unuse;case 8:case"end":return n.stop()}}),n)})))()},copyFromSourceSingle:function(t,e){t.msgstr[e]=t.msgid},loadGlobalToSingle:function(){var t=this;confirm("Are you sure load global data to current translate?")&&this.$http.get("System/front_translate_twig/globalData").then((function(e){e.data.entries.forEach((function(e){var n=t.data.find((function(t){return t.msgid==e.name}));n&&(n.msgstr=e.value)}))}))},copyFromSource:function(t){this.data.forEach((function(e){e.msgstr[t]=e.msgid}))},onClickAllE2T:function(){this.data.forEach(this.onClickE2T)},onClickAllT2E:function(){this.data.forEach(this.onClickT2E)},onClickAllT2S:function(){this.data.forEach(this.onClickT2S)},onClickT2E:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.translate(t.msgstr.zh_HK,"zh-TW","en");case 2:t.msgstr.en_US=n.sent;case 3:case"end":return n.stop()}}),n)})))()},onClickT2S:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.api.query({translateT2S:{__args:{text:t.msgstr.zh_HK}}});case 2:r=n.sent,t.msgstr.zh_CN=r.data.translateT2S;case 4:case"end":return n.stop()}}),n)})))()},onClickE2T:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.translate(t.msgstr.en_US,"en","zh-TW");case 2:t.msgstr.zh_HK=n.sent;case 3:case"end":return n.stop()}}),n)})))()},onClickTranAll:function(){var t=this;this.locales.forEach((function(e){t.data.forEach(function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.translate(r.msgid,"auto",e);case 2:r.msgstr[e]=n.sent;case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}))},onClickSaveTran:function(t,e,n){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.$confirm("Save?");case 3:o.next=7;break;case 5:o.prev=5,o.t0=o.catch(0);case 7:return o.prev=7,o.next=10,r.$api.saveTran(r.file.substring(0,r.file.length-5),[{msgid:t,msgstr:e}],n);case 10:o.next=15;break;case 12:o.prev=12,o.t1=o.catch(7),r.$alert(o.t1,{type:"error"});case 15:case"end":return o.stop()}}),o,null,[[0,5],[7,12]])})))()},onClickSave:function(){},clickData:function(t,e){this.selected_data=t,this.selected_lang=e},onClickTranSource:function(t){var e=this;confirm("Are you sure want to translation from source to "+t)&&this.data.forEach(function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.translate(r.msgid,"auto",t);case 2:r.msgstr[t]=n.sent;case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())},tranSrcIfEmpty:function(t){var e=this;confirm("Are you sure want to translation from source to "+t)&&this.data.forEach(function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=r.msgstr[t]&&0!=r.msgstr[t].length){n.next=4;break}return n.next=3,e.translate(r.msgid,"auto",t);case 3:r.msgstr[t]=n.sent;case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())},onClickTran:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.translate(t.msgid,"auto",e);case 2:t.msgstr[e]=r.sent;case 3:case"end":return r.stop()}}),r)})))()}}},R=(n(359),n(46)),component=Object(R.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[t.file?n("el-table",{ref:"table1",attrs:{data:t.data,border:""},on:{"row-click":t.onRowClick}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{data:t.locales,refs:"TTable"}},[n("el-table-column",{attrs:{width:"40px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row))]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{width:"150px"},scopedSlots:t._u([{key:"default",fn:function(r){return[n("el-button-group",[n("el-button",{on:{click:function(t){e.row.msgstr[r.row]=e.row.msgid}}},[t._v("Copy from source")]),t._v(" "),n("el-button",{on:{click:function(n){return t.onClickTranFromSource(e.row,r.row)}}},[t._v("Tran from source")]),t._v(" "),n("el-button",{on:{click:function(n){return t.onClickSaveTran(e.row.msgid,e.row.msgstr[r.row],r.row)}}},[t._v("Save")])],1)]}}],null,!0)}),t._v(" "),n("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(r){return[e.row.is_tiny_mce?n("editor",{attrs:{init:{height:200,menubar:!1,plugins:["code","advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"code | undo redo | formatselect | bold italic backcolor |          alignleft aligncenter alignright alignjustify |          bullist numlist outdent indent | removeformat | help"}},model:{value:e.row.msgstr[r.row],callback:function(n){t.$set(e.row.msgstr,r.row,n)},expression:"scope.row.msgstr[ss.row]"}}):n("el-input",{attrs:{type:"textarea",autosize:{minRows:4}},model:{value:e.row.msgstr[r.row],callback:function(n){t.$set(e.row.msgstr,r.row,n)},expression:"scope.row.msgstr[ss.row]"}})]}}],null,!0)},[n("template",{slot:"header"},[n("el-button-group",[n("el-button",{on:{click:function(n){return t.copyFromSourceAll(e.row)}}},[t._v("Copy from source")]),t._v(" "),n("el-button",{on:{click:function(n){return t.onSaveAll(e.row)}}},[t._v(" Save ")]),t._v(" "),n("el-button",{on:{click:function(n){return t.onChangeTinyMCE(e.row)}}},[t._v("Toggle TinyMCE")])],1)],1)],2)],1)]}}],null,!1,3356458399)}),t._v(" "),n("el-table-column",{attrs:{label:"Source"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.msgid)+"\n      ")]}}],null,!1,3941515561)}),t._v(" "),t._l(t.locales,(function(e,r){return n("el-table-column",{key:r,attrs:{label:e},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n        "+t._s(n.row.msgstr[e])+"\n      ")]}}],null,!0)})}))],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,n){"use strict";n.r(e);n(95),n(37);var r=n(3);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={data:function(){return{locales:[],selected_file:null,props:{label:"name",children:"zones",isLeaf:"leaf"}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$api.$axios=t.$axios,e.next=3,t.$api.getLocales();case 3:t.locales=e.sent;case 4:case"end":return e.stop()}}),e)})))()},methods:{nodeClicked:function(data){this.selected_file=data.path},loadNode:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var path,c,l,f,d,p;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==t.level){r.next=2;break}return r.abrupt("return",e([{name:"pages",path:"pages"},{name:"layouts",path:"layouts"}]));case 2:return path=t.data.path,r.next=5,n.$api.getFolder(t.data.path);case 5:c=r.sent,l=[],f=o(c);try{for(f.s();!(d=f.n()).done;)p=d.value,l.push({name:p.name,path:path+"/"+p.name,leaf:"file"==p.type})}catch(t){f.e(t)}finally{f.f()}e(l);case 10:case"end":return r.stop()}}),r)})))()}}},f=n(46),component=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("el-tree",{attrs:{props:this.props,load:this.loadNode,lazy:""},on:{"node-click":this.nodeClicked}})],1),this._v(" "),e("file-translate",{attrs:{file:this.selected_file,locales:this.locales}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FileTranslate:n(361).default})}}]);