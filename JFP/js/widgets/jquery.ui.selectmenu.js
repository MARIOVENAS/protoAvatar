(function(a){a.widget("ui.selectmenu",{getter:"value",version:"1.8",eventPrefix:"selectmenu",options:{transferClasses:true,style:"dropdown",positionOptions:{my:"left top",at:"left bottom",offset:null},width:null,menuWidth:null,handleWidth:26,maxHeight:null,icons:null,format:null,bgImage:function(){},wrapperElement:"",autocomplete:false},_create:function(){var b=this,g=this.options;var f=this.element.attr("id")||"ui-selectmenu-"+Math.random().toString(16).slice(2,10);this.ids=[f+"-button",f+"-menu"];this._safemouseup=true;if(g.autocomplete==false){this.newelement=a('<a class="'+this.widgetBaseClass+' ui-widget ui-state-default ui-corner-all" id="'+this.ids[0]+'" role="button" href="#" tabindex="0" aria-haspopup="true" aria-owns="'+this.ids[1]+'"></a>')}else{this.newelement=a('<div class="'+this.widgetBaseClass+' ui-widget ui-state-default ui-corner-all" id="'+this.ids[0]+'" role="button" href="#" tabindex="0" aria-haspopup="true" aria-owns="'+this.ids[1]+'"></div>')}this.newelement.insertAfter(this.element);this.newelement.wrap(g.wrapperElement);var e=this.element.attr("tabindex");if(e){this.newelement.attr("tabindex",e)}this.newelement.data("selectelement",this.element);this.selectmenuIcon=a('<span class="'+this.widgetBaseClass+'-icon ui-icon"></span>').prependTo(this.newelement);this.newelement.prepend('<span class="'+b.widgetBaseClass+'-status" />');if(g.autocomplete==true){this.inputBox=a('<input type="text" class="'+this.widgetBaseClass+'-input"></input>').css({position:"absolute",top:"0px",left:"0px",cursor:"default"}).addClass("jfpw-select-input").prependTo(this.newelement)}a('label[for="'+this.element.attr("id")+'"]').attr("for",this.ids[0]).bind("click.selectmenu",function(){b.newelement[0].focus();return false});if(g.autocomplete==true){this.inputBox.bind("mousedown.selectmenu",function(h){b.inputBox.val("");b.inputText="";b.open();h.stopPropagation()})}this.newelement.bind("mousedown.selectmenu",function(h){b._toggle(h,true);if(g.style=="popup"){b._safemouseup=false;setTimeout(function(){b._safemouseup=true},300)}return false}).bind("click.selectmenu",function(){if(g.autocomplete==true){b.inputBox.focus()}return false}).bind("keydown.selectmenu",function(i){var h=false;switch(i.keyCode){case a.ui.keyCode.ENTER:h=true;break;case a.ui.keyCode.UP:if(i.altKey){b.open(i)}else{b._moveSelection(-1)}break;case a.ui.keyCode.DOWN:if(i.altKey){b.open(i)}else{b._moveSelection(1)}break;case a.ui.keyCode.LEFT:b._moveSelection(-1);break;case a.ui.keyCode.RIGHT:b._moveSelection(1);break;case a.ui.keyCode.TAB:h=true;break;default:h=true;if(g.autocomplete==true){b._typeAheadInput(i,i.keyCode,"mouseup")}else{b._typeAhead(i.keyCode,"mouseup")}break}return h}).bind("mouseover.selectmenu focus.selectmenu",function(){if(!g.disabled){a(this).addClass(b.widgetBaseClass+"-focus ui-state-hover")}}).bind("mouseout.selectmenu blur.selectmenu",function(){if(!g.disabled){a(this).removeClass(b.widgetBaseClass+"-focus ui-state-hover")}});a(document).bind("mousedown.selectmenu",function(i){var h=b.list.parent();var j=true;h.find("*").each(function(){if(i.target==a(this).get(0)){j=false}});if(j){b.close(i)}});this.element.bind("click.selectmenu",function(){b._refreshValue()}).bind("focus.selectmenu",function(){if(this.newelement){this.newelement[0].focus()}});var d=this.element.width();this.newelement.width(g.width?g.width:d);if(g.autocomplete==true){this.inputBox.width(this.newelement.width()-22)}this.element.hide();this.list=a('<ul class="'+b.widgetBaseClass+'-menu ui-widget ui-widget-content" aria-hidden="true" role="listbox" aria-labelledby="'+this.ids[0]+'" id="'+this.ids[1]+'"></ul>').appendTo("body");this.list.wrap(g.wrapperElement);this.list.bind("keydown.selectmenu",function(i){var h=false;switch(i.keyCode){case a.ui.keyCode.UP:if(i.altKey){b.close(i,true)}else{b._moveFocus(-1)}break;case a.ui.keyCode.DOWN:if(i.altKey){b.close(i,true)}else{b._moveFocus(1)}break;case a.ui.keyCode.LEFT:b._moveFocus(-1);break;case a.ui.keyCode.RIGHT:b._moveFocus(1);break;case a.ui.keyCode.HOME:b._moveFocus(":first");break;case a.ui.keyCode.PAGE_UP:b._scrollPage("up");break;case a.ui.keyCode.PAGE_DOWN:b._scrollPage("down");break;case a.ui.keyCode.END:b._moveFocus(":last");break;case a.ui.keyCode.ENTER:b.close(i,true);a(i.target).parents("li:eq(0)").trigger("mouseup");break;case a.ui.keyCode.TAB:h=true;b.close(i,true);break;case a.ui.keyCode.ESCAPE:b.close(i,true);break;default:h=true;break}return h});a(window).bind("resize.selectmenu",function(){a.proxy(b._refreshPosition,this)})},_init:function(){var p=this,f=this.options;var b=[];this.element.find("option").each(function(){b.push({value:a(this).attr("value"),text:p._formatText(a(this).text()),selected:a(this).attr("selected"),disabled:a(this).attr("disabled"),classes:a(this).attr("class"),parentOptGroup:a(this).parent("optgroup").attr("label"),bgImage:f.bgImage.call(a(this))})});var m=(p.options.style=="popup")?" ui-state-active":"";this.list.html("");for(var k=0;k<b.length;k++){if(b[k].disabled){var e=a('<li role="presentation"><a href="#" tabindex="-1" role="option" class="jfpw-select-disabled">'+b[k].text+"</a></li>")}else{var e=a('<li role="presentation"><a href="#" tabindex="-1" role="option" aria-selected="false">'+b[k].text+"</a></li>").data("index",k).addClass(b[k].classes).data("optionClasses",b[k].classes||"").bind("mouseup.selectmenu",function(i){if(p._safemouseup){var j=a(this).data("index")!=p._selectedIndex();p.index(a(this).data("index"));p.select(i);if(j){p.change(i)}p.close(i,true)}return false}).bind("click.selectmenu",function(){return false}).bind("mouseover.selectmenu focus.selectmenu",function(){p._selectedOptionLi().addClass(m);p._focusedOptionLi().removeClass(p.widgetBaseClass+"-item-focus ui-state-hover");a(this).removeClass("ui-state-active").addClass(p.widgetBaseClass+"-item-focus ui-state-hover")}).bind("mouseout.selectmenu blur.selectmenu",function(){if(a(this).is(p._selectedOptionLi().selector)){a(this).addClass(m)}a(this).removeClass(p.widgetBaseClass+"-item-focus ui-state-hover")})}if(b[k].parentOptGroup){var l=p.widgetBaseClass+"-group-"+b[k].parentOptGroup.replace(/[^a-zA-Z0-9]/g,"");if(this.list.find("li."+l).size()){this.list.find("li."+l+":last ul").append(e)}else{a('<li role="presentation" class="'+p.widgetBaseClass+"-group "+l+'"><span class="'+p.widgetBaseClass+'-group-label">'+b[k].parentOptGroup+"</span><ul></ul></li>").appendTo(this.list).find("ul").append(e)}}else{e.appendTo(this.list)}this.list.bind("mousedown.selectmenu mouseup.selectmenu",function(){return false});if(f.icons){for(var h in f.icons){if(e.is(f.icons[h].find)){e.data("optionClasses",b[k].classes+" "+p.widgetBaseClass+"-hasIcon").addClass(p.widgetBaseClass+"-hasIcon");var n=f.icons[h].icon||"";e.find("a:eq(0)").prepend('<span class="'+p.widgetBaseClass+"-item-icon ui-icon "+n+'"></span>');if(b[k].bgImage){e.find("span").css("background-image",b[k].bgImage)}}}}}var d=(f.style=="dropdown");this.newelement.toggleClass(p.widgetBaseClass+"-dropdown",d).toggleClass(p.widgetBaseClass+"-popup",!d);this.list.toggleClass(p.widgetBaseClass+"-menu-dropdown ui-corner-bottom",d).toggleClass(p.widgetBaseClass+"-menu-popup ui-corner-all",!d).find("li:first").toggleClass("ui-corner-top",!d).end().find("li:last").addClass("ui-corner-bottom");this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s",d).toggleClass("ui-icon-triangle-2-n-s",!d);if(f.transferClasses){var q=this.element.attr("class")||"";this.newelement.add(this.list).addClass(q)}var g=this.element.width();

if(f.style=="dropdown"){this.list.width(f.menuWidth?f.menuWidth:(f.width?f.width:g))}else{this.list.width(f.menuWidth?f.menuWidth:(f.width?f.width-f.handleWidth:g-f.handleWidth))}if(f.maxHeight){if(f.maxHeight<this.list.height()){this.list.height(f.maxHeight)}}else{if(!f.format&&(a(window).height()/3)<this.list.height()){f.maxHeight=a(window).height()/3;this.list.height(f.maxHeight)}}this._optionLis=this.list.find("li:not(."+p.widgetBaseClass+"-group)");if(this.element.attr("disabled")===true){this.disable()}this.index(this._selectedIndex());window.setTimeout(function(){p._refreshPosition()},200)},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu");a(window).unbind(".selectmenu");a(document).unbind(".selectmenu");a("label[for="+this.newelement.attr("id")+"]").attr("for",this.element.attr("id")).unbind(".selectmenu");if(this.options.wrapperElement){this.newelement.unwrap();this.list.unwrap()}this.newelement.remove();this.list.remove();this.element.show();a.Widget.prototype.destroy.apply(this,arguments)},_typeAhead:function(f,e){var b=this;if(!b._prevChar){b._prevChar=["",0]}var h=String.fromCharCode(f);c=h.toLowerCase();var d=false;function g(i,j){d=true;a(i).trigger(e);b._prevChar[1]=j}this.list.find("li a").each(function(j){if(!d){var k=a(this).text();if(k.indexOf(h)===0||k.indexOf(c)===0){if(b._prevChar[0]==h){if(b._prevChar[1]<j){g(this,j)}}else{g(this,j)}}}});this._prevChar[0]=h},_typeAheadInput:function(g,f,d){var b=this;if(!b.inputText){b.inputText=""}g.preventDefault();var i=String.fromCharCode(f);var h=/[A-Za-z0-9 ]{1}$/;if(!this.list.is(":visible")){b.open()}if(a.ui.keyCode.BACKSPACE==f){if(b.inputText.length>0){b.inputText=b.inputText.substr(0,b.inputText.length-1)}else{return}}else{if(!h.test(i)){return}else{b.inputText=b.inputText+i}}var e="";this.list.find("li a").each(function(k){var l=a(this).text().toLowerCase();var j=l.indexOf(b.inputText.toLowerCase());if(j==0){e=a(this).text().substr(0,b.inputText.length);a(this).parent().show();a(this).focus()}else{a(this).parent().hide()}});this.inputBox.val("");if(e==""){this.list.find("li a").each(function(){a(this).parent().show()});this.inputBox.val(b.inputText)}else{this.inputBox.val(e)}this.inputBox.focus()},_uiHash:function(){var b=this.index();return{index:b,option:a("option",this.element).get(b),value:this.element[0].value}},open:function(e){var d=this,f=this.options;if(f.autocomplete==true){d.inputText="";this.list.find("li a").each(function(){a(this).parent().show()})}var b=this.newelement.attr("aria-disabled");if(b!="true"){this.list.parent().css("display","block");this._refreshPosition();this._closeOthers(e);this.newelement.addClass("ui-state-active");if(d.options.wrapperElement){this.list.parent().appendTo("body")}else{this.list.appendTo("body")}this.list.addClass(d.widgetBaseClass+"-open").attr("aria-hidden",false).find("li:not(."+d.widgetBaseClass+"-group):eq("+this._selectedIndex()+") a")[0].focus();if(this.options.style=="dropdown"){this.newelement.removeClass("ui-corner-all").addClass("ui-corner-top")}this._refreshPosition();this._trigger("open",e,this._uiHash())}},close:function(d,b){var e=this.options;if(e.autocomplete==true){this.inputBox.val(this._selectedOptionLi().find("a:eq(0)").children("span").first().text())}if(this.newelement.is(".ui-state-active")){this.newelement.removeClass("ui-state-active");this.list.attr("aria-hidden",true).removeClass(this.widgetBaseClass+"-open");if(this.options.style=="dropdown"){this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all")}if(b){this.newelement.focus()}this._trigger("close",d,this._uiHash())}},change:function(b){this.element.trigger("change");this._trigger("change",b,this._uiHash())},select:function(b){this._trigger("select",b,this._uiHash())},_closeOthers:function(b){a("."+this.widgetBaseClass+".ui-state-active").not(this.newelement).each(function(){a(this).data("selectelement").selectmenu("close",b)});a("."+this.widgetBaseClass+".ui-state-hover").trigger("mouseout")},_toggle:function(d,b){if(this.list.is("."+this.widgetBaseClass+"-open")){this.close(d,b)}else{this.open(d)}},_formatText:function(b){return(this.options.format?this.options.format(b):b)},_selectedIndex:function(){return this.element[0].selectedIndex},_selectedOptionLi:function(){return this._optionLis.eq(this._selectedIndex())},_focusedOptionLi:function(){return this.list.find("."+this.widgetBaseClass+"-item-focus")},_moveSelection:function(e){var d=parseInt(this._selectedOptionLi().data("index"),10);var b=d+e;return this._optionLis.eq(b).trigger("mouseup")},_moveFocus:function(f){if(!isNaN(f)){var e=parseInt(this._focusedOptionLi().data("index")||0,10);var d=e+f}else{var d=parseInt(this._optionLis.filter(f).data("index"),10)}if(d<0){d=0}if(d>this._optionLis.size()-1){d=this._optionLis.size()-1}var b=this.widgetBaseClass+"-item-"+Math.round(Math.random()*1000);this._focusedOptionLi().find("a:eq(0)").attr("id","");this._optionLis.eq(d).find("a:eq(0)").attr("id",b).focus();this.list.attr("aria-activedescendant",b)},_scrollPage:function(d){var b=Math.floor(this.list.outerHeight()/this.list.find("li:first").outerHeight());b=(d=="up"?-b:b);this._moveFocus(b)},_setOption:function(b,d){this.options[b]=d;if(b=="disabled"){this.close();this.element.add(this.newelement).add(this.list)[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",d)}},index:function(b){if(arguments.length){this.element[0].selectedIndex=b;this._refreshValue()}else{return this._selectedIndex()}},value:function(b){if(arguments.length){if(typeof b=="number"){this.index(b)}else{if(typeof b=="string"){this.element[0].value=b;this._refreshValue()}}}else{return this.element[0].value}},_refreshValue:function(){var g=this.options;var e=(this.options.style=="popup")?" ui-state-active":"";var d=this.widgetBaseClass+"-item-"+Math.round(Math.random()*1000);this.list.find("."+this.widgetBaseClass+"-item-selected").removeClass(this.widgetBaseClass+"-item-selected"+e).find("a").attr("aria-selected","false").attr("id","");this._selectedOptionLi().addClass(this.widgetBaseClass+"-item-selected"+e).find("a").attr("aria-selected","true").attr("id",d);var b=(this.newelement.data("optionClasses")?this.newelement.data("optionClasses"):"");var f=(this._selectedOptionLi().data("optionClasses")?this._selectedOptionLi().data("optionClasses"):"");this.newelement.removeClass(b).data("optionClasses",f).addClass(f).find("."+this.widgetBaseClass+"-status").html(this._selectedOptionLi().find("a:eq(0)").html());if(g.autocomplete==true){this.inputBox.val(this._selectedOptionLi().find("a:eq(0)").children("span").first().text())}this.list.attr("aria-activedescendant",d)},_refreshPosition:function(){var e=this.options;if(e.style=="popup"&&!e.positionOptions.offset){var d=this._selectedOptionLi();var b="0 -"+(d.outerHeight()+d.offset().top-this.list.offset().top)}this.list.css({zIndex:this.element.zIndex()}).position({of:e.positionOptions.of||this.newelement,my:e.positionOptions.my,at:e.positionOptions.at,offset:e.positionOptions.offset||b})}})})(jQuery);