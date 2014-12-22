



function cerrar() {

  parent.$.modal.close();

  parent.$("#ventanaEmergente").css("height", "auto");

  parent.$("#ventanaEmergente-contenido").css("height", "auto");

}



function selSucursal() {

  $('div.saldos_bloque2_f4_error_display').remove();

  if( $("input:radio:checked").size() > 0 ) {

	var numSuc = "0000"+$("input:radio:checked").parent().next().text();

	var suc4dig = numSuc.substring( numSuc.length-4 );

	parent.document.getElementById("main").contentWindow.document.getElementById("txtSuc").value = suc4dig;

	cerrar();

  } else {

	var msgErr = (lngApp=="SPANISH")?"Por favor, seleccione una sucursal para continuar":"Please, select a branch to continue";

	var $err = $('<div class="saldos_bloque2_f4_error_display"><span>' + msgErr + '</span></div>');

	$('#tblSucs').after( $err );

	ajustaDimensiones();

  }

}