var language;

var rutaAyudaAv;

var rutaAyudaEd;

var isEnglishSel;



var isAjaxInProcess = false;



$( document ).ready( function() {

	var lanFolderAv;

	var lanFolderEd;

	var c_lang = Get_Cookie( 'c_lang' );

	isEnglishSel = ( c_lang=='eng' );



	if( isEnglishSel && !isAjaxInProcess ) {

		swap();

	}



	lanFolderAv = ( c_lang=='eng' ) ? 'en' : 'es';

	lanFolderEd = ( c_lang=='eng' ) ? 'eng' : 'esp';

	

	language = lanFolderEd;

	rutaAyudaAv = 'https://bancanet.banamex.com/ayudas/'+lanFolderAv+'/';

	rutaAyudaEd = 'http://www.banamex.com/resources/bancanets/bnp/'+lanFolderEd+'/contenedor/';

	rutaAyudaEsc = "https://portal.banamex.com.mx/"+lanFolderEd+"/escribenos.html?xhost=http://www.banamex.com/";

	rutaAyudaSuc = "http://www.banamex.com/recursos/apps/"+lanFolderAv+"/sucursal.htm";

	rutaAyudaLlam = "http://www.banamex.com/recursos/apps/"+lanFolderAv+"/llamanos.htm";

	rutaAyudaEscu = "http://www.banamex.com/"+lanFolderAv+"/escucharte.htm";

});



$( document ).ajaxStop( function(){

	isAjaxInProcess = false;

	if( isEnglishSel ) {

		swap();

	}
});



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



function swap(){

	for (var i=0;i<es.length;i++){

		$("[id=t"+i+"]").each(function(){

			var $this = $(this);

			if(this.tagName.toUpperCase()=="INPUT"){

				$this.val( es[i] );

			}else{

				if( (this.tagName.toUpperCase()=="A") && ( $this.hasClass('tooltip_q') ) ){

					$this.attr('title',es[i]);

				}else{

					$this.html( es[i] );	

				}

			}

		});		

	}

}

function menuServicios(){
var Incorporacion = Get_Cookie( 'Incorporacion' );
	if(Incorporacion == 'encendido'){
		//alert('menuOculto')
		$('#inscripcion').hide();
		$('#incorporacion').show();
		}
		else{
		//alert('menuInicial');
		$('#inscripcion').show();
		$('#incorporacion').hide();
	}
}

function menuAfore(){
var AforeBMX = Get_Cookie( 'AforeBMX' );
	if(AforeBMX == 'encendido'){
		$('#AFOREBanamex').html('<a id="t17" href="33-Afore_banamex2.html" onclick="activatrans()">AFORE Banamex</a>');
		}
		else{
		//alert('Afore Nuevo')
		$('#AFOREBanamex').html('<a id="t17" href="33-Afore_banamex.html" onclick="activatrans()">AFORE Banamex</a>');
	}
}
function menuAfore2(){
var AforeBMX = Get_Cookie( 'AforeBMX' );
	if(AforeBMX == 'encendido'){
		window.location.href='33-Afore_banamex2.html';
		}
}
