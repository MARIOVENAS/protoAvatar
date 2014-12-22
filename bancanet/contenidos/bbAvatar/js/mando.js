function contenidoMenuQueHacer(tipo){

	var ligasMenu = new Array();

	switch ( tipo ){

		case "quehacer1":{

			ligasMenu = [altPag, admChq, iraMov, iraDet, conNot];

			break;

		}

		case "quehacer2":{

			ligasMenu = [hstBel, pndAut];

			break;

		}

		case "quehacer3":{

			ligasMenu = [hstBel, pndAut, altCta];

			break;

		}

		case "quehacer4":{

			ligasMenu = [hstBel, altCta];

			break;

		}

		case "quehacer5":{

			ligasMenu = [hstBel];

			break;

		}

		case "quehacer6":{

			  ligasMenu = [hstBel, domPag];

			  break;

		}



		case "quehacer7":{

			  ligasMenu = [hstBel, altSer];

			  break;

		}

		case "quehacer8":{

			  ligasMenu = [hstBel, verSal];

			  break;

		}

		case "quehacer9":{

			  ligasMenu = [reaTra, hacPag];

			  break;

		}	

		case "quehacer10":{

			  ligasMenu = [verSal];

			  break;

		}

	}

	return ligasMenu;

}



/** jquery.easin.js **/

jQuery.easin={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easin['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easin['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easin['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};



(function(jQuery){

	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){

		jQuery.fx.step[attr] = function(fx){

			if ( fx.state == 0 ) {

				fx.start = getColor( fx.elem, attr );

				fx.end = getRGB( fx.end );

			}

			if ( fx.start )

				fx.elem.style[attr] = "rgb(" + [

					Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),

					Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),

					Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)

				].join(",") + ")";

		}

	});

	function getRGB(color){

		var result;

		if ( color && color.constructor == Array && color.length == 3 )

			return color;



		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))

			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];



		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))

			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];



		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))

			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];



		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))

			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];



		return colors[jQuery.trim(color).toLowerCase()];

	}	

	function getColor(elem, attr) {

		var color;

		do {

			color = jQuery.curCSS(elem, attr);



			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )

				break;



			attr = "backgroundColor";

		} while ( elem = elem.parentNode );



		return getRGB(color);

	};

})(jQuery);

(function($) {

$.fn.comportamientoMenu = function(o) {

    o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});

    return this.each(function() {

        var me = $(this), noop = function(){},

            $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),

            $li = $(">li", this), curr = $("li", this)[0] || $($li[0]), $levelTwo = $('#menuSegundoNivel'), $str = 'segNivel';



        $li.not(".back").click(function(){

            move(this);

        });

		$levelTwo.click(function(event){

			if( $(event.target).is('a') ){

				var idLevel = $(event.target).parent().parent().attr('id'); 

				var indexLevel = parseInt( idLevel.split($str).join('') ) - 1;

				var elemento = document.getElementsByTagName("li")[indexLevel];

				var el = document.getElementsByTagName("li")[indexLevel];

				$('ul a', '#menu').removeClass('parent');

				$('ul a:eq('+ indexLevel +')', '#menu').addClass('parent');

				move(elemento);

				marcarPestanna( $('ul.menu li:eq('+ indexLevel +')').find('span') );

			}

		});

		setCurr(curr);

        function setCurr(el){

            $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });

            curr = el;

        };

		function move(el){

            $back.each(function(){

                $.dequeue(this, "fx");}

            ).animate({

                width: el.offsetWidth-5,

                left: el.offsetLeft

            }, o.speed, o.fx);

        };

    });

};

})(jQuery);



var activaClass = 'segNivel1';

var tempClass = '';

function marcarPestanna(el){

	activaClass = el.attr('class');

	activaClass = str_replace(activaClass,'noh','');

	activaClass = str_replace(activaClass,'sih','');

	activaClass = str_replace(activaClass,' ','');

	if( el.hasClass("noh") ){

		$('span.sih').animate({color: 'rgb(255,255,255)'}, 500);

		el.animate({color: 'rgb(0,0,0)'}, 500,

			function(){

				$('span.sih').css({color: '#FFFFFF'}).removeClass('sih').addClass('noh');

				el.css({color: '#000000'}).removeClass('noh').addClass('sih');

			}

		);

	}else{

		el.animate({color: 'rgb(0,0,0)'}, 500,

			function(){

				el.css({color: '#000000'});

			}

		);

	}

}

function setPestanna(){

	$('ul a', '#menu').css({'background':'none'});

	$('ul a span', '#menu').css({'background':'none'});

	$('.menu>li>a, .menu>li>a span', '#menu').css({background: 'none'});

	$('.oculto').hide();

	$('#'+activaClass).show();

	$('.contenedor_menuSN').css({background:'#FFFFFF'});

	$('.btnServicioConten').show();

	$('.separacionFin').hide();

	$('ul a', '#menu').not(".parent").find('span').css({color:'#F1F2F2'});

}

function activarMenuS(){

    var $ = jQuery;

    $.fn.retarder = function(delay, method){

    	var node = this;

        if (node.length){

            if (node[0]._timer_) clearTimeout(node[0]._timer_);

            node[0]._timer_ = setTimeout(function(){ method(node); }, delay);

        }

        return this;

    };

    $('#menu').addClass('js-active');

    $('ul div', '#menu').css('visibility', 'hidden');

    if(detectaDispositivoMobile()){

		var links = $('.menu>li>a, .menu>li>a span', '#menu').css({background: 'none'});

	}

	$('#menu ul.menu').comportamientoMenu({ speed: 400 });

   	$('ul a', '#menu').click(

		function(){

			$('ul a', '#menu').removeClass('parent');

			$(this).addClass('parent');

			marcarPestanna( $(this).find('span') );

			if( $(this).find('span').text() == 'Digitem' ){

				$('.btnComunConten').hide();

				$('.btnDigitemConten').show();

				$('#ligasOnline').hide();

				procesarBannerFondos(true);

			}else{

				$('.btnDigitemConten').hide();

				$('.btnComunConten').show();

				$('#ligasOnline').show();

				procesarBannerFondos(false);

			}

		}

	);

   	$('ul a', '#menu').hover(

		function(){

			if(!detectaDispositivoMobile()){

				if( $(this).find('span').hasClass("noh") ){

					$(this).find('span').css({color: '#003066'});

				}

				var extraeClass = $(this).find('span').attr('class');

				extraeClass = str_replace(extraeClass,'noh','');

				extraeClass = str_replace(extraeClass,'sih','');

				extraeClass = str_replace(extraeClass,' ','');

				$('.oculto').hide();

				$('#'+extraeClass).show();

				$('.contenedor_menuSN').css({background:'#FFFFFF'});

				$('.btnServicioConten').hide();

				$('.separacionFin').show();

				$('ul a', '#menu').css({'background':'none'});

				$('ul a span', '#menu').css({'background':'none'});

				$('ul a', '#menu').not(".parent").find('span').css({color:'#F1F2F2'});

				$(this).css({color:'#003066', 'background':'#FFFFFF'});

				$(this).find('span').css({color:'#003066', 'background':'#FFFFFF'});

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				if( $(this).find('span').hasClass("noh") ){

					$(this).find('span').css({color: '#FFFFFF'});

					$(this).find('span').css({color:'#003066'});

				}

			}

		}

	);

	$('.contenedor_menus').hover(function(){},function(){setPestanna();});

	$('#menup').hover(function(){setPestanna()},function(){setPestanna()});

	

	

	$(window).bind('resize', function(){

		igualarDimenc1();

		igualarDimenc2();

	});

}



function creaPrimerNivel(){

	var strMenu = '';

	for (i=0;i<menus.length;i++){

		if(i==0){

			strMenu += '<li><a href="#" class="parent"><span class="sih  segNivel'+(i+1)+'">'

			+ menus[i][1]

			+ '</span></a></li>\n'

		}else{

			strMenu += '<li><a href="#"><span class="noh  segNivel'+(i+1)+'">'

			+ menus[i][1]

			+ '</span></a></li>\n'

		}

	}

	return strMenu;

}

function creaPrimerNivelPie(){

	var strMenu = '';

	for (i=0;i<menus.length;i++){

		strMenu += '<a href="#">'

		+ menus[i][1];

		if(i == (menus.length-1)){

			strMenu += '</a>\n'

		}else{

			strMenu += '</a> | \n'

		}

	}

	return strMenu;

}

function creaSegundoNivel(){

	var strMenu2 = '';

	var segundoNivel;

	for (i=0;i<menus.length;i++){

		segundoNivel = menus[i][2];

		strMenu2 += '<div id="segNivel'+ (i+1) +'" class="oculto">\n'

		for(j=0; j<segundoNivel.length; j++){

			if(j==0){

				strMenu2 += '<div><a href="#" onclick="'

				+ segundoNivel[j][2]

				+ 'setBanner( \'' + menus[i][3] + '\', \'' + menus[i][4] + '\' );' + '">'

				+ segundoNivel[j][1] + '</a></div>\n'

			}else{

				strMenu2 += '<div class="borderLeft_01589f"><a href="#" class="exLiga" onclick="'

				+ segundoNivel[j][2]

				+ 'setBanner( \'' + menus[i][3] + '\', \'' + menus[i][4] + '\' );' + '">' 

				+ segundoNivel[j][1] + '</a></div>\n'

			}			

		}

		strMenu2 += '</div>\n'

	}

	return strMenu2;

}

function setBanner( imagen, ruta ){

	if( ruta!="" ){

		$("#bannerVariable").css({"background": imagen});

		$("#bannerVariable").unbind("click");

		$("#bannerVariable").bind('click',{url:ruta},function(event){

			abrirVentana(event.data.url);

		});

	}

}



function eventoNivel1(segNivel){

	$('.oculto').hide();	

	$('#menuSegundoNivel a').removeClass().addClass('exLiga');

	$('#'+segNivel+' a:eq(0)').removeClass().addClass('color000');

	$('#'+segNivel).show();

	$('#'+segNivel+' a:eq(0)').trigger('click');

}

function activaEventosNivel1() {

	var extraeClass;

	$('ul.menu').click(

		function(event){

			event.preventDefault();

			if($(event.target).is('span')){

				extraeClass = $(event.target).attr('class');

				extraeClass = str_replace(extraeClass,'noh','');

				extraeClass = str_replace(extraeClass,'sih','');

				extraeClass = str_replace(extraeClass,' ','');

				eventoNivel1(extraeClass);

			}

		}

	);

}



function activaEventosSegNivel() {

	$('#menuSegundoNivel').click(

		function(event){

			event.preventDefault();

			if($(event.target).is('a')){

				var anchoTabla = $('.paneles').width();

				var anchocelIz = $('.panelCentro2').width();

				var anchocelDe = $('.panelDerecho').width();

				var anchoifr = $('.ifrContenedor').width();

				indiceLiga = $(event.target).index('#menuSegundoNivel a');

				if(!(navigator.userAgent.toLowerCase().indexOf('chrome/') > -1)){

					$('.contenedorPrincipal').css({'visibility':'visible'})

					igualarDimenc2();

				}

				$('.cortiContPrincipal').hide();

				if( $(event.target).html() == "Saldos" ){

					$('.contenedorTitulo').hide();

				}else{

					$('.contenedorTitulo').show();

				}

				if(pos3N[indiceLiga] == 0){

					$('.panelIzquierdo').hide()

					$('.panelDerecho').hide();

					content3N[indiceLiga]

					if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '7'){

						$('.iframeCli').css({width: $('.contenedor_menus2').width()+'px'});

						setTimeout( function(){ $('.ifrContenedor').css({width: '100%'}); }, 0);										

					}

				}else{

					if(pos3N[indiceLiga] == 1){

						$("#bannerIzq").css("margin-top","20px");

						if($(event.target).attr('onclick') != $('#segNivel4').children('div:first').children('a:first').attr('onclick')){

							$('.menu3N').css('display','block');

							$("#bannerIzq").css("margin-top","20px");

						}else{

							if(flagAfore != "OK"){

								$("#bannerIzq").css("margin-top","0px");

							}

						}

						$('.menu3N').html(content3N[indiceLiga]);

						if($('.menu3N div:eq(0)').hasClass('menu3N_p7')){

							$('.pest4n:eq(0)').trigger('click')

						}else{

							var menuQhacerClass = extraeQhacerClass( $('.menu3N_p1:eq(0)').find('a') );

							quehacer(menuQhacerClass);

						}

						$('.panelIzquierdo').show();

						$('.panelDerecho').hide();

						if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '7'){

							$('.paneles').css({width: $('.contenedor_menus2').width()});

							$('.iframeCli').css({width:$('.contenedor_menus2').width()-215});

							setTimeout( function(){ $('.ifrContenedor').css({width: '100%'}); }, 0)

						}	

					}else{

						if(pos3N[indiceLiga] == 2){

							$('.panelIzquierdo').hide();

							$('.panelDerecho').hide();

							activaFlechas();

							if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '7'){

								$('.paneles').css({width: $('.contenedor_menus2').width()});

								$('.iframeCli').css({width:$('.contenedor_menus2').width()-350});

								setTimeout( function(){ $('.ifrContenedor').css({width: '100%'}); }, 0);

							}

						}else{

							if(pos3N[indiceLiga] == 3){

								$(".menu3N").hide();

								$("#bannerIzq").css("margin-top","0px");

								quehacer("quehacer10");						

								$('.panelIzquierdo').show();

								$('.panelDerecho').hide();

							}

						}

					}

				}

			}

		}

	);

	return false;

}

function extraeQhacerClass(el){

	var classEl = el.attr('class');

	classEl = str_replace(classEl,'exLiga3','');

	classEl = str_replace(classEl,'color000','');

	classEl = str_replace(classEl,'pest4n','');

	classEl = str_replace(classEl,'menu3N_p4in','');

	classEl = str_replace(classEl,'menu3N_p6in','');

	classEl = str_replace(classEl,'menu3N_p7in','');

	classEl = str_replace(classEl,' ','');	

	return classEl

}

function activaEventosNivel3() {

	$('.menu3N').click(

		function(event){

			event.preventDefault();			

			if(!(navigator.userAgent.toLowerCase().indexOf('chrome/') > -1)){

				$('.iframeCli').css({'visibility':'visible'});

				igualarDimenc1();

			}			

			$('.cortiContIfr').show();

			if($(event.target).is('a') || ($(event.target).is('div') && $(event.target).hasClass('pest4n')) ){

				var menuQhacerClass = extraeQhacerClass( $(event.target) );

				quehacer(menuQhacerClass);

			}				

		}

	);

}



var pos3N = new Array();

var content3N = new Array();

function creaTercerNivel(){

	var strMenu3 = '';

	var tercerNivel;

	var acumulado = 0;

	var cuartoNivel;

	var cuartoNivelCont = 0;

	for(i=0;i<menus.length;i++){

		tercerNivel = menus[i][2];

		for(j=0; j<tercerNivel.length; j++){

			if(tercerNivel[j][0] == 0){

				pos3N[acumulado] = 0;

				content3N[acumulado] = 0;

			}else{

				if(tercerNivel[j][0] == 2){

					pos3N[acumulado] = 2;

					content3N[acumulado] = 0;

				}else{

					if(tercerNivel[j][0] == 3){

						pos3N[acumulado] = 3;

						content3N[acumulado] = 3;

					}else{

						pos3N[acumulado] = 1;

						arrayTemp = tercerNivel[j][3];

						for(k=0; k<arrayTemp.length; k++){

							if(k==0){

								if(arrayTemp[k][0] == 1){

									cuartoNivelCont++

									cuartoNivel = arrayTemp[k][4];

									strMenu3 = '\n <div class="menu3N_p7"> \n <div class="menu3N_p7in pest4n '

									+ arrayTemp[k][3]

									+ '" id="pest4n_'

									+ cuartoNivelCont

									+ '">'

									+ arrayTemp[k][1]

									+ '</div>\n</div>\n<div class="menu4NConte" id="pest4n_'

									+ cuartoNivelCont 

									+ 'b">\n';

									for(h=0; h<cuartoNivel.length; h++){

										if(h == cuartoNivel.length-1){

											strMenu3  += '<div class="menu3N_p5b"><a href="#" onclick=" '

											+ cuartoNivel[h][2]

											+'">'

											+ cuartoNivel[h][1]

											+ '</a></div>';

										}else{

											strMenu3  += '<div class="menu3N_p5"><a href="#" onclick=" '

											+ cuartoNivel[h][2]

											+'">'

											+ cuartoNivel[h][1]

											+ '</a></div>';

										}

									}

									strMenu3 += '</div>';

								

								}else{

									strMenu3 = '<div class="menu3N_p1"><a href="#" onclick="'

									+ arrayTemp[k][2] + '"'						

									+' class="color000 '

									+ arrayTemp[k][3]

									+ '">'

									+ arrayTemp[k][1]

									+'</a></div>\n';

								}

							}else{

								if(k==(arrayTemp.length-1)){

									if(arrayTemp[k][0] == 1){

										cuartoNivelCont++

										cuartoNivel = arrayTemp[k][4];

										strMenu3 += '\n <div class="menu3N_p6"> \n <div class="menu3N_p6in pest4n '

										+ arrayTemp[k][3]

										+ '" id="pest4n_'

										+ cuartoNivelCont

										+ '">'

										+ arrayTemp[k][1]

										+ '</div>\n</div>\n<div class="menu4NConte" id="pest4n_'

										+ cuartoNivelCont 

										+ 'b">\n';

										for(h=0; h<cuartoNivel.length; h++){

											if(h == cuartoNivel.length-1){

												strMenu3  += '<div class="menu3N_p5b"><a href="#" onclick=" '

												+ cuartoNivel[h][2]

												+'">'

												+ cuartoNivel[h][1]

												+ '</a></div>';

											}else{

												strMenu3  += '<div class="menu3N_p5"><a href="#" onclick=" '

												+ cuartoNivel[h][2]

												+'">'

												+ cuartoNivel[h][1]

												+ '</a></div>';

											}

										}

										strMenu3 += '</div>';

									

									}else{

										strMenu3 += '<div class="menu3N_p3"><a class="'

										+ arrayTemp[k][3]

										+ '" href="#" onclick="'

										+ arrayTemp[k][2] + '">'

										+ arrayTemp[k][1]

										+'</a></div>\n';

									}								

								}else{

									if(arrayTemp[k][0] == 1){

										cuartoNivelCont++

										cuartoNivel = arrayTemp[k][4];

										strMenu3 += '\n <div class="menu3N_p4">\n<div class="menu3N_p4in pest4n ' 

										+ arrayTemp[k][3]

										+ '" id="pest4n_'

										+ cuartoNivelCont

										+ '">'

										+ arrayTemp[k][1]

										+'</div>\n</div>\n<div class="menu4NConte" id="pest4n_'

										+ cuartoNivelCont 

										+'b">\n';

										for(h=0; h<cuartoNivel.length; h++){

											if(h == cuartoNivel.length-1){

												strMenu3  += '<div class="menu3N_p5b"><a href="#" onclick=" '

												+ cuartoNivel[h][2]

												+'">'

												+ cuartoNivel[h][1]

												+ '</a></div>';

											}else{

												strMenu3  += '<div class="menu3N_p5"><a href="#" onclick=" '

												+ cuartoNivel[h][2]

												+'">'

												+ cuartoNivel[h][1]

												+ '</a></div>';

											}

										}

										strMenu3 += '</div>';

									}else{

										strMenu3 += '<div class="menu3N_p2"><a href="#" class="' 

										+ arrayTemp[k][3]

										+ '" onclick="'

										+ arrayTemp[k][2] + '">'

										+ arrayTemp[k][1]

										+'</a></div>\n';

									}

								}

							}					

						}

						content3N[acumulado] = strMenu3;

					}

				}

			}

			acumulado++;

		}

	}

}





function quehacer(tipo){ 

	array_quehacer = contenidoMenuQueHacer(tipo)

	if(tipo!=0){

		cuadro_quehacer = '<div class="menu4N_p1">'+tit4Niv+'</div>';

		for( i=0; i<array_quehacer.length ; i++){

			cuadro_quehacer += '<div class="menu4N_p2">&raquo; <a href="#" onclick="'+array_quehacer[i][1]+'">'+array_quehacer[i][0]+'</a></div>';

		}

	}else{

		cuadro_quehacer = '';

	}

	$('.menu4N').html(cuadro_quehacer);

}



function str_replace(cadena, cambia_esto, por_esto) {

  	return cadena.split(cambia_esto).join(por_esto);

}



function activaPest4N(){

	var alturas = new Array();

	var indiceBloque;

	var tamannoMenu;

	$('.pest4n').each(

		function(i){

			alturas[i] = $('#pest4n_'+(i+1)+'b').height();

		}

	)

	$('.menu3N').click(

		function(event){

			event.preventDefault();

			indiceBloque = $(event.target).index('.pest4n');

			idBloque = $(event.target).attr("id");

			tamannoMenu = $('.pest4n').size();

			if( $(event.target).is('.pest4n') ){

				if( (tamannoMenu-1) ==  indiceBloque && $(event.target).hasClass('menu3N_p6in') ){

					if( $(event.target).hasClass('menu3N_p6inH') ){

						$(event.target).removeClass('menu3N_p6inH');

						$(event.target).parent().removeClass('menu3N_p6h');

						$('#'+idBloque + 'b').hide();

					}else{

						$(event.target).addClass('menu3N_p6inH');

						$(event.target).parent().addClass('menu3N_p6h');

						$('.menu4NConte').each(

							function(t){

								if(t == indiceBloque){

									$('#'+ idBloque + 'b').show();

									$('#'+ idBloque + 'b').find('a:eq(0)').trigger('click');	

								}else{

									$('.pest4n:eq('+t+')').removeClass('menu3N_p4inH');

									$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p4h');

									$('.pest4n:eq('+t+')').removeClass('menu3N_p6inH');

									$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p6h');

									$('.pest4n:eq('+t+')').removeClass('menu3N_p7inH');

									$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p7h');

									$(this).hide();

								}

							}

						);

					}						

				

				}else{

					if( indiceBloque == 0 && $(event.target).hasClass('menu3N_p7in') ){

						if( $(event.target).hasClass('menu3N_p7inH') ){

							$(event.target).removeClass('menu3N_p7inH');

							$(event.target).parent().removeClass('menu3N_p7h');

							$('#'+ idBloque + 'b').hide();

						}else{

							$(event.target).addClass('menu3N_p7inH');

							$(event.target).parent().addClass('menu3N_p7h');

							$('.menu4NConte').each(

								function(t){

									if(t == indiceBloque){

										$('#'+ idBloque + 'b').show();

										$('#'+ idBloque + 'b').find('a:eq(0)').trigger('click');	

									}else{

										$('.pest4n:eq('+t+')').removeClass('menu3N_p4inH');

										$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p4h');

										$('.pest4n:eq('+t+')').removeClass('menu3N_p6inH');

										$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p6h');

										$('.pest4n:eq('+t+')').removeClass('menu3N_p7inH');

										$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p7h');

										$(this).hide();

									}

								}

							);

						}

					}else{

					

						if( $(event.target).hasClass('menu3N_p4inH') ){

							$(event.target).removeClass('menu3N_p4inH');

							$(event.target).parent().removeClass('menu3N_p4h');

							$('#'+ idBloque + 'b').hide();

						}else{

							$(event.target).addClass('menu3N_p4inH');

							$(event.target).parent().addClass('menu3N_p4h');

							$('.menu4NConte').each(

								function(t){

									if(t == indiceBloque){

										$('#'+ idBloque + 'b').show();

										$('#'+ idBloque + 'b').find('a:eq(0)').trigger('click');	

									}else{

										$('.pest4n:eq('+t+')').removeClass('menu3N_p4inH');

										$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p4h');

										$('.pest4n:eq('+t+')').removeClass('menu3N_p6inH');

										$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p6h');

										$('.pest4n:eq('+t+')').removeClass('menu3N_p7inH');

										$('.pest4n:eq('+t+')').parent().removeClass('menu3N_p7h');

										$(this).hide();

									}

								}

							);

						}

					}

				}					

			}

		}

	)

}



function defineMenus(){

	var primerNivel = creaPrimerNivel();

	var segundoNivel = creaSegundoNivel();

	var tercerNivel = creaTercerNivel();

	var primerNivelPie = creaPrimerNivelPie();

	$('div#menu ul.menu').html(primerNivel);

	activarMenuS();

	$('#menuSegundoNivel').html(segundoNivel);

	$('#segNivel1').show().find('a:eq(0)').addClass('color000');

	$('.contenedorPie2_ligas1').html(primerNivelPie);

	activaEventosNivel1();

	activaEventosSegNivel();

	activaEventosNivel3();

	activaPest4N();

}



function creaContenedor(){

}



function cargaDoc(pRuta){

	carpeta = 'contenidos/';

	$('.ifrContenedor').attr('src', carpeta+pRuta);

}

function docCargadoChrome(){

	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;

	if(is_chrome){

		$('.ifrContenedor').load(function() {

			if($('.cortiContPrincipal').css('display') == 'none' ){

				$('.cortiContIfr').fadeOut('fast');

			}else{

				$('.cortiContPrincipal').fadeOut('fast');

			}

			activaFlechas();

		});

	}

}



function activaFlechas(){

	$('#btnCeles1').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel2In').fadeIn('fast');			

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

				$('.ligaPanel2In').fadeOut('fast');

			}

		}

	);

	$('#btnCeles2').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel3In').fadeIn('fast');

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

				$('.ligaPanel3In').fadeOut('fast');

			}

		}

	);

	$('#btnCeles3').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel4In').fadeIn('fast');

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

				$('.ligaPanel4In').fadeOut('fast');

			}

		}

	);

	$('#btnCeles4').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel5In').fadeIn('fast');

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

				$('.ligaPanel5In').fadeOut('fast');

			}

		}

	);

	$('#btnCeles1').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel2In').fadeIn('fast',

					function(){

						$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

						$('.ligaPanel2In').fadeOut('fast');

					}

				);			

			}

		}

	);

	$('#btnCeles2').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel3In').fadeIn('fast',

					function(){

						$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

						$('.ligaPanel3In').fadeOut('fast');

					}

				);

			}

		}

	);

	$('#btnCeles3').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel4In').fadeIn('fast',

					function(){

						$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

						$('.ligaPanel4In').fadeOut('fast');	

					}

				);

			}

		}

	);

	$('#btnCeles4').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).find('.ligaPanel1 a').css({color:'#09347a'});

				$('.ligaPanel5In').fadeIn('fast',

					function(){

						$(this).find('.ligaPanel1 a').css({color:'#1e87dd'});

						$('.ligaPanel5In').fadeOut('fast')

					}

				);

			}

		}

	);

}



function procesarBannerFondos(quitarBanner){

	(quitarBanner)?$("#bannerFondosHorizonte").hide():$("#bannerFondosHorizonte").show();	

}



function colorLigas1(){

	$('.exLiga').hover(     

		function(){

			if(!detectaDispositivoMobile()){	

				if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '6'){

					$(this).animate({color: '#1e87dd'});

				}else{

					$(this).animate({color: '#1e87dd'}, 'fast');

				}				 

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '6'){

					$(this).animate({color: '#01589f'});

				}else{

					$(this).animate({color: '#01589f'}, 'fast');

				} 

			}

		}

	);

	$('.exLiga2').hover(     

		function(){

			if(!detectaDispositivoMobile()){

				if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '6'){

					$(this).css({color: '#1e87dd'});

				}else{

					$(this).css({color: '#1e87dd'}, 'fast');

				}

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '6'){

					$(this).css({color: '#01589f'});

				}else{

					$(this).css({color: '#01589f'}, 'fast');

				}

			}

		}

	);

	$('.msj').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$('.contenedor_menuTN_infoDe_text2_b3 a').css({color:'#1e87dd'});

				$('.contenedor_menuTN_infoDe_text2_b2').css({background:'url(bbAvatar/images/marco.gif) -655px -14px no-repeat'});

				$('.contenedor_menuTN_infoDe_text2_b2 div').css({background:'url(bbAvatar/images/marco.gif) right -14px no-repeat'});

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$('.contenedor_menuTN_infoDe_text2_b3 a').css({color:'#01589f'});

				$('.contenedor_menuTN_infoDe_text2_b2').css({background:'url(bbAvatar/images/marco.gif) -655px 0 no-repeat'});

				$('.contenedor_menuTN_infoDe_text2_b2 div').css({background:'url(bbAvatar/images/marco.gif) right 0 no-repeat'});

			}

		}

	);

	$('.salida').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$('.salida_img').css({background:'url(bbAvatar/images/SpriteLogIn.gif) -131px -68px no-repeat'});

				$('.salida_txt a').css({color:'#bf170f'});

			}

		},

		function(){

			if(!detectaDispositivoMobile()){				

				$('.salida_img').css({background:'url(bbAvatar/images/SpriteLogIn.gif) -114px -68px no-repeat'});

				$('.salida_txt a').css({color:'#ee2e24'});

			}

		}

	); 

	$('.productos').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$('.productos_img').css({background:'url(bbAvatar/images/marco.gif) -635px -19px no-repeat'});

				$('.productos_txt a').css({color:'#1e87dd'});

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$('.productos_img').css({background:'url(bbAvatar/images/marco.gif) -635px -1px no-repeat'});

				$('.productos_txt a').css({color:'#01589f'});

			}

		}

	);

	$('.contenedor_menuTN_vertDe a').hover(

		function(){

			if(!detectaDispositivoMobile()){

				$('.contenedor_menuTN_vertDe').css({background:'url(bbAvatar/images/bg1.gif) right -382px no-repeat'});

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$('.contenedor_menuTN_vertDe').css({background:'url(bbAvatar/images/bg1.gif) right -262px no-repeat'});

			}

		}

	);

	$('.contenedor_menuTN_vertDe a').click(

		function(){

			if(detectaDispositivoMobile()){

				$('.contenedor_menuTN_vertDe').css({background:'url(bbAvatar/images/bg1.gif) right -382px no-repeat'});

				setTimeout(

					function(){

						$('.contenedor_menuTN_vertDe').css({background:'url(bbAvatar/images/bg1.gif) right -262px no-repeat'});

					}

				,400);

			}

		}

	);



	$('.exLiga').click(     

		function(){

			if(detectaDispositivoMobile()){	

				$(this).animate({color: 'rgb(9,52,122)'}, 'fast',

					function(){

						$(this).animate({color: 'rgb(30,135,221)'}, 'fast');	

					}

				);				 

			}

		}

	);

	$('.exLiga2').click(     

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({color: '#1e87dd'}, 'fast',

					function(){

						$(this).css({color: '#01589f'}, 'fast');	

					}

				);				

			}

		}

	);

	$('.btnBlanc').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({background:'url(bbAvatar/images/bg1.gif) right -347px no-repeat'});

				if($(this).index('.btnBlanc') == 1){

					$('.btnBlanc_ico1').css({background:'url(bbAvatar/images/bg1.gif) -27px -14px no-repeat'});

					$('.btnBlanc_txt2').animate({color:'rgb(30,135,221)'}, 'fast');

					setTimeout(

						function(){

							$('.btnBlanc').css({background:'url(bbAvatar/images/bg1.gif) right -312px no-repeat'});

							$('.btnBlanc_txt2').css({color:'#666666'});

							$('.btnBlanc_ico1').css({background:'url(bbAvatar/images/bg1.gif) 2px -14px no-repeat'});

						}

					,400);

				}else{

					$('.btnBlanc_ico2').css({background:'url(bbAvatar/images/bg1.gif) -83px -14px no-repeat'});

					$('.btnBlanc_txt').animate({color:'rgb(30,135,221)'},'fast');

					setTimeout(

						function(){

							$('.btnBlanc_txt').css({color:'#666666'});

							$('.btnBlanc_ico2').css({background:'url(bbAvatar/images/bg1.gif) -54px -14px no-repeat'});

							$('.btnBlanc').css({background:'url(bbAvatar/images/bg1.gif) right -312px no-repeat'});

						}

					,400);

				}

			}

		}

	);

	$('.msj').click(

		function(){

			if(detectaDispositivoMobile()){

				$('.contenedor_menuTN_infoDe_text2_b3 a').css({color:'#09347a'});

				$('.contenedor_menuTN_infoDe_text2_b2').css({background:'url(bbAvatar/images/bg1.gif) 0px 4px no-repeat'});

				$('.contenedor_menuTN_infoDe_text2_b2 div').css({background:'/url(bbAvatar/images/bg1.gif) right -14px no-repeat'});

				setTimeout(

					function(){

						$('.contenedor_menuTN_infoDe_text2_b3 a').css({color:'#1e87dd'});

						$('.contenedor_menuTN_infoDe_text2_b2').css({background:'url(bbAvatar/images/bg1.gif) -40px 4px no-repeat'});

						$('.contenedor_menuTN_infoDe_text2_b2 div').css({background:'url(bbAvatar/images/bg1.gif) right 3px no-repeat'});

					}

				,350);

			}

		}

	);

}



function colorLigas2(){

	$('.exLiga3').hover(     

		function(){

			if(!detectaDispositivoMobile()){

				$(this).css({color: '#1e87dd'});

			}

		},

		function(){

			if(!detectaDispositivoMobile()){

				$(this).css({color: '#01589f'});

			}

		}

	);

	$('.exLiga3').click(     

		function(){

			if(detectaDispositivoMobile()){

				$(this).animate({color: '#01589f'},'fast',

					function(){

						$(this).css({color: '#01589f'});

					}

				);				

			}

		}

	);

}

function igualarDimenc1() {

	var valor1 = $('.contenedorPrincipal').height() + 55;

	var valor2 = $('.contenedorPrincipal').width() - 190;

	$('.cortiContIfr').css({height:valor1, width:valor2});

}

function igualarDimenc2() {

	var valor1 = $('.contenedorPrincipal').height() + 35;

	var valor2 = $('.contenedorPrincipal').width() +30;

	$('.cortiContPrincipal').css({height:valor1, width:valor2});

}



var dispositivoIphone = "iphone";

var dispositivoIpod = "ipod";

var dispositivoS60 = "series60";

var dispositivoSymbian = "symbian";

var dispositivoAndroid = "android";

var dispositivoWinMob = "windows ce";

var dispositivoBB = "blackberry";

var dispositivoPalm = "palm";

var dispositivoIpad = "ipad";

var engineWebKit = "webkit";

var uagent = navigator.userAgent.toLowerCase();



function DetectaPalmOS(){

   if (uagent.search(dispositivoPalm) > -1)

      return true;

   else

      return false;

}



function DetectaBlackBerry(){

   if (uagent.search(dispositivoBB) > -1)

      return true;

   else

      return false;

}



function DetectaWindowsMobile(){

   if (uagent.search(dispositivoWinMob) > -1)

      return true;

   else

      return false;

}



function DetectaAndroid(){

   if (uagent.search(dispositivoAndroid) > -1)

      return true;

   else

      return false;

}



function DetectaWebkit(){

   if (uagent.search(engineWebKit) > -1)

      return true;

   else

      return false;

}



function DetectaAndroidWebKit(){

   	if (DetectaAndroid()){

     	if (DetectaWebkit()){

        	return true;

		}else{

        	return false;

		}

   	}else{

  		return false;

   	}

}



function DetectaS60Oss(){

   	if (uagent.search(engineWebKit) > -1){

     	if ((uagent.search(dispositivoS60) > -1 || uagent.search(dispositivoSymbian) > -1))

        	return true;

     	else

        	return false;

   	}else

      return false;

}



function DetectaIphone(){

   if (uagent.search(dispositivoIphone) > -1)

      return true;

   else

      return false;

}



function DetectaIpod(){

   if (uagent.search(dispositivoIpod) > -1)

      return true;

   else

      return false;

}



function DetectaIpad(){

   if (uagent.search(dispositivoIpad) > -1  && DetectaWebkit())

      return true;

   else

      return false;

}



function detectaDispositivoMobile(){

    if (DetectaIphone()){

		return true;

	}else{

		if(DetectaIpod()){

       		return true;

		}else{

			if(DetectaS60Oss()){

				return true;

			}else{

				if(DetectaAndroidWebKit()){

					return true;

				}else{

					if(DetectaWindowsMobile()){

						return true;

					}else{

						if(DetectaBlackBerry()){

							return true;

						}else{

							if(DetectaPalmOS()){

								return true;

							}else{

								if(DetectaIpad()){

									return true;

								}else{

									return false;

								}

							}

						}

					}

				}

			}

		}

	}

}



$(document).ready(

	function(){

		if ( $('#iframeConte').length == 0 )

			return;

		creaContenedor();

		defineMenus();

		igualarDimenc2();

		igualarDimenc1();

		iniciaMs();

		colorLigas1();		

		activaFlechas();

		slide(".activaflecha2",5,0);

		$('body').click(

			function(event){		

				if($(event.target).is('#menuSegundoNivel a')){					

					var ligaSelect = $(event.target).index('#menuSegundoNivel a');

					if( $($(event.target)).hasClass("exLiga") ){

						$('#menuSegundoNivel a').each(

							function(k){

								if(k == ligaSelect){

									$(this).removeClass().animate({color: '#000000'}, 500,

										function(){

											$(this).css({color: '#000000'}).addClass('color000');

										}

									);	

								}else{

									$(this).removeClass().animate({color: '#01589f'}, 500,

										function(){

											$(this).css({color: '#01589f'}).addClass('exLiga');

										}

									);								

								}

							}

						)

					}				

				}

				if($(event.target).is('.menu3N a')){					

					var ligaSelect = $(event.target).index('.menu3N a');

					$('.menu3N a').each(

						function(f){

							if(f == ligaSelect){

								$('.menu3N a:eq('+f+')').removeClass('exLiga3').css({color: '#000000'}).addClass('color000');

							}else{

								$('.menu3N a:eq('+f+')').removeClass('color000').css({color: '#01589f'}).addClass('exLiga3');							

							}

						}

					);

					colorLigas2();

				}

				if($(event.target).is('.contenedorPie2_ligas1 a')){

					var ligaPieSelect = $(event.target).index('.contenedorPie2_ligas1 a');

					$('ul li:eq('+ligaPieSelect+')', '#menu').trigger('click');

					$('ul a span:eq('+ligaPieSelect+')', '#menu').trigger('click');

				}

			}

		);

		try{	

			$('#iframeConte').load(

				function(){

						ajustarIframe();

				}

			);	

		}	

		catch(e){}

		if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '6'){

			$('.icoBtn').css({'background':'url(bbAvatar/images/bg2.gif) right -421px no-repeat'});

			$('.icoBtnIn').css({'background':'url(bbAvatar/images/bg2.gif) left -421px no-repeat'});

		}

		if($.browser.msie && $.browser.version.substr(0, 1) == '7')$('body').css({'overflow-x':'hidden'})

	}

);



function pintaTablas(){

	$(".pinta1").find("tr:even td").css("background-color", "#f0f4f9");

	$(".pinta1").find("tr:odd td").css("background-color", "#FFF");

	$(".pinta1").find("tr:odd td table td").css("background", "none");

	$(".pinta1").find("tr:even td table td").css("background", "none");

	$(".pinta2").find("tr:even td").css("background-color", "#FFF");

	$(".pinta2").find("tr:odd td").css("background-color", "#F0F4F9");

	$(".pinta2").find("tr:odd td table td").css("background", "none");

	$(".pinta2").find("tr:even td table td").css("background", "none");

}



function ajustarIframe(){

	if ( $('#iframeConte').length == 0 )

		return;

	try{if(!document.getElementById('iframeConte').contentWindow.document.getElementById('wrapper_div')){

			return;

		}}catch(e){return;};

	var alturaContenidoIfr = document.getElementById('iframeConte').contentWindow.document.getElementById('wrapper_div').offsetHeight;

	alturaAltualIfr = $('#iframeConte').height();

	if(alturaContenidoIfr > alturaAltualIfr){

		time = (alturaContenidoIfr - alturaAltualIfr) * 0;

	}else{

		time = (alturaAltualIfr - alturaContenidoIfr) * 0;	

	}	

	if ($.browser.msie && $.browser.version.substr(0, 1) == '7'){

		var anchoIe7;

		if($('.panelIzquierdo').css('display') == 'none' && $('.panelDerecho').css('display') == 'none'){

			anchoIe7 = $('.contenedor_menus2').width();

		}else{

			if($('.panelIzquierdo').css('display') == 'none'){

				anchoIe7 = $('.contenedor_menus2').width() - 350

			}else{

				anchoIe7 = $('.contenedor_menus2').width() - 215;

			}

		}	

		$('#iframeConte').animate({height:alturaContenidoIfr+'px', width:anchoIe7

		},{ 

			duration: 0, 

			"easin": "easein", 

			complete: function(){

				$(this).css({height:alturaContenidoIfr+'px'

				});

				if($('.cortiContPrincipal').css('display') == 'none' ){

					igualarDimenc1();

					$('.iframeCli').css({'visibility':'visible'});

				}else{

					igualarDimenc2();

					$('.contenedorPrincipal').css({'visibility':'visible'});

				}				

				setTimeout(function(){				

					if($('.cortiContPrincipal').css('display') == 'none' ){

						$('.cortiContIfr').fadeOut('fast');

					}else{

						$('.cortiContPrincipal').fadeOut('fast');

					}

				},0);

			}

		});

	}else{

		$('#iframeConte').animate({ 

			height: alturaContenidoIfr+'px' 

		},{ 

			duration: 0, 

			"easin": "easein", 

			complete: function(){

				$(this).css({height:alturaContenidoIfr+'px'});

				if(!(navigator.userAgent.toLowerCase().indexOf('chrome/') > -1)){

					if($('.cortiContPrincipal').css('display') == 'none' ){

						igualarDimenc1();

						$('.iframeCli').css({'visibility':'visible'});

					}else{

						igualarDimenc2();

						$('.contenedorPrincipal').css({'visibility':'visible'});

					}				

					setTimeout(function(){				

						if($('.cortiContPrincipal').css('display') == 'none' ){

							$('.cortiContIfr').fadeOut('fast');

						}else{

							$('.cortiContPrincipal').fadeOut('fast');

						}

					},100);

				}

			}

		});

	}

}



(function($){

	

	$.modal = function(options){

		return $.modal.impl.init(options);

	};

	$.modal.close = function(){$.modal.impl.close();};

	$.modal.setContainerDimensions = function(resize){$.modal.impl.setContainerDimensions(resize);};

	$.modal.setDimentions = function(height, width){$.modal.impl.setDimentions(height, width);};	

	$.modal.esconder = function(Contenido,height, width){$.modal.impl.esconder(Contenido,height,width);};	

	$.modal.mostrar = function(){$.modal.impl.mostrar();};

	$.modal.defaults = {

		focus:true,

		opacity:50,

		minHeight:30,

		minWidth:40,

		maxHeight:null,

		maxWidth:null,

		autoResize:true,

		autoPosition:true,

		zIndex:1000,

		close:true,

		closeClass:'CerrarVentanaEmergente',

		escClose:false,

		overlayClose:true,

		position:null,

		onOpen:null,

		onShow:null,

		flagDivIfrm:true,

		heightDivIfrm:'auto',

		widthDivIfrm:480,

		srcIfrm:'/if.htm'

	};

	$.modal.impl={

		o:null,

		d:{},

		dim:null,

		init:function(options,dimensions,flagDiv){

			var s = this;

			s.o = $.extend({},$.modal.defaults,options);

			if(!s.o.flagDiv)

			document.getElementById('mensajeError_contenido_ifrm').setAttribute('src',s.o.srcIfrm);

			s.zIndex = s.o.zIndex;

			s.occb=false;

			s.crear();

			s.open();

			if($.isFunction(s.o.onShow)){

				s.o.onShow.apply(s,[s.d]);

			}

			return s;

		},

		crear:function(){

			var s = this;

			w = s.getDimensions();

			$('.cerrarOverlay')

			.css(

				{

					display:'none',

					opacity:s.o.opacity/100,

					height:w[0],

					width:w[1],

					position:'fixed',

					left:0,

					top:0,

					zIndex:s.o.zIndex+1

				}

			)

			s.d.overlay=$('.cerrarOverlay')

			$('.ventanaEmergente')

			.css(

					{

						display:'none',

						position:'fixed',

						zIndex:s.o.zIndex+2

					}

			)

			s.d.container=$('.ventanaEmergente')

			s.d.data = $('.ventanaEmergente-data')

		},

		bindEvents:function(){

			var s = this;

			$('.'+s.o.closeClass).bind('click.ventanaEmergente',function(e){e.preventDefault(); s.close();});

			if(s.o.close&&s.o.overlayClose){

				s.d.overlay.bind('click.ventanaEmergente',

					function(e){

						e.preventDefault();

						s.close();

					}

				);

			}

			$(document).bind('keydown.ventanaEmergente',

				function(e){

					if(s.o.focus&&e.keyCode==9){

						s.watchTab(e);

					}else if((s.o.close&&s.o.escClose)&&e.keyCode==27){

						e.preventDefault();

						s.close();

					}

				}

			);

			$(window).bind('resize.ventanaEmergente',

				function(){

						w=s.getDimensions();

						s.setContainerDimensions(true);

						s.d.iframe&&s.d.iframe.css({height:w[0],width:w[1]});

						s.d.overlay.css({height:w[0],width:w[1]});

				}

			);

		},

		unbindEvents:function(){

			$('.'+this.o.closeClass).unbind('click.ventanaEmergente');

			$(document).unbind('keydown.ventanaEmergente');

			$(window).unbind('resize.ventanaEmergente');

			this.d.overlay.unbind('click.ventanaEmergente');

		},

		focus:function(pos){

			var s=this,p=pos||'first';

			var input=$(':input:enabled:visible:'+p);

			input.length>0?input.focus():s.d.container.focus();

		},

		getDimensions:function(){

			var el=$(window);

			var h=$.browser.opera&&$.browser.version>'9.5'&&$.fn.jquery<='1.2.6'?document.documentElement['clientHeight']:$.browser.opera&&$.browser.version<'9.5'&&$.fn.jquery>'1.2.6'?window.innerHeight:el.height();

			return[h,el.width()];

		},

		getVal:function(v){

			return v == 'auto'?0:v.indexOf('%')>0?v:parseInt(v.replace(/px/,''));

		},

		setContainerDimensions:function(resize){

			var s=this;

			if(!resize||(resize&&s.o.autoResize)){

				var ch=s.getVal(s.d.container.css('height')),cw=s.getVal(s.d.container.css('width')),dh=s.d.data.outerHeight(true),dw=s.d.data.outerWidth(true);

				var mh=s.o.maxHeight&&s.o.maxHeight<w[0]?s.o.maxHeight:w[0],mw=s.o.maxWidth&&s.o.maxWidth<w[1]?s.o.maxWidth:w[1];				

				if(!ch){

					if(!dh){

						ch=s.o.minHeight;

					}else{

						if(dh>mh){

							ch=mh;

						}else if(dh<s.o.minHeight){

							ch=s.o.minHeight;

						}else{

							ch=dh;

						}

					}

				}else{

					ch = ch>mh?mh:ch;

				}

				if(!cw){

					if(!dw){

						cw=s.o.minWidth;

					}else{

						if(dw>mw){

							cw=mw;

						}else if(dw<s.o.minWidth){

							cw=s.o.minWidth;

						}else{

							cw=dw;

						}

					}

				}else{

					cw=cw>mw?mw:cw;

				}

				if(dh>ch||dw>cw){

					s.d.container.css({overflow:'auto'});

				}

				

			}

			if(s.o.autoPosition){

				s.setPosition();

			}

		},

		setDimentions:function(height, width){

			$('#tabla_emergente, .ventanaEmergente-data').css(

				{

					width : width + 40,

					height : height == 'auto' ? 'auto' : + height + 40

				}				

			);

			if($("#mensajeError_contenido_ifrm").css("display") == "none")

				$("#mensajeError_contenido_div").css({height: height,width:width});

			else

				$("#mensajeError_contenido_ifrm").css({height: height,width:width});

			$("#ventanaEmergente").css({height: height+70});

			$.modal.impl.setContainerDimensions(true);

		},

		setPosition:function(){

			var s = this,top,left,hc=(w[0]/2)-(s.d.container.outerHeight(true)/2),vc=(w[1]/2)-(s.d.container.outerWidth(true)/2);

			if(s.o.position && Object.prototype.toString.call(s.o.position)==="[object Array]"){

				top=s.o.position[0]||hc;

			}else{

				top=hc;

			}

			s.d.container.stop().animate({top:top}

				, 350,

				function(){

					s.d.container.css({top:top})

				}

			);

		},

		watchTab:function(e){

			var s=this;

			if($(e.target).parents('.ventanaEmergente').length>0){

				s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last',s.d.data[0]);

				if((!e.shiftKey&&e.target==s.inputs[s.inputs.length-1])||(e.shiftKey&&e.target==s.inputs[0])||s.inputs.length==0){

					e.preventDefault();

					var pos=e.shiftKey?'last':'first';

					setTimeout(function(){s.focus(pos);},10);

				}

			}else{

				e.preventDefault();

				setTimeout(function(){s.focus();},10);

			}

		},

		open: function () {

			var s = this;

			s.d.overlay.show();

			s.d.container.show();

			$('.ventanaEmergente').show();

			if(detectaDispositivoMobile()){

				$('html').css({'overflow':'hidden','overflow-x':'hidden','overflow-y':'hidden'});

				$('body').css({'overflow':'hidden','overflow-x':'hidden','overflow-y':'hidden'});

			}

			s.d.container.css({'top':'-400px'});

			s.bindEvents();

			

			$('#tabla_emergente, .ventanaEmergente-data').css(

				{

					width : s.o.widthDivIfrm + 40,

					height : s.o.heightDivIfrm == 'auto' ? 'auto' : + s.o.heightDivIfrm + 40

				}				

			);

			

			if(s.o.flagDiv)

			{

				s.focus();

				showInput = "div"

				hiddeInput = "ifrm"

			}

			else

			{

				showInput = "ifrm"

				hiddeInput = "div"			

			}			

			

			$('#mensajeError_contenido_' + showInput).css(

				{

					width : s.o.widthDivIfrm,

					height : s.o.heightDivIfrm,

					display : 'block'

				}				

			);

			

			$('#mensajeError_contenido_' + hiddeInput).css(

				{

					display : 'none'

				}				

			);

			if(!s.o.flagDiv)



			setTimeout( 

				function(){

					$.modal.impl.setPosition();

				}

				, 550 

			);

			else

				setTimeout(

					function(){

						$.modal.impl.setDimentions(document.getElementById("mensajeError_contenido_div").offsetHeight,document.getElementById("mensajeError_contenido_div").offsetWidth);

					}

					,550

				);

		},

		close: function () {

			var s = this;

			s.unbindEvents();

			s.d.container.animate(

				{top:"-" + (s.d.container.height() + 100)},

				300,

				function () {

					s.d.overlay.fadeOut(350);					

					setTimeout( 

						function(){

							if(detectaDispositivoMobile()){

								$('html').css({'overflow':'visible','overflow-y':'visible','overflow-x':'visible'});

								$('body').css({'overflow':'visible','overflow-y':'visible','overflow-x':'visible'});				

							}

						}

					,400);				 

				}

			);

		},

		esconder: function(Contenido,height,width){

			var s = this;

			$("#mensajeError_contenido_ifrm").css("display","none");

			$.modal.impl.setDimentions(height,width);

			$("#mensajeError_contenido_div").html(Contenido).css("display","block");

			$('.ventanaEmergente').fadeIn("fast");

		},

		mostrar: function(){

			$("#mensajeError_contenido_div").css("display","none");

			$('.ventanaEmergente').fadeIn("fast");

			$("#mensajeError_contenido_ifrm").css("display","block");

		}

	};

})(jQuery);



function conteIfrConteVg(){

	var anchoTabla = $('.paneles').width();

	var anchoTDde = $('.panelDerecho').width();

	var anchoTDce = $('.panelCentro2').width();

	var anchoTDiz = $('.panelIzquierdo').width();

	$('.panelIzquierdo').hide();

	if(detectaDispositivoMobile() || $.browser.msie && $.browser.version.substr(0, 1) == '6' || $.browser.msie && $.browser.version.substr(0, 1) == '7'){

		$('.ifrContenedor').css({'width':(anchoTabla-anchoTDde-10)+'px'});

		$('.panelCentro2').css({'width':(anchoTabla-anchoTDde)+'px'});

	}

	$('.panelDerecho').show();	

}

function soloConteIfr(){

	$('.panelIzquierdo').hide();

	$('.panelDerecho').hide();

}

function eventoNivel1ifr(){

	$('ul li:eq(4)', '#menu').trigger('click');

	$('ul a span:eq(4)', '#menu').trigger('click');

}

function conMenu3n(){

	$('.panelIzquierdo').show();

	$('.panelDerecho').hide();

}



function slide(navegacion_id, pad_out, pad_in){

	var listaElementos = $(navegacion_id + ' div');

	var claseTexto = $(navegacion_id).parent().find('div:eq(2)').attr('class');

	$(listaElementos).each(

		function(i){

			if(!detectaDispositivoMobile()){

				$(this).hover(

					function(){

						$(this).animate({ paddingLeft: pad_out, opacity: 0.7 },{ duration: 150, "easin": "easein", complete: function(){}});

					},		

					function(){

						$(this).animate({ paddingLeft: pad_in, opacity: 1 },{ duration: 150, "easin": "elasinout", complete: function(){}});

					}

				);

			}

		}

	);	

	$('.'+claseTexto+' span').each(

		function(i){

			if(!detectaDispositivoMobile()){

				$(this).hover(

					function(){

						$(this).parent().parent().find('div:eq(0)').find('div').animate({ paddingLeft: pad_out, opacity: 0.7 },{ duration: 150, "easin": "easein", complete: function(){}});

						

					},		

					function(){

						$(this).parent().parent().find('div:eq(0)').find('div').animate({ paddingLeft: pad_in, opacity: 1 },{ duration: 150, "easin": "elasinout", complete: function(){}});

					}

				);

			}

		}

	);

}



function btns_titulo( botones ){

	var btns_mostrar="";

	for(i=0; i < botones.length ; i++){

		btns_mostrar += "<div class='saldos_btn"+botones[i]+"'></div>";

	}

	$('#contenedorTitulo_Botones').html(btns_mostrar);

}





var cant_paginas = 30;

var valor_actual = 1;



function ir_pag( pag_ir ){

	valor_ant = pag_ir-1;

	valor_actual = pag_ir;

	valor_sig = pag_ir+1;

	

	if( valor_actual == 1 ){

		retorno = '<a href="#;" class="antsig_d">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}else{

		retorno = '<a href="JavaScript:ir_pag('+valor_ant+');" class="antsig">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}

	

	if( valor_actual < 6 ){

		for( i=1; i<=11; i++ ){

			if( valor_actual == i ){

				retorno += '<a href="#;" class="sel_num">'+i+'</a>';

			}else{

				retorno += '<a href="JavaScript:ir_pag('+i+');" class="num">'+i+'</a>';

			}

		}

	}else{

		if( valor_actual > cant_paginas-5){

			for( i=(cant_paginas-10); i<=cant_paginas; i++ ){

				if( valor_actual == i ){

					retorno += '<a href="#;" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag('+i+');" class="num">'+i+'</a>';

				}

			}	

		}else{

			for( i=(valor_actual-5); i<=(valor_actual+5); i++ ){

				if( valor_actual == i ){

					retorno += '<a href="#;" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag('+i+');" class="num">'+i+'</a>';

				}

			}	

		}

	}

	if( valor_actual == cant_paginas ){

		retorno += '&nbsp;&nbsp;&nbsp;<a href="#;" class="antsig_d">Siguiente &raquo;</a>';

	}else{

		retorno += '&nbsp;&nbsp;&nbsp;<a href="JavaScript:ir_pag('+valor_sig+');" class="antsig">Siguiente &raquo;</a>';

	}

	

	$('#paginacion').html(retorno);

	

	if( $('#bloques') ){

		retorno_bloques = '<div class="ant_bloque floatL" onclick="ir_bloque(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque floatL" onclick="ir_bloque(\'+\');">+11 &raquo;</div>';

		if( valor_actual >= cant_paginas ){

			retorno_bloques = '<div class="ant_bloque floatL" onclick="ir_bloque(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque_d floatL" onclick="ir_bloque(\'+\');">+11 &raquo;</div>';

		}

		if( valor_actual <= 1){

			retorno_bloques = '<div class="ant_bloque_d floatL" onclick="ir_bloque(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque floatL" onclick="ir_bloque(\'+\');">+11 &raquo;</div>';

		}

		$('#bloques').html(retorno_bloques);

	}

}



function ir_pag_2( pag_ir ){

	valor_ant = pag_ir-1;

	valor_actual = pag_ir;

	valor_sig = pag_ir+1;

	

	if( valor_actual == 1 ){

		retorno = '<a href="#;" class="antsig_d">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}else{

		retorno = '<a href="JavaScript:ir_pag_2('+valor_ant+');" class="antsig">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}

	

	if( valor_actual < 6 ){

		for( i=1; i<=11; i++ ){

			if( valor_actual == i ){

				retorno += '<a href="#;" class="sel_num">'+i+'</a>';

			}else{

				retorno += '<a href="JavaScript:ir_pag_2('+i+');" class="num">'+i+'</a>';

			}

		}

	}else{

		if( valor_actual > cant_paginas-5){

			for( i=(cant_paginas-10); i<=cant_paginas; i++ ){

				if( valor_actual == i ){

					retorno += '<a href="#;" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag_2('+i+');" class="num">'+i+'</a>';

				}

			}	

		}else{

			for( i=(valor_actual-5); i<=(valor_actual+5); i++ ){

				if( valor_actual == i ){

					retorno += '<a href="#;" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag_2('+i+');" class="num">'+i+'</a>';

				}

			}	

		}

	}

	if( valor_actual == cant_paginas ){

		retorno += '&nbsp;&nbsp;&nbsp;<a href="#;" class="antsig_d">Siguiente &raquo;</a>';

	}else{

		retorno += '&nbsp;&nbsp;&nbsp;<a href="JavaScript:ir_pag_2('+valor_sig+');" class="antsig">Siguiente &raquo;</a>';

	}

	

	document.getElementById('paginacion2').innerHTML = retorno ;

	

	if( document.getElementById('bloqueSigAnt2') ){

		retorno_bloques = '<div class="ant_bloque floatL" onclick="ir_bloque_2(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque floatL" onclick="ir_bloque_2(\'+\');">+11 &raquo;</div>';

		if( valor_actual >= cant_paginas ){

			retorno_bloques = '<div class="ant_bloque floatL" onclick="ir_bloque_2(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque_d floatL" onclick="ir_bloque_2(\'+\');">+11 &raquo;</div>';

		}

		if( valor_actual <= 1){

			retorno_bloques = '<div class="ant_bloque_d floatL" onclick="ir_bloque_2(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque floatL" onclick="ir_bloque_2(\'+\');">+11 &raquo;</div>';

		}

		document.getElementById('bloqueSigAnt2').innerHTML = retorno_bloques;

	}

}



function ir_bloque( mov ){

	retorno_bloques = '<div class="ant_bloque floatL" onclick="ir_bloque(\'-\');">&laquo; -11</div>'+

			'<div class="sig_bloque floatL" onclick="ir_bloque(\'+\');">+11 &raquo;</div>';

			

	if( mov=='+' ){

		ir_a = valor_actual+11;

		if( ir_a >= cant_paginas ){

			ir_a = cant_paginas;

			retorno_bloques = '<div class="ant_bloque floatL" onclick="ir_bloque(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque_d floatL" onclick="ir_bloque(\'+\');">+11 &raquo;</div>';

		}

		

	}else{

		ir_a = valor_actual-11;

		if( ir_a <= 1){

			ir_a = 1;

			retorno_bloques = '<div class="ant_bloque_d floatL" onclick="ir_bloque(\'-\');">&laquo; -11</div>'+

				'<div class="sig_bloque floatL" onclick="ir_bloque(\'+\');">+11 &raquo;</div>';

		}

	}

	$('#bloques').html(retorno_bloques);

	ir_pag( ir_a );

	

}



function Expandir(){

	top.ajustarP();

}	

			

var activarBotonDescargar = false;

var anula = true;

var tabPermanente = null;

var segNivPermanente = null;

var botonesTituloSeccion = '';

function mostrarBotonesTitulo(tipoBotones) 

{

	switch(tipoBotones)

	{

		case 0:

		{

			botonesTituloSeccion = "";

			break;	

		}

		case 1:

		{

			botonesTituloSeccion = btnAyuda;

			break;

		}

		case 2:

		{

			botonesTituloSeccion = btnAyuda + btnImprimir;			

			break;

		}

		case 3:

		{

			botonesTituloSeccion = btnAyuda + btnImprimir + btnDescargar;

			break;

		}	

		case 4:

		{

			botonesTituloSeccion = btnAyuda + btnImprimir + btnPDF;

			break;

		}

		case 5:

		{

			botonesTituloSeccion = btnImprimir + btnPDF;

			break;

		}		

	}

}

			

function procesarTituloNiv2(tituloNiv2)

{



	if(tituloNiv2 != null && tituloNiv2 != "")

	{

		$("#tituloSeccion").html();

		$("#tituloSeccion").show();

		var cuerpoTitulo = crearTituloSeccion();

		$("#tituloSeccion").html(cuerpoTitulo); 

		$("#tituloSeccionTexto").html(tituloNiv2);

		showtooltip2();

		slide(".activaflecha2",5,0);

	}

	else

	{

		$("#tituloSeccion").html();

		$("#tituloSeccion").hide();

	}	

}



function crearTituloSeccion()

{

	var cuerpoDeTitulo =



						'<div class="contenedorTitulo_tit1">'

					 +      '<div class="contenedorTitulo_tit1_btnBox activaflecha2"><div class="contenedorTitulo_tit1_btn">&nbsp;</div></div>'

					 +	    '<div class="contenedorTitulo_tit1_txt"><span id ="tituloSeccionTexto">&nbsp;</span></div>'

					 +  '</div>'

				     +	'<div class="contenedorTitulo_box1" id="contenedorTitulo_Botones">'

					 +      botonesTituloSeccion 

					 +	'</div>';

		

	return cuerpoDeTitulo;

}



function ajustar(){

	var alturaContenidoIfr = document.getElementById('iframeConte').contentWindow.document.body.offsetHeight;

	var anchoTemp = $('.iframeCli').width();

	alturaAltualIfr = $(this).height();

	if(alturaContenidoIfr > alturaAltualIfr){

		time = (alturaContenidoIfr - alturaAltualIfr) * 1.48;

	}else{

		time = (alturaAltualIfr - alturaContenidoIfr) * 1.48;	

	}	

	if ($.browser.msie && $.browser.version.substr(0, 1) == '6' || $.browser.msie && $.browser.version.substr(0, 1) == '7'){

		if(alturaContenidoIfr > 410){

			$('#iframeConte').animate({ 

				height:alturaContenidoIfr+'px', 

				width:anchoTemp

			},{ 

				duration: time, 

				"easin": "easein", 

				complete: function(){

					$(this).css({height:alturaContenidoIfr+'px', width:anchoTemp});

				}

			});

		}else{

			$('#iframeConte').css({height:'410px'});

		}

	}else{

		if(alturaContenidoIfr > 410){

			$('#iframeConte').animate({ 

				height: alturaContenidoIfr+'px' 

			},{ 

				duration: 400, 

				"easin": "easein", 

				complete: function(){

					$(this).css({height:alturaContenidoIfr+'px'});

				}

			});

		}else{

			$('#iframeConte').css({height:'410px'});

		}

	}	

}



function hidePanelDerecho(){

	$('.panelDerecho').hide();	

}

function showPanelDerecho(){

	$('.panelDerecho').show();	

}

function hidePanelIzquierdo(){

	$('.panelIzquierdo').hide();	

}

function showPanelIzquierdo(){

	$('.panelIzquierdo').show();	

}



function SaltoTransaccion( pestanna, nivel2seleccion, nivel3, maquina ){

	seleccion = $('ul a:eq('+pestanna+') span', '#menu' );

	LIseleccion = $("li", '#menu')[pestanna];

	ancho = LIseleccion.offsetWidth;

	left = LIseleccion.offsetLeft;

	$('.back').animate({width: ancho+'px', left: left+'px'},500,'linear');

	if( $(seleccion).hasClass("noh") ){

		$('span.sih').animate({color: 'rgb(255,255,255)'}, 500);

		$(seleccion).animate({color: 'rgb(0,0,0)'}, 500,

			function(){

				$('span.sih').css({color: '#FFFFFF'}).removeClass('sih').addClass('noh');

				$(seleccion).css({color: '#000000'}).removeClass('noh').addClass('sih');

			}

		);

	}else{

		$(seleccion).animate({color: 'rgb(0,0,0)'}, 500,

		function(){

		$(seleccion).css({color: '#000000'});

		}

		);

	}

	extractclass = $(seleccion).attr('class');

	extractclass = str_replace(extractclass,'noh','');

	extractclass = str_replace(extractclass,'sih','');

	extractclass = str_replace(extractclass,' ','');

	$('ul a', '#menu').removeClass('parent');

	$(seleccion).parent().addClass('parent');

	setTimeout( function(){muestra2Nivel(extractclass, nivel2seleccion, nivel3, maquina); }, 400);

	

}





function muestra2Nivel( segNivel, nivel2seleccion, nivel3, maquina){

	$('.oculto').hide();

	$('#menuSegundoNivel a').removeClass().css('color','').addClass('exLiga');

	$('#'+segNivel+' a:eq('+nivel2seleccion+')').removeClass().addClass('color000');

	$('#'+segNivel).show();

	activaClass = segNivel;

	

	if( isNaN(parseInt(nivel3) ) ){

		if(maquina != undefined){

			if(maquina != '' )

				DoSubmit(maquina);

		}else{

			$('#'+segNivel+' a:eq('+nivel2seleccion+')').trigger('click');

		}

	}else{

		var target = $('#'+segNivel+' a:eq('+nivel2seleccion+')');

		muestra3Nivel(target, nivel3, maquina);

	}

}





function muestra3Nivel(target, nivel3, maquina){

	var anchoTabla = $('.paneles').width();

	var anchocelIz = $('.panelCentro2').width();

	var anchocelDe = $('.panelDerecho').width();

	var anchoifr = $('.ifrContenedor').width();

	indiceLiga = $(target).index('#menuSegundoNivel a');

	if(!(navigator.userAgent.toLowerCase().indexOf('chrome/') > -1)){

		$('.contenedorPrincipal').css({'visibility':'visible'})

		igualarDimenc2();

	}

	$('.cortiContPrincipal').hide();

	if( $(target).html() == "Saldos" ){

		$('.contenedorTitulo').hide();

	}

	if(pos3N[indiceLiga] == 0){

		$('.panelIzquierdo').hide()

		$('.panelDerecho').hide();

		content3N[indiceLiga]

		if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '7'){

			$('.iframeCli').css({width: $('.contenedor_menus2').width()+'px'});

			setTimeout( function(){ $('.ifrContenedor').css({width: '100%'}); }, 50);										

		}

	}else{

		if(pos3N[indiceLiga] == 1){

			if($(target).attr('onclick') != $('#segNivel4').children('div:first').children('a:first').attr('onclick'))

				$('.menu3N').css('display','block');

			$('.menu3N').html(content3N[indiceLiga]);

			if($('.menu3N div:eq(0)').hasClass('menu3N_p7')){

				$('.pest4n:eq(0)').trigger('click')

			}else{

				var menuQhacerClass = extraeQhacerClass( $('.menu3N_p1:eq(0)').find('a') );

				quehacer(menuQhacerClass);

			}

			$('.panelIzquierdo').show();

			$('.panelDerecho').hide();

			if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '7'){

				$('.paneles').css({width: $('.contenedor_menus2').width()});

				$('.iframeCli').css({width:$('.contenedor_menus2').width()-215});

				setTimeout( function(){ $('.ifrContenedor').css({width: '100%'}); }, 0)

			}	

		}else{

			if(pos3N[indiceLiga] == 2){

				$('.panelIzquierdo').hide();

				$('.panelDerecho').hide();

				activaFlechas()

				if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '7'){

					$('.iframeCli').css({width: $('.contenedor_menus2').width()+'px'});

					setTimeout( function(){ $('.ifrContenedor').css({width: '100%'}); }, 50);

				}

			}

		}

	}

	

	if(maquina != undefined){

	

		menuQhacerClass1 = extraeQhacerClass( $('.menu3N a:eq('+nivel3+')') );

		quehacer(menuQhacerClass1);

		

		if(maquina != '' ){

			DoSubmit(maquina);

		}

		$('.menu3N a').removeClass('color000');

		$('.menu3N a:eq('+nivel3+')').addClass('color000');

	}else{

		$('.menu3N a:eq('+nivel3+')').trigger('click');

	}

	

	



}

	

	



function showtooltip(){

	$('.showtooltip').hover(

		function(){

			$('#tooltip-iconos').find('.tooltip').html( $(this).attr("class").split(" ")[0] );

			pos = $(this).offset();

			alto = $('#tooltip-iconos').height()-3;

			ancho = $('#tooltip-iconos').width()-20;

			$('#tooltip-iconos').css({'top':(pos.top-alto)+'px','left':(pos.left-ancho)+'px'});

			$('#tooltip-iconos').show();

		},

		function()

		{

			$('#tooltip-iconos').hide();

		}

	);

}



function showtooltip2(){

				

	 if ($.browser.msie && $.browser.version.substr(0, 1) == '7')

	 {

		var td = $(".tooltipT");

		if($(td).attr("tagname")== 'TD'){

			$(td).html('<div class="tooltipT"></div>').css('vertical-align','top').removeClass('tooltipT');

              $(".tooltipT").css('padding-bottom','8px');

		}

	 }	

	 

	$('.showtooltip').hover(

		function(){

			$('#tooltip').find('.tooltipC').html( $(this).attr("class").split(" ")[0] );

			pos = $(this).offset();

			alto = $('#tooltip').height()-85;

			ancho = $('#tooltip').width()-27;

			$('#tooltip').css({'top':(pos.top+alto)+'px','left':(pos.left-ancho)+'px'});

			$('#tooltip').show();

		},

		function()

		{

			  $('#tooltip').hide();

			  $('#tooltip').css({'top':'0px','left':'0px'});

		}

	);

	

	$('.showtooltipR').hover(

		function(){

			

			  $('#tooltip').find('.tooltipC').html( clase[clase.length - 1].replace(/[_]+/g," ") );

			  $('#tooltip').find('.tooltipTL').css('width','6px');

			  $('#tooltip').find('.tooltipBL').css('width','6px');

			  $('#tooltip').find('.tooltipTR').css('width','6px');

			  $('#tooltip').find('.tooltipBR').css('width','6px');

			  pos = $(this).offset();

			  alto = $('#tooltip').height()+10;

			  ancho = $('#tooltip').width()-20;

			  $('#tooltip').css({'top':(pos.top+alto)+'px','left':(pos.left-ancho)+'px'});

			  $('#tooltip').show();

		},

		function()

		{

			 $('#tooltip').hide();

			  $('#tooltip').find('.tooltipTL').css('width','10px');

			  $('#tooltip').find('.tooltipBL').css('width','10px');			 

			 $('#tooltip').find('.tooltipTR').css('width','10px');

			 $('#tooltip').find('.tooltipBR').css('width','10px');

			 $('#tooltip').css({'top':'0px','left':'0px'});

		}

	);	

}



function showtooltipCopy(){

	$('.showtooltip-copy').hover(

		function(){

			$("#tail-tooltip").addClass("p_tooltipcopy");

			pos = $(this).offset();

			alto = $('#tooltip-copy').height()-3;

			ancho = $('#tooltip-copy').width()-35;

			$('#tooltip-copy').css({'top':(pos.top-alto)+'px','left':(pos.left-ancho)+'px'});

			$('#tooltip-copy').show();

		},

		function()

		{

			$('#tooltip-copy').hide();

		}

	);

}





function redimencionarAncho(){

	var anchoContendorIframe = document.getElementById('iframeConte').contentWindow.document.getElementById('wrapper_div').offsetWidth;

	document.getElementById('iframeConte').style.width = anchoContendorIframe;

	return anchoContendorIframe;

}



function iniciaMs(){

    indiceLiga = 0;

    if(!(navigator.userAgent.toLowerCase().indexOf('chrome/') > -1)){

        $('.contenedorPrincipal').css({'visibility':'visible'})

        igualarDimenc2();

    }

    $('.cortiContPrincipal').hide();

	$('.panelIzquierdo').hide();

    $('.panelDerecho').hide();

    if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == '7'){

        $('.paneles').css({width: $('.contenedor_menus2').width()});

        $('.iframeCli').css({width:$('.contenedor_menus2').width()-350});

        setTimeout( function(){ $('.ifrContenedor').css({width: '100%'}); }, 0);

    }

}



(function($){	

	$.modalEspecial = function(options){

		return $.modalEspecial.impl.init(options);

	};

	$.modalEspecial.close = function(){$.modalEspecial.impl.close();};

	$.modalEspecial.setContainerDimensions = function(resize){$.modalEspecial.impl.setContainerDimensions(resize);};

	$.modalEspecial.setDimentions = function(height, width){$.modalEspecial.impl.setDimentions(height, width);};	

	$.modalEspecial.esconder = function(Contenido,height, width){$.modalEspecial.impl.esconder(Contenido,height,width);};	

	$.modalEspecial.mostrar = function(){$.modalEspecial.impl.mostrar();};

	$.modalEspecial.defaults = {

		focus:true,

		opacity:50,

		minHeight:30,

		minWidth:40,

		maxHeight:null,

		maxWidth:null,

		autoResize:true,

		autoPosition:true,

		zIndex:2000,

		close:true,

		closeClass:'CerrarVentanaEmergenteEspecial',

		escClose:false,

		overlayClose:true,

		position:null,

		onOpen:null,

		onShow:null,

		flagDivIfrm:true,

		heightDivIfrm:'auto',

		widthDivIfrm:480,

		srcIfrm:'/if.htm'

	};

	$.modalEspecial.impl={

		o:null,

		d:{},

		dim:null,

		init:function(options,dimensions,flagDiv){

			var s = this;

			s.o = $.extend({},$.modalEspecial.defaults,options);

			if(!s.o.flagDiv)

				document.getElementById('mensajeError_contenido_ifrmEspecial').setAttribute('src',s.o.srcIfrm);

			s.zIndex = s.o.zIndex;

			s.occb=false;

			s.crear();

			s.open();

			if($.isFunction(s.o.onShow)){

				s.o.onShow.apply(s,[s.d]);

			}

			return s;

		},

		crear:function(){

			var s = this;

			w = s.getDimensions();

			$('.cerrarOverlayEspecial')

			.css(

				{

					display:'none',

					opacity:s.o.opacity/100,

					height:w[0],

					width:w[1],

					position:'fixed',

					left:0,

					top:0,

					zIndex:s.o.zIndex+1

				}

			)

			s.d.overlay=$('.cerrarOverlayEspecial')

			$('.ventanaEmergenteEspecial')

			.css(

					{

						display:'none',

						position:'fixed',

						zIndex:s.o.zIndex+2

					}

			)

			s.d.container=$('.ventanaEmergenteEspecial')

			s.d.data = $('.ventanaEmergente-dataEspecial')

		},

		bindEvents:function(){

			var s = this;

			$('.'+s.o.closeClass).bind('click.ventanaEmergenteEspecial',function(e){e.preventDefault(); s.close();});

			if(s.o.close&&s.o.overlayClose){

				s.d.overlay.bind('click.ventanaEmergenteEspecial',

					function(e){

						e.preventDefault();

						s.close();

					}

				);

			}

			$(document).bind('keydown.ventanaEmergenteEspecial',

				function(e){

					if(s.o.focus&&e.keyCode==9){

						s.watchTab(e);

					}else if((s.o.close&&s.o.escClose)&&e.keyCode==27){

						e.preventDefault();

						s.close();

					}

				}

			);

			$(window).bind('resize.ventanaEmergenteEspecial',

				function(){

						w=s.getDimensions();

						s.setContainerDimensions(true);

						s.d.iframe&&s.d.iframe.css({height:w[0],width:w[1]});

						s.d.overlay.css({height:w[0],width:w[1]});

				}

			);

		},

		unbindEvents:function(){

			$('.'+this.o.closeClass).unbind('click.ventanaEmergenteEspecial');

			$(document).unbind('keydown.ventanaEmergenteEspecial');

			$(window).unbind('resize.ventanaEmergenteEspecial');

			this.d.overlay.unbind('click.ventanaEmergenteEspecial');

		},

		focus:function(pos){

			var s=this,p=pos||'first';

			var input=$(':input:enabled:visible:'+p);

			input.length>0?input.focus():s.d.container.focus();

		},

		getDimensions:function(){

			var el=$(window);

			var h=$.browser.opera&&$.browser.version>'9.5'&&$.fn.jquery<='1.2.6'?document.documentElement['clientHeight']:$.browser.opera&&$.browser.version<'9.5'&&$.fn.jquery>'1.2.6'?window.innerHeight:el.height();

			return[h,el.width()];

		},

		getVal:function(v){

			return v == 'auto'?0:v.indexOf('%')>0?v:parseInt(v.replace(/px/,''));

		},

		setContainerDimensions:function(resize){

			var s=this;

			if(!resize||(resize&&s.o.autoResize)){

				var ch=s.getVal(s.d.container.css('height')),cw=s.getVal(s.d.container.css('width')),dh=s.d.data.outerHeight(true),dw=s.d.data.outerWidth(true);

				var mh=s.o.maxHeight&&s.o.maxHeight<w[0]?s.o.maxHeight:w[0],mw=s.o.maxWidth&&s.o.maxWidth<w[1]?s.o.maxWidth:w[1];				

				if(!ch){

					if(!dh){

						ch=s.o.minHeight;

					}else{

						if(dh>mh){

							ch=mh;

						}else if(dh<s.o.minHeight){

							ch=s.o.minHeight;

						}else{

							ch=dh;

						}

					}

				}else{

					ch = ch>mh?mh:ch;

				}

				if(!cw){

					if(!dw){

						cw=s.o.minWidth;

					}else{

						if(dw>mw){

							cw=mw;

						}else if(dw<s.o.minWidth){

							cw=s.o.minWidth;

						}else{

							cw=dw;

						}

					}

				}else{

					cw=cw>mw?mw:cw;

				}

				if(dh>ch||dw>cw){

					s.d.container.css({overflow:'auto'});

				}

				

			}

			if(s.o.autoPosition){

				s.setPosition();

			}

		},

		setDimentions:function(height, width){

			$('#tabla_emergenteEspecial, .ventanaEmergente-dataEspecial').css(

				{

					width : width + 40,

					height : height == 'auto' ? 'auto' : + height + 40

				}				

			);

			if($("#mensajeError_contenido_ifrmEspecial").css("display") == "none")

				$("#mensajeError_contenido_divEspecial").css({height: height,width:width});

			else

				$("#mensajeError_contenido_ifrmEspecial").css({height: height,width:width});

			$("#ventanaEmergenteEspecial").css({height: height+70});

			$.modalEspecial.impl.setContainerDimensions(true);

		},

		setPosition:function(){

			var s = this,top,left,hc=(w[0]/2)-(s.d.container.outerHeight(true)/2),vc=(w[1]/2)-(s.d.container.outerWidth(true)/2);

			if(s.o.position && Object.prototype.toString.call(s.o.position)==="[object Array]"){

				top=s.o.position[0]||hc;

			}else{

				top=hc;

			}

			s.d.container.stop().animate({top:top}

				, 350,

				function(){

					s.d.container.css({top:top})

				}

			);

		},

		watchTab:function(e){

			var s=this;

			if($(e.target).parents('.ventanaEmergenteEspecial').length>0){

				s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last',s.d.data[0]);

				if((!e.shiftKey&&e.target==s.inputs[s.inputs.length-1])||(e.shiftKey&&e.target==s.inputs[0])||s.inputs.length==0){

					e.preventDefault();

					var pos=e.shiftKey?'last':'first';

					setTimeout(function(){s.focus(pos);},10);

				}

			}else{

				e.preventDefault();

				setTimeout(function(){s.focus();},10);

			}

		},

		open: function () {

			var s = this;

			s.d.overlay.show();

			s.d.container.show();

			$('.ventanaEmergenteEspecial').show();

			if(detectaDispositivoMobile()){

				$('html').css({'overflow':'hidden','overflow-x':'hidden','overflow-y':'hidden'});

				$('body').css({'overflow':'hidden','overflow-x':'hidden','overflow-y':'hidden'});

			}

			s.d.container.css({'top':'-400px'});

			s.bindEvents();

			

			$('#tabla_emergenteEspecial, .ventanaEmergente-dataEspecial').css(

				{

					width : s.o.widthDivIfrm + 40,

					height : s.o.heightDivIfrm == 'auto' ? 'auto' : + s.o.heightDivIfrm + 40

				}				

			);

			

			if(s.o.flagDiv)

			{

				s.focus();

				showInput = "divEspecial"

				hiddeInput = "ifrmEspecial"

			}

			else

			{

				showInput = "ifrmEspecial"

				hiddeInput = "divEspecial"			

			}			

			

			$('#mensajeError_contenido_' + showInput).css(

				{

					width : s.o.widthDivIfrm,

					height : s.o.heightDivIfrm,

					display : 'block'

				}				

			);

			

			$('#mensajeError_contenido_' + hiddeInput).css(

				{

					display : 'none'

				}				

			);

			if(!s.o.flagDiv)



			setTimeout( 

				function(){

					$.modalEspecial.impl.setPosition();

				}

				, 550 

			);

			else

				setTimeout(

					function(){

						$.modalEspecial.impl.setDimentions(document.getElementById("mensajeError_contenido_divEspecial").offsetHeight,document.getElementById("mensajeError_contenido_divEspecial").offsetWidth);

					}

					,550

				);

		},

		close: function () {

			var s = this;

			s.unbindEvents();

			s.d.container.animate(

				{top:"-" + (s.d.container.height() + 100)},

				300,

				function () {

					s.d.overlay.fadeOut(350);					

					setTimeout( 

						function(){

							if(detectaDispositivoMobile()){

								$('html').css({'overflow':'visible','overflow-y':'visible','overflow-x':'visible'});

								$('body').css({'overflow':'visible','overflow-y':'visible','overflow-x':'visible'});				

							}

						}

					,400);				 

				}

			);

		},

		esconder: function(Contenido,height,width){

			var s = this;

			$("#mensajeError_contenido_ifrmEspecial").css("display","none");

			$.modalEspecial.impl.setDimentions(height,width);

			$("#mensajeError_contenido_divEspecial").html(Contenido).css("display","block");

			$('.ventanaEmergenteEspecial').fadeIn("fast");

		},

		mostrar: function(){

			$("#mensajeError_contenido_divEspecial").css("display","none");

			$('.ventanaEmergenteEspecial').fadeIn("fast");

			$("#mensajeError_contenido_ifrmEspecial").css("display","block");

		}

	};

})(jQuery);