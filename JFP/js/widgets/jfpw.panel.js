CJW.jfp.widget.Panel=JFPWClass.extend(CJW.jfp.widget.Object,{className:"CJW.jfp.widget.Panel",instance:null,_triggerFold:function(){$jq(this).find(".ui-panel-secondary-icon").removeClass("ui-icon-collapse").addClass("ui-icon-expand");$jq(this).trigger("fold",{type:"fold",wrapper:this});$jq(this).removeClass("ui-panel-opened").addClass("ui-panel-closed")},_triggerUnfold:function(){$jq(this).find(".ui-panel-secondary-icon").removeClass("ui-icon-expand").addClass("ui-icon-collapse");$jq(this).trigger("unfold",{type:"unfold",wrapper:this});$jq(this).removeClass("ui-panel-closed").addClass("ui-panel-opened")},initialize:function(b,a,c){b=b||{};a=a||{};c=c||{};this.originalConfig={};this.topicConfig={};JFP.cp(this.originalConfig,b,{wrapperSet:"_PNL_UKN_",fold:this._wrapCallBack(this._triggerFold,a.fold),unfold:this._wrapCallBack(this._triggerUnfold,a.unfold)});this.selector=this.originalConfig.wrapperSet;JFP.cnp(this.originalConfig,a);JFP.cnp(this.originalConfig,{styleClass:"jfpw-panel"});this.styleClass=this.originalConfig.styleClass;this.applyCfg();this.setTopics(c);this._create()},applyCfg:function(){if(this.instance!=null){this.instance.panel("option",this.originalConfig)}},getProperty:function(a){if(this.instance!=null){return this.instance.panel("option",a)}},setProperty:function(a,b){if(this.instance!=null){this.instance.panel("option",a,b)}},setProperties:function(a){if(this.instance!=null){a=a||{};this.instance.panel("option",a)}},_create:function(){if(this.instance!=null){return}this.instance=$jq(this.selector).first();this.instance.panel(this.originalConfig);if(this.instance.panel("option","collapsible")==true){if(this.instance.find(".ui-panel-secondary-icon").length>0){this.instance.find(".ui-panel-secondary-icon").addClass("ui-icon-collapse");this.instance.find(".ui-icon").remove()}}else{this.instance.find(".ui-panel-secondary-icon").remove()}this.instance.addClass(this.styleClass);this.triggerPostConstruction()},destroy:function(){if(this.instance!=null){this._destroy$();this.instance.panel("enable");this.instance.panel("destroy");this.instance=null}},disable:function(){if(this.instance!=null){this.instance.panel("disable")}},enable:function(){if(this.instance!=null){this.instance.panel("enable")}},toggle:function(){if(this.instance!=null){this.instance.panel("toggle")}},hide:function(){if(this.instance!=null){if(this.getProperty("collapsed")==false){this.instance.panel("toggle")}}},show:function(){if(this.instance!=null){if(this.getProperty("collapsed")==true){this.instance.panel("toggle")}}},render:function(a){if(this.instance!=null){this.instance.panel("content",a)}},widget:function(){return this.instance}});window.$RDY&&$RDY.complete("CJW.jfp.widget.Panel");