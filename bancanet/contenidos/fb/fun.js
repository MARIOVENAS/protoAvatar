var P = parent;



function DoSubmitSalida(){

	document.getElementById('_button_exit').click();

}



function IT(el,value)

{

document.getElementById(el).innerHTML = value;

}



function GI(elem)

{

   return document.getElementById(elem);

}



function desbMenu()

 {

   if(MenuFlag==="F")

     MenuFlag="T";

 }



function scd(time){

	if(flagReset=="F")

	 {

	  GI('TIMEOUT').value=$tl;

	  GI('segRestan').value=$tl*60;

	  flagReset="T";

	  return;

	 }

	

	var aux=document.getElementsByName('LASTRESET');

	if(time!='' && aux[0].value == time && GI('TIMEOUT').value!='')

	return;

	try{

		document.getElementById("iftimer").contentWindow.fclearInterval(timer);

		document.getElementById("iftimer").contentWindow.fclearInterval(timer2);

		document.getElementById("iftimer").contentWindow.fclearTimeout(timer3);

	}catch(e){}

	

	

	GI('TIMEOUT').value=$tl;

	GI('segRestan').value=$tl*60

	

	timer=document.getElementById("iftimer").contentWindow.fSetInterval("window.top.countdown();",1000);

	if(time!='')

	 {

	  aux=document.getElementsByName('LASTRESET');

	  aux[0].value=time;

	 }

	document.getElementById("botonTime").style.display='none';

}



function countdown(){    

	var to=parseInt(GI('TIMEOUT').value,10);	

	var seg=parseInt(GI('segRestan').value,10);

	seg--;

	document.getElementById("segRestan").value=seg;	

	if(seg==10){

		GI('objs').value=2;

		f_Salir();

		return;			

	}	

	if(seg == (($tm*60)+10)){

		GI('objs').value=2; 	  

		timer3=document.getElementById("iftimer").contentWindow.fSetTimeout("window.top.sAlert()",0);

	}

	if(seg > (($tm*60)+10)){

		if( $("#cortinaOverlayEspecial").is("':visible'") ){

			cerrarModal();

			$('#nwd').attr("src","if.htm");

		}

	}

	if(seg%60!=0){		

		return;

	}		

	var trig=$tm+1;	

	var dlay=60000-($ts*1000);	

	to--;	

	GI('TIMEOUT').value=to;		

}



function dialArgsAlertSesion(){

	var dialArgs=new Object();        

	var aux=document.getElementById('iftimer').contentWindow.document.getElementsByName('APPS_FORM_MAIN');	

	dialArgs.act=aux[0].action;			

	aux=document.getElementById('iftimer').contentWindow.document.getElementsByName('EWF_SYS_0');

	dialArgs.ewfsys0=aux[0].value;			

	aux=document.getElementById('iftimer').contentWindow.document.getElementsByName('EWF_SYS_1');

	dialArgs.ewfsys1=aux[0].value;	

	dialArgs.win=window;

	dialArgs.alertime=$ad;

	return dialArgs;

}



function sAlert(){

	if($("#cortinaOverlayEspecial").css("display") == "none"){

		$('#nwd').attr("src","if.htm");

		abrirModalLogout();

	}

}



function abrirModalLogout(){

	try{

		var con = document.getElementById("main").contentWindow.document;

		$("applet", con).hide();

	}catch(exp){}

	$.modalEspecial({

		opacity:60, 

		overlayClose:false, 

		flagDiv:false,

		heightDivIfrm:160,

		widthDivIfrm:600,

		srcIfrm: v_rut+'alert.htm'

	});	

}



function blink(){}



function cerrarModal(modo){

	try{

		var con = document.getElementById("main").contentWindow.document;

		$("applet", con).show();

	}catch(exp){};

	if(modo != "" && modo != null){

		if(modo == "tersesion"){

			if(parseInt(GI('TIMEOUT').value) == 0){

				document.getElementById("objs").readOnly = false;

				document.getElementById("objs").value = "2";

				document.getElementById("objs").readOnly = true;

				f_Salir();

				return;	

			}else{

				return;

			}

		}else if(modo == "sasesion"){

			document.getElementById("objs").readOnly = false;

			document.getElementById("objs").value = "1";

			document.getElementById("objs").readOnly = true;

			f_Salir("EXIT");

			return;	

		}else if(modo == "resesion"){

			document.getElementById("objs").readOnly = false;

			document.getElementById("objs").value = "1";

			scd();			

			try{$.modalEspecial.close();}catch(exp){}			

		}else{

			document.getElementById("objs").readOnly = false;

			document.getElementById("objs").value = "1";

			try{$.modalEspecial.close();}catch(exp){}	

		}

	}else{

		document.getElementById("objs").readOnly = false;

		document.getElementById("objs").value = "1";

		$.modalEspecial.close();

	}

}



function falloSesion(msj){

	parent.parent.document.getElementById('mensajeError_contenido_ifrmEspecial').contentWindow.falloRefrescoSesion(msj);

}



function f_bor(){

ST("xsellmenu","border","1px solid");ST("main","border","0px");ST("menu","border","0px");ST("xsell","border","0px");

}



function DoSubmitLogoff(){DoSubmit('Logoff');}

function rout(){

	if(GI('objs').value==1){

		top.location=v_rut+"salida.htm";

	}else if(GI('objs').value==2){

		top.location=v_rut+"inactividad8min.htm";

	}else{

		top.close();

	}

}



function closememo()

{

 if (ventana != null)

 if(false == ventana.closed) 

 {

    ventana.close ();

 }

 return;

}



function f_Salir(tipo){

try{document.body.setAttribute('onunload','');}catch(e){}

try{document.body.setAttribute('onbeforeunload','');}catch(e){}

try{$(window).unbind('beforeunload')}catch(e){};

var tiposalida = document.getElementById("objs").value;

if(tiposalida == "1"){

	window.location = "spanishdir/ayudas/salida.htm";

}else{

	window.location = "ayudas/inactividad8min.htm";

}



//closememo();





}



function fSalir(){

closememo();

DoSubmitSalida();

window.alert(vL$);

}



function getDocHeight(doc){var docHt=0,sh,oh;if(doc.height)docHt=doc.height;else if(doc.body){if(doc.body.scrollHeight)docHt=sh=doc.body.scrollHeight;if(doc.body.offsetHeight)docHt=oh=doc.body.offsetHeight;if(sh && oh)docHt=Math.max(sh,oh)}return docHt}

			EBX_allowNavigation=true;

function EBX_SetNavigation(value){EBX_allowNavigation=value}

function EBX_GetNavigation(){return EBX_allowNavigation}

function scr(){scrollBy(-600,-600);}

function chpath(xx){}

var hWin,P_$m="toolbar=no,directories=no,menubar=no,status=no,scrollbars=yes,width=580,height=300";

function ow(c){var a=v_idi+"ayudas/";if(c=="nuevo")hWin=open(a+"nuevo.htm","Lo_Nuevo",P_$m);else if(c=="tips")hWin=open(a+"tips.htm","Tips",P_$m)}

function f_h_f(a){}

function ST(){}

function LCS(value){}

function LFB(value){}