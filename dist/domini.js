!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("DoMini",[],t):"object"==typeof exports?exports.DoMini=t():e.DoMini=t()}(window,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};if(e.d(t,{default:()=>r}),void 0===window.DoMini){var n=function(e,t){return void 0!==arguments[2]?this.constructor.call(this,e,t):1!=arguments.length||"function"!=typeof arguments[0]?new n(e,t,!0):void("complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?arguments[0].apply(this,[n]):window.addEventListener("DOMContentLoaded",(()=>{arguments[0].apply(this,[n])})))};n.prototype=n.fn={constructor:function(e,t){if(this.length=0,void 0!==t){if(t instanceof n)return t.find(e);if(t instanceof Element||"string"==typeof t)return n(t).find(e)}else if("string"==typeof e&&""!=e)this.push(...this._(e));else{if(e instanceof n)return e;e instanceof Element&&this.push(e)}return this},_:function(e){return"<"===e.charAt(0)?n._fn.createElementsFromHTML(e):[...document.querySelectorAll(e)]},push:Array.prototype.push,pop:Array.prototype.pop,sort:Array.prototype.sort,splice:Array.prototype.splice},n.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator],n._fn={}}else n=window.DoMini;const i=n;i.fn.get=function(e){return void 0===e?Array.from(this):this[e]},i.fn.extend=function(){for(let e=1;e<arguments.length;e++)for(let t in arguments[e])arguments[e].hasOwnProperty(t)&&(arguments[0][t]=arguments[e][t]);return arguments[0]},i.fn.forEach=function(e){return this.get().forEach((function(t,n,i){e.apply(t,[t,n,i])})),this},i.fn.each=function(e){return this.get().forEach((function(t,n,i){e.apply(t,[n,t,i])})),this},i.fn.css=function(e,t){let n,i=this.get();for(let o=0;o<i.length;o++)if(n=i[o],1==arguments.length){if("object"!=typeof e)return window.getComputedStyle(n)[e];Object.keys(e).forEach((function(t){n.style[t]=e[t]}))}else n.style[e]=t;return this},i.fn.hasClass=function(e){let t=this.get(0);return null!=t&&t.classList.contains(e)},i.fn.addClass=function(e){let t=e;return"string"==typeof e&&(t=e.split(" ")),t=t.filter((function(e){return""!==e.trim()})),t.length>0&&this.forEach((function(e){e.classList.add.apply(e.classList,t)})),this},i.fn.removeClass=function(e){if(void 0!==e){let t=e;"string"==typeof e&&(t=e.split(" ")),t=t.filter((function(e){return""!==e.trim()})),t.length>0&&this.forEach((function(e){e.classList.remove.apply(e.classList,t)}))}else this.forEach((function(e){e.classList.length>0&&e.classList.remove.apply(e.classList,e.classList)}));return this},i.fn.isVisible=function(){let e,t=this.get(0),n=!0;for(;null!==t;){if(e=window.getComputedStyle(t),"none"==e.display||"hidden"==e.visibility||0==e.opacity){n=!1;break}t=t.parentElement}return n},i.fn.val=function(e){let t;if(1==arguments.length){for(const t of this)if("select-multiple"==t.type){e="string"==typeof e?e.split(","):e;for(let n,i=0,o=t.options.length;i<o;i++)n=t.options[i],n.selected=-1!=e.indexOf(n.value)}else t.value=e;t=this}else{let e=this.get(0);null!=e&&(t="select-multiple"==e.type?Array.prototype.map.call(e.selectedOptions,(function(e){return e.value})):e.value)}return t},i.fn.attr=function(e,t){let n;for(const i of this)if(2==arguments.length)i.setAttribute(e,t),n=this;else{if("object"!=typeof e){n=i.getAttribute(e);break}Object.keys(e).forEach((function(t){i.setAttribute(t,e[t])}))}return n},i.fn.removeAttr=function(e){for(const t of this)t.removeAttribute(e);return this},i.fn.prop=function(e,t){let n;for(const i of this){if(2!=arguments.length){n=void 0!==i[e]?i[e]:null;break}i[e]=t}return 2==arguments.length?this:n},i.fn.data=function(e,t){const n=e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}));if(2==arguments.length){for(const e of this)null!=e&&(e.dataset[n]=t);return this}{let e=this.get(0);return null!=e&&void 0!==e.dataset[n]?e.dataset[n]:""}},i.fn.html=function(e){if(1==arguments.length){for(const t of this)t.innerHTML=e;return this}{let e=this.get(0);return null==e?"":e.innerHTML}},i.fn.text=function(e){if(1==arguments.length){for(const t of this)t.textContent=e;return this}{let e=this.get(0);return null==e?"":e.textContent}},i.fn.position=function(){let e=this.get(0);return null!=e?{top:e.offsetTop,left:e.offsetLeft}:{top:0,left:0}},i.fn.offset=function(){let e=this.get(0);return null!=e?i._fn.hasFixedParent(e)?e.getBoundingClientRect():i._fn.absolutePosition(e):{top:0,left:0}},i.fn.outerWidth=function(e){e=e||!1;let t=this.get(0);return null!=t?e?parseInt(t.offsetWidth)+parseInt(this.css("marginLeft"))+parseInt(this.css("marginRight")):parseInt(t.offsetWidth):0},i.fn.outerHeight=function(e){e=e||!1;let t=this.get(0);return null!=t?e?parseInt(t.offsetHeight)+parseInt(this.css("marginTop"))+parseInt(this.css("marginBottom")):parseInt(t.offsetHeight):0},i.fn.noPaddingHeight=function(e){return e=e||!1,this.length>0?e?parseInt(this.css("height"))+parseInt(this.css("marginTop"))+parseInt(this.css("marginBottom")):parseInt(this.css("height")):0},i.fn.noPaddingWidth=function(e){return e=e||!1,this.length>0?e?parseInt(this.css("width"))+parseInt(this.css("marginLeft"))+parseInt(this.css("marginRight")):parseInt(this.css("width")):0},i.fn.innerWidth=function(){let e=this.get(0);if(null!=e){let t=window.getComputedStyle(e);return this.outerWidth()-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}return 0},i.fn.width=function(){return this.outerWidth()},i.fn.height=function(){return this.outerHeight()},i.fn.on=function(){let e=arguments,t=function(e,t){let n;if("mouseenter"==t.type||"mouseleave"==t.type||"mouseover"==t.type){let o=document.elementFromPoint(t.clientX,t.clientY);if(!o.matches(e[1]))for(;(o=o.parentElement)&&!o.matches(e[1]););null!=o&&(n=i(o))}else n=i(t.target).closest(e[1]);if(null!=n&&n.closest(this).length>0){let i=[];if(i.push(t),void 0!==e[4])for(let t=4;t<e.length;t++)i.push(e[t]);e[2].apply(n.get(0),i)}},n=e[0].split(" ");for(let o=0;o<n.length;o++){let r=n[o];if("string"==typeof e[1])this.forEach((function(n){if(!i._fn.hasEventListener(n,r,e[2])){let i=t.bind(n,e);n.addEventListener(r,i,e[3]),n._domini_events=void 0===n._domini_events?[]:n._domini_events,n._domini_events.push({type:r,selector:e[1],func:i,trigger:e[2],args:e[3]})}}));else for(let t=0;t<n.length;t++){let o=n[t];this.forEach((function(t){i._fn.hasEventListener(t,o,e[1])||(t.addEventListener(o,e[1],e[2]),t._domini_events=void 0===t._domini_events?[]:t._domini_events,t._domini_events.push({type:o,func:e[1],trigger:e[1],args:e[2]}))}))}}return this},i.fn.off=function(e,t){return this.forEach((function(n){if(void 0!==n._domini_events&&n._domini_events.length>0)if(void 0===e){let e;for(;e=n._domini_events.pop();)n.removeEventListener(e.type,e.func,e.args);n._domini_events=[]}else e.split(" ").forEach((function(e){let i,o=[];for(;i=n._domini_events.pop();)i.type!=e||void 0!==t&&i.trigger!=t?o.push(i):n.removeEventListener(e,i.func,i.args);n._domini_events=o}))})),this},i.fn.offForced=function(){let e=this;return this.forEach((function(t,n){let i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),e[n]=i})),this},i.fn.trigger=function(e,t,n,o){return n=n||!1,o=o||!1,this.forEach((function(r){let s=!1;if(o&&"undefined"!=typeof jQuery&&void 0!==jQuery._data&&void 0!==jQuery._data(r,"events")&&void 0!==jQuery._data(r,"events")[e]&&(jQuery(r).trigger(e,t),s=!0),!s&&n){let n=new Event(e);n.detail=t,r.dispatchEvent(n)}if(void 0!==r._domini_events)r._domini_events.forEach((function(n){if(n.type==e){let i=new Event(e);n.trigger.apply(r,[i].concat(t))}}));else{let n=!1,o=r;for(;o=o.parentElement,null!=o&&(void 0!==o._domini_events&&o._domini_events.forEach((function(s){if(void 0!==s.selector){let l=i(o).find(s.selector);if(l.length>0&&l.get().indexOf(r)>=0&&s.type==e){let i=new Event(e);s.trigger.apply(r,[i].concat(t)),n=!0}}})),!n););}})),this},i.fn.clear=function(){for(const e of this)delete e._domini_events;return this},i.fn.clone=function(){let e=[];for(const t of this)e.push(t.cloneNode(!0));return i().add(e)},i.fn.detach=function(e){let t=this,n=[];void 0!==e&&(t=this.find(e));for(const e of t)null!=e.parentElement&&n.push(e.parentElement.removeChild(e));return i().add(n)},i.fn.remove=function(e){return this.detach(e).off().clear()},i.fn.prepend=function(e){if((e=i._fn.ElementArrayFromAny(e)).length>0)for(const t of this)for(const n of e)t.insertBefore(n,t.children[0]);return this},i.fn.append=function(e){if((e=i._fn.ElementArrayFromAny(e)).length>0)for(const t of this)for(const n of e)t.appendChild(n);return this},i.fn.is=function(e){let t=!1;for(const n of this)if(n.matches(e)){t=!0;break}return t},i.fn.parent=function(e){let t=[];for(const n of this){let i=n.parentElement;"string"==typeof e&&(null==i||i.matches(e)||(i=null)),t.push(i)}return i().add(t)},i.fn.copy=function(e,t){let n,i,o;if("object"!=typeof e||null===e)return n=e,n;for(i in n=new e.constructor,e)e.hasOwnProperty(i)&&(o=typeof e[i],t&&"object"===o&&null!==e[i]?n[i]=this.copy(e[i]):n[i]=e[i]);return n},i.fn.first=function(){return i(this[0])},i.fn.last=function(){return i(this[this.length-1])},i.fn.prev=function(e){let t=[];for(const n of this){let i;if("string"==typeof e)for(i=n.previousElementSibling;null!=i;){if(i.matches(e)){t.push(i);break}i=i.previousElementSibling}else t.push(n.previousElementSibling)}return i(null).add(t)},i.fn.next=function(e){let t=[];for(const n of this){let i;if("string"==typeof e)for(i=n.nextElementSibling;null!=i;){if(i.matches(e)){t.includes(i)||t.push(i);break}i=i.nextElementSibling}else t.push(n.nextElementSibling)}return i(null).add(t)},i.fn.closest=function(e){let t=[];for(let n of this)if("string"==typeof e&&""!==e){for(;(n=n.parentElement)&&!n.matches(e););t.includes(n)||t.push(n)}else{if((e=e instanceof i?e.get(0):e)instanceof Element)for(;(n=n.parentElement)&&n!==e;);else n=null;t.includes(n)||t.push(n)}return i().add(t)},i.fn.add=function(e){let t=i._fn.ElementArrayFromAny(e);for(const e of t)Array.from(this).includes(e)||this.push(e);return this},i.fn.find=function(e){const t=new i;if("string"==typeof e){let n=[];this.get().forEach((function(t){n=n.concat(Array.from(t.querySelectorAll(e)))})),n.length>0&&t.add(n)}return t},i._fn.bodyTransform=function(){let e=0,t=0;if("undefined"!=typeof WebKitCSSMatrix){let n=window.getComputedStyle(document.body);if(void 0!==n.transform){let i=new WebKitCSSMatrix(n.transform);"undefined"!=i.m41&&(e=i.m41),"undefined"!=i.m42&&(t=i.m42)}}return{x:e,y:t}},i._fn.bodyTransformY=function(){return this.bodyTransform().y},i._fn.bodyTransformX=function(){return this.bodyTransform().x},i._fn.hasFixedParent=function(e){if(0!=i._fn.bodyTransformY())return!1;do{if("fixed"==window.getComputedStyle(e).position)return!0}while(e=e.parentElement);return!1},i._fn.hasEventListener=function(e,t,n){if(void 0===e._domini_events)return!1;for(let i=0;i<e._domini_events.length;i++)if(e._domini_events[i].trigger==n&&e._domini_events[i].type==t)return!0;return!1},i._fn.allDescendants=function(e){let t=[],n=this;return Array.isArray(e)||(e=[e]),e.forEach((function(e){for(let i=0;i<e.childNodes.length;i++){let o=e.childNodes[i];t.push(o),t=t.concat(n.allDescendants(o))}})),t},i._fn.createElementsFromHTML=function(e){let t=document.createElement("template");return t.innerHTML=e.replace(/(\r\n|\n|\r)/gm,""),[...t.content.childNodes]},i._fn.ElementArrayFromAny=function(e){if("string"==typeof e)e=i(e).get();else if(e instanceof i)e=e.get();else if(e instanceof Element)e=[e];else{if(!(e instanceof Array))return[];e=e.filter((e=>e instanceof Element))}return e},i._fn.absolutePosition=function(e){if(!e.getClientRects().length)return{top:0,left:0};let t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView;return{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}},i._fn.plugin=function(e,t){i.fn[e]=function(n){return void 0!==n&&t[n]?t[n].apply(this,Array.prototype.slice.call(arguments,1)):this.each((function(i){i["domini_"+e]=Object.create(t).init(n,i)}))}},document.dispatchEvent(new Event("domini-dom-core-loaded"));const o=i;i.fn.animate=function(e,t,n){t=t||200,n=n||"easeInOutQuad";for(const o of this){let r,s,l,f,a,c=0,u=60,h={},d={};if(l=this.prop("_domini_animations"),l=null==l?[]:l,!1===e)l.forEach((function(e){clearInterval(e)}));else{function p(){c++,c>r?clearInterval(f):(s=a(c/r),Object.keys(d).forEach((function(e){e.indexOf("scroll")>-1?o[e]=h[e]+d[e]*s:o.style[e]=h[e]+d[e]*s+"px"})))}a=i.fn.animate.easing[n]??i.fn.animate.easing.easeInOutQuad,Object.keys(e).forEach((function(t){t.indexOf("scroll")>-1?(h[t]=o[t],d[t]=e[t]-h[t]):(h[t]=parseInt(window.getComputedStyle(o)[t]),d[t]=e[t]-h[t])})),r=t/1e3*u,f=setInterval(p,1e3/u),l.push(f),this.prop("_domini_animations",l)}}return this},i.fn.animate.easing={linear:function(e){return e},easeInOutQuad:function(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2},easeOutQuad:function(e){return 1-(1-e)*(1-e)}},i.fn.unhighlight=function(e){let t={className:"highlight",element:"span"};return i.fn.extend(t,e),this.find(t.element+"."+t.className).forEach((function(){let e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}))},i.fn.highlight=function(e,t){this.defaults={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1,excludeParents:".excludeFromHighlight"};const n=i,o={...this.defaults,...t};if(e.constructor===String&&(e=[e]),(e=e.filter((function(e){return""!=e}))).forEach((function(e,t,n){n[t]=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").normalize("NFD").replace(/[\u0300-\u036f]/g,"")})),0==e.length)return this;let r=o.caseSensitive?"":"i",s="("+e.join("|")+")";o.wordsOnly&&(s="(?:,|^|\\s)"+s+"(?:,|$|\\s)");let l=new RegExp(s,r);function f(e,t,i,o,r){if(r=""==r?n.fn.highlight.defaults:r,3===e.nodeType){if(!n(e.parentNode).is(r)){let n=e.data.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(t);if(n){let t,r=document.createElement(i||"span");r.className=o||"highlight",t=/\.|,|\s/.test(n[0].charAt(0))?n.index+1:n.index;let s=e.splitText(t);s.splitText(n[1].length);let l=s.cloneNode(!0);return r.appendChild(l),s.parentNode.replaceChild(r,s),1}}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&!n(e).closest(r).length>0&&(e.tagName!==i.toUpperCase()||e.className!==o))for(let n=0;n<e.childNodes.length;n++)n+=f(e.childNodes[n],t,i,o,r);return 0}return this.forEach((function(e){f(e,l,o.element,o.className,o.excludeParents)}))},i.fn.serialize=function(){let e=this.get(0);if(!e||"FORM"!==e.nodeName)return"";let t,n,i=[];for(t=e.elements.length-1;t>=0;t-=1)if(""!==e.elements[t].name)switch(e.elements[t].nodeName){case"INPUT":switch(e.elements[t].type){case"checkbox":case"radio":e.elements[t].checked&&i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"file":break;default:i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}break;case"TEXTAREA":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"SELECT":switch(e.elements[t].type){case"select-one":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"select-multiple":for(n=e.elements[t].options.length-1;n>=0;n-=1)e.elements[t].options[n].selected&&i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].options[n].value))}break;case"BUTTON":switch(e.elements[t].type){case"reset":case"submit":case"button":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}}return i.join("&")},i.fn.serializeForAjax=function(e,t){let n,o=[];for(n in e)if(e.hasOwnProperty(n)){let r=t?t+"["+n+"]":n,s=e[n];o.push(null!==s&&"object"==typeof s?i.fn.serializeForAjax(s,r):encodeURIComponent(r)+"="+encodeURIComponent(s))}return o.join("&")},i.fn.inViewPort=function(e,t){let n,i,o=this.get(0);if(null==o)return!1;e=void 0===e?0:e,t=void 0===t?window:"string"==typeof t?document.querySelector(t):t;let r=o.getBoundingClientRect(),s=r.top,l=r.bottom,f=r.left,a=r.right,c=!1;if(null==t&&(t=window),t===window)n=window.innerWidth||0,i=window.innerHeight||0;else{n=t.clientWidth,i=t.clientHeight;let e=t.getBoundingClientRect();s-=e.top,l-=e.top,f-=e.left,a-=e.left}return e=~~Math.round(parseFloat(e)),a<=0||f>=n||(c=e>0?s>=e&&l<i-e:(l>0&&s<=i-e)|(s<=0&&l>e)),c},i.fn.ajax=function(e){if("cors"==(e=this.extend({url:"",method:"GET",cors:"cors",data:{},success:null,fail:null,accept:"text/html",contentType:"application/x-www-form-urlencoded; charset=UTF-8"},e)).cors){let t=new XMLHttpRequest;return t.onreadystatechange=function(){null!=e.success&&4==this.readyState&&200==this.status&&e.success(this.responseText),null!=e.fail&&4==this.readyState&&this.status>=400&&e.fail(this)},t.open(e.method.toUpperCase(),e.url,!0),t.setRequestHeader("Content-type",e.contentType),t.setRequestHeader("Accept",e.accept),t.send(this.serializeForAjax(e.data)),t}{let t="ajax_cb_"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})).replaceAll("-","");i.fn[t]=function(){e.success.apply(this,arguments),delete i.fn[e.data.fn]},e.data.callback="DoMini.fn."+t,e.data.fn=t;let n=document.createElement("script");n.type="text/javascript",n.src=e.url+"?"+this.serializeForAjax(e.data),n.onload=function(){this.remove()},document.body.appendChild(n)}};const r=o;return t.default})()));