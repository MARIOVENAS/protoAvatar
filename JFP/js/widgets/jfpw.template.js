CJW.jfp.widget.Template=JFPWClass.extend(CJW.jfp.widget.Object,{topics:null,selector:null,wrapperSet:null,initialize:function(b,a,c){b=b||{};this.optionalAttributes=a||{};c=c||{};this.originalConfig={};this.topicConfig={};JFP.cnp(this.originalConfig,b,{wrapperSet:"_UKN_TMPL_",initialData:[]});JFP.cnp(this.originalConfig,a);this.applyCfg();this.setTopics(c)},applyCfg:function(){this.wrapperSet=this.originalConfig.wrapperSet;this.selector=this.originalConfig.wrapperSet;this.disabled=this.originalConfig.disabled;this.text=this.originalConfig.text;this.icons=this.originalConfig.icons;this.label=this.originalConfig.label},getProperty:function(a){return this.orginalConfig[a]},setProperty:function(b,c){var a={};a[b]=c;this.setProperties(a)},setProperties:function(a){a=a||{};JFP.copyProperties(this.originalConfig,a,{wrapperSet:this.originalConfig.wrapperSet,disabled:this.originalConfig.disabled,text:this.originalConfig.text,icons:this.originalConfig.icons,label:this.originalConfig.label});this.applyConfig()},create:function(){this.render(this.originalConfig.initialData)},destroy:function(){},render:function(a){jQuery(this.selector).tmplItem().data=a;this.refresh()},refresh:function(){jQuery(this.selector).first().html(jQuery(this.originalConfig.template).tmpl(this.getData()));jQuery(this.selector).trigger("refresh")},getData:function(){return jQuery(this.selector).tmplItem().data}});window.$RDY&&$RDY.complete("CJW.jfp.widget.Template");