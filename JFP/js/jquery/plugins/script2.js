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

		 

		 

		 $("#listaHoras3").show();

		 $(".scroll_y").tinyscrollbar_update();

		 $("#listaHoras3 li").click(function(){

		var str = $(this).text();

		 $("#selHoras").val(str);

		 $('#errorPagos5').hide();

		 $("#selHoras").removeClass("revisar3");	

		 $("#listaHoras3").hide();

		 $("#insHprog, #insHresp").text(str)	



    });	

} 	



	

function closeDropdown(){

		$('body').click(function(){

        

		$('#listaHoras3').hide();

	

		

		 

    });

    $('body').delegate('#selHoras, .scrollbar',

        'click',function(){

                $('#listaHoras3').show();

				

				

    });

} 	

