

/* Funcion que verifica si el campo esta vacio

 * Parametros

 * @Campo_Txt: Id del Campo que se pretende validar

 * @Msg_Error: Mensaje de error que se va a mostrar si contiene un error

 * @Req: Valor que si es "NO" el campo no es obligatorio

**/



function Campo_Vacio (Campo_Txt,Msg_Error,Req){

	$("#"+Campo_Txt+"_error").css("display","none");

	if($("#"+Campo_Txt).val().length == 0){

		if(Req != "NO"){

			$("#"+Campo_Txt+"_error").css("display","block").html(Msg_Error);

			$("#"+Campo_Txt).focus();

		}

		return false;

	}else

		return true;

}



/* Funcion que verifica si el combo esta vacio

 * Parametros

 * @Combo: Id del Combo que se pretende validar

 * @Msg_Error: Mensaje de error que se va a mostrar si contiene un error

 * @Req: Valor que si es diferente a "NO", lo omite

**/



function Combo_Vacio(Combo,Msg_Error,Req){

	$("#"+Combo+"_error").css("display","none");

	var Valor = "";

	Valor = $("#"+Combo+" option:selected").val()

	if (Valor == "PS" || Valor == "AC" || Valor == "NS" || Valor == "0" || Valor ==""){

		if(Req != "NO"){

			$("#"+Combo+"_error").css("display","block").html(Msg_Error);

			$("#"+Combo).focus();

		}

		return false;

	}

	else

		return true;

}





/* Funcion que verifica si el campo esta vacio

 * Parametros

 * @Campo_Txt: Id del Campo que se pretende validar

 * @Msg_Error: Mensaje de error que se va a mostrar si contiene un error

 * @Req: Valor que cuando es diferente de no es obligatorio

**/

function Verifica_CampoVacio(Campo_Txt,Msg_Error,Req){

	$("#"+Campo_Txt+"_error").css("display","none");

	if ($("#"+Campo_Txt).val().length == 0){

		if(Req != "NO"){

			$("#"+Campo_Txt+"_error").css("display","block").html(Msg_Error);

			$("#"+Campo_Txt).focus();

		}

		return false;

	}

		return true;

}





/* Funcion que verifica si el campo tiene los caracteres validos

 * Parametros

 * @Campo_Txt: Id del campo que se pretende validar

 * @Caracteres_Extras: Permitir otros caracteres como validos

 * @Tipo_Validacion: El tipo de validacion 1=Numerico 2=Alfanumerico

 * @Req: Cadena que nos valida si debe de ser requerido

 * @Msg_Error: Mensaje de error que se va a mostrar si contiene un error

**/

function Valida_Caracteres (Campo_Txt,Caracteres_Extras,Tipo_Validacion,Req,Msg_Error){

	$("#"+Campo_Txt+"_error").css("display","none");

	var Numeros="0123456789";

	var Letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var Validos="";

	var Txt_MAY = $("#"+Campo_Txt).val().toUpperCase();

	var invalidos = 0;	

	if (Req == "SI" && $("#"+Campo_Txt).val().length==0){

		$("#"+Campo_Txt+"_error").css("display","block").html(Msg_Error);

		$("#"+Campo_Txt).focus();

		return false;

	}

	else{

		(Tipo_Validacion == 1) ?

			Validos = Numeros:

		(Tipo_Validacion == 2) ?

			Validos = Letras:

			Validos = Numeros + Letras;

		Validos = Validos + Caracteres_Extras;

		for (i=0; i < $("#"+Campo_Txt).val().length; i++)

			for (j=0; j < Validos.length; j++)

				if (Txt_MAY.charAt(i) != Validos.charAt(j))

					if (j+1 < Validos.length)

						continue;

					else{

						$("#"+Campo_Txt+"_error").css("display","block").html(Msg_Error);

						$("#"+Campo_Txt).focus();

						return false

					}

				else 

					break;

				return true;

   }

}



