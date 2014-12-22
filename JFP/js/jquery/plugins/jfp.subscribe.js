(function(b){if(!window._subscribe_topics){_subscribe_topics={};_subscribe_handlers={}}_subscribe_getDocumentWindow=function(d){return d.parentWindow||d.defaultView};var a=function(e,f){var d=e.data;d.handler.apply(window,[e.originalEvent?e.originalEvent:e,f,e])};var c=function(d,f,e){this.bind(d,{handler:e,data:f},a)};b.fn.extend({createTopic:function(d){if(d&&!_subscribe_topics[d]){_subscribe_topics[d]={};_subscribe_topics[d].objects={};_subscribe_topics[d].objects.__noId__=[]}return this},destroyTopic:function(e){if(e&&_subscribe_topics[e]){for(i in _subscribe_topics[e].objects){var d=_subscribe_topics[e].objects[i];if(b.isArray(d)){if(d.length>0){for(j in d){if(typeof(d[j])!="function"){d[j].unbind(e)}}}}else{d.unbind(e,data)}}}delete _subscribe_topics[e];return this},subscribe:function(g,o,e,p){if(this[0]&&g&&o){this.createTopic(g);if(this.attr("id")){_subscribe_topics[g].objects[this.attr("id")]=this}else{var m=_subscribe_topics[g].objects.__noId__;if(this[0].nodeType==9){for(var h in m){var n=m[h];if(typeof(n)!="function"&&n[0].nodeType==9&&_subscribe_getDocumentWindow(this[0]).frameElement==_subscribe_getDocumentWindow(n[0]).frameElement){return this}}}var k=false;for(var d=0;d<m.length;d++){if(m[d]==this){k=true;break}}if(!k){_subscribe_topics[g].objects.__noId__.push(this)}}if(true==p){if(typeof(o)=="function"){c.apply(this,[g,e,o])}else{if(typeof(o)=="string"&&typeof(_subscribe_handlers[o])=="function"){c.apply(this,[g,e,_subscribe_handlers[o]])}}}else{var l=this.data("events");if(l){var f=l[g];if(f&&f.length>0){this.unbind(g)}}if(typeof(o)=="function"){c.apply(this,[g,e,o])}else{if(typeof(o)=="string"&&typeof(_subscribe_handlers[o])=="function"){c.apply(this,[g,e,_subscribe_handlers[o]])}}}}return this},unsubscribe:function(e){if(e){if(_subscribe_topics[e]){if(this.attr("id")){var d=_subscribe_topics[e].objects[this.attr("id")];if(d){delete _subscribe_topics[e].objects[this.attr("id")]}}else{var g=_subscribe_topics[e].objects.__noId__;for(var f=0;f<g.length;f++){if(typeof(noIdObject)!="function"&&g[f]==this){subscribe_topics[e].objects.__noId__.splice(index,1);break}}}}this.unbind(e)}return this},isSubscribed:function(e){if(e){if(_subscribe_topics[e]){if(this.attr("id")){var d=_subscribe_topics[e].objects[this.attr("id")];if(d){return true}}else{var g=_subscribe_topics[e].objects.__noId__;for(var f=0;f<g.length;f++){if(typeof(noIdObject)!="function"&&g[f]==this){return true}}}}}return false},publish:function(f,k,d){if(f){this.createTopic(f);var g=function(){this.isImmediatePropagationStopped=function(){return true};this.isPropagationStopped=function(){return true};if(this.originalEvent){this.originalEvent.isImmediatePropagationStopped=function(){return true};this.originalEvent.stopPropagation=g}};var h=jQuery.Event(f);b.extend(h,{originalEvent:d,stopPropagation:g});for(i in _subscribe_topics[f].objects){var e=_subscribe_topics[f].objects[i];if(b.isArray(e)){if(e.length>0){for(j in e){if(typeof(e[j])!="function"){e[j].trigger(h,k)}}}}else{e.trigger(h,k)}}}return this},publishOnEvent:function(e,d,f){if(e&&d){this.createTopic(d);this.bind(e,f,function(g){b(this).publish(d,g.data,g)})}return this}});b.extend({subscribe:function(d,e,f){return b(document.body).subscribe(d,e,f)},unsubscribe:function(d,e,f){return b(document.body).unsubscribe(d,e,f)},subscribeHandler:function(d,e){if(d&&e&&typeof(e)=="function"){_subscribe_handlers[d]=e}return b(document.body)},publish:function(d,f,e){return b(document.body).publish(d,f,e)},createTopic:function(d){return b(document.body).createTopic(d)},destroyTopic:function(d){return b(document.body).destroyTopic(d)}})})(jQuery);