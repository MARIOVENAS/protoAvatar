var currPag = 0;

var rowpPag = 10;

var visPags = 10;

var iniPag = 1;

var iniPos = 0;

		

$(document).ready( function() {

  $('#tblSucs').bind('repaginate', function() {

	$(this).find('tbody > tr').hide()

	.slice(currPag * rowpPag, (currPag + 1) * rowpPag).show();

	ajustaDimensiones();

  });

});



function showPages( posIni, posFin ) {

  $('.page-number').hide()

  .slice( posIni, posFin ).show();

}



function pager() {

  $('#paginacion').html( '' );

  var $pager = $('#paginacion');

  var $table = $('#tblSucs');

  var rows  = $table.find('tbody > tr').length;

  var pages = Math.ceil(rows / rowpPag);

  if( pages > 1 ) {

	$('<a id="textAnterior"></a>').text('<< '+txtAnt).appendTo($pager).bind('click', function(){

	  if( $(this).is('.antsig') ) {

	    currPag--;

	    $('#pagno'+(currPag+1)).click();

	  }

	});

    $('#textAnterior').addClass('antsig_d');

    for ( var pag=0; pag<pages; pag++) {

	  $('<a class="page-number" id="pagno' + (pag+1) + '"></a>').text(pag+1)

	  .bind('click', { newPage:pag, totPages:pages, totRows:rows }, function(event) {

		var fin;

	    var newPage = event.data['newPage'];

	    var totPages = event.data['totPages'];

	    var totRows = event.data['totRows'];

	    $('.page-number').removeClass('sel_num num').addClass('num');

	    currPag = newPage;

	    if( currPag == 0 )

		  $('#textAnterior').removeClass('antsig').addClass('antsig_d');

	    else

		  $('#textAnterior').removeClass('antsig_d').addClass('antsig');

		if( currPag == totPages-1 )

		  $('#textSiguiente').removeClass('antsig').addClass('antsig_d');

	    else

		  $('#textSiguiente').removeClass('antsig_d').addClass('antsig');

	    $(this).removeClass('num').addClass('sel_num');

		$table.trigger('repaginate');

		fin = $('#tblSucs').find('tbody > tr:visible').length;

	    $('#pagRes').text( '' + (newPage*10+1) + ' ' + txtA + ' ' + (newPage*10+fin) + ' ' + txtDe + ' ' + totRows )

	  }).appendTo($pager); 

    }

    $('<a id="textSiguiente"></a>').text(txtSig+' >>').appendTo($pager).bind('click', function(){

	  if( $(this).is('.antsig') ) {

	    currPag++;

	    $('#pagno'+(currPag+1)).click();

	  }

    });

    if(pages <= visPags)

	  $('#textSiguiente').addClass('antsig_d');

    $('#pagno1').click();

  } else {

    $('#pagRes').text( '1 ' + txtA + ' ' + rows + ' ' + txtDe + ' ' + rows );

  }

}

