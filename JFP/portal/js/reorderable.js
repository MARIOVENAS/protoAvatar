var JFP={};JFP.reorderable={updateOrder:function(b,a){return function(){var c=[];jQuery("#"+b+" > div").each(function(d){c.push(this.id)});jQuery.post("/BUSID/JPS/apps/userdatacustomize/flow.action",{name:a,value:c.join(",")})}},jqueryDnD:function(a){return function(d,c){a=a||{};a.stop=JFP.reorderable.updateOrder(d,c);var b=jQuery("#"+d);b.sortable(a);if(a.handle){jQuery(a.handle,b).disableSelection()}else{b.disableSelection()}}}};