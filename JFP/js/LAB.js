/* LAB.js (LABjs :: Loading And Blocking JavaScript)

    v1.2.0 (c) Kyle Simpson

    MIT License

*/

(function(c){var h="string",k="head",t="body",U="script",O="readyState",R="preloaddone",D="loadtrigger",K="srcuri",H="preload",u="complete",f="done",b="which",v="preserve",o="onreadystatechange",L="onload",I="hasOwnProperty",E="script/cache",g="[object ",M=g+"Function]",F=g+"Array]",y=null,G=true,z=false,n=c.document,N=c.location,S=c.ActiveXObject,e=c.setTimeout,C=c.clearTimeout,T=function(V){return n.getElementsByTagName(V)},r=Object.prototype.toString,s=function(){},w={},A={},a=/^[^?#]*\//.exec(N.href)[0],x=/^\w+\:\/\/\/?[^\/]+/.exec(a)[0],Q=T(U),p=c.opera&&r.call(c.opera)==g+"Opera]",q=("MozAppearance" in n.documentElement.style),d=(n.createElement(U).async===true),m={cache:!(q||p),order:q||p||d,xhr:G,dupe:G,base:"",which:k};m[v]=z;m[H]=G;w[k]=n.head||T(k);w[t]=T(t);function P(V){return r.call(V)===M}function B(Y,X){var W=/^\w+\:\/\//,V;if(typeof Y!=h){Y=""}if(typeof X!=h){X=""}V=((/^\/\//.test(Y))?N.protocol:"")+Y;V=(W.test(V)?"":X)+V;return((W.test(V)?"":(V.charAt(0)==="/"?x:a))+V)}function J(V){return(B(V).indexOf(x)===0)}function i(X){var W,V=-1;while(W=Q[++V]){if(typeof W.src==h&&X===B(W.src)&&W.type!==E){return G}}return z}function l(ay,am){ay=!(!ay);if(am==y){am=m}var al=z,af=ay&&am[H],at=af&&am.cache,av=af&&am.order,Z=af&&am.xhr,aw=am[v],Y=am.which,ap=am.base,aa=s,ao=z,ai,ac=G,ad={},au=[],ag=y;af=at||Z||av;function ax(aA,az){if((aA[O]&&aA[O]!==u&&aA[O]!=="loaded")||az[f]){return z}aA[L]=aA[o]=y;return G}function X(aB,aA,aC){aC=!(!aC);if(!aC&&!(ax(aB,aA))){return}aA[f]=G;for(var az in ad){if(ad[I](az)&&!(ad[az][f])){return}}al=G;aa()}function ah(az){if(P(az[D])){az[D]();az[D]=y}}function ae(aA,az){if(!ax(aA,az)){return}az[R]=G;e(function(){w[az[b]].removeChild(aA);ah(az)},0)}function V(aA,az){if(aA[O]===4){aA[o]=s;az[R]=G;e(function(){ah(az)},0)}}function ar(aB,aE,aC,aF,aD,az){var aA=aB[b];e(function(){if("item" in w[aA]){if(!w[aA][0]){e(arguments.callee,25);return}w[aA]=w[aA][0]}var aG=n.createElement(U);if(typeof aC==h){aG.type=aC}if(typeof aF==h){aG.charset=aF}if(P(aD)){aG[L]=aG[o]=function(){aD(aG,aB)};aG.src=aE;if(d){aG.async=z}}w[aA].insertBefore(aG,(aA===k?w[aA].firstChild:y));if(typeof az==h){aG.text=az;X(aG,aB,G)}},0)}function ak(az,aB,aA,aC){A[az[K]]=G;ar(az,aB,aA,aC,X)}function aq(aA,aC,aB,aD){var az=arguments;if(ac&&aA[R]==y){aA[R]=z;ar(aA,aC,E,aD,ae)}else{if(!ac&&aA[R]!=y&&!aA[R]){aA[D]=function(){aq.apply(y,az)}}else{if(!ac){ak.apply(y,az)}}}}function W(aA,aD,aB,aE){var az=arguments,aC;if(ac&&aA[R]==y){aA[R]=z;aC=aA.xhr=(S?new S("Microsoft.XMLHTTP"):new c.XMLHttpRequest());aC[o]=function(){V(aC,aA)};aC.open("GET",aD);aC.send("")}else{if(!ac&&aA[R]!=y&&!aA[R]){aA[D]=function(){W.apply(y,az)}}else{if(!ac){A[aA[K]]=G;ar(aA,aD,aB,aE,y,aA.xhr.responseText);aA.xhr=y}}}}function aj(aF){if(typeof aF=="undefined"||!aF){return}if(aF.allowDup==y){aF.allowDup=am.dupe}var aE=aF.src,aC=aF.type,aG=aF.charset,aA=aF.allowDup,az=B(aE,ap),aB,aD=J(az);if(typeof aG!=h){aG=y}aA=!(!aA);if(!aA&&((A[az]!=y)||(ac&&ad[az])||i(az))){if(ad[az]!=y&&ad[az][R]&&!ad[az][f]&&aD){X(y,ad[az],G)}return}if(ad[az]==y){ad[az]={}}aB=ad[az];if(aB[b]==y){aB[b]=Y}aB[f]=z;aB[K]=az;ao=G;if(!av&&Z&&aD){W(aB,az,aC,aG)}else{if(!av&&at){aq(aB,az,aC,aG)}else{ak(aB,az,aC,aG)}}}function ab(az){if(ay&&!av){au.push(az)}if(!ay||af){az()}}function an(aB){var aA=[],az;for(az=-1;++az<aB.length;){if(r.call(aB[az])===F){aA=aA.concat(an(aB[az]))}else{aA[aA.length]=aB[az]}}return aA}ai={script:function(){C(ag);var aB=an(arguments),aA=ai,az;if(aw){for(az=-1;++az<aB.length;){if(P(aB[az])){aB[az]=aB[az]()}if(az===0){ab(function(){aj((typeof aB[0]==h)?{src:aB[0]}:aB[0])})}else{aA=aA.script(aB[az])}aA=aA.wait()}}else{for(az=-1;++az<aB.length;){if(P(aB[az])){aB[az]=aB[az]()}}ab(function(){for(az=-1;++az<aB.length;){aj((typeof aB[az]==h)?{src:aB[az]}:aB[az])}})}ag=e(function(){ac=z},5);return aA},wait:function(aC){C(ag);ac=z;if(!P(aC)){aC=s}var aD=l(ay||ao,am),az=aD.trigger,aB=function(){try{aC()}catch(aE){}az()};delete aD.trigger;var aA=function(){if(ao&&!al){aa=aB}else{aB()}};if(ay&&!ao){au.push(aA)}else{ab(aA)}return aD}};if(ay){ai.trigger=function(){var aA,az=-1;while(aA=au[++az]){aA()}au=[]}}else{ai.trigger=s}return ai}function j(Z){var V,X={},W={UseCachePreload:"cache",UseLocalXHR:"xhr",UsePreloading:H,AlwaysPreserveOrder:v,AllowDuplicates:"dupe"},Y={AppendTo:b,BasePath:"base"};for(V in W){Y[V]=W[V]}X.order=!(!m.order);for(V in Y){if(Y[I](V)&&m[Y[V]]!=y){X[Y[V]]=(Z[V]!=y)?Z[V]:m[Y[V]]}}for(V in W){if(W[I](V)){X[W[V]]=!(!X[W[V]])}}if(!X[H]){X.cache=X.order=X.xhr=z}X.which=(X.which===k||X.which===t)?X.which:k;return X}c.$LAB={setGlobalDefaults:function(V){m=j(V)},setOptions:function(V){return l(z,j(V))},script:function(){return l().script.apply(y,arguments)},wait:function(){return l().wait.apply(y,arguments)}};(function(X,V,W){if(n[O]==y&&n[X]){n[O]="loading";n[X](V,W=function(){n.removeEventListener(V,W,z);n[O]=u},z)}})("addEventListener","DOMContentLoaded")})(window);