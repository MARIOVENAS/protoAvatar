var rutaImgs = "url(https://www.banamex.com/resources/bancanets/bnp/banners/esp/SpriteNegocioEsp2.gif) no-repeat ";

var rutaLink = "https://www.banamex.com/bannersbancanet/";



var menus = [

 	[1,"Consultas",

		[

			[0,"Saldos","especialMulti(); DoSubmit('Mul_TodasCtas/01b-MultiSaldos_REAL.htm');"],

			[0,"Historial de Banca Electr\u00f3nica","DoSubmit('Consulta de operaciones/historial.htm');btns_titulo([1,2]);"]

		], "", ""

	],

	[1,"Transferencias y Pagos",

		[
		 	[0,"Resumen","DoSubmit('Resumen_Transferencias_y_Pagos/Resumen.html');",

				[

					[0,"Operaciones frecuentes","cargaDoc('blanco.html');btns_titulo([1,2]);","quehacer1"],

					[0,"Domiciliaci&oacute;n","cargaDoc('blanco.html');btns_titulo([1,2]);","quehacer1"],

					[0,"Horarios","cargaDoc('blanco.html');btns_titulo([1,2]);","quehacer1"]

				]

			],

			[1,"Transferencias","DoSubmit('Transferencias_y_Pagos_Propias/Transferencia_Cuentas_Propias.html');",

				[

					[0,"Cuentas propias Banamex","DoSubmit('Transferencias_y_Pagos_Propias/Transferencia_Cuentas_Propias.html');","quehacer5"],

					[0,"Otras cuentas","DoSubmit('Transferencias_y_Pagos_Otras_Cuentas/Otras_Cuentas.html');","quehacer4"]

				]

			],

			[1,"Pagos","DoSubmit('Transferencia y Pagos Tarjetas/Tarjetas_de_Credito.html');",

				[

					[0,"Tarjetas de cr&eacute;dito","DoSubmit('Transferencia y Pagos Tarjetas/Tarjetas_de_Credito.html');","quehacer4"],

					[0,"Servicios","DoSubmit('Pago de Servicios/Servicios.html');btns_titulo([1,2]);","quehacer4"],

					[0,"Impuestos","DoSubmit('Valida Impuestos Reg/Impuestos.html');btns_titulo([1,2]);","quehacer5"],

					[0,"Cr\u00e9ditos","DoSubmit('Pagos Credito/Creditos.html');","quehacer5"],

					[0,"Domiciliaci\u00f3n","DoSubmit('Domiciliacion_Consulta_Baja_Instrucciones/Domiciliacion.html');","quehacer6"],

					[0,"Comprobantes","DoSubmit('Comprobantes GDF e Impuestos/Comprobantes.html');btns_titulo([1,2]);","quehacer5"]

				]

			]

		], rutaImgs+"0px 0px", rutaLink+"transferencias/"

	],

	[1,"Inversiones",

		[

		 	[0,"Resumen","DoSubmit('Resumen de Inversiones/resumen_inversiones.html');btns_titulo([1,2]);"],

			[3,"Integral / Perfiles","DoSubmit('Inversion Integral/integral_perfiles.html');btns_titulo([1,2]);","quehacer10"],

			[3,"Dep&oacute;sitos a plazo","DoSubmit('Inversion Pagare/deposito_plazo.html');btns_titulo([1,2]);"],

			[3,"Fondos de Inversi&oacute;n","DoSubmit('Compra Venta Fondos Inversion/fondos_inversion.html');btns_titulo([1,2]);"],

			[3,"Fondos Horizonte","DoSubmit('Sociedades de Inversion/fondos_horizonte.html');btns_titulo([1,2]);","quehacer10"],

			[3,"Banca Patrimonial","DoSubmit('Bancatrade en BancaNet/Bpatrimonial.htm');btns_titulo([1,2]);","quehacer10"],

			[3,"Empresarial Banamex","DoSubmit('Inversion Empresarial/inversion_empresarial.html');btns_titulo([1,2]);","quehacer10"]

		], rutaImgs+"0px -240px", rutaLink+"inversiones/"

	],

	[1,"Afore Banamex",

		[

		 	[1,"","validaStatusAfore();",

				[

					[0,"Estado de cuenta","DoSubmit('Consulta_Estados_de_Cuenta_Afore/Edo_de_Cuenta.html');","quehacer10"],

					[0,"Aportaciones ahorro voluntario","DoSubmit('Aportaciones_Afore/Aportaciones_Ahorro_Voluntario.html');","quehacer10"],

					[0,"Retiros","DoSubmit('Retiro_Afore/Retiros.html');","quehacer10"],

					[0,"Actualizar domicilio","DoSubmit('Actualiza_Domicilio_Afore/Actualizar_Domicilio.html');","quehacer10"]

				]

			]

		], rutaImgs+"0px -80px", rutaLink+"afore/"

	],

	[1,"Administraci&oacute;n",

		[

		 	[1,"Mi perfil","DoSubmit('Cambio PIN/cambio_clave_acceso.html');btns_titulo([1,2]);",

				[

					[0,"Cambio de claves de acceso","DoSubmit('Cambio PIN/cambio_clave_acceso.html');btns_titulo([1,2]);","quehacer1"],

					[0,"Cambio de PIN de tarjeta de d&eacute;bito o cr&eacute;dito","DoSubmit('Cambio PIN - TC/cambio_pin_tc.html');btns_titulo([1,2]);","quehacer1"],

					[0,"Consulta del contrato Banca Electr&oacute;nica","window.open('spanishdir/contrato_marzo_2011.pdf', 'Contrato', 'scrollbars=YES,menubar=NO,resizable=YES,width=800,height=600');","quehacer5"]

				]

			],

			[1,"Cuentas propias Banamex","DoSubmit('Ocultar Mostrar Cuentas/cuentas_propias.html');btns_titulo([1,2]);",

				[

					[0,"Cuentas","DoSubmit('Ocultar Mostrar Cuentas/cuentas_propias.html');btns_titulo([1,2]);","quehacer9"],

					[0,"Tarjetas","DoSubmit('ZADT/adm_de_tarjetas.html');btns_titulo([1,2]);","quehacer9"],

					[0,"Chequeras","DoSubmit('Solicitud_de_Chequeras/Chequeras.html');btns_titulo([1,2]);","quehacer9"]

				]

			],

			[1,"Otras cuentas","DoSubmit('Alta Otras Cuentas/otras_cuentas.html');btns_titulo([1,2]);",

				[

					[0,"Alta de cuentas","DoSubmit('Alta Otras Cuentas/otras_cuentas.html');btns_titulo([1,2]);","quehacer9"],

					[0,"Administraci&oacute;n de cuentas<br />(Actualizaci&oacute;n de cuentas)","DoSubmit('Consulta de Cuentas ABC/administracion_cuentas.html');btns_titulo([1,2]);","quehacer9"]

				]

			],

			[0,"Notificaciones Banamex","DoSubmit('EDeliveryEdoCta/notificaciones_banamex.html');btns_titulo([1,2]);"]

		], rutaImgs+"0px -160px", rutaLink+"claves/"

	]

]



var btnAyuda =   '<div id="btn_ayuda" class="Ayuda saldos_btn1 showtooltip"></div>';	

var btnImprimir =   '<div id="btn_imp" class="Imprimir saldos_btn2 showtooltip"></div>';

var	btnDescargar =   '<div id="btn_exp" class="Descargar saldos_btn7 showtooltip"></div>';

var btnPDF = '<div id="btn_pdf" class="PDF saldos_btn_PDF showtooltip"></div>';



var tit4Niv = "&iquest;Qu&eacute; deseas hacer?";



var altPag = ['D\u00e1 de alta tus pagos','SaltoTransaccion(4,2)'];

var admChq = ['Administrar chequeras','SaltoTransaccion(4,1,2)'];

var iraMov = ['Ir a movimientos','SaltoTransaccion(0,1)'];

var iraDet = ['Ir a detalle de cuentas','SaltoTransaccion(0,0)'];

var conNot = ['Configurar tus notificaciones','SaltoTransaccion(4,3)'];

var hstBel = ['Ver historial de Banca Electr&oacute;nica','SaltoTransaccion(0,1)'];

var pndAut = ['Ver pendientes de autorizar','SaltoTransaccion(0,0,0)'];

var altCta = ['Dar de alta una cuenta','SaltoTransaccion(4,2)'];

var domPag = ['Domicilia un pago',"SaltoTransaccion(1,2,4,'Domiciliacion_Consulta_Baja_Instrucciones/domiciliar_Pago.html')"];

var altSer = ['Dar de alta un servicio','SaltoTransaccion(4,2)'];

var verSal = ['Ver saldos','SaltoTransaccion(0,0)'];

var reaTra = ['Realizar transferencias','SaltoTransaccion(1,1)'];

var hacPag = ['Hacer pagos','SaltoTransaccion(1,2)'];



function especialMulti(){

	try{document.getElementById("main").contentWindow.cargando();}catch(exp){}

}

function setFecha(fecha){

			var fechaCompleta = fecha;

			var diasSistema = ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'];

			var mesesSistema = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

			var fechaFormato = fechaCompleta.substring(0,8).split('/');

			var horaFormato = fechaCompleta.substring(12,20);

			var fechaSistema = new Date(20 + fechaFormato[2], fechaFormato[1] - 1, fechaFormato[0]);

			$("#fecha",window.parent.document).html(diasSistema[fechaSistema.getDay()]+' '+fechaSistema.getDate()+' de '+mesesSistema[fechaSistema.getMonth()]+' de 20'+fechaFormato[2]+', '+horaFormato);

			

		}