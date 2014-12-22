





function busquedaGooObj(){

    this.pagina=0;

    this.numPaginas= searcher.cursor.pages.length; // NUMERO DE PAGINAS

    this.resultadosEstimadosEncontrados=searcher.cursor.estimatedResultCount;// RESULTADOS ESTIMADOS ENCONTRADOS

    this.pintarNumeroPag(); 

        

}



function busquedaGoo_pintarNumeroPag(){

    var numPag="";

    for(var i=1 ; i<=this.numPaginas;i++)

      numPag += "<li><a href='javascript:objBus.cambiarPagina("+i+"-1)'>"+i+"</a></li>";

    $("#pagination ul").html(numPag)  ;

    $("#resultados_busqueda").html(this.resultadosEstimadosEncontrados)  ;

    $("#pagination .prev").addClass('inactivo');

}



function busquedaGoo_next(){

    this.pagina++;

    if(this.pagina<this.numPaginas ) 

         this.cambiarPagina(this.pagina) ;//searcher.gotoPage.call(searcher, this.pagina);

    else   

      this.pagina=this.numPaginas-1;  

}



function busquedaGoo_prev(){

    this.pagina--;

    if(this.pagina>=0)

         this.cambiarPagina(this.pagina)

    else    

       this.pagina=0; 

}



function  busquedaGoo_cambiarPagina(indice){

    

     this.pagina=indice;

      searcher.gotoPage.call(searcher, indice);

     $("#pagination ul a").removeClass('hover');

     $("#pagination ul a").eq(this.pagina).addClass('hover')

    

     if(this.pagina==0){

        $("#pagination .prev").addClass('inactivo');

        $("#pagination .next").removeClass('inactivo');

     }

      if(this.pagina==this.numPaginas-1){

        $("#pagination .prev").removeClass('inactivo');

        $("#pagination .next").addClass('inactivo');

     }

      

        

}

 

busquedaGooObj.prototype.pintarNumeroPag = busquedaGoo_pintarNumeroPag;

busquedaGooObj.prototype.next = busquedaGoo_next;

busquedaGooObj.prototype.prev = busquedaGoo_prev;

busquedaGooObj.prototype.cambiarPagina = busquedaGoo_cambiarPagina;













