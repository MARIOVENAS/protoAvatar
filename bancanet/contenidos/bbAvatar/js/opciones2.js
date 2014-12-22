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

		setTimeout( function(){window.parent.ajustarIframe()}, 600);

	}else{

		$('#'+idBtn).removeClass().addClass('saldos_bloque2_f1_btn');

		$('#'+idBtn+' div').fadeOut('fast');

		$('#'+idConte).css({height: 0,display:'block'});

		$('#'+idConte).animate({ height: desplegables[indiceAltura]},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto'});resizaIframe();}});



		setTimeout( function(){window.parent.ajustarIframe()}, 600);

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

		setTimeout( function(){window.parent.ajustarIframe()}, 600);

	}else{

		$('#'+idConte).animate({ height: desplegables[indiceAltura]},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto'});

		$('#'+idBtn).parent().parent().find('.titularTabla').fadeOut();

		resizaIframe();

		}});

		setTimeout( function(){window.parent.ajustarIframe()}, 600);

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

		setTimeout( function(){window.parent.ajustarIframe()}, 600);

	}else{

		$('#'+idConte).animate({ height: desplegables[indiceAltura]},{ duration: 400, "easing": "easein", complete: function(){$('#'+idConte).css({height: 'auto'});

		$('#'+idBtn).parent().parent().find('.titularTabla').fadeOut();

		resizaIframe();

		}});

		setTimeout( function(){window.parent.ajustarIframe()}, 600);

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

	setTimeout( function(){window.parent.ajustarIframe()}, 300);

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

	setTimeout( function(){window.parent.ajustarIframe()}, 300);

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

	setTimeout( function(){ window.parent.ajustarIframe(); }, 100);

}





function resizaIframe(){



	window.parent.ajustarIframe();

}

function inicializaIframe(){

	if(!(navigator.userAgent.toLowerCase().indexOf('chrome/') > -1) && window.parent.ajustarIframe != null )

		window.parent.ajustarIframe();

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

							setTimeout( function(){window.parent.ajustarIframe()}, 600);

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

							setTimeout( function(){window.parent.ajustarIframe()}, 600);

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



/* Para ayuda dentro de tu transacción Atlántida*/

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