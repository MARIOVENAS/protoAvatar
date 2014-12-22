/*

 * JFP Widgets library (AJCR|MRRC)

 * version: '@VERSION'

 * date: '@DATE'

 */

var CJW={jfp:{widget:{}}};CJW.jfp.widget.Core={version:"@VERSION",date:"@DATE"};CJW.jfp.widget.Core.cp=function(d,e,b){if(b){CJW.jfp.widget.Core.cp(d,b)}if(d&&e&&typeof e=="object"){for(var a in e){d[a]=e[a]}}return d};CJW.jfp.widget.Core.cnp=function(b,d){if(b){for(var a in d){if(!CJW.jfp.widget.Core.isDefined(b[a])){b[a]=d[a]}}}return b};CJW.jfp.widget.Core.isDefined=function(a){return typeof a!=="undefined"};CJW.jfp.widget.Core.isTouchSupported=function(){return"ontouchstart" in window&&"ontouchmove" in document&&"ontouchend" in document};var doNothing=function(){};var mustOverrideMe=function(a){alert(" [ Override me please {"+a+"}] ")};(function(a){a.publish=doNothing;a.subscribe=doNothing;a.unsubscribe=doNothing;a.onready=doNothing;a.error=doNothing;a.widgets={};a.widgets.vars={}})(CJW.jfp.widget.Core);CJW.jfp.widget.Object=JFPWClass.create({className:"CJW.jfp.widget.Object",getClassName:function(){return this.className},selector:null,initialize:doNothing,publishEvent:doNothing,registerEventHandler:doNothing,unregisterEventHandler:doNothing,triggerPostConstruction:doNothing,_create:function(){mustOverrideMe("create")},destroy:function(){mustOverrideMe("destroy")},_destroy$:function(){mustOverrideMe("_destroy$")},enable:function(){mustOverrideMe("enable")},disable:function(){mustOverrideMe("disable")},getProperty:function(){mustOverrideMe("getProperty")},setProperty:function(){mustOverrideMe("setProperty")},setProperties:function(){mustOverrideMe("setProperties")},setTopic:function(){mustOverrideMe("setTopic")},getTopic:function(){mustOverrideMe("getTopic")},setTopics:function(){mustOverrideMe("setTopics")},_wrapCallBack:function(){mustOverrideMe("_wrapCallBackfunction")}});var JFP=CJW.jfp.widget.Core;var JFPObject=CJW.jfp.widget.Object;