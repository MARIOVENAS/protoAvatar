function funciones_login2(){

    tooltip_verifica();

    click_topmenu();

	pop_up();

}

var login='default'; 

function funciones_login(){

      

    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)

    load_html_callback("#footer",'piezas/footer.html','',true)

  	 pop_up('.popup');

    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')

     $('.EnConstruccion').live('click',function(){  enConstruccion();   });

      if(location.href.indexOf('prototipo')!=-1)  

       $.doTimeout(1500, function(){ prototipo() }); 







    tooltip_left();

	

   	fondo_demo();

}

function funciones_log(){

      

    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)

    load_html_callback("#footer",'piezas/footer.html','',true)

	pop_up('.popup');

    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')

    $('.EnConstruccion').live('click',function(){  enConstruccion(); });

    tooltip_left();

	fondo_demo();

	

	if(location.href.indexOf('prototipo')!=-1)  

        $.doTimeout(1500, function(){ prototipoLogin() }); 

}

function set_fondoLogin( tipo ){

	

	if( tipo == 'demo' ){

		$('#cambiaImagen1').addClass('bg_2');

		$('#cambiaImagen2').addClass('bg_0');

	}else{

		$('#cambiaImagen1').addClass('bg_2');

		$('#cambiaImagen2').addClass('bg_1');

	}

	

	

}

function fondo_demo(){

 if(location.href.indexOf('htmls_demo')>=0){

            $("#contenido_pag .contenido").before('<div class="bg_demo"></div> ');

              if(location.href.indexOf('/14')>=0 || location.href.indexOf('/15')>=0  || location.href.indexOf('/21')>=0  )

              $(".bg_demo").css('height',460+'px'); else

            if(location.href.indexOf('/16b-')>=0)

              $(".bg_demo").css('height',425+'px'); else

            if(location.href.indexOf('/16-')>=0)

              $(".bg_demo").css('height',460+'px');else  

            if(location.href.indexOf('/23-')>=0)

              $(".bg_demo").css('height',380+'px');else

            {

                var altura_contenido=$(".contenido").height();

                var altura_pie_contenido= $(".pie_contenido").height();

                $(".bg_demo").css('height',altura_contenido +17 +altura_pie_contenido+'px')

             } 

  }   

}

function ajustarOverlay(){

	var pantalla = $(window).height();

	var contenedor = $('#contenedor').height();

	var alto;

	if( contenedor > pantalla){

		alto = contenedor;

	}

	else{

		alto = pantalla;

	}

	

	$('body').css({"height":alto+'px'});

	$('.overlay').css({"height":alto+'px'});

}

 



function tooltip_verifica(){

	$('.verifica').click(

		function(){

			$('.tooltip_verifica').hide();

			var id_element = $(this).attr('id');

			$('.'+id_element).css({

				top : $(this).offset().top + 20 + 'px',

				left : $(this).offset().left - 45 + 'px'

			});

			$('.'+id_element).show();

     

		}

	);

    

	$('.tooltip_verifica .close').click(function(){

		$(this).parent().parent().hide();	

	});

}



function tooltip_left(){

	$('.tool_left').click(

		function(e){

			$('.tooltip_left').hide();

			var id_element = $(this).attr('id');

			$('.'+id_element).css({

				top : e.pageY - 25 +'px',

				left : e.pageX + 20 +'px'

			});

			$('.'+id_element).show();

  

		}

	);

    

	$('.tooltip_left .close').click(function(){

		$(this).parent().parent().hide();	

	});

}



/******* funciones del menu de navegacion ********/

function click_topmenu(){

	$('.overlay_trans').click(function(){

		cerrarAnterirorSubmenu();

		$('.overlay_trans').hide();

	});

	//$('.cortina').click(function(event){event.stopPropagation(); });

	$('.menu .con_menu').click(function(event){

		if($(this).hasClass('menuAbierto')){

			cerrarAnterirorSubmenu();

			$('.overlay_trans').hide('fast',function(){

				//event.stopPropagation();

			});

		}

		else{

			abrirSubmenu(this);

			$('.overlay_trans').show('fast',function(){

				//event.stopPropagation();

			});



		}

	});

}



function cerrarAnterirorSubmenu(){   $('.menuAbierto').each(function(){ cerrarSubmenu(this); }); }



function abrirSubmenu(elementoThis){

           cerrarAnterirorSubmenu();

           $(elementoThis).addClass('menuAbierto');

           var class_element = '.'+$(elementoThis).attr('id');  

              var alturaCortina= $(class_element).height();

              $(elementoThis).addClass('flecha_hover');

            $(class_element).css('margin-left','-27px');

            $(class_element+' .cortina').css('margin-top','-'+alturaCortina+'px');

             $(class_element).css({visibility:'visible'}) 

             $(class_element+' .cortina').animate({   marginTop:  0+'px' },500, function() { });

             

}

function cerrarSubmenu(elementoThis){

    $(elementoThis).removeClass('menuAbierto');

    var class_element = '.'+$(elementoThis).attr('id'); 

    var alturaCortina= $(class_element).height();

    $(elementoThis).removeClass('flecha_hover'); 

    $(class_element+' .cortina').animate({  marginTop: '-'+alturaCortina+'px' },500, function() {

        $(class_element).css({visibility:'hidden'}) 

        $(class_element+' .cortina').css('margin-top','0px');

    });

}



/***********************************************/

 

var fondos = ['bg_1','bg_2','bg_3','bg_4'];

 

var textos = [	'Realiza compras en el lugar que m&aacute;s<br /> quieras y recibe a cambio Puntos Premia.',

				'bg_2<br>bg_2',

				'<span class="color333">Realiza el pago de tus servicios a trav&eacute;s de<br />sus modalidades de Servicio Electr&oacute;nico de<br />Pagos y Cuenta Concentradora.</span>',

				'bg_4<br>bg_4'];

				

var links = [	'<img src="../img/flecha_blanca_r.gif">&nbsp;&nbsp;<a href="javascript:void(0);">Reglamento Premia Banamex</a>',

				'<img src="../img/flecha_blanca_r.gif">&nbsp;&nbsp;bg_2',

				'<img src="../img/flecha_azul_r.gif">&nbsp;&nbsp;<a href="javascript:void(0);" class="color00589d">Conoce los beneficios</a>',

				'<img src="../img/flecha_blanca_r.gif">&nbsp;&nbsp;bg_4'];



function cambia_carrusel( siguiente ){

	var fondo_sig =  siguiente;

	var margen_flecha = 176 * fondo_sig;

	$('#cambiaImagen1').attr('class', fondos[fondo_sig]);

	$('#cambiaImagen2').fadeOut('slow',function(){

		$('#cambiaImagen2').attr('class', fondos[fondo_sig]);

		$('#cambiaImagen2').show();

	});

	//Cambia destacado

	var destacado_active = 0;

	switch(fondo_sig){

		case 0: destacado_active = 3;break;

		case 1: destacado_active = 2;break;

		case 2: destacado_active = 1;break;

		case 3: destacado_active = 0;break;

	}

	$('.destacado_avtive').removeClass('destacado_avtive').addClass('destacado');

	$('.destacado_avtive_flecha').css('margin-left',margen_flecha);

	$('.destacado:eq('+(destacado_active)+')').removeClass('destacado').addClass('destacado_avtive');

 	$('#texto_bg .texto').html(textos[fondo_sig]);

	$('#texto_bg .link').html(links[fondo_sig]);

} 



function cambia_carrusel_DEMO( siguiente ){

	fondos[0] = 'bg_0';

	textos[0] = 'Aprende a realizar tus operaciones<br />bancarias por internet utilizando nuestro<br />demo interactivo. Descubre lo f&aacute;cil, pr&aacute;ctico<br />y seguro que es';

	links[0] = '';

	

	var fondo_sig =  siguiente;

	var margen_flecha = 176 * fondo_sig;

	$('#cambiaImagen1').attr('class', fondos[fondo_sig]);

	$('#cambiaImagen2').fadeOut('slow',function(){

		$('#cambiaImagen2').attr('class', fondos[fondo_sig]);

		$('#cambiaImagen2').show();

	});

	//Cambia destacado

	var destacado_active = 0;

	switch(fondo_sig){

		case 0: destacado_active = 3;break;

		case 1: destacado_active = 2;break;

		case 2: destacado_active = 1;break;

		case 3: destacado_active = 0;break;

	}

	$('.destacado_avtive').removeClass('destacado_avtive').addClass('destacado');

	$('.destacado_avtive_flecha').css('margin-left',margen_flecha);

	$('.destacado:eq('+(destacado_active)+')').removeClass('destacado').addClass('destacado_avtive');

 	$('#texto_bg .texto').html(textos[fondo_sig]);

	$('#texto_bg .link').html(links[fondo_sig]);

} 

 

function mostrar_modal( id_modal ,callback){

	$('.overlay').show();

	

	var ancho_pantalla = $(window).width()/2;

	var ancho_modal = $('#'+id_modal).width()/2;

	var pos_left = ancho_pantalla -  ancho_modal;

	

	$('#'+id_modal).css({

		left: pos_left+'px',

		top: '130px'

	});

	$('#'+id_modal).show();

     try{ eval('('+callback+')();')    }catch(e){}

    pop_up('.popup_');

}

function cerrar_modal( id_modal ,callback){

	$('.overlay').hide();

	$('#'+id_modal).hide();

     try{ eval('('+callback+')();')    }catch(e){}

} 



function load_html_callback(div,url_html,realizar,async_){

   

    $.ajax({

        async:async_,

        cache:false,

        type:"GET",

        url:url_html,

        dataType:'html',

        success:function(html_string){

            $(div).html(html_string);

            try{

            eval('('+realizar+')();')

            }catch(e){}

        }

    }

)}



function load_script_callback(div,url_html,realizar){



    $.ajax({

        async:true,

        cache:false,

        type:"GET",

        url:url_html,

        dataType:'script',

        success:function(html_string){

            $(div).html(html_string);

            try{

            eval('('+realizar+')();')

            }catch(e){}

        }

    }

)}



function validateEmail(Email){

    var chr = "1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";

    var numArrobas=0; 

    var salida=true;   

    if(Email.length==0) salida= false;

    if(Email)

        for(i=0;i < Email.length;i++){

 	      if(Email.charAt(i)=="@"){numArrobas++;} 



          if(chr.indexOf(Email.charAt(i))<0){ // si el caracter no existe 

            salida=false; break;

          }



        }

    if(numArrobas!=1 || Email.indexOf(".")==-1 || Email.indexOf(".@")!=-1 ||  Email.indexOf("@.")!=-1) salida=false;

    return(salida);

}



function validaForm(){

  if ( ! validateEmail($("#correo").val())  ) {

    $(window).scrollTop($(window).height());



    $("#correo").addClass('revisar')

    

    $("#correo").val('')

  }

    

    

}



function grip_scroll(){

	alto_scroll = ($('.thumb').height()/2)-10;

	$('.grip').css({'margin-top':alto_scroll+'px'});

}



function pop_up(id) {

	$(id).popupWindow({ 

		height:414, 

		width:550,

		resizable:'yes',

		scrollbars:'no',

		windowName:'popup',

		centerBrowser:1 

	}); 

}



function account_summary(){

	$('.titulo_cuentas').click(function(){

		var id_elemnt = $(this).attr('id');

		var class_elemnt = $('.'+id_elemnt);

		var is_oculto = class_elemnt.css('display');

		

		if( is_oculto == 'none' ){

			

			if( $('.expandir_contraer .contraer').hasClass('deshabilitado') ){

				$('.expandir_contraer .contraer').removeClass('deshabilitado').addClass('habilitado');

				

			}

			

			$('#'+id_elemnt).find('.ico').removeClass('expandir').addClass('contraer');

			$('#'+id_elemnt).find('.resumen_total').fadeOut('fast');

			

			var alto_div = class_elemnt.css('height');

			

			class_elemnt.css({'height':0,'display':'block'});

			class_elemnt.animate({

				'height':alto_div

				

			},'slow', function(){

				var todos_visibles = true;

				$('.contenido_cuentas').each(function(){

					if( $(this).css('display') == 'none' ){

						todos_visibles = false;

					}

					

				});

				if(todos_visibles){

					$('.expandir_contraer .expandir').removeClass('habilitado').addClass('deshabilitado');

				}

                 fondo_demo();

			});

			

		}else{

			

			if( $('.expandir_contraer .expandir').hasClass('deshabilitado') ){

				$('.expandir_contraer .expandir').removeClass('deshabilitado').addClass('habilitado');

			}

			

			$('#'+id_elemnt).find('.ico').removeClass('contraer').addClass('expandir');

			$('#'+id_elemnt).find('.resumen_total').fadeIn('fast');

			

			var alto_div = class_elemnt.css('height');

			

			class_elemnt.animate({

				'height':0

			},'slow',function(){

				class_elemnt.css({'height':alto_div,'display':'none'});

				

				var todos_ocultos = true;

				$('.contenido_cuentas').each(function(){

					if( $(this).css('display') == 'block' ){

						//console.log('entro');

						todos_ocultos = false;

					}

					

						

				});

				if(todos_ocultos){

					$('.expandir_contraer .contraer').removeClass('habilitado').addClass('deshabilitado');

				}

                 fondo_demo();

			});

			

			

						

			

		}

	});

	

	$('.expandir_contraer .expandir').click(function(){

		

		$(this).removeClass('habilitado').addClass('deshabilitado');

		$('.expandir_contraer .contraer').removeClass('deshabilitado').addClass('habilitado');

		$('.titulo_cuentas').each(

			function(){

				var id_elemnt = $(this).attr('id');

				var class_elemnt = $('.'+id_elemnt);

				var is_oculto = class_elemnt.css('display');

				

				if( is_oculto == 'none' ){

					$('#'+id_elemnt).find('.ico').removeClass('expandir').addClass('contraer');

					$('#'+id_elemnt).find('.resumen_total').fadeOut('fast');

					

					var alto_div = class_elemnt.css('height');

					

					class_elemnt.css({'height':0,'display':'block'});

					class_elemnt.animate({

						'height':alto_div

					},'slow',function () { fondo_demo(); 

					

					window.parent.ajustarIframe();

					

});

					

				}

				

			}

			

		);

		

	});

	

	$('.expandir_contraer .contraer').click(function(){

		$(this).removeClass('habilitado').addClass('deshabilitado');

		$('.expandir_contraer .expandir').removeClass('deshabilitado').addClass('habilitado');

		

		$('.titulo_cuentas').each(

			function(){

				var id_elemnt = $(this).attr('id');

				var class_elemnt = $('.'+id_elemnt);

				var is_oculto = class_elemnt.css('display');

				

				if( is_oculto == 'block' ){

					$('#'+id_elemnt).find('.ico').removeClass('contraer').addClass('expandir');

					$('#'+id_elemnt).find('.resumen_total').fadeIn('fast');

					

					var alto_div = class_elemnt.css('height');

					

					class_elemnt.animate({

						'height':0

					},'slow',function(){

						class_elemnt.css({'height':alto_div,'display':'none'});

                        fondo_demo();

					});

				}

			}

		);

	});

}



var window_width = 0;

function ajusta_tooltpis(){

	window_width = $(window).width();

	$(window).resize(function() {

		

		var ancho_actual = $(window).width();

		if( ancho_actual >985 ){

			var diferencia = 0;

			

			$('.tooltip_left').each(function(){

				if(window_width>ancho_actual){

					diferencia = (window_width - ancho_actual)/2;

					$(this).css('left', $(this).offset().left - diferencia );

					if( $(this).offset().left+$(this).width() > ancho_actual ){

						$(this).css('left', ancho_actual -  $(this).width() );

					}

					

				}else{

					diferencia = (ancho_actual - window_width)/2;

					$(this).css('left', $(this).offset().left + diferencia );

				}

			});

			window_width = ancho_actual;

		}

	});

}





function ajusta_caja_popup_scroll(){

	$(window).resize(function() {

		alto_popup();

		$('.scroll_y .overview').css({'width':$('.scroll_y .viewport').width()+'px'});

	});

}

function alto_popup(){

	if( $(window).height()>415 ){

		$('.popup').css({'height': $(window).height()+'px'});

	}

	if( $(window).height()<415 ){

		$(window).height(415+'px');

	}

}



/*** proto */

// ponerlo en el jquery

/* jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010*/

(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);



 function cronometroMinutos(idTime,segundosCronometro,id,callback){

    var cadMinutos="";

    var minutos=0;

    var segundos=0;

   

   $.doTimeout(idTime,1000, function(){  

            segundosCronometro--

            if(segundosCronometro==0){

               try{ eval('('+callback+')();') }catch(e){}

               return false;

            }   

            

            minutos=segundosCronometro / 60;

            cadMinutos= minutos.toString();

            if(cadMinutos.indexOf('.')) 

                minutos=cadMinutos.split(".")[0];

 

            segundos=segundosCronometro % 60;   

            

            if(minutos<=9)

               minutos='0'+minutos;

            

            if(segundos<=9)

               segundos='0'+segundos;

       

            $(id).html(minutos+":"+segundos+" (mm:ss)");

            return true;

    

    });

     

   

}





 /* fecha y hora*/

function fechaHora(){

    var dias=new Array();

    var meses=new Array();

    dias['es']=new Array('Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','Sabado')

    meses['es']=new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Juilio','Agosto','Septiembre','Octubre','Noviembre','Diciembre')

    var fecha = new Date();

    var diaTexto=dias['es'][fecha.getDay()];

    var dia=fecha.getDate();

    var mesTexto=meses['es'][fecha.getMonth()];

    var year=fecha.getFullYear();

    var hora=fecha.getHours() ;

    var minuto=fecha.getMinutes() ;

    var segundo=fecha.getSeconds() ;

    if(hora<=1)

       hora='0'+hora;

    if(minuto<=9)

       minuto='0'+minuto;

    

    if(segundo<=9)

       segundo='0'+segundo;

     //  alert (minuto)

    return diaTexto+" "+dia+" de "+mesTexto+" del "+year+", "+hora+":"+minuto+":"+segundo+" Centro de M&eacute;xico";

    

}





     

 

function llenarValores(obj,id,cadena){

    var textAux="";

    var fin=cadena.length-1;

    var contador=0;

 

    



    if(obj=='input')

        if($(id).val()!='')

           return false;    

        $.doTimeout(80, function(){ 

            textAux=$(id).val();

         

            $(id).val(textAux+cadena.charAt(contador))  

            if ( contador<=fin ){  

                contador++;

                return true;

            }    

                  

            return false;

        });



} 

/***** flujos */ 

function irLogin(variable){

 

    switch(Get_Cookie('loginCookie')  ){

        case 'default':     location.href='01-Log-in.html' ;break;

        case 'download':    location.href='01e-Log-in-AhnLab-NotInstalled.html' ;break;

        case 'noActivated': location.href='01f-Log-in-AhnLab-NotActivated.html' ;break;

    }

    

}





function getVarsUrl() {

    var vars = {};

    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {

        vars[key] = value;

    });

    return vars;

}

function modal_finsesion(){

	if( ( getVarsUrl()['mod'] ) && ( getVarsUrl()['mod']=='log' ) ){

		load_html_callback("#ContenedorModal",'piezas/modal/modal_logout.html',function(){mostrar_modal( 'modal_logout' ,''); })

	}

}







function HayActividad(){ $.doTimeout('noHayActividad'); activarModalInactividad()  }

$("body").append('<div id="ContenedorModal"></div>');

function activarModalInactividad(){

           $.doTimeout('noHayActividad',1000*60*2, function(){ //mostrar modal en 2 minutos

        

        load_html_callback("#ContenedorModal",'piezas/modal/modal_sesion_por_finalizar.html',function(){

                 mostrar_modal( 'modal_sesion_por_finalizar' ,function(){

                $("#modal_sesion_por_finalizar").removeClass('displayNone');

                $("#modal_sesion_por_finalizar #btnContinuar").click(function(){HayActividad()})

                

                

                cronometroMinutos('terminar',60*2-1,'#minutosRestantes',function(){

                    window.location.href="01-Log-in.html?mod=log";

					/*load_html_callback("#ContenedorModal",'piezas/modal/modal_error_inactividad.html',function(){

                        $.doTimeout('noHayActividad');

                            mostrar_modal( 'modal_error_inactividad' ,function(){

                            $("#modal_error_inactividad").removeClass('displayNone');

                            pop_up('#modal_error_inactividad .popup_');

                            

                            $("#modal_error_inactividad #btnContinuar, #modal_error_inactividad .close").click(function(){

                                cerrar_modal( 'modal_error_inactividad','');

                                irLogin();

                                //window.location.href="01-Log-in.html";

                            })

                         });

                        

                    })*/

                })

                $("#modal_sesion_por_finalizar #btnContinuar,#modal_sesion_por_finalizar .close").click(function(){cerrar_modal( 'modal_sesion_por_finalizar',function(){$.doTimeout('terminar')} )})

                

             });

             

        },true)

        

       

     });

}



function prototipo(){

     $(".fecha").html(fechaHora);//$.doTimeout(1000, function(){   return  true }); // muestra la hora 

     activarModalInactividad();

     $('body').click(function(){ HayActividad()    })

     

   /*$('#salir').live('click',function(event){

          load_html_callback("#ContenedorModal",'piezas/modal/modal_logout.html',function(){mostrar_modal( 'modal_logout' ,''); })

   })*/

  

  

    var flujo=2  ;  // 1,2,3,4,5,6

    arrayPagLogin=new Array();

    arrayPagLogin[1]='06-Log-in-Contrato.html';//falta el html (Marianne dice que es el mismo de contrato modificatorio)

    arrayPagLogin[2]='06-Log-in-Contrato.html';//contrato modificatorio

    arrayPagLogin[3]='06-Log-in-Contrato.html';//contrato modificatorio

    arrayPagLogin[4]='26-AccountSummary.html';//DashBoard o Multisaldos

    arrayPagLogin[5]='10a-Log-in-CambioClaves-Pass-Pass.html';//Cambio de pass 

    arrayPagLogin[6]='10-Log-in-CambioClaves.html';



    arrayContratoModificatorio=new Array()

    arrayContratoModificatorio[1]='10-Log-in-CambioClaves.html';

    arrayContratoModificatorio[2]='10a-Log-in-CambioClaves-Pass-Pass.html';//Cambio de pass (cambio de pass a pass) 

    arrayContratoModificatorio[3]='26-AccountSummary.html';//DashBoard o Multisaldos

    

    //se anexo para que el flujo 2 pasara por otra pantalla

    arrayCambioClaves=new Array()

    arrayCambioClaves[2]='10-Log-in-CambioClaves.html';

    //-----------------------------------------------------    

    

    

    var espera=300;

    

 

    if(location.href.indexOf('01-Log-in.html')!=-1 || location.href.indexOf('01f-Log-in-AhnLab-NotActivated.html')!=-1 || location.href.indexOf('01e-Log-in-AhnLab-NotInstalled.html')!=-1 )  

    $.doTimeout(espera, function(){  // llenado en 01-Log-in.html

           llenarValores('input','#numCliente','123456789123');

           $.doTimeout(espera+600, function(){ 

                   llenarValores('input','#claveAcceso','12345678');

                    $.doTimeout(espera+800, function(){

                         

                           $("#entar_login").click(function(){window.location.href=arrayPagLogin[flujo]; } )

                        

                    });

                   

            });

     

     });

   if(location.href.indexOf('06-Log-in-Contrato.html')!=-1)    

   

   $.doTimeout(espera, function(){  // llenado en 06-Log-in_contrato.html (dice modificatorio)

            

           llenarValores('input','#contratoModificatorioCorreo','usuario@mail.com');

           $.doTimeout(espera+1000, function(){ 

                   llenarValores('input','#contratoModificatorioCelular','5510101010');

                   $.doTimeout(espera+600, function(){

                        //$("#contratoModificatorioAceptar").addClass("hover");

                        $("#contratoModificatorioAceptar").click(function(){location.href=arrayContratoModificatorio[flujo]})

                        $("#contratoModificatorioCancelar").click(function(){location.href='07-Log-in-Contrato-noAceptado.html'});

                    });

               

            });

     

     });

     

     if(location.href.indexOf('06b-Log-in-Contrato-Demo.html')!=-1)    

   

   $.doTimeout(espera, function(){  // llenado en 06-Log-in_contrato.html (dice modificatorio)

            

           llenarValores('input','#contratoModificatorioCorreo','usuario@mail.com');

           $.doTimeout(espera+1300, function(){ 

                   llenarValores('input','#contratoModificatorioCelular','5510101010');

                   

               

            });

     

     });

     

     

     

   

    if(location.href.indexOf('10a-Log-in-CambioClaves-Pass-Pass.html')!=-1)    

    $.doTimeout(espera, function(){  // llenado en 10a-Log-in-CambioClaves-Pass-Pass.html

           llenarValores('input','#cambioPassword','12345678');

           $.doTimeout(espera+200, function(){

                    $("#cambioPassword").next().removeClass('displayNone')

                   llenarValores('input','#cambioPasswordConfirmar','12345678');

                    $.doTimeout(espera+500, function(){

                        $("#cambioPasswordConfirmar").next().removeClass('displayNone')

                         



                        // se comendo para pasar a otra pantalla faltante  $("#cambioPasswordAceptar").click(function(){location.href='26-AccountSummary.html'});

                        $("#cambioPasswordAceptar").click(function(){location.href=arrayCambioClaves[flujo]})

                    });

                 

            });

     

     });

     

     if(location.href.indexOf('10-Log-in-CambioClaves.html')!=-1)    

    $.doTimeout(espera, function(){  // llenado en 10-Log-in-CambioClaves.html

           llenarValores('input','#cambioPassword','12345678');

           $.doTimeout(espera+300, function(){ 

                    $("#cambioPassword").next().removeClass('displayNone')

                   llenarValores('input','#cambioPasswordConfirmar','12345678');

                   $.doTimeout(espera+300, function(){ 

                            $("#cambioPasswordConfirmar").next().removeClass('displayNone')

                           llenarValores('input','#cambioPassword2','12345678');

                           $.doTimeout(espera+300, function(){ 

                                  $("#cambioPassword2").next().removeClass('displayNone')

                                   llenarValores('input','#cambioPasswordConfirmar2','12345678');

                                   $.doTimeout(espera+300, function(){ 

                                          $("#cambioPasswordConfirmar2").next().removeClass('displayNone')

                                          $.doTimeout(espera+600, function(){

                                            //$("#cambioPasswordAceptar").addClass("hover")

                                             $("#cambioPasswordAceptar").click(function(){location.href='26-AccountSummary.html'});

                                          });

                                    });

                                   

                            });

                    });

            });

     });

     

     

     if(location.href.indexOf('14-Log-in-CambioClaves-Dentro.html')!=-1){

        

        //$(".bienvenido #miPerfil").addClass('selected');

        $.doTimeout(espera, function(){ 

            llenarValores('input','#claveAccesoActual','12345678');

            $.doTimeout(espera+400, function(){ 

                llenarValores('input','#claveAcceso','12345678');

                $.doTimeout(espera+400, function(){ 

                    $("#claveAcceso").next().removeClass('displayNone');

                    llenarValores('input','#confirmaClaveAcceso','12345678');

                    $.doTimeout(espera+500, function(){ 

                        $("#confirmaClaveAcceso").next().removeClass('displayNone');

                         

                        $("#cambioCalveAceptar").click(function(){location.href='16b-Log-in-CambioClaves-Dentro-Correcta.html'});

                    });

                });

            });

        });

     }

     

     if(location.href.indexOf('16b-Log-in-CambioClaves-Dentro-Correcta.html')!=-1){

       // $(".bienvenido #miPerfil").addClass('selected');

        $("#cambioClavesDentroContinuar").click(function(){location.href='26-AccountSummary.html'});

     }    

 

   

} 

function prototipoLogin(){

     $(".fecha").html(fechaHora);//$.doTimeout(1000, function(){   return  true }); // muestra la hora 

     //activarModalInactividad();

     //$('body').click(function(){ HayActividad()    })

     

   /*$('#salir').live('click',function(event){

          load_html_callback("#ContenedorModal",'piezas/modal/modal_logout.html',function(){mostrar_modal( 'modal_logout' ,''); })

   })*/

  

  

    var flujo=2  ;  // 1,2,3,4,5,6

    arrayPagLogin=new Array();

    arrayPagLogin[1]='06-Log-in-Contrato.html';//falta el html (Marianne dice que es el mismo de contrato modificatorio)

    arrayPagLogin[2]='06-Log-in-Contrato.html';//contrato modificatorio

    arrayPagLogin[3]='06-Log-in-Contrato.html';//contrato modificatorio

    arrayPagLogin[4]='26-AccountSummary.html';//DashBoard o Multisaldos

    arrayPagLogin[5]='10a-Log-in-CambioClaves-Pass-Pass.html';//Cambio de pass 

    arrayPagLogin[6]='10-Log-in-CambioClaves.html';



    arrayContratoModificatorio=new Array()

    arrayContratoModificatorio[1]='10-Log-in-CambioClaves.html';

    arrayContratoModificatorio[2]='10a-Log-in-CambioClaves-Pass-Pass.html';//Cambio de pass (cambio de pass a pass) 

    arrayContratoModificatorio[3]='26-AccountSummary.html';//DashBoard o Multisaldos

    

    //se anexo para que el flujo 2 pasara por otra pantalla

    arrayCambioClaves=new Array()

    arrayCambioClaves[2]='10-Log-in-CambioClaves.html';

    //-----------------------------------------------------    

    

    

    var espera=300;

    

 

    if(location.href.indexOf('01-Log-in.html')!=-1 || location.href.indexOf('01f-Log-in-AhnLab-NotActivated.html')!=-1 || location.href.indexOf('01e-Log-in-AhnLab-NotInstalled.html')!=-1 )  

    $.doTimeout(espera, function(){  // llenado en 01-Log-in.html

           llenarValores('input','#numCliente','123456789123');

           $.doTimeout(espera+900, function(){ 

                   llenarValores('input','#claveAcceso','12345678');

                    $.doTimeout(espera+800, function(){

                         

                           $("#entar_login").click(function(){window.location.href=arrayPagLogin[flujo]; } )

                        

                    });

                   

            });

     

     });

   if(location.href.indexOf('06-Log-in-Contrato.html')!=-1)    

   

   $.doTimeout(espera, function(){  // llenado en 06-Log-in_contrato.html (dice modificatorio)

            

           llenarValores('input','#contratoModificatorioCorreo','usuario@mail.com');

           $.doTimeout(espera+1300, function(){ 

                   llenarValores('input','#contratoModificatorioCelular','5510101010');

                   $.doTimeout(espera+600, function(){

                        //$("#contratoModificatorioAceptar").addClass("hover");

                        $("#contratoModificatorioAceptar").click(function(){location.href=arrayContratoModificatorio[flujo]})

                        $("#contratoModificatorioCancelar").click(function(){location.href='07-Log-in-Contrato-noAceptado.html'});

                    });

               

            });

     

     });

     

     if(location.href.indexOf('06b-Log-in-Contrato-Demo.html')!=-1)    

   

   $.doTimeout(espera, function(){  // llenado en 06-Log-in_contrato.html (dice modificatorio)

            

           llenarValores('input','#contratoModificatorioCorreo','usuario@mail.com');

           $.doTimeout(espera+1300, function(){ 

                   llenarValores('input','#contratoModificatorioCelular','5510101010');

                   

               

            });

     

     });

     

     

     

   

    if(location.href.indexOf('10a-Log-in-CambioClaves-Pass-Pass.html')!=-1)    

    $.doTimeout(espera, function(){  // llenado en 10a-Log-in-CambioClaves-Pass-Pass.html

           llenarValores('input','#cambioPassword','12345678');

           $.doTimeout(espera+400, function(){

                    $("#cambioPassword").next().removeClass('displayNone')

                   llenarValores('input','#cambioPasswordConfirmar','12345678');

                    $.doTimeout(espera+600, function(){

                        $("#cambioPasswordConfirmar").next().removeClass('displayNone')

                         



                        // se comendo para pasar a otra pantalla faltante  $("#cambioPasswordAceptar").click(function(){location.href='26-AccountSummary.html'});

                        $("#cambioPasswordAceptar").click(function(){location.href=arrayCambioClaves[flujo]})

                    });

                 

            });

     

     });

     

     if(location.href.indexOf('10-Log-in-CambioClaves.html')!=-1)    

    $.doTimeout(espera, function(){  // llenado en 10-Log-in-CambioClaves.html

           llenarValores('input','#cambioPassword','12345678');

           $.doTimeout(espera+400, function(){ 

                    $("#cambioPassword").next().removeClass('displayNone')

                   llenarValores('input','#cambioPasswordConfirmar','12345678');

                   $.doTimeout(espera+400, function(){ 

                            $("#cambioPasswordConfirmar").next().removeClass('displayNone')

                           llenarValores('input','#cambioPassword2','12345678');

                           $.doTimeout(espera+400, function(){ 

                                  $("#cambioPassword2").next().removeClass('displayNone')

                                   llenarValores('input','#cambioPasswordConfirmar2','12345678');

                                   $.doTimeout(espera+400, function(){ 

                                          $("#cambioPasswordConfirmar2").next().removeClass('displayNone')

                                          $.doTimeout(espera+600, function(){

                                            //$("#cambioPasswordAceptar").addClass("hover")

                                             $("#cambioPasswordAceptar").click(function(){location.href='26-AccountSummary.html'});

                                          });

                                    });

                                   

                            });

                    });

            });

     });

     

     

     if(location.href.indexOf('14-Log-in-CambioClaves-Dentro.html')!=-1){

        

        //$(".bienvenido #miPerfil").addClass('selected');

        $.doTimeout(espera, function(){ 

            llenarValores('input','#claveAccesoActual','12345678');

            $.doTimeout(espera+400, function(){ 

                llenarValores('input','#claveAcceso','12345678');

                $.doTimeout(espera+400, function(){ 

                    $("#claveAcceso").next().removeClass('displayNone');

                    llenarValores('input','#confirmaClaveAcceso','12345678');

                    $.doTimeout(espera+500, function(){ 

                        $("#confirmaClaveAcceso").next().removeClass('displayNone');

                         

                        $("#cambioCalveAceptar").click(function(){location.href='16b-Log-in-CambioClaves-Dentro-Correcta.html'});

                    });

                });

            });

        });

     }

     

     if(location.href.indexOf('16b-Log-in-CambioClaves-Dentro-Correcta.html')!=-1){

       // $(".bienvenido #miPerfil").addClass('selected');

        $("#cambioClavesDentroContinuar").click(function(){location.href='26-AccountSummary.html'});

     }    

 

   

} 



function getUrlVars(f){

    var d={};

    var e=f.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(g,b,a){d[b]=a});

    return d

}



$("body").delegate("#hidden_searchstring", "focusin", function() { $(this).val(''); })

        

        



 

function sendSearch(){

    var url='busqueda.html';

    

    var aux=$("#hidden_searchstring").val()

    $("#searchstring").val(escape( aux) )

    //$("#esHeaderSearchForm").submit();

   url = url +'?searchstring='+$("#searchstring").val() ;



    openWindow(url,'','','','')

     

}

function isset(variable_name) { //verifica si existe una variable

    try {

         if (typeof(eval(variable_name)) != 'undefined')

         if (eval(variable_name) != null)

         return true;

     } catch(e) { }

    return false;

   } 

function enConstruccion(){

    alert ('En construcci&oacute;n');

}









// FUNCIONES PARA DECTECTAR DISPOSITIVOS MOBILES:



/*

 * detectar Smartphones

 */

var dispositivoIphone = "iphone";

var dispositivoIpod = "ipod";

var dispositivoAndroid = "android";

var dispositivoIpad = "ipad";



var uagent = navigator.userAgent.toLowerCase();





// Detecta si el dispositivo esta basado en Android OS

function DetectaAndroid(){

   if (uagent.search(dispositivoAndroid) > -1)

      return true;

   else

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

   if (uagent.search(dispositivoIpad) > -1)

      return true;

   else

      return false;

}



function detecta_IOS(){

	if( DetectaIphone() || DetectaIpod() || DetectaIpad() ){

		return true;

	}else{

		return false;

	}

}



//manejo de Cookie

function Set_Cookie(d,f,a,j,e,h){

    var b=new Date();

    b.setTime(b.getTime());

    if(a){

        a=a*1000*60*60*24

    }

    var g=new Date(b.getTime()+(a));

    document.cookie=d+"="+escape(f)+((a)?";expires="+g.toGMTString():"")+((j)?";path="+j:"")+((e)?";domain="+e:"")+((h)?";secure":"")

}



function Get_Cookie(d){

    var e=document.cookie.indexOf(d+"=");

    var a=e+d.length+1;

    if((!e)&&(d!=document.cookie.substring(0,d.length))){

        return null

    }

    if(e==-1)

        {return null}

    var b=document.cookie.indexOf(";",a);

    if(b==-1){

        b=document.cookie.length

    }

    return unescape(document.cookie.substring(a,b))

}



function deleteCookie(a,d,b){

    if(Get_Cookie(a)){

        document.cookie=a+"="+((d)?";path="+d:"")+((b)?";domain="+b:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";

    }

}

// --------------------------

 

function openWindow(url,nombre,width,height,variables){

    nombre=(nombre!='') ? nombre :'';

    width= (width!='') ? width : 663

    height= (height!='') ? height : 533 

    variables=(variables!='') ? ','+variables : ',scrollbars=NO,Top=0,Left=280' ;

    window.open(url,nombre,"width="+width+",height="+height+variables) ;

}





function menuIzq(){

	$('#menu_izq .subopciones').hide();

	$('#menu_izq .opcion').click(function(){

		if( $(this).hasClass('opcion_sel') ){

			$(this).removeClass('opcion_sel');

			var opciones = '.'+$(this).attr('id');

			var alto_opciones = $(opciones).height();

			//$(opciones).css({'height':'1px', 'display':'block'});

			$(opciones).animate({'height':'1px'},'slow',function(){

				$(opciones).css({'display':'none'});

				$(opciones).css({'height':alto_opciones+'px'});

			});

		}else{

			$(this).addClass('opcion_sel');

			var opciones = '.'+$(this).attr('id');

			var alto_opciones = $(opciones).height();

			$(opciones).css({'height':'1px', 'display':'block'});

			$(opciones).animate({'height':alto_opciones+'px'},'slow');

		}

		

	});	

	$('.subopcion').click(function(){

		$('.subopcion_sel').removeClass('subopcion_sel').addClass('subopcion');

		$(this).addClass('subopcion_sel');

	});

	$('.subopcion_sel').click(function(){

		$('.subopcion_sel').removeClass('subopcion_sel').addClass('subopcion');

		$(this).addClass('subopcion_sel');

	});

}

 

var top_scroll = 0

function ajusta_scroll(){

	

	$('.overview').dblclick(function(){

		top_scroll= top_scroll-5;

		var alto_contenedor = $('.viewport').height();

		var alto_contenido = $('.overview').height();

		

		if( (top_scroll*(-1)) < ( alto_contenido - alto_contenedor ) ){

			$('.overview').css({'top': top_scroll+'px'});

		}

	});

}



function ir_url(url){

	window.location.href = url;

}





function select_busqueda_esp(){

	

	var valor_select = $('.sel_buscar').val();

	switch (valor_select){

		case 'dia':

			$('.div_estatus').show();

			$('.div_fecha').show();

			$('.fecha1').show();

			

			$('.div_porperiodo').hide();

			$('.div_autorizacion').hide();

			$('.fecha2').hide();

			break;

		case 'rango':

			$('.div_fecha').show();

			$('.fecha1').show();

			$('.fecha2').show();

			$('.div_estatus').show();

		

			$('.div_porperiodo').hide();

			$('.div_autorizacion').hide();	

			break;

		case 'periodo':

			$('.div_estatus').show();

			$('.div_porperiodo').show();

			

			$('.div_fecha').hide();

			$('.div_autorizacion').hide();

			break;

		case 'movimiento':

			$('.div_autorizacion').show();

			$('.div_fecha').show();

			$('.fecha1').show();

			

			$('.fecha2').hide();

			$('.div_porperiodo').hide();	

			$('.div_estatus').hide();

			break;

	}

}



function expandir_contraer(){

	$('.ico').click(function(){

		var id_elemnt = $(this).attr('id');

		var class_elemnt = $('.'+id_elemnt);

		var is_oculto = class_elemnt.css('display');

		

		if( is_oculto == 'none' ){

			

			if( $('.expandir_contraer .contraer').hasClass('deshabilitado') ){

				$('.expandir_contraer .contraer').removeClass('deshabilitado').addClass('habilitado');

			}

			

			$('#'+id_elemnt).removeClass('expandir').addClass('contraer');

			

			var alto_div = class_elemnt.css('height');

			

			class_elemnt.css({'height':0,'display':'block'});

			class_elemnt.animate({

				'height':alto_div

			},'slow', function(){

				var todos_visibles = true;

				$('.mov').each(function(){

					if( $(this).css('display') == 'none' ){

						todos_visibles = false;

					}

				});

				if(todos_visibles){

					$('.expandir_contraer .expandir').removeClass('habilitado').addClass('deshabilitado');

				}

				fondo_demo();

			});

			

		}else{

			

			if( $('.expandir_contraer .expandir').hasClass('deshabilitado') ){

				$('.expandir_contraer .expandir').removeClass('deshabilitado').addClass('habilitado');

			}

			

			$('#'+id_elemnt).removeClass('contraer').addClass('expandir');

			

			var alto_div = class_elemnt.css('height');

			

			class_elemnt.animate({

				'height':0

			},'slow',function(){

				class_elemnt.css({'height':alto_div,'display':'none'});

				

				var todos_ocultos = true;

				$('.mov').each(function(){

					if( $(this).css('display') == 'block' ){

						//console.log('entro');

						todos_ocultos = false;

					}

				});

				if(todos_ocultos){

					$('.expandir_contraer .contraer').removeClass('habilitado').addClass('deshabilitado');

				}

				fondo_demo();

			});

			

			

		}

		

	});

	

	$('.expandir_contraer .expandir').click(function(){

		$(this).removeClass('habilitado').addClass('deshabilitado');

		$('.expandir_contraer .contraer').removeClass('deshabilitado').addClass('habilitado');

		$('.ico').each(

			function(){

				var id_elemnt = $(this).attr('id');

				var class_elemnt = $('.'+id_elemnt);

				var is_oculto = class_elemnt.css('display');

				

				if( is_oculto == 'none' ){

					$('#'+id_elemnt).removeClass('expandir').addClass('contraer');

					

					var alto_div = class_elemnt.css('height');

					

					class_elemnt.css({'height':0,'display':'block'});

					class_elemnt.animate({

						'height':alto_div

					},'slow',function(){

						fondo_demo();

					});

				}

			}

		);

		

	});

	

	$('.expandir_contraer .contraer').click(function(){

		$(this).removeClass('habilitado').addClass('deshabilitado');

		$('.expandir_contraer .expandir').removeClass('deshabilitado').addClass('habilitado');

		

		$('.ico').each(

			function(){

				var id_elemnt = $(this).attr('id');

				var class_elemnt = $('.'+id_elemnt);

				var is_oculto = class_elemnt.css('display');

				

				if( is_oculto == 'block' ){

					$('#'+id_elemnt).removeClass('contraer').addClass('expandir');

					

					var alto_div = class_elemnt.css('height');

					

					class_elemnt.animate({

						'height':0

					},'slow',function(){

						class_elemnt.css({'height':alto_div,'display':'none'});

						fondo_demo();

					});

				}

			}

		);

	});

}



function buscar(){

	$('.text_buscar').focus(function(){

		if( $(this).val() == 'Buscar' ){

			$(this).val('');

			$(this).css({'font-weight':'normal'});

		}

	});

	$('.text_buscar').blur(function(){

		$('.autocomplete').hide();

		if( $(this).val() == '' ){

			$(this).val('Buscar');

			$(this).css({'font-weight':'bold'});

			

		}

	});

	$('.text_buscar').keypress(function(){

		$('.autocomplete').css({

			'top': $(this).offset().top + 19 + 'px',

			'left': $(this).offset().left - 75 + 'px',

			'display':'block'

		});	

	});

	$('.text_buscar').keydown(function(){

		if( $('.text_buscar').val().length == 1 ){

			$('.autocomplete').hide();

		}

	});

}



function porimporte(){

	$('.label_porimporte').click(function(){

		if( $('.radio_especifico').attr('checked') == 'checked' ){

			$('.input_hasta').addClass('input_des');

			$('.input_hasta').attr('disabled','disabled');

		}

		if( $('.radio_rango').attr('checked') == 'checked' ){

			$('.input_hasta').removeClass('input_des');

			$('.input_hasta').removeAttr('disabled');

		}

	});

}



function soloNumeros(){

	if(!(event.keyCode==9||event.keyCode==45||event.keyCode==46||event.keyCode==48||event.keyCode==49||event.keyCode==50||event.keyCode==51||event.keyCode==52||event.keyCode==53||event.keyCode==54||event.keyCode==55||event.keyCode==56||event.keyCode==57)){

		event.returnValue=false;

	}

}



function soloLetrasNumerosComaPunto(){

	if(!(event.keyCode==9||event.keyCode==45||event.keyCode==46||event.keyCode==48||event.keyCode==49||event.keyCode==50||event.keyCode==51||event.keyCode==52||event.keyCode==53||event.keyCode==54||event.keyCode==55||event.keyCode==56||event.keyCode==57||event.keyCode==65||event.keyCode==66||event.keyCode==67||event.keyCode==68||event.keyCode==69||event.keyCode==70||event.keyCode==71||event.keyCode==72||event.keyCode==73||event.keyCode==74||event.keyCode==75||event.keyCode==76||event.keyCode==77||event.keyCode==78||event.keyCode==79||event.keyCode==80||event.keyCode==81||event.keyCode==82||event.keyCode==83||event.keyCode==84||event.keyCode==85||event.keyCode==86||event.keyCode==87||event.keyCode==88||event.keyCode==89||event.keyCode==90||event.keyCode==97||event.keyCode==98||event.keyCode==99||event.keyCode==100||event.keyCode==101||event.keyCode==102||event.keyCode==103||event.keyCode==104||event.keyCode==105||event.keyCode==106||event.keyCode==107||event.keyCode==108||event.keyCode==109||event.keyCode==110||event.keyCode==111||event.keyCode==112||event.keyCode==113||event.keyCode==114||event.keyCode==115||event.keyCode==116||event.keyCode==117||event.keyCode==118||event.keyCode==119||event.keyCode==120||event.keyCode==121||event.keyCode==122||event.keyCode==190||event.keyCode==188||event.keyCode==44)){

		event.returnValue=false;

	}

}



function clear_form_busqueda_esp(){

	$('.sel_buscar').find('option').removeAttr('selected');

	$('.sel_buscar').find('option:first').attr('selected','selected');

	

	$('.sel_periodo').find('option').removeAttr('selected');

	$('.sel_periodo').find('option:first').attr('selected','selected');

	

	$('.input_calendar').val('Seleccione');

	$('.calendario2').addClass('input_calendar_des').attr('disabled','disabled');

	

	$('.sel_estatus').find('option').removeAttr('selected');

	$('.sel_estatus').find('option:first').attr('selected','selected');

	

	$('.input_num_auto').val('');

	

	$('.div_fecha').show();

	$('.fecha1').show();

	$('.div_estatus').show();

	$('.div_porperiodo').hide();

	$('.div_autorizacion').hide();

	$('.fecha2').hide();

}



function valida_busqueda_esp(){

	if( validador_busqueda() ){

		$('#error_fecha1').hide();

		$('#error_fecha2').hide();

		$('#error_num_auto').hide();

		cargando_movimientos();

		return true;

	}else{

		return false;

	}

}



function validador_busqueda(){

	var retorno = true

	var valor_select = $('.sel_buscar').val();

	switch (valor_select){

		case 'dia':

			if( ( $('.calendario1').val() == 'Seleccione' ) || ( $('.calendario1').val() == '' ) ){

				$('#error_fecha1').show();

				retorno = false;

			}

			break;

		case 'rango':

			if( ( $('.calendario1').val() == 'Seleccione' ) || ( $('.calendario1').val() == '' ) ){

				$('#error_fecha1').show();

				retorno = false;

			}

			if( ( $('.calendario2').val() == 'Seleccione' ) || ( $('.calendario2').val() == '' ) ){

				$('#error_fecha2').show();

				retorno = false;

			}

			break;

		case 'periodo':

			retorno = true;

			break;

		case 'movimiento':

			if( ( $('.calendario1').val() == 'Seleccione' ) || ( $('.calendario1').val() == '' ) ){

				$('#error_fecha1').show();

				retorno = false;

			}

			if( $('.input_num_auto').val() == '' ){

				$('#error_num_auto').show();

				retorno = false;

			}

			break;

	}

	return retorno;

}



function valida_busqueda_onblur(){

	if( ( $('.calendario1').val() != 'Seleccione' ) && ( $('.calendario1').val() != '' ) ){

		$('#error_fecha1').hide();

	}

	if( ( $('.calendario2').val() != 'Seleccione' ) && ( $('.calendario2').val() != '' ) ){

		$('#error_fecha2').hide();

	}

	if( $('.input_num_auto').val() != '' ){

		$('#error_num_auto').hide();

	}

}



function validador_filtrar(){

	$('#error_todos').hide();

	$('#error_filtro_importe1').hide();

	$('#error_filtro_importe2').hide();

	$('#error_filtro_fecha2').hide();

	

	var retorno = true;

	

	if( $('.radio_rango').attr('checked') == 'checked' ){

		if( $('.text_importe1').val() == '' ){

			$('#error_filtro_importe1').show();

			retorno = false;

		}

		if( $('.text_importe2').val() == '' ){

			$('#error_filtro_importe2').show();

			retorno = false;

		}

	}else{

		/*if( ( $('.filtro_porpalabra').val() == '' ) && ( $('.modal_calendario1').val() == 'Seleccione' ) && ( $('.modal_calendario2').val() == 'Seleccione' ) && ( $('.text_importe1').val() == '' ) && ( $('.text_importe2').val() == '' ) ){

			$('#error_todos').show();

			retorno = false;

		}*/

	}

	

	if( ( $('.modal_calendario1').val() != 'Seleccione' ) && ( $('.modal_calendario1').val() != '' ) ){

		if( ( $('.modal_calendario2').val() == 'Seleccione' ) || ( $('.modal_calendario2').val() == '' ) ){

			$('#error_filtro_fecha2').show();

			retorno = false;

		}

	}

	

	return retorno;

}

function valida_filtro_onblur(){

	if( ( $('.modal_calendario2').val() != 'Seleccione' ) && ( $('.modal_calendario2').val() != '' ) ){

		$('#error_filtro_fecha2').hide();

	}

	if( $('.input_num_auto').val() != '' ){

		$('#error_num_auto').hide();

	}

	if( $('.text_importe1').val() != '' ){

		$('#error_filtro_importe1').hide();

	}

	if( $('.text_importe2').val() != '' ){

		$('#error_filtro_importe2').hide();

	}

}



function cargando_movimientos(){

	$('#movimientos_cargando').show();

	$('#movimientos_cargados').hide();

	setTimeout("$('#movimientos_cargando').fadeOut();$('#movimientos_cargados').fadeIn();",2000);

}





function datepicker_busqueda_filtro(){

	var dates = $( "#busqueda_from, #busqueda_to" ).datepicker({

		dayNamesMin:['D','L','M','M','J','V','S'],

		monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],

		beforeShow: function(){

			$(this).removeClass('ui-corner-all');

		},

		onSelect: function( selectedDate ) {

			var option = this.id == "busqueda_from" ? "minDate" : "maxDate",

				instance = $( this ).data( "datepicker" ),

				date = $.datepicker.parseDate(

					instance.settings.dateFormat ||

					$.datepicker._defaults.dateFormat,

					selectedDate, instance.settings );

			dates.not( this ).datepicker( "option", option, date );

		},

		onClose:function(){

			valida_busqueda_onblur();

			if( ( $('.calendario1').val() != 'Seleccione' ) && ( $('.calendario1').val() != '' ) ){

				$('.calendario2').removeClass('input_calendar_des').removeAttr('disabled');

			}

			if ( $('.calendario2').val() == '' ) {

				$('.calendario2').val('Seleccione');

			}

		},

		showAnim: '',

		showOtherMonths: true,

		selectOtherMonths: false,

		minDate: '-30d',

		maxDate: 'd'

	});

	

	var filtro_dates = $( "#filtro_from, #filtro_to" ).datepicker({

		dayNamesMin:['D','L','M','M','J','V','S'],

		monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],

		beforeShow: function(){

			$(this).removeClass('ui-corner-all');

		},

		onSelect: function( selectedDate ) {

			var option = this.id == "filtro_from" ? "minDate" : "maxDate",

				instance = $( this ).data( "datepicker" ),

				date = $.datepicker.parseDate(

					instance.settings.dateFormat ||

					$.datepicker._defaults.dateFormat,

					selectedDate, instance.settings );

			filtro_dates.not( this ).datepicker( "option", option, date );

		},

		onClose:function(){

			valida_filtro_onblur();

			if( ( $('.modal_calendario1').val() != 'Seleccione' ) && ( $('.modal_calendario1').val() != '' ) ){

				$('.modal_calendario2').removeClass('input_calendar_des').removeAttr('disabled');

			}

			if ( $('.modal_calendario2').val() == '' ) {

				$('.modal_calendario2').val('Seleccione');

			}

		},

		showAnim: '',

		showOtherMonths: true,

		selectOtherMonths: false,

		minDate: '-30d',

		maxDate: 'd'

	});

	

	$('.input_calendar').focus(

		function(){

			if( $(this).hasClass('modal_calendar') ){

				$('.ui-widget').css({'top':($(this).offset().top - $(document).scrollTop() -50)+'px','left':($(this).offset().left+115)+'px', 'z-index':'99999999'});

			}else{

				$('.ui-widget').css({'top':($(this).offset().top-50)+'px','left':($(this).offset().left+115)+'px', 'z-index':'99999999'});

			}

			if( $('.ui-datepicker .close').length == 0){

				$('.ui-datepicker').append("<div class='close'></div>");

			}

			$('.ui-datepicker').find('.close').click(function(){

				$('.input_calendar').datepicker( "hide" );

			});

			

		}

	);

}

function datepicker_busqueda(){

	var dates = $( "#busqueda_from, #busqueda_to" ).datepicker({

		dayNamesMin:['D','L','M','M','J','V','S'],

		monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],

		beforeShow: function(){

			$(this).removeClass('ui-corner-all');

		},

		onSelect: function( selectedDate ) {

			var option = this.id == "busqueda_from" ? "minDate" : "maxDate",

				instance = $( this ).data( "datepicker" ),

				date = $.datepicker.parseDate(

					instance.settings.dateFormat ||

					$.datepicker._defaults.dateFormat,

					selectedDate, instance.settings );

			dates.not( this ).datepicker( "option", option, date );

		},

		onClose:function(){

			valida_busqueda_onblur();

			if( ( $('.calendario1').val() != 'Seleccione' ) && ( $('.calendario1').val() != '' ) ){

				$('.calendario2').removeClass('input_calendar_des').removeAttr('disabled');

			}

			if ( $('.calendario2').val() == '' ) {

				$('.calendario2').val('Seleccione');

			}

		},

		showAnim: '',

		showOtherMonths: true,

		selectOtherMonths: false,

		minDate: '-30d',

		maxDate: 'd'

	});

	

	$('.input_calendar').focus(

		function(){

			if( $(this).hasClass('modal_calendar') ){

				$('.ui-widget').css({'top':($(this).offset().top - $(document).scrollTop() -50)+'px','left':($(this).offset().left+115)+'px', 'z-index':'99999999'});

			}else{

				$('.ui-widget').css({'top':($(this).offset().top-50)+'px','left':($(this).offset().left+115)+'px', 'z-index':'99999999'});

			}

			if( $('.ui-datepicker .close').length == 0){

				$('.ui-datepicker').append("<div class='close'></div>");

			}

			$('.ui-datepicker').find('.close').click(function(){

				$('.input_calendar').datepicker( "hide" );

			});

			

		}

	);

}



var espera=100;

function llenado(){

  

      $.doTimeout(1500, function(){ dbnLogin(); dbnContrato(); }); 

}



function dbnLogin(){

 

    $.doTimeout(espera, function(){  // llenado en 01-Log-in.html

           llenarValores('input','#numCliente','123456789123');

           $.doTimeout(espera+900, function(){ 

                   llenarValores('input','#claveAcceso','12345678');

                    $.doTimeout(espera+800, function(){

                         

                           $("#entar_login").click(function(){window.location.href=arrayPagLogin[flujo]; } )

                        

                    });

                   

            });

     

     });



}

 

function dbnContrato(){

 

    $.doTimeout(espera, function(){  // llenado en 01-Log-in.html

           llenarValores('input','#numCliente','123456789123');

           $.doTimeout(espera+900, function(){ 

                   llenarValores('input','#claveAcceso','12345678');

                    $.doTimeout(espera+800, function(){

                         

                          // $("#entar_login").click(function(){window.location.href=arrayPagLogin[flujo]; } )

                        

                    });

                   

            });

     

     });



}



















		



		