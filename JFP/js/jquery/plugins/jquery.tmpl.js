(function(i,f){var t=i.fn.domManip,h="_tmplitem",u=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,p={},e={},y,x={key:0,data:{}},w=0,q=0,g=[];function k(B,A,D,E){var C={data:E||(A?A.data:{}),_wrap:A?A._wrap:null,tmpl:null,parent:A||null,nodes:[],calls:c,nest:b,wrap:n,html:r,update:z};if(B){i.extend(C,B,{nodes:[],parent:A})}if(D){C.tmpl=D;C._ctnt=C._ctnt||C.tmpl(i,C);C.key=++w;(g.length?e:p)[w]=C}return C}i.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(A,B){i.fn[A]=function(C){var F=[],I=i(C),E,G,D,J,H=this.length===1&&this[0].parentNode;y=p||{};if(H&&H.nodeType===11&&H.childNodes.length===1&&I.length===1){I[B](this[0]);F=this}else{for(G=0,D=I.length;G<D;G++){q=G;E=(G>0?this.clone(true):this).get();i.fn[B].apply(i(I[G]),E);F=F.concat(E)}q=0;F=this.pushStack(F,A,I.selector)}J=y;y=null;i.tmpl.complete(J);return F}});i.fn.extend({tmpl:function(C,B,A){return i.tmpl(this[0],C,B,A)},tmplItem:function(){return i.tmplItem(this[0])},template:function(A){return i.template(A,this[0])},domManip:function(C,G,H,B){if(C[0]&&C[0].nodeType){var F=i.makeArray(arguments),E=C.length,D=0,A;while(D<E&&!(A=i.data(C[D++],"tmplItem"))){}if(E>1){F[0]=[i.makeArray(C)]}if(A&&q){F[2]=function(I){i.tmpl.afterManip(this,I,H)}}t.apply(this,F)}else{t.apply(this,arguments)}q=0;if(!y){i.tmpl.complete(p)}return this}});i.extend({tmpl:function(C,F,E,B){var D,A=!B;if(A){B=x;C=i.template[C]||i.template(null,C);e={}}else{if(!C){C=B.tmpl;p[B.key]=B;B.nodes=[];if(B.wrapped){s(B,B.wrapped)}return i(m(B,null,B.tmpl(i,B)))}}if(!C){return[]}if(typeof F==="function"){F=F.call(B||{})}if(E&&E.wrapped){s(E,E.wrapped)}D=i.isArray(F)?i.map(F,function(G){return G?k(E,B,C,G):null}):[k(E,B,C,F)];return A?i(m(B,null,D)):D},tmplItem:function(B){var A;if(B instanceof i){B=B[0]}while(B&&B.nodeType===1&&!(A=i.data(B,"tmplItem"))&&(B=B.parentNode)){}return A||x},template:function(B,A){if(A){if(typeof A==="string"){A=l(A)}else{if(A instanceof i){A=A[0]||{}}}if(A.nodeType){A=i.data(A,"tmpl")||i.data(A,"tmpl",l(A.innerHTML))}return typeof B==="string"?(i.template[B]=A):A}return B?(typeof B!=="string"?i.template(null,B):(i.template[B]||i.template(null,u.test(B)?B:i(B)))):null},encode:function(A){return(""+A).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});i.extend(i.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(A){p={}},afterManip:function v(C,A,D){var B=A.nodeType===11?i.makeArray(A.childNodes):A.nodeType===1?[A]:[];D.call(C,A);o(B);q++}});function m(A,E,C){var D,B=C?i.map(C,function(F){return(typeof F==="string")?(A.key?F.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+h+'="'+A.key+'" $2'):F):m(F,A,F._ctnt)}):A;if(E){return B}B=B.join("");B.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(G,H,F,I){D=i(F).get();o(D);if(H){D=a(H).concat(D)}if(I){D=D.concat(a(I))}});return D?D:a(B)}function a(B){var A=document.createElement("div");A.innerHTML=B;return i.makeArray(A.childNodes)}function l(A){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+i.trim(A).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(I,C,G,D,E,J,F){var L=i.tmpl.tag[G],B,H,K;if(!L){throw"Template command not found: "+G}B=L._default||[];if(J&&!/\w$/.test(E)){E+=J;J=""}if(E){E=j(E);F=F?(","+j(F)+")"):(J?")":"");H=J?(E.indexOf(".")>-1?E+J:("("+E+").call($item"+F)):E;K=J?H:"(typeof("+E+")==='function'?("+E+").call($item):("+E+"))"}else{K=H=B.$1||"null"}D=j(D);return"');"+L[C?"close":"open"].split("$notnull_1").join(E?"typeof("+E+")!=='undefined' && ("+E+")!=null":"true").split("$1a").join(K).split("$1").join(H).split("$2").join(D?D.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(N,M,O,P){P=P?(","+P+")"):(O?")":"");return P?("("+M+").call($item"+P):N}):(B.$2||""))+"_.push('"})+"');}return _;")}function s(B,A){B._wrap=m(B,true,i.isArray(A)?A:[u.test(A)?A:i(A).html()]).join("")}function j(A){return A?A.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function d(A){var B=document.createElement("div");B.appendChild(A.cloneNode(true));return B.innerHTML}function o(G){var I="_"+q,B,A,E={},F,D,C;for(F=0,D=G.length;F<D;F++){if((B=G[F]).nodeType!==1){continue}A=B.getElementsByTagName("*");for(C=A.length-1;C>=0;C--){H(A[C])}H(B)}function H(O){var L,N=O,M,J,K;if((K=O.getAttribute(h))){while(N.parentNode&&(N=N.parentNode).nodeType===1&&!(L=N.getAttribute(h))){}if(L!==K){N=N.parentNode?(N.nodeType===11?0:(N.getAttribute(h)||0)):0;if(!(J=p[K])){J=e[K];J=k(J,p[N]||e[N],null,true);J.key=++w;p[w]=J}if(q){P(K)}}O.removeAttribute(h)}else{if(q&&(J=i.data(O,"tmplItem"))){P(J.key);p[J.key]=J;N=i.data(O.parentNode,"tmplItem");N=N?N.key:0}}if(J){M=J;while(M&&M.key!=N){M.nodes.push(O);M=M.parent}delete J._ctnt;delete J._wrap;i.data(O,"tmplItem",J)}function P(Q){Q=Q+I;J=E[Q]=(E[Q]||k(J,p[J.parent.key+I]||J.parent,null,true))}}}function c(C,A,D,B){if(!C){return g.pop()}g.push({_:C,tmpl:A,item:this,data:D,options:B})}function b(A,C,B){return i.tmpl(i.template(A),C,B,this)}function n(C,A){var B=C.options||{};B.wrapped=A;return i.tmpl(i.template(C.tmpl),C.data,B,C.item)}function r(B,C){var A=this._wrap;return i.map(i(i.isArray(A)?A.join(""):A).filter(B||"*"),function(D){return C?D.innerText||D.textContent:D.outerHTML||d(D)})}function z(){var A=this.nodes;i.tmpl(null,null,null,this).insertBefore(A[0]);i(A).remove()}})(jQuery);