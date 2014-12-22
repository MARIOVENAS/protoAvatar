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

		 $("#selHoras").removeClass("revisar3");	

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



var active_input_pass = "";

var timer_teclado;

function teclado_virtual( cliente ){

	var num_cliente = cliente;

	$('.char-pass, .char-confirm').focus(function(){



		clearTimeout(timer_teclado);



		var $top = $(this).offset().top - 185;

		

		var $left = $(this).offset().left;

		var $borde_page = ( $(window).width() - 985) / 2;



		if( $borde_page > 0 ){

			$left = $left-$borde_page;

		}

		$('.tt-char').css({

			top: $top

		});

		$('.tt-char-arrow').css({

			left: $left

		});

		$('.tt-char').show();



		active_input_pass = $(this);



		revisa_inputs( active_input_pass );

		

	});



	$('.char-pass, .char-confirm').blur(function(){

		class_pass = $(this).hasClass('char-pass');

		timer_teclado = setTimeout(function(){

			$('.tt-char').hide();



			if( class_pass ){

				revisa_pass( '.char-pass', num_cliente );

			}else{

				revisa_pass( '.char-confirm', num_cliente );

			}

		},500);

	});



	$('.teclado-virt .char-virt').click(function(){

		if( !$(this).hasClass('color666') ){

			active_input_pass.val( $(this).text() );



			var padre = active_input_pass.parent().attr('class');



			if( active_input_pass.next().next() ){

				active_input_pass.next().next().focus();

			}

		}else{

			active_input_pass.focus();

		}

		

	});

}



function revisa_inputs( input ){

	if( input.prevAll() ){

		$('.tt-char .char-virt').removeClass('color666');

		if( input.index() == 0 ){

			

			$('.tt-char .char-num').addClass('color666');

		}else{

			$('.tt-char .char-num').removeClass('color666');

		}

		input.prevAll().each(function(){

			if( $(this).attr("tagName") == "INPUT" ){

				var val_char = $(this).val().toLowerCase();

				$('.tt-char .char-virt').each(function(){

					if( val_char == $(this).attr('data-char') ){

						$(this).addClass('color666');

					}

				});

			}

		});

		input.nextAll().each(function(){

			if( $(this).attr("tagName") == "INPUT" ){

				var val_char = $(this).val().toLowerCase();

				$('.tt-char .char-virt').each(function(){

					if( val_char == $(this).attr('data-char') ){

						$(this).addClass('color666');

					}

				});

			}

		});



		if( input.prev().prev().length != 0 ){

			var val_char_prev = input.prev().prev().val().toLowerCase();

			$('.tt-char .char-virt').each(function(){

				if( val_char_prev == $(this).attr('data-char') ){

					$(this).next().addClass('color666');

				}

			});

		}

		

		if( input.next().next().length != 0 ){

			var val_char_next = input.next().next().val().toLowerCase();

			$('.tt-char .char-virt').each(function(){

				if( val_char_next == $(this).attr('data-char') ){

					$(this).prev().addClass('color666');

				}

			});

		}

	}

}





function revisa_pass( clase_inputs, num_cliente ){

	

	if( clase_inputs == '.char-pass'){

		var pass = "";	

		var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		var letrasynums = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

		var nums = "1234567890";

		var bnmx = "banamex";

		var cliente = num_cliente;



		var tiene_letras = false;

		var tiene_numero = false;

		var tiene_car_esp = false;

		var error_pass = false;



		$('.boxInstructions .bulletList').find('.error-x').remove();

		$('.boxInstructions .bulletList').find('.greenCheck').remove();



		$(clase_inputs).each(function( index ){

			var valor_char = $(this).val();



			//Revisa que tenga letras

			if(!tiene_letras){

				if ( letras.indexOf( valor_char ) != -1 ){

					tiene_letras = true;

				}

			}



			//Revisa que tenga numeros

			if(!tiene_numero){

				if ( nums.indexOf( valor_char ) != -1 ){

					tiene_numero = true;

				}

			}

			

			//Revisa si el primer caracter es letra

			if( index == 0 ){

				if ( letras.indexOf( valor_char ) == -1 ){

					error_pass = true;

					$(this).addClass('error2');

					$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-3');

				}else{

					$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-3');

				}

			}



			//Revisa caracteres especiales

			if ( letrasynums.indexOf( valor_char ) == -1 ){

				tiene_car_esp = true;

				$(this).addClass('error2');

			}



			if( valor_char == '' ){

				error_pass = true;

				$(this).addClass('error2');

			}else{

				$(this).removeClass('error2');

			}



			pass += valor_char;

		});





		//Revisa que tenga numeros y letras

		if( (tiene_letras) && (tiene_numero) ){

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-1');

		}else{

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-1');

			error_pass = true;

		}



		//Revisa que tenga letras

		if(tiene_letras){

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-2');

		}else{

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-2');

			error_pass = true;

		}



		//Revisa que no tenga caracteres especiales

		if(tiene_car_esp){

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-4');

			error_pass = true;

		}else{

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-4');

			

		}



		//Revisa que no tenga numero de cliente

		if( pass.indexOf(cliente) != -1 ){

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-5');

			error_pass = true;

		}else{

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-5');

		}



		$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-6');



		//Revisa que no tenga banamex

		if( pass.indexOf(bnmx) != -1 ){

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-7');

			error_pass = true;

		}else{

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-7');	

		}



		

		if(error_pass == true){

			$(clase_inputs).parent().find('.error-x').removeClass('displayN');

			$(clase_inputs).parent().find('.greenCheck').addClass('displayN');

		}else{

			$(clase_inputs).parent().find('.greenCheck').removeClass('displayN');

			$(clase_inputs).parent().find('.error-x').addClass('displayN');

		}

	}

	if( clase_inputs == '.char-confirm'){

		var rev_pass = "";

		var rev_confirm_pass = "";



		$('.char-pass').each(function(){

			rev_pass += $(this).val();

		});

		$(clase_inputs).each(function(){

			rev_confirm_pass += $(this).val();

		});



		if(rev_confirm_pass == rev_pass){

			$(clase_inputs).parent().find('.greenCheck').removeClass('displayN');

			$(clase_inputs).parent().find('.error-x').addClass('displayN');



		}else{

			$(clase_inputs).parent().find('.error-x').removeClass('displayN');

			$(clase_inputs).parent().find('.greenCheck').addClass('displayN');

		}

	}

	

}





var active_input_pass2 = "";

var timer_teclado2;

function teclado_virtual2( cliente2 ){

	var num_cliente2 = cliente2;

	$('.char-pass2, .char-confirm2').focus(function(){



		clearTimeout(timer_teclado2);



		var $top = $(this).offset().top - 115;

		

		var $left = $(this).offset().left;

		var $borde_page = ( $(window).width() - -70) / 2;



		if( $borde_page > 0 ){

			$left = $left-$borde_page;

		}

		$('.tt-char2').css({

			top: $top

		});

		$('.tt-char-arrow2').css({

			left: $left

		});

		$('.tt-char2').show();



		active_input_pass2 = $(this);



		revisa_inputs2( active_input_pass2 );

		

	});



	$('.char-pass2, .char-confirm2').blur(function(){

		class_pass2 = $(this).hasClass('char-pass2');

		timer_teclado2 = setTimeout(function(){

			$('.tt-char2').hide();



			if( class_pass2 ){

				revisa_pass2( '.char-pass2', num_cliente2 );

			}else{

				revisa_pass2( '.char-confirm2', num_cliente2 );

			}

		},500);

	});



	$('.teclado-virt2 .char-virt2').click(function(){

		if( !$(this).hasClass('color666') ){

			active_input_pass2.val( $(this).text() );



			var padre = active_input_pass2.parent().attr('class');



			if( active_input_pass2.next().next() ){

				active_input_pass2.next().next().focus();

			}

		}else{

			active_input_pass2.focus();

		}

		

	});

}



function revisa_inputs2( input ){

	if( input.prevAll() ){

		$('.tt-char2 .char-virt2').removeClass('color666');

		if( input.index() == 0 ){

			

			$('.tt-char2 .char-num2').addClass('color666');

		}else{

			$('.tt-char2 .char-num2').removeClass('color666');

		}

		input.prevAll().each(function(){

			if( $(this).attr("tagName") == "INPUT" ){

				var val_char2 = $(this).val().toLowerCase();

				$('.tt-char2 .char-virt2').each(function(){

					if( val_char2 == $(this).attr('data-char') ){

						$(this).addClass('color666');

					}

				});

			}

		});

		input.nextAll().each(function(){

			if( $(this).attr("tagName") == "INPUT" ){

				var val_char2 = $(this).val().toLowerCase();

				$('.tt-char2 .char-virt2').each(function(){

					if( val_char2 == $(this).attr('data-char') ){

						$(this).addClass('color666');

					}

				});

			}

		});



		if( input.prev().prev().length != 0 ){

			var val_char_prev2 = input.prev().prev().val().toLowerCase();

			$('.tt-char2 .char-virt2').each(function(){

				if( val_char_prev2 == $(this).attr('data-char') ){

					$(this).next().addClass('color666');

				}

			});

		}

		

		if( input.next().next().length != 0 ){

			var val_char_next2 = input.next().next().val().toLowerCase();

			$('.tt-char2 .char-virt2').each(function(){

				if( val_char_next2 == $(this).attr('data-char') ){

					$(this).prev().addClass('color666');

				}

			});

		}

	}

}





function revisa_pass2( clase_inputs2, num_cliente2 ){

	

	if( clase_inputs2 == '.char-pass2'){

		var pass2 = "";	

		var letras2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		var letrasynums2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

		var nums2 = "1234567890";

		var bnmx2 = "banamex";

		var cliente2 = num_cliente2;



		var tiene_letras2 = false;

		var tiene_numero2 = false;

		var tiene_car_esp2 = false;

		var error_pass2 = false;



		$('.boxInstructions2 .bulletList2').find('.error-x').remove();

		$('.boxInstructions2 .bulletList2').find('.greenCheck').remove();



		$(clase_inputs2).each(function( index ){

			var valor_char2 = $(this).val();



			//Revisa que tenga letras

			if(!tiene_letras2){

				if ( letras2.indexOf( valor_char2 ) != -1 ){

					tiene_letras2 = true;

				}

			}



			//Revisa que tenga numeros

			if(!tiene_numero2){

				if ( nums2.indexOf( valor_char2 ) != -1 ){

					tiene_numero2 = true;

				}

			}

			

			//Revisa si el primer caracter es letra

			if( index == 0 ){

				if ( letras2.indexOf( valor_char2 ) == -1 ){

					error_pass2 = true;

					$(this).addClass('error2');

					$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-3');

				}else{

					$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-3');

				}

			}



			//Revisa caracteres especiales

			if ( letrasynums2.indexOf( valor_char2 ) == -1 ){

				tiene_car_esp2 = true;

				$(this).addClass('error2');

			}



			if( valor_char2 == '' ){

				error_pass2= true;

				$(this).addClass('error2');

			}else{

				$(this).removeClass('error2');

			}



			pass2 += valor_char2;

		});





		//Revisa que tenga numeros y letras

		if( (tiene_letras2) && (tiene_numero2) ){

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-1');

		}else{

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-1');

			error_pass2= true;

		}



		//Revisa que tenga letras

		if(tiene_letras2){

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-2');

		}else{

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-2');

			error_pass2= true;

		}



		//Revisa que no tenga caracteres especiales

		if(tiene_car_esp2){

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-4');

			error_pass2= true;

		}else{

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-4');

			

		}



		//Revisa que no tenga numero de cliente

		if( pass2.indexOf(cliente2) != -1 ){

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-5');

			error_pass2= true;

		}else{

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-5');

		}



		$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-6');



		//Revisa que no tenga banamex

		if( pass2.indexOf(bnmx2) != -1 ){

			$('<div class="error-x" style="margin-left:-20px"></div>').insertBefore('.instruccion-7');

			error_pass2= true;

		}else{

			$('<div class="greenCheck" style="margin-left:-20px"></div>').insertBefore('.instruccion-7');	

		}



		

		if(error_pass2== true){

			$(clase_inputs2).parent().find('.error-x').removeClass('displayN');

			$(clase_inputs2).parent().find('.greenCheck').addClass('displayN');

		}else{

			$(clase_inputs2).parent().find('.greenCheck').removeClass('displayN');

			$(clase_inputs2).parent().find('.error-x').addClass('displayN');

		}

	}

	if( clase_inputs2 == '.char-confirm2'){

		var rev_pass2 = "";

		var rev_confirm_pass2 = "";



		$('.char-pass2').each(function(){

			rev_pass2 += $(this).val();

		});

		$(clase_inputs2).each(function(){

			rev_confirm_pass2 += $(this).val();

		});



		if(rev_confirm_pass2 == rev_pass2){

			$(clase_inputs2).parent().find('.greenCheck').removeClass('displayN');

			$(clase_inputs2).parent().find('.error-x').addClass('displayN');



		}else{

			$(clase_inputs2).parent().find('.error-x').removeClass('displayN');

			$(clase_inputs2).parent().find('.greenCheck').addClass('displayN');

		}

	}

	

} 

  

			 

 



