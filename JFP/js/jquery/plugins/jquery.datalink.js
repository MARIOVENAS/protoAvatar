/*

 * jQuery Data Link Plugin

 * http://github.com/jquery/jquery-datalink

 *

 * Copyright Software Freedom Conservancy, Inc.

 * Dual licensed under the MIT or GPL Version 2 licenses.

 * http://jquery.org/license

 */

(function(b){var g=b.cleanData,h=[],c={val:"val",html:"html",text:"text"};function a(l,k,j){if(l.nodeType){var m=c[k]||"attr";b(l)[m](j)}else{b(l).data(k,j)}}function d(m){var l=b.data(m),j,k=l._getLinks||(j={s:[],t:[]},l._getLinks=function(){return j});return k()}function e(l,j,k){j.bind(l.nodeType?"change":"changeData",k)}function i(l,j,k){j.unbind(l.nodeType?"change":"changeData",k)}b.extend({cleanData:function(m){for(var n,o=0,p;(p=m[o])!=null;o++){var l=b.data(p,"_getLinks");if(l){l=l();var k=b(p);b.each(l.s,function(){i(p,k,this.handler);if(this.handlerRev){i(this.target,b(this.target),this.handlerRev)}});b.each(l.t,function(){i(this.source,b(this.source),this.handler);if(this.handlerRev){i(p,k,this.handlerRev)}});l.s=[];l.t=[]}}g(m)},convertFn:{"!":function(j){return !j}}});function f(t,p,o,l,j,r){var r=t.target,q=t.type==="changeData",u,s,k;if(q){k=p;if(t.namespace){k+="."+t.namespace}}else{k=(r.name||r.id)}if(!l){u=k}else{var n=l[k];if(!n){return null}u=n.name;s=n.convert;if(typeof s==="string"){s=b.convertFn[s]}}return{name:u,convert:s,value:q?o:b(r).val()}}b.extend(b.fn,{link:function(p,j){var r=this;if(!p){return r}function n(t){var s="[name="+t+"], [id="+t+"]";return r.filter(s).add(r.find(s))}if(typeof p==="string"){p=b(p,this.context||null)[0]}var l=!j,k,o,q=function(v,y,t){var s=f(v,y,t,k);if(s){var u=s.name,w=s.value,x=s.convert;if(x){w=x(w,v.target,p)}if(w!==undefined){a(p,u,w)}}},m=function(v,y,t){var s=f(v,y,t,o);if(s){var u=s.name,w=s.value,x=s.convert;n(u).each(function(){t=w;if(x){t=x(t,p,this)}if(t!==undefined){a(this,"val",t)}})}};if(j){b.each(j,function(y,t){var w=t,x,u,s;if(b.isPlainObject(t)){w=t.name||y;x=t.convert;u=t.convertBack;s=t.twoWay!==false;l|=s}else{l=s=true}if(s){o=o||{};o[y]={name:w,convert:u}}k=k||{};k[w]={name:y,convert:x,twoWay:s}})}r.each(function(){e(this,b(this),q);var s={handler:q,handlerRev:l?m:null,target:p,source:this};d(this).s.push(s);if(p.nodeType){d(p).t.push(s)}});if(l){e(p,b(p),m)}return r},unlink:function(j){this.each(function(){var m=b(this),l=d(this).s;for(var o=l.length-1;o>=0;o--){var p=l[o];if(p.target===j){i(this,m,p.handler);if(p.handlerRev){i(p.target,b(p.target),p.handlerRev)}l.splice(o,1);var k=d(p.target).t,n=b.inArray(p,k);if(n!==-1){k.splice(n,1)}}}})}})})(jQuery);