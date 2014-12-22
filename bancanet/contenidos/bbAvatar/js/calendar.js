var varDeshabilitaDatePickerUI = false;

 

function CrearCal(Element, Format, dayNamesF, monthNamesF, todaySel, minD, maxD, marginTop, weekEnd , margLeft){

		// Datepicker

		$(Element).next().hide();

		varTodayDatePickerUI = todaySel;

		if(weekEnd != undefined && weekEnd != ''){

			var deshabilita = true;

			varDeshabilitaDatePickerUI = true;

			var dias = new Array();

			switch(weekEnd){

				case 'S':

					dias = [6];

				break;

				case 'D':

					dias = [0];

				break;

				case 'A':

					dias = [0,6];

				break;

			}

		}else{

			var deshabilita = false;

		}

		

		if(typeof(minD) == "number"){

			var minDat = new Date();

			minDat.setTime(todaySel.getTime()-minD*24*60*60*1000);

		}else{

			var minDat = minD;

		}

		if(typeof(maxD) == "number"){

			var maxDat = new Date(); 

			maxDat.setTime(todaySel.getTime()+maxD*24*60*60*1000);

		}else{

			var maxDat = maxD;

		}

		

		$(Element).datepicker({

			dateFormat: Format,

			showOn: 'both',buttonImage: '../../bbAvatar/images/calendar.gif', buttonImageOnly: true,

			dayNamesMin:dayNamesF,

			monthNames: monthNamesF,

			changeMonth: false,

			changeYear: false,

			maxDate: maxDat,

			minDate: minDat,

			selectDefaultDate: true,

			defaultDate: todaySel,

			gotoCurrent: true,

			yearRange: '-0:+0',

			beforeShowDay: deshabilitarDias, 

			beforeShow: function(input, inst){ 

				$('.ui-datepicker').css("margin-top", marginTop + "px");

				if(margLeft!=undefined)

					$('.ui-widget').css("margin-left", margLeft + "px");

			}

		});

		

		$(".ui-datepicker-trigger").click(function(){

			setTimeout(function(){deshabilitarCabeceras();},50);

			asignarEventos();

		});

		

		$(Element).click(function(){

			deshabilitarCabeceras();

			asignarEventos();

		});

		

		function deshabilitarDias(date) {

			if(deshabilita){

				for(var i = 0; i<dias.length; i++){

					if(date.getDay() == dias[i]){

						return [false,""];

					}

				}

				return [true, ""];

			}else{

				return [true, ""];

			}

			

		}

		

		function deshabilitarCabeceras(){

			if(varDeshabilitaDatePickerUI){

				switch(weekEnd){

					case 'S':

						$('th.ui-datepicker-week-end:eq(0) span').removeClass("ui-state-disabled");

						$('th.ui-datepicker-week-end:eq(1) span').addClass("ui-state-disabled");

					break;

					case 'D':

						$('th.ui-datepicker-week-end:eq(1) span').removeClass("ui-state-disabled");

						$('th.ui-datepicker-week-end:eq(0) span').addClass("ui-state-disabled");

					break;

					case 'A':

						$('th.ui-datepicker-week-end:eq(0) span').addClass("ui-state-disabled");

						$('th.ui-datepicker-week-end:eq(1) span').addClass("ui-state-disabled");

					break;

				}

			}else{

				$('th.ui-datepicker-week-end span').removeClass("ui-state-disabled");

			}

		}

		

		function asignarEventos(){

			$(".ui-datepicker-header *").click(function(){

				setTimeout(function(){deshabilitarCabeceras();asignarEventos();},5);

			});

		}



}



function EliminarCal(Element){

	$(Element).val("");

	$(Element).datepicker("destroy");

	$(Element).next().show();

}



function DeshabilitarCal(Element){

	$(Element).datepicker("disable");

}



function HabilitarCal(Element){

	$(Element).datepicker("enable");

}