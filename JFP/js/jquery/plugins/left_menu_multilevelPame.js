   $('#accordion-1').dcAccordion({

            eventType: 'click',

            autoClose: true,

            saveState: true,

            disableLink: false,

            speed: 'slow',

            showCount: false,

            autoExpand: false,

            cookie  : 'dcjq-accordion-1',

            classExpand  : 'dcjq-current-parent'

    });









    var sub_a = $(".left_submenu a:first").parent().parent().parent();







     sub_a.children().children().removeAttr("style");



     $(".sub_menuNieto a").parent().parent().parent().children().children().removeAttr("style");

     $(".sub_menuNieto2 a").parent().parent().parent().children().children().removeAttr("style");

     $(".sub_menuNieto3 a").parent().parent().parent().children().children().removeAttr("style");



    $('.left_submenu li a').click(function() {

        $(this).parent().parent().siblings().removeClass('active');

        $(".left_submenu li a").parent().parent().parent().children('a').children('span').css({'background-image': 'url(JFP/regional/images/left_menu/abierto.png)', 

            'background-repeat': 'no-repeat'

        }); 



        $(".left_submenu li a").parent().parent().parent().children('a').css('font-weight','bold');



    });



    $('.dcjq-parent-li > a').click(function(){

        

        sub_a.children().children().removeAttr("style");

        sub_a.children('a').removeAttr("style");

    });



    /*$('#operaciones').click(function(){

        

        $('li.dcjq-parent-li a.dcjq-parent').removeAttr("style");

        $('li.dcjq-parent-li a.dcjq-parent span.dcjq-icon').css({'background-image': 'url(JFP/regional/images/left_menu/cerrado_1n.png)', 

            'background-repeat': 'no-repeat'

         }); 

    });



    $('#comprobantes').click(function(){

        

        $('li.dcjq-parent-li a.dcjq-parent').removeAttr("style");

         $('li.dcjq-parent-li a.dcjq-parent span.dcjq-icon').css({'background-image': 'url(JFP/regional/images/left_menu/cerrado_1n.png)', 

            'background-repeat': 'no-repeat'

         }); 

    });*/



    $('.sub_menuNieto li a').click(function() {

        $(this).parent().parent().parent().parent().siblings().addClass("boldActive");

          $(this).parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto_2n.png)', 

            'background-repeat': 'no-repeat'

         }); 



        $('.sub_menuNieto li a').parent().parent().parent().parent().parent().children('a').removeClass("active");



        $('.sub_menuNieto li a').parent().parent().parent().children('a').addClass('boldActiveNieto');

        

    });





     $('.sub_menuNieto2 a').click(function() {

        $(this).parent().parent().parent().parent().siblings().addClass("boldActive");

          $(this).parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto_2n.png)', 

            'background-repeat': 'no-repeat'

         }); 



        $('.sub_menuNieto2 a').parent().parent().parent().parent().parent().children('a').removeClass("active");



        $('.sub_menuNieto2 a').parent().parent().parent().children('a').addClass('boldActiveNieto');



    });



     $('.sub_menuNieto3 a').click(function() {

        $(this).parent().parent().parent().parent().siblings().addClass("boldActive");

          $(this).parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto_2n.png)', 

            'background-repeat': 'no-repeat'

         }); 



        $('.sub_menuNieto3 a').parent().parent().parent().parent().parent().children('a').removeClass("active");



        $('.sub_menuNieto3 a').parent().parent().parent().children('a').addClass('boldActiveNieto');

        



    });





   

    $('.flechas_sublevel').click(function(){

        $(this).parent().parent().parent().children('a:first').addClass("boldActive")



    });



    $('.quit_Class').click(function(){

        $(this).removeClass("boldActive");

    });





  





    /******* LEFT MENU 2 ************/



    $(".left_submenu_2 li a").parent().parent().parent().children().children().removeAttr("style");



    $('.left_submenu_2 li a').click(function() {

        $(this).parent().parent().siblings().removeClass('active');

        $(".left_submenu_2 li a").parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto_2n.png)', 

            'background-repeat': 'no-repeat'

            }); 



        $(".left_submenu_2 li a").parent().parent().parent().children('a:first').css('font-weight','bold');



    });



    $('.dcjq-parent-li > a').click(function(){

        $(".left_submenu_2 li a:first").parent().parent().parent().children().children().removeAttr("style");



        $(".left_submenu_2 li a:first").parent().parent().parent().children('a').removeAttr("style");

    });





    $('.sub_menuNieto li a').click(function(){

        $('.left_submenu2 li #misTarjBanamex span').css({'background-image': 'url(JFP/regional/images/left_menu/abierto_2n.png)', 

            'background-repeat': 'no-repeat'

         });



         /*$('.sub_menuNieto a').parent().parent().parent().children('a').children().attr('style','background-image: url("JFP/regional/images/left_menu/abierto_2n.png") !important;') */

    });



       $('.sub_menuNieto2 li a').click(function(){

        $('.sub_menuNieto2 li a').parent().parent().parent().children('a.active').children('span').css({'background-image': 'url(JFP/regional/images/left_menu/abierto_2n.png)', 

            'background-repeat': 'no-repeat'

         });



        /* $('.sub_menuNieto2 a').parent().parent().parent().children('a').children().attr('style','background-image: url("JFP/regional/images/left_menu/abierto_2n.png") !important;') */

    });

       



   /* $('.sub_menuNieto3 a').click(function(){

        $('.sub_menuNieto3 a').parent().parent().parent().children('a').children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto_2n.png)', 

            'background-repeat': 'no-repeat'

         });



         $('.sub_menuNieto3 a').parent().parent().parent().children('a').children().attr('style','background-image: url("JFP/regional/images/left_menu/abierto_2n.png") !important; background-repeat: no-repeat;') 

    });*/







    $(".sacarBoldFutura").click(function(){

        $(this).removeClass('boldActiveNieto');

        $(".sacarBoldRecurrentes, .sacarBoldLimite").removeClass('boldActiveNieto');

    })



    $(".sacarBoldRecurrentes").click(function(){

        $(this).removeClass('boldActiveNieto');

        $(".sacarBoldFutura, .sacarBoldLimite").removeClass('boldActiveNieto');

    })



    $(".sacarBoldLimite").click(function(){

        $(this).removeClass('boldActiveNieto');

        $(".sacarBoldFutura, .sacarBoldRecurrentes").removeClass('boldActiveNieto');

    })





    /******* LEFT MENU 3 ************/



   /* $(".left_submenu_3 a").parent().parent().parent().children().children().removeAttr("style");



    $('.left_submenu_3 a').click(function() {

        $(this).parent().parent().siblings().removeClass('active');

        $(".left_submenu_3 a").parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto.png)', 

            'background-repeat': 'no-repeat'

    }); 



        $(".left_submenu_3 a").parent().parent().parent().children('a').css('font-weight','bold');



    });



    $('.dcjq-parent-li > a').click(function(){

        $(".left_submenu_3 a").parent().parent().parent().children().children().removeAttr("style");



        $(".left_submenu_3 a").parent().parent().parent().children('a').removeAttr("style");

    });*/



    /******* LEFT MENU 4 ************/



   /* $(".left_submenu_4 a").parent().parent().parent().children().children().removeAttr("style");



    $('.left_submenu_4 a').click(function() {

        $(this).parent().parent().siblings().removeClass('active');

        $(".left_submenu_4 a").parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto.png)', 

            'background-repeat': 'no-repeat'

    }); 



        $(".left_submenu_4 a").parent().parent().parent().children('a').css('font-weight','bold');



    });



    $('.dcjq-parent-li > a').click(function(){

        $(".left_submenu_4 a").parent().parent().parent().children().children().removeAttr("style");



        $(".left_submenu_4 a").parent().parent().parent().children('a').removeAttr("style");

    });*/



      /******* LEFT MENU 5 ************/



    /*$(".left_submenu_5 a").parent().parent().parent().children().children().removeAttr("style");



    $('.left_submenu_5 a').click(function() {

        $(this).parent().parent().siblings().removeClass('active');

        $(".left_submenu_5 a").parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto.png)', 

            'background-repeat': 'no-repeat'

    }); 



        $(".left_submenu_5 a").parent().parent().parent().children('a').css('font-weight','bold');



    });





    $('.dcjq-parent-li > a').click(function(){

        $(".left_submenu_5 a").parent().parent().parent().children().children().removeAttr("style");



        $(".left_submenu_5 a").parent().parent().parent().children('a').removeAttr("style");



        /*$('.flechas_sublevel').removeClass('boldActiveNieto');

        $('.flechas_sublevel span').removeAttr('style');

        $('.quit_Class').removeClass('boldActive');

    });*/





    









     /******* LEFT MENU 6 ************/



    /*$(".left_submenu_6 a").parent().parent().parent().children().children().removeAttr("style");



    $('.left_submenu_6 a').click(function() {

        $(this).parent().parent().siblings().removeClass('active');

        $(".left_submenu_6 a").parent().parent().parent().children().children().css({'background-image': 'url(JFP/regional/images/left_menu/abierto.png)', 

            'background-repeat': 'no-repeat'

    }); 



        $(".left_submenu_6 a").parent().parent().parent().children('a').css('font-weight','bold');



    });



    $('.dcjq-parent-li > a').click(function(){

        $(".left_submenu_6 a").parent().parent().parent().children().children().removeAttr("style");



        $(".left_submenu_6 a").parent().parent().parent().children('a').removeAttr("style");

    });*/

    



    /*** LAST FIX's ***/



    $(".link_home").click(function(){

        $(".dcjq-current-parent .boldActive").removeClass("boldActive");

        $(".dcjq-parent-li .boldActiveNieto").removeClass("boldActiveNieto"); 

        $(".dcjq-parent-li .flechas_sublevel .dcjq-icon").removeAttr('style');

    });



   



$(".sacar_bold_anietos").click(function(){

    $(".boldActiveNieto").removeClass("boldActiveNieto");

});

    

    /*$('.dcjq-parent-li').click(function(){

        $('#accordion-1 > li').removeClass('active-children');

    });*/