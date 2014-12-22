var rutaImgs = "https://www.banamex.com/resources/bancanets/bnp/banners/eng/";

var rutaLink = "https://www.banamex.com/bannersbancanet/";



var menus = [

 	[1,"Overview",

		[

			[2,"Balance","DoSubmit('Mul_TodasCtas');"],

			[0,"Statements  and Transactions","DoSubmit('Consulta Movimientos');btns_titulo([1,2]);"],

			[0,"e-Banking history","DoSubmit('Consulta de operaciones');btns_titulo([1,2]);"]

		], "", ""

	],

	[1,"Transfers and Payments",

		[

		 	[0,"Summary","DoSubmit('Resumen Transferencias y Pagos');",

				[

					[0,"Frequent transactions","cargaDoc('blanco.html');btns_titulo([1,2]);","quehacer1"],

					[0,"Payment by direct billing","cargaDoc('blanco.html');btns_titulo([1,2]);","quehacer1"],

					[0,"Schedule","cargaDoc('blanco.html');btns_titulo([1,2]);","quehacer1"]

				]

			],

			[1,"Transfers","DoSubmit('Transferencias y Pagos Propias');",

				[

					[0,"Banamex own accounts ","DoSubmit('Transferencias y Pagos Propias');","quehacer5"],

					[0,"Other accounts","DoSubmit('Transferencias y Pagos Otras Cuentas');","quehacer4"]

				]

			],

			[1,"Payments","DoSubmit('Transferencias y Pagos Tarjetas');",

				[

					[0,"Credit cards","DoSubmit('Transferencias y Pagos Tarjetas');","quehacer4"],

					[0,"Bills","DoSubmit('Pago de Servicios');btns_titulo([1,2]);","quehacer4"],

					[0,"Loans","DoSubmit('PAGOS CREDITO');","quehacer5"],

					[0,"Payment by direct billing","DoSubmit('Domiciliacion Consulta Baja Instrucciones');","quehacer6"],

					[0,"Receipts","DoSubmit('Comprobantes GDF e Impuestos');btns_titulo([1,2]);","quehacer5"]

				]

			]

		], rutaImgs+"transferencias.gif", rutaLink+"transferencias/"

	],

	[1,"Investments",

		[

		 	[0,"Summary","DoSubmit('Resumen de Inversiones');btns_titulo([1,2]);"],

			[3,"Integral / Perfiles","DoSubmit('Inversion Integral');btns_titulo([1,2]);","quehacer10"],

			[3,"Fixed Income","DoSubmit('Inversion Pagare');btns_titulo([1,2]);"],

			[3,"Mutual Funds","DoSubmit('Compra Venta Fondos Inversion');btns_titulo([1,2]);"],

			[3,"Horizont Mutual Funds","DoSubmit('Sociedades de Inversion');btns_titulo([1,2]);","quehacer10"],

			[0,"Patrimonial Banking","DoSubmit('Bancatrade en BancaNet');btns_titulo([1,2]);"]

		], rutaImgs+"inversiones.gif", rutaLink+"inversiones/"

	],

	[1,"Afore Banamex",

		[

		 	[1,"","validaStatusAfore();",

				[

					[0,"Statement","DoSubmit('Consulta Estados de Cuenta Afore');","quehacer10"],

					[0,"Voluntary saving contributions","DoSubmit('Aportaciones Afore');","quehacer10"],

					[0,"Withdrawals","DoSubmit('Retiro Afore');","quehacer10"],

					[0,"Update address","DoSubmit('Actualiza Domicilio Afore');","quehacer10"]

				]

			]

		], rutaImgs+"afore.gif", rutaLink+"afore/"

	],

	[1,"Management",

		[

		 	[1,"My Profile","DoSubmit('Cambio PIN');btns_titulo([1,2]);",

				[

					[0,"Password change","DoSubmit('Cambio PIN');btns_titulo([1,2]);","quehacer1"],

					[0,"PIN Credit or Debit card change","DoSubmit('Cambio PIN - TC');btns_titulo([1,2]);","quehacer1"],

					[0,"Electronic Banking Contract","window.open('/englishdir/contrato_marzo_2011.pdf', 'Contrato', 'scrollbars=YES,menubar=NO,resizable=YES,width=800,height=600');","quehacer5"]

				]

			],

			[1,"Banamex own accounts","DoSubmit('Ocultar Mostrar Cuentas');btns_titulo([1,2]);",

				[

					[0,"Accounts","DoSubmit('Ocultar Mostrar Cuentas');btns_titulo([1,2]);","quehacer9"],

					[0,"Cards","DoSubmit('ZADT');btns_titulo([1,2]);","quehacer9"],

					[0,"Checkbooks","DoSubmit('Solicitud de Chequeras');btns_titulo([1,2]);","quehacer9"]

				]

			],

			[1,"Other accounts","DoSubmit('Alta Otras Cuentas');btns_titulo([1,2]);",

				[

					[0,"Account registration","DoSubmit('Alta Otras Cuentas');btns_titulo([1,2]);","quehacer9"],

					[0,"Account Management","DoSubmit('Consulta de Cuentas ABC');btns_titulo([1,2]);","quehacer9"]

				]

			],

			[0,"Banamex Alerts","DoSubmit('EDeliveryEdoCta');btns_titulo([1,2]);"]

		], rutaImgs+"claves.gif", rutaLink+"claves/"

	]

]



var btnAyuda =   '<div id="btn_ayuda" class="Help saldos_btn1 showtooltip"></div>';	

var btnImprimir =   '<div id="btn_imp" class="Print saldos_btn2 showtooltip"></div>';

var	btnDescargar =   '<div id="btn_exp" class="Download saldos_btn7 showtooltip"></div>';

var btnPDF = '<div id="btn_pdf" class="PDF saldos_btn_PDF showtooltip"></div>';



var tit4Niv = "What do you want to do?";



var altPag = ['Set up your payments','SaltoTransaccion(4,2)'];

var admChq = ['Checkbooks managment','SaltoTransaccion(4,1,2)'];

var iraMov = ['Go to movements','SaltoTransaccion(0,1)'];

var iraDet = ['Go to account details','SaltoTransaccion(0,0)'];

var conNot = ['Set up your alerts','SaltoTransaccion(4,3)'];

var hstBel = ['See Electronic Banking history','SaltoTransaccion(0,2)'];

var pndAut = ['See order pending','SaltoTransaccion(0,0,0)'];

var altCta = ['Register an account','SaltoTransaccion(4,2)'];

var domPag = ['Adress a payment',"SaltoTransaccion(1,2,4,'Domiciliacion Alta')"];

var altSer = ['Set up a bill','SaltoTransaccion(4,2)'];

var verSal = ['See balances','SaltoTransaccion(0,0)'];

var reaTra = ['Make transfers','SaltoTransaccion(1,1)'];

var hacPag = ['Make Payments','SaltoTransaccion(1,2)'];



function contenidoVistaGeneral(tipo){

	var str;

	switch ( tipo ){

		case 0:{

			str = '<div class="panelDeContenedor1 paddingB20">'

			+'<a href="#" onclick="abrirVentana(\'https://www.banamex.com/bannersbancanet/saldos_1/\');"><div class="banner_peque_1_en">'

			+'<div class="panelDeContenedor1_c1_t3">'

			+'</div>'

			+'</div></a>'

			+'<a href="#" onclick="abrirVentana(\'https://www.banamex.com/bannersbancanet/saldos_2/\');"><div class="banner_peque_2_en">'

			+'<div class="panelDeContenedor1_c1_t3">'

			+'</div>'

			+'</div></a>'

			+'</div>'

			+'<div class="panelDeContenedor2">'

			+'<div class="encaPanelDe1">Banamex recommends:</div>'

			+'<div class="textPanelDe1"><a href="#">Afore Banamex:</a> With lower fees and better returns than daily strengthen your  heritage.</div>'

			+'<div class="bgPanelSeparacion"></div>'

			+'<div class="textPanelDe1"><a href="#">Banamex Notifications:</a> Receive in your e-mail or cell phone alerts of all the moves you make to your accounts.</div>'

			+'<div class="bgPanelSeparacion"></div>'

			+'<div class="textPanelDe1"><a href="#">Banamex Payment by direct billing:</a> Pay your services with automatic charge to your debit card or checking account and forget about the dates of payment.</div>'

			+'</div>'

			+'<a href="#" onclick="abrirVentana(\'https://www.banamex.com/bannersbancanet/saldos_3/\');"><div class="bannerGrande_en">'

			+'</div></a>'

			+'</div>';

			break;

		}

	}

	return str;

}