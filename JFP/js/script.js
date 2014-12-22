function funciones_login2(){
    tooltip_verifica();
    click_topmenu();
	pop_up();
}
var login='default'; 
function funciones_login(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal2.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_miperfil.html','',true)
  	 pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
     $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}
function loader_page(){
	$('#div_cargando').show();
	setTimeout(function(){
		$('#div_cargando').hide();
	},1500);
}

function cambiampcon1(){
		window.open(rutaAyudaEsc,'','height='+(screen.height-70)+',width=800,top=0,left=0,resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');
	}


function cambiasuc(){
		window.open(rutaAyudaSuc,'','height='+(screen.height-70)+',width=600,top=0,left=0,resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');
	}

function cambiampcon4(){
		window.open(rutaAyudaAv,'','height='+(screen.height-70)+',width=600,top=0,left=0,resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');
	}
	
function cambiaP1(){
		window.open(rutaAyudaEsc,'','height='+(screen.height-70)+',width=800,top=0,left=0,resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');
	}
	
function cambiaP4(){
		window.open(rutaAyudaEd,'','height='+(screen.height-70)+',width=600,top=0,left=0,resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');
	}
	
function cambiaP2(){
		window.open(rutaAyudaLlam,'','height='+(screen.height-70)+',width=600,top=0,left=0,resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');
	}
	
function cambiaP3(){
		window.open(rutaAyudaEscu,'','height='+(screen.height-70)+',width=600,top=0,left=0,resizable=yes,menubar=no,scrollbars=yes,titlebar=yes,toolbar=no,status=yes');
	}
	
function funciones_loginP(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_miperfil.html','',true)
  	 pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
     $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}
function funciones_loginML2(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_transferenciasypagos.html','',true)
  	 pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
     $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}

function funciones_loginML3(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_inversiones.html','',true)
  	 pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
     $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}

function funciones_loginML4(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_accitrade.html','',true)
  	 pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
     $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}



function funciones_loginML5(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_afore.html','',true)
  	 pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
     $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}

function funciones_loginML5_2(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav2.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_afore2.html','',true)
  	 pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
     $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}



function funciones_loginML6(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_servicios.html','',true)
  	pop_up('.popup');
    $(".header .logo").click(function(){window.location.href='http://www.banamex.com'}).css('cursor','pointer')
    $('.EnConstruccion').live('click',function(){  enConstruccion();   });
      if(location.href.indexOf('prototipo')!=-1)  
       $.doTimeout(1500, function(){ prototipo() }); 



    tooltip_left();
	
   	fondo_demo();
}



function funciones_loginML7(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
    load_html_callback("#footer",'piezas/footer.html','',true)
	load_html_callback("#menuw",'piezas/main_nav.html','',true)
	load_html_callback("#msj_bienvenido",'piezas/msj_bienvenido.html','',true)
	load_html_callback("#left-menu",'piezas/left_menus/left_menu_miperfil.html','',true)
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
function funciones_log2(){
      
    load_html_callback("#navegacionPrincipal",'piezas/navegacionPrincipal2.html',function(){click_topmenu();pop_up('.popup_menu');} ,true)
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
		 var altura_41=$("#contenido_pag").height();
 if(location.href.indexOf('htmls_demo')>=0){
            $("#subapp-box .cS-structBodyContainer").before('<div class="bg_demo"></div> ');
              if(location.href.indexOf('/14')>=0 || location.href.indexOf('/15')>=0  || location.href.indexOf('/21')>=0  )
              $(".bg_demo").css('height',539+'px'); else
            if(location.href.indexOf('/06-')>=0)
              $(".bg_demo").css('height',539+'px'); else
			 if(location.href.indexOf('/07-')>=0)
              $(".bg_demo").css('height',539+'px'); else
			if(location.href.indexOf('/10-')>=0)
              $(".bg_demo").css('height',539+'px'); else
			  if(location.href.indexOf('/10a-')>=0)
              $(".bg_demo").css('height',539+'px'); else		 
			if(location.href.indexOf('/16b-')>=0)
              $(".bg_demo").css('height',539+'px'); else
            if(location.href.indexOf('/16-')>=0)
              $(".bg_demo").css('height',539+'px');else 
			  if(location.href.indexOf('/22-')>=0)
              $(".bg_demo").css('height',539+'px');else 
            if(location.href.indexOf('/23-')>=0)
              $(".bg_demo").css('height',539+'px');else
			if(location.href.indexOf('/24-')>=0)
              $(".bg_demo").css('height',539+'px');else
			if(location.href.indexOf('/25-')>=0)
              $(".bg_demo").css('height',539+'px');else
		
 if(location.href.indexOf('/44-1')>=0)
                
                $(".bg_demo").css('height',altura_41 -71)
			 ;else
			 if(location.href.indexOf('/49-')>=0)
              $(".bg_demo").css('height',539+'px');else
          	if(location.href.indexOf('/50-')>=0)
              $(".bg_demo").css('height',539+'px');else
          	if(location.href.indexOf('/51-')>=0)
              $(".bg_demo").css('height',539+'px');else
            {
                var altura_contenido=$("#subapp-box .cS-structBodyContainer").height();
                var altura_pie_contenido= $("#subapp-box .cS-structBodyContainer").height();
                $(".bg_demo").css('height',altura_contenido +20 +altura_pie_contenido+'px')
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
			var id_element = $(this).attr('class');
			alert(id_element)
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


function tooltip_left2(){
	$('.tool_left').hover(
		function(e){
			$('.tooltip_left').hide();
			var id_element = $(this).attr('id');
			
			var pos = $(this).position();
    // .outerWidth() takes into account border and padding.
    		var width = $(this).outerWidth();
    //show the menu directly over the placeholder
    		$('.'+id_element).css({
				 position: "absolute",
        		 top: pos.top + -20 + "px",
        		 left: (pos.left + width) + "px"
			});
			$('.'+id_element).show();
  
		}
	);
    
	$('.tool_left').mouseout(function(){
		setTimeout(function(){$('.tooltip_left').fadeOut()},1500);
			
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
 
var fondos = new Array (
               {esp:'bg_1', eng:'bg_0'},
			   {esp:'bg_2', eng:'bg_2'},
			   {esp:'bg_3', eng:'bg_3'},
			   {esp:'bg_4', eng:'bg_4'}
			 );

var textos = new Array(
               { esp:'Cero anualidad s&iacute; pagas<br />tu tarjeta de cr&eacute;dito<br />por <span class="strong f14">Banca</span>Net', eng:'Cero anualidad s&iacute; pagas<br />tu tarjeta de cr&eacute;dito<br />por <span class="strong f14">Banca</span>Net'},	
			   { esp:'Es momento de empezar<br /> a invertir, h&aacute;zlo f&aacute;cilmente<br /> desde tu <span class="strong f14">Banca</span>Net</span>', eng:'Es momento de empezar<br /> a invertir, h&aacute;zlo f&aacute;cilmente<br /> desde tu <span class="strong f14">Banca</span>Net</span>' },
			   { esp:'Descubre todas las <br /> funcionalidades que <br /> te ofrece nuestra app', eng:'Descubre todas las <br /> funcionalidades que <br /> te ofrece nuestra app' },
			   { esp:'Con Notificaciones Banamex,<br/> mantente siempre informado<br /> de tus movimientos.', eng:'Con Notificaciones Banamex,<br/> mantente siempre informado<br /> de tus movimientos.' }
			   );

var links = new Array(
			   { esp:'<img src="../JFP/regional/images/flecha_azul_r.gif">&nbsp;&nbsp;<a href=" http://www.banamex.com/es/personas/landing_tarjetas/index.htm?icid=Menu-TarjetasCredito-Personas-MejoresTarjetas-05152013-Int-ES" class="color00589d">Solic&iacute;tala en l&iacute;nea</a>', eng:'<img src="../JFP/regional/images/flecha_azul_r.gif">&nbsp;&nbsp;<a href=" http://www.banamex.com/es/personas/landing_tarjetas/index.htm?icid=Menu-TarjetasCredito-Personas-MejoresTarjetas-05152013-Int-ES" class="color00589d">Solic&iacute;tala en l&iacute;nea</a>' },
			   { esp:'<img src="../JFP/regional/images/flecha_azul_r.gif">&nbsp;&nbsp;<a href="http://www.banamex.com/es/personas/inversiones/integral_perfiles.htm" class="color00589d">Conoce nuestras opciones</a>', eng:'Leyendat41' },
			   { esp:'<img src="../JFP/regional/images/flecha_azul_r.gif">&nbsp;&nbsp;<a href=" http://www.banamex.com/es/personas/servicios/banca_electronica/banamex_movil.htm" class="color00589d">Desc&aacute;rgala a tu <br /><span class="margin-left13 f14"> dispositivo</span></a>', eng:'<img src="../JFP/regional/images/flecha_azul_r.gif">&nbsp;&nbsp;<a href=" http://www.banamex.com/es/personas/servicios/banca_electronica/banamex_movil.htm" class="color00589d">Desc&aacute;rgala a tu <br /><span class="margin-left13 f14"> dispositivo</span></a>' },
			   { esp:'<img src="../JFP/regional/images/flecha_azul_r.gif">&nbsp;&nbsp;<a href=" http://www.banamex.com/es/personas/servicios_digitales/notificaciones.htm" class="color00589d">Act&iacute;valo sin costo</a>', eng:'<img src="../JFP/regional/images/flecha_azul_r.gif">&nbsp;&nbsp;<a href=" http://www.banamex.com/es/personas/servicios_digitales/notificaciones.htm" class="color00589d">Act&iacute;valo sin costo</a>' }
			   );


function cambia_carrusel( siguiente ){
	var fondo_sig =  siguiente;
	var margen_flecha = 176 * fondo_sig;
	$('#cambiaImagen1').attr('class', fondos[fondo_sig][language]);
	$('#cambiaImagen2').fadeOut('slow',function(){
		$('#cambiaImagen2').attr('class', fondos[fondo_sig][language]);
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
 	$('#texto_bg .texto').html(textos[fondo_sig][language]);
	$('#texto_bg .link').html(links[fondo_sig][language]);
} 

function cambia_carrusel_DEMO( siguiente ){
	fondos[0] [language]= 'bg_0';
	textos[0] [language]= 'Aprende a realizar tus operaciones<br />bancarias por internet utilizando nuestro<br />demo interactivo. Descubre lo f&aacute;cil, pr&aacute;ctico<br />y seguro que es';
	links[0] [language]= '';
	
	var fondo_sig =  siguiente;
	var margen_flecha = 176 * fondo_sig;
	$('#cambiaImagen1').attr('class', fondos[fondo_sig] [language]);
	$('#cambiaImagen2').fadeOut('slow',function(){
		$('#cambiaImagen2').attr('class', fondos[fondo_sig][language]);
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
 	$('#texto_bg .texto').html(textos[fondo_sig][language]);
	$('#texto_bg .link').html(links[fondo_sig][language]);
} 
 
function mostrar_modal( id_modal ,callback){
	$('.overlay').show();
	
	$('#filtro_to').val('');
	$('#error_filtro_importe2').hide();
	$('#filtro_to').val('');
	$('#filtro_from').val(''); 
	$('#importe1').val('');
	$('#importe2').val(''); 
	$('#porpalabra').val(''); 
	$('#porpalabra').removeClass('revisar2');

	$('#filtro_to').attr('disabled', 'true'); 
	$("#filtro_to").removeClass('ie7BgFFF').addClass('ie7BgCCC');

	$('.radio_especifico').attr('checked',false); 
	$('.radio_rango').attr('checked',false); 
	$('#importe1').attr('disabled', 'true'); 
	$('#importe2').attr('disabled', 'true'); 
	$('#importe1').removeClass('revisar2');
	$('#importe2').removeClass('revisar2');


	$('#error_porpalabra').hide();
	$('#error_filtro_fecha1').hide();
	$('#error_filtro_fecha2').hide(); 
	$('#error_filtro_importe1').hide();
	$('#error_filtro_importe2').hide();
	

	var ancho_pantalla = $(window).width()/2;
	var ancho_modal = $('#'+id_modal).width()/2;
	var pos_left = ancho_pantalla -  ancho_modal;
	
	$('#'+id_modal).css({
		left: pos_left+'px',
		top: '90px'
	});
	$('#'+id_modal).show();
     try{ eval('('+callback+')();')    }catch(e){}
	
	$(window).resize(function() {
        var ancho_pantalla = $(window).width()/2;
		var ancho_modal = $('#'+id_modal).width()/2;
		var pos_left = ancho_pantalla -  ancho_modal;
		
		$('#'+id_modal).css({
			left: pos_left+'px'
		});
    });
	
    pop_up('.popup_');
}
function cerrar_modal( id_modal ,callback){

	
	$('.overlay').hide();
	$('#'+id_modal).hide();

	$('#filtro_to').val('');
	$('#filtro_from').val(''); 
	$('#importe1').val('');
	$('#importe2').val(''); 
	$('#porpalabra').val(''); 
	$('#porpalabra').removeClass('revisar2');

	$('#filtro_to').attr('disabled', 'true'); 
	$("#filtro_to").removeClass('ie7BgFFF').addClass('ie7BgCCC');

	$('.radio_especifico').attr('checked',false); 
	$('.radio_rango').attr('checked',false); 
	$('#importe1').attr('disabled', 'true'); 
	$('#importe2').attr('disabled', 'true'); 
	$('#importe1').removeClass('revisar2');
	$('#importe2').removeClass('revisar2');


	$('#error_porpalabra').hide();
	$('#error_filtro_fecha1').hide();
	$('#error_filtro_fecha2').hide(); 
	$('#error_filtro_importe1').hide();
	$('#error_filtro_importe2').hide();

	try{ eval('('+callback+')();')    }catch(e){}
} 

function load_html_callback(div,url_html,realizar,async_){
	isAjaxInProcess = true;
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
			$('.expandir_contraer').addClass('iemtm7');
			$('#liquid1').removeClass('iem-top');
			$('#liquid1').addClass('mtm300');
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
			$('.expandir_contraer').addClass('iemtm7');
			$('#liquid1').removeClass('iem-top');
			$('#liquid1').addClass('mtm300');
			
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
		$('#liquid1').removeClass('iem-top');
		$('#liquid1').addClass('mtm300');
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
					},'slow',function () { fondo_demo();});
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
	var dias = { 
		esp:['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','Sabado'],
		eng:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	};
	var meses = {
		esp:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Juilio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		eng:['January','February','March','April','May','June','July','August','September','October','November','December']
	};

   var fecha = new Date();
    var diaTexto=dias[language][fecha.getDay()];
    var dia=fecha.getDate();
    var mesTexto=meses[language][fecha.getMonth()];
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

    if( isEnglishSel ) {
		var stgDate = diaTexto + ", " + mesTexto + " " + dia + ", " + year + ", " + hora + ":" + minuto  + ":" + segundo + " Mexico City";
	} else {
		var stgDate = " " + diaTexto + " " + dia + " de " + mesTexto + " de " + year + ", " + hora + ":" + minuto  + ":" + segundo + " Centro de M&eacute;xico"
	}
	return stgDate;
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


function HayActividad(){ $.doTimeout('noHayActividad'); activarInactividad()  }

function activarInactividad(){
    $.doTimeout('noHayActividad',1000*60*4, function(){ //mostrar pantalla en 4 minutos
        //alert('No hay actividad')
		window.location.href = "../../htmls/00-Log-out.html";	
    });
}

function prototipo(){
	$(".fecha").html(fechaHora);//$.doTimeout(1000, function(){   return  true }); // muestra la hora 
	activarInactividad();
	$('body').click(function(){ HayActividad()})
     
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
    
	 if(location.href.indexOf('03-Log-in-Demo.html')!=-1 )
    $.doTimeout(espera, function(){  // llenado en 01-Log-in.html
           llenarValores('input','#numCliente','123456789123');
           $.doTimeout(espera+600, function(){ 
                   llenarValores('input','#claveAcceso','12345678');
                    $.doTimeout(espera+800, function(){
                         
                           $("#entar_login").click(function(){window.location.href=arrayPagLogin[flujo]; } )
                        
                    });
                   
            });
     
     });
 
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
        $.doTimeout(espera+3800, function(){ $('#comp').val('Telcel');});
		   	$.doTimeout(espera+1000, function(){ 
               llenarValores('input','#contratoModificatorioCorreo2','usuario@mail.com');  });
		   
		   $.doTimeout(espera+2600, function(){ 
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
		         $.doTimeout(espera+3800, function(){ $('#comp').val('Telcel');});
		   	$.doTimeout(espera+1000, function(){ 
               llenarValores('input','#contratoModificatorioCorreo2','usuario@mail.com');  });
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
                                             //$("#cambioPasswordAceptar").click(function(){location.href='26-AccountSummary.html'}); RUTA ANTERIOR
											 $("#cambioPasswordAceptar").click(function(){location.href='../bancanet/contenidos/26-AccountSummary.html'});
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
                                             //$("#cambioPasswordAceptar").click(function(){location.href='26-AccountSummary.html'});
											 $("#cambioPasswordAceptar").click(function(){location.href='../bancanet/contenidos/26-AccountSummary.html'});
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
       // $("#cambioClavesDentroContinuar").click(function(){location.href='26-AccountSummary.html'});
		$("#cambioClavesDentroContinuar").click(function(){location.href='../bancanet/contenidos/48-dashboard-extended.html'});
		
     }    
 
   
} 

function getUrlVars(f){
    var d={};
    var e=f.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(g,b,a){d[b]=a});
    return d
}
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

$("body").delegate("#hidden_searchstring", "focusin", function() { $(this).val(''); })
        
        

 
function sendSearch(){
    var url='http://www.banamex.com/resultados-de-busqueda.htm';
    
    var aux=$("#hidden_searchstring").val()
    $("#searchstring").val(escape( aux) )
    //$("#esHeaderSearchForm").submit();
   url = url +'?searchstring='+$("#searchstring").val() ;

    openWindow(url,'','1024','760','scrollbars=YES')
     
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
    alert ('En construcción');
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
    variables=(variables!='') ? ','+variables : ',scrollbars=NO,Top=0' ;
    center_window = ($(window).width() - width )/2;
    window.open(url,nombre,"width="+width+",height="+height+variables+",left="+center_window) ;
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
	
	$('#MiPerfil').click();
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

function menuIzq2(){
	$('#menu_izq2 .subopciones').hide();
	$('#menu_izq2 .opcion').click(function(){
		if( $(this).hasClass('opcion_sel') ){
			$(this).removeClass('opcion_sel');
			var opciones = '.'+$(this).attr('id');
			var alto_opciones = $(opciones).height();
			//$(opciones).css({'height':'1px', 'display':'block'});
			$(opciones).animate({'height':'10px'},'slow',function(){
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
	
	$('#MisCuentas').click();
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
			$('span.del').hide();
			$("#busqueda_from").val("")
			$("#busqueda_to").val("")
			$("#busqueda_to").datepicker('disable').removeClass('ie7BgFFF').addClass('ie7BgCCC');	
			break;
		case 'rango':
			$('.div_fecha').show();
			$('.fecha1').show();
			$('.fecha2').show();
			$('.div_estatus').show();
		
			$('.div_porperiodo').hide();
			$('.div_autorizacion').hide();
			$('span.del').show();
			$("#busqueda_from").val("")
			$("#busqueda_to").val("")
			$("#busqueda_to").datepicker('disable').removeClass('ie7BgFFF').addClass('ie7BgCCC');	
			break;
		case 'periodo':
			$('.div_estatus').show();
			$('.div_porperiodo').show();
			
			$('.div_fecha').hide();
			$('.div_autorizacion').hide();
			$('span.del').hide();
			$("#busqueda_from").val("")
			$("#busqueda_to").val("")
			$("#busqueda_to").datepicker('disable').removeClass('ie7BgFFF').addClass('ie7BgCCC');
			break;
		case 'movimiento':
			$('.div_autorizacion').show();
			$('.div_fecha').show();
			$('.fecha1').show();
			
			$('.fecha2').hide();
			$('.div_porperiodo').hide();	
			$('.div_estatus').hide();
			$('span.del').hide();
			$("#busqueda_from").val("")
			$("#busqueda_to").val("")
			$("#busqueda_to").datepicker('disable').removeClass('ie7BgFFF').addClass('ie7BgCCC');
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
			$('.input_1, .input_hasta').val("");
			$('.input_1').removeAttr('disabled');
			$('.input_1').removeClass('input_des');
			$('.input_1').removeAttr('disabled');
			$('.input_hasta').addClass('input_des');
			$('.input_hasta').attr('disabled','disabled');
			$('.modal_calendario1, .modal_calendario2').val("");
			$('#porpalabra').removeClass('revisar2');
				$('#error_porpalabra').hide();
				$('#porpalabra').val('');
				$('#error_filtro_fecha2').hide();
				$('.modal_calendario2').removeClass('revisar2');
				$('.modal_calendario2').attr('disabled','disabled');
				$('.modal_calendario2').addClass('ie7BgCCC');
				
		}
		if( $('.radio_rango').attr('checked') == 'checked' ){
			$('.input_1, .input_hasta').val("");
			$('.input_1').removeClass('input_des');
			$('.input_1').removeAttr('disabled');
			$('.input_hasta').removeClass('input_des');
			$('.input_hasta').removeAttr('disabled');
			$('.modal_calendario1, .modal_calendario2').val("");
			$('#porpalabra').removeClass('revisar2');
			$('#error_porpalabra').hide();
			$('#porpalabra').val('');
			$('#error_filtro_fecha2').hide();
			$('.modal_calendario2').removeClass('revisar2');
			$('.modal_calendario2').attr('disabled','disabled');
			$('.modal_calendario2').addClass('ie7BgCCC');
		
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
	
	$('.input_calendar').val('');
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
	$('#error_fecha1, #error_fecha2, #error_num_auto').hide();
	$('#busqueda_from, #busqueda_to, input_num_auto').removeClass("revisar2");

}

function valida_busqueda_esp(){
	if( validador_busqueda() ){
		$('#error_fecha1').hide();
		$('#error_fecha2').hide();
		  $('#exp_cont').show();
		$('#error_num_auto').hide();
		$('#mov_pag1, #mov_pag2, #mov_tb').show();
		$('.calendario1, .calendario2, .input_num_auto').removeClass("revisar2");
		$('#contTodo').trigger("click");
		$('#movdrv').removeClass("margin-bottom40");
		cargando_movimientos2();
	
		return true;
	}else{
		return false;
	}
}

function validador_busqueda(){
	$('#error_fecha2').hide();
	var retorno = true
	var valor_select = $('.sel_buscar').val();
	switch (valor_select){
		case 'dia':
			
			
			if( ( $('.calendario1').val() == 'Seleccione' ) || ( $('.calendario1').val() == '' ) ){
				$('#error_fecha1').show();
				$('.calendario1').addClass("revisar2")
		
				retorno = false;
			}
		
			break;
		case 'rango':
		
			if( ( $('.calendario1').val() == '' ) && ( $('.calendario2').val() == '' ) ){
				$('#error_fecha1').show();
				$('.calendario1').addClass("revisar2")
			
				retorno = false;
			}
		
		
			else if( ( $('.calendario1').val() == 'Seleccione' ) || ( $('.calendario1').val() == '' ) ){
				$('#error_fecha1').show();
				$('.calendario1').addClass("revisar2")
	
				retorno = false;
			}
			
			
			
			else if( ( $('.calendario1').val() != '' ) && ( $('.calendario2').val() == '' ) ){
				$('#error_fecha2').show();
		
				$('.calendario2').removeClass('ie7BgFFF').addClass('revisar2');
				retorno = false;
			}
			break;
		case 'periodo':
			
			retorno = true;
			break;
		case 'movimiento':
			if( $('.calendario1').val() == '' && $('.input_num_auto').val() == '' ){
				$('#error_fecha1').show();
				$('.calendario1').addClass("revisar2")
				//$('.input_num_auto').addClass("revisar2")
				retorno = false;
			}
			else if(  $('.calendario1').val() != '' && $('.input_num_auto').val() == '' ){
				$('#error_num_auto').show();
				$('.input_num_auto').addClass("revisar2")
				
				retorno = false;
			}
			else if( ( $('.calendario1').val() == 'Seleccione' ) || ( $('.calendario1').val() == '' ) ){
				$('#error_fecha1').show();
				$('.calendario1').addClass("revisar2")
				retorno = false;
			}
			else if( $('.input_num_auto').val() == '' ){
				$('#error_num_auto').show();
				$('.input_num_auto').addClass("revisar2")
				retorno = false;
			}
			break;
	}
	return retorno;
}

function valida_busqueda_onblur(){
	if( ( $('.calendario1').val() != '' && $('.calendario1').hasClass('revisar2') ) ){
		$('#error_fecha1').hide();
		$('#busqueda_from').removeClass("revisar2");
		$('#busqueda_to').removeClass("ie7BgFFF");
		$('#busqueda_to').addClass("revisar4");
		
		
		$('#error_fecha2').show();
	
		
	
	}
	if( ( $('.calendario2').val() != '') ){
		$('#error_fecha2').hide();
		$('#busqueda_to').removeClass("revisar4");

			}
	if( ( $('.calendario1').val() != '') && $('.input_num_auto').hasClass("revisar2") ){
		$('#error_num_auto').show();
	
	}
	if( ( $('.calendario1').val() == '') && $('.input_num_auto').val() != "" ){
		$('#error_fecha1').show();
	
	}
	if( $('.input_num_auto').val() != '' ){
		$('#error_num_auto').hide();
		$('.input_num_auto').removeClass("revisar2")
	}

}

function focusNumauto() {
	if( $('.input_num_auto').hasClass("revisar2")  && $('#busqueda_from').hasClass("revisar2")  ){
		
		$('#error_num_auto').show();
		$('#error_fecha1').hide();
	}
}
function focusBuscfrom() {
	if( $('.input_num_auto').hasClass("revisar2")  && $('#busqueda_from').hasClass("revisar2")  ){
	
		$('#error_fecha1').show();
		$('#error_num_auto').hide();
	}
	else{$('#busqueda_to').val("")}
}
function buscaChange() {
		$('#error_fecha1, #error_fecha2, #error_num_auto').hide();
		$('.calendario1, .calendario2, .input_num_auto').removeClass("revisar2");
		$('.calendario1, .calendario2, .input_num_auto').removeClass("revisar4");
	
	}

function validador_filtrar(){
	
	
	
	$('#error_todos').hide();
	$('#error_todos').hide();
	$('#error_filtro_importe1').hide();
	$('#error_filtro_importe2').hide();
	$('#error_filtro_fecha2').hide();
	
	if($('#filtro_from').val() != ''&&$('#filtro_to').val() != ''){
		$('#modal_filtrar').hide();
		$('.overlay').hide();
			cargando_movimientos();	
			top.mFiltro();
		}
		
	if($('#filtro_from').val() == ''&&$('#filtro_to').val() == ''){
	if(document.getElementById('porpalabra').value==""){
			
			$('#porpalabra').addClass('revisar2');
			$('#error_porpalabra').show();
			}
			
			
			
			
			else{
				
	
		$('#porpalabra').removeClass('revisar2');
				$('#error_porpalabra').hide();
				$('#modal_filtrar').hide();
		$('.overlay').hide();
			cargando_movimientos();	
			top.mFiltro();
				}
				}
				

	

	var retorno = true;
	
	if( $('.radio_rango').attr('checked') == 'checked' ){
		
			$('#porpalabra').removeClass('revisar2');
				$('#error_porpalabra').hide();
		if( $('.text_importe1').val() == '' && $('.text_importe2').val() == '' ){
			$('#error_filtro_importe1').show();
			$('.text_importe1').addClass("revisar4")
			$('.text_importe2').addClass("revisar4")
			retorno = false;

		
		}
		else if( $('.text_importe2').val() == '' ){
			$('#error_filtro_importe2').show();
			$('.text_importe2').addClass("revisar4");
			retorno = false;
					
				
			
		}
	}else if( $('.radio_especifico').attr('checked') == 'checked' ){
		$('#porpalabra').removeClass('revisar2');
				$('#error_porpalabra').hide();
				if( $('.text_importe1').val() != '' ){
			$('#modal_filtrar').hide();
		$('.overlay').hide();
			cargando_movimientos();	
			top.mFiltro();
			}
		if( $('.text_importe1').val() == '' && $('.text_importe2').val() == '' ){
			$('#error_filtro_importe1').show();
			$('.text_importe1').addClass("revisar4");
			
			
			
			retorno = false;

		
		}
		else if( $('.text_importe1').val() == '' ){
			$('#error_filtro_importe1').show();
			retorno = false;
		}
		

	}
	
	if( ( $('.modal_calendario1').val() != 'Seleccione' ) && ( $('.modal_calendario1').val() != '' ) ){
		if( ( $('.modal_calendario2').val() == 'Seleccione' ) || ( $('.modal_calendario2').val() == '' ) ){
			$('#error_filtro_fecha2').show();
			$('.modal_calendario2').removeClass('ie7BgFFF');
			$('.modal_calendario2').addClass('revisar2');
			retorno = false;
		}
	}
	
	return retorno;
}


function valida_filtro_onblur(){
		$('#porpalabra').removeClass('revisar2');
				$('#error_porpalabra').hide();
	if( ( $('.modal_calendario2').val() != 'Seleccione' ) && ( $('.modal_calendario2').val() != '' ) ){
		$('#error_filtro_fecha2').hide();

	}
	
	if( $('.input_num_auto').val() != '' ){
		$('#error_num_auto').hide();
	}
	if( $('.text_importe1').val() != '' && $('.text_importe2').hasClass("revisar4") ){
		$('#error_filtro_importe2').show();
		$('.text_importe2').addClass("revisar4");
	}
	if( $('.text_importe1').val() != '' ){
		$('#error_filtro_importe1').hide();
		$('#importe1').removeClass('revisar4')

	}
	if( $('.text_importe2').val() != '' ){
		$('#error_filtro_importe2').hide();
		$('#importe2').removeClass('revisar4')
		$('#modal_filtrar').hide();
		$('.overlay').hide();
			cargando_movimientos();	
		$('.text_importe1, .text_importe2').removeClass('revisar4').addClass('input_des');	
		top.mFiltro();
	}

}

function cargando_movimientos(){

	$('#movimientos_cargando').show();
	
	$('#movimientos_cargados').hide();
	setTimeout("$('#movimientos_cargando').fadeOut();$('#movimientos_cargados').fadeIn();fondo_demo();",2000);
	 
}


function cargando_movimientos2(){

	$('#movimientos_cargando').show();
	$('#movimientos_cargados').hide();
	setTimeout("$('#movimientos_cargando').fadeOut();$('#movimientos_cargados').fadeIn();fondo_demo();",2000);
	setTimeout('tablasC()', 2100);
	 
}

function tablasC()
	{
		$('#tablaB').hide();
		$('#tablaC').show();
		$('#searchMov').show();
		$('#searchMov2').show();
		
	}
function mFiltro(){
				$('#searchMov').hide();
				$('.Qfiltro').show();
			}
function mQFiltro(){
				cargando_movimientos();
				$('#searchMov').show();
				$('.Qfiltro').hide();
			}


function datepicker_busqueda_filtro(){
	
    var diasSemana = ['D','L','M','M','J','V','S'];
    var Meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var MesesShort = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];		
	if(language=="eng") {
		diasSemana = ['S','M','T','W','Th','F','Sa'];	
		Meses = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		MesesShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	}


	var dates = $( "#busqueda_from, #busqueda_from2, #busqueda_to" ).datepicker({
		dayNamesMin: diasSemana,
		monthNames: Meses,
		monthNamesShort: MesesShort,
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
			dates2.not( this ).datepicker( "option", option, date );
		},
		onClose:function(){
			valida_busqueda_onblur();
			
			if( ( $('#busqueda_from').val() != '' ) ){
				$("#busqueda_to").datepicker('enable').removeClass('ie7BgCCC').addClass('ie7BgFFF');

			}
			if ( $("#busqueda_from").val() == '' ) {
				$("#busqueda_to").datepicker('disable').removeClass('ie7BgFFF').addClass('ie7BgCCC');
			

			}
		},
		showAnim: '',
		showOtherMonths: true,
		selectOtherMonths: false,
		dateFormat:"d M yy",
		minDate: '-30d',
		maxDate: '30d'
	});
	
	var dates2 = $( "#busqueda_to" ).datepicker({
		dayNamesMin: diasSemana,
		monthNames: Meses,
		monthNamesShort: MesesShort,
		beforeShow: function(){
			$(this).removeClass('ui-corner-all');
		},
		onClose:function(){
			valida_busqueda_onblur();
		},
		
		showAnim: '',
		showOtherMonths: true,
		selectOtherMonths: false,
		dateFormat:"d M yy",
		minDate: '-30d',
		disabled: true,
		maxDate: '30d'
	});
	
	
	
	var filtro_dates = $( "#filtro_from" ).datepicker({
		dayNamesMin: diasSemana,
		monthNames: Meses,
		monthNamesShort: MesesShort,
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
			filtro_dates2.not( this ).datepicker( "option", option, date );
		},
		onClose:function(){
			valida_busqueda_onblur();
			
			
			if( ( $('#filtro_from').val() != '' ) ){
			$("#filtro_to").datepicker('enable').removeClass('ie7BgCCC').addClass('ie7BgFFF');	

			}
			if ( $("#filtro_from").val() == '' ) {
				
				$("#filtro_to").datepicker('disable').removeClass('ie7BgFFF').addClass('ie7BgCCC');
				
			}
		},
		showAnim: '',
		showOtherMonths: true,
		selectOtherMonths: false,
		dateFormat:"d M yy",
		minDate: '-30d',
		maxDate: 'd'
	});
	
	var filtro_dates2 = $( "#filtro_to" ).datepicker({
		dayNamesMin: diasSemana,
		monthNames: Meses,
		monthNamesShort: MesesShort,
		beforeShow: function(){
			$(this).removeClass('ui-corner-all');

		},
		
		
		showAnim: '',
		showOtherMonths: true,
		selectOtherMonths: false,
		disabled: true,
		dateFormat:"d M yy",
		minDate: '-30d',
		maxDate: '30d'
	});
	$('#filtro_to, #filtro_from, #busqueda_to, #busqueda_from, #busqueda_from2').focus(
      function(){
        if( $('.ui-datepicker .flecha').length == 0){
          $('.ui-datepicker').prepend("<div class='flecha'></div>");
        }
        
      }
    );
	
$(".cal_icon").click(function(){
    $('#busqueda_from').datepicker('show');
});
	$(".cal_icon2").click(function(){
    $('#busqueda_to').datepicker('show');
});
	$(".cal_icon3").click(function(){
			
		$('#porpalabra').removeClass('revisar2');
		$('#error_porpalabra').hide();
		$('#filtro_from').datepicker('show');
	 	$('#porpalabra').val('');
	 	$('.radio_especifico').attr('checked',false); 
		$('.radio_rango').attr('checked',false); 
		$('.text_importe1').val('');
		$('#error_filtro_importe1').hide();
		$('.text_importe1').removeClass('revisar4');
		$('#error_filtro_importe2').hide();
		$('.text_importe2').removeClass('revisar4');
	});

	$(".modal_calendario1").click(function(){
			$('#error_filtro_importe1').hide();
			$('.text_importe1').removeClass('revisar4');
			$('#error_filtro_importe2').hide();
			$('.text_importe2').removeClass('revisar4');
			$('#porpalabra').removeClass('revisar2');
			$('#error_porpalabra').hide();
	    	$('#filtro_from').datepicker('show');
			
		 	$('#porpalabra').val('');
			$('.text_importe1').val('');
		 	$('.radio_especifico').attr('checked',false); 
			
	$('.radio_rango').attr('checked',false); 
	$('.text_importe1').val('');
			$('.text_importe2').val('');
			('.text_importe2').attr('disabled','disabled'); 
			('.text_importe1').attr('disabled','disabled'); 
			$('#filtro_from').datepicker('show');
	});
		$(".cal_icon4").click(function(){
	    $('#filtro_to').datepicker('show');
		
	});
	
	
	$("#porpalabra").click(function(){
		$('#error_filtro_importe1').hide();
		$('.text_importe1').removeClass('revisar4').addClass('input_des');
		$('#error_filtro_importe2').hide();
		$('.text_importe2').removeClass('revisar4').addClass('input_des');
		$('#porpalabra').removeClass('revisar2');
		$('#error_porpalabra').hide();

		$('#filtro_from').val('');
		$('#filtro_to').removeClass('revisar2').addClass('ie7BgCCC');
		$('#filtro_to').removeClass('ie7BgFFF').addClass('input_calendar_des');
		$('#error_filtro_fecha2').hide();

	 	$('#porpalabra').val('');
		$('.text_importe1').val('');
	 	$('.radio_especifico').attr('checked',false); 

		$('.radio_rango').attr('checked',false); 
		$('.text_importe1').val('');
		$('.text_importe2').val('');
		$('.text_importe2').attr('disabled','true'); 
		
		//('.text_importe1').attr('disabled','disabled');
	});

	$("#rdimporte1").click(function(){
		$('#filtro_to').removeClass('ie7BgFFF').addClass('input_calendar_des');
		$('#error_filtro_importe1').hide();
		$('#error_filtro_importe2').hide();
		$('.text_importe1').removeClass('revisar4');
		$('.text_importe2').removeClass('revisar4').addClass('input_des');
		
		
		$('#porpalabra').removeClass('revisar2');
		$('#error_porpalabra').hide();
		
	 	$('#porpalabra').val('');
		$('.text_importe1').val('');
		
		$('.text_importe1').val('');
		$('.text_importe2').val('');
	});


	$("#rdimporte2").click(function(){
		$('#filtro_to').removeClass('ie7BgFFF').addClass('input_calendar_des');
		$('#error_filtro_importe1').hide();
		$('.text_importe1').removeClass('revisar4');
		$('.text_importe2').removeClass('revisar4');
		
		$('#porpalabra').removeClass('revisar2');
		$('#error_porpalabra').hide();
		
	 	$('#porpalabra').val('');
		$('.text_importe1').val('');
		
		$('.text_importe1').val('');
		$('.text_importe2').val('');
	});

	
	$(".filtro_porpalabra").click(function(){

		$('.modal_calendario1').val('');
		$('.modal_calendario2').val('');
		$('.text_importe1').val('');
		$('.text_importe2').val('');
		('.text_importe2').attr('disabled','disabled'); 
		('.text_importe1').attr('disabled','disabled'); 
			$('.radio_especifico').attr('checked',false); 
		$('.radio_rango').attr('checked',false);
		$('#error_filtro_fecha2').hide();
		$('.modal_calendario2').removeClass('revisar2');
		('.modal_calendario2').attr('disabled','disabled'); 
		$('.modal_calendario2').addClass('ie7BgCCC');
		$('#error_filtro_fecha2').hide();


		$('#error_filtro_importe1').hide();
		$('.text_importe1').removeClass('revisar4');
		$('#error_filtro_importe2').hide();
		$('.text_importe2').removeClass('revisar4');
	});
	
	$('.input_calendar').focus(
		function(){
			if( $(this).hasClass('modal_calendar') ){
				$('.ui-widget').css({'top':($(this).offset().top - $(document).scrollTop() -63)+'px','left':($(this).offset().left+135)+'px', 'z-index':'99999999'});
			}else{
				$('.ui-widget').css({'top':($(this).offset().top-63)+'px','left':($(this).offset().left+135)+'px', 'z-index':'99999999'});
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
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
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
			if( ( $('.calendario1').val() != "" )  ){
				$('.calendario2').removeClass('input_calendar_des').removeAttr('disabled');
			}
			if ( $('.calendario2').val() == "" ) {
				$('.calendario2').val("");
			}
		},
		showAnim: '',
		showOtherMonths: true,
		selectOtherMonths: false,
		minDate: '-30d',
		dateFormat:"d M yy",
		maxDate: 'd'
	});
	
	$('.input_calendar').focus(
		function(){
			if( $(this).hasClass('modal_calendar') ){
				$('.ui-widget').css({'top':($(this).offset().top - $(document).scrollTop() -63)+'px','left':($(this).offset().left+135)+'px', 'z-index':'99999999'});
			}else{
				$('.ui-widget').css({'top':($(this).offset().top-63)+'px','left':($(this).offset().left+135)+'px', 'z-index':'99999999'});
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

function validateNumeric45(obj,e){
 var key;
 var keychar;
 var value = obj.value;
 var returnval = false;
 if (window.event) key = e.keyCode; 
 else if(e.which) key = e.which; 
 else return true;  
 if ((key >= 48 && key <= 57) || key == 13 || key == 8) {
  returnval = true;
 }
 else if (key == 32) {
  if (value.length >0) {
   if (value.charAt(value.length-1) != " ") returnval = true;
  }
  else returnval = false;
 } 
 return returnval;
}

function agregapesitos(){
	$('#importe1, #otCant').val($('#importe1, #otCant').val() + ".00" );
	
	}
function agregapesitos2(){
	$('#importe2').val($('#importe2').val() + ".00" );
	}
function agregapesitos3(){
	$('#importe3').val($('#importe3').val() + ".00" );
	}
function Miles(input){

var num = input.value.replace(/\,/g,"");
if(!isNaN(num)){
num = num.toString().split("").reverse().join("").replace(/(?=\d*\,?)(\d{3})/g,"$1,");
num = num.split("").reverse().join("").replace(/^[\,]/,"");
input.value = num;
}else{
input.value = input.value.replace(/[^\d\,]*/g,"");
}
}


/*Paginacion*/
pactual=1;
		pantes=0;
		
		function nextpage(){
		
		pactual=pactual+1;
				
		if(pactual==2){
			
			$('#pre1').show();
		    $('#pre1_2').show();
			
			$('#p1,#p3, #p4, #p5').removeClass('num_sel');
			$('#p2').addClass('num_sel');
			$('#p1_2').removeClass('num_sel');
			$('#p2_2').addClass('num_sel');
			
			$('#sig1').show();
			$('#sig1_2').show();
			
			pantes=1;
			
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");
			cargando_movimientos();
			
			}
		
		
		
		if(pactual==3){
			
			
			$('#pre1').show();
		    $('#pre1_2').show();
			
			$('#p2, #p4, #p1, #p5').removeClass('num_sel');
			$('#p3').addClass('num_sel');
			$('#p2_2').removeClass('num_sel');
			$('#p3_2').addClass('num_sel');
			
			$('#sig1').show();
			$('#sig1_2').show();
			
			pantes=2;
			
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");
			cargando_movimientos();
			
			}
		
		if(pactual==4){
			
			$('#pre1').show();
		    $('#pre1_2').show();
			
			$('#p3,#p2,#p1,#p5').removeClass('num_sel');
			$('#p4').addClass('num_sel');
			$('#p3_2').removeClass('num_sel');
			$('#p4_2').addClass('num_sel');
			
			$('#sig1').show();
			$('#sig2').show();
			$('#sig1_2').show();
			$('#sig2_2').show();
			
			pantes=3;
			
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");
			cargando_movimientos();
			
			}
		
		if(pactual==5){
			
			$('#pre1').show();
		    $('#pre1_2').show();
			
			$('#p3,#p2,#p1,#p4').removeClass('num_sel');
			$('#p5').addClass('num_sel');
			$('#p4_2').removeClass('num_sel');
			$('#p5_2').addClass('num_sel');
			
			$('#sig1').hide();
			$('#sig1_2').hide();
		
			
			pantes=4;
			
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");
			cargando_movimientos();
		
			
			}
			
	}
	
	function prevpage(){
		
		
		if(pantes==1){
			
			$('#pre1').hide();
		    $('#pre2').hide();
		    $('#pre1_2').hide();
		    $('#pre2_2').hide();
			
			$('#p2').removeClass('num_sel');
			$('#p1').addClass('num_sel');
			$('#p2_2').removeClass('num_sel');
			$('#p1_2').addClass('num_sel');
			
			$('#sig1').show();
			$('#sig2').show();
			$('#sig1_2').show();
			$('#sig2_2').show();
			
			pactual=1;
			pantes=0;
			
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");
			cargando_movimientos();
			
			
			}
			
			if(pantes==2){
			
		    $('#pre1').show();
		    $('#pre1_2').show();
			
			$('#p3').removeClass('num_sel');
			$('#p2').addClass('num_sel');
			$('#p3_2').removeClass('num_sel');
			$('#p2_2').addClass('num_sel');
			
			$('#sig1').show();
			$('#sig1_2').show();
			
			pactual=2;
			pantes=1;
						
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");			
			cargando_movimientos();
			
			
			}
			
			if(pantes==3){
			
		    $('#pre1').show();
		    $('#pre1_2').show();
			
			$('#p4').removeClass('num_sel');
			$('#p3').addClass('num_sel');
			$('#p4_2').removeClass('num_sel');
			$('#p3_2').addClass('num_sel');
			
			$('#sig1').show();
			$('#sig1_2').show();
			
			pactual=3;
			pantes=2;
						
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");			
			cargando_movimientos();
		
			
			}
			
			if(pantes==4){
			
		    $('#pre1').show();
		    $('#pre1_2').show();
			
			$('#p5').removeClass('num_sel');
			$('#p4').addClass('num_sel');
			$('#p5_2').removeClass('num_sel');
			$('#p4_2').addClass('num_sel');
			
			$('#sig1').show();
			$('#sig1_2').show();
			
			pactual=4;
			pantes=3;
						
			top.window.scrollTo(0,0);
			$('#contTodo').trigger("click");			
			cargando_movimientos();
			
			
			}
			
			
	}
	
	function page1() {
   
   $('#p1').addClass("num_sel");
   $('#p2, #p3, #p4, #p5 ').removeClass("num_sel");
   
   $('#p1_2').addClass("num_sel");
   $('#p2_2, #p3_2, #p4_2, #p5_2').removeClass("num_sel");
        
	   	$('#pre1').hide();
	   	$('#pre1_2').hide();
	
		$('#sig1').show();
		$('#sig1_2').show();

		
		top.window.scrollTo(0,0);
		$('#contTodo').trigger("click");
		cargando_movimientos();
		
		
		pactual=1;
		pantes=0;
		}
		
   function page2() {
	   
  $('#p2').addClass("num_sel");
  $('#p1, #p3, #p4, #p5 ').removeClass("num_sel");
  
  $('#p2_2').addClass("num_sel");
  $('#p1_2, #p3_2, #p4_2, #p5_2').removeClass("num_sel");
  
     
	   	$('#pre1').show();
	   	$('#pre1_2').show();
		
		$('#sig1').show();
		$('#sig1_2').show();
  
  		top.window.scrollTo(0,0);
		$('#contTodo').trigger("click");
		cargando_movimientos();
		
		
        pactual=2;
		pantes=1;
        }
		
   function page3() {
  
  $('#p3').addClass("num_sel");
  $('#p2, #p1, #p4, #p5 ').removeClass("num_sel");
  
  $('#p3_2').addClass("num_sel");
  $('#p2_2, #p1_2, #p4_2, #p5_2').removeClass("num_sel");
  
   
	   $('#pre1').show();
	   $('#pre1_2').show();
	
		$('#sig1').show();
		$('#sig1_2').show();
        
		top.window.scrollTo(0,0);
		$('#contTodo').trigger("click");
        cargando_movimientos();
		
		
		pactual=3;
		pantes=2;
		
        }
   function page4() {
	  
	   
  $('#p4').addClass("num_sel");
  $('#p2, #p1, #p3, #p5 ').removeClass("num_sel");
  
  $('#p4_2').addClass("num_sel");
  $('#p2_2, #p1_2, #p3_2, #p5_2').removeClass("num_sel");
        
	
	   	$('#pre1').show();
	   	$('#pre1_2').show();
	
		$('#sig1').show();
		$('#sig1_2').show();
		
		top.window.scrollTo(0,0);
		$('#contTodo').trigger("click");
		cargando_movimientos();
	
		
		pactual=4;
		pantes=3;
		
        }
function page5() {
	  
	   
  $('#p5').addClass("num_sel");
  $('#p2, #p1, #p3, #p4').removeClass("num_sel");
  
  $('#p5_2').addClass("num_sel");
  $('#p2_2, #p1_2, #p3_2, #p4_2').removeClass("num_sel");
        
	  
	   	$('#pre1').show();	
	   	$('#pre1_2').show();
	
		$('#sig1').hide();	
		$('#sig1_2').hide();
		
		top.window.scrollTo(0,0);
		$('#contTodo').trigger("click");
		cargando_movimientos();
		
		
		pactual=5;
		pantes=4;
		
        }
  
function sendSearch2(){
	  var url='http://www.banamex.com/resultados-de-busqueda.htm';
  

   url = url +'?q='+$("input:text[name=search]").val() ;

    openWindow(url,'','1024','760','scrollbars=YES')
		
}
function valorBusc(){
$(".gsc-input").val("Buscar");
$(".gsc-input").focus(function(){
$(".gsc-input").val("");
});
}

function expUno(){

$("#expUno").one("click", function( event ) {

 cargando_movimientos();
       
});
}

function HorasSel(){
	var horas = new Array(); 
	
	horas[0]="00:00"; 
	horas[1]="00:30";
	horas[2]="01:00";
	horas[3]="01:30";
	horas[4]="02:00";
	horas[5]="02:30";
	horas[6]="03:00";
	horas[7]="03:30";
	horas[8]="04:00";
	horas[9]="04:30";
	horas[10]="05:00";
	horas[11]="05:30";
	horas[12]="06:00"; 
	horas[13]="06:30";
	horas[14]="07:00";
	horas[15]="07:30";
	horas[16]="08:00";
	horas[17]="08:30";
	horas[18]="09:00";
	horas[19]="09:30";
	horas[20]="10:00";
	horas[21]="10:30";
	horas[22]="11:00";
	horas[23]="11:30";
	horas[24]="12:00"; 
	horas[25]="12:30";
	horas[26]="13:00";
	horas[27]="13:30";
	horas[28]="14:00";
	horas[29]="14:30";
	horas[30]="15:00";
	horas[31]="15:30";
	horas[32]="16:00";
	horas[33]="16:30";
	horas[34]="17:00";
	horas[35]="17:30";
	horas[36]="18:00"; 
	horas[37]="18:30";
	horas[38]="19:00";
	horas[39]="19:30";
	horas[40]="20:00";
	horas[41]="20:30";
	horas[42]="21:00";
	horas[43]="21:30";
	horas[44]="22:00";
	horas[45]="22:30";
	horas[46]="23:00";
	horas[47]="23:30";
	
 
	
var month=new Array();
month[0]="Ene";
month[1]="Feb";
month[2]="Mar";
month[3]="Abr";
month[4]="May";
month[5]="Jun";
month[6]="Jul";
month[7]="Ago";
month[8]="Sep";
month[9]="Oct";
month[10]="Nov";
month[11]="Dic";

var d = new Date();
var n = d.getDate();
var y = d.getFullYear();
var x = month[d.getMonth()];
var h = d.getHours()
var m = d.getMinutes()
var h2 = h*2
var currentTime = h + ":" + m
var currentDate = n + " " + x + " " + y

var arrayLimpio = $.grep(horas, function(value, i){
	  return ( value.indexOf(h) == 0)
});


$('#horasM li').remove();


	if(currentDate == $('#fechaFut').val()) 
{
	
	for (var i = 0; i < 48; i++){
    var LI = $("<li></li>");
    
    LI.appendTo("#horasM");
	}
	
	$('#horasM li').each(function (i) {
	 $(this).append(horas[i]);
	}); 
$('#horasM li').slice(0, h2+2).remove();

}


else{
	for (var i = 0; i < 48; i++){
    var LI = $("<li></li>");
    
    LI.appendTo("#horasM");
	}
	$('#horasM li').each(function (i) {
 $(this).append(horas[i]);
}); 
	
	}	 
		 
		 
		 $("#listaHoras2").show();
		 $(".scroll_y").tinyscrollbar_update();
		 $("#listaHoras2 li").click(function(){
		var str = $(this).text();
		 $("#selHoras").val(str);
		 $('#errorPagos5').hide();
		 $('#selHoras').removeClass("revisar3")	
		 $("#listaHoras2").hide();
		 $("#insHprog, #insHresp").text(str)	

    });	
} 	

	
function closeDropdown(){
		$('body').click(function(){
        
		$('#listaHoras2').hide();
	
		
		 
    });
    $('body').delegate('#selHoras, .scrollbar',
        'click',function(){
                $('#listaHoras2').show();
				
				
    });
} 	

function agregaceros(){
	$('#otraCantidad').val($('#otraCantidad').val() + ".00" );
	}
function agregaceros2(){
	$('#aplicar1').val($('#aplicar1').val() + ".00" );
	}
function agregaceros3(){
	$('#aplicar2').val($('#aplicar2').val() + ".00" );
	}

function borrarCant(){
	$("#otraCantidad").val("")
	}

function radioImporte(){
		var minimo = $("#insMin").html();
		$("#otraCantidad").prop('disabled', true);
		$("#insImp, #insIresp").html(minimo);
		$('#errorPagos3').hide();
		$("#otraCantidad").removeClass("revisar2");
		$("#otraCantidad").val("")
} 
function radioImporte2(){
	
		var sininteres = $("#sinInteres").html();		
		$("#otraCantidad").prop('disabled', true);
		$("#insImp, #insIresp").html(sininteres);
		$('#errorPagos3').hide();
		$("#otraCantidad").removeClass("revisar2");
		$("#otraCantidad").val("")

	
} 
function radioImporte3(){

	$("#otraCantidad").prop('disabled', false);

} 
function progFecha(){
		if ($('#progFecha').is(':checked')) 
			{
			$('.guardaOp p').removeClass("color666");
			$('#guardaOp').prop('disabled', false);
			$("#verFechaprog").hide();
		    $("#verHoraprog").hide();
			$("#respFprog").hide();
			$("#respHprog").hide();
			$('#fechaFut').datepicker('disable');
			$('#selHoras').prop('disabled', true);
			$('#fechaFut').val("")
			$('#selHoras').val("")
			} 
		else
			{
				if ($('#guardaOp').is(':checked'))
		{
			$('#tick_img_guardaOp').trigger('click')
		}
			$('#fechaFut').datepicker('enable');
	 		$('#guardaOp').prop('disabled', false);
			$('#selHoras').prop('disabled', false);
		   	$('.guardaOp p').addClass("color666");
		   	$("#verFechaprog").show();
		    $("#verHoraprog").show();
			$("#respFprog").show();
			$("#respHprog").show();	
			};
		

}
function progFecha2(){
	var opFrec = "Si"
	var opFrecno = "No"
  ;
  if($('#guardaOp').is(':checked')) 
 
   {
	 $('#progFecha').prop('disabled', false);
    	$('#selHoras').prop('disabled', false);
		$('#fechaFut').datepicker('enable');
		$("#insOpfrec, #insOPresp").text(opFrecno)
		$('#lbProg').removeClass("color666")
		$('#noGuardar').show()
		$('#siGuardar').hide()
		

   } 
	else{
		if ($('#progFecha').is(':checked'))
		{
			$('#tick_img_progFecha').trigger('click')
		}
		
		$('#progFecha').prop('disabled', false);
    	$('#selHoras').prop('disabled', true);
		$('#fechaFut').datepicker('disable');
		$('#lbProg').addClass("color666");
		$("#insOpfrec, #insOPresp").text(opFrec)
		$('#noGuardar').hide()
		$('#siGuardar').show()
		$('#fechaFut').removeClass("revisar2");
		$('#selHoras').removeClass("revisar3");
		$("#errorPagos4, #errorPagos5").hide();
		}
} 
function valTarjeta() {
	if($('#tarjCred').hasClass("revisar2") && $('#tarjCred').val() != "seleccionar" ) 
   {
	   $("#errorPagos1").hide();
	   $('#tarjCred').removeClass('revisar2')
	  
   }

	if( $('#vld2').hasClass("revisar2") && $('#tarjCred').val() != "seleccionar" ) 
   {
	   $("#errorPagos1").hide();
	   $('#tarjCred').removeClass('revisar2')
	   $("#errorPagos2").show();
   }
   if($('#tarjCred').hasClass("revisar2") && $('#otraCantidad').hasClass("revisar2") && $('#tarjCred').val() != "seleccionar" && $('#vld2').val() != "seleccionar" ) 
   {
	   $("#errorPagos1").hide();
	   $("#errorPagos3").show();
   }
   if($('#otraCantidad').val() == "" && $('#tarjCred').val() != "seleccionar" && $('#vld2').val() != "seleccionar" && $('#rdImporte3').is(':checked') ) 
   {
	   $("#errorPagos1").hide();
	   $("#errorPagos3").show();
   }

}
function focusTarjeta() {
	if($('#tarjCred').hasClass("revisar2") && $('#tarjCred').val() == "seleccionar")
   {
	   $("#errorPagos1").show();
	   $("#errorPagos2, #errorPagos3, #errorPagos4, #errorPagos5").hide();
   }  
	if($('#tarjCred').hasClass("revisar2") && ($('#vld2').hasClass("revisar2") || $('#otraCantidad').hasClass("revisar2") || $('#fechaFut').hasClass("revisar2") || $('#selHoras').hasClass("revisar3") ) )
   {
	   $("#errorPagos1").show();
	   $("#errorPagos2, #errorPagos3, #errorPagos4, #errorPagos5").hide();
   }  
}
function focusCuenta() {
	if($('#vld2').hasClass("revisar2") && ($('#tarjCred').hasClass("revisar2") || $('#otraCantidad').hasClass("revisar2") || $('#fechaFut').hasClass("revisar2") || $('#selHoras').hasClass("revisar3") ) ) 
   {
	   $("#errorPagos2").show();
	   $("#errorPagos1, #errorPagos3, #errorPagos4, #errorPagos5").hide();
   }  
}
function focusOcant() {

	if($('#otraCantidad').hasClass("revisar2") && ($('#tarjCred').hasClass("revisar2") || $('#vld2').hasClass("revisar2") || $('#fechaFut').hasClass("revisar2") || $('#selHoras').hasClass("revisar3") ) ) 
   {
	   $("#errorPagos3").show();
	   $("#errorPagos1, #errorPagos2, #errorPagos4, #errorPagos5").hide();
   }  
}
function focusFechafut() {
	if($('#fechaFut').hasClass("revisar2") && ($('#tarjCred').hasClass("revisar2") || $('#vld2').hasClass("revisar2") || $('#otraCantidad').hasClass("revisar2") || $('#selHoras').hasClass("revisar2") ) ) 
   {
	   $("#errorPagos4").show();
	   $("#errorPagos1, #errorPagos2, #errorPagos3, #errorPagos5").hide();
   }  
}
function focusSelhoras() {
	if($('#selHoras').hasClass("revisar3") && ($('#tarjCred').hasClass("revisar2") || $('#vld2').hasClass("revisar2") || $('#otraCantidad').hasClass("revisar2") || $('#fechaFut').hasClass("revisar2") ) ) 
   {
	   $("#errorPagos5").show();
	   $("#errorPagos1, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   }  
}
function valCuenta() {
	
	if ($('#vld2').hasClass("revisar2") && $('#vld2').val() != "seleccionar" && !$('#otraCantidad').hasClass("revisar2")) 
		{
			$("#errorPagos2").hide();
			$('#vld2').removeClass('revisar2')
			if($('#progFecha').is(':checked') ) 
		
						{
						$('#errorPagos4').show();
					
				 		}
		   		else
		   			{$("#errorPagos2").hide();
		   			$('#vld2').removeClass('revisar2')
		   	}

		};
	if($('#otraCantidad').val() !== "" && $('#vld2').val() != "seleccionar" && $('#tarjCred').val() == "seleccionar" ) 
   {
	   $("#errorPagos2").hide();
	   $('#vld2').removeClass('revisar2')
	   $("#errorPagos1").show();
	   
	   
   }
   if(!$('#rdImporte3').is(':checked') && $('#otraCantidad').val() == "" && $('#vld2').val() != "seleccionar" && $('#tarjCred').val() == "seleccionar" ) 
   {
	   $("#errorPagos2").hide();
	   $('#vld2').removeClass('revisar2')
	   $("#errorPagos1").show();
	   
	   
   }
   	if($('#vld2').val() != "seleccionar" && $('#tarjCred').val() == "seleccionar" && $('#otraCantidad').val() !== "" ) 
   {
	   $("#errorPagos2").hide();
	   $('#vld2').removeClass('revisar2')
	   $("#errorPagos1").show();
	   
	   
   }
	if($('#vld2').hasClass("revisar2") && $('#otraCantidad').hasClass("revisar2") && $('#vld2').val() != "seleccionar" ) 
   {
	   $("#errorPagos2").hide();
	   $('#vld2').removeClass('revisar2')
	   
	   if($('#rdImporte3').is(':checked') && $("#otraCantidad").val() == "" ) 
	
			{
			$('#errorPagos3').show();
			$('#errorPagos3 .content').html("Digita un valor en el campo importe");
	 		}
	   if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')> 15987 ) 
	
			{
			$('#errorPagos3').show();
			$('#errorPagos3 .content').html("Importe mayor al permitido");
	   		}
   }
}
function borraOtracantidad(){

	 if(!$('#progFecha').is(':checked') ) 
		{

		   if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')> 15987 ) 
		
				{
				$('#errorPagos3').show();
				$('#errorPagos3 .content').html("Importe mayor al permitido");
				$('#otraCantidad').addClass('revisar2')
		   		}
		   if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')< 15987 && $("#otraCantidad").val() != "") 
		
				{
				$('#errorPagos3').hide();
				$('#otraCantidad').removeClass('revisar2')
				
		   		}
		  //  	if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')< 15987 && $("#otraCantidad").val() != "" && $('#tarjCred').val() == "selecciona" && $('#vld2').val() == "selecciona" ) 
		
				// {
				// $('#errorPagos3').hide();
				// $('#otraCantidad').removeClass('revisar2')
				// $('#errorPagos1').show();
		 	// 	}
		   	if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')< 15987 && $("#otraCantidad").val() != "" && $('#tarjCred').hasClass("revisar2") && $('#vld2').val() != "selecciona" ) 
		
				{
				$('#errorPagos3').hide();
				$('#otraCantidad').removeClass('revisar2')
				$('#errorPagos1').show();
		 		}
		 	if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')< 15987 && $("#otraCantidad").val() != "" && $('#vld2').hasClass("revisar2") && !$('#tarjCred').hasClass("revisar2") ) 
		
				{
				$('#errorPagos3').hide();
				$('#otraCantidad').removeClass('revisar2')
				$('#errorPagos2').show();
		 		}
   		}
	 
	 if($('#progFecha').is(':checked') ) 
	
		{
	
			if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')< 15987 && $("#otraCantidad").val() != "" ) 
		
				{
					
				$('#errorPagos3').hide();
				$('#otraCantidad').removeClass('revisar2')
				
		 		}
			if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')< 15987 && $("#otraCantidad").val() != "" && $('#fechaFut').hasClass("revisar2") ) 
		
				{
					
				$('#errorPagos3').hide();
				$('#otraCantidad').removeClass('revisar2')
				$('#errorPagos4').show();
		 		}
		 	
		   	
		   if($('#rdImporte3').is(':checked') && $("#otraCantidad").val().replace(/,/g, '')> 15987 ) 
		
				{
				$('#errorPagos3').show();
				$('#otraCantidad').removeClass('revisar2')
				$('#errorPagos3 .content').html("Importe mayor al permitido");
		   		}

	

   }
	}
function fechaError(){
	var insFecha = $('#fechaFut').val();
   if ($('#fechaFut').hasClass("revisar2") && $('#fechaFut').val() != "" && $('#selHoras').hasClass("revisar3") ) 
   		{
   		$('#errorPagos4').hide();
   		$('#fechaFut').removeClass("revisar2")
   		$('#errorPagos5').show();
   		$("#insFprog, #insFresp").text(insFecha)	
   		};


   if($('#fechaFut').val() != "" ) 
   {
	$("#insFprog, #insFresp").text(insFecha)
	$('#errorPagos4').hide();
   		$('#fechaFut').removeClass("revisar2")
	
   }
}

function validaPagos(){
	 if( $('#tarjCred').val() == "seleccionar" && $('#vld2').val() != "seleccionar" && $('#rdImporte3').is(':checked')   ) 
   {
	   	if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#tarjCred, #fechaFut").addClass("revisar2");
		   	$("#selHoras").addClass("revisar3");
		   	$("#errorPagos1").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#tarjCred, #otraCantidad").addClass("revisar2");
		   	$("#errorPagos1").show();
   		};

  
   }
   else if( $('#tarjCred').val() != "seleccionar" && $('#vld2').val() == "seleccionar" && $('#rdImporte3').is(':checked')  && $("#otraCantidad").val() != ""  ) 
   {
	   	if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#vld2, #fechaFut").addClass("revisar2");
		   	$("#selHoras").addClass("revisar3");
		   	$("#errorPagos2").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#vld2").addClass("revisar2");
		   	$("#errorPagos2").show();
   		};

  
   }
   else if( $('#tarjCred').val() == "seleccionar" && $('#vld2').val() != "seleccionar" && !$('#rdImporte3').is(':checked')   ) 
   {
	   	if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#tarjCred, #fechaFut").addClass("revisar2");
		   	$("#selHoras").addClass("revisar3");
		   	$("#errorPagos1").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#tarjCred").addClass("revisar2");
		   	$("#errorPagos1").show();
   		};

  
   }
    else if( ($('#tarjCred').val() == "seleccionar") && ($('#vld2').val() == "seleccionar") && !$('#rdImporte3').is(':checked') ) 
   {
	   	if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#tarjCred, #vld2, #fechaFut").addClass("revisar2");
		   	$("#selHoras").addClass("revisar3");
		   	$("#errorPagos1").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#tarjCred, #vld2").addClass("revisar2");
   			$("#otraCantidad").removeClass("revisar2");
		   	$("#errorPagos1").show();
   		};

  
   }
   else if( ($('#tarjCred').val() != "seleccionar") && ($('#vld2').val() == "seleccionar") && !$('#rdImporte3').is(':checked') ) 
   {
	   	if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#vld2, #fechaFut").addClass("revisar2");
		   	$("#selHoras").addClass("revisar3");
		   	$("#errorPagos2").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#vld2").addClass("revisar2");
		   	$("#errorPagos2").show();
   		};

  
   }

   else if( $('#tarjCred').val() == "seleccionar" && $('#vld2').val() == "seleccionar" && $('#rdImporte3').is(':checked') && $("#otraCantidad").val() == ""   ) 
   {
	   	if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#tarjCred, #vld2, #otraCantidad, #fechaFut").addClass("revisar2");
		   	$("#selHoras").addClass("revisar3");
		   	$("#errorPagos1").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#tarjCred, #vld2, #otraCantidad").addClass("revisar2");
		   	$("#errorPagos1").show();
   		};

  
   }
    else if( $('#tarjCred').val() == "seleccionar" && $('#vld2').val() == "seleccionar" && $('#rdImporte3').is(':checked') && $("#otraCantidad").val() != ""   ) 
   {
	   	if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#tarjCred, #vld2, #fechaFut").addClass("revisar2");
		   	$("#selHoras").addClass("revisar3");
		   	$("#errorPagos1").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#tarjCred, #vld2").addClass("revisar2");
		   	$("#errorPagos1").show();
   		};

  
   }
   else if( ($('#vld2').val() == "seleccionar") && ($('#rdImporte3').is(':checked') && $("#otraCantidad").val() == "" ) ) 
   {
   		if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#vld2, #otraCantidad, #fechaFut").addClass("revisar2");
   			$("#selHoras").addClass("revisar3");
   			$("#errorPagos2").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#vld2, #otraCantidad").addClass("revisar2");
   			$("#errorPagos2").show();
   		};
	
  
   }
   else if( $('#vld2').val() != "seleccionar" && $('#tarjCred').val() == "seleccionar" && ($('#rdImporte3').is(':checked') && $("#otraCantidad").val() == "" ) ) 
   {
   		if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#tarjCred, #otraCantidad, #fechaFut").addClass("revisar2");
   			$("#selHoras").addClass("revisar3");
   			$("#errorPagos1").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#tarjCred, #otraCantidad").addClass("revisar2");
   			$("#errorPagos1").show();
   		};
	
  
   }
   else if( ($('#rdImporte3').is(':checked') && $("#otraCantidad").val() == "" ) ) 
   {
	
		if (($('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) && ($('#progFecha').is(':checked') && $("#selHoras").val() == "" )) 
	   	{
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#otraCantidad, #fechaFut").addClass("revisar2");
   			$("#selHoras").addClass("revisar3");
   			$("#errorPagos3").show();
	   	} 

   		else{
   			$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#otraCantidad").addClass("revisar2");
   			$("#errorPagos3").show();
   		};

	
  
   }
   else if( $('#progFecha').is(':checked') && $("#fechaFut").val() == "" ) 
   {	
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	   		$("#fechaFut").addClass("revisar2");
   			$("#selHoras").addClass("revisar3");
   			$("#errorPagos4").show();
   }
    else if( $('#progFecha').is(':checked') && $("#selHoras").val() == "" ) 
   {	
	   		$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
   			$("#selHoras").addClass("revisar3");
   			$("#errorPagos5").show();
   }


   else {
	   
	   if($('#rdImporte3').is(':checked') && $("#otraCantidad").val() != "" ) 
	
		{
	var ocantidad = $("#otraCantidad").val();
	$("#insImp, #insIresp").html(ocantidad);
  	

   }
	  	$("#errorPagos5, #errorPagos2, #errorPagos3, #errorPagos4").hide();
	  	$("#tarjCred, #vld2, #otraCantidad, #fechaFut").removeClass("revisar2");
	  	$("#selHoras").removeClass("revisar3");
		$("#opcCaptura").removeClass().addClass("confirma");
		$("#opcVerifica").removeClass().addClass("selected")
	   	$("#captura").hide();
	   	$("#verifica").show();
	   	$('#errorPagos3').hide();
	   
	   } 
	
}



function confirmaPago(){
	$("#opcVerifica").removeClass().addClass("confirma");
	$("#opcRespuesta").removeClass().addClass("selected respuesta2")
	   $("#verifica").hide();
	   $("#respuesta").show();
	   $("#imprimir").show();	
}

function regresaPago(){
	$("#opcVerifica").removeClass()
	$("#opcCaptura").removeClass().addClass("selected")
	   $("#verifica").hide();
	   $("#captura").show();
}



function cheqProt() {

	var protegida = $('#cheqProt').val();
switch (protegida){
		case 'sel':
		$('.contrato_chequera_p').removeClass().addClass('contrato_chequera_p2')
		$('#wrapContrato, .pie_contenido2').hide();
		
			break;
		case 'chequera':
		$('.contrato_chequera_p2').removeClass().addClass('contrato_chequera_p')
		$('#wrapContrato, .pie_contenido2').show();
			break;
		
	}	
}
function validaCheqProt() {
		if ($('#aceptoCon').is(':checked')) {
		$('#aplicada').show()
		$('#insProtegida').hide()
		$('#imprimir').show()
		}
		else {
		$('#errorContrato').show()
		$('#tick_img_aceptoCon').addClass('acepto')
		}
}
function aceptoContrato() {
		if ($('#aceptoCon').is(':checked')) {
		return false
	
		}
		else {
		$('#errorContrato').hide()
		$('#tick_img_aceptoCon').removeClass('acepto')
		}
}
function exconPagos() {
	$('#expandirPagos').click( function () {
		$('#expandirPagos').hide()
		$('#contraerPagos').show()
	})
	$('#contraerPagos').click( function () {
		$('#contraerPagos').hide()
		$('#expandirPagos').show()
	})

}
function pagosFrec() {
	var aplicar1 = $('#aplicar1').val()
	var tarjetaPf1 = "Banamex - Tarjeta Clásica - **091"
	if ($('#aplicar1').val() == "") 
	{
		$('#errorApl1').show()
		$('#aplicar1').addClass("revisar2")
		$('#errorApl2').hide()
		$('#aplicar2').removeClass("revisar2")

	} 
	else
	{
		$('#tituloPagosopc').show()
		$('#verifica').show()
		$('#allPagosfrec').hide()
		$('#insImp').html(aplicar1)
		$('#insIresp').html(aplicar1)
		$('#tarjPfr').html(tarjetaPf1)
		$('#tarjPfr2').html(tarjetaPf1)
		$('#errorApl1, #errorApl2').hide()
		$('#aplicar1, #aplicar2 ').removeClass("revisar2")

	};
	
}
function pagosFrec2() {
	var aplicar2 = $('#aplicar2').val()
	var tarjetaPf2 = "Banamex - Tarjeta Oro - 9194**"
	if ($('#aplicar2').val() == "") 
	{
		$('#errorApl2').show()
		$('#aplicar2').addClass("revisar2")
		$('#errorApl1').hide()
		$('#aplicar1').removeClass("revisar2")
	} 
	else
	{
		$('#tituloPagosopc').show()
		$('#verifica').show()
		$('#allPagosfrec').hide()
		$('#insImp').html(aplicar2)
		$('#insIresp').html(aplicar2)
		$('#tarjPfr').html(tarjetaPf2)
		$('#tarjPfr2').html(tarjetaPf2)
		$('#errorApl1, #errorApl2').hide()
		$('#aplicar1, #aplicar2 ').removeClass("revisar2")
	};
	
}
function regpagosFrec() {
	
		$('#tituloPagosopc').hide()
		$('#verifica').hide()
		$('#allPagosfrec').show()
	
	
}
function borraApl1() {
	
	if ($('#aplicar1').val() != "" && $('#aplicar1').hasClass('revisar2')) 
		{
			$('#errorApl1').hide()
			$('#aplicar1').removeClass('revisar2')
		} 
	else
		{
	
		};
}
function borraApl2() {
	if ($('#aplicar2').val() != "" && $('#aplicar2').hasClass('revisar2')) 
		{
			$('#errorApl2').hide()
			$('#aplicar2').removeClass('revisar2')
		} 
	else
		{
		
		};
}
function aplFocus1() {
			$('#aplicar1').val("")
		}
function aplFocus2() {
			$('#aplicar2').val("")
		}			
function borrarTipos1() {
	$('.tiposUno').hide();
	$('.gris').addClass("bgF5F5F5");
}
function borrarTipos2() {
	$('.tiposDos').hide();
}

function focusBusquedato() {
			$('#busqueda_to').val("")
			
			
		}
/* Funcion y Ruta anteriores
function cargaDocN(pRuta){
	
	carpeta = '../bancanet_demo/contenidos/transacciones/';
	$('.ifrContenedor').attr('src', carpeta+pRuta);
	setTimeout(function(){ajustarP()},700);
	
}
function cargaDocN2(pRuta2){
	
	carpeta2 = '../';
	$('.ifrContenedor').attr('src', carpeta2+pRuta2);
	setTimeout(function(){ajustarP()},800);
	
}
*/

function cuentasif(){
	

	var arr = 
		["transacciones/ADA/Cuenta-Cheques.html",
		"transacciones/ADA/Cuenta-Maestra.html" ,
		"transacciones/ADA/Tarjeta-de-Debito.html",
		"transacciones/ADA/Cuenta-Cheques_USD.html",
		
		"transacciones/ADA/Tarjeta-de-Credito.html",
		
		"transacciones/ADA/Tarjeta_premia.html",
		
		"transacciones/ADA/account_detail_credito_folio.html",
		"transacciones/ADA/Credicheque.html",
		"transacciones/ADA/account_detail_credito_folio.html",
		
		"transacciones/ADA/39-AccountDetail_integral.html",
		"transacciones/ADA/account_detail_plazo_folio.html",
		"transacciones/ADA/account_detail_fondos.html",
		"transacciones/ADA/account_detail_multiseries.html",
		
		"transacciones/ADA/account_detail.html"
		];
		
		 var opc = document.location+"";
	var vars = document.location.search.substring(1).split("=");

		var fr = opc.substr(opc.length-1,opc.length);
		
		var js = parseInt(vars[1]);
	
		$('.ifrContenedor').attr('src', arr[js]);
		
		}


function cargaDocN3(pRuta){
	carpeta = 'transacciones';
	$('.ifrContenedor').attr('src', carpeta+pRuta);
	setTimeout(function(){ajustarP()},700);
	
}
function cargaDocN(pRuta){
	
	carpeta = 'transacciones/';
	$('.ifrContenedor').attr('src', carpeta+pRuta).height('auto');
	setTimeout(function(){ajustarP()},700);
	
}
function cargaDocN2(pRuta2){
	
	carpeta2 = 'subapps/chequera_protegida/';
	$('.ifrContenedor').attr('src', carpeta2+pRuta2);
	setTimeout(function(){ajustarP()},800);
	
}



function Expandir(){
	
	ajustarP();
	
	}	
function ajustarIframe(){
	ajustarP();
	
	}
function ajustar(){
	ajustarP();
	
	}
function ajustarP(){
	var alturaContenidoIfr = document.getElementById('iframeConte').contentWindow.document.body.offsetHeight;
	var anchoTemp = $('.ifrContenedor').width();
	// alturaAltualIfr = $(this).height();
	alturaAltualIfr = $('.ifrContenedor').height();
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
function setFecha(fecha){
			var fechaCompleta = fecha;
			var diasSistema = ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'];
			var mesesSistema = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
			var fechaFormato = fechaCompleta.substring(0,8).split('/');
			var horaFormato = fechaCompleta.substring(12,20);
			var fechaSistema = new Date(20 + fechaFormato[2], fechaFormato[1] - 1, fechaFormato[0]);
			$("#fecha",window.parent.document).html(diasSistema[fechaSistema.getDay()]+' '+fechaSistema.getDate()+' de '+mesesSistema[fechaSistema.getMonth()]+' de 20'+fechaFormato[2]+', '+horaFormato);
			
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
			try{
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
			}catch(e){}
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

function redimencionarAncho(){
	var anchoContendorIframe = document.getElementById('iframeConte').contentWindow.document.getElementById('wrapper_div').offsetWidth;
	document.getElementById('iframeConte').style.width = anchoContendorIframe;
	return anchoContendorIframe;
}
/* Muestra botones imprimir y ayuda */

function imprime(){
		$('#imp').show();
		$('#ayuda').hide();
		$('#guardar').hide();
}
function ayuda(){
		$('#imp').hide();
		$('#imp2').hide();
		$('#ayuda').show();
		$('#guardar').hide();
}
function set_ayuda( url ){
		$('#imp').hide();
		$('#imp2').hide();
		$('#ayuda').show();
		$('#guardar').hide();

		$('#ayuda').find('a').attr('href', "javascript:openWindow('"+url+"','ayuda','1050','"+$(window).height()+"','scrollbars=1')");
}
/* Set  imprimir */
function set_imprimir(url_print, anchoM, altoM){
	$('#imp').show();
	$('#imp2').hide();
	$('#ayuda').hide();
	$('#guardar').hide();
	$('#imp').find('a').attr('href', "javascript:openWindow('"+url_print+"','print','"+anchoM+"','"+altoM+"','scrollbars=yes')");
	$('#imp').find('a').attr('onclick','');
}
function impayuda(){
		$('#imp').show();
		$('#imp2').hide();
		$('#ayuda').show();
		$('#guardar').hide();
}
function set_impayuda(url_ayuda, url_print){
	$('#imp').show();
	$('#imp2').hide();
	$('#ayuda').show();
	$('#guardar').hide();

	$('#ayuda').find('a').attr('href', "javascript:openWindow('"+url_ayuda+"','ayuda','1050','"+$(window).height()+"','scrollbars=1')");
	$('#imp').find('a').attr('href', "javascript:openWindow('"+url_print+"','print','800','"+$(window).height()+"','scrollbars=1')");
	$('#imp').find('a').attr('onclick','');
}
function impayuda2(){
		$('#imp2').show();
		$('#imp').hide();
		$('#ayuda').show();
		$('#guardar').hide();
}
function hideyuda(){
		$('#ayuda').hide();
		$('#guardar').hide();
}	
function hideimp(){
		$('#imp').hide();
		$('#guardar').hide();
}
function impGuardar(){
		$('#imp').show();
		$('#guardar').show();
		$('#imp2').hide();
		$('#ayuda').hide();
}

function hideAyuda(){
		$('#ayuda').show();
		$('#guardar').hide();
		$('#imp').hide();
		$('#imp2').hide();
}


function set_impGuardar(url_guardar, url_print){
	$('#imp').show();
	$('#imp2').hide();
	$('#ayuda').hide();
	$('#guardar').show();

	$('#guardar').find('a').attr('href', "javascript:openWindow('"+url_guardar+"','print','800','"+$(window).height()+"','scrollbars=1')");
	$('#guardar').find('a').attr('onclick','');
	$('#imp').find('a').attr('href', "javascript:openWindow('"+url_print+"','print','800','"+$(window).height()+"','scrollbars=1')");
	$('#imp').find('a').attr('onclick','');
}

function set_impGuardar2(url_guardar, url_print){
	$('#imp').hide();
	$('#imp2').show();
	$('#ayuda').hide();
	$('#guardar').show();

	$('#guardar').find('a').attr('href', "javascript:openWindow('"+url_guardar+"','print','800','"+$(window).height()+"','scrollbars=1')");
	$('#guardar').find('a').attr('onclick','');
	$('#imp2').find('a').attr('href', "javascript:openWindow('"+url_print+"','print','800','"+$(window).height()+"','scrollbars=1')");
	$('#imp2').find('a').attr('onclick','');
}
	
/* Funciones tamaños    */
function tamano1(){
	
	$('#subapp-box').removeClass('anchop2').addClass('anchop1');
	$('#shadow').removeClass('ancho25').addClass('ancho14');
	$('#iframeConte').removeClass('ancho692').removeClass('ancho703').addClass('ancho765');
	$('#iframeConte').removeClass('alto430').removeClass('alto490').removeClass('alto520').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('altoAuto');
	
	
	}
function tamano1_2(){
	
	$('#subapp-box').removeClass('anchop1').addClass('anchop2');
	$('#shadow').removeClass('ancho25').addClass('ancho14');
	$('#iframeConte').removeClass('ancho765').addClass('ancho703');
	$('#iframeConte').removeClass('alto490').removeClass('alto430').removeClass('alto520').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('altoAuto');
	
	
	}

function tamano1_3() {

    $('#subapp-box').removeClass('anchop1').addClass('anchop2');
    $('#shadow').removeClass('ancho14').addClass('ancho25');
    $('#iframeConte').removeClass('ancho765').addClass('ancho692');
    $('#iframeConte').removeClass('alto490').removeClass('alto430').removeClass('alto520').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('altoAuto');


}
	
function tamano2(){
	
	$('#subapp-box').removeClass('anchop1').addClass('anchop2');
	$('#shadow').removeClass('ancho14').addClass('ancho25');
	$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
	$('#iframeConte').removeClass('altoAuto').removeClass('alto430').removeClass('alto520').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('alto490');
	
	
	}
function tamano3(){
	
	$('#iframeConte').removeClass('altoAuto').removeClass('alto430').removeClass('alto525').removeClass('alto520').removeClass('alto610').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('alto490');
	}
function tamano4(){
	
	$('#subapp-box').removeClass('anchop1').addClass('anchop2');
	$('#shadow').removeClass('ancho14').addClass('ancho25');
	$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
	$('#iframeConte').removeClass('altoAuto').removeClass('alto430').removeClass('alto490').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('alto520');
	
	}
	

function tamano5(){
	
	$('#subapp-box').removeClass('anchop1').addClass('anchop2');
	$('#shadow').removeClass('ancho14').addClass('ancho25');
	$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
	$('#iframeConte').removeClass('altoAuto').removeClass('alto430').removeClass('alto490').removeClass('alto520').removeClass('alto610').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('alto525');
	
	}
function tamano6(){
	
	$('#subapp-box').removeClass('anchop1').addClass('anchop2');
	$('#shadow').removeClass('ancho14').addClass('ancho25');
	$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
	$('#iframeConte').removeClass('altoAuto').removeClass('alto430').removeClass('alto490').removeClass('alto520').removeClass('alto525').removeClass('alto640').removeClass('alto1920').removeClass('alto1025').addClass('alto610');
	
	}
function tamano7(){
	
	$('#subapp-box').removeClass('anchop1').addClass('anchop2');
	$('#shadow').removeClass('ancho14').addClass('ancho25');
	$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
	$('#iframeConte').removeClass('altoAuto').removeClass('alto520').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto490').removeClass('alto1920').removeClass('alto1025').addClass('alto430');
	}
	
function tamano8(){
	
$('#subapp-box').removeClass('anchop1').addClass('anchop2');
$('#shadow').removeClass('ancho14').addClass('ancho25');
$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
$('#iframeConte').removeClass('altoAuto').removeClass('alto520').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto490').removeClass('alto430').removeClass('alto1025').addClass('alto1920');
	}

function tamano9(){
	
$('#subapp-box').removeClass('anchop1').addClass('anchop2');
$('#shadow').removeClass('ancho14').addClass('ancho25');
$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
$('#iframeConte').removeClass('altoAuto').removeClass('alto520').removeClass('alto525').removeClass('alto610').removeClass('alto640').removeClass('alto490').removeClass('alto430').removeClass('alto1920').addClass('alto1025');
	}

function tamano10(){
	
	$('#subapp-box').removeClass('anchop1').addClass('anchop2');
	$('#shadow').removeClass('ancho14').addClass('ancho25');
	$('#iframeConte').removeClass('ancho703').removeClass('ancho765').addClass('ancho692');
	$('#iframeConte').removeClass('altoAuto').removeClass('alto430').removeClass('alto490').removeClass('alto520').removeClass('alto525').removeClass('alto1920').removeClass('alto1025').removeClass('alto610').addClass('alto640');
	
	}





	
	function menucon(){
		$('html').live( 'click', function() { 
			$('.flyout').slideUp(); 
			$('#contactanos').addClass('arrow').removeClass('arrow2');
		});
		$('.arrow').live( 'click', function(event){
			event.stopPropagation();
			$('.flyout').slideDown();	
			$('#contactanos').addClass('arrow2').removeClass('arrow');
			event.stopPropagation();
		});
		$('.arrow2').live( 'click', function(){
			$('.flyout').slideUp();	
			$('#contactanos').addClass('arrow').removeClass('arrow2');
		});
		$('.llamar, .escucharte').click( function(){
			$('.flyout').slideUp();
			$('#contactanos').addClass('arrow').removeClass('arrow2');
		});
	}
		
	function menucon2(){
		$('html').live( 'click', function() {
		   $('.flyout').hide(); 
		   $('#contactanos').addClass('arrow').removeClass('arrow2');
		});
		$('.arrow:eq(2)').live( 'click', function(event){
			event.stopPropagation();
			$('.flyout').show();	
			$('#contactanos').addClass('arrow2').removeClass('arrow');
		});
		$('.arrow2').live( 'click', function(){
			$('.flyout').hide();	
			$('#contactanos').addClass('arrow').removeClass('arrow2');
		});
	}
		
		
		
		function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = [8,37,39,46];

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }
		
		
		
		
		$('.expandir').click(function(){
			$('#liquid1').removeClass('iem-top');
			});
		
		$('#contie8').click(function(){
			$('#liquid1').addClass('mtm30');
			$('#expc').addClass('iemtm7');
			});
			
			
			
			
			
		function transl(){
	var arr = 
		[ "transacciones/Transferencia y Pagos Tarjetas/Tarjetas_de_Credito.html",
		"transacciones/Transferencias_y_Pagos_Propias/Transferencia_Cuentas_Propias.html" ,
		"transacciones/Transferencias_y_Pagos_Otras_Cuentas/Otras_Cuentas.html",
"transacciones/Pago de Servicios/Servicios.html",
"transacciones/EDeliveryEdoCta/notificaciones_banamex.html",
"transacciones/Ocultar Mostrar Cuentas/cuentas_propias.html",

//internas link6

"transacciones/Resumen de Inversiones/resumen_inversiones.html",
"transacciones/Chequeras_solicitud/screen1.html",
"transacciones/ZADT/adm_de_tarjetas.html",
"transacciones/Domiciliacion_Consulta_Baja_Instrucciones/Domiciliacion.html",
//10
"transacciones/Consulta_Estados_de_Cuenta_Afore/Edo_de_Cuenta.html",
"transacciones/Aportaciones_Afore/Aportaciones_Ahorro_Voluntario.html",
"transacciones/Retiro_Afore/Retiros.html",
"transacciones/Actualiza_Domicilio_Afore/Actualizar_Domicilio.html",
"transacciones/Cambio PIN - TC/cambio_pin_tc.html"
		];
		
		 var opc = document.location+"";
	var vars = document.location.search.substring(1).split("=");

		var fr = opc.substr(opc.length-1,opc.length);
		
		var js = parseInt(vars[1]);
	
		$('.ifrContenedor').attr('src', arr[js]);	}
		
//Ligas Extra
	function liga1() {
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda1(); } );
	}

	function liga2() {
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda2(); } );
	}

	function liga3() {
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda3(); } );
	}

	function liga4() {
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda4(); } );
	}

	function liga5(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda5(); } );
	}

	function liga6(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda6(); } );
	}

	function liga7(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda7(); } );
	}

	function liga8(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda8(); } );
	}

	function liga9(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda9(); } );
	}

	function liga10(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda10(); } );
	}

	function liga11(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda11(); } );
	}

	function liga12(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda12(); } );
	}

	function liga13(){
		$("#liga a").unbind( 'click' ).bind( 'click', function(){ Layuda13(); } );
	}

	
function valida_export() {
		cargando_movimientos();
		$('.overlay').hide();
		$('#'+id_modal).hide();
}
function loading(){
		$.modal.close();
		cargando_movimientos();
}