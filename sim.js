$(document).ready(function(){

	var params = location.search.split("?")[1];

	params = params.split("&");

	var subapp_path = params[0];

	var title_section = params[1];	

	var header_path = params[2];

	var footer_path = params[3];	

	var left_menu_path = null;

	if (params.length == 5){

		left_menu_path = params[4];

	}

	

	$("#title-section h1").load("titles/"+title_section+".html");

	$("#subapp-box").load(subapp_path+'.html');

	$("#header").load("headers/"+header_path+".html");

	$("#footer").load("footers/"+footer_path+".html");



	if (left_menu_path != null){

		$('#content').prepend('<div id="left-menu" class="float-left margin-top25"></div><div id="shadow">&nbsp;</div>');

		$("#left-menu").load("left_menus/"+left_menu_path+".html");	

	}else{

		$("#subapp-box").addClass("noleftmenu");

	}

});