CJW.jfp.widget.ProgressBar=JFPWClass.extend(CJW.jfp.widget.Object,{className:"CJW.jfp.widget.ProgressBar",instance:null,initialize:function(c,a,b){c=c||{};a=a||{};b=b||{};this.oCfg={};this.topicConfig={};JFP.cp(this.oCfg,c,{wrapperSet:"_PGB_UKN_"});this.selector=this.oCfg.wrapperSet;JFP.cnp(this.oCfg,a);JFP.cnp(this.oCfg,{styleClass:"jfpw-progressbar",showLabels:false});this.styleClass=this.oCfg.styleClass;this.showLabels=this.oCfg.showLabels;this.applyCfg();this.setTopics(b);this._create()},applyCfg:function(){if(this.instance!=null){this.instance.progressbar("option",this.oCfg)}},getProperty:function(a){if(this.instance!=null){return this.instance.progressbar("option",a)}},setProperty:function(a,b){if(this.instance!=null){this.instance.progressbar("option",a,b)}},setProperties:function(a){if(this.instance!=null){a=a||{};this.instance.progressbar("option",a)}},_create:function(){if(this.instance!=null){return}this.instance=$jq(this.selector).first();this.instance.progressbar(this.oCfg);this.instance.addClass(this.styleClass);if(this.showLabels){this._createLabels()}this.triggerPostConstruction()},_createLabels:function(){this.instance.wrap("<div class='jfpw-progressbar-wrapper'></div>");this.instance.after("<div class='jfpw-progressbar-label-min'></div><div class='jfpw-progressbar-label-max'></div>");this.instance.parent().find(".jfpw-progressbar-label-min").html(this.getProperty("min"));this.instance.parent().find(".jfpw-progressbar-label-max").html(this.getProperty("max"))},_destroyLabels:function(){this.instance.parent().find(".jfpw-progressbar-label-min").remove();this.instance.parent().find(".jfpw-progressbar-label-max").remove();this.instance.unwrap()},destroy:function(){if(this.instance!=null){this._destroy$();this.instance.progressbar("destroy");this.instance=null}},disable:function(){if(this.instance!=null){this.instance.progressbar("disable")}},enable:function(){if(this.instance!=null){this.instance.progressbar("enable")}},widget:function(){return this.instance}});window.$RDY&&$RDY.complete("CJW.jfp.widget.ProgressBar");