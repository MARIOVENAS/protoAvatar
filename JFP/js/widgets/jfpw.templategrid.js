CJW.jfp.widget.TemplateGrid=JFPWClass.extend(CJW.jfp.widget.DataGrid,{className:"CJW.jfp.widget.TemplateGrid",templateId:"",initialize:function(c,a,b){if(a.templateId!=undefined){this.templateId=a.templateId}this.parent(c,a,b)},refresh:function(){this.parent();$jq.each($jq("tr.jqgrow",this.instance),function(){var c=$jq("td",this).length;$jq("td:not(:first)",this).remove();$jq("td:first",this).attr("colspan",c);$jq("td:first",this).html("")});var b=this.instance.getGridParam("data");if(this.templateId!=""){for(var a=0;a<$jq("tr.jqgrow",this.instance).length;a++){$jq(this.templateId).tmpl(b[a]).appendTo($jq("td:first",$jq("tr.jqgrow",this.instance)[a]).html(""))}}}});window.$RDY&&$RDY.complete("CJW.jfp.widget.TemplateGrid");