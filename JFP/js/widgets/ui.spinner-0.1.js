(function(a){a.keyCode={BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38};a.widget("ui.spinner",{_init:function(){this._trigger("init",null,this.ui(null));if(this.options.items==undefined){this.options.items=[]}if(this.options.stepping==undefined){this.options.stepping=1}if(this.options.width==undefined){this.options.width=150}if(typeof this.options.items[0]=="object"&&!this.element.is("input")){var f=this.options.items;for(var d=0;d<f.length;d++){this._addItem(f[d])}}this._decimals=parseInt(this.options.decimals,10);if(this.options.stepping.toString().indexOf(".")!=-1){var e=this.options.stepping.toString();this._decimals=e.slice(e.indexOf(".")+1,e.length).length}var c=this;this.element.addClass("ui-spinner-box").attr("autocomplete","off");this._setValue(isNaN(this._getValue())?this.options.start:this._getValue());this.element.wrap('<div align="center">').parent().addClass("ui-spinner").wrap('<div align="center">').parent().addClass("ui-spinner-container").addClass(this.options.styleClass).width(this.options.width).prepend('<div class="ui-spinner-up ui-hide-element" >&nbsp;</div>').find(".ui-spinner-up").bind("mousedown",function(g){a(this).addClass("ui-spinner-pressed");if(!c.counter){c.counter=1}c._mousedown(100,"_up",g)}).bind("mouseup",function(g){a(this).removeClass("ui-spinner-pressed");if(c.counter==1){c._up(g)}c._mouseup(g)}).bind("mouseout",function(g){a(this).removeClass("ui-spinner-pressed");if(c.timer){c._mouseup(g)}}).bind("dblclick",function(g){a(this).removeClass("ui-spinner-pressed");c._up(g);c._mouseup(g)}).bind("keydown.spinner",function(h){var g=a.keyCode;if(h.keyCode==g.SPACE||h.keyCode==g.ENTER){a(this).addClass("ui-spinner-pressed");if(!c.counter){c.counter=1}c._up.call(c,h)}else{if(h.keyCode==g.DOWN||h.keyCode==g.RIGHT){c.element.siblings(".ui-spinner-down").focus()}else{if(h.keyCode==g.LEFT){c.element.focus()}}}}).bind("keyup.spinner",function(g){a(this).removeClass("ui-spinner-pressed");c.counter=0;c._propagate("change",g)}).end().append('<div class="ui-spinner-down ui-hide-element" >&nbsp;</div>').find(".ui-spinner-down").bind("mousedown",function(g){a(this).addClass("ui-spinner-pressed");if(!c.counter){c.counter=1}c._mousedown(100,"_down",g)}).bind("mouseup",function(g){a(this).removeClass("ui-spinner-pressed");if(c.counter==1){c._down()}c._mouseup(g)}).bind("mouseout",function(g){a(this).removeClass("ui-spinner-pressed");if(c.timer){c._mouseup(g)}}).bind("dblclick",function(g){a(this).removeClass("ui-spinner-pressed");c._down(g);c._mouseup(g)}).bind("keydown.spinner",function(h){var g=a.keyCode;if(h.keyCode==g.SPACE||h.keyCode==g.ENTER){a(this).addClass("ui-spinner-pressed");if(!c.counter){c.counter=1}c._down.call(c,h)}else{if(h.keyCode==g.UP||h.keyCode==g.LEFT){c.element.siblings(".ui-spinner-up").focus()}}}).bind("keyup.spinner",function(g){a(this).removeClass("ui-spinner-pressed");c.counter=0;c._propagate("change",g)}).end();this._items=this.element.children().length;if(this._items>1){var b=this.element.outerHeight()/this._items;this.element.addClass("ui-spinner-list").height(b).children().addClass("ui-spinner-listitem").height(b).css("overflow","hidden").end().parent().height(b).end();this.options.stepping=1;this.options.min=0;this.options.max=this._items-1}this.element.bind("keydown.spinner",function(g){if(!c.counter){c.counter=1}return c._keydown.call(c,g)}).bind("keyup.spinner",function(g){c.counter=0;c._propagate("change",g)}).bind("blur.spinner",function(g){c._cleanUp()});if(a.fn.mousewheel){this.element.mousewheel(function(g,h){c._mousewheel(g,h)})}this.element.parent().parent().hover(function(){a(this).find(".ui-spinner-up").removeClass("ui-hide-element");a(this).find(".ui-spinner-down").removeClass("ui-hide-element")},function(){a(this).find(".ui-spinner-up").addClass("ui-hide-element");a(this).find(".ui-spinner-down").addClass("ui-hide-element")})},_constrain:function(){if(this.options.min!=undefined&&this._getValue()<this.options.min){this._setValue(this.options.min)}if(this.options.max!=undefined&&this._getValue()>this.options.max){this._setValue(this.options.max)}},_cleanUp:function(){this._setValue(this._getValue());this._constrain()},_spin:function(c,b){if(this.disabled){return}if(isNaN(this._getValue())){this._setValue(this.options.start)}this._setValue(this._getValue()+(c=="up"?1:-1)*(this.options.incremental&&this.counter>100?(this.counter>200?100:10):1)*this.options.stepping);this._animate(c);this._constrain();if(this.counter){this.counter++}this._propagate("spin",b)},_down:function(b){this._spin("down",b);this._propagate("down",b)},_up:function(b){this._spin("up",b);this._propagate("up",b)},_mousedown:function(c,g,f){var b=this;c=c||100;if(this.timer){window.clearInterval(this.timer);this.timer=0}this.timer=window.setInterval(function(){b[g](f);if(b.counter>20){b._mousedown(20,g,f)}},c)},_mouseup:function(b){this.counter=0;if(this.timer){window.clearInterval(this.timer);this.timer=0}this.element[0].focus();this._propagate("change",b)},_keydown:function(c){var b=a.keyCode;if(c.keyCode==b.UP){this._up(c)}if(c.keyCode==b.DOWN){this._down(c)}if(c.keyCode==b.HOME){this._setValue(this.options.min||this.options.start)}if(c.keyCode==b.END&&this.options.max!=undefined){this._setValue(this.options.max)}return(c.keyCode==b.TAB||c.keyCode==b.BACKSPACE||c.keyCode==b.LEFT||c.keyCode==b.RIGHT||c.keyCode==b.PERIOD||c.keyCode==b.NUMPAD_DECIMAL||c.keyCode==b.NUMPAD_SUBTRACT||(c.keyCode>=96&&c.keyCode<=105)||(/[0-9\-\.]/).test(String.fromCharCode(c.keyCode)))?true:false},_mousewheel:function(c,d){var b=this;d=(a.browser.opera?-d/Math.abs(d):d);(d>0?b._up(c):b._down(c));if(b.timeout){window.clearTimeout(b.timeout);b.timeout=0}b.timeout=window.setTimeout(function(){b._propagate("change",c)},400);c.preventDefault()},_getValue:function(){return parseFloat(this.element.val().replace(/[^0-9\-\.]/g,""))},_setValue:function(b){if(isNaN(b)){b=this.options.start}this.element.val(this.options.currency?a.ui.spinner.format.currency(b,this.options.currency):a.ui.spinner.format.number(b,this._decimals))},_animate:function(b){if(this.element.hasClass("ui-spinner-list")&&((b=="up"&&this._getValue()<=this.options.max)||(b=="down"&&this._getValue()>=this.options.min))){this.element.animate({marginTop:"-"+this._getValue()*this.element.parent().height()},{duration:"fast",queue:false})}},_addItem:function(e,b){if(!this.element.is("input")){var f="div";if(this.element.is("ol")||this.element.is("ul")){f="li"}var c=e;if(typeof e=="object"){var d=(b!==undefined?b:this.options.format);c=d.replace(/%(\(([^)]+)\))?/g,(function(g){return function(i,h,j){if(!j){for(var k in g){return g[k]}}else{return g[j]}}})(e))}this.element.append("<"+f+' class="ui-spinner-dyn">'+c+"</"+f+">")}},plugins:{},ui:function(b){return{options:this.options,element:this.element,value:this._getValue(),add:this._addItem}},_propagate:function(c,b){a.ui.plugin.call(this,c,[b,this.ui()]);return this.element.triggerHandler(c=="spin"?c:"spin"+c,[b,this.ui()],this.options[c])},destroy:function(){if(!a.data(this.element[0],"spinner")){return}if(a.fn.mousewheel){this.element.unmousewheel()}if(this.options.items.length>0){this.element.removeClass("ui-spinner-box ui-spinner-list").removeAttr("disabled").removeAttr("autocomplete").removeAttr("style").removeData("spinner").parent().unbind(".spinner").end().children().remove().end().siblings().remove().end().unwrap().unwrap()

}else{this.element.removeClass("ui-spinner-box ui-spinner-list").removeAttr("disabled").removeAttr("autocomplete").removeAttr("style").removeData("spinner").unbind(".spinner").parent().siblings().remove().end().siblings().remove().end().children().removeClass("ui-spinner-listitem").remove(".ui-spinner-dyn").end().parent().removeClass("ui-spinner ui-spinner-disabled").before(this.element.clone()).remove().end()}},enable:function(){this.element.removeAttr("disabled").siblings().removeAttr("disabled").parent().removeClass("ui-spinner-disabled");this.disabled=false},disable:function(){this.element.attr("disabled",true).siblings().attr("disabled",true).parent().addClass("ui-spinner-disabled");this.disabled=true}});a.extend(a.ui.spinner,{defaults:{width:200,decimals:0,stepping:1,start:0,incremental:true,currency:false,format:"%",items:[]},format:{currency:function(c,b){c=isNaN(c)?0:c;return(c!==Math.abs(c)?"-":"")+b+this.number(Math.abs(c),2)},number:function(b,d){var c=/(\d+)(\d{3})/;var b=isNaN(b)?0:parseFloat(b,10).toFixed(d);return b}}})})(jQuery);