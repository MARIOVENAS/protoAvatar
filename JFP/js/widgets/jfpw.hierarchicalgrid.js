CJW.jfp.widget.HierarchicalGrid=JFPWClass.extend(CJW.jfp.widget.DataGrid,{className:"CJW.jfp.widget.HierarchicalGrid",subgridMarkup:{},initialize:function(c,a,b){c=c||{};a=a||{};b=b||{};this.oCfg={};this.topicConfig={};if(a.subgridMarkup!=undefined){this.subgridMarkup=a.subgridMarkup}JFP.cp(this.oCfg,c,{wrapperSet:"_TABLE_UKN_",label:"Default Label",mtype:"POST",rowTotal:-1,datatype:"local",onSelectRow:this._triggerOnSelectRow,onSortCol:this._triggerOnSortCol,text:true,subGrid:true,subGridRowExpanded:this._renderSubgridMarkup});JFP.cnp(this.oCfg,a);JFP.cnp(this.oCfg,{styleClass:"jfpw-datagrid"});this.styleClass=this.oCfg.styleClass;this._applyCfg();this.topics=b;this._create()},render:function(b,a){if(this.instance==null){return}this.subgridMarkup=a;this.parent(b)},refresh:function(){if(this.instance==null){return}this.instance.trigger("reloadGrid");for(var a=0;a<this.subgridMarkup.length;a++){this.instance.expandSubGridRow(this.subgridMarkup[a].id)}$jq("td.sgexpanded",this.instance).unbind("click").html("").remove();$jq("td.sgcollapsed",this.instance).unbind("click").html("").remove();$jq("td.subgrid-cell",this.instance).unbind("click").html("").remove();$jq("tr.jqgfirstrow td:first",this.instance).remove();$jq(this.wrapperSet+"_subgrid").remove()},_renderSubgridMarkup:function(d,c){var b=null;for(var a=0;a<$jq(this).jfpwidget().subgridMarkup.length;a++){if($jq(this).jfpwidget().subgridMarkup[a].id==c){b=$jq(this).jfpwidget().subgridMarkup[a]}}$jq("#"+d).append(b.markup)}});window.$RDY&&$RDY.complete("CJW.jfp.widget.HierarchicalGrid");