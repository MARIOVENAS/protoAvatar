if(typeof $jq=="undefined"){$jq=jQuery}(function(a){JFP.publish=$jq.publish;JFP.subscribe=$jq.subscribe;JFP.unsubscribe=$jq.unsubscribe;JFP.onReady=$jq(document).ready;JFPObject.prototype.publishEvent=function(){if(arguments.length==0){return}var b=arguments[0];b.stopPropagation();$jq(b.data.selector).first().publish(b.data.topic,Array.prototype.slice.call(arguments,1),b)};JFPObject.prototype.registerEventHandler=function(b,c){var d=this.selector;if($jq(d).first().length==0){return}$jq(d).first().bind(b,{selector:d,topic:c},this.publishEvent)};JFPObject.prototype.unregisterEventHandler=function(b){$jq(this.selector).first().unbind(b,this.publishEvent)};JFPObject.prototype.setTopic=function(c,b){this.topicConfig[b]=c;this.registerEventHandler(b,c)};JFPObject.prototype.setTopics=function(e){if(!$jq.isPlainObject(e)){return}for(var c in e){var d=e[c];if($jq.isArray(d)){for(var b=0;b<d.length;b++){this.setTopic(c,d[b])}}else{if(typeof d=="string"){this.setTopic(c,d)}}}};JFPObject.prototype.triggerPostConstruction=function(){var b=this;$jq(this.selector).first().trigger("postconstruction",[b])};JFPObject.prototype._destroy$=function(){var b=$jq(this.selector).first().data("jfp.widget");if(b){$jq(this.selector).first().removeData("jfp.widget")}};JFPObject.prototype._wrapCallBack=function(d,c){var b=function(){if($jq.isFunction(d)){var f=d.apply(this,arguments);if(f!=undefined){return f}}if($jq.isFunction(c)){var e=c.apply(this,arguments);if(e!=undefined){return e}}};return b}})($jq);(function(a){var b=function(f,d,e){var c=f.data("jfp.widget");if(!c){return}if(!d){return}if(d[0]!="_"&&c[d]){return c[d].apply(c,e)}JFP.error({code:"001",parameters:[d]})};a.fn.jfpwidget=function(f){var d=this.length;var c=this.selector;if(d==0){JFP.error({code:"002",parameters:[c]});return}if(typeof f=="string"){var e=Array.prototype.slice.call(arguments,1);return b(a(this).first(),f,e)}else{if(typeof f=="object"){a(this).first().data("jfp.widget",f);return f}else{if(!f){return a(this).first().data("jfp.widget")}}}}})($jq);(function(b){var a=0;b.fn.uid=function(c){return this.each(function(){if(this.id==undefined||this.id==""){this.id=(c||"uid")+(a++)+"_"+new Date().getTime()}return b})}})($jq);