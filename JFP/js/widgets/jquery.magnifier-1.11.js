jQuery.noConflict();jQuery.imageMagnify={dsettings:{magnifyby:3,duration:500,imgopacity:0.2},zIndexcounter:100,refreshoffsets:function(e,b,a){var c=b.offset();var d={x:e.scrollLeft(),y:e.scrollTop(),w:e.width(),h:e.height()};a.attrs.x=c.left;a.attrs.y=c.top;a.newattrs.x=a.attrs.x;a.newattrs.y=a.attrs.y},magnify:function(f,a,c){var d={};var d=jQuery.extend(d,this.dsettings,c);var b=(c.thumbdimensions)?{w:c.thumbdimensions[0],h:c.thumbdimensions[1]}:{w:a.outerWidth(),h:a.outerHeight()};var g={};g.w=(d.magnifyto)?d.magnifyto:Math.round(b.w*d.magnifyby);g.h=(d.magnifyto)?Math.round(b.h*g.w/b.w):Math.round(b.h*d.magnifyby);a.parent().width(b.w);a.parent().height(b.h);if(a.data("imgshell")){a.data("imgshell").$clone.remove();a.css({opacity:1}).unbind("click.magnify")}var e=a.clone().attr("id",a.attr("id")+"_magnified").css({position:"absolute",left:0,top:0,visibility:"hidden",cursor:"pointer"}).appendTo(document.body);e.data("$relatedtarget",a);a.data("imgshell",{$clone:e,attrs:b,newattrs:g});e.addClass("jfpw-magnifier-clone");a.parent().bind("click.magnify",function(k){f(this).css({opacity:d.imgopacity});var j=f(this).find(".jfpw-magnifier");var h=j.data("imgshell");jQuery.imageMagnify.refreshoffsets(f(window),j,h);var i=h.$clone;if(!i.parent().hasClass("magnifier-magnified-wrap")){i.stop().css({zIndex:++jQuery.imageMagnify.zIndexcounter,left:h.attrs.x,top:h.attrs.y,width:h.attrs.w,height:h.attrs.h,opacity:0,visibility:"visible",display:"block"}).animate({opacity:1,left:h.newattrs.x,top:h.newattrs.y,width:h.newattrs.w,height:h.newattrs.h},d.duration,function(){j.trigger("strech",{type:"strech",wrapper:j});i.wrap("<a class='magnifier-magnified-wrap'></a>").after("<div class='magnifier-magnified-icon jfpw-magnified-icon-show'></div>").css("left","").css("top","").parent().css({left:h.newattrs.x,top:h.newattrs.y,width:h.newattrs.w,height:h.newattrs.h,opacity:1});i.parent().find(".magnifier-magnified-icon").hover(function(){jQuery(this).removeClass("jfpw-magnified-icon-hide").addClass("jfpw-magnified-icon-show")},function(){jQuery(this).removeClass("jfpw-magnified-icon-show").addClass("jfpw-magnified-icon-hide")});i.hover(function(){jQuery(this).parent().find(".magnifier-magnified-icon").removeClass("jfpw-magnified-icon-hide").addClass("jfpw-magnified-icon-show")},function(){jQuery(this).parent().find(".magnifier-magnified-icon").removeClass("jfpw-magnified-icon-show").addClass("jfpw-magnified-icon-hide")});i.parent().click(function(n){var m=f(this).find(".jfpw-magnifier-clone");var l=m.data("$relatedtarget").data("imgshell");m.siblings().remove();m.unwrap();m.css("left",l.newattrs.x).css("top",l.newattrs.y);jQuery.imageMagnify.refreshoffsets(f(window),m.data("$relatedtarget"),l);m.stop().animate({opacity:0,left:l.attrs.x,top:l.attrs.y,width:l.attrs.w,height:l.attrs.h},d.duration,function(){m.hide();m.data("$relatedtarget").parent().css({opacity:1});m.data("$relatedtarget").trigger("shrink",{type:"shrink",wrapper:m})})})})}})}};jQuery.fn.imageMagnify=function(a){var b=jQuery;return this.each(function(){var c=b(this);if(this.tagName!="IMG"){return true}if(parseInt(c.css("width"))>0&&parseInt(c.css("height"))>0||a.thumbdimensions){jQuery.imageMagnify.magnify(b,c,a)}else{if(this.complete){jQuery.imageMagnify.magnify(b,c,a)}else{b(this).bind("load",function(){jQuery.imageMagnify.magnify(b,c,a)})}}})};jQuery.fn.applyMagnifier=function(a){var b=jQuery;return this.each(function(){var c=b(this);if(this.tagName!="IMG"){return true}})};jQuery(document).ready(function(b){var c=b(".magnify");c.each(function(f){var d=b(this);var e={};if(d.attr("data-magnifyto")){e.magnifyto=parseFloat(d.attr("data-magnifyto"))}if(d.attr("data-magnifyby")){e.magnifyby=parseFloat(d.attr("data-magnifyby"))}if(d.attr("data-magnifyduration")){e.duration=parseInt(d.attr("data-magnifyduration"))}d.imageMagnify(e)});var a=b('a[rel^="magnify["]');a.each(function(f){var d=b(this);var e=d.attr("rel").match(/\[.+\]/)[0].replace(/[\[\]']/g,"");d.data("magnifyimageid",e);d.click(function(g){b("#"+b(this).data("magnifyimageid")).trigger("click.magnify");g.preventDefault()})})});