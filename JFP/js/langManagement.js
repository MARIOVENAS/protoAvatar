var lblsLogin = new Array(
	{ esp:'ENGLISH', eng:'ESPAÑOL' },//0
	{ esp:'SUCURSALES', eng:'BRANCHES' },
	{ esp:'CONTÁCTANOS', eng:'CONTACT US' },
	{ esp:'ENVIAR UN MENSAJE', eng:'SEND A MESSAGE' },
	{ esp:'LLÁMANOS', eng:'CALL US' },
	{ esp:'QUEREMOS ESCUCHARTE', eng:'QUEREMOS ESCUCHARTE' },
	{ esp:'AYUDA', eng:'HELP' },
	{ esp:'BUSCAR...', eng:'SEARCH...' },
	{ esp:'IR', eng:'GO' },
	{ esp:'Número de cliente', eng:'Customer number' },
	{ esp:'Ingresa tu número de cliente', eng:'Enter your customer number' },//10
	//{ esp:'ENTRAR', eng:'LOGIN DEMO' }, * 08 - DICIEMBRE 2014
	{ esp:'ENTRAR', eng:'ENTER' },
	{ esp:'Ir a Banamex.com', eng:'Go to Banamex.com' },
	{ esp:'Conoce el demo', eng:'Try the demo' },
	{ esp:'Salir del demo', eng:'Exit Demo' },
	{ esp:'Desbloquear claves de acceso', eng:'Unblock access codes' },
	{ esp:'La herramienta<br />Anti-Intrusos est&aacute; <br />instalada en esta PC.', eng:'Anti-intruder tool<br/> installed on </br> this PC.' },
	{ esp:'Esta PC est&aacute; protegida con la <br />herramienta <a style="margin-left:3px;" href="javascript:linkSee();" class="vermas" >Ver m&aacute;s</a>', eng:'This PC is protected with the tool <a style="margin-left:3px;" href="javascript:linkSee();" class="vermas">See more</a>' },
	{ esp:'Ver m&aacute;s', eng:'See more' },
	{ esp:'Descargar la herramienta', eng:'Download the tool' },
	{ esp:'Prot&eacute;gete de un fraude a&uacute;n cuando no est&eacute;s en', eng:'Protect yourself from fraud, even if you are not in' },//20
	{ esp:'INSTALAR', eng:'INSTALL' },
	{ esp:'Realiza compras en el lugar que quieras<br />y recibe a cambio Puntos Premia.', eng:'Realiza compras en el lugar que quieras<br />y recibe a cambio Puntos Premia.' },
	{ esp:'RECOMPENSAS', eng:'RECOMPENSAS' },
	{ esp:'Tarjeta Premia Banamex', eng:'Tarjeta Premia Banamex' },
	{ esp:'Conoce nuestras opciones', eng:'Conoce nuestras opciones' },
	{ esp:'ASEGURA TU RETIRO', eng:'ASEGURA TU RETIRO' },
	{ esp:'Plan de Vida Banamex <sup class="copyF11">&copy;</sup>', eng:'Plan de Vida Banamex <sup class="copyF11">&copy;</sup>' },
	{ esp:'CONTROLA TUS INVERSIONES', eng:'CONTROLA TUS INVERSIONES' },
	{ esp:'Inversiones a la Vista', eng:'Inversiones a la Vista' },
	{ esp:'TARJETA DE CR&Eacute;DITO', eng:'TARJETA DE CR&Eacute;DITO' },//30
	{ esp:'Te la entregamos en 15 minutos', eng:'Te la entregamos en 15 minutos' },
	{ esp:'Reglamento Premia Banamex', eng:'Reglamento Premia Banamex' },
	{ esp:'C&oacute;mo activarlo', eng:'C&oacute;mo activarlo' },
	{ esp:'ACCESO SIN NETKEY', eng:'ACCESS WITHOUT NETKEY' },
	{ esp:'Ahora m&aacute;s f&aacute;cil', eng:'It´s now easier' },
	{ esp:'CON MI BANCANET', eng:'WITH MY BANCANET' },
	{ esp:'Mejora tu administraci&oacute;n', eng:'Improve your administration' },
	{ esp:'CLAVE ALFANUM&Eacute;RICA', eng:'ALPHANUMERIC PASSWORD' },
	{ esp:'Aprende a construirla', eng:'Learn to create it' },
	{ esp:'Aprende a realizar tus operaciones<br/>bancarias por internet utilizando nuestro<br />demo interactivo. Descubre lo fácil, práctico<br />y seguro que es', eng:'Aprende a realizar tus operaciones<br/>bancarias por internet utilizando nuestro<br />demo interactivo. Descubre lo fácil, práctico<br />y seguro que es' },
	{ esp:'Bienvenido', eng:'Welcome' },//41
	{ esp:'Clave de acceso', eng:'Access code' }, //42
	{ esp:'Digita tu clave de acceso', eng:'Enter your access code' }, //43
	{ esp:'No soy yo', eng:'That&acute;s not me' },
	{ esp:'MEJORAMOS BANCANET', eng:'WE IMPROVED BANCANET' },
	{ esp:'Comp&aacute;rtenos tu opini&oacute;n', eng:'Share your opinion' },
	{ esp:'Estamos renovando <strong style="font-size: 17px;!important">Banca</strong>Net <br />para mejorar tu experiencia.', eng:'We are renovating <strong style="font-size: 17px;!important">Banca</strong>Net<br />to improve your experience.' },
	{ esp:'Solic&iacute;tala en l&iacute;nea', eng:'Share your opinion' },
	{ esp:'T&Eacute;RMINOS, CONDICIONES DE USO Y PRIVACIDAD', eng:'PRIVACY AND USE RELATED TERMS AND CONDITIONS' },
	{ esp:'D.R. &reg; Copyright 2013, Derechos Reservados. Banco Nacional de M&eacute;xico, S.A., integrante de Grupo Financiero Banamex.<br />Isabel la Cat&oacute;lica 44. Col. Centro Hist&oacute;rico. Del. Cuauht&eacute;moc. C.P. 06000, M&eacute;xico, Distrito Federal, M&eacute;xico.', eng:'D.R. &reg; Copyright 2013, All Rights Reserved. Banco Nacional de M&eacute;xico, SA member of Grupo Financiero Banamex.<br />Isabel la Cat&oacute;lica 44. Col. Centro Hist&oacute;rico. Del. Cuauht&eacute;moc. C.P. 06000, M&eacute;xico, Distrito Federal, M&eacute;xico. ' },//50
	{ esp:'Ir a', eng:'Go to ' },
	{ esp:'¡Aseg&uacute;rate de estar<br /> protegido!', eng:'¡Aseg&uacute;rate de estar<br /> protegido!' },
	{ esp:'Activa la herramienta Anti-intrusos', eng:'Activa la herramienta Anti-intrusos' },
	{ esp:'ACTIVAR', eng:'ACTIVAR' },
	{ esp:'Aprende a realizar tus operaciones<br />bancarias por internet utilizando nuestro<br />demo interactivo. Descubre lo fácil, práctico<br /> y seguro que es', eng:'Aprende a realizar tus operaciones<br />bancarias por internet utilizando nuestro<br />demo interactivo. Descubre lo fácil, práctico<br /> y seguro que es' },
	{ esp:'Estamos renovando <strong style="font-size: 17px;!important">Banca</strong>Net <br />para mejorar tu experiencia.', eng:'We are renovating <strong style="font-size: 17px;!important">Banca</strong>Net<br />to improve your experience.' },
	{ esp:'Hazlo en s&oacute;lo 3 pasos', eng:'Do it in only 3 steps' },
	{ esp:'Olv&iacute;date de las filas<br />y mejor hazlo con <span class="bold f17">Banca</span>Net', eng:'Forget about lines<br />and do it from <span class="bold f17">Banca</span>Net' },
	{ esp:'Aprende a realizar transferencias<br />a otras cuentas Banamex<br />y de otros bancos', eng:'Learn how to make transfers<br />to other Banamex accounts<br />and from other banks' },
	{ esp:'Conoce c&oacute;mo', eng:'Learn how' },
	{ esp:'Aprende aqu&iacute;', eng:'Learn here' },
	{ esp:'Como hacerlo', eng:'Learn how' },
	{ esp:"CONTRATO DE BANCA ELECTR&Oacute;NICA", eng:"ELECTRONIC BANKING AGREEMENT"},
	{ esp:"&nbsp;Ayuda", eng:"&nbsp;Help"},
	{ esp:"&nbsp;Imprimir", eng:"&nbsp;Print"},
	{ esp:"En <b>Banca</b>Net queremos brindarte el mejor servicio, por ello, constantemente desarrollamos nuevas funcionalidades para que tu experiencia en nuestra banca electr&oacute;nica sea satisfactoria.<br /><br />Haz todas tus operaciones bancarias sin costo*, adem&aacute;s de estar mejor informado de tus movimientos y nuestras promociones proporcionanos tus datos para estar en contacto contigo.", eng:"In <b>Banca</b>Net we want to provide you the best service, that is why, we develop new functionalties in an ongoing basis to ensure that your experience in our electronic banking is satisfactory.<br /><br /> Perform all your bank transactios free of charge* and, to be better informed about your transactions, we request from you the following data to sing up the Banamex Notifiations service."},
	{ esp:"Correo electr&oacute;nico", eng:"e-mail&nbsp;&nbsp;"},
	{ esp:"Confirma tu correo electr&oacute;nico", eng:"Confirm your e-mail"},
	{ esp:"N&uacute;mero Celular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(044/045)", eng:"Mobile phone number (044/045)"},
	{ esp:"Compa&ntilde;&iacute;a", eng:"Company"},
	{ esp:"Si deseas dejar de recibir informaci&oacute;n, puedes cancelar los env&iacute;os en el momento que lo decidas.<br /><br />Adicionalmente te pedimos aceptar nuestro", eng:"If you wish to stop receiving information, you can cancel the delivery of information whenever you want.<br /><br /> Additionally we ask you to accept our"},
	{ esp:"Clausulado del Contrato de Prestaci&oacute;n de Servicios", eng:"clauses added to our Service Agreement"},
	{ esp:"con el cual nos permites seguirte ofreciendo nuestros servicios.<br /><br />*Personas F&iacute;sicas con Actividad Empresarial y/o Personas Morales contin&uacute;an con el esquema de comisiones del servicio contratado.", eng:"and by doing so you allow us to continue offering you our services.<br /><br />*Individuals with business activites and / or Companies continue whit the services fees agreement they signed up for."},
	{ esp:"ACEPTAR", eng:"ACCEPT"},
	{ esp:"Cancelar", eng:"Cancel"},
	{ esp:"CAMBIO DE CLAVES DE ACCESO", eng:"ACCESS CODE CHANGE"},
    { esp:"&nbsp;Ayuda", eng:"&nbsp;Help"},
    { esp:"Para ingresar a BancaNet y Audiomático es necesario cambiar tus claves de acceso para realizar tus operaciones bancarias con mayor seguridad.", eng:"To access BancaNet and Audiomático, you must change your access code to perform more secure banking transactions."},
    { esp:"Para BancaNet", eng:"For BancaNet"},
    { esp:"Crea una nueva clave alfanumérica (8 caracteres)", eng:"Create a new alphanumerical code (8 characters)"},
    { esp:"Confirma tu nueva clave alfanumérica (8 caracteres)", eng:"Confirm your new alphanumerical code (8 characters)"},
    { esp:"Para Audiomático", eng:"For Audiomático"},
    { esp:"Crea una nueva clave numérica* (8 caracteres)", eng:"Create a new numerical code (8 characters)"},
    { esp:"Confirma tu nueva clave numérica* (8 caracteres)", eng:"Confirm your new numerical code (8 characters)"},
    { esp:"Si generaste tu número secreto en sucursal y lo cambiaste en<br />Audiomático, genéralo nuevamente.", eng:"If you generated your password in the branch and you changed it in Audiomático, generate it again."},
    { esp:"ACEPTAR", eng:"ACCEPT"},
    { esp:"Cancelar", eng:"Cancel"},
    { esp:"ACEPTAR", eng:"ACCEPT"},
    { esp:"Cancelar", eng:"Cancel"},
    { esp:"Caracteres disponibles", eng:"Available characters"},
    { esp:"Caracteres disponibles", eng:"Available characters"},
    { esp:"CAMBIO DE CLAVES", eng:"ACCESS CODE CHANGE"},
    { esp:"El cambio de claves de acceso se realizó exitosamente.", eng:"The Change of the access codes was carried out successfully."},
    { esp:"Por tu seguridad, para poder acceder a BancaNet con tus nuevas claves de acceso, da clic en continuar y desde la pantalla de inicio ingresa nuevamente a BancaNet.", eng:"For your own safety, to be able to access BancaNet with your new passwords, click on continue and from the home page Access BancaNet again."},
    { esp:"<span class='strong'>Recuerda:</span><br />Banamex NUNCA te solicitará información específica de tus cuentas bancarias o claves de acceso, vía correo electrónico ni por páginas electrónicas referenciadas desde un correo electrónico.", eng:"<b>Remember:</b> Banamex wil NEVER request specific information from your bank accounts or passwords in an email or by electronic pages referenced from an email."},
    { esp:"Continuar", eng:"Continue"},
    { esp:"Cont&aacute;ctanos", eng:"CONTACT US"},
    { esp:"Ll&aacute;manos", eng:"CALL US"},
    { esp:"Mensajes", eng:"MESSAGES"},
    { esp:"ACEPTAR", eng:"ACCEPT"},
	{ esp:"Centro de Seguridad", eng:"Security Center"},
	{ esp:"Encuentra lo que debes saber <br />para mantenerte protegido", eng:"Find what you need to knowto keep you protected."},
	{ esp:"<strong>Conoce todos los beneficios</strong> <br>y operaciones que puedes realizar.", eng:"<strong>Know all the benefits</strong> <br>and operations you can do."},
	{ esp:"Comp&aacute;rtenos tu opini&oacute;n", eng:"Share your opinion"}, //Modificado el 29/04/2014 (opción para id t104)
	{ esp:"Mensaje", eng:"SESSION FINALIZED"},
	{ esp:"SESI&Oacute;N FINALIZADA", eng:"Message"},
	{ esp:"¡Queremos saber tu opinión!", eng:"We want to hear your opinion!"},
	{ esp:"Ayúdanos contestando las siguientes preguntas:", eng:"Help us by ansewering the following questions:"},
	{ esp:"Haz click aquí", eng:"Click here"},
	{ esp:"Recuerda:", eng:"Remember:"},
	{ esp:"Banamex NUNCA te solicitará información específica de tus cuentas Bancarias o Claves de acceso, via correo electrónico ni por páginas electrónicas referenciadas desde un correo electrónico.", eng:"Banamex will NEVER request any specific information about your bank cards or access codes, via e-mail, neither using electronics pages with links or referenced from an e-mail."},
	{ esp:"Si deseas comunícate a Servicio a Clientes:", eng:"If you wish to contact Customer Service:"},
	{ esp:"De la Ciudad de México: 1226 3990", eng:"From Mexico City please dial: 1226 3990"},
	{ esp:"Del interior sin costo: 01800 110 3990", eng:"From any other location nationwide please dial: 01800 110 3990"},
	{ esp:"Horario de atención de lunes a sábado de 7:00 a 21:00 h.", eng:"Service hours from Monday to Saturday from 7:00 to 21:00 h."},
	{ esp:"REGRESAR A LA PÁGINA DE INICIO", eng:"RETURN TO THE HOMEPAGE"},//t116
	{ esp:"SOLICITUD DE DESBLOQUEO DE CLAVES", eng:"APPLICATION TO UNBLOCK CODES"},//t117
	{ esp:"Nota: Esta operaci&oacute;n se puede realizar &uacute;nicamente si cuentas con tu NetKey Banamex con Challenge", eng:"Note: This transaction can only be carried out if you have your Banamex NetKey with Challenge."},
	{ esp:"Selecciona el medio que deseas desbloquear:", eng:"Select what you want to unblock:"},//t119
	{ esp:"Clave alfan&uacute;merica", eng:"Alphanumeric code"},//t120
	{ esp:"Clave num&eacute;rica", eng:"Numeric code"},//t121
	{ esp:"Digita tu no. de cliente: ", eng:"Enter your customer's number: "},//t122
	{ esp:"Continuar", eng:"Continue"},//123
	{ esp:"Cancelar", eng:"Cancel"},//124
	{ esp:"Tu clave num&eacute;rica ha sido exitosamente desbloqueada.", eng:"Your numeric Code has been successfully unblocked."},
	{ esp:"Ponemos a tu disposici&oacute;n nuestros tel&eacute;fonos para m&aacute;s informaci&oacute;n o cualquier aclaraci&oacute;n.", eng:"For further information or in case of questions or comments, please call us."},
	{ esp:"Del D.F. al 1226-3990 o del interior al 01800-110-3990 de Lunes a S&aacute;bado de 7 a 21 h.", eng:"From Mexico City, 1226-3990; or from the interior, 01800-110-3990 from Monday to Saturday, from 7 a 21 h."},
	{ esp:"Escr&iacute;benos a &quot;Cont&aacute;ctanos&quot; dentro de <a class='link' href='#''>www.banamex.com</a>", eng:"Write us at &quot;Contact us&quot; at <a class='link' href='http://www.banamex.com' target='_blank'>www.banamex.com</a>"},
	{ esp:"ACEPTAR", eng:"ACCEPT"},//T129
	{ esp:"SOLICITUD DE DESBLOQUEO DE CLAVES", eng:"APPLICATION TO UNBLOCK CODES"},
	{ esp:"Tu Clave num&eacute;rica ha sido exitosamente desbloqueada.", eng:"Your numeric Code has been successfully unblocked."},
	{ esp:"Pago Realizado por:", eng:"Transaction by:"},
	{ esp:"Fecha de operaci&oacute;n:", eng:"Transaction Date:"},
	{ esp:"18 de Junio de 2014", eng:"18 of June of 2014"},
	{ esp:"Hora de operaci&oacute;n:", eng:"Transaction Time:"},//t135
	{ esp:"AUTENTICACI&Oacute;N", eng:"AUTHENTICATION"},
	{ esp:"Por tu seguridad, esta operación debe ser autenticada con tu NetKey.", eng:"For your security, this operation needs to be authenticated with your NetKey."},
	{ esp:"Ingresa en tu dispositivo la clave que a continuación se muestra y presiona 'ENT'. Se generará una clave dinámica que debes ingresar en el espacio en blanco. Da clic en 'CONTINUAR'.", eng:"Enter the code in your device and press 'ENT'. A dynamic code will be generated, which you must enter in the textbox. Click on 'CONTINUE'."},
	{ esp:"Clave din&aacute;mica:", eng:"Dynamic code:"},
	{ esp:"Continuar", eng:"Continue"},
	{ esp:"Cancelar", eng:"Cancel"},//t141
	{ esp:"Verifica que las iniciales de tu<br />nombre coincidan, de lo contrario<br />da clic en &quot;No soy yo&quot;.<br /><span class='clear floatR padding-top5'><a class='vermas'>M&aacute;s informaci&oacute;n</a></span>", eng:"Verify the initials of your name to<br />match, otherwise click on &quot;That&acute;s<br>not me&quot;.<br><span class='clear floatR padding-top5'><a class='vermas'>More information</a></span>"}//t142
);

var language;
var isEnglishSel;

$( document ).ready( function() {
	var c_lang = Get_Cookie( 'c_lang' );

	isEnglishSel = ( c_lang=='eng' );
	
	lanFolderAvLog = ( c_lang=='eng' ) ? 'en' : 'es';
	lanFolderEdLog = ( c_lang=='eng' ) ? 'eng' : 'esp';
	
	
	language = lanFolderEdLog;
	host = 'https://bancanet.banamex.com/MXGCB/JPS/portal';
	hostbov = 'https://boveda.banamex.com.mx/';
	host2 = 'https://bancanet.banamex.com/';
	
	rutaExit = ( language=='eng' ) ? host+'/LocaleSwitch.do?locale=en_MX' : host+'/Index.do';
	rutaBanca = ( language=='eng' ) ? hostbov+'englishdir/bankmain.htm' : hostbov+'serban/index.htm';
    rutaBana = ( language=='eng' ) ? 'http://www.banamex.com/en/' : 'http://www.banamex.com';
	
	rutaAyudaCC = ( language=='eng' ) ? host2+'ayudas/en/login.htm' : host2+'ayudas/es/login.htm';
	rutaAyudaContra = ( language=='eng' ) ? host2+'ayudas/en/Contrato.htm' : host2+'ayudas/es/Contrato.htm';
	rutaAyudaClaves = ( language=='eng' ) ? host2+'ayudas/en/CambiodeClavesdeAcceso.htm' : host2+'ayudas/es/CambiodeClavesdeAcceso.htm';
	
	rutaAyudaAv = "https://bancanet.banamex.com/ayudas/"+lanFolderAvLog+"/saldos.htm";
	rutaAyudaSee = "https://www.banamex.com/resources/bancanets/bnp/"+lanFolderEdLog+"/contenedor/pdfs/ahnlab.pdf";
	rutaAyudaEsc = "https://portal.banamex.com.mx/"+lanFolderEdLog+"/escribenos.html?xhost=http://www.banamex.com/";
	rutaAyudaSuc = "http://www.banamex.com/recursos/apps/"+lanFolderAvLog+"/sucursal.htm";
	
	
	if(language == 'eng') {
		$("#entar_login").val('LOGIN DEMO');
	} else {
		$("#entar_login").val('ENTRAR');
	}
});

$(document).ajaxStop(function(){
  isAjaxInProcess = false;
  if( isEnglishSel )
  {
    swapLogin();
	swapImage2();
  }
});

function swapLogin() {
	var c_lang = Get_Cookie( 'c_lang' );

	for ( var i=0; i<lblsLogin.length; i++ ) {
		$( '[id=t'+i+']' ).each( function() {
			if( this.tagName.toUpperCase()=='INPUT' )
				this.value = lblsLogin[i][c_lang];
				
			else
				this.innerHTML = lblsLogin[i][c_lang];
		});
	}
}

function swapImage() {
	var sel;
	var destacadosLgt = $( '#destacados > .dest' ).size();
	var posDestSel = $( '#destacados > .destacado_avtive' ).index()-1;
	switch( posDestSel ) {
		case 0: sel=3; break;
		case 1: sel=2; break;
		case 2: sel=1; break;
		case 3: sel=0; break;
	}
	$('#cambiaImagen2').attr('class', fondos[sel][language]);
}

function swapImage2(){
	
	 if(isEnglishSel)
  {
    $('.espaniol').removeClass('displayBi').addClass('displayNi');
	$('.ingles').removeClass('displayNi').addClass('displayBi');
  }else{
	  
	$('.ingles').removeClass('displayBi').addClass('displayNi');
	$('.espaniol').removeClass('displayNi').addClass('displayBi');
  }
	
}

function changeLanguage() {
	var changeTo = $( '#t0' ).attr( 'name' );
	var willChangeTo = ( changeTo=='eng' ) ? 'esp' : 'eng';
	language = changeTo;
	lanFolderAvLog = ( changeTo=='eng' ) ? 'en' : 'es';
	lanFolderEdLog = ( changeTo=='eng' ) ? 'eng' : 'esp';
	host = 'https://bancanet.banamex.com/MXGCB/JPS/portal';
	hostbov = 'https://boveda.banamex.com.mx/';
	
	rutaBanca = ( language=='eng' ) ? hostbov+'englishdir/bankmain.htm' : hostbov+'serban/index.htm';
	rutaBana = ( language=='eng' ) ? 'http://www.banamex.com/en/' : 'http://www.banamex.com';
	rutaExit = ( language=='eng' ) ? host+'/LocaleSwitch.do?locale=en_MX' : host+'/Index.do';
	
	rutaAyudaAv = "https://bancanet.banamex.com/ayudas/"+lanFolderAvLog+"/saldos.htm";
	rutaAyudaSee = "https://www.banamex.com/resources/bancanets/bnp/"+lanFolderEdLog+"/contenedor/pdfs/ahnlab.pdf";
	rutaAyudaEsc = "https://portal.banamex.com.mx/"+lanFolderEdLog+"/escribenos.html?xhost=http://www.banamex.com/";
	rutaAyudaSuc = "http://www.banamex.com/recursos/apps/"+lanFolderAvLog+"/sucursal.htm";
	
	if(language == 'eng') {
		$("#entar_login").val('LOGIN DEMO');
	} else {
		$("#entar_login").val('ENTRAR');
	}
	
	isEnglishSel = ( changeTo=='eng' );
	$( '#t0' ).attr( 'name', willChangeTo );
	Set_Cookie( 'c_lang', changeTo, true, "/", "", "" );

	$(".fecha").html(fechaHora());
	swapLogin();
	swapImage();
	swapImage2();
}

