CJW.jfp.widget.LightGrid=JFPWClass.extend(CJW.jfp.widget.Object,{className:"CJW.jfp.widget.LightGrid",instance:null,initialize:function(c,a,b){c=c||{};a=a||{};b=b||{};this.oCfg={};this.topicConfig={};JFP.cp(this.oCfg,c,{wrapperSet:"_LTG_UKN_"});this.selector=this.oCfg.wrapperSet;JFP.cnp(this.oCfg,a);JFP.cnp(this.oCfg,{styleClass:"tablesorter jfpw-lightgrid",jsonData:null});this.styleClass=this.oCfg.styleClass;this.jsonData=this.oCfg.jsonData;this.applyCfg();this.setTopics(b);this._create()},applyCfg:function(){if(this.instance!=null){this.instance.tablesorter(this.oCfg)}},getProperty:function(a){if(this.instance!=null){this.instance[0].config[a]}},setProperty:function(b,c){var a={};a[b]=c;this.setProperties(a)},setProperties:function(a){a=a||{};JFP.copyProperties(this.oCfg,a,{wrapperSet:this.oCfg.wrapperSet});this.applyConfig()},_create:function(){if(this.instance!=null){return}this.instance=$jq(this.selector).first();this.instance.tablesorter(this.oCfg);this.instance.addClass(this.styleClass);this.render(this.jsonData);this.triggerPostConstruction()},destroy:function(){if(this.instance!=null){this._destroy$();this.instance.removeClass("tablesorter");this.instance.removeClass(this.styleClass);$jq(this.instance[0].config.headerList).unbind();this.instance.unbind();this.instance=null}},widget:function(){return this.instance},setCellStyle:function(d,b,a){if(a==undefined||a==null){return}$rows=this.instance.find(".gridrow");for(var c=0;c<$rows.length;c++){if(d==null){if(b==null){$jq($jq($rows[c]).find("td")).addClass(a)}else{$jq($jq($rows[c]).find("td")[b]).addClass(a)}}else{if(d==c){if(b==null){$jq($jq($rows[c]).find("td")).addClass(a);return}else{$jq($jq($rows[c]).find("td")[b]).addClass(a)}}}}},render:function(d){if(d==undefined||d==null){return}this.instance.trigger("renderStart");var b=this.instance[0].config;if(b==null){b=this.oCfg}var e=b.headers;this.jsonData=d;this.instance.html("");this.instance.append("<thead><tr></tr></thead>");for(var c=0;e[c]!=undefined;c++){this.instance.find("tr").append("<th>"+e[c].label+"</th>")}this.instance.append("<tbody></tbody>");for(var f=0;f<d.length;f++){$jq(this.instance[0].tBodies[0]).append("<tr></tr>");for(var a=0;e[a]!=undefined;a++){$jq(this.instance[0].tBodies[0].rows[f]).append("<td>"+d[f][e[a].id]+"</td>")}}this.instance.tablesorter(b);this.instance.trigger("renderEnd")},filterByField:function(e,a,c){if(this.instance==null||e==null){return}if(a==""||a==null||c==""||c==null){this.render(e);return}var d=new Array();for(var b=0;b<e.length;b++){if(e[b][a]==c){d.push(e[b])}}this.render(d)}});window.$RDY&&$RDY.complete("CJW.jfp.widget.LightGrid");