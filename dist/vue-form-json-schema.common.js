module.exports=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VFJS_EVENT_FIELD_STATE_UPDATE="VFJS_EVENT_FIELD_STATE_UPDATE",t.VFJS_EVENT_FIELD_MODEL_VALIDATE="VFJS_EVENT_FIELD_MODEL_VALIDATE",t.VFJS_EVENT_FIELD_MODEL_UPDATE="VFJS_EVENT_FIELD_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATE="VFJS_EVENT_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATED="VFJS_EVENT_MODEL_UPDATED",t.VFJS_EVENT_MODEL_VALIDATE="VFJS_EVENT_MODEL_VALIDATE",t.VFJS_EVENT_STATE_UPDATED="VFJS_EVENT_STATE_UPDATED",t.VFJS_EXTERNAL_EVENT_CHANGE="change",t.VFJS_EXTERNAL_EVENT_STATE_CHANGE="state-change",t.VFJS_EXTERNAL_EVENT_VALIDATED="validated"},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,r){var n=r(4);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},function(e,t,r){var n=r(84);e.exports=function(e,t,r){var i=null==e?void 0:n(e,t);return void 0===i?r:i}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(33);e.exports=function(e,t,r){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},function(e,t){var r=Array.isArray;e.exports=r},function(e,t,r){var n=r(67);e.exports=function(e,t,r){return null==e?e:n(e,t,r)}},function(e,t,r){var n=r(5),i=r(4);e.exports=function(e,t,r){(void 0===r||i(e[t],r))&&(void 0!==r||t in e)||n(e,t,r)}},function(e,t,r){var n=r(40),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();e.exports=o},function(e,t,r){var n=r(48)(Object.getPrototypeOf,Object);e.exports=n},function(e,t,r){var n=r(12),i=r(1);e.exports=function(e){if(!i(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){var n=r(5),i=r(4),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var s=e[t];o.call(e,t)&&i(s,r)&&(void 0!==r||t in e)||n(e,t,r)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},function(e,t,r){var n=r(6),i=r(68),o=r(70),s=r(72);e.exports=function(e,t){return n(e)?e:i(e,t)?[e]:o(s(e))}},function(e,t){e.exports=function(e){return e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(76)),o=n(r(77)),s=n(r(78)),u=n(r(97)),f=n(r(98)),a={computed:i.default,data:o.default,props:u.default,methods:s.default,watch:f.default};t.default=a},function(e,t){e.exports=require("vue")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.vfjsViewer=t.vfjsGlobalMixin=t.vfjsFieldMixin=void 0;var i=n(r(21)),o=n(r(18)),s=n(r(99));t.vfjsFieldMixin=i.default,t.vfjsGlobalMixin=o.default,t.vfjsViewer=s.default,t.default=s.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(22)),o=n(r(23)),s=n(r(75)),u={data:i.default,props:s.default,methods:o.default};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{prefixes:["domProps","hook","nativeOn","on"]}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=n(r(24)),s=n(r(66)),u=n(r(74)),f=i({},o.default,s.default,u.default);t.default=f},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(25)),o={vfjsFieldGetAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.class,o=n(t,["class"]),s=e.class,u=n(e,["class"]);if(!u)return{};var f=(0,i.default)({},this.vfjsFieldHelperFormatClasses(s),this.vfjsFieldHelperFormatClasses(r));return(0,i.default)({},o,u,{class:f})}};t.default=o},function(e,t,r){var n=r(26),i=r(59)(function(e,t,r){n(e,t,r)});e.exports=i},function(e,t,r){function n(e,t,r,c,l){e!==t&&s(t,function(s,a){if(f(s))l||(l=new i),u(e,t,a,r,n,c,l);else{var d=c?c(e[a],s,a+"",e,t,l):void 0;void 0===d&&(d=s),o(e,a,d)}},a)}var i=r(27),o=r(8),s=r(35),u=r(37),f=r(1),a=r(15);e.exports=n},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var i=r(28),o=r(29),s=r(30),u=r(31),f=r(32);n.prototype.clear=i,n.prototype.delete=o,n.prototype.get=s,n.prototype.has=u,n.prototype.set=f,e.exports=n},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,r){var n=r(2),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():i.call(t,r,1),--this.size,0))}},function(e,t,r){var n=r(2);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},function(e,t,r){var n=r(2);e.exports=function(e){return n(this.__data__,e)>-1}},function(e,t,r){var n=r(2);e.exports=function(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}},function(e,t,r){var n=r(34),i=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,r){var n=r(36)();e.exports=n},function(e,t){e.exports=function(e){return function(t,r,n){for(var i=-1,o=Object(t),s=n(t),u=s.length;u--;){var f=s[e?u:++i];if(!1===r(o[f],f,o))break}return t}}},function(e,t,r){var n=r(8),i=r(38),o=r(42),s=r(45),u=r(46),f=r(50),a=r(6),c=r(51),l=r(54),d=r(11),v=r(1),j=r(55),p=r(56),h=r(57);e.exports=function(e,t,r,_,V,E,y){var F=e[r],g=t[r],b=y.get(g);if(b)n(e,r,b);else{var O=E?E(F,g,r+"",e,t,y):void 0,m=void 0===O;if(m){var M=a(g),A=!M&&l(g),S=!M&&!A&&p(g);O=g,M||A||S?a(F)?O=F:c(F)?O=s(F):A?(m=!1,O=i(g,!0)):S?(m=!1,O=o(g,!0)):O=[]:j(g)||f(g)?(O=F,f(F)?O=h(F):(!v(F)||_&&d(F))&&(O=u(g))):m=!1}m&&(y.set(g,O),V(O,g,_,E,y),y.delete(g)),n(e,r,O)}}},function(e,t,r){(function(e){var n=r(9),i="object"==typeof t&&t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===i?n.Buffer:void 0,u=s?s.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=u?u(r):new e.constructor(r);return e.copy(n),n}}).call(t,r(39)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(41))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(43);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},function(e,t,r){var n=r(44);e.exports=function(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}},function(e,t,r){var n=r(9).Uint8Array;e.exports=n},function(e,t){e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},function(e,t,r){var n=r(47),i=r(10),o=r(49);e.exports=function(e){return"function"!=typeof e.constructor||o(e)?{}:n(i(e))}},function(e,t,r){var n=r(1),i=Object.create,o=function(){function e(){}return function(t){if(!n(t))return{};if(i)return i(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=o},function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(52),i=r(13);e.exports=function(e){return i(e)&&n(e)}},function(e,t,r){var n=r(11),i=r(53);e.exports=function(e){return null!=e&&i(e.length)&&!n(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(12),i=r(10),o=r(13),s=Function.prototype,u=Object.prototype,f=s.toString,a=u.hasOwnProperty,c=f.call(Object);e.exports=function(e){if(!o(e)||"[object Object]"!=n(e))return!1;var t=i(e);if(null===t)return!0;var r=a.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==c}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(58),i=r(15);e.exports=function(e){return n(e,i(e))}},function(e,t,r){var n=r(14),i=r(5);e.exports=function(e,t,r,o){var s=!r;r||(r={});for(var u=-1,f=t.length;++u<f;){var a=t[u],c=o?o(r[a],e[a],a,r,e):void 0;void 0===c&&(c=e[a]),s?i(r,a,c):n(r,a,c)}return r}},function(e,t,r){var n=r(60),i=r(65);e.exports=function(e){return n(function(t,r){var n=-1,o=r.length,s=o>1?r[o-1]:void 0,u=o>2?r[2]:void 0;for(s=e.length>3&&"function"==typeof s?(o--,s):void 0,u&&i(r[0],r[1],u)&&(s=o<3?void 0:s,o=1),t=Object(t);++n<o;){var f=r[n];f&&e(t,f,n,s)}return t})}},function(e,t,r){var n=r(61),i=r(62),o=r(64);e.exports=function(e,t){return o(i(e,t,n),e+"")}},function(e,t){e.exports=function(e){return e}},function(e,t,r){var n=r(63),i=Math.max;e.exports=function(e,t,r){return t=i(void 0===t?e.length-1:t,0),function(){for(var o=arguments,s=-1,u=i(o.length-t,0),f=Array(u);++s<u;)f[s]=o[t+s];s=-1;for(var a=Array(t+1);++s<t;)a[s]=o[s];return a[t]=r(f),n(e,this,a)}}},function(e,t){e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(){return!1}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o={vfjsFieldFormatEvents:function(e){return Array.isArray(e)?this.vfjsFieldFormatEventsReducer(e):this.vfjsFieldFormatEventsReducer(Object.keys(e))},vfjsFieldHelperFormatClasses:function(e){return e?Array.isArray(e)?e.reduce(function(e,t){return i({},e,function(e,t,r){return t in e?Object.defineProperty(e,t,{value:!0,enumerable:!0,configurable:!0,writable:!0}):e[t]=!0,e}({},t))},{}):e:{}},vfjsFieldHelperEventHandler:function(e,t){var r=this;return function(e){return"function"==typeof t?r.setVfjsFieldModel(t(e)):e instanceof Event&&e.target&&e.target.value?r.setVfjsFieldModel(e.target.value):r.setVfjsFieldModel(e)}},vfjsFieldFormatEventsReducer:function(e){var t=this;return e.reduce(function(r,i){return(0,n.default)(Object.assign({},r),t.vfjsFieldHelperFormatEventListenerKey(i),t.vfjsFieldHelperEventHandler(i,e[i]))},{})},vfjsFieldHelperFormatEventListenerKey:function(e){var t=this.prefixes.find(function(t){return e.match(t)});return t?t+"."+String(e).replace(t,"").toLowerCase():e}};t.default=o},function(e,t,r){var n=r(14),i=r(16),o=r(73),s=r(1),u=r(17);e.exports=function(e,t,r,f){if(!s(e))return e;for(var a=-1,c=(t=i(t,e)).length,l=c-1,d=e;null!=d&&++a<c;){var v=u(t[a]),j=r;if(a!=l){var p=d[v];void 0===(j=f?f(p,v,d):void 0)&&(j=s(p)?p:o(t[a+1])?[]:{})}n(d,v,j),d=d[v]}return e}},function(e,t,r){var n=r(6),i=r(69),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!i(e))||s.test(e)||!o.test(e)||null!=t&&e in Object(t)}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=r(71)(function(e){var t=[];return n.test(e)&&t.push(""),e.replace(i,function(e,r,n,i){t.push(n?i.replace(o,"$1"):r||e)}),t});e.exports=s},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t){var r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setVfjsFieldState:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsFieldModel:function(e,t){var r=this;return new Promise(function(i,o){r.vfjsBus.$emit(n.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||r.vfjsFieldModelKey,value:e,cb:function(e){e&&e.length>0&&o(e),i()}})})}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={children:{type:Array,default:function(){return[]}},classNames:{type:[String,Array,Object],default:function(){return[]}},model:{type:String,required:!0},schema:{type:Object},state:{type:Object},value:{type:null},vfjsBus:{type:Object,required:!0},vfjsFieldErrors:{type:Array},vfjsFieldOptions:{type:Object},vfjsFieldModel:{type:null},vfjsFieldModelKey:{type:String,required:!0},vfjsFieldSchema:{type:Object},vfjsFieldState:{type:Object},vfjsFieldUiSchema:{type:Object},vfjsFieldModelValue:{type:null},vfjsModel:{type:Object,required:!0},vfjsState:{type:Object}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={vfjsSchemaValid:function(){return this.vfjsSchema.every(this.isVfjsFieldSchemaValid)},vfjsModelValid:function(){return this.vfjsSchema.every(this.isVfjsFieldModelValid)},vfjsFields:function(){return this.vfjsFieldsActive.map(this.vfjsHelperCreateField)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(){return{vfjsBus:{},vfjsComponents:{},vfjsEvents:[n.VFJS_EVENT_FIELD_MODEL_UPDATE,n.VFJS_EVENT_FIELD_MODEL_VALIDATE,n.VFJS_EVENT_FIELD_STATE_UPDATE,n.VFJS_EVENT_MODEL_UPDATE,n.VFJS_EVENT_MODEL_UPDATED,n.VFJS_EVENT_MODEL_VALIDATE,n.VFJS_EVENT_STATE_UPDATED],vfjsFieldsActive:[],vfjsListeners:[],vfjsModel:{},vfjsSchema:{},vfjsUiSchema:[],vfjsState:{},vfjsValidator:null}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=n(r(79)),s=n(r(80)),u=n(r(81)),f=n(r(82)),a=n(r(86)),c=n(r(89)),l=n(r(91)),d=n(r(94)),v=i({},o.default,u.default,s.default,f.default,c.default,a.default,l.default,d.default);t.default=v},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(7)),s=n(r(19)),u=r(0),f={addVfjsListener:function(e,t){var r=this.vfjsBus.$on(e,function(r){return t(e,r)});this.vfjsListeners.push(r)},addVfjsListeners:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1];t.forEach(function(t){return e.addVfjsListener(t,r)})},removeVfjsListener:function(e){this.vfjsBus.$off(e)},removeVfjsListeners:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(this.removeVfjsListener)},removeVfjsListenersAll:function(){this.vfjsBus.$off(),this.vfjsListeners=[]},vfjsBusEventHandler:function(e,t){var r,n=this,s=(r={},i(r,u.VFJS_EVENT_FIELD_MODEL_VALIDATE,function(e){var t=e.key,r=e.value,i=e.cb,o=n.vfjsHelperApplyFieldModel(t,r);n.vfjsBus.$emit(u.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:o,cb:function(e){var o=n.getVfjsFieldModelValidationErrors(t,r),s=Object.assign({},n.getVfjsFieldState(t),{vfjsFieldErrors:o});n.setVfjsFieldState(s,t),i&&"function"==typeof i&&i(o)}})}),i(r,u.VFJS_EVENT_FIELD_MODEL_UPDATE,function(e){var t=e.key,r=e.value,i=e.cb;n.vfjsBus.$emit(u.VFJS_EVENT_FIELD_MODEL_VALIDATE,{key:t,value:r,cb:function(e){var o=n.vfjsHelperApplyFieldModel(t,r);n.setVfjsModel(o),i&&"function"==typeof i&&i(e)}})}),i(r,u.VFJS_EVENT_FIELD_STATE_UPDATE,function(e){var t=e.key,r=e.value,i=Object.assign({},n.getVfjsState());(0,o.default)(i,t,r),n.setVfjsState(i)}),i(r,u.VFJS_EVENT_MODEL_VALIDATE,function(e){var t=e.vfjsModel,r=e.cb,i=n.getVfjsValidationErrors(t),o=Object.assign({},n.getVfjsState(),{vfjsErrors:i});n.setVfjsState(o),r&&"function"==typeof r&&r(i)}),i(r,u.VFJS_EVENT_MODEL_UPDATED,function(){n.setVfjsUiFieldsActive(),n.$emit(u.VFJS_EXTERNAL_EVENT_CHANGE,n.getVfjsModel())}),i(r,u.VFJS_EVENT_STATE_UPDATED,function(){n.$emit(u.VFJS_EXTERNAL_EVENT_STATE_CHANGE,n.getVfjsState())}),r);e&&e in s&&s[e](t)},vfjsBusInitialize:function(){this.vfjsBus=new s.default}};t.default=f},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(7)),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=n(r(19)),a={vfjsHelperCreateField:function(e){var t=this,r=e.children,n=void 0===r?[]:r,s=e.component,a=e.model,c=void 0===a?"":a,l=e.field,d=e.fieldOptions,v=void 0===d?{}:d,j=o(e,["children","component","model","field","fieldOptions"]),p=this.vfjsHelperFieldIsArray(c),h=this.getVfjsFieldSchema(c)||{},_=this.getVfjsFieldModel(c),V=this.getVfjsFieldState(c)||{},E=void 0!==_?_:null,y=v.value||E;return{component:s||this.vfjsComponents[l]||f.default.component(l),children:p?n.reduce(function(e,r){return[].concat(i(e),i(r.map(t.vfjsHelperCreateField)))},[]):n.map(this.vfjsHelperCreateField),props:u({},j,v,{children:n,model:c,schema:h,state:V,uiSchema:e,value:y,vfjsBus:this.vfjsBus,vfjsFieldOptions:v,vfjsModel:this.getVfjsModel(),vfjsState:this.getVfjsState(),vfjsFieldState:V,vfjsFieldModel:y,vfjsFieldModelKey:c,vfjsFieldModelValue:y,vfjsFieldSchema:h,vfjsFieldUiSchema:e})}},vfjsHelperApplyFieldModel:function(e,t){var r=Object.assign({},this.getVfjsModel());return(0,s.default)(r,e,t),r},vfjsHelperChildArrayMapper:function(e,t,r){var n=e.model,i=e.children,s=void 0===i?[]:i,f=o(e,["model","children"]);return u({},f,{model:this.vfjsHelperGetChildArrayModelAtIndex(n,t,r),children:this.vfjsHelperChildArrayReducerMapper(t,s,r)})},vfjsHelperChildArrayReducerMapper:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];return r.reduce(function(r,o){return[].concat(i(r),[t.vfjsHelperChildArrayMapper(o,e,n)])},[])},vfjsHelperGetChildArrayModelAtIndex:function(e,t,r){var n=this.vfjsHelperGetRelativeModel(e,t);return n?t+"."+r+"."+n:e},vfjsHelperGetRelativeModel:function(e,t){return e?String(e).substr(t.length+1):e},vfjsHelperFieldIsArray:function(e){if(!e)return!1;var t=this.getVfjsFieldSchema(e);return!!t&&"array"===t.type},vfjsHelperIsNumber:function(e){return!Number.isNaN(parseFloat(e))&&Number.isFinite(parseFloat(e))}};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={vfjsDestroy:function(){var e=this;this.vfjsEvents.forEach(function(t){return e.removeVfjsListener(t)})},vfjsInitialize:function(){this.vfjsBusInitialize(),this.setVfjsModel(this.model),this.vfjsComponents=Object.assign({},this.components),this.vfjsSchema=Object.assign({},this.schema),this.vfjsUiSchema=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.uiSchema)),this.vfjsOptions=Object.assign({},this.options),this.addVfjsListeners(this.vfjsEvents,this.vfjsBusEventHandler),this.vfjsValidationInitialize(),this.setVfjsUiFieldsActive()}};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=n(r(83)),s=n(r(85)),u=i({},o.default,s.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),i={getVfjsFieldModel:function(e){return e?this.getVfjsModel(e):this.vfjsFieldModelKey?this.getVfjsModel(this.vfjsFieldModelKey):null},getVfjsModel:function(e){return e?(0,n.default)(this.vfjsModel,e):this.vfjsModel}};t.default=i},function(e,t,r){var n=r(16),i=r(17);e.exports=function(e,t){for(var r=0,o=(t=n(t,e)).length;null!=e&&r<o;)e=e[i(t[r++])];return r&&r==o?e:void 0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setVfjsFieldModel:function(e,t){var r=this;return new Promise(function(i,o){r.vfjsBus.$emit(n.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||r.vfjsFieldModelKey,value:e,cb:function(e){e&&e.length>0&&o(e),i()}})})},setVfjsModel:function(e){this.vfjsModel=Object.assign({},this.getVfjsModel(),e),this.vfjsBus.$emit(n.VFJS_EVENT_MODEL_UPDATED,this.getVfjsModel())}};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=n(r(87)),s=n(r(88)),u=i({},o.default,s.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),i={getVfjsState:function(e){return e?(0,n.default)(this.vfjsState,e):this.vfjsState},getVfjsFieldState:function(e){return e?this.getVfjsState(e):this.vfjsFieldModelKey?this.getVfjsState(this.vfjsFieldModelKey):null}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setVfjsFieldState:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsState:function(e){this.vfjsState=Object.assign({},this.getVfjsState(),e),this.vfjsBus.$emit(n.VFJS_EVENT_STATE_UPDATED)}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e})({},function(e){return e&&e.__esModule?e:{default:e}}(r(90)).default);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),i={getVfjsFieldSchema:function(e){return e?this.getVfjsSchema(e):this.vfjsFieldModelKey?this.getVfjsSchema(this.vfjsFieldModelKey):null},getVfjsSchema:function(e){return e?(0,n.default)(this.getVfjsSchema.properties,e)||this.getVfjsSchemaFallback(e):this.vfjsSchema},getVfjsSchemaPath:function(e,t){var r=this.getVfjsSchema();if(!e)return r.items?this.getVfjsSchemaPath("items"):"properties."+t;var i=(0,n.default)(r,e);if(i){if("array"===i.type||i.items instanceof Array){var o=this.getVfjsSchemaPath(e+".items");return this.getVfjsSchemaPath(o+".0")}if("object"===i.type||i.properties instanceof Object)return this.getVfjsSchemaPath(e+".properties")}return t?e+"."+t:e},getVfjsSchemaFallback:function(e){var t=String(e).split(".").reduce(this.getVfjsSchemaPath,"");return(0,n.default)(this.getVfjsSchema(),t)}};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=n(r(92)),s=n(r(93)),u=i({},o.default,s.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o={getVfjsUiFieldActiveDeep:function(e,t){var r=this;return!(!e||!e.properties)&&(!(!e[t]&&!e.properties[t])||Object.keys(e.properties).some(function(n){return!!r.getVfjsFieldModelValid(n)&&r.getVfjsUiFieldActiveDeep(e.properties[n].properties,t)}))},getVfjsFieldActive:function(e){if(this.getVfjsFieldSchema(e)||this.getVfjsFieldModel(e))return!0;var t=this.getVfjsSchema();return this.getVfjsUiFieldActiveDeep(t.dependencies,e)},getVfjsUiFieldArrayChildrenActive:function(e,t){var r=this;return(this.getVfjsFieldModel(e)||[]).map(function(n,i){return r.vfjsHelperChildArrayReducerMapper(e,t,i)}).map(this.getVfjsUiFieldsActive)},getVfjsUiFieldActive:function(e){var t=e.children,r=void 0===t?[]:t,n=e.model,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","model"]);return!(n&&!this.getVfjsFieldActive(n))&&(this.vfjsHelperFieldIsArray(n)?i({},o,{model:n,children:this.getVfjsUiFieldArrayChildrenActive(n,r)}):i({},o,{model:n,children:this.getVfjsUiFieldsActive(r)}))},getVfjsUiFieldsActive:function(e){var t=this;return e.reduce(function(e,r){if(r){var n=t.getVfjsUiFieldActive(r);n&&e.push(n)}return e},[])},getVfjsFieldUiSchema:function(e){return this.getVfjsUiSchema(e)},getVfjsUiSchema:function(e){return e?(0,n.default)(this.vfjsUiSchema,e):this.vfjsUiSchema}};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={setVfjsUiFieldsActive:function(){var e=this;this.vfjsFieldsActive=this.vfjsUiSchema.reduce(function(t,r){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t),[e.getVfjsUiFieldActive(r)])},[])}};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=n(r(95)),s=n(r(96)),u=r(0),f=i({vfjsValidationInitialize:function(){this.ajv=new o.default,this.vfjsOptions.validate&&this.vfjsOptions.validateOnLoad&&this.vfjsBus.$emit(u.VFJS_EVENT_MODEL_VALIDATE)}},s.default);t.default=f},function(e,t){e.exports=require("ajv")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={getVfjsFieldUiSchemaValidationErrors:function(e){var t=e.component,r=e.model,n=e.type,i=[];return t||this.getVfjsFieldComponent(n)||i.push("Unregistered component type: "+n),r&&String(r)!==r&&i.push('The field\'s "model" property must be a string!'),i},getVfjsFieldUiSchemaValid:function(e){return 0===this.getVfjsFieldUiSchemaValidationErrors(e).length&&e.children.every(this.getVfjsFieldUiSchemaValid)},getVfjsFieldModelValid:function(e,t){return 0===this.getVfjsFieldModelValidationErrors(e,t).length},getVfjsFieldModelValidationErrors:function(e,t){return this.getVfjsModelValidationErrors(e,t)},getVfjsModelValidationErrors:function(e,t){var r=e?this.getVfjsFieldSchema(e):this.getVfjsSchema();if(!r)return[];var n=void 0!==t?t:this.getVfjsFieldModel(e),i=this.ajv.validate(r,n);return n&&!i?this.ajv.errors:[]},getVfjsValid:function(){return 0===this.getVfjsValidationErrors().length},getVfjsValidationErrors:function(e){return this.ajv.validate(this.getVfjsSchema(),e||this.getVfjsModel())?[]:this.ajv.errors}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={components:{type:Object,default:function(){return{}}},model:{type:Object,default:function(){return{}}},schema:{type:Object,required:!0,default:function(){return[]}},options:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},uiSchema:{type:Array,required:!0,default:function(){return{}}}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={model:function(e){this.vfjsModel=Object.assign({},e),this.setVfjsUiFieldsActive()},schema:function(e){this.vfjsSchema=Object.assign({},e),this.setVfjsUiFieldsActive()},uiSchema:function(e){this.vfjsUiSchema=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e)),this.setVfjsUiFieldsActive()}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"vue-form-json-schema-viewer",mixins:[function(e){return e&&e.__esModule?e:{default:e}}(r(18)).default],computed:{fields:function(){return this.createFields(this.vfjsFields)}},methods:{createField:function(e){var t=e.component,r=e.children,n=e.props;return!!t&&this.$createElement(t,{props:n},this.createFields(r))},createFields:function(e){return e.map(this.createField).filter(function(e){return e})}},created:function(){this.vfjsInitialize()},beforeDestroy:function(){this.vfjsDestroy()},render:function(){return this.$createElement(this.tag,this.fields)}};t.default=n}]);
//# sourceMappingURL=vue-form-json-schema.common.js.map