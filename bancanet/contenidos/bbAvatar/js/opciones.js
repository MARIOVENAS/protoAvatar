/** jquery.easing.js **/

jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};

// Contenidos del menu de primer, segundo y tercer Nivel

var desplegables = new Array();

function optieneAlturas(){

	$('.expand').each(

		function(i){

			desplegables[i] = $('.expand:eq('+i+')').height();

		}

	);

}

//

function slide(navegacion_id, pad_out, pad_in){

	var listaElementos = $(navegacion_id + ' div');

	var claseTexto = $(navegacion_id).parent().find('div:eq(2)').attr('class');

	$(listaElementos).each(

		function(i){

			if(!detectaDispositivoMobile()){

				$(this).hover(

					function(){

						$(this).animate({ paddingLeft: pad_out, opacity: 0.7 },{ duration: 150, "easing": "easein", complete: function(){}});

					},

					function(){

						$(this).animate({ paddingLeft: pad_in, opacity: 1 },{ duration: 150, "easing": "elasinout", complete: function(){}});

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

						$(this).parent().parent().find('div:eq(0)').find('div').animate({ paddingLeft: pad_out, opacity: 0.7 },{ duration: 150, "easing": "easein", complete: function(){}});



					},

					function(){

						$(this).parent().parent().find('div:eq(0)').find('div').animate({ paddingLeft: pad_in, opacity: 1 },{ duration: 150, "easing": "elasinout", complete: function(){}});

					}

				);

			}

		}

	);

}

// Desplegables vistas generales

function desple1(idBtn, idConte, indiceAltura,estado){

	if(estado == 0){

		$('#'+idBtn).removeClass().addClass('saldos_bloque2_f1_btnH');

		$('#'+idBtn+' div').fadeOut('fast');

		$('#'+idConte).animate({ height: 0},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto',display:'none'});resizaIframe();}});

		setTimeout( function(){window.parent.ajustarP()}, 600);

	}else{

		$('#'+idBtn).removeClass().addClass('saldos_bloque2_f1_btn');

		$('#'+idBtn+' div').fadeOut('fast');

		$('#'+idConte).css({height: 0,display:'block'});

		$('#'+idConte).animate({ height: desplegables[indiceAltura]},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto'});resizaIframe();}});



		setTimeout( function(){window.parent.ajustarP()}, 600);

	}

}

function desple2(idBtn, idConte, indiceAltura, estado){

	if(estado == 0){

		$('#'+idConte).animate({ height: 0},{ duration: 400, "easing": "easein",

			complete: function(){

				$('#'+idConte).css({height: 'auto',display:'none'});

				$('#'+idBtn).parent().parent().css({'border-bottom':'#DEDEDE 1px solid'});

				$('#'+idBtn).parent().parent().find('.titularTabla').fadeIn();

                resizaIframe();

			}

		});

		setTimeout( function(){window.parent.ajustarP()}, 600);

	}else{

		$('#'+idConte).animate({ height: desplegables[indiceAltura]},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto'});

		$('#'+idBtn).parent().parent().find('.titularTabla').fadeOut();

		resizaIframe();

		}});

		setTimeout( function(){window.parent.ajustarP()}, 600);

	}

}

function desple3(idBtn, idConte, indiceAltura, estado){

	if(estado == 0){

		//alert("desple3");

		$('#'+idConte).animate({ height: 0},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto',display:'none'});

		$('#'+idBtn).parent().parent().parent().css({'background':'#F1F2F2'});

		//$('#'+idBtn).parent().parent().css({'background':'url(/bbAvatar/images/bg2.gif) right -309px no-repeat'});

		$('#'+idConte+'b').hide();

		$('#'+idBtn).parent().parent().find('.titularTabla').fadeIn();

		resizaIframe();

		}});

		setTimeout( function(){window.parent.ajustarP()}, 600);

	}else{

		$('#'+idConte).animate({ height: desplegables[indiceAltura]},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto'});

		$('#'+idBtn).parent().parent().find('.titularTabla').fadeOut();

		resizaIframe();

		}});

		setTimeout( function(){window.parent.ajustarP()}, 600);

	}

}

function desplegable(idBtn, idConte, tipo){

	var indiceAltura = $('#'+idConte).index('.expand')

	var alturaArray = desplegables;

	if(tipo == 0){

		if($('#'+idBtn).hasClass('saldos_bloque2_f1_btn')){

			$('#'+idBtn+' div').fadeIn('fast',

				function(){

					desple1(idBtn, idConte, indiceAltura,0);

				}

			);

		}else{

			$('#'+idBtn+' div').fadeIn('fast',

				function(){

					desple1(idBtn, idConte, indiceAltura, 1);

				}

			);

		}

	}else{

		if(tipo == 1){

			if($('#'+idBtn).hasClass('saldos_bloque4_f1_btn')){

				$('#'+idBtn+' div').fadeIn('fast',

					function(){

						$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btnH');

						$('#'+idBtn+' div').fadeOut('fast');

						desple2(idBtn, idConte, indiceAltura, 0);

					}

				);

			}else{

				$('#'+idBtn+' div').fadeIn('fast',

					function(){

						$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btn');

						$('#'+idBtn+' div').fadeOut('fast');

						$('#'+idConte).css({height: 0,display:'block'});

						$('#'+idBtn).parent().parent().css({'border-bottom':'none'});

						desple2(idBtn, idConte, indiceAltura, 1);

					}

				);

			}

		}else{

			if(tipo == 2){

				if($('#'+idBtn).hasClass('saldos_btn5')){

					$('#'+idBtn+' div').fadeIn('fast',

						function(){

							$('#'+idBtn).removeClass().addClass('saldos_btn6');

							$('#'+idBtn+' div').fadeOut('fast');

							$('#'+idConte).hide();

							$('#'+idBtn).parent().parent().removeClass('bgF1F2F2');

							optieneAlturas();

							resizaIframe();

						}

					);

				}else{

					$('#'+idBtn+' div').fadeIn('fast',

						function(){

							$('#'+idBtn).removeClass().addClass('saldos_btn5');

							$('#'+idBtn+' div').fadeOut('fast');

							$('#'+idConte).show();

							$('#'+idBtn).parent().parent().addClass('bgF1F2F2');

							optieneAlturas();

							resizaIframe();

						}

					);

				}

			}else{

				if(tipo == 3){

					if($('#'+idBtn).hasClass('saldos_bloque4_f1_btn')){

						$('#'+idBtn+' div').fadeIn('fast',

							function(){

								$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btnH');

								$('#'+idBtn+' div').fadeOut('fast');

								desple3(idBtn, idConte, indiceAltura, 0);

							}

						);

					}else{

						$('#'+idBtn+' div').fadeIn('fast',

							function(){

								$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btn');

								$('#'+idBtn+' div').fadeOut('fast');

								$('#'+idConte).css({height: 0,display:'block'});

								$('#'+idConte+'b').show();

								$('#'+idBtn).parent().parent().parent()

								.css({background:'#F1F2F2'});

								$('#'+idBtn).parent().parent()

								.css({background:'none'});

								desple3(idBtn, idConte, indiceAltura, 1);

							}

						);

					}

				}

			}

		}

	}

}

//MODIFICADAS PARA AVATAR MARZO 2011

// expandir todo el contenido vistas generales

function expandirTodo(){

	var claseBoton = '';

	$('.expand').each(

		function (i) {

			$(this).show();

		}

	);

	$('.saldos_bloque4_f1_btnH').removeClass().addClass('saldos_bloque4_f1_btn');

	$('.saldos_bloque2_f1_btnH').removeClass().addClass('saldos_bloque2_f1_btn');//agregue para el apartado de busqueda

	$('.saldos_btn6').removeClass().addClass('saldos_btn5');

	$('.bordeInfContrae').css({ 'border-bottom': 'none' });

	$('.saldos_bloque4').css({ background: '#f1f2f2' });

	$('.saldos_bloque4b').css({ background: 'none' });

	$('.titularTabla').fadeOut();

	resizaIframe();

	setTimeout( function(){window.parent.ajustarP()}, 300);

}

// contraer todo el contenido vistas generales

function contraerTodo(){

	var claseBoton = '';

	$('.expand').each(

		function(i){

			$(this).hide();

		}

	); 

	$('.saldos_bloque4_f1_btn').removeClass().addClass('saldos_bloque4_f1_btnH');

	$('.saldos_bloque2_f1_btn').removeClass().addClass('saldos_bloque2_f1_btnH');

    $('.saldos_btn5').removeClass().addClass('saldos_btn6');

    $('.saldos_bloque4b').css({ 'background': 'url(/bb/images/bg2.gif) right -309px no-repeat' }).parent().css({ 'background':'#7386ad url(/bb/images/bg2.gif) -30px -279px no-repeat' });

    $('.bordeInfContrae').css({ 'border-bottom': '#FFFFFF 1px solid' });

    $('.titularTabla').fadeIn();

	resizaIframe();

	setTimeout( function(){window.parent.ajustarP()}, 300);

}

// Validaciones

// Validacion saldos

function soloNumLetras(id){

	var texto = document.getElementById(id).value;

	var caracteres="0123456789abcdefghyjklmnñopqrstuvwxyz";

	if(texto.length > 0){

		texto = texto.toLowerCase();

		for(i=0; i<texto.length; i++){

			if (caracteres.indexOf(texto.charAt(i),0)!=-1){

				return true;

			}else{

				return false;

			}

		}

	}else{

		return true;

	}

}

function validaBuscar(id){

	var estado = soloNumLetras(id);

	if(estado){

		$('.saldos_bloque2_f4_error span').hide();

		$('.saldos_bloque2_f4_error').slideUp('fast')

	}else{

		$('.saldos_bloque2_f4_error').slideDown('fast',

			function(){

				$('.saldos_bloque2_f4_error span').show();

				setTimeout(function(){resizaIframe();},100);

			}

		)

	}

	if(document.getElementById(id).value == 456){

		//location.href = 'saldos_vg2.html';

		//window.parent.soloConteIfr();

	}

}

function regresar(esc,url,fn){

	window.parent.cargaDoc(url)

	switch(esc){

		case 0:

			window.parent.soloConteIfr();

			break;

		case 1:

			window.parent.conteIfrConteVg();

			break;

		case 2:

			window.parent.conteIfrConteVg();

			break;

	}

	//if(fn){}

}

function irAdministrac(){

	window.parent.eventoNivel1ifr();

}

//

function inputClic(cls){

	var textTemp = $('#'+cls).val()

	if(document.getElementById(cls).value == '' || document.getElementById(cls).value == textTemp){

		document.getElementById(cls).value = '';

	}

	$('body').click(

		function(event){

			if(!( $(event.target).is('#'+cls) )){

				if( document.getElementById(cls).value == ''){

					document.getElementById(cls).value = textTemp;

				}

			}

		}

	);

}

//

// funciones en contenidos

function pintaTablas(){

	$(".pinta1").find("tr:even td").css("background-color", "#F1F2F2");

	$(".pinta1").find("tr:odd td").css("background-color", "#FFF");

	$(".pinta1").find("tr:odd td table td").css("background", "none");

	$(".pinta1").find("tr:even td table td").css("background", "none");

	$(".pinta2").find("tr:even td").css("background-color", "#FFF");

	$(".pinta2").find("tr:odd td").css("background-color", "#F1F2F2");

	$(".pinta2").find("tr:odd td table td").css("background", "none");

	$(".pinta2").find("tr:even td table td").css("background", "none");

}

//

/*

 * detectar Smartphones

 */

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

// Detecta si el navegador esta sobre PalmOS.

function DetectaPalmOS(){

   if (uagent.search(dispositivoPalm) > -1)

      return true;

   else

      return false;

}

// Detecta si el dispositivo es is un BlackBerry

function DetectaBlackBerry(){

   if (uagent.search(dispositivoBB) > -1)

      return true;

   else

      return false;

}

// Detecta si el navegador es Windows Mobile.

function DetectaWindowsMobile(){

   if (uagent.search(dispositivoWinMob) > -1)

      return true;

   else

      return false;

}

// Detecta si el dispositivo esta basado en Android OS

function DetectaAndroid(){

   if (uagent.search(dispositivoAndroid) > -1)

      return true;

   else

      return false;

}

// Detecta si el navegador esta basado en WebKit.

function DetectaWebkit(){

   if (uagent.search(engineWebKit) > -1)

      return true;

   else

      return false;

}

// Detecta si el dispositivo esta basado en Android OS y si el navegador es basado en WebKit.

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

// Detecta si es el navegador S60

// Pantallas viejas y antiguos navegadores WML.

function DetectaS60Oss(){

   	if (uagent.search(engineWebKit) > -1){

     	if ((uagent.search(dispositivoS60) > -1 || uagent.search(dispositivoSymbian) > -1))

        	return true;

     	else

        	return false;

   	}else

      return false;

}

// Detecta iPhone.

function DetectaIphone(){

   if (uagent.search(dispositivoIphone) > -1)

      return true;

   else

      return false;

}

// Detecta iPod Touch.

function DetectaIpod(){

   if (uagent.search(dispositivoIpod) > -1)

      return true;

   else

      return false;

}

// Detecta si el dispositivo es un iPad

function DetectaIpad(){

   if (uagent.search(dispositivoIpad) > -1  && DetectaWebkit())

      return true;

   else

      return false;

}

// Detecta si es dispositivo es un smartphone

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



// fin ventana emergente

function activaHoverIcos(){

	$('.saldos_btn1').click(

		function(){

			if(detectaDispositivoMobile()){;

				$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) right -102px no-repeat'});

				setTimeout(

					function(){

						$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) left -102px no-repeat'});

					}

				,350);

			}

		}

	);

	$('.saldos_btn2').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) right -128px no-repeat'});

				setTimeout(

					function(){

						$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) left -128px no-repeat'});

					}

				,350);

			}

		}

	);

	$('.saldos_btn2b').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) right -128px no-repeat'});

				setTimeout(

					function(){

						$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) left -128px no-repeat'});

					}

				,350);

			}

		}

	);

	$('.saldos_btn3').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'#fff url(/bbAvatar/images/bg2.gif) right -53px no-repeat'});

				setTimeout(

					function(){

						$(this).css({'background':'#fff url(/bbAvatar/images/bg2.gif) left -53px no-repeat'});

					}

				,350);

			}

		}

	);

	$('.saldos_btn4').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) right -77px no-repeat'});

				setTimeout(

					function(){

						$(this).css({'background':'#FFFFFF url(/bbAvatar/images/bg2.gif) left -77px no-repeat'});

					}

				,350);

			}

		}

	);

	$('.inputBtn1').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'url(/bbAvatar/images/bg1.gif) right -827px no-repeat'});

				setTimeout(

					function(){

						$(this).css({'background':'url(/bbAvatar/images/bg1.gif) left -827px no-repeat'});

					}

				,350);

			}

		}

	);

	$('.inputBtn2').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'url(img/bg1.gif) right -852px no-repeat'});

				setTimeout(

					function(){

						$(this).css({'background':'url(img/bg1.gif) left -852px no-repeat'})

					}

				,350);

			}

		}

	);

	$('.btnExportar1').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'url(/bbAvatar/images/hoja_flechas.gif)'});

				setTimeout(

					function(){

						$(this).css({'background':'url(/bbAvatar/images/icoExp2h.gif)'})

					}

				,350);

			}

		}

	);

	$('.btnExportar2').click(

		function(){

			if(detectaDispositivoMobile()){

				$(this).css({'background':'url(/bbAvatar/images/icoExp1.gif)'});

				setTimeout(

					function(){

						$(this).css({'background':'url(/bbAvatar/images/icoExp1h.gif)'})

					}

				,350);

			}

		}

	);

	$('.saldos_bordeInfCe5 a').click(

		function(){

			if(detectaDispositivoMobile()){

				var posMad = $(this).parent().parent().parent();

				posMad.find('td:eq(0)').find('div').css({'background':'url(/bbAvatar/images/bg2.gif) left -249px'});

				posMad.find('td:eq(2)').find('div').css({'background':'url(/bbAvatar/images/bg2.gif) right -249px'});

				posMad.find('td:eq(1)').css({'background':'url(/bbAvatar/images/bg2.gif) left -194px'});

				setTimeout(

					function(){

					posMad.find('td:eq(0)').find('div').css({'background':'url(/bbAvatar/images/bg2.gif) left -224px'});

					posMad.find('td:eq(2)').find('div').css({'background':'url(/bbAvatar/images/bg2.gif) right -224px'});

					posMad.find('td:eq(1)').css({'background':'url(/bbAvatar/images/bg2.gif) left -169px'});

					}

				,350);

			}

		}

	);

}



function desabilitarArea(){

	var alto1 = $('.cortinaEspec1i').height();

	$('.cortinaEspec1').css({height:alto1+'px', opacity:0.6, 'margin-top':'-'+alto1+'px'})

}



/**************** PAGINACION ****************/



var cant_paginas = 30;

var valor_actual = 1;



function ir_pag( pag_ir ){

	valor_ant = pag_ir-1;

	valor_actual = pag_ir;

	valor_sig = pag_ir+1;



	if( valor_actual == 1 ){

		retorno = '<a href="JavaScript:void(0);" class="antsig_d">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}else{

		retorno = '<a href="JavaScript:ir_pag('+valor_ant+');" class="antsig">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}



	if( valor_actual < 6 ){

		for( i=1; i<=11; i++ ){

			if( valor_actual == i ){

				retorno += '<a href="JavaScript:void(0);" class="sel_num">'+i+'</a>';

			}else{

				retorno += '<a href="JavaScript:ir_pag('+i+');" class="num">'+i+'</a>';

			}

		}

	}else{

		if( valor_actual > cant_paginas-5){

			for( i=(cant_paginas-10); i<=cant_paginas; i++ ){

				if( valor_actual == i ){

					retorno += '<a href="JavaScript:void(0);" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag('+i+');" class="num">'+i+'</a>';

				}

			}

		}else{

			for( i=(valor_actual-5); i<=(valor_actual+5); i++ ){

				if( valor_actual == i ){

					retorno += '<a href="JavaScript:void(0);" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag('+i+');" class="num">'+i+'</a>';

				}

			}

		}

	}

	if( valor_actual == cant_paginas ){

		retorno += '&nbsp;&nbsp;&nbsp;<a href="JavaScript:void(0);" class="antsig_d">Siguiente &raquo;</a>';

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

		retorno = '<a href="JavaScript:void(0);" class="antsig_d">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}else{

		retorno = '<a href="JavaScript:ir_pag_2('+valor_ant+');" class="antsig">&laquo; Anterior</a>&nbsp;&nbsp;&nbsp;';

	}



	if( valor_actual < 6 ){

		for( i=1; i<=11; i++ ){

			if( valor_actual == i ){

				retorno += '<a href="JavaScript:void(0);" class="sel_num">'+i+'</a>';

			}else{

				retorno += '<a href="JavaScript:ir_pag_2('+i+');" class="num">'+i+'</a>';

			}

		}

	}else{

		if( valor_actual > cant_paginas-5){

			for( i=(cant_paginas-10); i<=cant_paginas; i++ ){

				if( valor_actual == i ){

					retorno += '<a href="JavaScript:void(0);" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag_2('+i+');" class="num">'+i+'</a>';

				}

			}

		}else{

			for( i=(valor_actual-5); i<=(valor_actual+5); i++ ){

				if( valor_actual == i ){

					retorno += '<a href="JavaScript:void(0);" class="sel_num">'+i+'</a>';

				}else{

					retorno += '<a href="JavaScript:ir_pag_2('+i+');" class="num">'+i+'</a>';

				}

			}

		}

	}

	if( valor_actual == cant_paginas ){

		retorno += '&nbsp;&nbsp;&nbsp;<a href="JavaScript:void(0);" class="antsig_d">Siguiente &raquo;</a>';

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



function activaCheck( check_id , datos_id ){

	if( document.getElementById( check_id ).checked ){

		document.getElementById( datos_id ).style.display = 'block';

	}else{

		document.getElementById( datos_id ).style.display = 'none';

	}

	setTimeout( function(){ window.parent.ajustarP(); }, 100);

}



function activaText( check_id , txt_id ){

	if( document.getElementById( check_id ).checked ){

		document.getElementById( txt_id ).disabled = false;

		

		document.getElementById( txt_id ).setAttribute('class','input2');

		document.getElementById( txt_id ).setAttribute('className','input2');

	}else{

		document.getElementById( txt_id ).disabled = true;

		

		document.getElementById( txt_id ).setAttribute('class','input2_d');

		document.getElementById( txt_id ).setAttribute('className','input2_d');

	}

}



function activaText2( check_id , txt_id, nums ){

	if( document.getElementById( check_id ).checked ){

		document.getElementById( txt_id ).disabled = false;

		document.getElementById( txt_id ).setAttribute('class','input2_2');

		document.getElementById( txt_id ).setAttribute('className','input2_2');

		document.getElementById( nums ).setAttribute('class','normal color666');

		document.getElementById( nums ).setAttribute('className','normal color666');

	}else{

		document.getElementById( txt_id ).disabled = true;

		document.getElementById( txt_id ).setAttribute('class','input2_d_2');

		document.getElementById( txt_id ).setAttribute('className','input2_d_2');

		document.getElementById( nums ).setAttribute('class','normal colorCCC');

		document.getElementById( nums ).setAttribute('className','normal colorCCC');

	}

}



function resizaIframe(){



	window.parent.ajustarP();

}

function inicializaIframe(){

	if(!(navigator.userAgent.toLowerCase().indexOf('chrome/') > -1) && window.parent.ajustarIframe != null )

		window.parent.ajustarP();

}

$(document).ready(

	function(){

		optieneAlturas();

		

		$(window).bind('resize', function(){optieneAlturas()});

		activaHoverIcos();		

		inicializaIframe();

		pintaTablas();

	}

);

function desplegable_a(idBtn, idConte, tipo){

	var indiceAltura = $('#'+idConte).index('.expand')

	var alturaArray = desplegables;

	if(tipo == 0){

		if($('#'+idBtn).hasClass('saldos_bloque2_f1_btn')){

			$('#'+idBtn+' div').fadeIn('fast',

				function(){

					desple1(idBtn, idConte, indiceAltura,0);

				}

			);

		}else{

			$('#'+idBtn+' div').fadeIn('fast',

				function(){

					desple1(idBtn, idConte, indiceAltura, 1);

				}

			);

		}

	}else{

		if(tipo == 1){

			if($('#'+idBtn).hasClass('saldos_bloque4_f1_btn')){

				$('#'+idBtn+' div').fadeIn('fast',

					function(){

						$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btnH');

						$('#'+idBtn+' div').fadeOut('fast');

						desple2(idBtn, idConte, indiceAltura, 0);

					}

				);

			}else{

				$('#'+idBtn+' div').fadeIn('fast',

					function(){

						$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btn');

						$('#'+idBtn+' div').fadeOut('fast');

						$('#'+idConte).css({height: 0,display:'block'});

						$('#'+idBtn).parent().parent().css({'border-bottom':'none'});

						desple2(idBtn, idConte, indiceAltura, 1);

					}

				);

			}

		}else{

			if(tipo == 2){

				if($('#'+idBtn).hasClass('saldos_btn5')){

					$('#'+idBtn+' div').fadeIn('fast',

						function(){

							$('#'+idBtn).removeClass().addClass('saldos_btn6');

							$('#'+idBtn+' div').fadeOut('fast');

							$('#'+idConte).hide();

							$('#'+idBtn).parent().parent().find('td').removeClass(' bgF1F2F2b ');

							optieneAlturas();

							setTimeout( function(){window.parent.ajustarP()}, 600);

						}

					);

				}else{

					$('#'+idBtn+' div').fadeIn('fast',

						function(){

							$('#'+idBtn).removeClass().addClass('saldos_btn5');

							$('#'+idBtn+' div').fadeOut('fast');

							$('#'+idConte).show();

							$('#'+idBtn).parent().parent().find('td').addClass(' bgF1F2F2b ');

							optieneAlturas();

							setTimeout( function(){window.parent.ajustarP()}, 600);

						}

					);

				}

			}else{

				if(tipo == 3){

					//alert("entrotipo3")

					if($('#'+idBtn).hasClass('saldos_bloque4_f1_btn')){

						$('#'+idBtn+' div').fadeIn('fast',

							function(){

								$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btnH');

								$('#'+idBtn+' div').fadeOut('fast');

								desple3(idBtn, idConte, indiceAltura, 0);

							}

						);

					}else{

						$('#'+idBtn+' div').fadeIn('fast',

							function(){

								$('#'+idBtn).removeClass().addClass('saldos_bloque4_f1_btn');

								$('#'+idBtn+' div').fadeOut('fast');

								$('#'+idConte).css({height: 0,display:'block'});

								$('#'+idConte+'b').show();

								$('#'+idBtn).parent().parent().parent()

								.css({background:'#7386ad'});

								$('#'+idBtn).parent().parent()

								.css({background:'none'});

								desple3(idBtn, idConte, indiceAltura, 1);

							}

						);

					}

				}

			}

		}

	}

}



function ocultaErrores(){

	$('.saldos_bloque2_f4_error_display').hide();



}



// TOOLTIPS AVATAR



function showtooltip(){

	$('.showtooltip').hover(

		function(){

			var clase = $(this).attr("class").split(" ");

			$('#tooltip-iconos').find('.tooltip').html( clase[clase.length - 1].replace(/[_]+/g," ") );

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

		 var td = $(".tooltipB");

		 if($(td).attr("tagname")== 'TD')

			 $(td).html('<div class="tooltipB"></div>').removeClass('tooltipB').css({'padding-top':'3px','background-color':'#ffffff'});

	 }	

	 

	$('.showtooltip').hover(



		function(){

			  var clase = $(this).attr("class").split(" ");

			  $('#tooltip').find('.tooltipC').html( clase[clase.length - 1].replace(/[_]+/g," ") );

			  pos = $(this).offset();

			  alto = $('#tooltip').height()-10;

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

			

			  $('#tooltip').find('.tooltipC').html( $(this).attr("title") );

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



/* Para ayuda dentro de tu transacci&oacute;n Atlántida*/

function AbreAyuda(ruta){

	window.open(ruta,"ClickInfo","scrollbars=yes,menubar=no,resizable=1,copyhistory=1,width=650,height=450");

}



function arbre_cierra_ayuda(idBtn, idConte, idtd){

	div_conte = document.getElementById(idConte).style.display;

	if( div_conte != 'block'){

		$('#'+idBtn).removeClass().addClass('tab_open');

		$('#'+idBtn+' div').fadeOut('fast');

		$('#'+idtd).removeClass().addClass('borderR_Dotted_CCCCCC borderTB_7487ae bgeff8ff ancho100p');

		$('#'+idConte).css({width: 0,display:'block'});

		$('#'+idConte).animate({ width: '100%'},{ duration: 1, "easing": "easein", complete: function(){$('#'+idConte).css({width: 'auto'});}});

	}else{

		$('#'+idBtn).removeClass().addClass('tab_close');

		$('#'+idtd).removeClass().addClass('borderTB_7487ae bgeff8ff ancho0p');

		$('#'+idBtn+' div').fadeOut('fast');

		$('#'+idConte).animate({ width: 0},{ duration: 1, "easing": "easein", complete: function(){$('#'+idConte).css({width: 'auto',display:'none'});}});

	}

}



function abre_cierra_ayuda_login(idBtn, idConte, idtd){

	var id = $("#"+idBtn);

	if(id.hasClass("tab_closeLogin")){

		if(document.getElementById("netkey1") && document.getElementById("netkey1").src == ""){

			if($("#netkey1").attr("src") == null || $("#netkey1").attr("src") == ""){

				$("#netkey1").attr("src", "../../bbAvatar/images/netkey1.gif")

			}

		}

		if(document.getElementById("netkeyb1") && document.getElementById("netkeyb1").src == ""){

			if($("#netkeyb1").attr("src") == null || $("#netkeyb1").attr("src") != "/bbAvatar/images/netkey_b1.gif"){

				$("#netkeyb1").attr("src", "../../bbAvatar/images/netkey_b1.gif")

			}

		}

		if(document.getElementById("netkey4") && document.getElementById("netkey4").src == ""){

			if($("#netkey4").attr("src") == null || $("#netkey4").attr("src") != "/bbAvatar/images/netkey4.gif"){

				$("#netkey4").attr("src", "../../bbAvatar/images/netkey4.gif")

			}

		}

	}



	div_conte = document.getElementById(idConte).style.display;

	if( div_conte != 'block'){

		$('#'+idBtn).removeClass().addClass('tab_openLogin');

		$('#'+idBtn+' div').fadeOut('fast');

		$('#'+idtd).removeClass().addClass('borderR_Dotted_CCCCCC borderTB_7487ae bgeff8ff ancho100p');

		$('#'+idConte).css({width: 0,display:'block'});

		$('#'+idConte).animate({ width: '100%'},{ duration: 1, "easing": "easein", complete: function(){$('#'+idConte).css({width: 'auto'});}});

	}else{

		$('#'+idBtn).removeClass().addClass('tab_closeLogin');

		$('#'+idtd).removeClass().addClass('borderTB_7487ae bgeff8ff ancho0p');

		$('#'+idBtn+' div').fadeOut('fast');

		$('#'+idConte).animate({ width: 0},{ duration: 1, "easing": "easein", complete: function(){$('#'+idConte).css({width: 'auto',display:'none'});}});

	}

}





(function($){

	

	$.modalLogin = function(options){

		return $.modalLogin.impl.init(options);

	};

	$.modalLogin.close = function(){$.modalLogin.impl.close();};

	$.modalLogin.setContainerDimensions = function(resize){$.modalLogin.impl.setContainerDimensions(resize);};

	$.modalLogin.setDimentions = function(height, width){$.modalLogin.impl.setDimentions(height, width);};	

	$.modalLogin.esconder = function(Contenido,height, width){$.modalLogin.impl.esconder(Contenido,height,width);};	

	$.modalLogin.mostrar = function(){$.modalLogin.impl.mostrar();};

	//$.fn.modalLogin = function(options){return $.modalLogin.impl.init(this,options);};

	$.modalLogin.defaults = {

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

	$.modalLogin.impl={

		o:null,

		d:{},

		dim:null,

		init:function(options,dimensions,flagDiv){

			var s = this;

			s.o = $.extend({},$.modalLogin.defaults,options);

			if(!s.o.flagDiv)

				document.getElementById('mensajeError_contenido_ifrm').setAttribute('src',s.o.srcIfrm);

			s.zIndex = s.o.zIndex;

			s.occb=false;

			s.crear();

			//data=null;

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

			$('.ventanaEmergenteLogin')

			.css(

					{

						display:'none',

						position:'fixed',

						zIndex:s.o.zIndex+2

					}

			)

			s.d.container=$('.ventanaEmergenteLogin')

			s.d.data = $('.ventanaEmergenteLogin-data')

			//data=null;

		},

		bindEvents:function(){

			var s = this;

			$('.'+s.o.closeClass).bind('click.ventanaEmergenteLogin',function(e){e.preventDefault(); s.close();});

			if(s.o.close&&s.o.overlayClose){

				s.d.overlay.bind('click.ventanaEmergenteLogin',

					function(e){

						e.preventDefault();

						s.close();

					}

				);

			}

			$(document).bind('keydown.ventanaEmergenteLogin',

				function(e){

					if(s.o.focus&&e.keyCode==9){

						s.watchTab(e);

					}else if((s.o.close&&s.o.escClose)&&e.keyCode==27){

						e.preventDefault();

						s.close();

					}

				}

			);

			$(window).bind('resize.ventanaEmergenteLogin',

				function(){

						w=s.getDimensions();

						s.setContainerDimensions(true);

						s.d.iframe&&s.d.iframe.css({height:w[0],width:w[1]});

						s.d.overlay.css({height:w[0],width:w[1]});

				}

			);

		},

		unbindEvents:function(){

			$('.'+this.o.closeClass).unbind('click.ventanaEmergenteLogin');

			$(document).unbind('keydown.ventanaEmergenteLogin');

			$(window).unbind('resize.ventanaEmergenteLogin');

			this.d.overlay.unbind('click.ventanaEmergenteLogin');

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

			//alert('asdf')

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

				//s.d.container.css({height:dh,width:cw});

				if(dh>ch||dw>cw){

					s.d.container.css({overflow:'auto'});

				}

				

			}

			if(s.o.autoPosition){

				s.setPosition();

			}

		},

		setDimentions:function(height, width){

			$('#tabla_emergente, .ventanaEmergenteLogin-data').css(

				{

					width : width + 40,

					height : height == 'auto' ? 'auto' : + height + 40

				}				

			);

			if($("#mensajeError_contenido_ifrm").css("display") == "none")

				$("#mensajeError_contenido_div").css({height: height,width:width});

			else

				$("#mensajeError_contenido_ifrm").css({height: height,width:width});

			$("#ventanaEmergenteLogin").css({height: height+40});

			$.modalLogin.impl.setContainerDimensions(true);

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

			if($(e.target).parents('.ventanaEmergenteLogin').length>0){

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

			//self.container = d.container[0];

			s.d.overlay.show();

			s.d.container.show();

			$('.ventanaEmergenteLogin').show();

			if(detectaDispositivoMobile()){

				$('html').css({'overflow':'hidden','overflow-x':'hidden','overflow-y':'hidden'});

				$('body').css({'overflow':'hidden','overflow-x':'hidden','overflow-y':'hidden'});

			}

			s.d.container.css({'top':'-400px'});

			s.bindEvents();

			

			$('#tabla_emergente, .ventanaEmergenteLogin-data').css(

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

			

			setTimeout( 

				function(){

					$.modalLogin.impl.setPosition();

				}

				, 550 

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

							//s.close();

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

			$.modalLogin.impl.setDimentions(height,width);

			$("#mensajeError_contenido_div").html(Contenido).css("display","block");

			$('.ventanaEmergenteLogin').fadeIn("fast");

		},

		mostrar: function(){

			$("#mensajeError_contenido_div").css("display","none");

			$('.ventanaEmergenteLogin').fadeIn("fast");

			$("#mensajeError_contenido_ifrm").css("display","block");

		}

	};

})(jQuery);



function showtooltipLogin(){

				

	 if ($.browser.msie && $.browser.version.substr(0, 1) == '7')

	 {

		var td = $(".tooltipTLogin");

		if($(td).attr("tagname")== 'TD'){

			$(td).html('<div class="tooltipTLogin"></div>').css('vertical-align','top').removeClass('tooltipTLogin');

              $(".tooltipTLogin").css('padding-bottom','8px');

		}

	 }	

	 

	$('.showtooltipLogin').hover(

		function(){

			$('#tooltipLogin').find('.tooltipCLogin').html( $(this).attr("class").split(" ")[0] );

			pos = $(this).offset();

			alto = $('#tooltipLogin').height()-85;

			ancho = $('#tooltipLogin').width()-27;

			$('#tooltipLogin').css({'top':(pos.top+alto)+'px','left':(pos.left-ancho)+'px'});

			$('#tooltipLogin').show();

		},

		function()

		{

			  $('#tooltipLogin').hide();

			  $('#tooltipLogin').css({'top':'0px','left':'0px'});

		}

	);

	

	$('.showtooltipRLogin').hover(

		function(){

			

			  $('#tooltipLogin').find('.tooltipCLogin').html( clase[clase.length - 1].replace(/[_]+/g," ") );

			  $('#tooltipLogin').find('.tooltipTLLogin').css('width','6px');

			  $('#tooltipLogin').find('.tooltipBLLogin').css('width','6px');

			  $('#tooltipLogin').find('.tooltipTRLogin').css('width','6px');

			  $('#tooltipLogin').find('.tooltipBRLogin').css('width','6px');

			  pos = $(this).offset();

			  alto = $('#tooltipLogin').height()+10;

			  ancho = $('#tooltipLogin').width()-20;

			  $('#tooltipLogin').css({'top':(pos.top+alto)+'px','left':(pos.left-ancho)+'px'});

			  $('#tooltipLogin').show();

		},

		function()

		{

			 $('#tooltipLogin').hide();

			 $('#tooltipLogin').find('.tooltipTLLogin').css('width','10px');

			 $('#tooltipLogin').find('.tooltipBLLogin').css('width','10px');			 

			 $('#tooltipLogin').find('.tooltipTRLogin').css('width','10px');

			 $('#tooltipLogin').find('.tooltipBRLogin').css('width','10px');

			 $('#tooltipLogin').css({'top':'0px','left':'0px'});

		}

	);	

}



function showtooltipsLogin(){

	$("#browser").hover(function(){

		$("#tail-tooltip-browser").addClass("p_tooltipLogin");

		var pos = $(this).offset();

		alto = $('#tooltip-browser').height();

		ancho = $('#tooltip-browser').width();

		$('#tooltip-browser').css({'top':(pos.top + 28)+'px','left':(pos.left - ancho + 50)+'px'});

		$('#tooltip-browser').show();

	},function()

	{

		$('#tooltip-browser').hide();

	});

	$("#adobe").hover(function(){

		$("#tail-tooltip-adobe").addClass("p_tooltipLogin");

		var pos = $(this).offset();

		alto = $('#tooltip-adobe').height();

		ancho = $('#tooltip-adobe').width();

		$('#tooltip-adobe').css({'top':(pos.top + 28)+'px','left':(pos.left - ancho + 50)+'px'});

		$('#tooltip-adobe').show();

	},function()

	{

		$('#tooltip-adobe').hide();

	});

	$("#java").hover(function(){

		$("#tail-tooltip-java").addClass("p_tooltipLogin");

		var pos = $(this).offset();

		alto = $('#tooltip-java').height();

		ancho = $('#tooltip-java').width();

		$('#tooltip-java').css({'top':(pos.top + 28)+'px','left':(pos.left - ancho + 50)+'px'});

		$('#tooltip-java').show();

	},function()

	{

		$('#tooltip-java').hide();

	});

}



function ligasNegocio(url){

	document.location = url;

}



function ligasReq(url){

	window.open(url,'','location=yes,height='+(screen.height-(screen.height*0.3))+',width='+(screen.width-(screen.width*0.2))+',top='+(screen.height*0.05)+',left='+(screen.width*0.1)+',resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');

}

pactual=1;

		pantes=0;

		

		function nextpage(){

		

		pactual=pactual+1;

				

		if(pactual==2){

			

			$('#pre1').show();

		    $('#pre2').show();

		    $('#pre1_2').show();

		    $('#pre2_2').show();

			

			$('#p1,#p3, #p4').removeClass('boldText');

			$('#p2').addClass('boldText');

			$('#p1_2').removeClass('boldText');

			$('#p2_2').addClass('boldText');

			

			$('#sig1').show();

			$('#sig2').show();

			$('#sig1_2').show();

			$('#sig2_2').show();

			

			pantes=1;

			

			top.window.scrollTo(0,0);

			//cargando_movimientos();

			hoculto();

			

			}

		

		

		

		if(pactual==3){

			

			

			$('#pre1').show();

		    $('#pre2').show();

		    $('#pre1_2').show();

		    $('#pre2_2').show();

			

			$('#p2, #p4, #p1').removeClass('boldText');

			$('#p3').addClass('boldText');

			$('#p2_2').removeClass('boldText');

			$('#p3_2').addClass('boldText');

			

			$('#sig1').show();

			$('#sig2').show();

			$('#sig1_2').show();

			$('#sig2_2').show();

			

			pantes=2;

			

			top.window.scrollTo(0,0);

			//cargando_movimientos();

			hoculto();

			

			}

		

		if(pactual==4){

			

			$('#pre1').show();

		    $('#pre2').show();

		    $('#pre1_2').show();

		    $('#pre2_2').show();

			

			$('#p3,#p2,#p1').removeClass('boldText');

			$('#p4').addClass('boldText');

			$('#p3_2').removeClass('boldText');

			$('#p4_2').addClass('boldText');

			

			$('#sig1').hide();

			$('#sig2').hide();

			$('#sig1_2').hide();

			$('#sig2_2').hide();

			

			pantes=3;

			

			top.window.scrollTo(0,0);

			//cargando_movimientos();

			soculto();

			

			}

		

			

	}

	

	function prevpage(){

		

		

		if(pantes==1){

			

			$('#pre1').hide();

		    $('#pre2').hide();

		    $('#pre1_2').hide();

		    $('#pre2_2').hide();

			

			$('#p2').removeClass('boldText');

			$('#p1').addClass('boldText');

			$('#p2_2').removeClass('boldText');

			$('#p1_2').addClass('boldText');

			

			$('#sig1').show();

			$('#sig2').show();

			$('#sig1_2').show();

			$('#sig2_2').show();

			

			pactual=1;

			pantes=0;

			

			top.window.scrollTo(0,0);

			//cargando_movimientos();

			hoculto();

			

			}

			

			if(pantes==2){

			

			$('#pre2').show();

		    $('#pre1').show();

		    $('#pre2_2').show();

		    $('#pre1_2').show();

			

			$('#p3').removeClass('boldText');

			$('#p2').addClass('boldText');

			$('#p3_2').removeClass('boldText');

			$('#p2_2').addClass('boldText');

			

			$('#sig1').show();

			$('#sig2').show();

			$('#sig1_2').show();

			$('#sig2_2').show();

			

			pactual=2;

			pantes=1;

						

			top.window.scrollTo(0,0);			

			//cargando_movimientos();

			hoculto();

			

			}

			

			if(pantes==3){

			

			$('#pre2').show();

		    $('#pre1').show();

		    $('#pre2_2').show();

		    $('#pre1_2').show();

			

			$('#p4').removeClass('boldText');

			$('#p3').addClass('boldText');

			$('#p4_2').removeClass('boldText');

			$('#p3_2').addClass('boldText');

			

			$('#sig1').show();

			$('#sig2').show();

			$('#sig1_2').show();

			$('#sig2_2').show();

			

			pactual=3;

			pantes=2;

						

			top.window.scrollTo(0,0);			

			//cargando_movimientos();

			hoculto();

			

			}

			

			

	}

	

	function page1() {

   

   $('#p1').addClass("boldText");

   $('#p2, #p3, #p4 ').removeClass("boldText");

   

   $('#p1_2').addClass("boldText");

   $('#p2_2, #p3_2, #p4_2').removeClass("boldText");

        

	   $('#pre1').hide();

	   $('#pre2').hide();

	   $('#pre1_2').hide();

	   $('#pre2_2').hide();

		

		

		$('#sig1').show();

		$('#sig2').show();

		$('#sig1_2').show();

		$('#sig2_2').show();

		

		top.window.scrollTo(0,0);

		//cargando_movimientos();

		hoculto();

		

		pactual=1;

		pantes=0;

		}

		

   function page2() {

	   

  $('#p2').addClass("boldText");

  $('#p1, #p3, #p4 ').removeClass("boldText");

  

  $('#p2_2').addClass("boldText");

  $('#p1_2, #p3_2, #p4_2').removeClass("boldText");

  

       $('#pre2').show();

	   $('#pre1').show();

	   $('#pre2_2').show();

	   $('#pre1_2').show();

		

		

		$('#sig1').show();

		$('#sig2').show();

		$('#sig1_2').show();

		$('#sig2_2').show();

  

  		top.window.scrollTo(0,0);

		//cargando_movimientos();

		hoculto();

		

        pactual=2;

		pantes=1;

        }

		

   function page3() {

  

  $('#p3').addClass("boldText");

  $('#p2, #p1, #p4 ').removeClass("boldText");

  

  $('#p3_2').addClass("boldText");

  $('#p2_2, #p1_2, #p4_2').removeClass("boldText");

  

       $('#pre2').show();

	   $('#pre1').show();

	   $('#pre2_2').show();

	   $('#pre1_2').show();

		

		

		$('#sig1').show();

		$('#sig2').show();

		$('#sig1_2').show();

		$('#sig2_2').show();

        

		top.window.scrollTo(0,0);

        //cargando_movimientos();

		hoculto();

		

		pactual=3;

		pantes=2;

		

        }

   function page4() {

	  

	   

  $('#p4').addClass("boldText");

  $('#p2, #p1, #p3 ').removeClass("boldText");

  

  $('#p4_2').addClass("boldText");

  $('#p2_2, #p1_2, #p3_2').removeClass("boldText");

        

	   $('#pre2').show();

	   $('#pre1').show();

	   $('#pre2_2').show();

	   $('#pre1_2').show();

		

		

		$('#sig2').hide();

		$('#sig1').hide();

		$('#sig2_2').hide();

		$('#sig1_2').hide();

		

		top.window.scrollTo(0,0);

		//cargando_movimientos();

		soculto();

		

		pactual=4;

		pantes=3;

		

        }

		

/******* Mostrar/Ocultar Totales **************************/

		

function soculto(){

		

		$('.ocultotd').removeClass("displayN");

		

		

		}

function hoculto(){

		

		$('.ocultotd').addClass("displayN");

		

		

		}

		

function labelTooltip() {

			var lblTooltipPrint = ( isEnglishSel ) ? 'Print' : 'Imprimir';

			var lblTooltipHelp  = ( isEnglishSel ) ? 'Help' : 'Ayuda';

			var classPrint = document.getElementById( 'btn_imp' ).className;

			var classHelp = document.getElementById( 'btn_ayuda' ).className;

			document.getElementById( 'btn_imp' ).className = classPrint + ' ' + lblTooltipPrint;

			document.getElementById( 'btn_ayuda' ).className = classHelp + ' ' +  lblTooltipHelp ;

		}