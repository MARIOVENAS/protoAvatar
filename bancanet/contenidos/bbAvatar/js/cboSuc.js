var txtDe="de";

var txtA="a";

var txtAnt="Anterior";

var txtSig="Siguiente";

var lngApp;



var cboEdos =

[

  ["sel", "Selecciona un estado"],  ["df", "Distrito Federal"], 	["agu", "Aguascalientes"], 

  ["bcn", "Baja California Norte"], ["bcs", "Baja California Sur"], ["cam", "Campeche"], 

  ["coa", "Coahuila"], 				["col", "Colima"], 				["chia", "Chiapas"], 

  ["chi", "Chihuahua"], 			["dur", "Durango"], 			["est", "Estado de M&eacute;xico"], 

  ["gua", "Guanajuato"], 			["gue", "Guerrero"], 			["hid", "Hidalgo"], 

  ["jal", "Jalisco"], 				["mich", "Michoac&aacute;n"], 	["mor", "Morelos"], 

  ["nay", "Nayarit"], 				["nue", "Nuevo Le&oacute;n"], 	["oax", "Oaxaca"], 

  ["pue", "Puebla"], 				["que", "Quer&eacute;taro"], 	["quin", "Quintana Roo"], 

  ["slp", "San Luis Potosi"], 		["sin", "Sinaloa"], 			["son", "Sonora"], 

  ["tab", "Tabasco"], 				["tam", "Tamaulipas"], 			["tlax", "Tlaxcala"], 

  ["ver", "Veracruz"], 				["yuc", "Yucat&aacute;n"], 		["zac", "Zacatecas"]

];



var edos = 

{

  "df":sucDf,    "agu":sucAgs,  "bcn":sucBcn,    "bcs":sucBcs,

  "cam":sucCmp,  "coa":sucCoa,  "col":sucCol,    "chia":sucChp, 

  "chi":sucChi,  "dur":sucDur,  "est":sucEdomex, "gua":sucGua,

  "gue":sucGue,  "hid":sucHid,  "jal":sucJal,    "mich":sucMch,

  "mor":sucMor,  "nay":sucNay,  "nue":sucNL,     "oax":sucOax,

  "pue":sucPue,  "que":sucQue,  "quin":sucQuin,  "slp":sucSlp,

  "sin":sucSin,  "son":sucSon,  "tab":sucTab,    "tam":sucTam,

  "tlax":sucTlx, "ver":sucVer,  "yuc":sucYuc,    "zac":sucZac

};



$(document).ready( function(){

  lngApp = $("#lngApp", parent.frames.main.document).val();

  if( lngApp=="ENGLISH" ) {

    var en= new Array('Branch Locations by State','Select a State to begin your search','Branch','Name','Address','Cancel','Select');

	for( var i=0; i<en.length; i++ ){

	  if( $('#t'+i).is(':input') )

	    $('#t'+i).val( en[i] );

	  else

	    $('#t'+i).html( en[i] );  

	}

	txtDe="of";

	txtA="to";

	txtAnt="Previous";

	txtSig="Next";

	cboEdos[0][1]="Select a State"

  }

  for( var i=0; i<cboEdos.length; i++ ) {

    $option = $('<option value="'+cboEdos[i][0]+'">'+cboEdos[i][1]+'</option>');

    $('#cboEdos').append( $option );

  }

  ajustaDimensiones();

});



function ajustaDimensiones() {

  parent.$.modal.setDimentions( $('#contenido').height()+20, 600 );

}



function selEdo() {

  $('#tblSucs>tbody').html( '' );

  var edo = $('#cboEdos option:selected').val();

  if( edo == 'sel' ) {

	$('#tblSucs, #btnSel, #divPag').hide();

  } else {

	$('#tblSucs, #btnSel, #divPag').show();

	for( var i=0; i<edos[edo].length; i++ ) {

	  var $row = $('<tr></tr>');

	  var $rdCel = $('<td></td>').attr('align','center');

	  var $rdo = $('<input id="rd'+i+'" type="radio" name="rdSuc" />');

	  $rdCel.addClass('tablaSaldos2_bordeR')

	  $rdCel.append( $rdo );

	  $row.append( $rdCel );

	  for( var j=0; j<edos[edo][i].length; j++ ) {

		var $cel = $('<td></td>');

		if( j==0 )

		  $cel.attr('id','tdSuc'+i);

		$cel.html( edos[edo][i][j] );

		if( j<2 )

		  $cel.addClass('tablaSaldos2_bordeR');

		$row.append( $cel );

	  }

	  $('#tblSucs>tbody').append( $row );

	}

	pager();

	$('#tblSucs>tbody').find('tr:even>td').addClass('bgF0F4F9');

	$('div.saldos_bloque2_f4_error_display').remove();

  }

  ajustaDimensiones();

}