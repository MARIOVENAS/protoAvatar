﻿/* Merged JQGrid Sources */

;(function ($) {

/*

 * jqGrid  3.8.2  - jQuery Grid

 * Copyright (c) 2008, Tony Tomov, tony@trirand.com

 * Dual licensed under the MIT and GPL licenses

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

 * Date: 2010-12-14

 */

$.jgrid = $.jgrid || {};

$.extend($.jgrid,{

	htmlDecode : function(value){

		if(value=='&nbsp;' || value=='&#160;' || (value.length==1 && value.charCodeAt(0)==160)) { return "";}

		return !value ? value : String(value).replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"');

	},

	htmlEncode : function (value){

		return !value ? value : String(value).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/\"/g, "&quot;");

	},

	format : function(format){ //jqgformat

		var args = $.makeArray(arguments).slice(1);

		if(format===undefined) { format = ""; }

		return format.replace(/\{(\d+)\}/g, function(m, i){

			return args[i];

		});

	},

	getCellIndex : function (cell) {

		var c = $(cell);

		if (c.is('tr')) { return -1; }

		c = (!c.is('td') && !c.is('th') ? c.closest("td,th") : c)[0];

		if ($.browser.msie) { return $.inArray(c, c.parentNode.cells); }

		return c.cellIndex;

	},

	stripHtml : function(v) {

		v = v+"";

		var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;

		if (v) {

			v = v.replace(regexp,"");

			return (v && v !== '&nbsp;' && v !== '&#160;') ? v.replace(/\"/g,"'") : "";

		} else {

			return v;

		}

	},

	stringToDoc : function (xmlString) {

		var xmlDoc;

		if(typeof xmlString !== 'string') { return xmlString; }

		try	{

			var parser = new DOMParser();

			xmlDoc = parser.parseFromString(xmlString,"text/xml");

		}

		catch(e) {

			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

			xmlDoc.async=false;

			xmlDoc.loadXML(xmlString);

		}

		return (xmlDoc && xmlDoc.documentElement && xmlDoc.documentElement.tagName != 'parsererror') ? xmlDoc : null;

	},

	parse : function(jsonString) {

		var js = jsonString;

		if (js.substr(0,9) == "while(1);") { js = js.substr(9); }

		if (js.substr(0,2) == "/*") { js = js.substr(2,js.length-4); }

		if(!js) { js = "{}"; }

		return ($.jgrid.useJSON===true && typeof (JSON) === 'object' && typeof (JSON.parse) === 'function') ?

		    JSON.parse(js) :

		    eval('(' + js + ')');

	},

	parseDate : function(format, date) {

		var tsp = {m : 1, d : 1, y : 1970, h : 0, i : 0, s : 0},k,hl,dM;

		if(date && date !== null && date !== undefined){

			date = $.trim(date);

			date = date.split(/[\\\/:_;.\t\T\s-]/);

			format = format.split(/[\\\/:_;.\t\T\s-]/);

			var dfmt  = $.jgrid.formatter.date.monthNames;

			var afmt  = $.jgrid.formatter.date.AmPm;

			var h12to24 = function(ampm, h){

				if (ampm === 0){ if (h == 12) { h = 0;} }

				          else { if (h != 12) { h += 12; } }

				return h;

			};

			for(k=0,hl=format.length;k<hl;k++){

				if(format[k] == 'M') {

					dM = $.inArray(date[k],dfmt);

					if(dM !== -1 && dM < 12){date[k] = dM+1;}

				}

				if(format[k] == 'F') {

					dM = $.inArray(date[k],dfmt);

					if(dM !== -1 && dM > 11){date[k] = dM+1-12;}

				}

				if(format[k] == 'a') {

					dM = $.inArray(date[k],afmt);

					if(dM !== -1 && dM < 2 && date[k] == afmt[dM]){

						date[k] = dM;

						tsp.h = h12to24(date[k], tsp.h);

					}

				}

				if(format[k] == 'A') {

					dM = $.inArray(date[k],afmt);

					if(dM !== -1 && dM > 1 && date[k] == afmt[dM]){

						date[k] = dM-2;

						tsp.h = h12to24(date[k], tsp.h);

					}

				}

				if(date[k] !== undefined) {

					tsp[format[k].toLowerCase()] = parseInt(date[k],10);

				}

			}

			tsp.m = parseInt(tsp.m,10)-1;

			var ty = tsp.y;

			if (ty >= 70 && ty <= 99) {tsp.y = 1900+tsp.y;}

			else if (ty >=0 && ty <=69) {tsp.y= 2000+tsp.y;}

		}

		return new Date(tsp.y, tsp.m, tsp.d, tsp.h, tsp.i, tsp.s,0);

	},

	jqID : function(sid){

		sid = sid + "";

		return sid.replace(/([\.\:\[\]])/g,"\\$1");

	},

	getAccessor : function(obj, expr) {

		var ret,p,prm, i;

		if( typeof expr === 'function') { return expr(obj); }

		ret = obj[expr];

		if(ret===undefined) {

			try {

				if ( typeof expr === 'string' ) {

					prm = expr.split('.');

				}

				i = prm.length; 

				if( i ) {

					ret = obj;

				    while (ret && i--) {

						p = prm.shift();

						ret = ret[p];

					}

				}

			} catch (e) {}

		}

		return ret;

	},

	ajaxOptions: {},

	from : function(source,initalQuery){

		// Original Author Hugo Bonacci

		// License MIT http://jlinq.codeplex.com/license

		var queryObject=function(d,q){

		if(typeof(d)=="string"){

			d=$.data(d);

		}

		var self=this,

		_data=d,

		_usecase=true,

		_trim=false,

		_query=q,

		_stripNum = /[\$,%]/g,

		_lastCommand=null,

		_lastField=null,

		_negate=false,

		_queuedOperator="",

		_sorting=[],

		_useProperties=true;

		if(typeof(d)=="object"&&d.push) {

			if(d.length>0){

				if(typeof(d[0])!="object"){

					_useProperties=false;

				}else{

					_useProperties=true;

				}

			}

		}else{

			throw "data provides is not an array";

		}

		this._hasData=function(){

			return _data===null?false:_data.length===0?false:true;

		};

		this._getStr=function(s){

			var phrase=[];

			if(_trim){

				phrase.push("jQuery.trim(");

			}

			phrase.push("String("+s+")");

			if(_trim){

				phrase.push(")");

			}

			if(!_usecase){

				phrase.push(".toLowerCase()");

			}

			return phrase.join("");

		};

		this._strComp=function(val){

			if(typeof(val)=="string"){

				return".toString()";

			}else{

				return"";

			}

		};

		this._group=function(f,u){

			return({field:f.toString(),unique:u,items:[]});

		};

		this._toStr=function(phrase){

			if(_trim){

				phrase=$.trim(phrase);

			}

			if(!_usecase){

				phrase=phrase.toLowerCase();

			}

			phrase=phrase.toString().replace(new RegExp('\\"',"g"),'\\"');

			return phrase;

		};

		this._funcLoop=function(func){

			var results=[];

			$.each(_data,function(i,v){

				results.push(func(v));

			});

			return results;

		};

		this._append=function(s){

			if(_query===null){

				_query="";

			} else {

				_query+=_queuedOperator === "" ? " && " :_queuedOperator;

			}

			if(_negate){

				_query+="!";

			}

			_query+="("+s+")";

			_negate=false;

			_queuedOperator="";

		};

		this._setCommand=function(f,c){

			_lastCommand=f;

			_lastField=c;

		};

		this._resetNegate=function(){

			_negate=false;

		};

		this._repeatCommand=function(f,v){

			if(_lastCommand===null){

				return self;

			}

			if(f!=null&&v!=null){

				return _lastCommand(f,v);

			}

			if(_lastField===null){

				return _lastCommand(f);

			}

			if(!_useProperties){

				return _lastCommand(f);

			}

			return _lastCommand(_lastField,f);

		};

		this._equals=function(a,b){

			return(self._compare(a,b,1)===0);

		};

		this._compare=function(a,b,d){

			if( d === undefined) { d = 1; }

			if(a===undefined) { a = null; }

			if(b===undefined) { b = null; }

			if(a===null && b===null){

				return 0;

			}

			if(a===null&&b!==null){

				return 1;

			}

			if(a!==null&&b===null){

				return -1;

			}

			if(!_usecase && typeof(a) !== "number" && typeof(b) !== "number" ) {

				a=String(a).toLowerCase();

				b=String(b).toLowerCase();

			}

			if(a<b){return -d;}

			if(a>b){return d;}

			return 0;

		};

		this._performSort=function(){

			if(_sorting.length===0){return;}

			_data=self._doSort(_data,0);

		};

		this._doSort=function(d,q){

			var by=_sorting[q].by,

			dir=_sorting[q].dir,

			type = _sorting[q].type,

			dfmt = _sorting[q].datefmt;

			if(q==_sorting.length-1){

				return self._getOrder(d, by, dir, type, dfmt);

			}

			q++;

			var values=self._getGroup(d,by,dir,type,dfmt);

			var results=[];

			for(var i=0;i<values.length;i++){

				var sorted=self._doSort(values[i].items,q);

				for(var j=0;j<sorted.length;j++){

					results.push(sorted[j]);

				}

			}

			return results;

		};

		this._getOrder=function(data,by,dir,type, dfmt){

			var sortData=[],_sortData=[], newDir = dir=="a" ? 1 : -1, i,ab,j,

			findSortKey;



			if(type === undefined ) { type = "text"; }

			if (type == 'float' || type== 'number' || type== 'currency' || type== 'numeric') {

				findSortKey = function($cell, a) {

					var key = parseFloat( String($cell).replace(_stripNum, ''));

					return isNaN(key) ? 0.00 : key;

				};

			} else if (type=='int' || type=='integer') {

				findSortKey = function($cell, a) {

					return $cell ? parseFloat(String($cell).replace(_stripNum, '')) : 0;

				};

			} else if(type == 'date' || type == 'datetime') {

				findSortKey = function($cell, a) {

					return $.jgrid.parseDate(dfmt,$cell).getTime();

				};

			} else if($.isFunction(type)) {

				findSortKey = type;

			} else {

				findSortKey = function($cell, a) {

					if(!$cell) {$cell ="";}

					return $.trim(String($cell).toUpperCase());

				};

			}

			$.each(data,function(i,v){

				ab = by!=="" ? $.jgrid.getAccessor(v,by) : v;

				if(ab === undefined) { ab = ""; }

				ab = findSortKey(ab, v);

				_sortData.push({ 'vSort': ab,'index':i});

			});



			_sortData.sort(function(a,b){

				a = a.vSort;

				b = b.vSort;

				return self._compare(a,b,newDir);

			});

			j=0;

			var nrec= data.length;

			// overhead, but we do not change the original data.

			while(j<nrec) {

				i = _sortData[j].index;

				sortData.push(data[i]);

				j++;

			}

			return sortData;

		};

		this._getGroup=function(data,by,dir,type, dfmt){

			var results=[],

			group=null,

			last=null, val;

			$.each(self._getOrder(data,by,dir,type, dfmt),function(i,v){

				val = $.jgrid.getAccessor(v, by);

				if(val === undefined) { val = ""; }

				if(!self._equals(last,val)){

					last=val;

					if(group!=null){

						results.push(group);

					}

					group=self._group(by,val);

				}

				group.items.push(v);

			});

			if(group!=null){

				results.push(group);

			}

			return results;

		};

		this.ignoreCase=function(){

			_usecase=false;

			return self;

		};

		this.useCase=function(){

			_usecase=true;

			return self;

		};

		this.trim=function(){

			_trim=true;

			return self;

		};

		this.noTrim=function(){

			_trim=false;

			return self;

		};

		this.combine=function(f){

			var q=$.from(_data);

			if(!_usecase){ q.ignoreCase(); }

			if(_trim){ q.trim(); }

			var result=f(q).showQuery();

			self._append(result);

			return self;

		};

		this.execute=function(){

			var match=_query, results=[];

			if(match === null){

				return self;

			}

			$.each(_data,function(){

				if(eval(match)){results.push(this);}

			});

			_data=results;

			return self;

		};

		this.data=function(){

			return _data;

		};

		this.select=function(f){

			self._performSort();

			if(!self._hasData()){ return[]; }

			self.execute();

			if($.isFunction(f)){

				var results=[];

				$.each(_data,function(i,v){

					results.push(f(v));

				});

				return results;

			}

			return _data;

		};

		this.hasMatch=function(f){

			if(!self._hasData()) { return false; }

			self.execute();

			return _data.length>0;

		};

		this.showQuery=function(cmd){

			var queryString=_query;

			if(queryString === null) { queryString="no query found"; }

			if($.isFunction(cmd)){

				cmd(queryString);return self;

			}

			return queryString;

		};

		this.andNot=function(f,v,x){

			_negate=!_negate;

			return self.and(f,v,x);

		};

		this.orNot=function(f,v,x){

			_negate=!_negate;

			return self.or(f,v,x);

		};

		this.not=function(f,v,x){

			return self.andNot(f,v,x);

		};

		this.and=function(f,v,x){

			_queuedOperator=" && ";

			if(f===undefined){

				return self;

			}

			return self._repeatCommand(f,v,x);

		};

		this.or=function(f,v,x){

			_queuedOperator=" || ";

			if(f===undefined) { return self; }

			return self._repeatCommand(f,v,x);

		};

		this.isNot=function(f){

			_negate=!_negate;

			return self.is(f);

		};

		this.is=function(f){

			self._append('this.'+f);

			self._resetNegate();

			return self;

		};

		this._compareValues=function(func,f,v,how,t){

			var fld;

			if(_useProperties){

				fld='this.'+f;

			}else{

				fld='this';

			}

			if(v===undefined) { v = null; }

			var val=v===null?f:v,

			swst = t.stype === undefined ? "text" : t.stype;

			switch(swst) {

				case 'int':

				case 'integer':

					val = isNaN(Number(val)) ? '0' : val; // To be fixed with more inteligent code

					fld = 'parseInt('+fld+',10)';

					val = 'parseInt('+val+',10)';

					break;

				case 'float':

				case 'number':

				case 'numeric':

					val = String(val).replace(_stripNum, '');

					val = isNaN(Number(val)) ? '0' : val; // To be fixed with more inteligent code

					fld = 'parseFloat('+fld+')';

					val = 'parseFloat('+val+')';

					break;

				case 'date':

				case 'datetime':

					val = String($.jgrid.parseDate(t.newfmt || 'Y-m-d',val).getTime());

					fld = 'jQuery.jgrid.parseDate("'+t.srcfmt+'",'+fld+').getTime()';

					break;

				default :

					fld=self._getStr(fld);

					val=self._getStr('"'+self._toStr(val)+'"');

			}

			self._append(fld+' '+how+' '+val);

			self._setCommand(func,f);

			self._resetNegate();

			return self;

		};

		this.equals=function(f,v,t){

			return self._compareValues(self.equals,f,v,"==",t);

		};

		this.greater=function(f,v,t){

			return self._compareValues(self.greater,f,v,">",t);

		};

		this.less=function(f,v,t){

			return self._compareValues(self.less,f,v,"<",t);

		};

		this.greaterOrEquals=function(f,v,t){

			return self._compareValues(self.greaterOrEquals,f,v,">=",t);

		};

		this.lessOrEquals=function(f,v,t){

			return self._compareValues(self.lessOrEquals,f,v,"<=",t);

		};

		this.startsWith=function(f,v){

			var val = (v===undefined || v===null) ? f: v,

			length=_trim ? $.trim(val.toString()).length : val.toString().length;

			if(_useProperties){

				self._append(self._getStr('this.'+f)+'.substr(0,'+length+') == '+self._getStr('"'+self._toStr(v)+'"'));

			}else{

				length=_trim?$.trim(v.toString()).length:v.toString().length;

				self._append(self._getStr('this')+'.substr(0,'+length+') == '+self._getStr('"'+self._toStr(f)+'"'));

			}

			self._setCommand(self.startsWith,f);

			self._resetNegate();

			return self;

		};

		this.endsWith=function(f,v){

			var val = (v===undefined || v===null) ? f: v,

			length=_trim ? $.trim(val.toString()).length:val.toString().length;

			if(_useProperties){

				self._append(self._getStr('this.'+f)+'.substr('+self._getStr('this.'+f)+'.length-'+length+','+length+') == "'+self._toStr(v)+'"');

			} else {

				self._append(self._getStr('this')+'.substr('+self._getStr('this')+'.length-"'+self._toStr(f)+'".length,"'+self._toStr(f)+'".length) == "'+self._toStr(f)+'"');

			}

			self._setCommand(self.endsWith,f);self._resetNegate();

			return self;

		};

		this.contains=function(f,v){

			if(_useProperties){

				self._append(self._getStr('this.'+f)+'.indexOf("'+self._toStr(v)+'",0) > -1');

			}else{

				self._append(self._getStr('this')+'.indexOf("'+self._toStr(f)+'",0) > -1');

			}

			self._setCommand(self.contains,f);

			self._resetNegate();

			return self;

		};

		this.groupBy=function(by,dir,type, datefmt){

			if(!self._hasData()){

				return null;

			}

			return self._getGroup(_data,by,dir,type, datefmt);

		};

		this.orderBy=function(by,dir,stype, dfmt){

			dir =  dir === undefined || dir === null ? "a" :$.trim(dir.toString().toLowerCase());

			if(stype === null || stype === undefined) { stype = "text"; }

			if(dfmt === null || dfmt === undefined) { dfmt = "Y-m-d"; }

			if(dir=="desc"||dir=="descending"){dir="d";}

			if(dir=="asc"||dir=="ascending"){dir="a";}

			_sorting.push({by:by,dir:dir,type:stype, datefmt: dfmt});

			return self;

		};

		return self;

		};

	return new queryObject(source,null);

	},

	extend : function(methods) {

		$.extend($.fn.jqGrid,methods);

		if (!this.no_legacy_api) {

			$.fn.extend(methods);

		}

	}

});



$.fn.jqGrid = function( pin ) {

	if (typeof pin == 'string') {

		//var fn = $.fn.jqGrid[pin];

		var fn = $.jgrid.getAccessor($.fn.jqGrid,pin);

		if (!fn) {

			throw ("jqGrid - No such method: " + pin);

		}

		var args = $.makeArray(arguments).slice(1);

		return fn.apply(this,args);

	}

	return this.each( function() {

		if(this.grid) {return;}



		var p = $.extend(true,{

			url: "",

			height: 150,

			page: 1,

			rowNum: 20,

			rowTotal : null,

			records: 0,

			pager: "",

			pgbuttons: true,

			pginput: true,

			colModel: [],

			rowList: [],

			colNames: [],

			sortorder: "asc",

			sortname: "",

			datatype: "xml",

			mtype: "GET",

			altRows: false,

			selarrrow: [],

			savedRow: [],

			shrinkToFit: true,

			xmlReader: {},

			jsonReader: {},

			subGrid: false,

			subGridModel :[],

			reccount: 0,

			lastpage: 0,

			lastsort: 0,

			selrow: null,

			beforeSelectRow: null,

			onSelectRow: null,

			onSortCol: null,

			ondblClickRow: null,

			onRightClickRow: null,

			onPaging: null,

			onSelectAll: null,

			loadComplete: null,

			gridComplete: null,

			loadError: null,

			loadBeforeSend: null,

			afterInsertRow: null,

			beforeRequest: null,

			onHeaderClick: null,

			viewrecords: false,

			loadonce: false,

			multiselect: false,

			multikey: false,

			editurl: null,

			search: false,

			caption: "",

			hidegrid: true,

			hiddengrid: false,

			postData: {},

			userData: {},

			treeGrid : false,

			treeGridModel : 'nested',

			treeReader : {},

			treeANode : -1,

			ExpandColumn: null,

			tree_root_level : 0,

			prmNames: {page:"page",rows:"rows", sort: "sidx",order: "sord", search:"_search", nd:"nd", id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del", subgridid:"id", npage: null, totalrows:"totalrows"},

			forceFit : false,

			gridstate : "visible",

			cellEdit: false,

			cellsubmit: "remote",

			nv:0,

			loadui: "enable",

			toolbar: [false,""],

			scroll: false,

			multiboxonly : false,

			deselectAfterSort : true,

			scrollrows : false,

			autowidth: false,

			scrollOffset :18,

			cellLayout: 5,

			subGridWidth: 20,

			multiselectWidth: 20,

			gridview: false,

			rownumWidth: 25,

			rownumbers : false,

			pagerpos: 'center',

			recordpos: 'right',

			footerrow : false,

			userDataOnFooter : false,

			hoverrows : true,

			altclass : 'ui-priority-secondary',

			viewsortcols : [false,'vertical',true],

			resizeclass : '',

			autoencode : false,

			remapColumns : [],

			ajaxGridOptions :{},

			direction : "ltr",

			toppager: false,

			headertitles: false,

			scrollTimeout: 40,

			data : [],

			_index : {},

			grouping : false,

			groupingView : {groupField:[],groupOrder:[], groupText:[],groupColumnShow:[],groupSummary:[], showSummaryOnHide: false, sortitems:[], sortnames:[], groupDataSorted : false, summary:[],summaryval:[], plusicon: 'ui-icon-circlesmall-plus', minusicon: 'ui-icon-circlesmall-minus'},

			ignoreCase : false,

			cmTemplate : {}

		}, $.jgrid.defaults, pin || {});

		var grid={

			headers:[],

			cols:[],

			footers: [],

			dragStart: function(i,x,y) {

				this.resizing = { idx: i, startX: x.clientX, sOL : y[0]};

				this.hDiv.style.cursor = "col-resize";

				this.curGbox = $("#rs_m"+p.id,"#gbox_"+p.id);

				this.curGbox.css({display:"block",left:y[0],top:y[1],height:y[2]});

				if($.isFunction(p.resizeStart)) { p.resizeStart.call(this,x,i); }

				document.onselectstart=function(){return false;};

			},

			dragMove: function(x) {

				if(this.resizing) {

					var diff = x.clientX-this.resizing.startX,

					h = this.headers[this.resizing.idx],

					newWidth = p.direction === "ltr" ? h.width + diff : h.width - diff, hn, nWn;

					if(newWidth > 33) {

						this.curGbox.css({left:this.resizing.sOL+diff});

						if(p.forceFit===true ){

							hn = this.headers[this.resizing.idx+p.nv];

							nWn = p.direction === "ltr" ? hn.width - diff : hn.width + diff;

							if(nWn >33) {

								h.newWidth = newWidth;

								hn.newWidth = nWn;

							}

						} else {

							this.newWidth = p.direction === "ltr" ? p.tblwidth+diff : p.tblwidth-diff;

							h.newWidth = newWidth;

						}

					}

				}

			},

			dragEnd: function() {

				this.hDiv.style.cursor = "default";

				if(this.resizing) {

					var idx = this.resizing.idx,

					nw = this.headers[idx].newWidth || this.headers[idx].width;

					nw = parseInt(nw,10);

					this.resizing = false;

					$("#rs_m"+p.id).css("display","none");

					p.colModel[idx].width = nw;

					this.headers[idx].width = nw;

					this.headers[idx].el.style.width = nw + "px";

					this.cols[idx].style.width = nw+"px";

					if(this.footers.length>0) {this.footers[idx].style.width = nw+"px";}

					if(p.forceFit===true){

						nw = this.headers[idx+p.nv].newWidth || this.headers[idx+p.nv].width;

						this.headers[idx+p.nv].width = nw;

						this.headers[idx+p.nv].el.style.width = nw + "px";

						this.cols[idx+p.nv].style.width = nw+"px";

						if(this.footers.length>0) {this.footers[idx+p.nv].style.width = nw+"px";}

						p.colModel[idx+p.nv].width = nw;

					} else {

						p.tblwidth = this.newWidth || p.tblwidth;

						$('table:first',this.bDiv).css("width",p.tblwidth+"px");

						$('table:first',this.hDiv).css("width",p.tblwidth+"px");

						this.hDiv.scrollLeft = this.bDiv.scrollLeft;

						if(p.footerrow) {

							$('table:first',this.sDiv).css("width",p.tblwidth+"px");

							this.sDiv.scrollLeft = this.bDiv.scrollLeft;

						}

					}

					if($.isFunction(p.resizeStop)) { p.resizeStop.call(this,nw,idx); }

				}

				this.curGbox = null;

				document.onselectstart=function(){return true;};

			},

			populateVisible: function() {

				if (grid.timer) { clearTimeout(grid.timer); }

				grid.timer = null;

				var dh = $(grid.bDiv).height();

				if (!dh) { return; }

				var table = $("table:first", grid.bDiv);

				var rows = $("> tbody > tr:gt(0):visible:first", table);

				var rh = rows.outerHeight() || grid.prevRowHeight;

				if (!rh) { return; }

				grid.prevRowHeight = rh;

				var rn = p.rowNum;

				var scrollTop = grid.scrollTop = grid.bDiv.scrollTop;

				var ttop = Math.round(table.position().top) - scrollTop;

				var tbot = ttop + table.height();

				var div = rh * rn;

				var page, npage, empty;

			    if ( tbot < dh && ttop <= 0 &&  

					(p.lastpage===undefined||parseInt((tbot + scrollTop + div - 1) / div,10) <= p.lastpage))

				{

					npage = parseInt((dh - tbot + div - 1) / div,10);

					if (tbot >= 0 || npage < 2 || p.scroll === true) {

						page = Math.round((tbot + scrollTop) / div) + 1;

						ttop = -1;

					} else {

						ttop = 1;

					}

				}

				if (ttop > 0) {

					page = parseInt(scrollTop / div,10) + 1;

					npage = parseInt((scrollTop + dh) / div,10) + 2 - page;

					empty = true;

				}

				if (npage) {

					if (p.lastpage && page > p.lastpage || p.lastpage==1) {

						return;

					}

					if (grid.hDiv.loading) {

						grid.timer = setTimeout(grid.populateVisible, p.scrollTimeout);

					} else {

						p.page = page;

						if (empty) {

							grid.selectionPreserver(table[0]);

							grid.emptyRows(grid.bDiv,false);

						}

						grid.populate(npage);

					}

				}

			},

			scrollGrid: function() {

				if(p.scroll) {

					var scrollTop = grid.bDiv.scrollTop;

					if(grid.scrollTop === undefined) { grid.scrollTop = 0; }

					if (scrollTop != grid.scrollTop) {

						grid.scrollTop = scrollTop;

						if (grid.timer) { clearTimeout(grid.timer); }

						grid.timer = setTimeout(grid.populateVisible, p.scrollTimeout);

					}

				}

				grid.hDiv.scrollLeft = grid.bDiv.scrollLeft;

				if(p.footerrow) {

					grid.sDiv.scrollLeft = grid.bDiv.scrollLeft;

				}

			},

			selectionPreserver : function(ts) {

				var p = ts.p;

				var sr = p.selrow, sra = p.selarrrow ? $.makeArray(p.selarrrow) : null;

				var left = ts.grid.bDiv.scrollLeft;

				var complete = p.gridComplete;

				p.gridComplete = function() {

					p.selrow = null;

					p.selarrrow = [];

					if(p.multiselect && sra && sra.length>0) {

						for(var i=0;i<sra.length;i++){

							if (sra[i] != sr) {

								$(ts).jqGrid("setSelection",sra[i],false);

							}

						}

					}

					if (sr) {

						$(ts).jqGrid("setSelection",sr,false);

					}

					ts.grid.bDiv.scrollLeft = left;

					p.gridComplete = complete;

					if (p.gridComplete) {

						complete();

					}

				};

			}

		};

		if(this.tagName != 'TABLE') {

			alert("Element is not a table");

			return;

		}

		$(this).empty();

		this.p = p ;

		var i, dir,ts, clm;

		if(this.p.colNames.length === 0) {

			for (i=0;i<this.p.colModel.length;i++){

				this.p.colNames[i] = this.p.colModel[i].label || this.p.colModel[i].name;

			}

		}

		if( this.p.colNames.length !== this.p.colModel.length ) {

			alert($.jgrid.errors.model);

			return;

		}

		var gv = $("<div class='ui-jqgrid-view'></div>"), ii,

		isMSIE = $.browser.msie ? true:false,

		isSafari = $.browser.safari ? true : false;

		ts = this;

		ts.p.direction = $.trim(ts.p.direction.toLowerCase());

		if($.inArray(ts.p.direction,["ltr","rtl"]) == -1) { ts.p.direction = "ltr"; }

		dir = ts.p.direction;



		$(gv).insertBefore(this);

		$(this).appendTo(gv).removeClass("scroll");

		var eg = $("<div class='ui-jqgrid ui-widget ui-widget-content ui-corner-all'></div>");

		$(eg).insertBefore(gv).attr({"id" : "gbox_"+this.id,"dir":dir});

		$(gv).appendTo(eg).attr("id","gview_"+this.id);

		if (isMSIE && $.browser.version <= 6) {

			ii = '<iframe style="display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=\'0\');" src="javascript:false;"></iframe>';

		} else { ii="";}

		$("<div class='ui-widget-overlay jqgrid-overlay' id='lui_"+this.id+"'></div>").append(ii).insertBefore(gv);

		$("<div class='loading ui-state-default ui-state-active' id='load_"+this.id+"'>"+this.p.loadtext+"</div>").insertBefore(gv);

		$(this).attr({cellspacing:"0",cellpadding:"0",border:"0","role":"grid","aria-multiselectable":!!this.p.multiselect,"aria-labelledby":"gbox_"+this.id});

		var sortkeys = ["shiftKey","altKey","ctrlKey"],

		intNum = function(val,defval) {

			val = parseInt(val,10);

			if (isNaN(val)) { return defval ? defval : 0;}

			else {return val;}

		},

		formatCol = function (pos, rowInd, tv){

			var cm = ts.p.colModel[pos],

			ral = cm.align, result="style=\"", clas = cm.classes, nm = cm.name;

			if(ral) { result += "text-align:"+ral+";"; }

			if(cm.hidden===true) { result += "display:none;"; }

			if(rowInd===0) {

				result += "width: "+grid.headers[pos].width+"px;";

			}

			result += "\"" + (clas !== undefined ? (" class=\""+clas+"\"") :"") + ((cm.title && tv) ? (" title=\""+$.jgrid.stripHtml(tv)+"\"") :"");

			result += " aria-describedby=\""+ts.p.id+"_"+nm+"\"";

			return result;

		},

		cellVal =  function (val) {

			return val === undefined || val === null || val === "" ? "&#160;" : (ts.p.autoencode ? $.jgrid.htmlEncode(val) : val+"");

		},

		formatter = function (rowId, cellval , colpos, rwdat, _act){

			var cm = ts.p.colModel[colpos],v;

			if(typeof cm.formatter !== 'undefined') {

				var opts= {rowId: rowId, colModel:cm, gid:ts.p.id, pos:colpos };

				if($.isFunction( cm.formatter ) ) {

					v = cm.formatter.call(ts,cellval,opts,rwdat,_act);

				} else if($.fmatter){

					v = $.fn.fmatter(cm.formatter, cellval,opts, rwdat, _act);

				} else {

					v = cellVal(cellval);

				}

			} else {

				v = cellVal(cellval);

			}

			return v;

		},

		addCell = function(rowId,cell,pos,irow, srvr) {

			var v,prp;

			v = formatter(rowId,cell,pos,srvr,'add');

			prp = formatCol( pos,irow, v);

			return "<td role=\"gridcell\" "+prp+">"+v+"</td>";

		},

		addMulti = function(rowid,pos,irow){

			var	v = "<input role=\"checkbox\" type=\"checkbox\""+" id=\"jqg_"+ts.p.id+"_"+rowid+"\" class=\"cbox\" name=\"jqg_"+ts.p.id+"_"+rowid+"\"/>",

			prp = formatCol(pos,irow,'');

			return "<td role=\"gridcell\" "+prp+">"+v+"</td>";

		},

		addRowNum = function (pos,irow,pG,rN) {

			var v =  (parseInt(pG,10)-1)*parseInt(rN,10)+1+irow,

			prp = formatCol(pos,irow,'');

			return "<td role=\"gridcell\" class=\"ui-state-default jqgrid-rownum\" "+prp+">"+v+"</td>";

		},

		reader = function (datatype) {

			var field, f=[], j=0, i;

			for(i =0; i<ts.p.colModel.length; i++){

				field = ts.p.colModel[i];

				if (field.name !== 'cb' && field.name !=='subgrid' && field.name !=='rn') {

					if(datatype == "local") {

						f[j] = field.name;

					} else {

						f[j] = (datatype=="xml") ? field.xmlmap || field.name : field.jsonmap || field.name;

					}

					j++;

				}

			}

			return f;

		},

		orderedCols = function (offset) {

			var order = ts.p.remapColumns;

			if (!order || !order.length) {

				order = $.map(ts.p.colModel, function(v,i) { return i; });

			}

			if (offset) {

				order = $.map(order, function(v) { return v<offset?null:v-offset; });

			}

			return order;

		},

		emptyRows = function (parent, scroll) {

			if(ts.p.deepempty) {$("#"+ts.p.id+" tbody:first tr:gt(0)").remove();}

			else {

				var trf = $("#"+ts.p.id+" tbody:first tr:first")[0];

				$("#"+ts.p.id+" tbody:first").empty().append(trf);

			}

			if (scroll && ts.p.scroll) {

				$(">div:first", parent).css({height:"auto"}).children("div:first").css({height:0,display:"none"});

				parent.scrollTop = 0;

			}

		},

		refreshIndex = function() {

			var datalen = ts.p.data.length, idname, i, val,

			ni = ts.p.rownumbers===true ? 1 :0,

			gi = ts.p.multiselect ===true ? 1 :0,

			si = ts.p.subGrid===true ? 1 :0;



			if(ts.p.keyIndex === false || ts.p.loadonce === true) {

				idname = ts.p.localReader.id;

			} else {

				idname = ts.p.colModel[ts.p.keyIndex+gi+si+ni].name;

			}

			for(i =0;i < datalen; i++) {

				val = $.jgrid.getAccessor(ts.p.data[i],idname);

				ts.p._index[val] = i;

			}

		},

		addXmlData = function (xml,t, rcnt, more, adjust) {

			var startReq = new Date(),

			locdata = (ts.p.datatype != "local" && ts.p.loadonce) || ts.p.datatype == "xmlstring",

			xmlid,

			frd = ts.p.datatype == "local" ? "local" : "xml";

			if(locdata) {

				ts.p.data = [];

				ts.p._index = {};

				ts.p.localReader.id = xmlid = "_id_";

			}			

			ts.p.reccount = 0;

			if($.isXMLDoc(xml)) {

				if(ts.p.treeANode===-1 && !ts.p.scroll) {

					emptyRows(t,false);

					rcnt=1;

				} else { rcnt = rcnt > 1 ? rcnt :1; }

			} else { return; }

			var i,fpos,ir=0,v,row,gi=0,si=0,ni=0,idn, getId,f=[],F,rd ={}, xmlr,rid, rowData=[], cn=(ts.p.altRows === true) ? " "+ts.p.altclass:"",cn1;

			if(!ts.p.xmlReader.repeatitems) {f = reader(frd);}

			if( ts.p.keyIndex===false) {

				idn = ts.p.xmlReader.id;

			} else {

				idn = ts.p.keyIndex;

			}

			if(f.length>0 && !isNaN(idn)) {

				if (ts.p.remapColumns && ts.p.remapColumns.length) {

					idn = $.inArray(idn, ts.p.remapColumns);

				}

				idn=f[idn];

			}

			if( (idn+"").indexOf("[") === -1 ) {

				if (f.length) {

					getId = function( trow, k) {return $(idn,trow).text() || k;};

				} else {

					getId = function( trow, k) {return $(ts.p.xmlReader.cell,trow).eq(idn).text() || k;};

				}

			}

			else {

				getId = function( trow, k) {return trow.getAttribute(idn.replace(/[\[\]]/g,"")) || k;};

			}

			ts.p.userData = {};

			$(ts.p.xmlReader.page,xml).each(function() {ts.p.page = this.textContent  || this.text || 0; });

			$(ts.p.xmlReader.total,xml).each(function() {ts.p.lastpage = this.textContent  || this.text; if(ts.p.lastpage===undefined) { ts.p.lastpage=1; } }  );

			$(ts.p.xmlReader.records,xml).each(function() {ts.p.records = this.textContent  || this.text  || 0; }  );

			$(ts.p.xmlReader.userdata,xml).each(function() {ts.p.userData[this.getAttribute("name")]=this.textContent || this.text;});

			var gxml = $(ts.p.xmlReader.root+" "+ts.p.xmlReader.row,xml);

			if (!gxml) { gxml = []; }

			var gl = gxml.length, j=0;

			if(gxml && gl){

			var rn = parseInt(ts.p.rowNum,10),br=ts.p.scroll?(parseInt(ts.p.page,10)-1)*rn+1:1,altr;

			if (adjust) { rn *= adjust+1; }

			var afterInsRow = $.isFunction(ts.p.afterInsertRow), grpdata={}, hiderow="";

			if(ts.p.grouping && ts.p.groupingView.groupCollapse === true) {

				hiderow = " style=\"display:none;\"";

			}

			while (j<gl) {

				xmlr = gxml[j];

				rid = getId(xmlr,br+j);

				altr = rcnt === 0 ? 0 : rcnt+1;

				cn1 = (altr+j)%2 == 1 ? cn : '';

				rowData.push( "<tr"+hiderow+" id=\""+rid+"\" role=\"row\" class =\"ui-widget-content jqgrow ui-row-"+ts.p.direction+""+cn1+"\">" );

				if(ts.p.rownumbers===true) {

					rowData.push( addRowNum(0,j,ts.p.page,ts.p.rowNum) );

					ni=1;

				}

				if(ts.p.multiselect===true) {

					rowData.push( addMulti(rid,ni,j) );

					gi=1;

				}

				if (ts.p.subGrid===true) {

					rowData.push( $(ts).jqGrid("addSubGridCell",gi+ni,j+rcnt) );

					si= 1;

				}

				if(ts.p.xmlReader.repeatitems){

					if (!F) { F=orderedCols(gi+si+ni); }

					var cells = $(ts.p.xmlReader.cell,xmlr);

					$.each(F, function (k) {

						var cell = cells[this];

						if (!cell) { return false; }

						v = cell.textContent || cell.text;

						rd[ts.p.colModel[k+gi+si+ni].name] = v;

						rowData.push( addCell(rid,v,k+gi+si+ni,j+rcnt,xmlr) );

					});

				} else {

					for(i = 0; i < f.length;i++) {

						v = $(f[i],xmlr).text();

						rd[ts.p.colModel[i+gi+si+ni].name] = v;

						rowData.push( addCell(rid, v, i+gi+si+ni, j+rcnt, xmlr) );

					}

				}

				rowData.push("</tr>");

				if(ts.p.grouping) {

					var grlen = ts.p.groupingView.groupField.length, grpitem = [];

					for(var z=0;z<grlen;z++) {

						grpitem.push(rd[ts.p.groupingView.groupField[z]]);

					}

					grpdata = $(ts).jqGrid('groupingPrepare',rowData, grpitem, grpdata, rd);

					rowData = [];

				}

				if(locdata) {

					rd[xmlid] = rid;

					ts.p.data.push(rd);

				}

				if(ts.p.gridview === false ) {

					if( ts.p.treeGrid === true) {

						fpos = ts.p.treeANode > -1 ? ts.p.treeANode: 0;

						row = $(rowData.join(''))[0]; // speed overhead

						$(ts.rows[j+fpos]).after(row);

						try {$(ts).jqGrid("setTreeNode",rd,row);} catch (e) {}

					} else {

						$("tbody:first",t).append(rowData.join(''));

					}

					if (ts.p.subGrid===true) {

						try {$(ts).jqGrid("addSubGrid",ts.rows[ts.rows.length-1],gi+ni);} catch (_){}

					}

					if(afterInsRow) {ts.p.afterInsertRow.call(ts,rid,rd,xmlr);}

					rowData=[];

				}

				rd={};

				ir++;

				j++;

				if(ir==rn) {break;}

			}

			}

			if(ts.p.gridview === true) {

				if(ts.p.grouping) {

					$(ts).jqGrid('groupingRender',grpdata,ts.p.colModel.length);

					grpdata = null;

				} else {				

					$("tbody:first",t).append(rowData.join(''));

				}

			}

			ts.p.totaltime = new Date() - startReq;

			if(ir>0) { if(ts.p.records===0) { ts.p.records=gl;} }

			rowData =null;

			if(!ts.p.treeGrid && !ts.p.scroll) {ts.grid.bDiv.scrollTop = 0;}

			ts.p.reccount=ir;

			ts.p.treeANode = -1;

			if(ts.p.userDataOnFooter) { $(ts).jqGrid("footerData","set",ts.p.userData,true); }

			if(locdata) {

				ts.p.records = gl;

				ts.p.lastpage = Math.ceil(gl/ rn);

			}

			if (!more) { ts.updatepager(false,true); }

			if(locdata) {

				while (ir<gl) {

					xmlr = gxml[ir];

					rid = getId(xmlr,ir);

					if(ts.p.xmlReader.repeatitems){

						if (!F) { F=orderedCols(gi+si+ni); }

						var cells2 = $(ts.p.xmlReader.cell,xmlr);

						$.each(F, function (k) {

							var cell = cells2[this];

							if (!cell) { return false; }

							v = cell.textContent || cell.text;

							rd[ts.p.colModel[k+gi+si+ni].name] = v;

						});

					} else {

						for(i = 0; i < f.length;i++) {

							v = $(f[i],xmlr).text();

							rd[ts.p.colModel[i+gi+si+ni].name] = v;

						}

					}

					rd[xmlid] = rid;

					ts.p.data.push(rd);

					rd = {};

					ir++;

				}

				refreshIndex();

			}

		},

		addJSONData = function(data,t, rcnt, more, adjust) {

			var startReq = new Date();

			if(data) {

				if(ts.p.treeANode === -1 && !ts.p.scroll) {

					emptyRows(t,false);

					rcnt=1;

				} else { rcnt = rcnt > 1 ? rcnt :1; }

			} else { return; }

			

			var dReader, locid, frd,

			locdata = (ts.p.datatype != "local" && ts.p.loadonce) || ts.p.datatype == "jsonstring";

			if(locdata) { ts.p.data = []; ts.p._index = {}; locid = ts.p.localReader.id = "_id_";}

			ts.p.reccount = 0;

			if(ts.p.datatype == "local") {

				dReader =  ts.p.localReader;

				frd= 'local';

			} else {

				dReader =  ts.p.jsonReader;

				frd='json';

			}

			var ir=0,v,i,j,row,f=[],F,cur,gi=0,si=0,ni=0,len,drows,idn,rd={}, fpos, idr,rowData=[],cn=(ts.p.altRows === true) ? " "+ts.p.altclass:"",cn1,lp;

			ts.p.page = $.jgrid.getAccessor(data,dReader.page) || 0;

			lp = $.jgrid.getAccessor(data,dReader.total);

			ts.p.lastpage = lp === undefined ? 1 : lp;

			ts.p.records = $.jgrid.getAccessor(data,dReader.records) || 0;

			ts.p.userData = $.jgrid.getAccessor(data,dReader.userdata) || {};

			if(!dReader.repeatitems) {

				F = f = reader(frd);

			}

			if( ts.p.keyIndex===false ) {

				idn = dReader.id;

			} else {

				idn = ts.p.keyIndex;

			}

			if(f.length>0 && !isNaN(idn)) {

				if (ts.p.remapColumns && ts.p.remapColumns.length) {

					idn = $.inArray(idn, ts.p.remapColumns);

				}

				idn=f[idn];

			}

			drows = $.jgrid.getAccessor(data,dReader.root);

			if (!drows) { drows = []; }

			len = drows.length; i=0;

			var rn = parseInt(ts.p.rowNum,10),br=ts.p.scroll?(parseInt(ts.p.page,10)-1)*rn+1:1, altr;

			if (adjust) { rn *= adjust+1; }

			var afterInsRow = $.isFunction(ts.p.afterInsertRow), grpdata={}, hiderow="";

			if(ts.p.grouping && ts.p.groupingView.groupCollapse === true) {

				hiderow = " style=\"display:none;\"";

			}

			while (i<len) {

				cur = drows[i];

				idr = $.jgrid.getAccessor(cur,idn);

				if(idr === undefined) {

					idr = br+i;

					if(f.length===0){

						if(dReader.cell){

							var ccur = cur[dReader.cell];

							idr = ccur[idn] || idr;

							ccur=null;

						}

					}

				}

				altr = rcnt === 1 ? 0 : rcnt;

				cn1 = (altr+i)%2 == 1 ? cn : '';

				rowData.push("<tr"+hiderow+" id=\""+ idr +"\" role=\"row\" class= \"ui-widget-content jqgrow ui-row-"+ts.p.direction+""+cn1+"\">");

				if(ts.p.rownumbers===true) {

					rowData.push( addRowNum(0,i,ts.p.page,ts.p.rowNum) );

					ni=1;

				}

				if(ts.p.multiselect){

					rowData.push( addMulti(idr,ni,i) );

					gi = 1;

				}

				if (ts.p.subGrid) {

					rowData.push( $(ts).jqGrid("addSubGridCell",gi+ni,i+rcnt) ); 

					si= 1;

				}

				if (dReader.repeatitems) {

					if(dReader.cell) {cur = $.jgrid.getAccessor(cur,dReader.cell);}

					if (!F) { F=orderedCols(gi+si+ni); }

				}

				for (j=0;j<F.length;j++) {

					v = $.jgrid.getAccessor(cur,F[j]);

					rowData.push( addCell(idr,v,j+gi+si+ni,i+rcnt,cur) );

					rd[ts.p.colModel[j+gi+si+ni].name] = v;

				}

				rowData.push( "</tr>" );

				if(ts.p.grouping) {

					var grlen = ts.p.groupingView.groupField.length, grpitem = [];

					for(var z=0;z<grlen;z++) {

						grpitem.push(rd[ts.p.groupingView.groupField[z]]);

					}

					grpdata = $(ts).jqGrid('groupingPrepare',rowData, grpitem, grpdata, rd);

					rowData = [];

				}

				if(locdata) { rd[locid] = idr; ts.p.data.push(rd); }

				if(ts.p.gridview === false ) {

					if( ts.p.treeGrid === true) {

						fpos = ts.p.treeANode > -1 ? ts.p.treeANode: 0;

						row = $(rowData.join(''))[0];

						$(ts.rows[i+fpos]).after(row);

						try {$(ts).jqGrid("setTreeNode",rd,row);} catch (e) {}

					} else {

						$("#"+ts.p.id+" tbody:first").append(rowData.join(''));

					}

					if(ts.p.subGrid === true ) {

						try { $(ts).jqGrid("addSubGrid",ts.rows[ts.rows.length-1],gi+ni);} catch (_){}

					}

					if(afterInsRow) {ts.p.afterInsertRow.call(ts,idr,rd,cur);}

					rowData=[];//ari=0;

				}

				rd={};

				ir++;

				i++;

				if(ir==rn) { break; }

			}

			if(ts.p.gridview === true ) {

				if(ts.p.grouping) {

					$(ts).jqGrid('groupingRender',grpdata,ts.p.colModel.length);

					grpdata = null;

				} else {

					$("#"+ts.p.id+" tbody:first").append(rowData.join(''));

				}

			}

			ts.p.totaltime = new Date() - startReq;

			if(ir>0) {

				if(ts.p.records===0) { ts.p.records=len; }

			}

			rowData = null;

			if(!ts.p.treeGrid && !ts.p.scroll) {ts.grid.bDiv.scrollTop = 0;}

			ts.p.reccount=ir;

			ts.p.treeANode = -1;

			if(ts.p.userDataOnFooter) { $(ts).jqGrid("footerData","set",ts.p.userData,true); }

			if(locdata) {

				ts.p.records = len;

				ts.p.lastpage = Math.ceil(len/ rn);

			}

			if (!more) { ts.updatepager(false,true); }

			if(locdata) {

				while (ir<len) {

					cur = drows[ir];

					idr = $.jgrid.getAccessor(cur,idn);

					if(idr === undefined) {

						idr = br+ir;

						if(f.length===0){

							if(dReader.cell){

								var ccur2 = cur[dReader.cell];

								idr = ccur2[idn] || idr;

								ccur2=null;

							}

						}

					}					

					if(cur) {

						if (dReader.repeatitems) {

							if(dReader.cell) {cur = $.jgrid.getAccessor(cur,dReader.cell);}

							if (!F) { F=orderedCols(gi+si+ni); }

						}



						for (j=0;j<F.length;j++) {

							v = $.jgrid.getAccessor(cur,F[j]);

							rd[ts.p.colModel[j+gi+si+ni].name] = v;

						}

						rd[locid] = idr;

						ts.p.data.push(rd);

						rd = {};

					}

					ir++;

				}

				refreshIndex();

			}

		},

		addLocalData = function() {

			var st, fndsort=false, cmtypes=[], grtypes=[], grindexes=[], srcformat, sorttype, newformat;

			if(!$.isArray(ts.p.data)) {

				return;

			}

			var grpview = ts.p.grouping ? ts.p.groupingView : false;

			$.each(ts.p.colModel,function(i,v){

				sorttype = this.sorttype || "text";

				if(sorttype == "date" || sorttype == "datetime") {

					if(this.formatter && typeof(this.formatter) === 'string' && this.formatter == 'date') {

						if(this.formatoptions && this.formatoptions.srcformat) {

							srcformat = this.formatoptions.srcformat;

						} else {

							srcformat = $.jgrid.formatter.date.srcformat;

						}

						if(this.formatoptions && this.formatoptions.newformat) {

							newformat = this.formatoptions.newformat;

						} else {

							newformat = $.jgrid.formatter.date.newformat;

						}

					} else {

						srcformat = newformat = this.datefmt || "Y-m-d";

					}

					cmtypes[this.name] = {"stype": sorttype, "srcfmt": srcformat,"newfmt":newformat};

				} else {

					cmtypes[this.name] = {"stype": sorttype, "srcfmt":'',"newfmt":''};

				}

				if(ts.p.grouping && this.name == grpview.groupField[0]) {

                                    var grindex = this.name

                                    if (typeof this.index != 'undefined') {

                                        grindex = this.index;

                                    }

                                    grtypes[0] = cmtypes[grindex];

                                    grindexes.push(grindex);

				}

				if(!fndsort && (this.index == ts.p.sortname || this.name == ts.p.sortname)){

					st = this.name; // ???

					fndsort = true;

				}

			});

			if(ts.p.treeGrid) {

				$(ts).jqGrid("SortTree", st, ts.p.sortorder, cmtypes[st].stype, cmtypes[st].srcfmt);

				return;

			}

			var compareFnMap = {

				'eq':function(queryObj) {return queryObj.equals;},

				'ne':function(queryObj) {return queryObj.not().equals;},

				'lt':function(queryObj) {return queryObj.less;},

				'le':function(queryObj) {return queryObj.lessOrEquals;},

				'gt':function(queryObj) {return queryObj.greater;},

				'ge':function(queryObj) {return queryObj.greaterOrEquals;},

				'cn':function(queryObj) {return queryObj.contains;},

				'nc':function(queryObj) {return queryObj.not().contains;},

				'bw':function(queryObj) {return queryObj.startsWith;},

				'bn':function(queryObj) {return queryObj.not().startsWith;},

				'en':function(queryObj) {return queryObj.not().endsWith;},

				'ew':function(queryObj) {return queryObj.endsWith;},

				'ni':function(queryObj) {return queryObj.not().equals;},

				'in':function(queryObj) {return queryObj.equals;}

				

			},

			query = $.jgrid.from(ts.p.data);

			if (ts.p.ignoreCase) { query = query.ignoreCase(); }

			if (ts.p.search === true) {

				var srules = ts.p.postData.filters, opr;

				if(srules) {

					if(typeof srules == "string") { srules = $.jgrid.parse(srules);}

					for (var i=0, l= srules.rules.length, rule; i<l; i++) {

						rule = srules.rules[i];

						opr = srules.groupOp;

						if (compareFnMap[rule.op] && rule.field && rule.data && opr) {

							if(opr.toUpperCase() == "OR") {

								query = compareFnMap[rule.op](query)(rule.field, rule.data, cmtypes[rule.field]).or();

							} else {

								query = compareFnMap[rule.op](query)(rule.field, rule.data, cmtypes[rule.field]);

							}

						}

					}

				} else {

					try {

						query = compareFnMap[ts.p.postData.searchOper](query)(ts.p.postData.searchField, ts.p.postData.searchString,cmtypes[ts.p.postData.searchField]);

					} catch (se){}

				}

			}

			if(ts.p.grouping) {

				query.orderBy(grindexes,grpview.groupOrder[0],grtypes[0].stype, grtypes[0].srcfmt);

				grpview.groupDataSorted = true;

			}

			if (st && ts.p.sortorder && fndsort) {

				if(ts.p.sortorder.toUpperCase() == "DESC") {

					query.orderBy(ts.p.sortname, "d", cmtypes[st].stype, cmtypes[st].srcfmt);

				} else {

					query.orderBy(ts.p.sortname, "a", cmtypes[st].stype, cmtypes[st].srcfmt);

				}

			}

			var queryResults = query.select(),

			recordsperpage = parseInt(ts.p.rowNum,10),

			total = queryResults.length,

			page = parseInt(ts.p.page,10),

			totalpages = Math.ceil(total / recordsperpage),

			retresult = {};

			//Display last row of datagrid containing more than 20 rows

			//queryResults = queryResults.slice( (page-1)*recordsperpage , page*recordsperpage );

			queryResults = recordsperpage == -1 ? queryResults.slice((page-1)*recordsperpage) : queryResults.slice( (page-1)*recordsperpage , page*recordsperpage );

			query = null;

			cmtypes = null;

			retresult[ts.p.localReader.total] = totalpages;

			retresult[ts.p.localReader.page] = page;

			retresult[ts.p.localReader.records] = total;

			retresult[ts.p.localReader.root] = queryResults;

			queryResults = null;

			return  retresult;

		},

		updatepager = function(rn, dnd) {

			var cp, last, base, from,to,tot,fmt, pgboxes = "";

			base = parseInt(ts.p.page,10)-1;

			if(base < 0) { base = 0; }

			base = base*parseInt(ts.p.rowNum,10);

			to = base + ts.p.reccount;

			if (ts.p.scroll) {

				var rows = $("tbody:first > tr:gt(0)", ts.grid.bDiv);

				base = to - rows.length;

				ts.p.reccount = rows.length;

				var rh = rows.outerHeight() || ts.grid.prevRowHeight;

				if (rh) {

					var top = base * rh;

					var height = parseInt(ts.p.records,10) * rh;

				    $(">div:first",ts.grid.bDiv).css({height : height}).children("div:first").css({height:top,display:top?"":"none"});

				}

				ts.grid.bDiv.scrollLeft = ts.grid.hDiv.scrollLeft;				

			}

			pgboxes = ts.p.pager ? ts.p.pager : "";

			pgboxes += ts.p.toppager ?  (pgboxes ? "," + ts.p.toppager : ts.p.toppager) : "";

			if(pgboxes) {

				fmt = $.jgrid.formatter.integer || {};

				cp = intNum(ts.p.page);

				last = intNum(ts.p.lastpage);

				$(".selbox",pgboxes).attr("disabled",false);

				if(ts.p.pginput===true) {

					$('.ui-pg-input',pgboxes).val(ts.p.page);

					$('#sp_1',pgboxes).html($.fmatter ? $.fmatter.util.NumberFormat(ts.p.lastpage,fmt):ts.p.lastpage);

					

				}

				if (ts.p.viewrecords){

					if(ts.p.reccount === 0) {

						$(".ui-paging-info",pgboxes).html(ts.p.emptyrecords);

					} else {

						from = base+1;

						tot=ts.p.records;

						if($.fmatter) {

							from = $.fmatter.util.NumberFormat(from,fmt);

							to = $.fmatter.util.NumberFormat(to,fmt);

							tot = $.fmatter.util.NumberFormat(tot,fmt);

						}

						$(".ui-paging-info",pgboxes).html($.jgrid.format(ts.p.recordtext,from,to,tot));

					}

				}

				if(ts.p.pgbuttons===true) {

					if(cp<=0) {cp = last = 0;}

					if(cp==1 || cp === 0) {

						$("#first, #prev",ts.p.pager).addClass('ui-state-disabled').removeClass('ui-state-hover');

						if(ts.p.toppager) { $("#first_t, #prev_t",ts.p.toppager).addClass('ui-state-disabled').removeClass('ui-state-hover'); }

					} else {

						$("#first, #prev",ts.p.pager).removeClass('ui-state-disabled');

						if(ts.p.toppager) { $("#first_t, #prev_t",ts.p.toppager).removeClass('ui-state-disabled'); }

					}

					if(cp==last || cp === 0) {

						$("#next, #last",ts.p.pager).addClass('ui-state-disabled').removeClass('ui-state-hover');

						if(ts.p.toppager) { $("#next_t, #last_t",ts.p.toppager).addClass('ui-state-disabled').removeClass('ui-state-hover'); }

					} else {

						$("#next, #last",ts.p.pager).removeClass('ui-state-disabled');

						if(ts.p.toppager) { $("#next_t, #last_t",ts.p.toppager).removeClass('ui-state-disabled'); }

					}

				}

			}

			if(rn===true && ts.p.rownumbers === true) {

				$("td.jqgrid-rownum",ts.rows).each(function(i){

					$(this).html(base+1+i);

				});

			}

			if(dnd && ts.p.jqgdnd) { $(ts).jqGrid('gridDnD','updateDnD');}

			if($.isFunction(ts.p.gridComplete)) {ts.p.gridComplete.call(ts);}

		},

		beginReq = function() {

			ts.grid.hDiv.loading = true;

			if(ts.p.hiddengrid) { return;}

			switch(ts.p.loadui) {

				case "disable":

					break;

				case "enable":

					$("#load_"+ts.p.id).show();

					break;

				case "block":

					$("#lui_"+ts.p.id).show();

					$("#load_"+ts.p.id).show();

					break;

			}

		},

		endReq = function() {

			ts.grid.hDiv.loading = false;

			switch(ts.p.loadui) {

				case "disable":

					break;

				case "enable":

					$("#load_"+ts.p.id).hide();

					break;

				case "block":

					$("#lui_"+ts.p.id).hide();

					$("#load_"+ts.p.id).hide();

					break;

			}

		},

		populate = function (npage) {

			if(!ts.grid.hDiv.loading) {

				var pvis = ts.p.scroll && npage === false;

				var prm = {}, dt, dstr, pN=ts.p.prmNames;

				if(ts.p.page <=0) { ts.p.page = 1; }

				if(pN.search !== null) {prm[pN.search] = ts.p.search;} if(pN.nd !== null) {prm[pN.nd] = new Date().getTime();}

				if(pN.rows !== null) {prm[pN.rows]= ts.p.rowNum;} if(pN.page !== null) {prm[pN.page]= ts.p.page;}

				if(pN.sort !== null) {prm[pN.sort]= ts.p.sortname;} if(pN.order !== null) {prm[pN.order]= ts.p.sortorder;}

				if(ts.p.rowTotal !== null && pN.totalrows !== null) { prm[pN.totalrows]= ts.p.rowTotal; }

				var lc = ts.p.loadComplete;

				var lcf = $.isFunction(lc);

				if (!lcf) { lc = null; }

				var adjust = 0;

				npage = npage || 1;

				if (npage > 1) {

					if(pN.npage !== null) {

						prm[pN.npage] = npage;

						adjust = npage - 1;

						npage = 1;

					} else {

						lc = function(req) {

							ts.p.page++;

							ts.grid.hDiv.loading = false;

							if (lcf) {

								ts.p.loadComplete.call(ts,req);

							}

							populate(npage-1);

						};

					}

				} else if (pN.npage !== null) {

					delete ts.p.postData[pN.npage];

				}

				if(ts.p.grouping) {

					$(ts).jqGrid('groupingSetup');

					if(ts.p.groupingView.groupDataSorted === true) {

						prm[pN.sort] = ts.p.groupingView.groupField[0] +" "+ ts.p.groupingView.groupOrder[0]+", "+prm[pN.sort];

					}

				}

				$.extend(ts.p.postData,prm);

				var rcnt = !ts.p.scroll ? 1 : ts.rows.length-1; 

				if ($.isFunction(ts.p.datatype)) { ts.p.datatype.call(ts,ts.p.postData,"load_"+ts.p.id); return;}

				else if($.isFunction(ts.p.beforeRequest)) {ts.p.beforeRequest.call(ts);}

				dt = ts.p.datatype.toLowerCase();

				switch(dt)

				{

				case "json":

				case "jsonp":

				case "xml":

				case "script":

					$.ajax($.extend({

						url:ts.p.url,

						type:ts.p.mtype,

						dataType: dt ,

						data: $.isFunction(ts.p.serializeGridData)? ts.p.serializeGridData.call(ts,ts.p.postData) : ts.p.postData,

						success:function(data,st) {

							if(dt === "xml") { addXmlData(data,ts.grid.bDiv,rcnt,npage>1,adjust); }

							else { addJSONData(data,ts.grid.bDiv,rcnt,npage>1,adjust); }

							if(lc) { lc.call(ts,data); }

							if (pvis) { ts.grid.populateVisible(); }

							if( ts.p.loadonce || ts.p.treeGrid) {ts.p.datatype = "local";}

							data=null;

							endReq();

						},

						error:function(xhr,st,err){

							if($.isFunction(ts.p.loadError)) { ts.p.loadError.call(ts,xhr,st,err); }

							endReq();

							xhr=null;

						},

						beforeSend: function(xhr){

							beginReq();

							if($.isFunction(ts.p.loadBeforeSend)) { ts.p.loadBeforeSend.call(ts,xhr); }

						}

					},$.jgrid.ajaxOptions, ts.p.ajaxGridOptions));

				break;

				case "xmlstring":

					beginReq();

					dstr = $.jgrid.stringToDoc(ts.p.datastr);

					addXmlData(dstr,ts.grid.bDiv);

					if(lcf) {ts.p.loadComplete.call(ts,dstr);}

					ts.p.datatype = "local";

					ts.p.datastr = null;

					endReq();

				break;

				case "jsonstring":

					beginReq();

					if(typeof ts.p.datastr == 'string') { dstr = $.jgrid.parse(ts.p.datastr); }

					else { dstr = ts.p.datastr; }

					addJSONData(dstr,ts.grid.bDiv);

					if(lcf) {ts.p.loadComplete.call(ts,dstr);}

					ts.p.datatype = "local";

					ts.p.datastr = null;

					endReq();

				break;

				case "local":

				case "clientside":

					beginReq();

					ts.p.datatype = "local";

					var req = addLocalData();

					addJSONData(req,ts.grid.bDiv,rcnt,npage>1,adjust);

					if(lc) { lc.call(ts,req); }

					if (pvis) { ts.grid.populateVisible(); }

					endReq();

				break;

				}

			}

		},

		setPager = function (pgid, tp){

			var sep = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>",

			pginp = "",

			pgl="<table cellspacing='0' cellpadding='0' border='0' style='table-layout:auto;' class='ui-pg-table'><tbody><tr>",

			str="", pgcnt, lft, cent, rgt, twd, tdw, i,

			clearVals = function(onpaging){

				var ret;

				if ($.isFunction(ts.p.onPaging) ) { ret = ts.p.onPaging.call(ts,onpaging); }

				ts.p.selrow = null;

				if(ts.p.multiselect) {ts.p.selarrrow =[];$('#cb_'+$.jgrid.jqID(ts.p.id),ts.grid.hDiv).attr("checked",false);}

				ts.p.savedRow = [];

				if(ret=='stop') {return false;}

				return true;

			};

			pgid = pgid.substr(1);

			pgcnt = "pg_"+pgid;

			lft = pgid+"_left"; cent = pgid+"_center"; rgt = pgid+"_right";

			$("#"+pgid)

			.append("<div id='"+pgcnt+"' class='ui-pager-control' role='group'><table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table' style='width:100%;table-layout:fixed;height:100%;' role='row'><tbody><tr><td id='"+lft+"' align='left'></td><td id='"+cent+"' align='center' style='white-space:pre;'></td><td id='"+rgt+"' align='right'></td></tr></tbody></table></div>")

			.attr("dir","ltr"); //explicit setting

			if(ts.p.rowList.length >0){

				str = "<td dir='"+dir+"'>";

				str +="<select class='ui-pg-selbox' role='listbox'>";

				for(i=0;i<ts.p.rowList.length;i++){

					str +="<option role=\"option\" value=\""+ts.p.rowList[i]+"\""+((ts.p.rowNum == ts.p.rowList[i])?" selected=\"selected\"":"")+">"+ts.p.rowList[i]+"</option>";

				}

				str +="</select></td>";

			}

			if(dir=="rtl") { pgl += str; }

			if(ts.p.pginput===true) { pginp= "<td dir='"+dir+"'>"+$.jgrid.format(ts.p.pgtext || "","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1'></span>")+"</td>";}

			if(ts.p.pgbuttons===true) {

				var po=["first"+tp,"prev"+tp, "next"+tp,"last"+tp]; if(dir=="rtl") { po.reverse(); }

				pgl += "<td id='"+po[0]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-first'></span></td>";

				pgl += "<td id='"+po[1]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-prev'></span></td>";

				pgl += pginp !== "" ? sep+pginp+sep:"";

				pgl += "<td id='"+po[2]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-next'></span></td>";

				pgl += "<td id='"+po[3]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-end'></span></td>";

			} else if (pginp !== "") { pgl += pginp; }

			if(dir=="ltr") { pgl += str; }

			pgl += "</tr></tbody></table>";

			if(ts.p.viewrecords===true) {$("td#"+pgid+"_"+ts.p.recordpos,"#"+pgcnt).append("<div dir='"+dir+"' style='text-align:"+ts.p.recordpos+"' class='ui-paging-info'></div>");}

			$("td#"+pgid+"_"+ts.p.pagerpos,"#"+pgcnt).append(pgl);

			tdw = $(".ui-jqgrid").css("font-size") || "11px";

			$(document.body).append("<div id='testpg' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+tdw+";visibility:hidden;' ></div>");

			twd = $(pgl).clone().appendTo("#testpg").width();

			$("#testpg").remove();

			if(twd > 0) {

				if(pginp !="") { twd += 50; } //should be param

				$("td#"+pgid+"_"+ts.p.pagerpos,"#"+pgcnt).width(twd);

			}

			ts.p._nvtd = [];

			ts.p._nvtd[0] = twd ? Math.floor((ts.p.width - twd)/2) : Math.floor(ts.p.width/3);

			ts.p._nvtd[1] = 0;

			pgl=null;

			$('.ui-pg-selbox',"#"+pgcnt).bind('change',function() { 

				ts.p.page = Math.round(ts.p.rowNum*(ts.p.page-1)/this.value-0.5)+1;

				ts.p.rowNum = this.value;

				if(tp) { $('.ui-pg-selbox',ts.p.pager).val(this.value); }

				else if(ts.p.toppager) { $('.ui-pg-selbox',ts.p.toppager).val(this.value); }

				if(!clearVals('records')) { return false; }

				populate();

				return false;

			});

			if(ts.p.pgbuttons===true) {

			$(".ui-pg-button","#"+pgcnt).hover(function(e){

				if($(this).hasClass('ui-state-disabled')) {

					this.style.cursor='default';

				} else {

					$(this).addClass('ui-state-hover');

					this.style.cursor='pointer';

				}

			},function(e) {

				if($(this).hasClass('ui-state-disabled')) {

				} else {

					$(this).removeClass('ui-state-hover');

					this.style.cursor= "default";

				}

			});

			$("#first"+tp+", #prev"+tp+", #next"+tp+", #last"+tp,"#"+pgid).click( function(e) {

				var cp = intNum(ts.p.page,1),

				last = intNum(ts.p.lastpage,1), selclick = false,

				fp=true, pp=true, np=true,lp=true;

				if(last ===0 || last===1) {fp=false;pp=false;np=false;lp=false; }

				else if( last>1 && cp >=1) {

					if( cp === 1) { fp=false; pp=false; } 

					else if( cp>1 && cp <last){ }

					else if( cp===last){ np=false;lp=false; }

				} else if( last>1 && cp===0 ) { np=false;lp=false; cp=last-1;}

				if( this.id === 'first'+tp && fp ) { ts.p.page=1; selclick=true;} 

				if( this.id === 'prev'+tp && pp) { ts.p.page=(cp-1); selclick=true;} 

				if( this.id === 'next'+tp && np) { ts.p.page=(cp+1); selclick=true;} 

				if( this.id === 'last'+tp && lp) { ts.p.page=last; selclick=true;}

				if(selclick) {

					if(!clearVals(this.id)) { return false; }

					populate();

				}

				return false;

			});

			}

			if(ts.p.pginput===true) {

			$('input.ui-pg-input',"#"+pgcnt).keypress( function(e) {

				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;

				if(key == 13) {

					ts.p.page = ($(this).val()>0) ? $(this).val():ts.p.page;

					if(!clearVals('user')) { return false; }

					populate();

					return false;

				}

				return this;

			});

			}

		},

		sortData = function (index, idxcol,reload,sor){

			if(!ts.p.colModel[idxcol].sortable) { return; }

			var so;

			if(ts.p.savedRow.length > 0) {return;}

			if(!reload) {

				if( ts.p.lastsort == idxcol ) {

					if( ts.p.sortorder == 'asc') {

						ts.p.sortorder = 'desc';

					} else if(ts.p.sortorder == 'desc') { ts.p.sortorder = 'asc';}

				} else { ts.p.sortorder = ts.p.colModel[idxcol].firstsortorder || 'asc'; }

				ts.p.page = 1;

			}

			if(sor) {

				if(ts.p.lastsort == idxcol && ts.p.sortorder == sor && !reload) { return; }

				else { ts.p.sortorder = sor; }

			}

			var thd= $("thead:first",ts.grid.hDiv).get(0);

			$("tr th:eq("+ts.p.lastsort+") span.ui-grid-ico-sort",thd).addClass('ui-state-disabled');

			$("tr th:eq("+ts.p.lastsort+")",thd).attr("aria-selected","false");

			$("tr th:eq("+idxcol+") span.ui-icon-"+ts.p.sortorder,thd).removeClass('ui-state-disabled');

			$("tr th:eq("+idxcol+")",thd).attr("aria-selected","true");

			if(!ts.p.viewsortcols[0]) {

				if(ts.p.lastsort != idxcol) {

					$("tr th:eq("+ts.p.lastsort+") span.s-ico",thd).hide();

					$("tr th:eq("+idxcol+") span.s-ico",thd).show();

				}

			}

			index = index.substring(5);

			ts.p.sortname = ts.p.colModel[idxcol].index || index;

			so = ts.p.sortorder;

			if($.isFunction(ts.p.onSortCol)) {if (ts.p.onSortCol.call(ts,index,idxcol,so)=='stop') {ts.p.lastsort = idxcol; return;}}

			if(ts.p.datatype == "local") {

				if(ts.p.deselectAfterSort) {$(ts).jqGrid("resetSelection");}

			} else {

				ts.p.selrow = null;

				if(ts.p.multiselect){$("#cb_"+$.jgrid.jqID(ts.p.id),ts.grid.hDiv).attr("checked",false);}

				ts.p.selarrrow =[];

				ts.p.savedRow =[];

			}

			if(ts.p.scroll) {

				var sscroll = ts.grid.bDiv.scrollLeft;

				emptyRows(ts.grid.bDiv,true);

				ts.grid.hDiv.scrollLeft = sscroll;

			}

			if(ts.p.subGrid && ts.p.datatype=='local') {

				$("td.sgexpanded","#"+ts.p.id).each(function(){

					$(this).trigger("click");

				});

			}

			populate();

			ts.p.lastsort = idxcol;

			if(ts.p.sortname != index && idxcol) {ts.p.lastsort = idxcol;}

		},

		setColWidth = function () {

			var initwidth = 0, brd=ts.p.cellLayout, vc=0, lvc, scw=ts.p.scrollOffset,cw,hs=false,aw,tw=0,gw=0,

			cl = 0, cr;

			if (isSafari) { brd=0; }

			$.each(ts.p.colModel, function(i) {

				if(typeof this.hidden === 'undefined') {this.hidden=false;}

				if(this.hidden===false){

					initwidth += intNum(this.width,0);

					if(this.fixed) {

						tw += this.width;

						gw += this.width+brd;

					} else {

						vc++;

					}

					cl++;

				}

			});

			if(isNaN(ts.p.width)) {ts.p.width = grid.width = initwidth;}

			else { grid.width = ts.p.width;}

			ts.p.tblwidth = initwidth;

			if(ts.p.shrinkToFit ===false && ts.p.forceFit === true) {ts.p.forceFit=false;}

			if(ts.p.shrinkToFit===true && vc > 0) {

				aw = grid.width-brd*vc-gw;

				if(isNaN(ts.p.height)) {

				} else {

					aw -= scw;

					hs = true;

				}

				initwidth =0;

				$.each(ts.p.colModel, function(i) {

					if(this.hidden === false && !this.fixed){

						cw = Math.round(aw*this.width/(ts.p.tblwidth-tw));

						this.width =cw;

						initwidth += cw;

						lvc = i;

					}

				});

				cr =0;

				if (hs) {

					if(grid.width-gw-(initwidth+brd*vc) !== scw){

						cr = grid.width-gw-(initwidth+brd*vc)-scw;

					}

				} else if(!hs && Math.abs(grid.width-gw-(initwidth+brd*vc)) !== 1) {

					cr = grid.width-gw-(initwidth+brd*vc);

				}

				ts.p.colModel[lvc].width += cr;

				ts.p.tblwidth = initwidth+cr+tw+cl*brd;

				if(ts.p.tblwidth > ts.p.width) {

					ts.p.colModel[lvc].width -= (ts.p.tblwidth - parseInt(ts.p.width,10));

					ts.p.tblwidth = ts.p.width;

				}

			}

		},

		nextVisible= function(iCol) {

			var ret = iCol, j=iCol, i;

			for (i = iCol+1;i<ts.p.colModel.length;i++){

				if(ts.p.colModel[i].hidden !== true ) {

					j=i; break;

				}

			}

			return j-ret;

		},

		getOffset = function (iCol) {

			var i, ret = {}, brd1 = isSafari ? 0 : ts.p.cellLayout;

			ret[0] =  ret[1] = ret[2] = 0;

			for(i=0;i<=iCol;i++){

				if(ts.p.colModel[i].hidden === false ) {

					ret[0] += ts.p.colModel[i].width+brd1;

				}

			}

			if(ts.p.direction=="rtl") { ret[0] = ts.p.width - ret[0]; }

			ret[0] = ret[0] - ts.grid.bDiv.scrollLeft;

			if($(ts.grid.cDiv).is(":visible")) {ret[1] += $(ts.grid.cDiv).height() +parseInt($(ts.grid.cDiv).css("padding-top"),10)+parseInt($(ts.grid.cDiv).css("padding-bottom"),10);}

			if(ts.p.toolbar[0]===true && (ts.p.toolbar[1]=='top' || ts.p.toolbar[1]=='both')) {ret[1] += $(ts.grid.uDiv).height()+parseInt($(ts.grid.uDiv).css("border-top-width"),10)+parseInt($(ts.grid.uDiv).css("border-bottom-width"),10);}

			if(ts.p.toppager) {ret[1] += $(ts.grid.topDiv).height()+parseInt($(ts.grid.topDiv).css("border-bottom-width"),10);}

			ret[2] += $(ts.grid.bDiv).height() + $(ts.grid.hDiv).height();

			return ret;

		};

		this.p.id = this.id;

		if ($.inArray(ts.p.multikey,sortkeys) == -1 ) {ts.p.multikey = false;}

		ts.p.keyIndex=false;

		for (i=0; i<ts.p.colModel.length;i++) {

			clm = ts.p.colModel[i];

			clm = $.extend(clm, ts.p.cmTemplate, clm.template || {});

			if (ts.p.keyIndex === false && ts.p.colModel[i].key===true) {

				ts.p.keyIndex = i;

			}

		}

		ts.p.sortorder = ts.p.sortorder.toLowerCase();

		if(ts.p.grouping===true) {

			ts.p.scroll = false;

			ts.p.rownumbers = false;

			ts.p.subGrid = false;

			ts.p.treeGrid = false;

			ts.p.gridview = true;

		}

		if(this.p.treeGrid === true) {

			try { $(this).jqGrid("setTreeGrid");} catch (_) {}

			if(ts.p.datatype != "local") { ts.p.localReader = {id: "_id_"};	}

		}

		if(this.p.subGrid) {

			try { $(ts).jqGrid("setSubGrid");} catch (_){}

		}

		if(this.p.multiselect) {

			this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>");

			this.p.colModel.unshift({name:'cb',width:isSafari ? ts.p.multiselectWidth+ts.p.cellLayout : ts.p.multiselectWidth,sortable:false,resizable:false,hidedlg:true,search:false,align:'center',fixed:true});

		}

		if(this.p.rownumbers) {

			this.p.colNames.unshift("");

			this.p.colModel.unshift({name:'rn',width:ts.p.rownumWidth,sortable:false,resizable:false,hidedlg:true,search:false,align:'center',fixed:true});

		}

		ts.p.xmlReader = $.extend(true,{

			root: "rows",

			row: "row",

			page: "rows>page",

			total: "rows>total",

			records : "rows>records",

			repeatitems: true,

			cell: "cell",

			id: "[id]",

			userdata: "userdata",

			subgrid: {root:"rows", row: "row", repeatitems: true, cell:"cell"}

		}, ts.p.xmlReader);

		ts.p.jsonReader = $.extend(true,{

			root: "rows",

			page: "page",

			total: "total",

			records: "records",

			repeatitems: true,

			cell: "cell",

			id: "id",

			userdata: "userdata",

			subgrid: {root:"rows", repeatitems: true, cell:"cell"}

		},ts.p.jsonReader);

		ts.p.localReader = $.extend(true,{

			root: "rows",

			page: "page",

			total: "total",

			records: "records",

			repeatitems: false,

			cell: "cell",

			id: "id",

			userdata: "userdata",

			subgrid: {root:"rows", repeatitems: true, cell:"cell"}

		},ts.p.localReader);		

		if(ts.p.scroll){

			ts.p.pgbuttons = false; ts.p.pginput=false; ts.p.rowList=[];

		}

		if(ts.p.data.length) { refreshIndex(); }

		var thead = "<thead><tr class='ui-jqgrid-labels' role='rowheader'>",

		tdc, idn, w, res, sort,

		td, ptr, tbody, imgs,iac="",idc="";

		if(ts.p.shrinkToFit===true && ts.p.forceFit===true) {

			for (i=ts.p.colModel.length-1;i>=0;i--){

				if(!ts.p.colModel[i].hidden) {

					ts.p.colModel[i].resizable=false;

					break;

				}

			}

		}

		if(ts.p.viewsortcols[1] == 'horizontal') {iac=" ui-i-asc";idc=" ui-i-desc";}

		tdc = isMSIE ?  "class='ui-th-div-ie'" :"";

		imgs = "<span class='s-ico' style='display:none'><span sort='asc' class='ui-grid-ico-sort ui-icon-asc"+iac+" ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-"+dir+"'></span>";

		imgs += "<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+idc+" ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-"+dir+"'></span></span>";

		for(i=0;i<this.p.colNames.length;i++){

			var tooltip = ts.p.headertitles ? (" title=\""+$.jgrid.stripHtml(ts.p.colNames[i])+"\"") :"";

			thead += "<th id='"+ts.p.id+"_"+ts.p.colModel[i].name+"' role='columnheader' class='ui-state-default ui-th-column ui-th-"+dir+"'"+ tooltip+">";

			idn = ts.p.colModel[i].index || ts.p.colModel[i].name;

			thead += "<div id='jqgh_"+ts.p.colModel[i].name+"' "+tdc+">"+ts.p.colNames[i];

			if(!ts.p.colModel[i].width)  { ts.p.colModel[i].width = 150; }

			else { ts.p.colModel[i].width = parseInt(ts.p.colModel[i].width,10); }

			if(typeof(ts.p.colModel[i].title) !== "boolean") { ts.p.colModel[i].title = true; }

			if (idn == ts.p.sortname) {

				ts.p.lastsort = i;

			} 

			thead += imgs+"</div></th>";

		}

		thead += "</tr></thead>";

		imgs = null;

		$(this).append(thead);

		$("thead tr:first th",this).hover(function(){$(this).addClass('ui-state-hover');},function(){$(this).removeClass('ui-state-hover');});

		if(this.p.multiselect) {

			var emp=[], chk;

			$('#cb_'+$.jgrid.jqID(ts.p.id),this).bind('click',function(){

				if (this.checked) {

					$("[id^=jqg_"+ts.p.id+"_"+"]").attr("checked","checked");

					$(ts.rows).each(function(i) {

						if ( i>0 ) {

							if(!$(this).hasClass("subgrid") && !$(this).hasClass("jqgroup")){

								$(this).addClass("ui-state-highlight").attr("aria-selected","true");

								ts.p.selarrrow.push(this.id);

								ts.p.selrow = this.id;

							}

						}

					});

					chk=true;

					emp=[];

				}

				else {

					$("[id^=jqg_"+ts.p.id+"_"+"]").removeAttr("checked");

					$(ts.rows).each(function(i) {

						if(i>0) {

							if(!$(this).hasClass("subgrid")){

								$(this).removeClass("ui-state-highlight").attr("aria-selected","false");

								emp.push(this.id);

							}

						}

					});

					ts.p.selarrrow = []; ts.p.selrow = null;

					chk=false;

				}

				if($.isFunction(ts.p.onSelectAll)) {ts.p.onSelectAll.call(ts, chk ? ts.p.selarrrow : emp,chk);}

			});

		}

		

		if(ts.p.autowidth===true) {

			var pw = $(eg).innerWidth();

			ts.p.width = pw > 0?  pw: 'nw';

		}

		setColWidth();

		$(eg).css("width",grid.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+ts.p.id+"'>&#160;</div>");

		$(gv).css("width",grid.width+"px");

		thead = $("thead:first",ts).get(0);

		var	tfoot = "";

		if(ts.p.footerrow) { tfoot += "<table role='grid' style='width:"+ts.p.tblwidth+"px' class='ui-jqgrid-ftable' cellspacing='0' cellpadding='0' border='0'><tbody><tr role='row' class='ui-widget-content footrow footrow-"+dir+"'>"; }

		var thr = $("tr:first",thead),

		firstr = "<tr class='jqgfirstrow' role='row' style='height:auto'>";

		ts.p.disableClick=false;

		$("th",thr).each(function ( j ) {

			w = ts.p.colModel[j].width;

			if(typeof ts.p.colModel[j].resizable === 'undefined') {ts.p.colModel[j].resizable = true;}

			if(ts.p.colModel[j].resizable){

				res = document.createElement("span");

				$(res).html("&#160;").addClass('ui-jqgrid-resize ui-jqgrid-resize-'+dir);

				if(!$.browser.opera) { $(res).css("cursor","col-resize"); }

				$(this).addClass(ts.p.resizeclass);

			} else {

				res = "";

			}

			$(this).css("width",w+"px").prepend(res);

			var hdcol = "";

			if( ts.p.colModel[j].hidden ) {

				$(this).css("display","none");

				hdcol = "display:none;";

			}

			firstr += "<td role='gridcell' style='height:0px;width:"+w+"px;"+hdcol+"'></td>";

			grid.headers[j] = { width: w, el: this };

			sort = ts.p.colModel[j].sortable;

			if( typeof sort !== 'boolean') {ts.p.colModel[j].sortable =  true; sort=true;}

			var nm = ts.p.colModel[j].name;

			if( !(nm == 'cb' || nm=='subgrid' || nm=='rn') ) {

				if(ts.p.viewsortcols[2]){

					$("div",this).addClass('ui-jqgrid-sortable');

				}

			}

			if(sort) {

				if(ts.p.viewsortcols[0]) {$("div span.s-ico",this).show(); if(j==ts.p.lastsort){ $("div span.ui-icon-"+ts.p.sortorder,this).removeClass("ui-state-disabled");}}

				else if( j == ts.p.lastsort) {$("div span.s-ico",this).show();$("div span.ui-icon-"+ts.p.sortorder,this).removeClass("ui-state-disabled");}

			}

			if(ts.p.footerrow) { tfoot += "<td role='gridcell' "+formatCol(j,0,'')+">&#160;</td>"; }

		}).mousedown(function(e) {

			if ($(e.target).closest("th>span.ui-jqgrid-resize").length != 1) { return; }

			var ci = $.jgrid.getCellIndex(this);

			if(ts.p.forceFit===true) {ts.p.nv= nextVisible(ci);}

			grid.dragStart(ci, e, getOffset(ci));

			return false;

		}).click(function(e) {

			if (ts.p.disableClick) {

				ts.p.disableClick = false;

				return false;

			}

			var s = "th>div.ui-jqgrid-sortable",r,d;

			if (!ts.p.viewsortcols[2]) { s = "th>div>span>span.ui-grid-ico-sort"; }

			var t = $(e.target).closest(s);

			if (t.length != 1) { return; }

			var ci = $.jgrid.getCellIndex(this);

			if (!ts.p.viewsortcols[2]) { r=true;d=t.attr("sort"); }

			sortData($('div',this)[0].id,ci,r,d);

			return false;

		});

		if (ts.p.sortable && $.fn.sortable) {

			try {

				$(ts).jqGrid("sortableColumns", thr);

			} catch (e){}

		}

		if(ts.p.footerrow) { tfoot += "</tr></tbody></table>"; }

		firstr += "</tr>";

		tbody = document.createElement("tbody");

		this.appendChild(tbody);

		$(this).addClass('ui-jqgrid-btable').append(firstr);

		firstr = null;

		var hTable = $("<table class='ui-jqgrid-htable' style='width:"+ts.p.tblwidth+"px' role='grid' aria-labelledby='gbox_"+this.id+"' cellspacing='0' cellpadding='0' border='0'></table>").append(thead),

		hg = (ts.p.caption && ts.p.hiddengrid===true) ? true : false,

		hb = $("<div class='ui-jqgrid-hbox" + (dir=="rtl" ? "-rtl" : "" )+"'></div>");

		thead = null;

		grid.hDiv = document.createElement("div");

		$(grid.hDiv)

			.css({ width: grid.width+"px"})

			.addClass("ui-state-default ui-jqgrid-hdiv")

			.append(hb);

		$(hb).append(hTable);

		hTable = null;

		if(hg) { $(grid.hDiv).hide(); }

		if(ts.p.pager){

			if(typeof ts.p.pager == "string") {if(ts.p.pager.substr(0,1) !="#") { ts.p.pager = "#"+ts.p.pager;} }

			else { ts.p.pager = "#"+ $(ts.p.pager).attr("id");}

			$(ts.p.pager).css({width: grid.width+"px"}).appendTo(eg).addClass('ui-state-default ui-jqgrid-pager ui-corner-bottom');

			if(hg) {$(ts.p.pager).hide();}

			setPager(ts.p.pager,'');

		}

		if( ts.p.cellEdit === false && ts.p.hoverrows === true) {

		$(ts).bind('mouseover',function(e) {

			ptr = $(e.target).closest("tr.jqgrow");

			if($(ptr).attr("class") !== "subgrid") {

				$(ptr).addClass("ui-state-hover");

			}

			return false;

		}).bind('mouseout',function(e) {

			ptr = $(e.target).closest("tr.jqgrow");

			$(ptr).removeClass("ui-state-hover");

			return false;

		});

		}

		var ri,ci;

		$(ts).before(grid.hDiv).click(function(e) {

			td = e.target;

			var scb = $(td).hasClass("cbox");

			ptr = $(td,ts.rows).closest("tr.jqgrow");

			if($(ptr).length === 0 ) {

				return this;

			}

			var cSel = true;

			if($.isFunction(ts.p.beforeSelectRow)) { cSel = ts.p.beforeSelectRow.call(ts,ptr[0].id, e); }

			if (td.tagName == 'A' || ((td.tagName == 'INPUT' || td.tagName == 'TEXTAREA' || td.tagName == 'OPTION' || td.tagName == 'SELECT' ) && !scb) ) { return this; }

			if(cSel === true) {

				if(ts.p.cellEdit === true) {

					if(ts.p.multiselect && scb){

						$(ts).jqGrid("setSelection",ptr[0].id,true);

					} else {

						ri = ptr[0].rowIndex;

						ci = $.jgrid.getCellIndex(td);

						try {$(ts).jqGrid("editCell",ri,ci,true);} catch (_) {}

					}

				} else if ( !ts.p.multikey ) {

					if(ts.p.multiselect && ts.p.multiboxonly) {

						if(scb){$(ts).jqGrid("setSelection",ptr[0].id,true);}

						else {

							$(ts.p.selarrrow).each(function(i,n){

								var ind = ts.rows.namedItem(n);

								$(ind).removeClass("ui-state-highlight");

								$("#jqg_"+ts.p.id+"_"+$.jgrid.jqID(n)).attr("checked",false);

							});

							ts.p.selarrrow = [];

							$("#cb_"+$.jgrid.jqID(ts.p.id),ts.grid.hDiv).attr("checked",false);

							$(ts).jqGrid("setSelection",ptr[0].id,true);

						}

					} else {

						$(ts).jqGrid("setSelection",ptr[0].id,true);

					}

				} else {

					if(e[ts.p.multikey]) {

						$(ts).jqGrid("setSelection",ptr[0].id,true);

					} else if(ts.p.multiselect && scb) {

						scb = $("[id^=jqg_"+ts.p.id+"_"+"]").attr("checked");

						$("[id^=jqg_"+ts.p.id+"_"+"]").attr("checked",!scb);

					}

				}

				if($.isFunction(ts.p.onCellSelect)) {

					ri = ptr[0].id;

					ci = $.jgrid.getCellIndex(td);

					ts.p.onCellSelect.call(ts,ri,ci,$(td).html(),e);

				}

				e.stopPropagation();

			} else {

				return this;

			}

		}).bind('reloadGrid', function(e,opts) {

			if(ts.p.treeGrid ===true) {	ts.p.datatype = ts.p.treedatatype;}

			if (opts && opts.current) {

				ts.grid.selectionPreserver(ts);

			}

			if(ts.p.datatype=="local"){ $(ts).jqGrid("resetSelection");  if(ts.p.data.length) { refreshIndex();} }

			else if(!ts.p.treeGrid) {

				ts.p.selrow=null;

				if(ts.p.multiselect) {ts.p.selarrrow =[];$('#cb_'+$.jgrid.jqID(ts.p.id),ts.grid.hDiv).attr("checked",false);}

				ts.p.savedRow = [];

			}

			if(ts.p.scroll) {emptyRows(ts.grid.bDiv,true);}

			if (opts && opts.page) {

				var page = opts.page;

				if (page > ts.p.lastpage) { page = ts.p.lastpage; }

				if (page < 1) { page = 1; }

				ts.p.page = page;

				if (ts.grid.prevRowHeight) {

					ts.grid.bDiv.scrollTop = (page - 1) * ts.grid.prevRowHeight * ts.p.rowNum;

				} else {

					ts.grid.bDiv.scrollTop = 0;

				}

			}

			if (ts.grid.prevRowHeight && ts.p.scroll) {

                delete ts.p.lastpage;

				ts.grid.populateVisible();

			} else {

				ts.grid.populate();

			}

			return false;

		});

		if( $.isFunction(this.p.ondblClickRow) ) {

			$(this).dblclick(function(e) {

				td = e.target;

				ptr = $(td,ts.rows).closest("tr.jqgrow");

				if($(ptr).length === 0 ){return false;}

				ri = ptr[0].rowIndex;

				ci = $.jgrid.getCellIndex(td);

				ts.p.ondblClickRow.call(ts,$(ptr).attr("id"),ri,ci, e);

				return false;

			});

		}

		if ($.isFunction(this.p.onRightClickRow)) {

			$(this).bind('contextmenu', function(e) {

				td = e.target;

				ptr = $(td,ts.rows).closest("tr.jqgrow");

				if($(ptr).length === 0 ){return false;}

				if(!ts.p.multiselect) {	$(ts).jqGrid("setSelection",ptr[0].id,true);	}

				ri = ptr[0].rowIndex;

				ci = $.jgrid.getCellIndex(td);

				ts.p.onRightClickRow.call(ts,$(ptr).attr("id"),ri,ci, e);

				return false;

			});

		}

		grid.bDiv = document.createElement("div");

		$(grid.bDiv)

			.append($('<div style="position:relative;'+(isMSIE && $.browser.version < 8 ? "height:0.01%;" : "")+'"></div>').append('<div></div>').append(this))

			.addClass("ui-jqgrid-bdiv")

			.css({ height: ts.p.height+(isNaN(ts.p.height)?"":"px"), width: (grid.width)+"px"})

			.scroll(grid.scrollGrid);

		$("table:first",grid.bDiv).css({width:ts.p.tblwidth+"px"});

		if( isMSIE ) {

			if( $("tbody",this).size() == 2 ) { $("tbody:gt(0)",this).remove();}

			if( ts.p.multikey) {$(grid.bDiv).bind("selectstart",function(){return false;});}

		} else {

			if( ts.p.multikey) {$(grid.bDiv).bind("mousedown",function(){return false;});}

		}

		if(hg) {$(grid.bDiv).hide();}

		grid.cDiv = document.createElement("div");

		var arf = ts.p.hidegrid===true ? $("<a role='link' href='javascript:void(0)'/>").addClass('ui-jqgrid-titlebar-close HeaderButton').hover(

			function(){ arf.addClass('ui-state-hover');},

			function() {arf.removeClass('ui-state-hover');})

		.append("<span class='ui-icon ui-icon-circle-triangle-n'></span>").css((dir=="rtl"?"left":"right"),"0px") : "";

		$(grid.cDiv).append(arf).append("<span class='ui-jqgrid-title"+(dir=="rtl" ? "-rtl" :"" )+"'>"+ts.p.caption+"</span>")

		.addClass("ui-jqgrid-titlebar ui-widget-header ui-corner-top ui-helper-clearfix");

		$(grid.cDiv).insertBefore(grid.hDiv);

		if( ts.p.toolbar[0] ) {

			grid.uDiv = document.createElement("div");

			if(ts.p.toolbar[1] == "top") {$(grid.uDiv).insertBefore(grid.hDiv);}

			else if (ts.p.toolbar[1]=="bottom" ) {$(grid.uDiv).insertAfter(grid.hDiv);}

			if(ts.p.toolbar[1]=="both") {

				grid.ubDiv = document.createElement("div");

				$(grid.uDiv).insertBefore(grid.hDiv).addClass("ui-userdata ui-state-default").attr("id","t_"+this.id);

				$(grid.ubDiv).insertAfter(grid.hDiv).addClass("ui-userdata ui-state-default").attr("id","tb_"+this.id);

				if(hg)  {$(grid.ubDiv).hide();}

			} else {

				$(grid.uDiv).width(grid.width).addClass("ui-userdata ui-state-default").attr("id","t_"+this.id);

			}

			if(hg) {$(grid.uDiv).hide();}

		}

		if(ts.p.toppager) {

			ts.p.toppager = ts.p.id+"_toppager";

			grid.topDiv = $("<div id='"+ts.p.toppager+"'></div>")[0];

			ts.p.toppager = "#"+ts.p.toppager;

			$(grid.topDiv).insertBefore(grid.hDiv).addClass('ui-state-default ui-jqgrid-toppager').width(grid.width);

			setPager(ts.p.toppager,'_t');

		}

		if(ts.p.footerrow) {

			grid.sDiv = $("<div class='ui-jqgrid-sdiv'></div>")[0];

			hb = $("<div class='ui-jqgrid-hbox"+(dir=="rtl"?"-rtl":"")+"'></div>");

			$(grid.sDiv).append(hb).insertAfter(grid.hDiv).width(grid.width);

			$(hb).append(tfoot);

			grid.footers = $(".ui-jqgrid-ftable",grid.sDiv)[0].rows[0].cells;

			if(ts.p.rownumbers) { grid.footers[0].className = 'ui-state-default jqgrid-rownum'; }

			if(hg) {$(grid.sDiv).hide();}

		}

		hb = null;

		if(ts.p.caption) {

			var tdt = ts.p.datatype;

			if(ts.p.hidegrid===true) {

				$(".ui-jqgrid-titlebar-close",grid.cDiv).click( function(e){

					var onHdCl = $.isFunction(ts.p.onHeaderClick),

					elems = ".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-pager, .ui-jqgrid-sdiv",

					counter, self = this;

					if(ts.p.toolbar[0]===true) {

						if( ts.p.toolbar[1]=='both') {

							elems += ', #' + $(grid.ubDiv).attr('id');

						}

						elems += ', #' + $(grid.uDiv).attr('id');

					}

					counter = $(elems,"#gview_"+ts.p.id).length;



					if(ts.p.gridstate == 'visible') {

						$(elems,"#gbox_"+ts.p.id).slideUp("fast", function() {

							counter--;

							if (counter == 0) {

								$("span",self).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s");

								ts.p.gridstate = 'hidden';

								if($("#gbox_"+ts.p.id).hasClass("ui-resizable")) { $(".ui-resizable-handle","#gbox_"+ts.p.id).hide(); }

								if(onHdCl) {if(!hg) {ts.p.onHeaderClick.call(ts,ts.p.gridstate,e);}}

							}

						});

					} else if(ts.p.gridstate == 'hidden'){

						$(elems,"#gbox_"+ts.p.id).slideDown("fast", function() {

							counter--;

							if (counter == 0) {

								$("span",self).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n");

								if(hg) {ts.p.datatype = tdt;populate();hg=false;}

								ts.p.gridstate = 'visible';

								if($("#gbox_"+ts.p.id).hasClass("ui-resizable")) { $(".ui-resizable-handle","#gbox_"+ts.p.id).show(); }

								if(onHdCl) {if(!hg) {ts.p.onHeaderClick.call(ts,ts.p.gridstate,e);}}

							}

						});

					}

					return false;

				});

				if(hg) {ts.p.datatype="local"; $(".ui-jqgrid-titlebar-close",grid.cDiv).trigger("click");}

			}

		} else {$(grid.cDiv).hide();}

		$(grid.hDiv).after(grid.bDiv)

		.mousemove(function (e) {

			if(grid.resizing){grid.dragMove(e);return false;}

		});

		$(".ui-jqgrid-labels",grid.hDiv).bind("selectstart", function () { return false; });

		$(document).mouseup(function (e) {

			if(grid.resizing) {	grid.dragEnd(); return false;}

			return true;

		});

		ts.formatCol = formatCol;

		ts.sortData = sortData;

		ts.updatepager = updatepager;

		ts.refreshIndex = refreshIndex;

		ts.formatter = function ( rowId, cellval , colpos, rwdat, act){return formatter(rowId, cellval , colpos, rwdat, act);};

		$.extend(grid,{populate : populate, emptyRows: emptyRows});

		this.grid = grid;

		ts.addXmlData = function(d) {addXmlData(d,ts.grid.bDiv);};

		ts.addJSONData = function(d) {addJSONData(d,ts.grid.bDiv);};

		this.grid.cols = this.rows[0].cells;



		populate();ts.p.hiddengrid=false;

		$(window).unload(function () {

			ts = null;

		});

	});

};

$.jgrid.extend({

	getGridParam : function(pName) {

		var $t = this[0];

		if (!$t || !$t.grid) {return;}

		if (!pName) { return $t.p; }

		else {return typeof($t.p[pName]) != "undefined" ? $t.p[pName] : null;}

	},

	setGridParam : function (newParams){

		return this.each(function(){

			if (this.grid && typeof(newParams) === 'object') {$.extend(true,this.p,newParams);}

		});

	},

	getDataIDs : function () {

		var ids=[], i=0, len, j=0;

		this.each(function(){

			len = this.rows.length;

			if(len && len>0){

				while(i<len) {

					if($(this.rows[i]).hasClass('jqgrow')) {

						ids[j] = this.rows[i].id;

						j++;

					}

					i++;

				}

			}

		});

		return ids;

	},

	setSelection : function(selection,onsr) {

		return this.each(function(){

			var $t = this, stat,pt, ner, ia, tpsr;

			if(selection === undefined) { return; }

			onsr = onsr === false ? false : true;

			pt=$t.rows.namedItem(selection+"");

			if(!pt) { return; }

			function scrGrid(iR){

				var ch = $($t.grid.bDiv)[0].clientHeight,

				st = $($t.grid.bDiv)[0].scrollTop,

				rpos = $t.rows[iR].offsetTop,

				rh = $t.rows[iR].clientHeight;

				if(rpos+rh >= ch+st) { $($t.grid.bDiv)[0].scrollTop = rpos-(ch+st)+rh+st; }

				else if(rpos < ch+st) {

					if(rpos < st) {

						$($t.grid.bDiv)[0].scrollTop = rpos;

					}

				}

			}

			if($t.p.scrollrows===true) {

				ner = $t.rows.namedItem(selection).rowIndex;

				if(ner >=0 ){

					scrGrid(ner);

				}

			}

			if(!$t.p.multiselect) {

				if(pt.className !== "ui-subgrid") {

					if( $t.p.selrow ) {

						$($t.rows.namedItem($t.p.selrow)).removeClass("ui-state-highlight").attr("aria-selected","false");

					}

					if( $t.p.selrow != pt.id) {

						$t.p.selrow = pt.id;

						$(pt).addClass("ui-state-highlight").attr("aria-selected","true");

						if( $t.p.onSelectRow && onsr) { $t.p.onSelectRow.call($t,$t.p.selrow, true); }

					} else {$t.p.selrow = null;}

				}

			} else {

				$t.p.selrow = pt.id;

				ia = $.inArray($t.p.selrow,$t.p.selarrrow);

				if (  ia === -1 ){ 

					if(pt.className !== "ui-subgrid") { $(pt).addClass("ui-state-highlight").attr("aria-selected","true");}

					stat = true;

					$("#jqg_"+$t.p.id+"_"+$.jgrid.jqID($t.p.selrow)).attr("checked",stat);

					$t.p.selarrrow.push($t.p.selrow);

					if( $t.p.onSelectRow && onsr) { $t.p.onSelectRow.call($t,$t.p.selrow, stat); }

				} else {

					if(pt.className !== "ui-subgrid") { $(pt).removeClass("ui-state-highlight").attr("aria-selected","false");}

					stat = false;

					$("#jqg_"+$t.p.id+"_"+$.jgrid.jqID($t.p.selrow)).attr("checked",stat);

					$t.p.selarrrow.splice(ia,1);

					if( $t.p.onSelectRow && onsr) { $t.p.onSelectRow.call($t,$t.p.selrow, stat); }

					tpsr = $t.p.selarrrow[0];

					$t.p.selrow = (tpsr === undefined) ? null : tpsr;

				}

			}

		});

	},

	resetSelection : function(){

		return this.each(function(){

			var t = this, ind;

			if(!t.p.multiselect) {

				if(t.p.selrow) {

					$("#"+t.p.id+" tbody:first tr#"+$.jgrid.jqID(t.p.selrow)).removeClass("ui-state-highlight").attr("aria-selected","false");

					t.p.selrow = null;

				}

			} else {

				$(t.p.selarrrow).each(function(i,n){

					ind = t.rows.namedItem(n);

					$(ind).removeClass("ui-state-highlight").attr("aria-selected","false");

					$("#jqg_"+t.p.id+"_"+$.jgrid.jqID(n)).attr("checked",false);

				});

				$("#cb_"+$.jgrid.jqID(t.p.id)).attr("checked",false);

				t.p.selarrrow = [];

			}

			t.p.savedRow = [];

		});

	},

	getRowData : function( rowid ) {

		var res = {}, resall, getall=false, len, j=0;

		this.each(function(){

			var $t = this,nm,ind;

			if(typeof(rowid) == 'undefined') {

				getall = true;

				resall = [];

				len = $t.rows.length;

			} else {

				ind = $t.rows.namedItem(rowid);

				if(!ind) { return res; }

				len = 2;

			}

			while(j<len){

				if(getall) { ind = $t.rows[j]; }

				if( $(ind).hasClass('jqgrow') ) {

					$('td',ind).each( function(i) {

						nm = $t.p.colModel[i].name; 

						if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn') {

							if($t.p.treeGrid===true && nm == $t.p.ExpandColumn) {

								res[nm] = $.jgrid.htmlDecode($("span:first",this).html());

							} else {

								try {

									res[nm] = $.unformat(this,{rowId:ind.id, colModel:$t.p.colModel[i]},i);

								} catch (e){

									res[nm] = $.jgrid.htmlDecode($(this).html());

								}

							}

						}

					});

					if(getall) { resall.push(res); res={}; }

				}

				j++;

			}

		});

		return resall ? resall: res;

	},

	delRowData : function(rowid) {

		var success = false, rowInd, ia, ri;

		this.each(function() {

			var $t = this;

			rowInd = $t.rows.namedItem(rowid);

			if(!rowInd) {return false;}

			else {

				ri = rowInd.rowIndex;

				$(rowInd).remove();

				$t.p.records--;

				$t.p.reccount--;

				$t.updatepager(true,false);

				success=true;

				if($t.p.multiselect) {

					ia = $.inArray(rowid,$t.p.selarrrow);

					if(ia != -1) { $t.p.selarrrow.splice(ia,1);}

				}  

				if(rowid == $t.p.selrow) {$t.p.selrow=null;}

			}

			if($t.p.datatype == 'local') {

				var pos = $t.p._index[rowid];

				if(typeof(pos) != 'undefined') {

					$t.p.data.splice(pos,1);

					$t.refreshIndex();

				}

			}

			if( $t.p.altRows === true && success ) {

				var cn = $t.p.altclass;

				$($t.rows).each(function(i){

					if(i % 2 ==1) { $(this).addClass(cn); }

					else { $(this).removeClass(cn); }

				});

			}

		});

		return success;

	},

	setRowData : function(rowid, data, cssp) {

		var nm, success=true, title;

		this.each(function(){

			if(!this.grid) {return false;}

			var t = this, vl, ind, cp = typeof cssp, lcdata={};

			ind = t.rows.namedItem(rowid);

			if(!ind) { return false; }

			if( data ) {

				try {

					$(this.p.colModel).each(function(i){

						nm = this.name;

						if( data[nm] !== undefined) {

							lcdata[nm] = this.formatter && typeof(this.formatter) === 'string' && this.formatter == 'date' ? $.unformat.date(data[nm],this) : data[nm];

							vl = t.formatter( rowid, data[nm], i, data, 'edit');

							title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};

							if(t.p.treeGrid===true && nm == t.p.ExpandColumn) {

								$("td:eq("+i+") > span:first",ind).html(vl).attr(title);

							} else {

								$("td:eq("+i+")",ind).html(vl).attr(title); 

							}

						}

					});

					if(t.p.datatype == 'local') {

						var pos = t.p._index[rowid];

						if(typeof(pos) != 'undefined') {

							t.p.data[pos] = $.extend(true, t.p.data[pos], lcdata);

						}

						lcdata = null;

					}

				} catch (e) {

					success = false;

				}

			}

			if(success) {

				if(cp === 'string') {$(ind).addClass(cssp);} else if(cp === 'object') {$(ind).css(cssp);}

			}

		});

		return success;

	},

	addRowData : function(rowid,rdata,pos,src) {

		if(!pos) {pos = "last";}

		var success = false, nm, row, gi, si, ni,sind, i, v, prp="", aradd, cnm, cn, data, cm;

		if(rdata) {

			if($.isArray(rdata)) {

				aradd=true;

				pos = "last";

				cnm = rowid;

			} else {

				rdata = [rdata];

				aradd = false;

			}

			this.each(function() {

				var t = this, datalen = rdata.length;

				ni = t.p.rownumbers===true ? 1 :0;

				gi = t.p.multiselect ===true ? 1 :0;

				si = t.p.subGrid===true ? 1 :0;

				if(!aradd) {

					if(typeof(rowid) != 'undefined') { rowid = rowid+"";}

					else {

						rowid = (t.p.records+1)+"";

						if(t.p.keyIndex !== false) {

							cnm = t.p.colModel[t.p.keyIndex+gi+si+ni].name;

							if(typeof rdata[0][cnm] != "undefined") { rowid = rdata[0][cnm]; }

						}

					}

				}

				cn = t.p.altclass;

				var k = 0, cna ="", lcdata = {},

				air = $.isFunction(t.p.afterInsertRow) ? true : false;

				while(k < datalen) {

					data = rdata[k];

					row="";

					if(aradd) {

						try {rowid = data[cnm];}

						catch (e) {rowid = (t.p.records+1)+"";}

						cna = t.p.altRows === true ?  (t.rows.length-1)%2 === 0 ? cn : "" : "";

					}

					if(ni){

						prp = t.formatCol(0,1,'');

						row += "<td role=\"gridcell\" aria-describedby=\""+t.p.id+"_rn\" class=\"ui-state-default jqgrid-rownum\" "+prp+">0</td>";

					}

					if(gi) {

						v = "<input role=\"checkbox\" type=\"checkbox\""+" id=\"jqg_"+t.p.id+"_"+rowid+"\" class=\"cbox\"/>";

						prp = t.formatCol(ni,1,'');

						row += "<td role=\"gridcell\" aria-describedby=\""+t.p.id+"_cb\" "+prp+">"+v+"</td>";

					}

					if(si) {

						row += $(t).jqGrid("addSubGridCell",gi+ni,1);

					}

					for(i = gi+si+ni; i < t.p.colModel.length;i++){

						cm = t.p.colModel[i];

						nm = cm.name;

						lcdata[nm] = cm.formatter && typeof(cm.formatter) === 'string' && cm.formatter == 'date' ? $.unformat.date(data[nm],cm) : data[nm];

						v = t.formatter( rowid, $.jgrid.getAccessor(data,nm), i, data, 'edit');

						prp = t.formatCol(i,1,v);

						row += "<td role=\"gridcell\" aria-describedby=\""+t.p.id+"_"+nm+"\" "+prp+">"+v+"</td>";

					}

					row = "<tr id=\""+rowid+"\" role=\"row\" class=\"ui-widget-content jqgrow ui-row-"+t.p.direction+" "+cna+"\">" + row+"</tr>";

					if(t.p.subGrid===true) {

						row = $(row)[0]; 

						$(t).jqGrid("addSubGrid",row,gi+ni);

					}

					if(t.rows.length === 0){

						$("table:first",t.grid.bDiv).append(row);

					} else {

					switch (pos) {

						case 'last':

							$(t.rows[t.rows.length-1]).after(row);

							break;

						case 'first':

							$(t.rows[0]).after(row);

							break;

						case 'after':

							sind = t.rows.namedItem(src);

							if (sind) {

								if($(t.rows[sind.rowIndex+1]).hasClass("ui-subgrid")) { $(t.rows[sind.rowIndex+1]).after(row); }

								else { $(sind).after(row); }

							}

							break;

						case 'before':

							sind = t.rows.namedItem(src);

							if(sind) {$(sind).before(row);sind=sind.rowIndex;}

							break;

					}

					}

					t.p.records++;

					t.p.reccount++;

					if(air) { t.p.afterInsertRow.call(t,rowid,data,data); }

					k++;

					if(t.p.datatype == 'local') {

						t.p._index[rowid] = t.p.data.length;

						t.p.data.push(lcdata);

						lcdata = {};

					}

				}

				if( t.p.altRows === true && !aradd) {

					if (pos == "last") {

						if ((t.rows.length-1)%2 == 1)  {$(t.rows[t.rows.length-1]).addClass(cn);}

					} else {

						$(t.rows).each(function(i){

							if(i % 2 ==1) { $(this).addClass(cn); }

							else { $(this).removeClass(cn); }

						});

					}

				}

				t.updatepager(true,true);

				success = true;

			});

		}

		return success;

	},

	footerData : function(action,data, format) {

		var nm, success=false, res={}, title;

		function isEmpty(obj) {

			for(var i in obj) {

				if (obj.hasOwnProperty(i)) { return false; }

			}

			return true;

		}

		if(typeof(action) == "undefined") { action = "get"; }

		if(typeof(format) != "boolean") { format  = true; }

		action = action.toLowerCase();

		this.each(function(){

			var t = this, vl;

			if(!t.grid || !t.p.footerrow) {return false;}

			if(action == "set") { if(isEmpty(data)) { return false; } }

			success=true;

			$(this.p.colModel).each(function(i){

				nm = this.name;

				if(action == "set") {

					if( data[nm] !== undefined) {

						vl = format ? t.formatter( "", data[nm], i, data, 'edit') : data[nm];

						title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};

						$("tr.footrow td:eq("+i+")",t.grid.sDiv).html(vl).attr(title); 

						success = true;

					}

				} else if(action == "get") {

					res[nm] = $("tr.footrow td:eq("+i+")",t.grid.sDiv).html();

				}

			});

		});

		return action == "get" ? res : success;

	},

	ShowHideCol : function(colname,show) {

		return this.each(function() {

			var $t = this, fndh=false;

			if (!$t.grid ) {return;}

			if( typeof colname === 'string') {colname=[colname];}

			show = show != "none" ? "" : "none";

			var sw = show === "" ? true :false;

			$(this.p.colModel).each(function(i) {

				if ($.inArray(this.name,colname) !== -1 && this.hidden === sw) {

					$("tr",$t.grid.hDiv).each(function(){

						$("th:eq("+i+")",this).css("display",show);

					});

					$($t.rows).each(function(j){

						$("td:eq("+i+")",$t.rows[j]).css("display",show);

					});

					if($t.p.footerrow) { $("td:eq("+i+")",$t.grid.sDiv).css("display", show); }

					if(show == "none") { $t.p.tblwidth -= this.width+$t.p.cellLayout;} else {$t.p.tblwidth += this.width;}

					this.hidden = !sw;

					fndh=true;

				}

			});

			if(fndh===true) {

				$("table:first",$t.grid.hDiv).width($t.p.tblwidth);

				$("table:first",$t.grid.bDiv).width($t.p.tblwidth);

				$t.grid.hDiv.scrollLeft = $t.grid.bDiv.scrollLeft;

				if($t.p.footerrow) {

					$("table:first",$t.grid.sDiv).width($t.p.tblwidth);

					$t.grid.sDiv.scrollLeft = $t.grid.bDiv.scrollLeft;

				}

				if($t.p.shrinkToFit===true) {

					$($t).jqGrid("setGridWidth",$t.grid.width-0.001,true);

				}

			}

		});

	},

	hideCol : function (colname) {

		return this.each(function(){$(this).jqGrid("ShowHideCol",colname,"none");});

	},

	showCol : function(colname) {

		return this.each(function(){$(this).jqGrid("ShowHideCol",colname,"");});

	},

	remapColumns : function(permutation, updateCells, keepHeader)

	{

		function resortArray(a) {

			var ac;

			if (a.length) {

				ac = $.makeArray(a);

			} else {

				ac = $.extend({}, a);

			}

			$.each(permutation, function(i) {

				a[i] = ac[this];

			});

		}

		var ts = this.get(0);

		function resortRows(parent, clobj) {

			$(">tr"+(clobj||""), parent).each(function() {

				var row = this;

				var elems = $.makeArray(row.cells);

				$.each(permutation, function() {

					var e = elems[this];

					if (e) {

						row.appendChild(e);

					}

				});

			});

		}

		resortArray(ts.p.colModel);

		resortArray(ts.p.colNames);

		resortArray(ts.grid.headers);

		resortRows($("thead:first", ts.grid.hDiv), keepHeader && ":not(.ui-jqgrid-labels)");

		if (updateCells) {

			resortRows($("#"+ts.p.id+" tbody:first"), ".jqgfirstrow, tr.jqgrow, tr.jqfoot");

		}

		if (ts.p.footerrow) {

			resortRows($("tbody:first", ts.grid.sDiv));

		}

		if (ts.p.remapColumns) {

			if (!ts.p.remapColumns.length){

				ts.p.remapColumns = $.makeArray(permutation);

			} else {

				resortArray(ts.p.remapColumns);

			}

		}

		ts.p.lastsort = $.inArray(ts.p.lastsort, permutation);

		if(ts.p.treeGrid) { ts.p.expColInd = $.inArray(ts.p.expColInd, permutation); }

	},

	setGridWidth : function(nwidth, shrink) {

		return this.each(function(){

			if (!this.grid ) {return;}

			var $t = this, cw,

			initwidth = 0, brd=$t.p.cellLayout, lvc, vc=0, hs=false, scw=$t.p.scrollOffset, aw, gw=0, tw=0,

			cl = 0,cr;

			if(typeof shrink != 'boolean') {

				shrink=$t.p.shrinkToFit;

			}

			if(isNaN(nwidth)) {return;}

			else { nwidth = parseInt(nwidth,10); $t.grid.width = $t.p.width = nwidth;}

			$("#gbox_"+$t.p.id).css("width",nwidth+"px");

			$("#gview_"+$t.p.id).css("width",nwidth+"px");

			$($t.grid.bDiv).css("width",nwidth+"px");

			$($t.grid.hDiv).css("width",nwidth+"px");

			if($t.p.pager ) {$($t.p.pager).css("width",nwidth+"px");}

			if($t.p.toppager ) {$($t.p.toppager).css("width",nwidth+"px");}

			if($t.p.toolbar[0] === true){

				$($t.grid.uDiv).css("width",nwidth+"px");

				if($t.p.toolbar[1]=="both") {$($t.grid.ubDiv).css("width",nwidth+"px");}

			}

			if($t.p.footerrow) { $($t.grid.sDiv).css("width",nwidth+"px"); }

			if(shrink ===false && $t.p.forceFit === true) {$t.p.forceFit=false;}			

			if(shrink===true) {

				if ($.browser.safari) { brd=0;}

				$.each($t.p.colModel, function(i) {

					if(this.hidden===false){

						initwidth += parseInt(this.width,10);

						if(this.fixed) {

							tw += this.width;

							gw += this.width+brd;

						} else {

							vc++;

						}

						cl++;

					}

				});

				if(vc  === 0) { return; }

				$t.p.tblwidth = initwidth;

				aw = nwidth-brd*vc-gw;

				if(!isNaN($t.p.height)) {

					if($($t.grid.bDiv)[0].clientHeight < $($t.grid.bDiv)[0].scrollHeight || $t.rows.length === 1){

						hs = true;

						aw -= scw;

					}

				}

				initwidth =0;

				var cle = $t.grid.cols.length >0;

				$.each($t.p.colModel, function(i) {

					if(this.hidden === false && !this.fixed){

						cw = Math.round(aw*this.width/($t.p.tblwidth-tw));

						if (cw < 0) { return; }

						this.width =cw;

						initwidth += cw;

						$t.grid.headers[i].width=cw;

						$t.grid.headers[i].el.style.width=cw+"px";

						if($t.p.footerrow) { $t.grid.footers[i].style.width = cw+"px"; }

						if(cle) { $t.grid.cols[i].style.width = cw+"px"; }

						lvc = i;

					}

				});

				cr =0;

				if (hs) {

					if(nwidth-gw-(initwidth+brd*vc) !== scw){

						cr = nwidth-gw-(initwidth+brd*vc)-scw;

					}

				} else if( Math.abs(nwidth-gw-(initwidth+brd*vc)) !== 1) {

					cr = nwidth-gw-(initwidth+brd*vc);

				}

				$t.p.colModel[lvc].width += cr;

				$t.p.tblwidth = initwidth+cr+tw+brd*cl;

				if($t.p.tblwidth > nwidth) {

					var delta = $t.p.tblwidth - parseInt(nwidth,10);

					$t.p.tblwidth = nwidth;

					cw = $t.p.colModel[lvc].width = $t.p.colModel[lvc].width-delta;

				} else {

					cw= $t.p.colModel[lvc].width;

				}

				$t.grid.headers[lvc].width = cw;

				$t.grid.headers[lvc].el.style.width=cw+"px";

				if(cle) { $t.grid.cols[lvc].style.width = cw+"px"; }

				$('table:first',$t.grid.bDiv).css("width",$t.p.tblwidth+"px");

				$('table:first',$t.grid.hDiv).css("width",$t.p.tblwidth+"px");

				$t.grid.hDiv.scrollLeft = $t.grid.bDiv.scrollLeft;

				if($t.p.footerrow) {

					$t.grid.footers[lvc].style.width = cw+"px";

					$('table:first',$t.grid.sDiv).css("width",$t.p.tblwidth+"px");

				}

			}

		});

	},

	setGridHeight : function (nh) {

		return this.each(function (){

			var $t = this;

			if(!$t.grid) {return;}

			$($t.grid.bDiv).css({height: nh+(isNaN(nh)?"":"px")});

			$t.p.height = nh;

			if ($t.p.scroll) { $t.grid.populateVisible(); }

		});

	},

	setCaption : function (newcap){

		return this.each(function(){

			this.p.caption=newcap;

			$("span.ui-jqgrid-title",this.grid.cDiv).html(newcap);

			$(this.grid.cDiv).show();

		});

	},

	setLabel : function(colname, nData, prop, attrp ){

		return this.each(function(){

			var $t = this, pos=-1;

			if(!$t.grid) {return;}

			if(isNaN(colname)) {

				$($t.p.colModel).each(function(i){

					if (this.name == colname) {

						pos = i;return false;

					}

				});

			} else {pos = parseInt(colname,10);}

			if(pos>=0) {

				var thecol = $("tr.ui-jqgrid-labels th:eq("+pos+")",$t.grid.hDiv);

				if (nData){

					var ico = $(".s-ico",thecol);

					$("[id^=jqgh_]",thecol).empty().html(nData).append(ico);

					$t.p.colNames[pos] = nData;

				}

				if (prop) {

					if(typeof prop === 'string') {$(thecol).addClass(prop);} else {$(thecol).css(prop);}

				}

				if(typeof attrp === 'object') {$(thecol).attr(attrp);}

			}

		});

	},

	setCell : function(rowid,colname,nData,cssp,attrp, forceupd) {

		return this.each(function(){

			var $t = this, pos =-1,v, title;

			if(!$t.grid) {return;}

			if(isNaN(colname)) {

				$($t.p.colModel).each(function(i){

					if (this.name == colname) {

						pos = i;return false;

					}

				});

			} else {pos = parseInt(colname,10);}

			if(pos>=0) {

				var ind = $t.rows.namedItem(rowid);

				if (ind){

					var tcell = $("td:eq("+pos+")",ind);

					if(nData !== "" || forceupd === true) {

						v = $t.formatter(rowid, nData, pos,ind,'edit');

						title = $t.p.colModel[pos].title ? {"title":$.jgrid.stripHtml(v)} : {};

						if($t.p.treeGrid && $(".tree-wrap",$(tcell)).length>0) {

							$("span",$(tcell)).html(v).attr(title);

						} else {

							$(tcell).html(v).attr(title);

						}

						if($t.p.datatype == "local") {

							var cm = $t.p.colModel[pos], index;

							nData = cm.formatter && typeof(cm.formatter) === 'string' && cm.formatter == 'date' ? $.unformat.date(nData,cm) : nData;

							index = $t.p._index[rowid];

							if(typeof index  != "undefined") {

								$t.p.data[index][cm.name] = nData;

							}

						}

					}

					if(typeof cssp === 'string'){

						$(tcell).addClass(cssp);

					} else if(cssp) {

						$(tcell).css(cssp);

					}

					if(typeof attrp === 'object') {$(tcell).attr(attrp);}

				}

			}

		});

	},

	getCell : function(rowid,col) {

		var ret = false;

		this.each(function(){

			var $t=this, pos=-1;

			if(!$t.grid) {return;}

			if(isNaN(col)) {

				$($t.p.colModel).each(function(i){

					if (this.name === col) {

						pos = i;return false;

					}

				});

			} else {pos = parseInt(col,10);}

			if(pos>=0) {

				var ind = $t.rows.namedItem(rowid);

				if(ind) {

					try {

						ret = $.unformat($("td:eq("+pos+")",ind),{rowId:ind.id, colModel:$t.p.colModel[pos]},pos);

					} catch (e){

						ret = $.jgrid.htmlDecode($("td:eq("+pos+")",ind).html());

					}

				}

			}

		});

		return ret;

	},

	getCol : function (col, obj, mathopr) {

		var ret = [], val, sum=0;

		obj = typeof (obj) != 'boolean' ? false : obj;

		if(typeof mathopr == 'undefined') { mathopr = false; }

		this.each(function(){

			var $t=this, pos=-1;

			if(!$t.grid) {return;}

			if(isNaN(col)) {

				$($t.p.colModel).each(function(i){

					if (this.name === col) {

						pos = i;return false;

					}

				});

			} else {pos = parseInt(col,10);}

			if(pos>=0) {

				var ln = $t.rows.length, i =0;

				if (ln && ln>0){

					while(i<ln){

						if($($t.rows[i]).hasClass('jqgrow')) {

							try {

								val = $.unformat($($t.rows[i].cells[pos]),{rowId:$t.rows[i].id, colModel:$t.p.colModel[pos]},pos);

							} catch (e) {

								val = $.jgrid.htmlDecode($t.rows[i].cells[pos].innerHTML);

							}

							if(mathopr) { sum += parseFloat(val); }

							else if(obj) { ret.push({id:$t.rows[i].id,value:val}); }

							else { ret[i]=val; }

						}

						i++;

					}

					if(mathopr) {

						switch(mathopr.toLowerCase()){

							case 'sum': ret =sum; break;

							case 'avg': ret = sum/ln; break;

							case 'count': ret = ln; break;

						}

					}

				}

			}

		});

		return ret;

	},

	clearGridData : function(clearfooter) {

		return this.each(function(){

			var $t = this;

			if(!$t.grid) {return;}

			if(typeof clearfooter != 'boolean') { clearfooter = false; }

			if($t.p.deepempty) {$("#"+$t.p.id+" tbody:first tr:gt(0)").remove();}

			else {

				var trf = $("#"+$t.p.id+" tbody:first tr:first")[0];

				$("#"+$t.p.id+" tbody:first").empty().append(trf);

			}

			if($t.p.footerrow && clearfooter) { $(".ui-jqgrid-ftable td",$t.grid.sDiv).html("&#160;"); }

			$t.p.selrow = null; $t.p.selarrrow= []; $t.p.savedRow = [];

			$t.p.records = 0;$t.p.page=1;$t.p.lastpage=0;$t.p.reccount=0;

			$t.p.data = []; $t.p_index = {};

			$t.updatepager(true,false);

		});

	},

	getInd : function(rowid,rc){

		var ret =false,rw;

		this.each(function(){

			rw = this.rows.namedItem(rowid);

			if(rw) {

				ret = rc===true ? rw: rw.rowIndex;

			}

		});

		return ret;

	}

});

})(jQuery);

;(function($){

/*

 * jqGrid common function

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

*/

$.extend($.jgrid,{

// Modal functions

	showModal : function(h) {

		h.w.show();

	},

	closeModal : function(h) {

		h.w.hide().attr("aria-hidden","true");

		if(h.o) { h.o.remove(); }

	},

	hideModal : function (selector,o) {

		o = $.extend({jqm : true, gb :''}, o || {});

		if(o.onClose) {

			var oncret =  o.onClose(selector);

			if (typeof oncret == 'boolean'  && !oncret ) { return; }

		}

		if ($.fn.jqm && o.jqm === true) {

			$(selector).attr("aria-hidden","true").jqmHide();

		} else {

			if(o.gb !== '') {

				try {$(".jqgrid-overlay:first",o.gb).hide();} catch (e){}

			}

			$(selector).hide().attr("aria-hidden","true");

		}

	},

//Helper functions

	findPos : function(obj) {

		var curleft = 0, curtop = 0;

		if (obj.offsetParent) {

			do {

				curleft += obj.offsetLeft;

				curtop += obj.offsetTop;

			} while (obj = obj.offsetParent);

			//do not change obj == obj.offsetParent

		}

		return [curleft,curtop];

	},

	createModal : function(aIDs, content, p, insertSelector, posSelector, appendsel) {

		var mw  = document.createElement('div'), rtlsup, self = this;

		rtlsup = $(p.gbox).attr("dir") == "rtl" ? true : false;

		mw.className= "ui-widget ui-widget-content ui-corner-all ui-jqdialog";

		mw.id = aIDs.themodal;

		var mh = document.createElement('div');

		mh.className = "ui-jqdialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix";

		mh.id = aIDs.modalhead;

		$(mh).append("<span class='ui-jqdialog-title'>"+p.caption+"</span>");

		var ahr= $("<a href='javascript:void(0)' class='ui-jqdialog-titlebar-close ui-corner-all'></a>")

		.hover(function(){ahr.addClass('ui-state-hover');},

			   function(){ahr.removeClass('ui-state-hover');})

		.append("<span class='ui-icon ui-icon-closethick'></span>");

		$(mh).append(ahr);

		if(rtlsup) {

			mw.dir = "rtl";

			$(".ui-jqdialog-title",mh).css("float","right");

			$(".ui-jqdialog-titlebar-close",mh).css("left",0.3+"em");

		} else {

			mw.dir = "ltr";

			$(".ui-jqdialog-title",mh).css("float","left");

			$(".ui-jqdialog-titlebar-close",mh).css("right",0.3+"em");

		}

		var mc = document.createElement('div');

		$(mc).addClass("ui-jqdialog-content ui-widget-content").attr("id",aIDs.modalcontent);

		$(mc).append(content);

		mw.appendChild(mc);

		$(mw).prepend(mh);

		if(appendsel===true) { $('body').append(mw); } //append as first child in body -for alert dialog

		else {$(mw).insertBefore(insertSelector);}

		if(typeof p.jqModal === 'undefined') {p.jqModal = true;} // internal use

		var coord = {};

		if ( $.fn.jqm && p.jqModal === true) {

			if(p.left ===0 && p.top===0) {

				var pos = [];

				pos = this.findPos(posSelector);

				p.left = pos[0] + 4;

				p.top = pos[1] + 4;

			}

			coord.top = p.top+"px";

			coord.left = p.left;

		} else if(p.left !==0 || p.top!==0) {

			coord.left = p.left;

			coord.top = p.top+"px";

		}

		$("a.ui-jqdialog-titlebar-close",mh).click(function(e){

			var oncm = $("#"+aIDs.themodal).data("onClose") || p.onClose;

			var gboxclose = $("#"+aIDs.themodal).data("gbox") || p.gbox;

			self.hideModal("#"+aIDs.themodal,{gb:gboxclose,jqm:p.jqModal,onClose:oncm});

			return false;

		});

		if (p.width === 0 || !p.width) {p.width = 300;}

		if(p.height === 0 || !p.height) {p.height =200;}

		if(!p.zIndex) {

			var parentZ = $(insertSelector).parents("*[role=dialog]").first().css("z-index")

			if(parentZ)

				p.zIndex = parseInt(parentZ)+1

			else

				p.zIndex = 950;

		}

		var rtlt = 0;

		if( rtlsup && coord.left && !appendsel) {

			rtlt = $(p.gbox).width()- (!isNaN(p.width) ? parseInt(p.width,10) :0) - 8; // to do

		// just in case

			coord.left = parseInt(coord.left,10) + parseInt(rtlt,10);

		}

		if(coord.left) { coord.left += "px"; }

		$(mw).css($.extend({

			width: isNaN(p.width) ? "auto": p.width+"px",

			height:isNaN(p.height) ? "auto" : p.height + "px",

			zIndex:p.zIndex,

			overflow: 'hidden'

		},coord))

		.attr({tabIndex: "-1","role":"dialog","aria-labelledby":aIDs.modalhead,"aria-hidden":"true"});

		if(typeof p.drag == 'undefined') { p.drag=true;}

		if(typeof p.resize == 'undefined') {p.resize=true;}

		if (p.drag) {

			$(mh).css('cursor','move');

			if($.fn.jqDrag) {

				$(mw).jqDrag(mh);

			} else {

				try {

					$(mw).draggable({handle: $("#"+mh.id)});

				} catch (e) {}

			}

		}

		if(p.resize) {

			if($.fn.jqResize) {

				$(mw).append("<div class='jqResize ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se'></div>");

				$("#"+aIDs.themodal).jqResize(".jqResize",aIDs.scrollelm ? "#"+aIDs.scrollelm : false);

			} else {

				try {

					$(mw).resizable({handles: 'se, sw',alsoResize: aIDs.scrollelm ? "#"+aIDs.scrollelm : false});

				} catch (e) {}

			}

		}

		if(p.closeOnEscape === true){

			$(mw).keydown( function( e ) {

				if( e.which == 27 ) {

					var cone = $("#"+aIDs.themodal).data("onClose") || p.onClose;

					self.hideModal(this,{gb:p.gbox,jqm:p.jqModal,onClose: cone});

				}

			});

		}

	},

	viewModal : function (selector,o){

		o = $.extend({

			toTop: true,

			overlay: 10,

			modal: false,

			onShow: this.showModal,

			onHide: this.closeModal,

			gbox: '',

			jqm : true,

			jqM : true

		}, o || {});

		if ($.fn.jqm && o.jqm === true) {

			if(o.jqM) { $(selector).attr("aria-hidden","false").jqm(o).jqmShow(); }

			else {$(selector).attr("aria-hidden","false").jqmShow();}

		} else {

			if(o.gbox !== '') {

				$(".jqgrid-overlay:first",o.gbox).show();

				$(selector).data("gbox",o.gbox);

			}

			$(selector).show().attr("aria-hidden","false");

			try{$(':input:visible',selector)[0].focus();}catch(_){}

		}

	},



	info_dialog : function(caption, content,c_b, modalopt) {

		var mopt = {

			width:290,

			height:'auto',

			dataheight: 'auto',

			drag: true,

			resize: false,

			caption:"<b>"+caption+"</b>",

			left:250,

			top:170,

			zIndex : 1000,

			jqModal : true,

			modal : false,

			closeOnEscape : true,

			align: 'center',

			buttonalign : 'center',

			buttons : []

		// {text:'textbutt', id:"buttid", onClick : function(){...}}

		// if the id is not provided we set it like info_button_+ the index in the array - i.e info_button_0,info_button_1...

		};

		$.extend(mopt,modalopt || {});

		var jm = mopt.jqModal, self = this;

		if($.fn.jqm && !jm) { jm = false; }

		// in case there is no jqModal

		var buttstr ="";

		if(mopt.buttons.length > 0) {

			for(var i=0;i<mopt.buttons.length;i++) {

				if(typeof mopt.buttons[i].id == "undefined") { mopt.buttons[i].id = "info_button_"+i; }

				buttstr += "<a href='javascript:void(0)' id='"+mopt.buttons[i].id+"' class='fm-button ui-state-default ui-corner-all'>"+mopt.buttons[i].text+"</a>";

			}

		}

		var dh = isNaN(mopt.dataheight) ? mopt.dataheight : mopt.dataheight+"px",

		cn = "text-align:"+mopt.align+";";

		var cnt = "<div id='info_id'>";

		cnt += "<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+dh+";"+cn+"'>"+content+"</div>";

		cnt += c_b ? "<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+mopt.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a href='javascript:void(0)' id='closedialog' class='fm-button ui-state-default ui-corner-all'>"+c_b+"</a>"+buttstr+"</div>" :

			buttstr !== ""  ? "<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+mopt.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+buttstr+"</div>" : "";

		cnt += "</div>";



		try {

			if($("#info_dialog").attr("aria-hidden") == "false") {

				this.hideModal("#info_dialog",{jqm:jm});

			}

			$("#info_dialog").remove();

		} catch (e){}

		this.createModal({

			themodal:'info_dialog',

			modalhead:'info_head',

			modalcontent:'info_content',

			scrollelm: 'infocnt'},

			cnt,

			mopt,

			'','',true

		);

		// attach onclick after inserting into the dom

		if(buttstr) {

			$.each(mopt.buttons,function(i){

				$("#"+this.id,"#info_id").bind('click',function(){mopt.buttons[i].onClick.call($("#info_dialog")); return false;});

			});

		}

		$("#closedialog", "#info_id").click(function(e){

			self.hideModal("#info_dialog",{jqm:jm});

			return false;

		});

		$(".fm-button","#info_dialog").hover(

			function(){$(this).addClass('ui-state-hover');},

			function(){$(this).removeClass('ui-state-hover');}

		);

		if($.isFunction(mopt.beforeOpen) ) { mopt.beforeOpen(); }

		this.viewModal("#info_dialog",{

			onHide: function(h) {

				h.w.hide().remove();

				if(h.o) { h.o.remove(); }

			},

			modal :mopt.modal,

			jqm:jm

		});

		if($.isFunction(mopt.afterOpen) ) { mopt.afterOpen(); }

		try{ $("#info_dialog").focus();} catch (e){}

	},

// Form Functions

	createEl : function(eltype,options,vl,autowidth, ajaxso) {

		var elem = "";

		if(options.defaultValue) { delete options.defaultValue; }

		function bindEv (el, opt) {

			if($.isFunction(opt.dataInit)) {

			// datepicker fix 

				el.id = opt.id;

				opt.dataInit(el);

				delete opt.id;

				delete opt.dataInit;

			}

			if(opt.dataEvents) {

				$.each(opt.dataEvents, function() {

					if (this.data !== undefined) {

						$(el).bind(this.type, this.data, this.fn);

					} else {

						$(el).bind(this.type, this.fn);

					}

				});

				delete opt.dataEvents;

			}

			return opt;

		}

		switch (eltype)

		{

			case "textarea" :

				elem = document.createElement("textarea");

				if(autowidth) {

					if(!options.cols) { $(elem).css({width:"98%"});}

				} else if (!options.cols) { options.cols = 20; }

				if(!options.rows) { options.rows = 2; }

				if(vl=='&nbsp;' || vl=='&#160;' || (vl.length==1 && vl.charCodeAt(0)==160)) {vl="";}

				elem.value = vl;

				options = bindEv(elem,options);

				$(elem).attr(options).attr({"role":"textbox","multiline":"true"});

			break;

			case "checkbox" : //what code for simple checkbox

				elem = document.createElement("input");

				elem.type = "checkbox";

				if( !options.value ) {

					var vl1 = vl.toLowerCase();

					if(vl1.search(/(false|0|no|off|undefined)/i)<0 && vl1!=="") {

						elem.checked=true;

						elem.defaultChecked=true;

						elem.value = vl;

					} else {

						elem.value = "on";

					}

					$(elem).attr("offval","off");

				} else {

					var cbval = options.value.split(":");

					if(vl === cbval[0]) {

						elem.checked=true;

						elem.defaultChecked=true;

					}

					elem.value = cbval[0];

					$(elem).attr("offval",cbval[1]);

					try {delete options.value;} catch (e){}

				}

				options = bindEv(elem,options);

				$(elem).attr(options).attr("role","checkbox");

			break;

			case "select" :

				elem = document.createElement("select");

				elem.setAttribute("role","select");

				var msl, ovm = [];

				if(options.multiple===true) {

					msl = true;

					elem.multiple="multiple";

					$(elem).attr("aria-multiselectable","true");

				} else { msl = false; }

				if(typeof(options.dataUrl) != "undefined") {

					$.ajax($.extend({

						url: options.dataUrl,

						type : "GET",

						dataType: "html",

						success: function(data,status){

							try {delete options.dataUrl; delete options.value;} catch (e){}

							var a;

							if(typeof(options.buildSelect) != "undefined") {

								var b = options.buildSelect(data);

								a = $(b).html();

								delete options.buildSelect;

							} else {

								a = $(data).html();

							}

							if(a) {

								$(elem).append(a);

								options = bindEv(elem,options);

								if(typeof options.size === 'undefined') { options.size =  msl ? 3 : 1;}

								if(msl) {

									ovm = vl.split(",");

									ovm = $.map(ovm,function(n){return $.trim(n);});

								} else {

									ovm[0] = $.trim(vl);

								}

								$(elem).attr(options);

								setTimeout(function(){

									$("option",elem).each(function(i){

										if(i===0) { this.selected = ""; }

										$(this).attr("role","option");

										if($.inArray($.trim($(this).text()),ovm) > -1 || $.inArray($.trim($(this).val()),ovm) > -1 ) {

											this.selected= "selected";

											if(!msl) { return false; }

										}

									});

								},0);

							}

						}

					},ajaxso || {}));

				} else if(options.value) {

					var i;

					if(msl) {

						ovm = vl.split(",");

						ovm = $.map(ovm,function(n){return $.trim(n);});

						if(typeof options.size === 'undefined') {options.size = 3;}

					} else {

						options.size = 1;

					}

					if(typeof options.value === 'function') { options.value = options.value(); }

					var so,sv, ov;

					if(typeof options.value === 'string') {

						so = options.value.split(";");

						for(i=0; i<so.length;i++){

							sv = so[i].split(":");

							if(sv.length > 2 ) {

								sv[1] = $.map(sv,function(n,i){if(i>0) { return n;} }).join(":");

							}

							ov = document.createElement("option");

							ov.setAttribute("role","option");

							ov.value = sv[0]; ov.innerHTML = sv[1];

							if (!msl &&  ($.trim(sv[0]) == $.trim(vl) || $.trim(sv[1]) == $.trim(vl))) { ov.selected ="selected"; }

							if (msl && ($.inArray($.trim(sv[1]), ovm)>-1 || $.inArray($.trim(sv[0]), ovm)>-1)) {ov.selected ="selected";}

							elem.appendChild(ov);

						}

					} else if (typeof options.value === 'object') {

						var oSv = options.value;

						for ( var key in oSv) {

							if (oSv.hasOwnProperty(key ) ){

								ov = document.createElement("option");

								ov.setAttribute("role","option");

								ov.value = key; ov.innerHTML = oSv[key];

								if (!msl &&  ( $.trim(key) == $.trim(vl) || $.trim(oSv[key]) == $.trim(vl)) ) { ov.selected ="selected"; }

								if (msl && ($.inArray($.trim(oSv[key]),ovm)>-1 || $.inArray($.trim(key),ovm)>-1)) { ov.selected ="selected"; }

								elem.appendChild(ov);

							}

						}

					}

					options = bindEv(elem,options);

					try {delete options.value;} catch (e){}

					$(elem).attr(options);

				}

			break;

			case "text" :

			case "password" :

			case "button" :

				var role;

				if(eltype=="button") { role = "button"; }

				else { role = "textbox"; }

				elem = document.createElement("input");

				elem.type = eltype;

				elem.value = vl;

				options = bindEv(elem,options);

				if(eltype != "button"){

					if(autowidth) {

						if(!options.size) { $(elem).css({width:"98%"}); }

					} else if (!options.size) { options.size = 20; }

				}

				$(elem).attr(options).attr("role",role);

			break;

			case "image" :

			case "file" :

				elem = document.createElement("input");

				elem.type = eltype;

				options = bindEv(elem,options);

				$(elem).attr(options);

				break;

			case "custom" :

				elem = document.createElement("span");

				try {

					if($.isFunction(options.custom_element)) {

						var celm = options.custom_element.call(this,vl,options);

						if(celm) {

							celm = $(celm).addClass("customelement").attr({id:options.id,name:options.name});

							$(elem).empty().append(celm);

						} else {

							throw "e2";

						}

					} else {

						throw "e1";

					}

				} catch (e) {

					if (e=="e1") { this.info_dialog($.jgrid.errors.errcap,"function 'custom_element' "+$.jgrid.edit.msg.nodefined, $.jgrid.edit.bClose);}

					if (e=="e2") { this.info_dialog($.jgrid.errors.errcap,"function 'custom_element' "+$.jgrid.edit.msg.novalue,$.jgrid.edit.bClose);}

					else { this.info_dialog($.jgrid.errors.errcap,typeof(e)==="string"?e:e.message,$.jgrid.edit.bClose); }

				}

			break;

		}

		return elem;

	},

// Date Validation Javascript

	checkDate : function (format, date) {

		var daysInFebruary = function(year){

		// February has 29 days in any year evenly divisible by four,

		// EXCEPT for centurial years which are not also divisible by 400.

			return (((year % 4 === 0) && ( year % 100 !== 0 || (year % 400 === 0))) ? 29 : 28 );

		},

		DaysArray = function(n) {

			for (var i = 1; i <= n; i++) {

				this[i] = 31;

				if (i==4 || i==6 || i==9 || i==11) {this[i] = 30;}

				if (i==2) {this[i] = 29;}

			}

			return this;

		};



		var tsp = {}, sep;

		format = format.toLowerCase();

		//we search for /,-,. for the date separator

		if(format.indexOf("/") != -1) {

			sep = "/";

		} else if(format.indexOf("-") != -1) {

			sep = "-";

		} else if(format.indexOf(".") != -1) {

			sep = ".";

		} else {

			sep = "/";

		}

		format = format.split(sep);

		date = date.split(sep);

		if (date.length != 3) { return false; }

		var j=-1,yln, dln=-1, mln=-1;

		for(var i=0;i<format.length;i++){

			var dv =  isNaN(date[i]) ? 0 : parseInt(date[i],10);

			tsp[format[i]] = dv;

			yln = format[i];

			if(yln.indexOf("y") != -1) { j=i; }

			if(yln.indexOf("m") != -1) { mln=i; }

			if(yln.indexOf("d") != -1) { dln=i; }

		}

		if (format[j] == "y" || format[j] == "yyyy") {

			yln=4;

		} else if(format[j] =="yy"){

			yln = 2;

		} else {

			yln = -1;

		}

		var daysInMonth = DaysArray(12),

		strDate;

		if (j === -1) {

			return false;

		} else {

			strDate = tsp[format[j]].toString();

			if(yln == 2 && strDate.length == 1) {yln = 1;}

			if (strDate.length != yln || (tsp[format[j]]===0 && date[j]!="00")){

				return false;

			}

		}

		if(mln === -1) {

			return false;

		} else {

			strDate = tsp[format[mln]].toString();

			if (strDate.length<1 || tsp[format[mln]]<1 || tsp[format[mln]]>12){

				return false;

			}

		}

		if(dln === -1) {

			return false;

		} else {

			strDate = tsp[format[dln]].toString();

			if (strDate.length<1 || tsp[format[dln]]<1 || tsp[format[dln]]>31 || (tsp[format[mln]]==2 && tsp[format[dln]]>daysInFebruary(tsp[format[j]])) || tsp[format[dln]] > daysInMonth[tsp[format[mln]]]){

				return false;

			}

		}

		return true;

	},

	isEmpty : function(val)

	{

		if (val.match(/^\s+$/) || val === "")	{

			return true;

		} else {

			return false;

		}

	},

	checkTime : function(time){

	// checks only hh:ss (and optional am/pm)

		var re = /^(\d{1,2}):(\d{2})([ap]m)?$/,regs;

		if(!this.isEmpty(time))

		{

			regs = time.match(re);

			if(regs) {

				if(regs[3]) {

					if(regs[1] < 1 || regs[1] > 12) { return false; }

				} else {

					if(regs[1] > 23) { return false; }

				}

				if(regs[2] > 59) {

					return false;

				}

			} else {

				return false;

			}

		}

		return true;

	},

	checkValues : function(val, valref,g) {

		var edtrul,i, nm, dft, len;

		if(typeof(valref)=='string'){

			for( i =0, len=g.p.colModel.length;i<len; i++){

				if(g.p.colModel[i].name==valref) {

					edtrul = g.p.colModel[i].editrules;

					valref = i;

					try { nm = g.p.colModel[i].formoptions.label; } catch (e) {}

					break;

				}

			}

		} else if(valref >=0) {

			edtrul = g.p.colModel[valref].editrules;

		}

		if(edtrul) {

			if(!nm) { nm = g.p.colNames[valref]; }

			if(edtrul.required === true) {

				if( this.isEmpty(val) )  { return [false,nm+": "+$.jgrid.edit.msg.required,""]; }

			}

			// force required

			var rqfield = edtrul.required === false ? false : true;

			if(edtrul.number === true) {

				if( !(rqfield === false && this.isEmpty(val)) ) {

					if(isNaN(val)) { return [false,nm+": "+$.jgrid.edit.msg.number,""]; }

				}

			}

			if(typeof edtrul.minValue != 'undefined' && !isNaN(edtrul.minValue)) {

				if (parseFloat(val) < parseFloat(edtrul.minValue) ) { return [false,nm+": "+$.jgrid.edit.msg.minValue+" "+edtrul.minValue,""];}

			}

			if(typeof edtrul.maxValue != 'undefined' && !isNaN(edtrul.maxValue)) {

				if (parseFloat(val) > parseFloat(edtrul.maxValue) ) { return [false,nm+": "+$.jgrid.edit.msg.maxValue+" "+edtrul.maxValue,""];}

			}

			var filter;

			if(edtrul.email === true) {

				if( !(rqfield === false && this.isEmpty(val)) ) {

				// taken from $ Validate plugin

					filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

					if(!filter.test(val)) {return [false,nm+": "+$.jgrid.edit.msg.email,""];}

				}

			}

			if(edtrul.integer === true) {

				if( !(rqfield === false && this.isEmpty(val)) ) {

					if(isNaN(val)) { return [false,nm+": "+$.jgrid.edit.msg.integer,""]; }

					if ((val % 1 !== 0) || (val.indexOf('.') != -1)) { return [false,nm+": "+$.jgrid.edit.msg.integer,""];}

				}

			}

			if(edtrul.date === true) {

				if( !(rqfield === false && this.isEmpty(val)) ) {

					if(g.p.colModel[valref].formatoptions && g.p.colModel[valref].formatoptions.newformat) {

						dft = g.p.colModel[valref].formatoptions.newformat;

					} else {

						dft = g.p.colModel[valref].datefmt || "Y-m-d";

					}

					if(!this.checkDate (dft, val)) { return [false,nm+": "+$.jgrid.edit.msg.date+" - "+dft,""]; }

				}

			}

			if(edtrul.time === true) {

				if( !(rqfield === false && this.isEmpty(val)) ) {

					if(!this.checkTime (val)) { return [false,nm+": "+$.jgrid.edit.msg.date+" - hh:mm (am/pm)",""]; }

				}

			}

			if(edtrul.url === true) {

				if( !(rqfield === false && this.isEmpty(val)) ) {

					filter = /^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i;

					if(!filter.test(val)) {return [false,nm+": "+$.jgrid.edit.msg.url,""];}

				}

			}

			if(edtrul.custom === true) {

				if( !(rqfield === false && this.isEmpty(val)) ) {

					if($.isFunction(edtrul.custom_func)) {

						var ret = edtrul.custom_func.call(g,val,nm);

						if($.isArray(ret)) {

							return ret;

						} else {

							return [false,$.jgrid.edit.msg.customarray,""];

						}

					} else {

						return [false,$.jgrid.edit.msg.customfcheck,""];

					}

				}

			}

		}

		return [true,"",""];

	}

});

})(jQuery);;(function($){

/**

 * jqGrid extension for form editing Grid Data

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/

var rp_ge = null;

$.jgrid.extend({

	searchGrid : function (p) {

		p = $.extend({

			recreateFilter: false,

			drag: true,

			sField:'searchField',

			sValue:'searchString',

			sOper: 'searchOper',

			sFilter: 'filters',

            loadDefaults: true, // this options activates loading of default filters from grid's postData for Multipe Search only.

			beforeShowSearch: null,

			afterShowSearch : null,

			onInitializeSearch: null,

			closeAfterSearch : false,

			closeAfterReset: false,

			closeOnEscape : false,

			multipleSearch : false,

			cloneSearchRowOnAdd: true,

			// translation

			// if you want to change or remove the order change it in sopt

			// ['bw','eq','ne','lt','le','gt','ge','ew','cn']

			sopt: null,

			// Note: stringResult is intentionally declared "undefined by default".

			//  you are velcome to define stringResult expressly in the options you pass to searchGrid()

			//  stringResult is a "safeguard" measure to insure we post sensible data when communicated as form-encoded

			//  see http://github.com/tonytomov/jqGrid/issues/#issue/36

			//

			//  If this value is not expressly defined in the incoming options,

			// lower in the code we will infer the value based on value of multipleSearch

			stringResult: undefined,

			onClose : null,

			// useDataProxy allows ADD, EDIT and DEL code to bypass calling $.ajax

			// directly when grid's 'dataProxy' property (grid.p.dataProxy) is a function.

			// Used for "editGridRow" and "delGridRow" below and automatically flipped to TRUE

			// when ajax setting's 'url' (grid's 'editurl') property is undefined.

			// When 'useDataProxy' is true, instead of calling $.ajax.call(gridDOMobj, o, i) we call

			// gridDOMobj.p.dataProxy.call(gridDOMobj, o, i)

			//

			// Behavior is extremely similar to when 'datatype' is a function, but arguments are slightly different.

			// Normally the following is fed to datatype.call(a, b, c):

			//   a = Pointer to grid's table DOM element, b = grid.p.postdata, c = "load_"+grid's ID

			// In cases of "edit" and "del" the following is fed:

			//   a = Pointer to grid's table DOM element (same),

			//   b = extended Ajax Options including postdata in "data" property. (different object type)

			//   c = "set_"+grid's ID in case of "edit" and "del_"+grid's ID in case of "del" (same type, different content)

			// The major difference is that complete ajax options object, with attached "complete" and "error"

			// callback functions is fed instead of only post data.

			// This allows you to emulate a $.ajax call (including calling "complete"/"error"),

			// while retrieving the data locally in the browser.

			useDataProxy: false,

			overlay : true

		}, $.jgrid.search, p || {});

		return this.each(function() {

			var $t = this;

			if(!$t.grid) {return;}

			var fid = "fbox_"+$t.p.id,

			showFrm = true;

            function applyDefaultFilters(gridDOMobj, filterSettings) {

				/*

                gridDOMobj = ointer to grid DOM object ( $(#list)[0] )

                What we need from gridDOMobj:

                gridDOMobj.SearchFilter is the pointer to the Search box, once it's created.

                gridDOMobj.p.postData - dictionary of post settings. These can be overriden at grid creation to

                contain default filter settings. We will parse these and will populate the search with defaults.

                filterSettings - same settings object you (would) pass to $().jqGrid('searchGrid', filterSettings);

                */



                // Pulling default filter settings out of postData property of grid's properties.:

                var defaultFilters = gridDOMobj.p.postData[filterSettings.sFilter];

                // example of what we might get: {"groupOp":"and","rules":[{"field":"amount","op":"eq","data":"100"}]}

				// suppose we have imported this with grid import, the this is a string.

				if(typeof(defaultFilters) == "string") {

					defaultFilters = $.jgrid.parse(defaultFilters);

				}

                if (defaultFilters) {

                    if (defaultFilters.groupOp) {

                        gridDOMobj.SearchFilter.setGroupOp(defaultFilters.groupOp);

                    }

                    if (defaultFilters.rules) {

                        var f, i = 0, li = defaultFilters.rules.length, success = false;

                        for (; i < li; i++) {

                            f = defaultFilters.rules[i];

                            // we are not trying to counter all issues with filter declaration here. Just the basics to avoid lookup exceptions.

                            if (f.field !== undefined && f.op !== undefined && f.data !== undefined) {

                                success = gridDOMobj.SearchFilter.setFilter({

                                    'sfref':gridDOMobj.SearchFilter.$.find(".sf:last"),

                                    'filter':$.extend({},f)

                                });

								if (success) { gridDOMobj.SearchFilter.add(); }

                            }

                        }

                    }

				}

            } // end of applyDefaultFilters

			function hideFilter(selector) {

				if(p.onClose){

					var fclm = p.onClose(selector);

					if(typeof fclm == 'boolean' && !fclm) { return; }

				}

				selector.hide();

				if(p.overlay === true) {

					$(".jqgrid-overlay:first","#gbox_"+$t.p.id).hide();

				}

			}

			function showFilter(){

				var fl = $(".ui-searchFilter").length;

				if(fl > 1) {

					var zI = $("#"+fid).css("zIndex");

					$("#"+fid).css({zIndex:parseInt(zI,10)+fl});

				}

				$("#"+fid).show();

				if(p.overlay === true) {

					$(".jqgrid-overlay:first","#gbox_"+$t.p.id).show();

				}

				try{$(':input:visible',"#"+fid)[0].focus();}catch(_){}

			}			

			function searchFilters(filters) {

				var hasFilters = (filters !== undefined),

				grid = $("#"+$t.p.id),

				sdata={};

				if(p.multipleSearch===false) {

					sdata[p.sField] = filters.rules[0].field;

					sdata[p.sValue] = filters.rules[0].data;

					sdata[p.sOper] = filters.rules[0].op;

				} else {

					sdata[p.sFilter] = filters;

				}

				grid[0].p.search = hasFilters;

				$.extend(grid[0].p.postData,sdata);

				grid.trigger("reloadGrid",[{page:1}]);

				if(p.closeAfterSearch) { hideFilter($("#"+fid)); }

			}

			function resetFilters(op) {

				var reload = op && op.hasOwnProperty("reload") ? op.reload : true,

				grid = $("#"+$t.p.id),

				sdata={};

				grid[0].p.search = false;

				if(p.multipleSearch===false) {

					sdata[p.sField] = sdata[p.sValue] = sdata[p.sOper] = "";

				} else {

					sdata[p.sFilter] = "";

				}

				$.extend(grid[0].p.postData,sdata);

				if(reload) {

					grid.trigger("reloadGrid",[{page:1}]);

				}

				if(p.closeAfterReset) { hideFilter($("#"+fid)); }

			}

			if($.fn.searchFilter) {

				if(p.recreateFilter===true) {$("#"+fid).remove();}

				if( $("#"+fid).html() != null ) {

					if ( $.isFunction(p.beforeShowSearch) ) { 

						showFrm = p.beforeShowSearch($("#"+fid));

						if(typeof(showFrm) == "undefined") {

							showFrm = true;

						}

					}

					if(showFrm === false) { return; }

					showFilter();

					if( $.isFunction(p.afterShowSearch) ) { p.afterShowSearch($("#"+fid)); }

				} else {

					var fields = [],

					colNames = $("#"+$t.p.id).jqGrid("getGridParam","colNames"),

					colModel = $("#"+$t.p.id).jqGrid("getGridParam","colModel"),

					stempl = ['eq','ne','lt','le','gt','ge','bw','bn','in','ni','ew','en','cn','nc'],

					j,pos,k,oprtr=[];

					if (p.sopt !==null) {

						k=0;

						for(j=0;j<p.sopt.length;j++) {

							if( (pos= $.inArray(p.sopt[j],stempl)) != -1 ){

								oprtr[k] = {op:p.sopt[j],text: p.odata[pos]};

								k++;

							}

						}

					} else {

						for(j=0;j<stempl.length;j++) {

							oprtr[j] = {op:stempl[j],text: p.odata[j]};

						}

					}

				    $.each(colModel, function(i, v) {

				        var searchable = (typeof v.search === 'undefined') ?  true: v.search ,

				        hidden = (v.hidden === true),

						soptions = $.extend({}, {text: colNames[i], itemval: v.index || v.name}, this.searchoptions),

						ignoreHiding = (soptions.searchhidden === true);

						if(typeof soptions.sopt !== 'undefined') { 

							k=0;

							soptions.ops =[];

							if(soptions.sopt.length>0) {

								for(j=0;j<soptions.sopt.length;j++) {

									if( (pos= $.inArray(soptions.sopt[j],stempl)) != -1 ){

										soptions.ops[k] = {op:soptions.sopt[j],text: p.odata[pos]};

										k++;

									}

								}

							}

						}

						if(typeof(this.stype) === 'undefined') { this.stype='text'; }

						if(this.stype == 'select') {

							if ( soptions.dataUrl !== undefined) {}

							else {

								var eov;

								if(soptions.value) {

									eov = soptions.value;

								} else if(this.editoptions) {

									eov = this.editoptions.value;

								}

								if(eov) {

									soptions.dataValues =[];

									if(typeof(eov) === 'string') {

										var so = eov.split(";"),sv;

										for(j=0;j<so.length;j++) {

											sv = so[j].split(":");

											soptions.dataValues[j] ={value:sv[0],text:sv[1]};

										}

									} else if (typeof(eov) === 'object') {

										j=0;

										for (var key in eov) {

											if(eov.hasOwnProperty(key)) {

												soptions.dataValues[j] ={value:key,text:eov[key]};

												j++;

											}

										}

									}

								}

							}

						}

				        if ((ignoreHiding && searchable) || (searchable && !hidden)) {

							fields.push(soptions);

						}

					});

					if(fields.length>0){

						$("<div id='"+fid+"' role='dialog' tabindex='-1'></div>").insertBefore("#gview_"+$t.p.id);

						// Before we create searchFilter we need to decide if we want to get back a string or a JS object.

						//  see http://github.com/tonytomov/jqGrid/issues/#issue/36 for background on the issue.

						// If p.stringResult is defined, it was explisitly passed to us by user. Honor the choice, whatever it is.

						if (p.stringResult===undefined) {

							// to provide backward compatibility, inferring stringResult value from multipleSearch

							p.stringResult = p.multipleSearch;

						}

						// we preserve the return value here to retain access to .add() and other good methods of search form.

						$t.SearchFilter = $("#"+fid).searchFilter(fields, { groupOps: p.groupOps, operators: oprtr, onClose:hideFilter, resetText: p.Reset, searchText: p.Find, windowTitle: p.caption,  rulesText:p.rulesText, matchText:p.matchText, onSearch: searchFilters, onReset: resetFilters,stringResult:p.stringResult, ajaxSelectOptions: $.extend({},$.jgrid.ajaxOptions,$t.p.ajaxSelectOptions ||{}), clone: p.cloneSearchRowOnAdd });

						$(".ui-widget-overlay","#"+fid).remove();

						if($t.p.direction=="rtl") { $(".ui-closer","#"+fid).css("float","left"); }

						if (p.drag===true) {

							$("#"+fid+" table thead tr:first td:first").css('cursor','move');

							if(jQuery.fn.jqDrag) {

								$("#"+fid).jqDrag($("#"+fid+" table thead tr:first td:first"));

							} else {

								try {

									$("#"+fid).draggable({handle: $("#"+fid+" table thead tr:first td:first")});

								} catch (e) {}

							}

						}

						if(p.multipleSearch === false) {

							$(".ui-del, .ui-add, .ui-del, .ui-add-last, .matchText, .rulesText", "#"+fid).hide();

							$("select[name='groupOp']","#"+fid).hide();

						}

                        if (p.multipleSearch === true && p.loadDefaults === true) {

                            applyDefaultFilters($t, p);

                        }

						if ( $.isFunction(p.onInitializeSearch) ) { p.onInitializeSearch( $("#"+fid) ); }

						if ( $.isFunction(p.beforeShowSearch) ) {

							showFrm = p.beforeShowSearch($("#"+fid));

							if(typeof(showFrm) == "undefined") {

								showFrm = true;

							}

						}

						if(showFrm === false) { return; }

						showFilter();

						if( $.isFunction(p.afterShowSearch) ) { p.afterShowSearch($("#"+fid)); }

						if(p.closeOnEscape===true){

							$("#"+fid).keydown( function( e ) {

								if( e.which == 27 ) {

									hideFilter($("#"+fid));

								}

								if (e.which == 13) {

									$(".ui-search", this).click();

								}

							});

						}

					}

				}

			}

		});

	},

	editGridRow : function(rowid, p){

		p = $.extend({

			top : 0,

			left: 0,

			width: 300,

			height: 'auto',

			dataheight: 'auto',

			modal: false,

			overlay : 10,

			drag: true,

			resize: true,

			url: null,

			mtype : "POST",

			clearAfterAdd :true,

			closeAfterEdit : false,

			reloadAfterSubmit : true,

			onInitializeForm: null,

			beforeInitData: null,

			beforeShowForm: null,

			afterShowForm: null,

			beforeSubmit: null,

			afterSubmit: null,

			onclickSubmit: null,

			afterComplete: null,

			onclickPgButtons : null,

			afterclickPgButtons: null,

			editData : {},

			recreateForm : false,

			jqModal : true,

			closeOnEscape : false,

			addedrow : "first",

			topinfo : '',

			bottominfo: '',

			saveicon : [],

			closeicon : [],

			savekey: [false,13],

			navkeys: [false,38,40],

			checkOnSubmit : false,

			checkOnUpdate : false,

			_savedData : {},

			processing : false,

			onClose : null,

			ajaxEditOptions : {},

			serializeEditData : null,

			viewPagerButtons : true

		}, $.jgrid.edit, p || {});

		rp_ge = p;

		return this.each(function(){

			var $t = this;

			if (!$t.grid || !rowid) { return; }

			var gID = $t.p.id,

			frmgr = "FrmGrid_"+gID,frmtb = "TblGrid_"+gID,

			IDs = {themodal:'editmod'+gID,modalhead:'edithd'+gID,modalcontent:'editcnt'+gID, scrollelm : frmgr},

			onBeforeShow = $.isFunction(rp_ge.beforeShowForm) ? rp_ge.beforeShowForm : false,

			onAfterShow = $.isFunction(rp_ge.afterShowForm) ? rp_ge.afterShowForm : false,

			onBeforeInit = $.isFunction(rp_ge.beforeInitData) ? rp_ge.beforeInitData : false,

			onInitializeForm = $.isFunction(rp_ge.onInitializeForm) ? rp_ge.onInitializeForm : false,

			copydata = null,

			showFrm = true,

			maxCols = 1, maxRows=0,	postdata, extpost, newData, diff;

			if (rowid=="new") {

				rowid = "_empty";

				p.caption=p.addCaption;

			} else {

				p.caption=p.editCaption;

			}

			if(p.recreateForm===true && $("#"+IDs.themodal).html() != null) {

				$("#"+IDs.themodal).remove();

			}

			var closeovrl = true;

			if(p.checkOnUpdate && p.jqModal && !p.modal) {

				closeovrl = false;

			}

			function getFormData(){

				$(".FormElement", "#"+frmtb).each(function(i) {

					var celm = $(".customelement", this);

					if (celm.length) {

						var  elem = celm[0], nm = $(elem).attr('name');

						$.each($t.p.colModel, function(i,n){

							if(this.name == nm && this.editoptions && $.isFunction(this.editoptions.custom_value)) {

								try {

									postdata[nm] = this.editoptions.custom_value($("#"+nm,"#"+frmtb),'get');

									if (postdata[nm] === undefined) { throw "e1"; }

								} catch (e) {

									if (e=="e1") { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.novalue,jQuery.jgrid.edit.bClose);}

									else { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,e.message,jQuery.jgrid.edit.bClose); }

								}

								return true;

							}

						});

					} else {

					switch ($(this).get(0).type) {

						case "checkbox":

							if($(this).attr("checked")) {

								postdata[this.name]= $(this).val();

							}else {

								var ofv = $(this).attr("offval");

								postdata[this.name]= ofv;

							}

						break;

						case "select-one":

							postdata[this.name]= $("option:selected",this).val();

							extpost[this.name]= $("option:selected",this).text();

						break;

						case "select-multiple":

							postdata[this.name]= $(this).val();

							if(postdata[this.name]) { postdata[this.name] = postdata[this.name].join(","); }

							else { postdata[this.name] =""; }

							var selectedText = [];

							$("option:selected",this).each(

								function(i,selected){

									selectedText[i] = $(selected).text();

								}

							);

							extpost[this.name]= selectedText.join(",");

						break;								

						case "password":

						case "text":

						case "textarea":

						case "button":

							postdata[this.name] = $(this).val();

							

						break;

					}

					if($t.p.autoencode) { postdata[this.name] = $.jgrid.htmlEncode(postdata[this.name]); }

					}

				});

				return true;

			}

			function createData(rowid,obj,tb,maxcols){

				var nm, hc,trdata, cnt=0,tmp, dc,elc, retpos=[], ind=false,

				tdtmpl = "<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>", tmpl=""; //*2

				for (var i =1;i<=maxcols;i++) {

					tmpl += tdtmpl;

				}

				if(rowid != '_empty') {

					ind = $(obj).jqGrid("getInd",rowid);

				}

				$(obj.p.colModel).each( function(i) {

					nm = this.name;

					// hidden fields are included in the form

					if(this.editrules && this.editrules.edithidden === true) {

						hc = false;

					} else {

						hc = this.hidden === true ? true : false;

					}

					dc = hc ? "style='display:none'" : "";

					if ( nm !== 'cb' && nm !== 'subgrid' && this.editable===true && nm !== 'rn') {

						if(ind === false) {

							tmp = "";

						} else {

							if(nm == obj.p.ExpandColumn && obj.p.treeGrid === true) {

								tmp = $("td:eq("+i+")",obj.rows[ind]).text();

							} else {

								try {

									tmp =  $.unformat($("td:eq("+i+")",obj.rows[ind]),{rowId:rowid, colModel:this},i);

								} catch (_) {

									tmp = $("td:eq("+i+")",obj.rows[ind]).html();

								}

							}

						}

						var opt = $.extend({}, this.editoptions || {} ,{id:nm,name:nm}),

						frmopt = $.extend({}, {elmprefix:'',elmsuffix:'',rowabove:false,rowcontent:''}, this.formoptions || {}),

						rp = parseInt(frmopt.rowpos,10) || cnt+1,

						cp = parseInt((parseInt(frmopt.colpos,10) || 1)*2,10);

						if(rowid == "_empty" && opt.defaultValue ) {

							tmp = $.isFunction(opt.defaultValue) ? opt.defaultValue() : opt.defaultValue; 

						}

						if(!this.edittype) { this.edittype = "text"; }

						if($t.p.autoencode) { tmp = $.jgrid.htmlDecode(tmp); }

						elc = $.jgrid.createEl(this.edittype,opt,tmp,false,$.extend({},$.jgrid.ajaxOptions,obj.p.ajaxSelectOptions || {}));

						if(tmp === "" && this.edittype == "checkbox") {tmp = $(elc).attr("offval");}

						if(tmp === "" && this.edittype == "select") {tmp = $("option:eq(0)",elc).text();}

						if(rp_ge.checkOnSubmit || rp_ge.checkOnUpdate) { rp_ge._savedData[nm] = tmp; }

						$(elc).addClass("FormElement");

						if(this.edittype == 'text' || this.edittype == 'textarea') {

							$(elc).addClass("ui-widget-content ui-corner-all");

						}

						trdata = $(tb).find("tr[rowpos="+rp+"]");

						if(frmopt.rowabove) {

							var newdata = $("<tr><td class='contentinfo' colspan='"+(maxcols*2)+"'>"+frmopt.rowcontent+"</td></tr>");

							$(tb).append(newdata);

							newdata[0].rp = rp;

						}

						if ( trdata.length===0 ) {

							trdata = $("<tr "+dc+" rowpos='"+rp+"'></tr>").addClass("FormData").attr("id","tr_"+nm);

							$(trdata).append(tmpl);

							$(tb).append(trdata);

							trdata[0].rp = rp;

						}

						$("td:eq("+(cp-2)+")",trdata[0]).html( typeof frmopt.label === 'undefined' ? obj.p.colNames[i]: frmopt.label);

						$("td:eq("+(cp-1)+")",trdata[0]).append(frmopt.elmprefix).append(elc).append(frmopt.elmsuffix);

						retpos[cnt] = i;

						cnt++;

					}

				});

				if( cnt > 0) {

					var idrow = $("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+ (maxcols*2-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+obj.p.id+"_id' value='"+rowid+"'/></td></tr>");

					idrow[0].rp = cnt+999;

					$(tb).append(idrow);

					if(rp_ge.checkOnSubmit || rp_ge.checkOnUpdate) { rp_ge._savedData[obj.p.id+"_id"] = rowid; }

				}

				return retpos;

			}

			function fillData(rowid,obj,fmid){

				var nm,cnt=0,tmp, fld,opt,vl,vlc;

				if(rp_ge.checkOnSubmit || rp_ge.checkOnUpdate) {rp_ge._savedData = {};rp_ge._savedData[obj.p.id+"_id"]=rowid;}

				var cm = obj.p.colModel;

				if(rowid == '_empty') {

					$(cm).each(function(i){

						nm = this.name;

						opt = $.extend({}, this.editoptions || {} );

						fld = $("#"+$.jgrid.jqID(nm),"#"+fmid);

						if(fld[0] != null) {

							vl = "";

							if(opt.defaultValue ) {

								vl = $.isFunction(opt.defaultValue) ? opt.defaultValue() : opt.defaultValue;

								if(fld[0].type=='checkbox') {

									vlc = vl.toLowerCase();

									if(vlc.search(/(false|0|no|off|undefined)/i)<0 && vlc!=="") {

										fld[0].checked = true;

										fld[0].defaultChecked = true;

										fld[0].value = vl;

									} else {

										fld.attr({checked:"",defaultChecked:""});

									}

								} else {fld.val(vl); }

							} else {

								if( fld[0].type=='checkbox' ) {

									fld[0].checked = false;

									fld[0].defaultChecked = false;

									vl = $(fld).attr("offval");

								} else if (fld[0].type && fld[0].type.substr(0,6)=='select') {

									fld[0].selectedIndex = 0; 

								} else {

									fld.val(vl);

								}

							}

							if(rp_ge.checkOnSubmit===true || rp_ge.checkOnUpdate) { rp_ge._savedData[nm] = vl; }

						}

					});

					$("#id_g","#"+fmid).val(rowid);

					return;

				}

				var tre = $(obj).jqGrid("getInd",rowid,true);

				if(!tre) { return; }

				$('td',tre).each( function(i) {

					nm = cm[i].name;

					// hidden fields are included in the form

					if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn' && cm[i].editable===true) {

						if(nm == obj.p.ExpandColumn && obj.p.treeGrid === true) {

							tmp = $(this).text();

						} else {

							try {

								tmp =  $.unformat($(this),{rowId:rowid, colModel:cm[i]},i);

							} catch (_) {

								tmp = $(this).html();

							}

						}

						if($t.p.autoencode) { tmp = $.jgrid.htmlDecode(tmp); }

						if(rp_ge.checkOnSubmit===true || rp_ge.checkOnUpdate) { rp_ge._savedData[nm] = tmp; }

						nm = $.jgrid.jqID(nm);

						switch (cm[i].edittype) {

							case "password":

							case "text":

							case "button" :

							case "image":

								$("#"+nm,"#"+fmid).val(tmp);

								break;

							case "textarea":

								if(tmp == "&nbsp;" || tmp == "&#160;" || (tmp.length==1 && tmp.charCodeAt(0)==160) ) {tmp='';}

								$("#"+nm,"#"+fmid).val(tmp);

								break;

							case "select":

								var opv = tmp.split(",");

								opv = $.map(opv,function(n){return $.trim(n);});

								$("#"+nm+" option","#"+fmid).each(function(j){

									if (!cm[i].editoptions.multiple && (opv[0] == $.trim($(this).text()) || opv[0] == $.trim($(this).val())) ){

										this.selected= true;

									} else if (cm[i].editoptions.multiple){

										if(  $.inArray($.trim($(this).text()), opv ) > -1 || $.inArray($.trim($(this).val()), opv ) > -1  ){

											this.selected = true;

										}else{

											this.selected = false;

										}

									} else {

										this.selected = false;

									}

								});

								break;

							case "checkbox":

								tmp = tmp+"";

								if(cm[i].editoptions && cm[i].editoptions.value) {

									var cb = cm[i].editoptions.value.split(":");

									if(cb[0] == tmp) {

										$("#"+nm,"#"+fmid).attr("checked",true);

										$("#"+nm,"#"+fmid).attr("defaultChecked",true); //ie

									} else {

										$("#"+nm,"#"+fmid).attr("checked",false);

										$("#"+nm,"#"+fmid).attr("defaultChecked",""); //ie

									}

								} else {

									tmp = tmp.toLowerCase();

									if(tmp.search(/(false|0|no|off|undefined)/i)<0 && tmp!=="") {

										$("#"+nm,"#"+fmid).attr("checked",true);

										$("#"+nm,"#"+fmid).attr("defaultChecked",true); //ie

									} else {

										$("#"+nm,"#"+fmid).attr("checked",false);

										$("#"+nm,"#"+fmid).attr("defaultChecked",""); //ie

									}

								}

								break;

							case 'custom' :

								try {

									if(cm[i].editoptions && $.isFunction(cm[i].editoptions.custom_value)) {

										cm[i].editoptions.custom_value($("#"+nm,"#"+fmid),'set',tmp);

									} else { throw "e1"; }

								} catch (e) {

									if (e=="e1") { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.nodefined,jQuery.jgrid.edit.bClose);}

									else { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,e.message,jQuery.jgrid.edit.bClose); }

								}

								break;

						}

						cnt++;

					}

				});

				if(cnt>0) { $("#id_g","#"+frmtb).val(rowid); }

			}

			function postIt() {

				var copydata, ret=[true,"",""], onCS = {}, opers = $t.p.prmNames, idname, oper;

				if($.isFunction(rp_ge.beforeCheckValues)) {

					var retvals = rp_ge.beforeCheckValues(postdata,$("#"+frmgr),postdata[$t.p.id+"_id"] == "_empty" ? opers.addoper : opers.editoper);

					if(retvals && typeof(retvals) === 'object') { postdata = retvals; }

				}

				for( var key in postdata ){

					if(postdata.hasOwnProperty(key)) {

						ret = $.jgrid.checkValues(postdata[key],key,$t);

						if(ret[0] === false) { break; }

					}

				}

				if(ret[0]) {

					if( $.isFunction( rp_ge.onclickSubmit)) { onCS = rp_ge.onclickSubmit(rp_ge,postdata) || {}; }

					if( $.isFunction(rp_ge.beforeSubmit))  { ret = rp_ge.beforeSubmit(postdata,$("#"+frmgr)); }

				}



				if(ret[0] && !rp_ge.processing) {

					rp_ge.processing = true;

					$("#sData", "#"+frmtb+"_2").addClass('ui-state-active');

					oper = opers.oper;

					idname = opers.id;

					// we add to pos data array the action - the name is oper

					postdata[oper] = ($.trim(postdata[$t.p.id+"_id"]) == "_empty") ? opers.addoper : opers.editoper;

					if(postdata[oper] != opers.addoper) {

						postdata[idname] = postdata[$t.p.id+"_id"];

					} else {

						// check to see if we have allredy this field in the form and if yes lieve it

						if( postdata[idname] === undefined ) { postdata[idname] = postdata[$t.p.id+"_id"]; }

					}

					delete postdata[$t.p.id+"_id"];

					postdata = $.extend(postdata,rp_ge.editData,onCS);



					var ajaxOptions = $.extend({

						url: rp_ge.url ? rp_ge.url : $($t).jqGrid('getGridParam','editurl'),

						type: rp_ge.mtype,

						data: $.isFunction(rp_ge.serializeEditData) ? rp_ge.serializeEditData(postdata) :  postdata,

						complete:function(data,Status){

							if(Status != "success") {

							    ret[0] = false;

							    if ($.isFunction(rp_ge.errorTextFormat)) {

							        ret[1] = rp_ge.errorTextFormat(data);

							    } else {

							        ret[1] = Status + " Status: '" + data.statusText + "'. Error code: " + data.status;

								}

							} else {

								// data is posted successful

								// execute aftersubmit with the returned data from server

								if( $.isFunction(rp_ge.afterSubmit) ) {

									ret = rp_ge.afterSubmit(data,postdata);

								}

							}

							if(ret[0] === false) {

								$("#FormError>td","#"+frmtb).html(ret[1]);

								$("#FormError","#"+frmtb).show();

							} else {

								// remove some values if formattaer select or checkbox

								$.each($t.p.colModel, function(i,n){

									if(extpost[this.name] && this.formatter && this.formatter=='select') {

										try {delete extpost[this.name];} catch (e) {}

									}

								});

								postdata = $.extend(postdata,extpost);

								if($t.p.autoencode) {

									$.each(postdata,function(n,v){

										postdata[n] = $.jgrid.htmlDecode(v);

									});

								}

								rp_ge.reloadAfterSubmit = rp_ge.reloadAfterSubmit && $t.p.datatype != "local";

								// the action is add

								if(postdata[oper] == opers.addoper ) {

									//id processing

									// user not set the id ret[2]

									if(!ret[2]) { ret[2] = (parseInt($t.p.records,10)+1)+""; }

									postdata[idname] = ret[2];

									if(rp_ge.closeAfterAdd) {

										if(rp_ge.reloadAfterSubmit) { $($t).trigger("reloadGrid"); }

										else {

											$($t).jqGrid("addRowData",ret[2],postdata,p.addedrow);

											$($t).jqGrid("setSelection",ret[2]);

										}

										$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal,onClose: rp_ge.onClose});

									} else if (rp_ge.clearAfterAdd) {

										if(rp_ge.reloadAfterSubmit) { $($t).trigger("reloadGrid"); }

										else { $($t).jqGrid("addRowData",ret[2],postdata,p.addedrow); }

										fillData("_empty",$t,frmgr);

									} else {

										if(rp_ge.reloadAfterSubmit) { $($t).trigger("reloadGrid"); }

										else { $($t).jqGrid("addRowData",ret[2],postdata,p.addedrow); }

									}

								} else {

									// the action is update

									if(rp_ge.reloadAfterSubmit) {

										$($t).trigger("reloadGrid");

										if( !rp_ge.closeAfterEdit ) { setTimeout(function(){$($t).jqGrid("setSelection",postdata[idname]);},1000); }

									} else {

										if($t.p.treeGrid === true) {

											$($t).jqGrid("setTreeRow",postdata[idname],postdata);

										} else {

											$($t).jqGrid("setRowData",postdata[idname],postdata);

										}

									}

									if(rp_ge.closeAfterEdit) { $.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal,onClose: rp_ge.onClose}); }

								}

								if($.isFunction(rp_ge.afterComplete)) {

									copydata = data;

									setTimeout(function(){rp_ge.afterComplete(copydata,postdata,$("#"+frmgr));copydata=null;},500);

								}

							}

							rp_ge.processing=false;

							if(rp_ge.checkOnSubmit || rp_ge.checkOnUpdate) {

								$("#"+frmgr).data("disabled",false);

								if(rp_ge._savedData[$t.p.id+"_id"] !="_empty"){

									for(var key in rp_ge._savedData) {

										if(postdata[key]) {

											rp_ge._savedData[key] = postdata[key];

										}

									}

								}

							}

							$("#sData", "#"+frmtb+"_2").removeClass('ui-state-active');

							try{$(':input:visible',"#"+frmgr)[0].focus();} catch (e){}

						},

						error:function(xhr,st,err){

							$("#FormError>td","#"+frmtb).html(st+ " : "+err);

							$("#FormError","#"+frmtb).show();

							rp_ge.processing=false;

							$("#"+frmgr).data("disabled",false);

							$("#sData", "#"+frmtb+"_2").removeClass('ui-state-active');

						}

					}, $.jgrid.ajaxOptions, rp_ge.ajaxEditOptions );

					

					if (!ajaxOptions.url && !rp_ge.useDataProxy) {

						if ($.isFunction($t.p.dataProxy)) {

							rp_ge.useDataProxy = true;

						} else {

							ret[0]=false; ret[1] += " "+$.jgrid.errors.nourl;

						}

					}

					if (ret[0]) { 

						if (rp_ge.useDataProxy) { $t.p.dataProxy.call($t, ajaxOptions, "set_"+$t.p.id); }

						else { $.ajax(ajaxOptions); }

					}

				}

				if(ret[0] === false) {

					$("#FormError>td","#"+frmtb).html(ret[1]);

					$("#FormError","#"+frmtb).show();

					// return; 

				}

			}

			function compareData(nObj, oObj ) {

				var ret = false,key;

				for (key in nObj) {

					if(nObj[key] != oObj[key]) {

						ret = true;

						break;

					}

				}

				return ret;

			}

			function checkUpdates () {

				var stat = true;

				$("#FormError","#"+frmtb).hide();

				if(rp_ge.checkOnUpdate) {

					postdata = {}; extpost={};

					getFormData();

					newData = $.extend({},postdata,extpost);

					diff = compareData(newData,rp_ge._savedData);

					if(diff) {

						$("#"+frmgr).data("disabled",true);

						$(".confirm","#"+IDs.themodal).show();

						stat = false;

					}

				}

				return stat;

			}

			function restoreInline()

			{

				if (rowid !== "_empty" && typeof($t.p.savedRow) !== "undefined" && $t.p.savedRow.length > 0 && $.isFunction($.fn.jqGrid['restoreRow'])) {

					for (var i=0;i<$t.p.savedRow.length;i++) {

						if ($t.p.savedRow[i].id == rowid) {

							$($t).jqGrid('restoreRow',rowid);

							break;

						}

					}

				}

			}

			if ( $("#"+IDs.themodal).html() != null ) {

				if(onBeforeInit) {

					showFrm = onBeforeInit($("#"+frmgr));

					if(typeof(showFrm) == "undefined") {

						showFrm = true;

					}

				}

				if(showFrm === false) { return; }

				restoreInline();

				$(".ui-jqdialog-title","#"+IDs.modalhead).html(p.caption);

				$("#FormError","#"+frmtb).hide();

				if(rp_ge.topinfo) {

					$(".topinfo","#"+frmtb+"_2").html(rp_ge.topinfo);

					$(".tinfo","#"+frmtb+"_2").show();

				} else {

					$(".tinfo","#"+frmtb+"_2").hide();

				}

				if(rp_ge.bottominfo) {

					$(".bottominfo","#"+frmtb+"_2").html(rp_ge.bottominfo);

					$(".binfo","#"+frmtb+"_2").show();

				} else {

					$(".binfo","#"+frmtb+"_2").hide();

				}

				// filldata

				fillData(rowid,$t,frmgr);

				///

				if(rowid=="_empty" || !rp_ge.viewPagerButtons) {

					$("#pData, #nData","#"+frmtb+"_2").hide();

				} else { 

					$("#pData, #nData","#"+frmtb+"_2").show();

				}

				if(rp_ge.processing===true) {

					rp_ge.processing=false;

					$("#sData", "#"+frmtb+"_2").removeClass('ui-state-active');

				}

				if($("#"+frmgr).data("disabled")===true) {

					$(".confirm","#"+IDs.themodal).hide();

					$("#"+frmgr).data("disabled",false);

				}

				if(onBeforeShow) { onBeforeShow($("#"+frmgr)); }

				$("#"+IDs.themodal).data("onClose",rp_ge.onClose);

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal, jqM: false, overlay: p.overlay, modal:p.modal});

				if(!closeovrl) {

					$(".jqmOverlay").click(function(){

						if(!checkUpdates()) { return false; }

						$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal, onClose: rp_ge.onClose});

						return false;

					});

				}

				if(onAfterShow) { onAfterShow($("#"+frmgr)); }

			} else {

				var dh = isNaN(p.dataheight) ? p.dataheight : p.dataheight+"px",

				frm = $("<form name='FormPost' id='"+frmgr+"' class='FormGrid' onSubmit='return false;' style='width:100%;overflow:auto;position:relative;height:"+dh+";'></form>").data("disabled",false),

				tbl = $("<table id='"+frmtb+"' class='EditTable' cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>");

				if(onBeforeInit) {

					showFrm = onBeforeInit($("#"+frmgr));

					if(typeof(showFrm) == "undefined") {

						showFrm = true;

					}

				}

				if(showFrm === false) { return; }

				restoreInline();

				$($t.p.colModel).each( function(i) {

					var fmto = this.formoptions;

					maxCols = Math.max(maxCols, fmto ? fmto.colpos || 0 : 0 );

					maxRows = Math.max(maxRows, fmto ? fmto.rowpos || 0 : 0 );

				});

				$(frm).append(tbl);

				var flr = $("<tr id='FormError' style='display:none'><td class='ui-state-error' colspan='"+(maxCols*2)+"'></td></tr>");

				flr[0].rp = 0;

				$(tbl).append(flr);

				//topinfo

				flr = $("<tr style='display:none' class='tinfo'><td class='topinfo' colspan='"+(maxCols*2)+"'>"+rp_ge.topinfo+"</td></tr>");

				flr[0].rp = 0;

				$(tbl).append(flr);

				// set the id.

				// use carefull only to change here colproperties.

				// create data

				var rtlb = $t.p.direction == "rtl" ? true :false,

				bp = rtlb ? "nData" : "pData",

				bn = rtlb ? "pData" : "nData";

				createData(rowid,$t,tbl,maxCols);

				// buttons at footer

				var bP = "<a href='javascript:void(0)' id='"+bp+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></div>",

				bN = "<a href='javascript:void(0)' id='"+bn+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></div>",

				bS  ="<a href='javascript:void(0)' id='sData' class='fm-button ui-state-default ui-corner-all'>"+p.bSubmit+"</a>",

				bC  ="<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>"+p.bCancel+"</a>";

				var bt = "<table border='0' cellspacing='0' cellpadding='0' class='EditTable' id='"+frmtb+"_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+(rtlb ? bN+bP : bP+bN)+"</td><td class='EditButton'>"+bS+bC+"</td></tr>";

				bt += "<tr style='display:none' class='binfo'><td class='bottominfo' colspan='2'>"+rp_ge.bottominfo+"</td></tr>";

				bt += "</tbody></table>";

				if(maxRows >  0) {

					var sd=[];

					$.each($(tbl)[0].rows,function(i,r){

						sd[i] = r;

					});

					sd.sort(function(a,b){

						if(a.rp > b.rp) {return 1;}

						if(a.rp < b.rp) {return -1;}

						return 0;

					});

					$.each(sd, function(index, row) {

						$('tbody',tbl).append(row);

					});

				}

				p.gbox = "#gbox_"+gID;

				var cle = false;

				if(p.closeOnEscape===true){

					p.closeOnEscape = false;

					cle = true;

				}

				var tms = $("<span></span>").append(frm).append(bt);

				$.jgrid.createModal(IDs,tms,p,"#gview_"+$t.p.id,$("#gbox_"+$t.p.id)[0]);

				if(rtlb) {

					$("#pData, #nData","#"+frmtb+"_2").css("float","right");

					$(".EditButton","#"+frmtb+"_2").css("text-align","left");

				}

				if(rp_ge.topinfo) { $(".tinfo","#"+frmtb+"_2").show(); }

				if(rp_ge.bottominfo) { $(".binfo","#"+frmtb+"_2").show(); } 

				tms = null; bt=null;

				$("#"+IDs.themodal).keydown( function( e ) {

					var wkey = e.target;

					if ($("#"+frmgr).data("disabled")===true ) { return false; }//??

					if(rp_ge.savekey[0] === true && e.which == rp_ge.savekey[1]) { // save

						if(wkey.tagName != "TEXTAREA") {

							$("#sData", "#"+frmtb+"_2").trigger("click");

							return false;

						}

					}

					if(e.which === 27) {

						if(!checkUpdates()) { return false; }

						if(cle)	{ $.jgrid.hideModal(this,{gb:p.gbox,jqm:p.jqModal, onClose: rp_ge.onClose}); }

						return false;

					}

					if(rp_ge.navkeys[0]===true) {

						if($("#id_g","#"+frmtb).val() == "_empty") { return true; }

						if(e.which == rp_ge.navkeys[1]){ //up

							$("#pData", "#"+frmtb+"_2").trigger("click");

							return false;

						}

						if(e.which == rp_ge.navkeys[2]){ //down

							$("#nData", "#"+frmtb+"_2").trigger("click");

							return false;

						}

					}

				});

				if(p.checkOnUpdate) {

					$("a.ui-jqdialog-titlebar-close span","#"+IDs.themodal).removeClass("jqmClose");

					$("a.ui-jqdialog-titlebar-close","#"+IDs.themodal).unbind("click")

					.click(function(){

						if(!checkUpdates()) { return false; }

						$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal,onClose: rp_ge.onClose});

						return false;

					});

				}

				p.saveicon = $.extend([true,"left","ui-icon-disk"],p.saveicon);

				p.closeicon = $.extend([true,"left","ui-icon-close"],p.closeicon);

				// beforeinitdata after creation of the form

				if(p.saveicon[0]===true) {

					$("#sData","#"+frmtb+"_2").addClass(p.saveicon[1] == "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')

					.append("<span class='ui-icon "+p.saveicon[2]+"'></span>");

				}

				if(p.closeicon[0]===true) {

					$("#cData","#"+frmtb+"_2").addClass(p.closeicon[1] == "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')

					.append("<span class='ui-icon "+p.closeicon[2]+"'></span>");

				}

				if(rp_ge.checkOnSubmit || rp_ge.checkOnUpdate) {

					bS  ="<a href='javascript:void(0)' id='sNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+p.bYes+"</a>";

					bN  ="<a href='javascript:void(0)' id='nNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+p.bNo+"</a>";

					bC  ="<a href='javascript:void(0)' id='cNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+p.bExit+"</a>";

					var ii, zI = p.zIndex  || 999; zI ++;

					if ($.browser.msie && $.browser.version ==6) {

						ii = '<iframe style="display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=\'0\');" src="javascript:false;"></iframe>';

					} else { ii="";}

					$("<div class='ui-widget-overlay jqgrid-overlay confirm' style='z-index:"+zI+";display:none;'>&#160;"+ii+"</div><div class='confirm ui-widget-content ui-jqconfirm' style='z-index:"+(zI+1)+"'>"+p.saveData+"<br/><br/>"+bS+bN+bC+"</div>").insertAfter("#"+frmgr);

					$("#sNew","#"+IDs.themodal).click(function(){

						postIt();

						$("#"+frmgr).data("disabled",false);

						$(".confirm","#"+IDs.themodal).hide();

						return false;

					});

					$("#nNew","#"+IDs.themodal).click(function(){

						$(".confirm","#"+IDs.themodal).hide();

						$("#"+frmgr).data("disabled",false);

						setTimeout(function(){$(":input","#"+frmgr)[0].focus();},0);

						return false;

					});

					$("#cNew","#"+IDs.themodal).click(function(){

						$(".confirm","#"+IDs.themodal).hide();

						$("#"+frmgr).data("disabled",false);

						$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal,onClose: rp_ge.onClose});

						return false;

					});

				}

				// here initform - only once

				if(onInitializeForm) { onInitializeForm($("#"+frmgr)); }

				if(rowid=="_empty" || !rp_ge.viewPagerButtons) { $("#pData,#nData","#"+frmtb+"_2").hide(); } else { $("#pData,#nData","#"+frmtb+"_2").show(); }

				if(onBeforeShow) { onBeforeShow($("#"+frmgr)); }

				$("#"+IDs.themodal).data("onClose",rp_ge.onClose);

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal, overlay: p.overlay,modal:p.modal});

				if(!closeovrl) {

					$(".jqmOverlay").click(function(){

						if(!checkUpdates()) { return false; }

						$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal, onClose: rp_ge.onClose});

						return false;

					});

				}

				if(onAfterShow) { onAfterShow($("#"+frmgr)); }

				$(".fm-button","#"+IDs.themodal).hover(

				   function(){$(this).addClass('ui-state-hover');}, 

				   function(){$(this).removeClass('ui-state-hover');}

				);

				$("#sData", "#"+frmtb+"_2").click(function(e){

					postdata = {}; extpost={};

					$("#FormError","#"+frmtb).hide();

					// all depend on ret array

					//ret[0] - succes

					//ret[1] - msg if not succes

					//ret[2] - the id  that will be set if reload after submit false

					getFormData();

					if(postdata[$t.p.id+"_id"] == "_empty")	{ postIt(); }

					else if(p.checkOnSubmit===true ) {

						newData = $.extend({},postdata,extpost);

						diff = compareData(newData,rp_ge._savedData);

						if(diff) {

							$("#"+frmgr).data("disabled",true);

							$(".confirm","#"+IDs.themodal).show();

						} else {

							postIt();

						}

					} else {

						postIt();

					}

					return false;

				});

				$("#cData", "#"+frmtb+"_2").click(function(e){

					if(!checkUpdates()) { return false; }

					$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal,onClose: rp_ge.onClose});

					return false;

				});

				$("#nData", "#"+frmtb+"_2").click(function(e){

					if(!checkUpdates()) { return false; }

					$("#FormError","#"+frmtb).hide();

					var npos = getCurrPos();

					npos[0] = parseInt(npos[0],10);

					if(npos[0] != -1 && npos[1][npos[0]+1]) {

						if($.isFunction(p.onclickPgButtons)) {

							p.onclickPgButtons('next',$("#"+frmgr),npos[1][npos[0]]);

						}

						fillData(npos[1][npos[0]+1],$t,frmgr);

						$($t).jqGrid("setSelection",npos[1][npos[0]+1]);

						if($.isFunction(p.afterclickPgButtons)) {

							p.afterclickPgButtons('next',$("#"+frmgr),npos[1][npos[0]+1]);

						}

						updateNav(npos[0]+1,npos[1].length-1);

					}

					return false;

				});

				$("#pData", "#"+frmtb+"_2").click(function(e){

					if(!checkUpdates()) { return false; }

					$("#FormError","#"+frmtb).hide();

					var ppos = getCurrPos();

					if(ppos[0] != -1 && ppos[1][ppos[0]-1]) {

						if($.isFunction(p.onclickPgButtons)) {

							p.onclickPgButtons('prev',$("#"+frmgr),ppos[1][ppos[0]]);

						}

						fillData(ppos[1][ppos[0]-1],$t,frmgr);

						$($t).jqGrid("setSelection",ppos[1][ppos[0]-1]);

						if($.isFunction(p.afterclickPgButtons)) {

							p.afterclickPgButtons('prev',$("#"+frmgr),ppos[1][ppos[0]-1]);

						}

						updateNav(ppos[0]-1,ppos[1].length-1);

					}

					return false;

				});

			}

			function updateNav(cr,totr,rid){

				if (cr===0) { $("#pData","#"+frmtb+"_2").addClass('ui-state-disabled'); } else { $("#pData","#"+frmtb+"_2").removeClass('ui-state-disabled'); }

				if (cr==totr) { $("#nData","#"+frmtb+"_2").addClass('ui-state-disabled'); } else { $("#nData","#"+frmtb+"_2").removeClass('ui-state-disabled'); }

			}

			function getCurrPos() {

				var rowsInGrid = $($t).jqGrid("getDataIDs"),

				selrow = $("#id_g","#"+frmtb).val(),

				pos = $.inArray(selrow,rowsInGrid);

				return [pos,rowsInGrid];

			}



			var posInit =getCurrPos();

			updateNav(posInit[0],posInit[1].length-1);



		});

	},

	viewGridRow : function(rowid, p){

		p = $.extend({

			top : 0,

			left: 0,

			width: 0,

			height: 'auto',

			dataheight: 'auto',

			modal: false,

			overlay: 10,

			drag: true,

			resize: true,

			jqModal: true,

			closeOnEscape : false,

			labelswidth: '30%',

			closeicon: [],

			navkeys: [false,38,40],

			onClose: null,

			beforeShowForm : null,

			beforeInitData : null,

			viewPagerButtons : true

		}, $.jgrid.view, p || {});

		return this.each(function(){

			var $t = this;

			if (!$t.grid || !rowid) { return; }

			if(!p.imgpath) { p.imgpath= $t.p.imgpath; }

			// I hate to rewrite code, but ...

			var gID = $t.p.id,

			frmgr = "ViewGrid_"+gID , frmtb = "ViewTbl_"+gID,

			IDs = {themodal:'viewmod'+gID,modalhead:'viewhd'+gID,modalcontent:'viewcnt'+gID, scrollelm : frmgr},

			onBeforeInit = $.isFunction(p.beforeInitData) ? p.beforeInitData : false,

			showFrm = true,

			maxCols = 1, maxRows=0;

			function focusaref(){ //Sfari 3 issues

				if(p.closeOnEscape===true || p.navkeys[0]===true) {

					setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+IDs.modalhead).focus();},0);

				}

			}

			function createData(rowid,obj,tb,maxcols){

				var nm, hc,trdata, cnt=0,tmp, dc, retpos=[], ind=false,

				tdtmpl = "<td class='CaptionTD form-view-label ui-widget-content' width='"+p.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset ui-widget-content'>&#160;</td>", tmpl="",

				tdtmpl2 = "<td class='CaptionTD form-view-label ui-widget-content'>&#160;</td><td class='DataTD form-view-data ui-widget-content'>&#160;</td>",

				fmtnum = ['integer','number','currency'],max1 =0, max2=0 ,maxw,setme, viewfld;

				for (var i =1;i<=maxcols;i++) {

					tmpl += i == 1 ? tdtmpl : tdtmpl2;

				}

				// find max number align rigth with property formatter

				$(obj.p.colModel).each( function(i) {

					if(this.editrules && this.editrules.edithidden === true) {

						hc = false;

					} else {

						hc = this.hidden === true ? true : false;

					}

					if(!hc && this.align==='right') {

						if(this.formatter && $.inArray(this.formatter,fmtnum) !== -1 ) {

							max1 = Math.max(max1,parseInt(this.width,10));

						} else {

							max2 = Math.max(max2,parseInt(this.width,10));

						}

					}

				});

				maxw  = max1 !==0 ? max1 : max2 !==0 ? max2 : 0;

				ind = $(obj).jqGrid("getInd",rowid);

				$(obj.p.colModel).each( function(i) {

					nm = this.name;

					setme = false;

					// hidden fields are included in the form

					if(this.editrules && this.editrules.edithidden === true) {

						hc = false;

					} else {

						hc = this.hidden === true ? true : false;

					}

					dc = hc ? "style='display:none'" : "";

					viewfld = (typeof this.viewable != 'boolean') ? true : this.viewable;

					if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn' && viewfld) {

						if(ind === false) {

							tmp = "";

						} else {

							if(nm == obj.p.ExpandColumn && obj.p.treeGrid === true) {

								tmp = $("td:eq("+i+")",obj.rows[ind]).text();

							} else {

								tmp = $("td:eq("+i+")",obj.rows[ind]).html();

							}

						}

						setme = this.align === 'right' && maxw !==0 ? true : false;

						var opt = $.extend({}, this.editoptions || {} ,{id:nm,name:nm}),

						frmopt = $.extend({},{rowabove:false,rowcontent:''}, this.formoptions || {}),

						rp = parseInt(frmopt.rowpos,10) || cnt+1,

						cp = parseInt((parseInt(frmopt.colpos,10) || 1)*2,10);

						if(frmopt.rowabove) {

							var newdata = $("<tr><td class='contentinfo' colspan='"+(maxcols*2)+"'>"+frmopt.rowcontent+"</td></tr>");

							$(tb).append(newdata);

							newdata[0].rp = rp;

						}

						trdata = $(tb).find("tr[rowpos="+rp+"]");

						if ( trdata.length===0 ) {

							trdata = $("<tr "+dc+" rowpos='"+rp+"'></tr>").addClass("FormData").attr("id","trv_"+nm);

							$(trdata).append(tmpl);

							$(tb).append(trdata);

							trdata[0].rp = rp;

						}

						$("td:eq("+(cp-2)+")",trdata[0]).html('<b>'+ (typeof frmopt.label === 'undefined' ? obj.p.colNames[i]: frmopt.label)+'</b>');

						$("td:eq("+(cp-1)+")",trdata[0]).append("<span>"+tmp+"</span>").attr("id","v_"+nm);

						if(setme){

							$("td:eq("+(cp-1)+") span",trdata[0]).css({'text-align':'right',width:maxw+"px"});

						}

						retpos[cnt] = i;

						cnt++;

					}

				});

				if( cnt > 0) {

					var idrow = $("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+ (maxcols*2-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+rowid+"'/></td></tr>");

					idrow[0].rp = cnt+99;

					$(tb).append(idrow);

				}

				return retpos;

			}

			function fillData(rowid,obj){

				var nm, hc,cnt=0,tmp, opt,trv;

				trv = $(obj).jqGrid("getInd",rowid,true);

				if(!trv) { return; }

				$('td',trv).each( function(i) {

					nm = obj.p.colModel[i].name;

					// hidden fields are included in the form

					if(obj.p.colModel[i].editrules && obj.p.colModel[i].editrules.edithidden === true) {

						hc = false;

					} else {

						hc = obj.p.colModel[i].hidden === true ? true : false;

					}

					if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn') {

						if(nm == obj.p.ExpandColumn && obj.p.treeGrid === true) {

							tmp = $(this).text();

						} else {

							tmp = $(this).html();

						}

						opt = $.extend({},obj.p.colModel[i].editoptions || {});

						nm = $.jgrid.jqID("v_"+nm);

						$("#"+nm+" span","#"+frmtb).html(tmp);

						if (hc) { $("#"+nm,"#"+frmtb).parents("tr:first").hide(); }

						cnt++;

					}

				});

				if(cnt>0) { $("#id_g","#"+frmtb).val(rowid); }

			}			

			if ( $("#"+IDs.themodal).html() != null ) {

				if(onBeforeInit) {

					showFrm = onBeforeInit($("#"+frmgr));

					if(typeof(showFrm) == "undefined") {

						showFrm = true;

					}

				}

				if(showFrm === false) { return; }

				$(".ui-jqdialog-title","#"+IDs.modalhead).html(p.caption);

				$("#FormError","#"+frmtb).hide();

				fillData(rowid,$t);

				if($.isFunction(p.beforeShowForm)) { p.beforeShowForm($("#"+frmgr)); }

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal, jqM: false, overlay: p.overlay, modal:p.modal});

				focusaref();

			} else {

				var dh = isNaN(p.dataheight) ? p.dataheight : p.dataheight+"px";

				var frm = $("<form name='FormPost' id='"+frmgr+"' class='FormGrid' style='width:100%;overflow:auto;position:relative;height:"+dh+";'></form>"),

				tbl =$("<table id='"+frmtb+"' class='EditTable' cellspacing='1' cellpadding='2' border='0' style='table-layout:fixed'><tbody></tbody></table>");

				if(onBeforeInit) {

					showFrm = onBeforeInit($("#"+frmgr));

					if(typeof(showFrm) == "undefined") {

						showFrm = true;

					}

				}

				if(showFrm === false) { return; }

				$($t.p.colModel).each( function(i) {

					var fmto = this.formoptions;

					maxCols = Math.max(maxCols, fmto ? fmto.colpos || 0 : 0 );

					maxRows = Math.max(maxRows, fmto ? fmto.rowpos || 0 : 0 );

				});

				// set the id.

				$(frm).append(tbl);

				createData(rowid, $t, tbl, maxCols);

				var rtlb = $t.p.direction == "rtl" ? true :false,

				bp = rtlb ? "nData" : "pData",

				bn = rtlb ? "pData" : "nData",



				// buttons at footer

				bP = "<a href='javascript:void(0)' id='"+bp+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>",

				bN = "<a href='javascript:void(0)' id='"+bn+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>",

				bC  ="<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>"+p.bClose+"</a>";

				if(maxRows >  0) {

					var sd=[];

					$.each($(tbl)[0].rows,function(i,r){

						sd[i] = r;

					});

					sd.sort(function(a,b){

						if(a.rp > b.rp) {return 1;}

						if(a.rp < b.rp) {return -1;}

						return 0;

					});

					$.each(sd, function(index, row) {

						$('tbody',tbl).append(row);

					});

				}

				p.gbox = "#gbox_"+gID;

				var cle = false;

				if(p.closeOnEscape===true){

					p.closeOnEscape = false;

					cle = true;

				}				

				var bt = $("<span></span>").append(frm).append("<table border='0' class='EditTable' id='"+frmtb+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+p.labelswidth+"'>"+(rtlb ? bN+bP : bP+bN)+"</td><td class='EditButton'>"+bC+"</td></tr></tbody></table>");

				$.jgrid.createModal(IDs,bt,p,"#gview_"+$t.p.id,$("#gview_"+$t.p.id)[0]);

				if(rtlb) {

					$("#pData, #nData","#"+frmtb+"_2").css("float","right");

					$(".EditButton","#"+frmtb+"_2").css("text-align","left");

				}

				if(!p.viewPagerButtons) { $("#pData, #nData","#"+frmtb+"_2").hide(); }

				bt = null;

				$("#"+IDs.themodal).keydown( function( e ) {

					if(e.which === 27) {

						if(cle)	{ $.jgrid.hideModal(this,{gb:p.gbox,jqm:p.jqModal, onClose: p.onClose}); }

						return false;

					}

					if(p.navkeys[0]===true) {

						if(e.which === p.navkeys[1]){ //up

							$("#pData", "#"+frmtb+"_2").trigger("click");

							return false;

						}

						if(e.which === p.navkeys[2]){ //down

							$("#nData", "#"+frmtb+"_2").trigger("click");

							return false;

						}

					}

				});

				p.closeicon = $.extend([true,"left","ui-icon-close"],p.closeicon);

				if(p.closeicon[0]===true) {

					$("#cData","#"+frmtb+"_2").addClass(p.closeicon[1] == "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')

					.append("<span class='ui-icon "+p.closeicon[2]+"'></span>");

				}

				if($.isFunction(p.beforeShowForm)) { p.beforeShowForm($("#"+frmgr)); }

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal, modal:p.modal});

				$(".fm-button:not(.ui-state-disabled)","#"+frmtb+"_2").hover(

				   function(){$(this).addClass('ui-state-hover');}, 

				   function(){$(this).removeClass('ui-state-hover');}

				);

				focusaref();

				$("#cData", "#"+frmtb+"_2").click(function(e){

					$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal, onClose: p.onClose});

					return false;

				});

				$("#nData", "#"+frmtb+"_2").click(function(e){

					$("#FormError","#"+frmtb).hide();

					var npos = getCurrPos();

					npos[0] = parseInt(npos[0],10);

					if(npos[0] != -1 && npos[1][npos[0]+1]) {

						if($.isFunction(p.onclickPgButtons)) {

							p.onclickPgButtons('next',$("#"+frmgr),npos[1][npos[0]]);

						}

						fillData(npos[1][npos[0]+1],$t);

						$($t).jqGrid("setSelection",npos[1][npos[0]+1]);

						if($.isFunction(p.afterclickPgButtons)) {

							p.afterclickPgButtons('next',$("#"+frmgr),npos[1][npos[0]+1]);

						}

						updateNav(npos[0]+1,npos[1].length-1);

					}

					focusaref();

					return false;

				});

				$("#pData", "#"+frmtb+"_2").click(function(e){

					$("#FormError","#"+frmtb).hide();

					var ppos = getCurrPos();

					if(ppos[0] != -1 && ppos[1][ppos[0]-1]) {

						if($.isFunction(p.onclickPgButtons)) {

							p.onclickPgButtons('prev',$("#"+frmgr),ppos[1][ppos[0]]);

						}

						fillData(ppos[1][ppos[0]-1],$t);

						$($t).jqGrid("setSelection",ppos[1][ppos[0]-1]);

						if($.isFunction(p.afterclickPgButtons)) {

							p.afterclickPgButtons('prev',$("#"+frmgr),ppos[1][ppos[0]-1]);

						}

						updateNav(ppos[0]-1,ppos[1].length-1);

					}

					focusaref();

					return false;

				});

			}

			function updateNav(cr,totr,rid){

				if (cr===0) { $("#pData","#"+frmtb+"_2").addClass('ui-state-disabled'); } else { $("#pData","#"+frmtb+"_2").removeClass('ui-state-disabled'); }

				if (cr==totr) { $("#nData","#"+frmtb+"_2").addClass('ui-state-disabled'); } else { $("#nData","#"+frmtb+"_2").removeClass('ui-state-disabled'); }

			}

			function getCurrPos() {

				var rowsInGrid = $($t).jqGrid("getDataIDs"),

				selrow = $("#id_g","#"+frmtb).val(),

				pos = $.inArray(selrow,rowsInGrid);

				return [pos,rowsInGrid];

			}



			var posInit =getCurrPos();

			updateNav(posInit[0],posInit[1].length-1);

		});

	},

	delGridRow : function(rowids,p) {

		p = $.extend({

			top : 0,

			left: 0,

			width: 240,

			height: 'auto',

			dataheight : 'auto',

			modal: false,

			overlay: 10,

			drag: true,

			resize: true,

			url : '',

			mtype : "POST",

			reloadAfterSubmit: true,

			beforeShowForm: null,

			beforeInitData : null,

			afterShowForm: null,

			beforeSubmit: null,

			onclickSubmit: null,

			afterSubmit: null,

			jqModal : true,

			closeOnEscape : false,

			delData: {},

			delicon : [],

			cancelicon : [],

			onClose : null,

			ajaxDelOptions : {},

			processing : false,

			serializeDelData : null,

			useDataProxy : false

		}, $.jgrid.del, p ||{});

		rp_ge = p;

		return this.each(function(){

			var $t = this;

			if (!$t.grid ) { return; }

			if(!rowids) { return; }

			var onBeforeShow = typeof p.beforeShowForm === 'function' ? true: false,

			onAfterShow = typeof p.afterShowForm === 'function' ? true: false,

			onBeforeInit = $.isFunction(p.beforeInitData) ? p.beforeInitData : false,

			gID = $t.p.id, onCS = {},

			showFrm = true,

			dtbl = "DelTbl_"+gID,postd, idname, opers, oper,

			IDs = {themodal:'delmod'+gID,modalhead:'delhd'+gID,modalcontent:'delcnt'+gID, scrollelm: dtbl};

			if (jQuery.isArray(rowids)) { rowids = rowids.join(); }

			if ( $("#"+IDs.themodal).html() != null ) {

				if(onBeforeInit) {

					showFrm = onBeforeInit();

					if(typeof(showFrm) == "undefined") {

						showFrm = true;

					}

				}

				if(showFrm === false) { return; }

				$("#DelData>td","#"+dtbl).text(rowids);

				$("#DelError","#"+dtbl).hide();

				if( rp_ge.processing === true) {

					rp_ge.processing=false;

					$("#dData", "#"+dtbl).removeClass('ui-state-active');

				}

				if(onBeforeShow) { p.beforeShowForm($("#"+dtbl)); }

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal,jqM: false, overlay: p.overlay, modal:p.modal});

				if(onAfterShow) { p.afterShowForm($("#"+dtbl)); }

			} else {

				if(onBeforeInit) {

					showFrm = onBeforeInit();

					if(typeof(showFrm) == "undefined") {

						showFrm = true;

					}

				}

				if(showFrm === false) { return; }

				var dh = isNaN(p.dataheight) ? p.dataheight : p.dataheight+"px";

				var tbl = "<div id='"+dtbl+"' class='formdata' style='width:100%;overflow:auto;position:relative;height:"+dh+";'>";

				tbl += "<table class='DelTable'><tbody>";

				// error data 

				tbl += "<tr id='DelError' style='display:none'><td class='ui-state-error'></td></tr>";

				tbl += "<tr id='DelData' style='display:none'><td >"+rowids+"</td></tr>";

				tbl += "<tr><td class=\"delmsg\" style=\"white-space:pre;\">"+p.msg+"</td></tr><tr><td >&#160;</td></tr>";

				// buttons at footer

				tbl += "</tbody></table></div>";

				var bS  = "<a href='javascript:void(0)' id='dData' class='fm-button ui-state-default ui-corner-all'>"+p.bSubmit+"</a>",

				bC  = "<a href='javascript:void(0)' id='eData' class='fm-button ui-state-default ui-corner-all'>"+p.bCancel+"</a>";

				tbl += "<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='"+dtbl+"_2'><tbody><tr><td><hr class='ui-widget-content' style='margin:1px'/></td></tr></tr><tr><td class='DelButton EditButton'>"+bS+"&#160;"+bC+"</td></tr></tbody></table>";

				p.gbox = "#gbox_"+gID;

				$.jgrid.createModal(IDs,tbl,p,"#gview_"+$t.p.id,$("#gview_"+$t.p.id)[0]);

				$(".fm-button","#"+dtbl+"_2").hover(

				   function(){$(this).addClass('ui-state-hover');}, 

				   function(){$(this).removeClass('ui-state-hover');}

				);

				p.delicon = $.extend([true,"left","ui-icon-scissors"],p.delicon);

				p.cancelicon = $.extend([true,"left","ui-icon-cancel"],p.cancelicon);

				if(p.delicon[0]===true) {

					$("#dData","#"+dtbl+"_2").addClass(p.delicon[1] == "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')

					.append("<span class='ui-icon "+p.delicon[2]+"'></span>");

				}

				if(p.cancelicon[0]===true) {

					$("#eData","#"+dtbl+"_2").addClass(p.cancelicon[1] == "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')

					.append("<span class='ui-icon "+p.cancelicon[2]+"'></span>");

				}				

				$("#dData","#"+dtbl+"_2").click(function(e){

					var ret=[true,""]; onCS = {};

					var postdata = $("#DelData>td","#"+dtbl).text(); //the pair is name=val1,val2,...

					if( typeof p.onclickSubmit === 'function' ) { onCS = p.onclickSubmit(rp_ge, postdata) || {}; }

					if( typeof p.beforeSubmit === 'function' ) { ret = p.beforeSubmit(postdata); }

					if(ret[0] && !rp_ge.processing) {

						rp_ge.processing = true;

						$(this).addClass('ui-state-active');

						opers = $t.p.prmNames;

						postd = $.extend({},rp_ge.delData, onCS);

						oper = opers.oper;

						postd[oper] = opers.deloper;

						idname = opers.id;

						postd[idname] = postdata;



						var ajaxOptions = $.extend({

							url: rp_ge.url ? rp_ge.url : $($t).jqGrid('getGridParam','editurl'),

							type: p.mtype,

							data: $.isFunction(p.serializeDelData) ? p.serializeDelData(postd) : postd,

							complete:function(data,Status){

								if(Status != "success") {

									ret[0] = false;

									if ($.isFunction(rp_ge.errorTextFormat)) {

										ret[1] = rp_ge.errorTextFormat(data);

									} else {

										ret[1] = Status + " Status: '" + data.statusText + "'. Error code: " + data.status;

									}

								} else {

									// data is posted successful

									// execute aftersubmit with the returned data from server

									if( typeof rp_ge.afterSubmit === 'function' ) {

										ret = rp_ge.afterSubmit(data,postd);

									}

								}

								if(ret[0] === false) {

									$("#DelError>td","#"+dtbl).html(ret[1]);

									$("#DelError","#"+dtbl).show();

								} else {

									if(rp_ge.reloadAfterSubmit && $t.p.datatype != "local") {

										$($t).trigger("reloadGrid");

									} else {

										var toarr = [];

										toarr = postdata.split(",");

										if($t.p.treeGrid===true){

												try {$($t).jqGrid("delTreeNode",toarr[0]);} catch(e){}

										} else {

											for(var i=0;i<toarr.length;i++) {

												$($t).jqGrid("delRowData",toarr[i]);

											}

										}

										$t.p.selrow = null;

										$t.p.selarrrow = [];

									}

									if($.isFunction(rp_ge.afterComplete)) {

										setTimeout(function(){rp_ge.afterComplete(data,postdata);},500);

									}

								}

								rp_ge.processing=false;

								$("#dData", "#"+dtbl+"_2").removeClass('ui-state-active');

								if(ret[0]) { $.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal, onClose: rp_ge.onClose}); }

							},

							error:function(xhr,st,err){

								$("#DelError>td","#"+dtbl).html(st+ " : "+err);

								$("#DelError","#"+dtbl).show();

								rp_ge.processing=false;

									$("#dData", "#"+dtbl+"_2").removeClass('ui-state-active');

							}

						}, $.jgrid.ajaxOptions, p.ajaxDelOptions);





						if (!ajaxOptions.url && !rp_ge.useDataProxy) {

							if ($.isFunction($t.p.dataProxy)) {

								rp_ge.useDataProxy = true;

							} else {

								ret[0]=false; ret[1] += " "+$.jgrid.errors.nourl;

							}

						}

						if (ret[0]) {

							if (rp_ge.useDataProxy) { $t.p.dataProxy.call($t, ajaxOptions, "del_"+$t.p.id); }

							else { $.ajax(ajaxOptions); }

						}

					}



					if(ret[0] === false) {

						$("#DelError>td","#"+dtbl).html(ret[1]);

						$("#DelError","#"+dtbl).show();

					}

					return false;

				});

				$("#eData", "#"+dtbl+"_2").click(function(e){

					$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal, onClose: rp_ge.onClose});

					return false;

				});

				if(onBeforeShow) { p.beforeShowForm($("#"+dtbl)); }

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal, overlay: p.overlay, modal:p.modal});

				if(onAfterShow) { p.afterShowForm($("#"+dtbl)); }

			}

			if(p.closeOnEscape===true) {

				setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+IDs.modalhead).focus();},0);

			}

		});

	},

	navGrid : function (elem, o, pEdit,pAdd,pDel,pSearch, pView) {

		o = $.extend({

			edit: true,

			editicon: "ui-icon-pencil",

			add: true,

			addicon:"ui-icon-plus",

			del: true,

			delicon:"ui-icon-trash",

			search: true,

			searchicon:"ui-icon-search",

			refresh: true,

			refreshicon:"ui-icon-refresh",

			refreshstate: 'firstpage',

			view: false,

			viewicon : "ui-icon-document",

			position : "left",

			closeOnEscape : true,

			beforeRefresh : null,

			afterRefresh : null,

			cloneToTop : false

		}, $.jgrid.nav, o ||{});

		return this.each(function() {       

			var alertIDs = {themodal:'alertmod',modalhead:'alerthd',modalcontent:'alertcnt'},

			$t = this, vwidth, vheight, twd, tdw;

			if(!$t.grid || typeof elem != 'string') { return; }

			if ($("#"+alertIDs.themodal).html() === null) {

				if (typeof window.innerWidth != 'undefined') {

					vwidth = window.innerWidth;

					vheight = window.innerHeight;

				} else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth !== 0) {

					vwidth = document.documentElement.clientWidth;

					vheight = document.documentElement.clientHeight;

				} else {

					vwidth=1024;

					vheight=768;

				}

				$.jgrid.createModal(alertIDs,"<div>"+o.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",{gbox:"#gbox_"+$t.p.id,jqModal:true,drag:true,resize:true,caption:o.alertcap,top:vheight/2-25,left:vwidth/2-100,width:200,height:'auto',closeOnEscape:o.closeOnEscape},"","",true);

			}

			var clone = 1;

			if(o.cloneToTop && $t.p.toppager) { clone = 2; }

			for(var i = 0; i<clone; i++) {

				var tbd,

				navtbl = $("<table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table navtable' style='float:left;table-layout:auto;'><tbody><tr></tr></tbody></table>"),

				sep = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>",

				pgid, elemids;

				if(i===0) {

					pgid = elem;

					elemids = $t.p.id;

					if(pgid == $t.p.toppager) {

						elemids += "_top";

						clone = 1;

					}

				} else {

					pgid = $t.p.toppager;

					elemids = $t.p.id+"_top";

				}

				if($t.p.direction == "rtl") { $(navtbl).attr("dir","rtl").css("float","right"); }

				if (o.add) {

					pAdd = pAdd || {};

					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");

					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.addicon+"'></span>"+o.addtext+"</div>");

					$("tr",navtbl).append(tbd);

					$(tbd,navtbl)

					.attr({"title":o.addtitle || "",id : pAdd.id || "add_"+elemids})

					.click(function(){

						if (!$(this).hasClass('ui-state-disabled')) {

							if (typeof o.addfunc == 'function') {

								o.addfunc();

							} else {

								$($t).jqGrid("editGridRow","new",pAdd);

							}

						}

						return false;

					}).hover(

						function () {

							if (!$(this).hasClass('ui-state-disabled')) {

								$(this).addClass("ui-state-hover");

							}

						},

						function () {$(this).removeClass("ui-state-hover");}

					);

					tbd = null;

				}

				if (o.edit) {

					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");

					pEdit = pEdit || {};

					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.editicon+"'></span>"+o.edittext+"</div>");

					$("tr",navtbl).append(tbd);

					$(tbd,navtbl)

					.attr({"title":o.edittitle || "",id: pEdit.id || "edit_"+elemids})

					.click(function(){

						if (!$(this).hasClass('ui-state-disabled')) {

							var sr = $t.p.selrow;

							if (sr) {

								if(typeof o.editfunc == 'function') {

									o.editfunc(sr);

								} else {

									$($t).jqGrid("editGridRow",sr,pEdit);

								}

							} else {

								$.jgrid.viewModal("#"+alertIDs.themodal,{gbox:"#gbox_"+$t.p.id,jqm:true});

								$("#jqg_alrt").focus();

							}

						}

						return false;

					}).hover(

						function () {

							if (!$(this).hasClass('ui-state-disabled')) {

								$(this).addClass("ui-state-hover");

							}

						},

						function () {$(this).removeClass("ui-state-hover");}

					);

					tbd = null;

				}

				if (o.view) {

					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");

					pView = pView || {};

					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.viewicon+"'></span>"+o.viewtext+"</div>");

					$("tr",navtbl).append(tbd);

					$(tbd,navtbl)

					.attr({"title":o.viewtitle || "",id: pView.id || "view_"+elemids})

					.click(function(){

						if (!$(this).hasClass('ui-state-disabled')) {

							var sr = $t.p.selrow;

							if (sr) {

								$($t).jqGrid("viewGridRow",sr,pView);

							} else {

								$.jgrid.viewModal("#"+alertIDs.themodal,{gbox:"#gbox_"+$t.p.id,jqm:true});

								$("#jqg_alrt").focus();

							}

						}

						return false;

					}).hover(

						function () {

							if (!$(this).hasClass('ui-state-disabled')) {

								$(this).addClass("ui-state-hover");

							}

						},

						function () {$(this).removeClass("ui-state-hover");}

					);

					tbd = null;

				}

				if (o.del) {

					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");

					pDel = pDel || {};

					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.delicon+"'></span>"+o.deltext+"</div>");

					$("tr",navtbl).append(tbd);

					$(tbd,navtbl)

					.attr({"title":o.deltitle || "",id: pDel.id || "del_"+elemids})

					.click(function(){

						if (!$(this).hasClass('ui-state-disabled')) {

							var dr;

							if($t.p.multiselect) {

								dr = $t.p.selarrrow;

								if(dr.length===0) { dr = null; }

							} else {

								dr = $t.p.selrow;

							}

							if(dr){

								if("function" == typeof o.delfunc){

									o.delfunc(dr);

								}else{

									$($t).jqGrid("delGridRow",dr,pDel);

								}

							} else  {

								$.jgrid.viewModal("#"+alertIDs.themodal,{gbox:"#gbox_"+$t.p.id,jqm:true}); $("#jqg_alrt").focus();

							}

						}

						return false;

					}).hover(

						function () {

							if (!$(this).hasClass('ui-state-disabled')) {

								$(this).addClass("ui-state-hover");

							}

						},

						function () {$(this).removeClass("ui-state-hover");}

					);

					tbd = null;

				}

				if(o.add || o.edit || o.del || o.view) { $("tr",navtbl).append(sep); }

				if (o.search) {

					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");

					pSearch = pSearch || {};

					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.searchicon+"'></span>"+o.searchtext+"</div>");

					$("tr",navtbl).append(tbd);

					$(tbd,navtbl)

					.attr({"title":o.searchtitle  || "",id:pSearch.id || "search_"+elemids})

					.click(function(){

						if (!$(this).hasClass('ui-state-disabled')) {

							$($t).jqGrid("searchGrid",pSearch);

						}

						return false;

					}).hover(

						function () {

							if (!$(this).hasClass('ui-state-disabled')) {

								$(this).addClass("ui-state-hover");

							}

						},

						function () {$(this).removeClass("ui-state-hover");}

					);

					tbd = null;

				}

				if (o.refresh) {

					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");

					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.refreshicon+"'></span>"+o.refreshtext+"</div>");

					$("tr",navtbl).append(tbd);

					$(tbd,navtbl)

					.attr({"title":o.refreshtitle  || "",id: "refresh_"+elemids})

					.click(function(){

						if (!$(this).hasClass('ui-state-disabled')) {

							if($.isFunction(o.beforeRefresh)) { o.beforeRefresh(); }

							$t.p.search = false;

							try {

								var gID = $t.p.id;

								$("#fbox_"+gID).searchFilter().reset({"reload":false});

							    if($.isFunction($t.clearToolbar)) { $t.clearToolbar(false); }

							} catch (e) {}

							switch (o.refreshstate) {

								case 'firstpage':

								    $($t).trigger("reloadGrid", [{page:1}]);

									break;

								case 'current':

								    $($t).trigger("reloadGrid", [{current:true}]);

									break;

							}

							if($.isFunction(o.afterRefresh)) { o.afterRefresh(); }

						}

						return false;

					}).hover(

						function () {

							if (!$(this).hasClass('ui-state-disabled')) {

								$(this).addClass("ui-state-hover");

							}

						},

						function () {$(this).removeClass("ui-state-hover");}

					);

					tbd = null;

				}

				tdw = $(".ui-jqgrid").css("font-size") || "11px";

				$('body').append("<div id='testpg2' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+tdw+";visibility:hidden;' ></div>");

				twd = $(navtbl).clone().appendTo("#testpg2").width();

				$("#testpg2").remove();

				$(pgid+"_"+o.position,pgid).append(navtbl);

				if($t.p._nvtd) {

					if(twd > $t.p._nvtd[0] ) {

						$(pgid+"_"+o.position,pgid).width(twd);

						$t.p._nvtd[0] = twd;

					}

					$t.p._nvtd[1] = twd;

				}

				tdw =null; twd=null; navtbl =null;

			}

		});

	},

	navButtonAdd : function (elem, p) {

		p = $.extend({

			caption : "newButton",

			title: '',

			buttonicon : 'ui-icon-newwin',

			onClickButton: null,

			position : "last",

			cursor : 'pointer'

		}, p ||{});

		return this.each(function() {

			if( !this.grid)  { return; }

			if( elem.indexOf("#") !== 0) { elem = "#"+elem; }

			var findnav = $(".navtable",elem)[0], $t = this;

			if (findnav) {

				var tbd = $("<td></td>");

				if(p.buttonicon.toString().toUpperCase() == "NONE") {

                    $(tbd).addClass('ui-pg-button ui-corner-all').append("<div class='ui-pg-div'>"+p.caption+"</div>");

				} else	{

					$(tbd).addClass('ui-pg-button ui-corner-all').append("<div class='ui-pg-div'><span class='ui-icon "+p.buttonicon+"'></span>"+p.caption+"</div>");

				}

				if(p.id) {$(tbd).attr("id",p.id);}

				if(p.position=='first'){

					if(findnav.rows[0].cells.length ===0 ) {

						$("tr",findnav).append(tbd);

					} else {

						$("tr td:eq(0)",findnav).before(tbd);

					}

				} else {

					$("tr",findnav).append(tbd);

				}

				$(tbd,findnav)

				.attr("title",p.title  || "")

				.click(function(e){

					if (!$(this).hasClass('ui-state-disabled')) {

						if ($.isFunction(p.onClickButton) ) { p.onClickButton.call($t,e); }

					}

					return false;

				})

				.hover(

					function () {

						if (!$(this).hasClass('ui-state-disabled')) {

							$(this).addClass('ui-state-hover');

						}

					},

					function () {$(this).removeClass("ui-state-hover");}

				);

			}

		});

	},

	navSeparatorAdd:function (elem,p) {

		p = $.extend({

			sepclass : "ui-separator",

			sepcontent: ''

		}, p ||{});		

		return this.each(function() {

			if( !this.grid)  { return; }

			if( elem.indexOf("#") !== 0) { elem = "#"+elem; }

			var findnav = $(".navtable",elem)[0];

			if(findnav) {

				var sep = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='"+p.sepclass+"'></span>"+p.sepcontent+"</td>";

				$("tr",findnav).append(sep);

			}

		});

	},

	GridToForm : function( rowid, formid ) {

		return this.each(function(){

			var $t = this;

			if (!$t.grid) { return; } 

			var rowdata = $($t).jqGrid("getRowData",rowid);

			if (rowdata) {

				for(var i in rowdata) {

					if ( $("[name="+i+"]",formid).is("input:radio") || $("[name="+i+"]",formid).is("input:checkbox"))  {

						$("[name="+i+"]",formid).each( function() {

							if( $(this).val() == rowdata[i] ) {

								$(this).attr("checked","checked");

							} else {

								$(this).attr("checked","");

							}

						});

					} else {

					// this is very slow on big table and form.

						$("[name="+i+"]",formid).val(rowdata[i]);

					}

				}

			}

		});

	},

	FormToGrid : function(rowid, formid, mode, position){

		return this.each(function() {

			var $t = this;

			if(!$t.grid) { return; }

			if(!mode) { mode = 'set'; }

			if(!position) { position = 'first'; }

			var fields = $(formid).serializeArray();

			var griddata = {};

			$.each(fields, function(i, field){

				griddata[field.name] = field.value;

			});

			if(mode=='add') { $($t).jqGrid("addRowData",rowid,griddata, position); }

			else if(mode=='set') { $($t).jqGrid("setRowData",rowid,griddata); }

		});

	}

});

})(jQuery);

;(function($){

/**

 * jqGrid extension for manipulating Grid Data

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/ 

$.jgrid.extend({

//Editing

	editRow : function(rowid,keys,oneditfunc,succesfunc, url, extraparam, aftersavefunc,errorfunc, afterrestorefunc) {

		return this.each(function(){

			var $t = this, nm, tmp, editable, cnt=0, focus=null, svr={}, ind,cm;

			if (!$t.grid ) { return; }

			ind = $($t).jqGrid("getInd",rowid,true);

			if( ind === false ) {return;}

			editable = $(ind).attr("editable") || "0";

			if (editable == "0" && !$(ind).hasClass("not-editable-row")) {

				cm = $t.p.colModel;

				$('td',ind).each( function(i) {

					nm = cm[i].name;

					var treeg = $t.p.treeGrid===true && nm == $t.p.ExpandColumn;

					if(treeg) { tmp = $("span:first",this).html();}

					else {

						try {

							tmp =  $.unformat(this,{rowId:rowid, colModel:cm[i]},i);

						} catch (_) {

							tmp = $(this).html();

						}

					}

					if ( nm != 'cb' && nm != 'subgrid' && nm != 'rn') {

						if($t.p.autoencode) { tmp = $.jgrid.htmlDecode(tmp); }

						svr[nm]=tmp;

						if(cm[i].editable===true) {

							if(focus===null) { focus = i; }

							if (treeg) { $("span:first",this).html(""); }

							else { $(this).html(""); }

							var opt = $.extend({},cm[i].editoptions || {},{id:rowid+"_"+nm,name:nm});

							if(!cm[i].edittype) { cm[i].edittype = "text"; }

							var elc = $.jgrid.createEl(cm[i].edittype,opt,tmp,true,$.extend({},$.jgrid.ajaxOptions,$t.p.ajaxSelectOptions || {}));

							$(elc).addClass("editable");

							if(treeg) { $("span:first",this).append(elc); }

							else { $(this).append(elc); }

							//Again IE

							if(cm[i].edittype == "select" && cm[i].editoptions.multiple===true && $.browser.msie) {

								$(elc).width($(elc).width());

							}

							cnt++;

						}

					}

				});

				if(cnt > 0) {

					svr.id = rowid; $t.p.savedRow.push(svr);

					$(ind).attr("editable","1");

					$("td:eq("+focus+") input",ind).focus();

					if(keys===true) {

						$(ind).bind("keydown",function(e) {

							if (e.keyCode === 27) {$($t).jqGrid("restoreRow",rowid, afterrestorefunc);}

							if (e.keyCode === 13) {

								var ta = e.target;

								if(ta.tagName == 'TEXTAREA') { return true; }

								$($t).jqGrid("saveRow",rowid,succesfunc, url, extraparam, aftersavefunc,errorfunc, afterrestorefunc );

								return false;

							}

							e.stopPropagation();

						});

					}

					if( $.isFunction(oneditfunc)) { oneditfunc.call($t, rowid); }

				}

			}

		});

	},

	saveRow : function(rowid, succesfunc, url, extraparam, aftersavefunc,errorfunc, afterrestorefunc) {

		return this.each(function(){

		var $t = this, nm, tmp={}, tmp2={}, editable, fr, cv, ind;

		if (!$t.grid ) { return; }

		ind = $($t).jqGrid("getInd",rowid,true);

		if(ind === false) {return;}

		editable = $(ind).attr("editable");

		url = url ? url : $t.p.editurl;

		if (editable==="1") {

			var cm;

			$("td",ind).each(function(i) {

				cm = $t.p.colModel[i];

				nm = cm.name;

				if ( nm != 'cb' && nm != 'subgrid' && cm.editable===true && nm != 'rn') {

					switch (cm.edittype) {

						case "checkbox":

							var cbv = ["Yes","No"];

							if(cm.editoptions ) {

								cbv = cm.editoptions.value.split(":");

							}

							tmp[nm]=  $("input",this).attr("checked") ? cbv[0] : cbv[1]; 

							break;

						case 'text':

						case 'password':

						case 'textarea':

						case "button" :

							tmp[nm]=$("input, textarea",this).val();

							break;

						case 'select':

							if(!cm.editoptions.multiple) {

								tmp[nm] = $("select>option:selected",this).val();

								tmp2[nm] = $("select>option:selected", this).text();

							} else {

								var sel = $("select",this), selectedText = [];

								tmp[nm] = $(sel).val();

								if(tmp[nm]) { tmp[nm]= tmp[nm].join(","); } else { tmp[nm] =""; }

								$("select > option:selected",this).each(

									function(i,selected){

										selectedText[i] = $(selected).text();

									}

								);

								tmp2[nm] = selectedText.join(",");

							}

							if(cm.formatter && cm.formatter == 'select') { tmp2={}; }

							break;

						case 'custom' :

							try {

								if(cm.editoptions && $.isFunction(cm.editoptions.custom_value)) {

									tmp[nm] = cm.editoptions.custom_value.call($t, $(".customelement",this),'get');

									if (tmp[nm] === undefined) { throw "e2"; }

								} else { throw "e1"; }

							} catch (e) {

								if (e=="e1") { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.nodefined,jQuery.jgrid.edit.bClose); }

								if (e=="e2") { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.novalue,jQuery.jgrid.edit.bClose); }

								else { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,e.message,jQuery.jgrid.edit.bClose); }

							}

							break;

					}

					cv = $.jgrid.checkValues(tmp[nm],i,$t);

					if(cv[0] === false) {

						cv[1] = tmp[nm] + " " + cv[1];

						return false;

					}

					if($t.p.autoencode) { tmp[nm] = $.jgrid.htmlEncode(tmp[nm]); }

				}

			});

			if (cv[0] === false){

				try {

					var positions = $.jgrid.findPos($("#"+$.jgrid.jqID(rowid), $t.grid.bDiv)[0]);

					$.jgrid.info_dialog($.jgrid.errors.errcap,cv[1],$.jgrid.edit.bClose,{left:positions[0],top:positions[1]});

				} catch (e) {

					alert(cv[1]);

				}

				return;

			}

			if(tmp) {

				var idname, opers, oper;

				opers = $t.p.prmNames;

				oper = opers.oper;

				idname = opers.id;

				tmp[oper] = opers.editoper;

				tmp[idname] = rowid;

				if(typeof($t.p.inlineData) == 'undefined') { $t.p.inlineData ={}; }

				if(typeof(extraparam) == 'undefined') { extraparam ={}; }

				tmp = $.extend({},tmp,$t.p.inlineData,extraparam);

			}

			if (url == 'clientArray') {

				tmp = $.extend({},tmp, tmp2);

				if($t.p.autoencode) {

					$.each(tmp,function(n,v){

						tmp[n] = $.jgrid.htmlDecode(v);

					});

				}

				var resp = $($t).jqGrid("setRowData",rowid,tmp);

				$(ind).attr("editable","0");

				for( var k=0;k<$t.p.savedRow.length;k++) {

					if( $t.p.savedRow[k].id == rowid) {fr = k; break;}

				}

				if(fr >= 0) { $t.p.savedRow.splice(fr,1); }

				if( $.isFunction(aftersavefunc) ) { aftersavefunc.call($t, rowid,resp); }

			} else {

				$("#lui_"+$t.p.id).show();

				$.ajax($.extend({

					url:url,

					data: $.isFunction($t.p.serializeRowData) ? $t.p.serializeRowData.call($t, tmp) : tmp,

					type: "POST",

					complete: function(res,stat){

						$("#lui_"+$t.p.id).hide();

						if (stat === "success"){

							var ret;

							if( $.isFunction(succesfunc)) { ret = succesfunc.call($t, res);}

							else { ret = true; }

							if (ret===true) {

								if($t.p.autoencode) {

									$.each(tmp,function(n,v){

										tmp[n] = $.jgrid.htmlDecode(v);

									});

								}

								tmp = $.extend({},tmp, tmp2);

								$($t).jqGrid("setRowData",rowid,tmp);

								$(ind).attr("editable","0");

								for( var k=0;k<$t.p.savedRow.length;k++) {

									if( $t.p.savedRow[k].id == rowid) {fr = k; break;}

								}

								if(fr >= 0) { $t.p.savedRow.splice(fr,1); }

								if( $.isFunction(aftersavefunc) ) { aftersavefunc.call($t, rowid,res); }

							} else {

								if($.isFunction(errorfunc) ) {

									errorfunc.call($t, rowid, res, stat);

								}

								$($t).jqGrid("restoreRow",rowid, afterrestorefunc);

							}

						}

					},

					error:function(res,stat){

						$("#lui_"+$t.p.id).hide();

						if($.isFunction(errorfunc) ) {

							errorfunc.call($t, rowid, res, stat);

						} else {

							alert("Error Row: "+rowid+" Result: " +res.status+":"+res.statusText+" Status: "+stat);

						}

						$($t).jqGrid("restoreRow",rowid, afterrestorefunc);

					}

				}, $.jgrid.ajaxOptions, $t.p.ajaxRowOptions || {}));

			}

			$(ind).unbind("keydown");

		}

		});

	},

	restoreRow : function(rowid, afterrestorefunc) {

		return this.each(function(){

			var $t= this, fr, ind, ares={};

			if (!$t.grid ) { return; }

			ind = $($t).jqGrid("getInd",rowid,true);

			if(ind === false) {return;}

			for( var k=0;k<$t.p.savedRow.length;k++) {

				if( $t.p.savedRow[k].id == rowid) {fr = k; break;}

			}

			if(fr >= 0) {

				if($.isFunction($.fn.datepicker)) {

					try {

						$("input.hasDatepicker","#"+$.jgrid.jqID(ind.id)).datepicker('hide');

					} catch (e) {}

				}

				$.each($t.p.colModel, function(i,n){

					if(this.editable === true && this.name in $t.p.savedRow[fr]) {

						ares[this.name] = $t.p.savedRow[fr][this.name];

					}

				});

				$($t).jqGrid("setRowData",rowid,ares);

				$(ind).attr("editable","0").unbind("keydown");

				$t.p.savedRow.splice(fr,1);

			}

			if ($.isFunction(afterrestorefunc))

			{

				afterrestorefunc.call($t, rowid);

			}

		});

	}

//end inline edit

});

})(jQuery);

;(function($){

/*

**

 * jqGrid extension for cellediting Grid Data

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/ 

/**

 * all events and options here are aded anonynous and not in the base grid

 * since the array is to big. Here is the order of execution.

 * From this point we use jQuery isFunction

 * formatCell

 * beforeEditCell,

 * onSelectCell (used only for noneditable cels)

 * afterEditCell,

 * beforeSaveCell, (called before validation of values if any)

 * beforeSubmitCell (if cellsubmit remote (ajax))

 * afterSubmitCell(if cellsubmit remote (ajax)),

 * afterSaveCell,

 * errorCell,

 * serializeCellData - new

 * Options

 * cellsubmit (remote,clientArray) (added in grid options)

 * cellurl

 * ajaxCellOptions

* */

$.jgrid.extend({

	editCell : function (iRow,iCol, ed){

		return this.each(function (){

			var $t = this, nm, tmp,cc;

			if (!$t.grid || $t.p.cellEdit !== true) {return;}

			iCol = parseInt(iCol,10);

			// select the row that can be used for other methods

			$t.p.selrow = $t.rows[iRow].id;

			if (!$t.p.knv) {$($t).jqGrid("GridNav");}

			// check to see if we have already edited cell

			if ($t.p.savedRow.length>0) {

				// prevent second click on that field and enable selects

				if (ed===true ) {

					if(iRow == $t.p.iRow && iCol == $t.p.iCol){

						return;

					}

				}

				// save the cell

				$($t).jqGrid("saveCell",$t.p.savedRow[0].id,$t.p.savedRow[0].ic);

			} else {

				window.setTimeout(function () { $("#"+$t.p.knv).attr("tabindex","-1").focus();},0);

			}

			nm = $t.p.colModel[iCol].name;

			if (nm=='subgrid' || nm=='cb' || nm=='rn') {return;}

			cc = $("td:eq("+iCol+")",$t.rows[iRow]);

			if ($t.p.colModel[iCol].editable===true && ed===true && !cc.hasClass("not-editable-cell")) {

				if(parseInt($t.p.iCol,10)>=0  && parseInt($t.p.iRow,10)>=0) {

					$("td:eq("+$t.p.iCol+")",$t.rows[$t.p.iRow]).removeClass("edit-cell ui-state-highlight");

					$($t.rows[$t.p.iRow]).removeClass("selected-row ui-state-hover");

				}

				$(cc).addClass("edit-cell ui-state-highlight");

				$($t.rows[iRow]).addClass("selected-row ui-state-hover");

				try {

					tmp =  $.unformat(cc,{rowId: $t.rows[iRow].id, colModel:$t.p.colModel[iCol]},iCol);

				} catch (_) {

					tmp = $(cc).html();

				}

				if($t.p.autoencode) { tmp = $.jgrid.htmlDecode(tmp); }

				if (!$t.p.colModel[iCol].edittype) {$t.p.colModel[iCol].edittype = "text";}

				$t.p.savedRow.push({id:iRow,ic:iCol,name:nm,v:tmp});

				if($.isFunction($t.p.formatCell)) {

					var tmp2 = $t.p.formatCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);

					if(tmp2 !== undefined ) {tmp = tmp2;}

				}

				var opt = $.extend({}, $t.p.colModel[iCol].editoptions || {} ,{id:iRow+"_"+nm,name:nm});

				var elc = $.jgrid.createEl($t.p.colModel[iCol].edittype,opt,tmp,true,$.extend({},$.jgrid.ajaxOptions,$t.p.ajaxSelectOptions || {}));

				if ($.isFunction($t.p.beforeEditCell)) {

					$t.p.beforeEditCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);

				}

				$(cc).html("").append(elc).attr("tabindex","0");

				window.setTimeout(function () { $(elc).focus();},0);

				$("input, select, textarea",cc).bind("keydown",function(e) { 

					if (e.keyCode === 27) {

						if($("input.hasDatepicker",cc).length >0) {

							if( $(".ui-datepicker").is(":hidden") )  { $($t).jqGrid("restoreCell",iRow,iCol); }

							else { $("input.hasDatepicker",cc).datepicker('hide'); }

						} else {

							$($t).jqGrid("restoreCell",iRow,iCol);

						}

					} //ESC

					if (e.keyCode === 13) {$($t).jqGrid("saveCell",iRow,iCol);}//Enter

					if (e.keyCode == 9)  {

						if(!$t.grid.hDiv.loading ) {

							if (e.shiftKey) {$($t).jqGrid("prevCell",iRow,iCol);} //Shift TAb

							else {$($t).jqGrid("nextCell",iRow,iCol);} //Tab

						} else {

							return false;

						}

					}

					e.stopPropagation();

				});

				if ($.isFunction($t.p.afterEditCell)) {

					$t.p.afterEditCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);

				}

			} else {

				if (parseInt($t.p.iCol,10)>=0  && parseInt($t.p.iRow,10)>=0) {

					$("td:eq("+$t.p.iCol+")",$t.rows[$t.p.iRow]).removeClass("edit-cell ui-state-highlight");

					$($t.rows[$t.p.iRow]).removeClass("selected-row ui-state-hover");

				}

				cc.addClass("edit-cell ui-state-highlight");

				$($t.rows[iRow]).addClass("selected-row ui-state-hover"); 

				if ($.isFunction($t.p.onSelectCell)) {

					tmp = cc.html().replace(/\&#160\;/ig,'');

					$t.p.onSelectCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);

				}

			}

			$t.p.iCol = iCol; $t.p.iRow = iRow;

		});

	},

	saveCell : function (iRow, iCol){

		return this.each(function(){

			var $t= this, fr;

			if (!$t.grid || $t.p.cellEdit !== true) {return;}

			if ( $t.p.savedRow.length >= 1) {fr = 0;} else {fr=null;} 

			if(fr !== null) {

				var cc = $("td:eq("+iCol+")",$t.rows[iRow]),v,v2,

				cm = $t.p.colModel[iCol], nm = cm.name, nmjq = $.jgrid.jqID(nm) ;

				switch (cm.edittype) {

					case "select":

						if(!cm.editoptions.multiple) {

							v = $("#"+iRow+"_"+nmjq+">option:selected",$t.rows[iRow]).val();

							v2 = $("#"+iRow+"_"+nmjq+">option:selected",$t.rows[iRow]).text();

						} else {

							var sel = $("#"+iRow+"_"+nmjq,$t.rows[iRow]), selectedText = [];

							v = $(sel).val();

							if(v) { v.join(",");} else { v=""; }

							$("option:selected",sel).each(

								function(i,selected){

									selectedText[i] = $(selected).text();

								}

							);

							v2 = selectedText.join(",");

						}

						if(cm.formatter) { v2 = v; }

						break;

					case "checkbox":

						var cbv  = ["Yes","No"];

						if(cm.editoptions){

							cbv = cm.editoptions.value.split(":");

						}

						v = $("#"+iRow+"_"+nmjq,$t.rows[iRow]).attr("checked") ? cbv[0] : cbv[1];

						v2=v;

						break;

					case "password":

					case "text":

					case "textarea":

					case "button" :

						v = $("#"+iRow+"_"+nmjq,$t.rows[iRow]).val();

						v2=v;

						break;

					case 'custom' :

						try {

							if(cm.editoptions && $.isFunction(cm.editoptions.custom_value)) {

								v = cm.editoptions.custom_value.call($t, $(".customelement",cc),'get');

								if (v===undefined) { throw "e2";} else { v2=v; }

							} else { throw "e1"; }

						} catch (e) {

							if (e=="e1") { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.nodefined,jQuery.jgrid.edit.bClose); }

							if (e=="e2") { $.jgrid.info_dialog(jQuery.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.novalue,jQuery.jgrid.edit.bClose); }

							else {$.jgrid.info_dialog(jQuery.jgrid.errors.errcap,e.message,jQuery.jgrid.edit.bClose); }

						}

						break;

				}

				// The common approach is if nothing changed do not do anything

				if (v2 != $t.p.savedRow[fr].v){

					if ($.isFunction($t.p.beforeSaveCell)) {

						var vv = $t.p.beforeSaveCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);

						if (vv) {v = vv; v2=vv;}

					}

					var cv = $.jgrid.checkValues(v,iCol,$t);

					if(cv[0] === true) {

						var addpost = {};

						if ($.isFunction($t.p.beforeSubmitCell)) {

							addpost = $t.p.beforeSubmitCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);

							if (!addpost) {addpost={};}

						}

						if( $("input.hasDatepicker",cc).length >0) { $("input.hasDatepicker",cc).datepicker('hide'); }

						if ($t.p.cellsubmit == 'remote') {

							if ($t.p.cellurl) {

								var postdata = {};

								if($t.p.autoencode) { v = $.jgrid.htmlEncode(v); }

								postdata[nm] = v;

								var idname,oper, opers;

								opers = $t.p.prmNames;

								idname = opers.id;

								oper = opers.oper;

								postdata[idname] = $t.rows[iRow].id;

								postdata[oper] = opers.editoper;

								postdata = $.extend(addpost,postdata);

								$("#lui_"+$t.p.id).show();

								$t.grid.hDiv.loading = true;

								$.ajax( $.extend( {

									url: $t.p.cellurl,

									data :$.isFunction($t.p.serializeCellData) ? $t.p.serializeCellData.call($t, postdata) : postdata,

									type: "POST",

									complete: function (result, stat) {

										$("#lui_"+$t.p.id).hide();

										$t.grid.hDiv.loading = false;

										if (stat == 'success') {

											if ($.isFunction($t.p.afterSubmitCell)) {

												var ret = $t.p.afterSubmitCell.call($t, result,postdata.id,nm,v,iRow,iCol);

												if(ret[0] === true) {

													$(cc).empty();

													$($t).jqGrid("setCell",$t.rows[iRow].id, iCol, v2, false, false, true);

													$(cc).addClass("dirty-cell");

													$($t.rows[iRow]).addClass("edited");

													if ($.isFunction($t.p.afterSaveCell)) {

														$t.p.afterSaveCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);

													}

													$t.p.savedRow.splice(0,1);

												} else {

													$.jgrid.info_dialog($.jgrid.errors.errcap,ret[1],$.jgrid.edit.bClose);

													$($t).jqGrid("restoreCell",iRow,iCol);

												}

											} else {

												$(cc).empty();

												$($t).jqGrid("setCell",$t.rows[iRow].id, iCol, v2, false, false, true);

												$(cc).addClass("dirty-cell");

												$($t.rows[iRow]).addClass("edited");

												if ($.isFunction($t.p.afterSaveCell)) {

													$t.p.afterSaveCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);

												}

												$t.p.savedRow.splice(0,1);

											}

										}

									},

									error:function(res,stat) {

										$("#lui_"+$t.p.id).hide();

										$t.grid.hDiv.loading = false;

										if ($.isFunction($t.p.errorCell)) {

											$t.p.errorCell.call($t, res,stat);

											$($t).jqGrid("restoreCell",iRow,iCol);

										} else {

											$.jgrid.info_dialog($.jgrid.errors.errcap,res.status+" : "+res.statusText+"<br/>"+stat,$.jgrid.edit.bClose);

											$($t).jqGrid("restoreCell",iRow,iCol);

										}

									}

								}, $.jgrid.ajaxOptions, $t.p.ajaxCellOptions || {}));

							} else {

								try {

									$.jgrid.info_dialog($.jgrid.errors.errcap,$.jgrid.errors.nourl,$.jgrid.edit.bClose);

									$($t).jqGrid("restoreCell",iRow,iCol);

								} catch (e) {}

							}

						}

						if ($t.p.cellsubmit == 'clientArray') {

							$(cc).empty();

							$($t).jqGrid("setCell",$t.rows[iRow].id,iCol, v2, false, false, true);

							$(cc).addClass("dirty-cell");

							$($t.rows[iRow]).addClass("edited");

							if ($.isFunction($t.p.afterSaveCell)) {

								$t.p.afterSaveCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);

							}

							$t.p.savedRow.splice(0,1);

						}

					} else {

						try {

							window.setTimeout(function(){$.jgrid.info_dialog($.jgrid.errors.errcap,v+" "+cv[1],$.jgrid.edit.bClose);},100);

							$($t).jqGrid("restoreCell",iRow,iCol);

						} catch (e) {}

					}

				} else {

					$($t).jqGrid("restoreCell",iRow,iCol);

				}

			}

			if ($.browser.opera) {

				$("#"+$t.p.knv).attr("tabindex","-1").focus();

			} else {

				window.setTimeout(function () { $("#"+$t.p.knv).attr("tabindex","-1").focus();},0);

			}

		});

	},

	restoreCell : function(iRow, iCol) {

		return this.each(function(){

			var $t= this, fr;

			if (!$t.grid || $t.p.cellEdit !== true ) {return;}

			if ( $t.p.savedRow.length >= 1) {fr = 0;} else {fr=null;}

			if(fr !== null) {

				var cc = $("td:eq("+iCol+")",$t.rows[iRow]);

				// datepicker fix

				if($.isFunction($.fn.datepicker)) {

					try {

						$("input.hasDatepicker",cc).datepicker('hide');

					} catch (e) {}

				}

				$(cc).empty().attr("tabindex","-1");

				$($t).jqGrid("setCell",$t.rows[iRow].id, iCol, $t.p.savedRow[fr].v, false, false, true);

				if ($.isFunction($t.p.afterRestoreCell)) {

					$t.p.afterRestoreCell.call($t, $t.rows[iRow].id, $t.p.savedRow[fr].v, iRow, iCol);

				}				

				$t.p.savedRow.splice(0,1);

			}

			window.setTimeout(function () { $("#"+$t.p.knv).attr("tabindex","-1").focus();},0);

		});

	},

	nextCell : function (iRow,iCol) {

		return this.each(function (){

			var $t = this, nCol=false;

			if (!$t.grid || $t.p.cellEdit !== true) {return;}

			// try to find next editable cell

			for (var i=iCol+1; i<$t.p.colModel.length; i++) {

				if ( $t.p.colModel[i].editable ===true) {

					nCol = i; break;

				}

			}

			if(nCol !== false) {

				$($t).jqGrid("editCell",iRow,nCol,true);

			} else {

				if ($t.p.savedRow.length >0) {

					$($t).jqGrid("saveCell",iRow,iCol);

				}

			}

		});

	},

	prevCell : function (iRow,iCol) {

		return this.each(function (){

			var $t = this, nCol=false;

			if (!$t.grid || $t.p.cellEdit !== true) {return;}

			// try to find next editable cell

			for (var i=iCol-1; i>=0; i--) {

				if ( $t.p.colModel[i].editable ===true) {

					nCol = i; break;

				}

			}

			if(nCol !== false) {

				$($t).jqGrid("editCell",iRow,nCol,true);

			} else {

				if ($t.p.savedRow.length >0) {

					$($t).jqGrid("saveCell",iRow,iCol);

				}

			}

		});

	},

	GridNav : function() {

		return this.each(function () {

			var  $t = this;

			if (!$t.grid || $t.p.cellEdit !== true ) {return;}

			// trick to process keydown on non input elements

			$t.p.knv = $t.p.id + "_kn";

			var selection = $("<span style='width:0px;height:0px;background-color:black;' tabindex='0'><span tabindex='-1' style='width:0px;height:0px;background-color:grey' id='"+$t.p.knv+"'></span></span>"),

			i, kdir;

			$(selection).insertBefore($t.grid.cDiv);

			$("#"+$t.p.knv)

			.focus()

			.keydown(function (e){

				kdir = e.keyCode;

				if($t.p.direction == "rtl") {

					if(kdir==37) { kdir = 39;}

					else if (kdir==39) { kdir = 37; }

				}

				switch (kdir) {

					case 38:

						if ($t.p.iRow-1 >0 ) {

							scrollGrid($t.p.iRow-1,$t.p.iCol,'vu');

							$($t).jqGrid("editCell",$t.p.iRow-1,$t.p.iCol,false);

						}

					break;

					case 40 :

						if ($t.p.iRow+1 <=  $t.rows.length-1) {

							scrollGrid($t.p.iRow+1,$t.p.iCol,'vd');

							$($t).jqGrid("editCell",$t.p.iRow+1,$t.p.iCol,false);

						}

					break;

					case 37 :

						if ($t.p.iCol -1 >=  0) {

							i = findNextVisible($t.p.iCol-1,'lft');

							scrollGrid($t.p.iRow, i,'h');

							$($t).jqGrid("editCell",$t.p.iRow, i,false);

						}

					break;

					case 39 :

						if ($t.p.iCol +1 <=  $t.p.colModel.length-1) {

							i = findNextVisible($t.p.iCol+1,'rgt');

							scrollGrid($t.p.iRow,i,'h');

							$($t).jqGrid("editCell",$t.p.iRow,i,false);

						}

					break;

					case 13:

						if (parseInt($t.p.iCol,10)>=0 && parseInt($t.p.iRow,10)>=0) {

							$($t).jqGrid("editCell",$t.p.iRow,$t.p.iCol,true);

						}

					break;

				}

				return false;

			});

			function scrollGrid(iR, iC, tp){

				if (tp.substr(0,1)=='v') {

					var ch = $($t.grid.bDiv)[0].clientHeight,

					st = $($t.grid.bDiv)[0].scrollTop,

					nROT = $t.rows[iR].offsetTop+$t.rows[iR].clientHeight,

					pROT = $t.rows[iR].offsetTop;

					if(tp == 'vd') {

						if(nROT >= ch) {

							$($t.grid.bDiv)[0].scrollTop = $($t.grid.bDiv)[0].scrollTop + $t.rows[iR].clientHeight;

						}

					}

					if(tp == 'vu'){

						if (pROT < st ) {

							$($t.grid.bDiv)[0].scrollTop = $($t.grid.bDiv)[0].scrollTop - $t.rows[iR].clientHeight;

						}

					}

				}

				if(tp=='h') {

					var cw = $($t.grid.bDiv)[0].clientWidth,

					sl = $($t.grid.bDiv)[0].scrollLeft,

					nCOL = $t.rows[iR].cells[iC].offsetLeft+$t.rows[iR].cells[iC].clientWidth,

					pCOL = $t.rows[iR].cells[iC].offsetLeft;

					if(nCOL >= cw+parseInt(sl,10)) {

						$($t.grid.bDiv)[0].scrollLeft = $($t.grid.bDiv)[0].scrollLeft + $t.rows[iR].cells[iC].clientWidth;

					} else if (pCOL < sl) {

						$($t.grid.bDiv)[0].scrollLeft = $($t.grid.bDiv)[0].scrollLeft - $t.rows[iR].cells[iC].clientWidth;

					}

				}

			}

			function findNextVisible(iC,act){

				var ind, i;

				if(act == 'lft') {

					ind = iC+1;

					for (i=iC;i>=0;i--){

						if ($t.p.colModel[i].hidden !== true) {

							ind = i;

							break;

						}

					}

				}

				if(act == 'rgt') {

					ind = iC-1;

					for (i=iC; i<$t.p.colModel.length;i++){

						if ($t.p.colModel[i].hidden !== true) {

							ind = i;

							break;

						}						

					}

				}

				return ind;

			}

		});

	},

	getChangedCells : function (mthd) {

		var ret=[];

		if (!mthd) {mthd='all';}

		this.each(function(){

			var $t= this,nm;

			if (!$t.grid || $t.p.cellEdit !== true ) {return;}

			$($t.rows).each(function(j){

				var res = {};

				if ($(this).hasClass("edited")) {

					$('td',this).each( function(i) {

						nm = $t.p.colModel[i].name;

						if ( nm !== 'cb' && nm !== 'subgrid') {

							if (mthd=='dirty') {

								if ($(this).hasClass('dirty-cell')) {

									try {

										res[nm] = $.unformat(this,{rowId:$t.rows[j].id, colModel:$t.p.colModel[i]},i);

									} catch (e){

										res[nm] = $.jgrid.htmlDecode($(this).html());

									}

								}

							} else {

								try {

									res[nm] = $.unformat(this,{rowId:$t.rows[j].id,colModel:$t.p.colModel[i]},i);

								} catch (e) {

									res[nm] = $.jgrid.htmlDecode($(this).html());

								}

							}

						}

					});

					res.id = this.id;

					ret.push(res);

				}

			});

		});

		return ret;

	}

/// end  cell editing

});

})(jQuery);

;(function($){

/**

 * jqGrid extension for SubGrid Data

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/

$.jgrid.extend({

setSubGrid : function () {

	return this.each(function (){

		var $t = this, cm;

		$t.p.colNames.unshift("");

		$t.p.colModel.unshift({name:'subgrid',width: $.browser.safari ?  $t.p.subGridWidth+$t.p.cellLayout : $t.p.subGridWidth,sortable: false,resizable:false,hidedlg:true,search:false,fixed:true});

		cm = $t.p.subGridModel;

		if(cm[0]) {

			cm[0].align = $.extend([],cm[0].align || []);

			for(var i=0;i<cm[0].name.length;i++) { cm[0].align[i] = cm[0].align[i] || 'left';}

		}

	});

},

addSubGridCell :function (pos,iRow) {

	var prp='',gv,sid;

	this.each(function(){

		prp = this.formatCol(pos,iRow);

		gv = this.p.gridview;

		sid= this.p.id;

	});

	if( gv === false ){

		return "<td role=\"grid\" aria-describedby=\""+sid+"_subgrid\" class=\"ui-sgcollapsed sgcollapsed\" "+prp+"><a href='javascript:void(0);'><span class='ui-icon ui-icon-plus'></span></a></td>";

	} else  {

		return "<td role=\"grid\" aria-describedby=\""+sid+"_subgrid\" " +prp +"></td>";

	}

},

addSubGrid : function(t,pos) {

	return this.each(function(){

		var ts = this;

		if (!ts.grid ) { return; }

		//-------------------------

		var subGridCell = function(trdiv,cell,pos){

			var tddiv = $("<td align='"+ts.p.subGridModel[0].align[pos]+"'></td>").html(cell);

			$(trdiv).append(tddiv);

		};

		var subGridXml = function(sjxml, sbid){

			var tddiv, i,  sgmap,

			dummy = $("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),

			trdiv = $("<tr></tr>");

			for (i = 0; i<ts.p.subGridModel[0].name.length; i++) {

				tddiv = $("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+ts.p.direction+"'></th>");

				$(tddiv).html(ts.p.subGridModel[0].name[i]);

				$(tddiv).width( ts.p.subGridModel[0].width[i]);

				$(trdiv).append(tddiv);

			}

			$(dummy).append(trdiv);

			if (sjxml){

				sgmap = ts.p.xmlReader.subgrid;

				$(sgmap.root+" "+sgmap.row, sjxml).each( function(){

					trdiv = $("<tr class='ui-widget-content ui-subtblcell'></tr>");

					if(sgmap.repeatitems === true) {

						$(sgmap.cell,this).each( function(i) {

							subGridCell(trdiv, $(this).text() || '&#160;',i);

						});

					} else {

						var f = ts.p.subGridModel[0].mapping || ts.p.subGridModel[0].name;

						if (f) {

							for (i=0;i<f.length;i++) {

								subGridCell(trdiv, $(f[i],this).text() || '&#160;',i);

							}

						}

					}

					$(dummy).append(trdiv);

				});

			}

			var pID = $("table:first",ts.grid.bDiv).attr("id")+"_";

			$("#"+pID+sbid).append(dummy);

			ts.grid.hDiv.loading = false;

			$("#load_"+ts.p.id).hide();

			return false;

		};

		var subGridJson = function(sjxml, sbid){

			var tddiv,result , i,cur, sgmap,j,

			dummy = $("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),

			trdiv = $("<tr></tr>");

			for (i = 0; i<ts.p.subGridModel[0].name.length; i++) {

				tddiv = $("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+ts.p.direction+"'></th>");

				$(tddiv).html(ts.p.subGridModel[0].name[i]);

				$(tddiv).width( ts.p.subGridModel[0].width[i]);

				$(trdiv).append(tddiv);

			}

			$(dummy).append(trdiv);

			if (sjxml){

				sgmap = ts.p.jsonReader.subgrid;

				result = sjxml[sgmap.root];

				if ( typeof result !== 'undefined' ) {

					for (i=0;i<result.length;i++) {

						cur = result[i];

						trdiv = $("<tr class='ui-widget-content ui-subtblcell'></tr>");

						if(sgmap.repeatitems === true) {

							if(sgmap.cell) { cur=cur[sgmap.cell]; }

							for (j=0;j<cur.length;j++) {

								subGridCell(trdiv, cur[j] || '&#160;',j);

							}

						} else {

							var f = ts.p.subGridModel[0].mapping || ts.p.subGridModel[0].name;

							if(f.length) {

								for (j=0;j<f.length;j++) {

									subGridCell(trdiv, cur[f[j]] || '&#160;',j);

								}

							}

						}

						$(dummy).append(trdiv);

					}

				}

			}

			var pID = $("table:first",ts.grid.bDiv).attr("id")+"_";

			$("#"+pID+sbid).append(dummy);

			ts.grid.hDiv.loading = false;

			$("#load_"+ts.p.id).hide();

			return false;

		};

		var populatesubgrid = function( rd ) {

			var sid,dp, i, j;

			sid = $(rd).attr("id");

			dp = {nd_: (new Date().getTime())};

			dp[ts.p.prmNames.subgridid]=sid;

			if(!ts.p.subGridModel[0]) { return false; }

			if(ts.p.subGridModel[0].params) {

				for(j=0; j < ts.p.subGridModel[0].params.length; j++) {

					for(i=0; i<ts.p.colModel.length; i++) {

						if(ts.p.colModel[i].name == ts.p.subGridModel[0].params[j]) {

							dp[ts.p.colModel[i].name]= $("td:eq("+i+")",rd).text().replace(/\&#160\;/ig,'');

						}

					}

				}

			}

			if(!ts.grid.hDiv.loading) {

				ts.grid.hDiv.loading = true;

				$("#load_"+ts.p.id).show();

				if(!ts.p.subgridtype) { ts.p.subgridtype = ts.p.datatype; }

				if($.isFunction(ts.p.subgridtype)) {

					ts.p.subgridtype.call(ts, dp);

				} else {

					ts.p.subgridtype = ts.p.subgridtype.toLowerCase();

				}

				switch(ts.p.subgridtype) {

					case "xml":

					case "json":

					$.ajax($.extend({

						type:ts.p.mtype,

						url: ts.p.subGridUrl,

						dataType:ts.p.subgridtype,

						data: $.isFunction(ts.p.serializeSubGridData)? ts.p.serializeSubGridData.call(ts, dp) : dp,

						complete: function(sxml) {

							if(ts.p.subgridtype == "xml") {

								subGridXml(sxml.responseXML, sid);

							} else {

								subGridJson($.jgrid.parse(sxml.responseText),sid);

							}

							sxml=null;

						}

					}, $.jgrid.ajaxOptions, ts.p.ajaxSubgridOptions || {}));

					break;

				}

			}

			return false;

		};

		var res,_id, pID,atd, nhc, subdata, bfsc;

		$("td:eq("+pos+")",t).click( function(e) {

			if($(this).hasClass("sgcollapsed")) {

				pID = ts.p.id;

				res = $(this).parent();

				atd = pos >=1 ? "<td colspan='"+pos+"'>&#160;</td>":"";

				_id = $(res).attr("id");

				bfsc =true;

				if($.isFunction(ts.p.subGridBeforeExpand)) {

					bfsc = ts.p.subGridBeforeExpand.call(ts, pID+"_"+_id,_id);

				}

				if(bfsc === false) {return false;}

				nhc = 0;

				$.each(ts.p.colModel,function(i,v){

					if(this.hidden === true || this.name == 'rn' || this.name == 'cb') {nhc++;}

				});

				subdata = "<tr role='row' class='ui-subgrid'>"+atd+"<td class='ui-widget-content subgrid-cell'><span class='ui-icon ui-icon-carat-1-sw'/></td><td colspan='"+parseInt(ts.p.colNames.length-1-nhc,10)+"' class='ui-widget-content subgrid-data'><div id="+pID+"_"+_id+" class='tablediv'>";

				$(this).parent().after( subdata+ "</div></td></tr>" );

				if( $.isFunction(ts.p.subGridRowExpanded)) {

					ts.p.subGridRowExpanded.call(ts, pID+"_"+ _id,_id);

				} else {

					populatesubgrid(res);

				}

				$(this).html("<a href='javascript:void(0);'><span class='ui-icon ui-icon-minus'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded");

			} else if($(this).hasClass("sgexpanded")) {

				bfsc = true;

				if( $.isFunction(ts.p.subGridRowColapsed)) {

					res = $(this).parent();

					_id = $(res).attr("id");

					bfsc = ts.p.subGridRowColapsed.call(ts, pID+"_"+_id,_id );

				}

				if(bfsc===false) {return false;}

				$(this).parent().next().remove(".ui-subgrid");

				$(this).html("<a href='javascript:void(0);'><span class='ui-icon ui-icon-plus'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed");

			}

			return false;

		});

		ts.subGridXml = function(xml,sid) {subGridXml(xml,sid);};

		ts.subGridJson = function(json,sid) {subGridJson(json,sid);};

	});

},

expandSubGridRow : function(rowid) {

	return this.each(function () {

		var $t = this;

		if(!$t.grid && !rowid) {return;}

		if($t.p.subGrid===true) {

			var rc = $(this).jqGrid("getInd",rowid,true);

			if(rc) {

				var sgc = $("td.sgcollapsed",rc)[0];

				if(sgc) {

					$(sgc).trigger("click");

				}

			}

		}

	});

},

collapseSubGridRow : function(rowid) {

	return this.each(function () {

		var $t = this;

		if(!$t.grid && !rowid) {return;}

		if($t.p.subGrid===true) {

			var rc = $(this).jqGrid("getInd",rowid,true);

			if(rc) {

				var sgc = $("td.sgexpanded",rc)[0];

				if(sgc) {

					$(sgc).trigger("click");

				}

			}

		}

	});

},

toggleSubGridRow : function(rowid) {

	return this.each(function () {

		var $t = this;

		if(!$t.grid && !rowid) {return;}

		if($t.p.subGrid===true) {

			var rc = $(this).jqGrid("getInd",rowid,true);

			if(rc) {

				var sgc = $("td.sgcollapsed",rc)[0];

				if(sgc) {

					$(sgc).trigger("click");

				} else {

					sgc = $("td.sgexpanded",rc)[0];

					if(sgc) {

						$(sgc).trigger("click");

					}

				}

			}

		}

	});

}

});

})(jQuery);

;(function($) {

/*

**

 * jqGrid extension - Tree Grid

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl.html

**/ 

$.jgrid.extend({

	setTreeNode : function(rd, row){

		return this.each(function(){

			var $t = this;

			if( !$t.grid || !$t.p.treeGrid ) { return; }

			var expCol = $t.p.expColInd,

			expanded = $t.p.treeReader.expanded_field,

			isLeaf = $t.p.treeReader.leaf_field,

			level = $t.p.treeReader.level_field,

			loaded = $t.p.treeReader.loaded;



			row.level = rd[level];

			

			if($t.p.treeGridModel == 'nested') {

				var lft = rd[$t.p.treeReader.left_field],

				rgt = rd[$t.p.treeReader.right_field];

				if(!rd[isLeaf]) {

				// NS Model

					rd[isLeaf] = (parseInt(rgt,10) === parseInt(lft,10)+1) ? 'true' : 'false';

				}

			} else {

				//row.parent_id = rd[$t.p.treeReader.parent_id_field];

			}

			var curLevel = parseInt(rd[level],10), ident,lftpos;

			if($t.p.tree_root_level === 0) {

				ident = curLevel+1;

				lftpos = curLevel;

			} else {

				ident = curLevel;

				lftpos = curLevel -1;

			}

			var twrap = "<div class='tree-wrap tree-wrap-"+$t.p.direction+"' style='width:"+(ident*18)+"px;'>";

			twrap += "<div style='"+($t.p.direction=="rtl" ? "right:" : "left:")+(lftpos*18)+"px;' class='ui-icon ";



			if(rd[loaded] != undefined) {

				if(rd[loaded]=="true" || rd[loaded]===true) {

					rd[loaded] = true;

				} else {

					rd[loaded] = false;

				}

			}

			if(rd[isLeaf] == "true" || rd[isLeaf] === true) {

				twrap += $t.p.treeIcons.leaf+" tree-leaf'";

				rd[isLeaf] = true;

				rd[expanded] = false;

			} else {

				if(rd[expanded] == "true" || rd[expanded] === true) {

					twrap += $t.p.treeIcons.minus+" tree-minus treeclick'";

					rd[expanded] = true;

				} else {

					twrap += $t.p.treeIcons.plus+" tree-plus treeclick'";

					rd[expanded] = false;

				}

				rd[isLeaf] = false;

			}

			twrap += "</div></div>";

			if(!$t.p.loadonce) {

				rd[$t.p.localReader.id] = row.id;

				$t.p.data.push(rd);

				$t.p._index[row.id]=$t.p.data.length-1;

			}

			if(parseInt(rd[level],10) !== parseInt($t.p.tree_root_level,10)) {                

				if(!$($t).jqGrid("isVisibleNode",rd)){ 

					$(row).css("display","none");

				}

			}

			

			$("td:eq("+expCol+")",row).wrapInner("<span></span>").prepend(twrap);

			$(".treeclick",row).bind("click",function(e){

				var target = e.target || e.srcElement,

				ind2 =$(target,$t.rows).closest("tr.jqgrow")[0].id,

				pos = $t.p._index[ind2],

				isLeaf = $t.p.treeReader.leaf_field,

				expanded = $t.p.treeReader.expanded_field;

				if(!$t.p.data[pos][isLeaf]){

					if($t.p.data[pos][expanded]){

						$($t).jqGrid("collapseRow",$t.p.data[pos]);

						$($t).jqGrid("collapseNode",$t.p.data[pos]);

					} else {

						$($t).jqGrid("expandRow",$t.p.data[pos]);

						$($t).jqGrid("expandNode",$t.p.data[pos]);

					}

				}

				return false;

			});

			if($t.p.ExpandColClick === true) {

			$("span", row).css("cursor","pointer").bind("click",function(e){

				var target = e.target || e.srcElement,

				ind2 =$(target,$t.rows).closest("tr.jqgrow")[0].id,

				pos = $t.p._index[ind2],

				isLeaf = $t.p.treeReader.leaf_field,

				expanded = $t.p.treeReader.expanded_field;

				if(!$t.p.data[pos][isLeaf]){

					if($t.p.data[pos][expanded]){

						$($t).jqGrid("collapseRow",$t.p.data[pos]);

						$($t).jqGrid("collapseNode",$t.p.data[pos]);

					} else {

						$($t).jqGrid("expandRow",$t.p.data[pos]);

						$($t).jqGrid("expandNode",$t.p.data[pos]);

					}

				}

				$($t).jqGrid("setSelection",ind2);

				return false;

			});

			}

		});

	},

	setTreeGrid : function() {

		return this.each(function (){

			var $t = this, i=0, pico;

			if(!$t.p.treeGrid) { return; }

			if(!$t.p.treedatatype ) { $.extend($t.p,{treedatatype: $t.p.datatype}); }

			$t.p.subGrid = false; $t.p.altRows =false;

			$t.p.pgbuttons = false; $t.p.pginput = false;

			$t.p.multiselect = false; $t.p.rowList = [];

			pico = 'ui-icon-triangle-1-' + ($t.p.direction=="rtl" ? 'w' : 'e');

			$t.p.treeIcons = $.extend({plus:pico,minus:'ui-icon-triangle-1-s',leaf:'ui-icon-radio-off'},$t.p.treeIcons || {});

			if($t.p.treeGridModel == 'nested') {

				$t.p.treeReader = $.extend({

					level_field: "level",

					left_field:"lft",

					right_field: "rgt",

					leaf_field: "isLeaf",

					expanded_field: "expanded",

					loaded: "loaded"

				},$t.p.treeReader);

			} else

				if($t.p.treeGridModel == 'adjacency') {

				$t.p.treeReader = $.extend({

						level_field: "level",

						parent_id_field: "parent",

						leaf_field: "isLeaf",

						expanded_field: "expanded",

						loaded: "loaded"

				},$t.p.treeReader );

			}

			for (var key in $t.p.colModel){

				if($t.p.colModel.hasOwnProperty(key)) {

					if($t.p.colModel[key].name == $t.p.ExpandColumn) {

						$t.p.expColInd = i;

						break;

					}

					i++;

				}

			}

			if(!$t.p.expColInd) { $t.p.expColInd = 0; }

			$.each($t.p.treeReader,function(i,n){

				if(n){

					$t.p.colNames.push(n);

					$t.p.colModel.push({name:n,width:1,hidden:true,sortable:false,resizable:false,hidedlg:true,editable:true,search:false});

				}

			});			

		});

	},

	expandRow: function (record){

		this.each(function(){

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			var childern = $($t).jqGrid("getNodeChildren",record),

			//if ($($t).jqGrid("isVisibleNode",record)) {

			expanded = $t.p.treeReader.expanded_field;

			$(childern).each(function(i){

				var id  = $.jgrid.getAccessor(this,$t.p.localReader.id);

				$("#"+id,$t.grid.bDiv).css("display","");

				if(this[expanded]) {

					$($t).jqGrid("expandRow",this);

				}

			});

			//}

		});

	},

	collapseRow : function (record) {

		this.each(function(){

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			var childern = $($t).jqGrid("getNodeChildren",record),

			expanded = $t.p.treeReader.expanded_field;

			$(childern).each(function(i){

				var id  = $.jgrid.getAccessor(this,$t.p.localReader.id);

				$("#"+id,$t.grid.bDiv).css("display","none");

				if(this[expanded]){

					$($t).jqGrid("collapseRow",this);

				}

			});

		});

	},

	// NS ,adjacency models

	getRootNodes : function() {

		var result = [];

		this.each(function(){

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			switch ($t.p.treeGridModel) {

				case 'nested' :

					var level = $t.p.treeReader.level_field;

					$($t.p.data).each(function(i){

						if(parseInt(this[level],10) === parseInt($t.p.tree_root_level,10)) {

							result.push(this);

						}

					});

					break;

				case 'adjacency' :

					var parent_id = $t.p.treeReader.parent_id_field;

					$($t.p.data).each(function(i){

						if(this[parent_id] === null || String(this[parent_id]).toLowerCase() == "null") {

							result.push(this);

						}

					});

					break;

			}

		});

		return result;

	},

	getNodeDepth : function(rc) {

		var ret = null;

		this.each(function(){

			if(!this.grid || !this.p.treeGrid) { return; }

			var $t = this;

			switch ($t.p.treeGridModel) {

				case 'nested' :

					var level = $t.p.treeReader.level_field;

					ret = parseInt(rc[level],10) - parseInt($t.p.tree_root_level,10);

					break;

				case 'adjacency' :

					ret = $($t).jqGrid("getNodeAncestors",rc).length;

					break;

			}

		});

		return ret;

	},

	getNodeParent : function(rc) {

		var result = null;

		this.each(function(){

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			switch ($t.p.treeGridModel) {

				case 'nested' :

					var lftc = $t.p.treeReader.left_field,

					rgtc = $t.p.treeReader.right_field,

					levelc = $t.p.treeReader.level_field,

					lft = parseInt(rc[lftc],10), rgt = parseInt(rc[rgtc],10), level = parseInt(rc[levelc],10);

					$(this.p.data).each(function(){

						if(parseInt(this[levelc],10) === level-1 && parseInt(this[lftc],10) < lft && parseInt(this[rgtc],10) > rgt) {

							result = this;

							return false;

						}

					});

					break;

				case 'adjacency' :

					var parent_id = $t.p.treeReader.parent_id_field,

					dtid = $t.p.localReader.id;

					$(this.p.data).each(function(i,val){

						if(this[dtid] == rc[parent_id] ) {

							result = this;

							return false;

						}

					});

					break;

			}

		});

		return result;

	},

	getNodeChildren : function(rc) {

		var result = [];

		this.each(function(){

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			switch ($t.p.treeGridModel) {

				case 'nested' :

					var lftc = $t.p.treeReader.left_field,

					rgtc = $t.p.treeReader.right_field,

					levelc = $t.p.treeReader.level_field,

					lft = parseInt(rc[lftc],10), rgt = parseInt(rc[rgtc],10), level = parseInt(rc[levelc],10);

					$(this.p.data).each(function(i){

						if(parseInt(this[levelc],10) === level+1 && parseInt(this[lftc],10) > lft && parseInt(this[rgtc],10) < rgt) {

							result.push(this);

						}

					});

					break;

				case 'adjacency' :

					var parent_id = $t.p.treeReader.parent_id_field,

					dtid = $t.p.localReader.id;

					$(this.p.data).each(function(i,val){

						if(this[parent_id] == rc[dtid]) {

							result.push(this);

						}

					});

					break;

			}

		});

		return result;

	},

	getFullTreeNode : function(rc) {

		var result = [];

		this.each(function(){

			var $t = this, len;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			switch ($t.p.treeGridModel) {

				case 'nested' :

					var lftc = $t.p.treeReader.left_field,

					rgtc = $t.p.treeReader.right_field,

					levelc = $t.p.treeReader.level_field,

					lft = parseInt(rc[lftc],10), rgt = parseInt(rc[rgtc],10), level = parseInt(rc[levelc],10);

					$(this.p.data).each(function(i){

						if(parseInt(this[levelc],10) >= level && parseInt(this[lftc],10) >= lft && parseInt(this[lftc],10) <= rgt) {

							result.push(this);

						}

					});

					break;

				case 'adjacency' :

					result.push(rc);

					var parent_id = $t.p.treeReader.parent_id_field,

					dtid = $t.p.localReader.id;

					$(this.p.data).each(function(i){

						len = result.length;

						for (i = 0; i < len; i++) {

							if (result[i][dtid] == this[parent_id]) {

								result.push(this);

								break;

							}

						}

					});

					break;

			}

		});

		return result;

	},	

	// End NS, adjacency Model

	getNodeAncestors : function(rc) {

		var ancestors = [];

		this.each(function(){

			if(!this.grid || !this.p.treeGrid) { return; }

			var parent = $(this).jqGrid("getNodeParent",rc);

			while (parent) {

				ancestors.push(parent);

				parent = $(this).jqGrid("getNodeParent",parent);	

			}

		});

		return ancestors;

	},

	isVisibleNode : function(rc) {

		var result = true;

		this.each(function(){

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			var ancestors = $($t).jqGrid("getNodeAncestors",rc),

			expanded = $t.p.treeReader.expanded_field;

			$(ancestors).each(function(){

				result = result && this[expanded];

				if(!result) {return false;}

			});

		});

		return result;

	},

	isNodeLoaded : function(rc) {

		var result;

		this.each(function(){

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			var isLeaf = $t.p.treeReader.leaf_field;

			if(rc.loaded !== undefined) {

				result = rc.loaded;

			} else if( rc[isLeaf] || $($t).jqGrid("getNodeChildren",rc).length > 0){

				result = true;

			} else {

				result = false;

			}

		});

		return result;

	},

	expandNode : function(rc) {

		return this.each(function(){

			if(!this.grid || !this.p.treeGrid) { return; }

			var expanded = this.p.treeReader.expanded_field;

			if(!rc[expanded]) {

				var id = $.jgrid.getAccessor(rc,this.p.localReader.id);

				var rc1 = $("#"+id,this.grid.bDiv)[0];

				var position = this.p._index[id];

				if( $(this).jqGrid("isNodeLoaded",this.p.data[position]) ) {

					rc[expanded] = true;

					$("div.treeclick",rc1).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus");

				} else {

					rc[expanded] = true;

					$("div.treeclick",rc1).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus");

					this.p.treeANode = rc1.rowIndex;

					this.p.datatype = this.p.treedatatype;

					if(this.p.treeGridModel == 'nested') {

						$(this).jqGrid("setGridParam",{postData:{nodeid:id,n_left:rc.lft,n_right:rc.rgt,n_level:rc.level}});

					} else {

						$(this).jqGrid("setGridParam",{postData:{nodeid:id,parentid:rc.parent_id,n_level:rc.level}});

					}

					$(this).trigger("reloadGrid");

					if(this.p.treeGridModel == 'nested') {

						$(this).jqGrid("setGridParam",{postData:{nodeid:'',n_left:'',n_right:'',n_level:''}});

					} else {

						$(this).jqGrid("setGridParam",{postData:{nodeid:'',parentid:'',n_level:''}}); 

					}

				}

			}

		});

	},

	collapseNode : function(rc) {

		return this.each(function(){

			if(!this.grid || !this.p.treeGrid) { return; }

			if(rc.expanded) {

				rc.expanded = false;

				var id = $.jgrid.getAccessor(rc,this.p.localReader.id);

				var rc1 = $("#"+id,this.grid.bDiv)[0];

				$("div.treeclick",rc1).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus");

			}

		});

	},

	SortTree : function( sortname, newDir, st, datefmt) {

		return this.each(function(){

			if(!this.grid || !this.p.treeGrid) { return; }

			var i, len,

			rec, records = [], $t = this, query, roots,

			rt = $(this).jqGrid("getRootNodes");

			// Sorting roots

			query = $.jgrid.from(rt);

			query.orderBy(sortname,newDir,st, datefmt);

			roots = query.select();



			// Sorting children

			for (i = 0, len = roots.length; i < len; i++) {

				rec = roots[i];

				records.push(rec);

				$(this).jqGrid("collectChildrenSortTree",records, rec, sortname, newDir,st, datefmt);

			}

			$.each(records, function(index, row) {

				var id  = $.jgrid.getAccessor(this,$t.p.localReader.id);

				$('#'+$t.p.id+ ' tbody tr:eq('+index+')').after($('tr#'+id,$t.grid.bDiv));

			});

			query = null; roots=null;records=null;

		});

	},

	collectChildrenSortTree : function(records, rec, sortname, newDir,st, datefmt) {

		return this.each(function(){

			if(!this.grid || !this.p.treeGrid) { return; }

			var i, len,

			child, ch, query, children;

			ch = $(this).jqGrid("getNodeChildren",rec);

			query = $.jgrid.from(ch);

			query.orderBy(sortname, newDir, st, datefmt);

			children = query.select();

			for (i = 0, len = children.length; i < len; i++) {

				child = children[i];

				records.push(child);

				$(this).jqGrid("collectChildrenSortTree",records, child, sortname, newDir, st, datefmt); 

			}

		});

	},

	// experimental 

	setTreeRow : function(rowid, data) {

		var success=false;

		this.each(function(){

			var t = this;

			if(!t.grid || !t.p.treeGrid) { return; }

			success = $(t).jqGrid("setRowData",rowid,data);

		});

		return success;

	},

	delTreeNode : function (rowid) {

		return this.each(function () {

			var $t = this;

			if(!$t.grid || !$t.p.treeGrid) { return; }

			var rc = $($t).jqGrid("getInd",rowid,true);

			if (rc) {

				var dr = $($t).jqGrid("getNodeChildren",rc);

				if(dr.length>0){

					for (var i=0;i<dr.length;i++){

						$($t).jqGrid("delRowData",dr[i].id);

					}

				}

				$($t).jqGrid("delRowData",rc.id);

			}

		});

	}

});

})(jQuery);;(function($){

/**

 * jqGrid extension for custom methods

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/ 

$.jgrid.extend({

	getColProp : function(colname){

		var ret ={}, $t = this[0];

		if ( !$t.grid ) { return false; }

		var cM = $t.p.colModel;

		for ( var i =0;i<cM.length;i++ ) {

			if ( cM[i].name == colname ) {

				ret = cM[i];

				break;

			}

		}

		return ret;

	},

	setColProp : function(colname, obj){

		//do not set width will not work

		return this.each(function(){

			if ( this.grid ) {

				if ( obj ) {

					var cM = this.p.colModel;

					for ( var i =0;i<cM.length;i++ ) {

						if ( cM[i].name == colname ) {

							$.extend(this.p.colModel[i],obj);

							break;

						}

					}

				}

			}

		});

	},

	sortGrid : function(colname,reload, sor){

		return this.each(function(){

			var $t=this,idx=-1;

			if ( !$t.grid ) { return;}

			if ( !colname ) { colname = $t.p.sortname; }

			for ( var i=0;i<$t.p.colModel.length;i++ ) {

				if ( $t.p.colModel[i].index == colname || $t.p.colModel[i].name==colname ) {

					idx = i;

					break;

				}

			}

			if ( idx!=-1 ){

				var sort = $t.p.colModel[idx].sortable;

				if ( typeof sort !== 'boolean' ) { sort =  true; }

				if ( typeof reload !=='boolean' ) { reload = false; }

				if ( sort ) { $t.sortData("jqgh_"+colname, idx, reload, sor); }

			}

		});

	},

	GridDestroy : function () {

		return this.each(function(){

			if ( this.grid ) { 

				if ( this.p.pager ) { // if not part of grid

					$(this.p.pager).remove();

				}

				var gid = this.id;

				try {

					$("#gbox_"+gid).remove();

				} catch (_) {}

			}

		});

	},

	GridUnload : function(){

		return this.each(function(){

			if ( !this.grid ) {return;}

			var defgrid = {id: $(this).attr('id'),cl: $(this).attr('class')};

			if (this.p.pager) {

				$(this.p.pager).empty().removeClass("ui-state-default ui-jqgrid-pager corner-bottom");

			}

			var newtable = document.createElement('table');

			$(newtable).attr({id:defgrid.id});

			newtable.className = defgrid.cl;

			var gid = this.id;

			$(newtable).removeClass("ui-jqgrid-btable");

			if( $(this.p.pager).parents("#gbox_"+gid).length === 1 ) {

				$(newtable).insertBefore("#gbox_"+gid).show();

				$(this.p.pager).insertBefore("#gbox_"+gid);

			} else {

				$(newtable).insertBefore("#gbox_"+gid).show();

			}

			$("#gbox_"+gid).remove();

		});

	},

    setGridState : function(state) {

		return this.each(function(){

			if ( !this.grid ) {return;}

            var $t = this;

            if(state == 'hidden'){

				$(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+$t.p.id).slideUp("fast");

				if($t.p.pager) {$($t.p.pager).slideUp("fast");}

				if($t.p.toppager) {$($t.p.toppager).slideUp("fast");}

				if($t.p.toolbar[0]===true) {

					if( $t.p.toolbar[1]=='both') {

						$($t.grid.ubDiv).slideUp("fast");

					}

					$($t.grid.uDiv).slideUp("fast");

				}

				if($t.p.footerrow) { $(".ui-jqgrid-sdiv","#gbox_"+$t.p.id).slideUp("fast"); }

				$(".ui-jqgrid-titlebar-close span",$t.grid.cDiv).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s");

				$t.p.gridstate = 'hidden';

            } else if(state=='visible') {

				$(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+$t.p.id).slideDown("fast");

				if($t.p.pager) {$($t.p.pager).slideDown("fast");}

				if($t.p.toppager) {$($t.p.toppager).slideDown("fast");}

				if($t.p.toolbar[0]===true) {

					if( $t.p.toolbar[1]=='both') {

						$($t.grid.ubDiv).slideDown("fast");

					}

					$($t.grid.uDiv).slideDown("fast");

				}

				if($t.p.footerrow) { $(".ui-jqgrid-sdiv","#gbox_"+$t.p.id).slideDown("fast"); }

				$(".ui-jqgrid-titlebar-close span",$t.grid.cDiv).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n");

				$t.p.gridstate = 'visible';

			}



		});

	},

	updateGridRows : function (data, rowidname, jsonreader) {

		var nm, success=false, title;

		this.each(function(){

			var t = this, vl, ind, srow, sid;

			if(!t.grid) {return false;}

			if(!rowidname) { rowidname = "id"; }

			if( data  && data.length >0 ) {

				$(data).each(function(j){

					srow = this;

					ind = t.rows.namedItem(srow[rowidname]);

					if(ind) {

						sid = srow[rowidname];

						if(jsonreader === true){

							if(t.p.jsonReader.repeatitems === true) {

								if(t.p.jsonReader.cell) {srow = srow[t.p.jsonReader.cell];}

								for (var k=0;k<srow.length;k++) {

									vl = t.formatter( sid, srow[k], k, srow, 'edit');

									title = t.p.colModel[k].title ? {"title":$.jgrid.stripHtml(vl)} : {};

									if(t.p.treeGrid===true && nm == t.p.ExpandColumn) {

										$("td:eq("+k+") > span:first",ind).html(vl).attr(title);

									} else {

										$("td:eq("+k+")",ind).html(vl).attr(title); 

									}

								}

								success = true;

								return true;

							}

						} 

						$(t.p.colModel).each(function(i){

							nm = jsonreader===true ? this.jsonmap || this.name :this.name;

							if( srow[nm] !== undefined) {

								vl = t.formatter( sid, srow[nm], i, srow, 'edit');

								title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};

								if(t.p.treeGrid===true && nm == t.p.ExpandColumn) {

									$("td:eq("+i+") > span:first",ind).html(vl).attr(title);

								} else {

									$("td:eq("+i+")",ind).html(vl).attr(title); 

								}

								success = true;

							}

						});

					}

				});

			}

		});

		return success;

	},

	filterGrid : function(gridid,p){

		p = $.extend({

			gridModel : false,

			gridNames : false,

			gridToolbar : false,

			filterModel: [], // label/name/stype/defval/surl/sopt

			formtype : "horizontal", // horizontal/vertical

			autosearch: true, // if set to false a serch button should be enabled.

			formclass: "filterform",

			tableclass: "filtertable",

			buttonclass: "filterbutton",

			searchButton: "Search",

			clearButton: "Clear",

			enableSearch : false,

			enableClear: false,

			beforeSearch: null,

			afterSearch: null,

			beforeClear: null,

			afterClear: null,

			url : '',

			marksearched: true

		},p  || {});

		return this.each(function(){

			var self = this;

			this.p = p;

			if(this.p.filterModel.length === 0 && this.p.gridModel===false) { alert("No filter is set"); return;}

			if( !gridid) {alert("No target grid is set!"); return;}

			this.p.gridid = gridid.indexOf("#") != -1 ? gridid : "#"+gridid;

			var gcolMod = $(this.p.gridid).jqGrid("getGridParam",'colModel');

			if(gcolMod) {

				if( this.p.gridModel === true) {

					var thegrid = $(this.p.gridid)[0];

					var sh;

					// we should use the options search, edittype, editoptions

					// additionally surl and defval can be added in grid colModel

					$.each(gcolMod, function (i,n) {

						var tmpFil = [];

						this.search = this.search === false ? false : true;

						if(this.editrules && this.editrules.searchhidden === true) {

							sh = true;

						} else {

							if(this.hidden === true ) {

								sh = false;

							} else {

								sh = true;

							}

						}

						if( this.search === true && sh === true) {

							if(self.p.gridNames===true) {

								tmpFil.label = thegrid.p.colNames[i];

							} else {

								tmpFil.label = '';

							}

							tmpFil.name = this.name;

							tmpFil.index = this.index || this.name;

							// we support only text and selects, so all other to text

							tmpFil.stype = this.edittype || 'text';

							if(tmpFil.stype != 'select' ) {

								tmpFil.stype = 'text';

							}

							tmpFil.defval = this.defval || '';

							tmpFil.surl = this.surl || '';

							tmpFil.sopt = this.editoptions || {};

							tmpFil.width = this.width;

							self.p.filterModel.push(tmpFil);

						}

					});

				} else {

					$.each(self.p.filterModel,function(i,n) {

						for(var j=0;j<gcolMod.length;j++) {

							if(this.name == gcolMod[j].name) {

								this.index = gcolMod[j].index || this.name;

								break;

							}

						}

						if(!this.index) {

							this.index = this.name;

						}

					});

				}

			} else {

				alert("Could not get grid colModel"); return;

			}

			var triggerSearch = function() {

				var sdata={}, j=0, v;

				var gr = $(self.p.gridid)[0], nm;

                gr.p.searchdata = {};

				if($.isFunction(self.p.beforeSearch)){self.p.beforeSearch();}

				$.each(self.p.filterModel,function(i,n){

                    nm = this.index;

					switch (this.stype) {

						case 'select' :

							v = $("select[name="+nm+"]",self).val();

							if(v) {

								sdata[nm] = v;

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");

								}

								j++;

							} else {

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");

								}

                                try {

                                    delete gr.p.postData[this.index];

                                } catch (e) {}

							}

							break;

						default:

							v = $("input[name="+nm+"]",self).val();

							if(v) {

								sdata[nm] = v;

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");

								}

								j++;

							} else {

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");

								}

                                try {

                                    delete gr.p.postData[this.index];

                                } catch(e) {}

							}

					}

				});

				var sd =  j>0 ? true : false;

                $.extend(gr.p.postData,sdata);

				var saveurl;

				if(self.p.url) {

					saveurl = $(gr).jqGrid("getGridParam",'url');

					$(gr).jqGrid("setGridParam",{url:self.p.url});

				}

			    $(gr).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]);

				if(saveurl) {$(gr).jqGrid("setGridParam",{url:saveurl});}

				if($.isFunction(self.p.afterSearch)){self.p.afterSearch();}

			};

			var clearSearch = function(){

				var sdata={}, v, j=0;

				var gr = $(self.p.gridid)[0], nm;

				if($.isFunction(self.p.beforeClear)){self.p.beforeClear();}

				$.each(self.p.filterModel,function(i,n){

                    nm = this.index;

					v = (this.defval) ? this.defval : "";

					if(!this.stype){this.stype='text';}

					switch (this.stype) {

						case 'select' :

							var v1;

							$("select[name="+nm+"] option",self).each(function (i){

                                if(i===0) { this.selected = true; }

								if ($(this).text() == v) {

									this.selected = true;

									v1 = $(this).val();

									return false;

								}

							});

							if(v1) {

								// post the key and not the text

								sdata[nm] = v1;

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");

								}

								j++;

							} else {

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");

								}

                                try {

                                    delete gr.p.postData[this.index];

                                } catch (e) {}

							}

							break;

						case 'text':

							$("input[name="+nm+"]",self).val(v);

							if(v) {

								sdata[nm] = v;

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).addClass("dirty-cell");

								}

								j++;

							} else {

								if(self.p.marksearched){

									$("#jqgh_"+this.name,gr.grid.hDiv).removeClass("dirty-cell");

								}

                                try {

                                    delete gr.p.postData[this.index];

                                } catch (e) {}

							}

                            break;

					}

				});

				var sd =  j>0 ? true : false;

                $.extend(gr.p.postData,sdata);

				var saveurl;

				if(self.p.url) {

					saveurl = $(gr).jqGrid("getGridParam",'url');

					$(gr).jqGrid("setGridParam",{url:self.p.url});

				}

				$(gr).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]);

				if(saveurl) {$(gr).jqGrid("setGridParam",{url:saveurl});}

				if($.isFunction(self.p.afterClear)){self.p.afterClear();}

			};

			var tbl;

			var formFill = function(){

				var tr = document.createElement("tr");

				var tr1, sb, cb,tl,td;

				if(self.p.formtype=='horizontal'){

					$(tbl).append(tr);

				}

				$.each(self.p.filterModel,function(i,n){

					tl = document.createElement("td");

					$(tl).append("<label for='"+this.name+"'>"+this.label+"</label>");

					td = document.createElement("td");

					var $t=this;

					if(!this.stype) { this.stype='text';}

					switch (this.stype)

					{

					case "select":

						if(this.surl) {

							// data returned should have already constructed html select

							$(td).load(this.surl,function(){

								if($t.defval) { $("select",this).val($t.defval); }

								$("select",this).attr({name:$t.index || $t.name, id: "sg_"+$t.name});

								if($t.sopt) { $("select",this).attr($t.sopt); }

								if(self.p.gridToolbar===true && $t.width) {

									$("select",this).width($t.width);

								}

								if(self.p.autosearch===true){

									$("select",this).change(function(e){

										triggerSearch();

										return false;

									});

								}

							});

						} else {

							// sopt to construct the values

							if($t.sopt.value) {

								var oSv = $t.sopt.value;

								var elem = document.createElement("select");

								$(elem).attr({name:$t.index || $t.name, id: "sg_"+$t.name}).attr($t.sopt);

								var so, sv, ov;

								if(typeof oSv === "string") {

									so = oSv.split(";");

									for(var k=0; k<so.length;k++){

										sv = so[k].split(":");

										ov = document.createElement("option");

										ov.value = sv[0]; ov.innerHTML = sv[1];

										if (sv[1]==$t.defval) { ov.selected ="selected"; }

										elem.appendChild(ov);

									}

								} else if(typeof oSv === "object" ) {

									for ( var key in oSv) {

										if(oSv.hasOwnProperty(key)) {

											i++;

											ov = document.createElement("option");

											ov.value = key; ov.innerHTML = oSv[key];

											if (oSv[key]==$t.defval) { ov.selected ="selected"; }

											elem.appendChild(ov);

										}

									}

								}

								if(self.p.gridToolbar===true && $t.width) {

									$(elem).width($t.width);

								}

								$(td).append(elem);

								if(self.p.autosearch===true){

									$(elem).change(function(e){

										triggerSearch();

										return false;

									});

								}

							}

						}

						break;

					case 'text':

						var df = this.defval ? this.defval: "";

						$(td).append("<input type='text' name='"+(this.index || this.name)+"' id='sg_"+this.name+"' value='"+df+"'/>");

						if($t.sopt) { $("input",td).attr($t.sopt); }

						if(self.p.gridToolbar===true && $t.width) {

							if($.browser.msie) {

								$("input",td).width($t.width-4);

							} else {

								$("input",td).width($t.width-2);

							}

						}

						if(self.p.autosearch===true){

							$("input",td).keypress(function(e){

								var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;

								if(key == 13){

									triggerSearch();

									return false;

								}

								return this;

							});

						}

						break;

					}

					if(self.p.formtype=='horizontal'){

						if(self.p.gridToolbar===true && self.p.gridNames===false) {

							$(tr).append(td);

						} else {

							$(tr).append(tl).append(td);

						}

						$(tr).append(td);

					} else {

						tr1 = document.createElement("tr");

						$(tr1).append(tl).append(td);

						$(tbl).append(tr1);

					}

				});

				td = document.createElement("td");

				if(self.p.enableSearch === true){

					sb = "<input type='button' id='sButton' class='"+self.p.buttonclass+"' value='"+self.p.searchButton+"'/>";

					$(td).append(sb);

					$("input#sButton",td).click(function(){

						triggerSearch();

						return false;

					});

				}

				if(self.p.enableClear === true) {

					cb = "<input type='button' id='cButton' class='"+self.p.buttonclass+"' value='"+self.p.clearButton+"'/>";

					$(td).append(cb);

					$("input#cButton",td).click(function(){

						clearSearch();

						return false;

					});

				}

				if(self.p.enableClear === true || self.p.enableSearch === true) {

					if(self.p.formtype=='horizontal') {

						$(tr).append(td);

					} else {

						tr1 = document.createElement("tr");

						$(tr1).append("<td>&#160;</td>").append(td);

						$(tbl).append(tr1);

					}

				}

			};

			var frm = $("<form name='SearchForm' style=display:inline;' class='"+this.p.formclass+"'></form>");

			tbl =$("<table class='"+this.p.tableclass+"' cellspacing='0' cellpading='0' border='0'><tbody></tbody></table>");

			$(frm).append(tbl);

			formFill();

			$(this).append(frm);

			this.triggerSearch = triggerSearch;

			this.clearSearch = clearSearch;

		});

	},

	filterToolbar : function(p){

		p = $.extend({

			autosearch: true,

			searchOnEnter : true,

			beforeSearch: null,

			afterSearch: null,

			beforeClear: null,

			afterClear: null,

			searchurl : '',

			stringResult: false,

			groupOp: 'AND',

			defaultSearch : "bw"

		},p  || {});

		return this.each(function(){

			var $t = this;

			var triggerToolbar = function() {

				var sdata={}, j=0, v, nm, sopt={},so;

				$.each($t.p.colModel,function(i,n){

					nm = this.index || this.name;

					switch (this.stype) {

						case 'select' :

							so  = (this.searchoptions && this.searchoptions.sopt) ? this.searchoptions.sopt[0] : 'eq';

							v = $("select[name="+nm+"]",$t.grid.hDiv).val();

							if(v) {

								sdata[nm] = v;

								sopt[nm] = so;

								j++;

							} else {

								try {

									delete $t.p.postData[nm];

								} catch (e) {}

							}

							break;

						case 'text':

							so  = (this.searchoptions && this.searchoptions.sopt) ? this.searchoptions.sopt[0] : p.defaultSearch;

							v = $("input[name="+nm+"]",$t.grid.hDiv).val();

							if(v) {

								sdata[nm] = v;

								sopt[nm] = so;

								j++;

							} else {

								try {

									delete $t.p.postData[nm];

								} catch (e) {}

							}

							break;

					}

				});

				var sd =  j>0 ? true : false;

				if(p.stringResult === true || $t.p.datatype == "local") {

					var ruleGroup = "{\"groupOp\":\"" + p.groupOp + "\",\"rules\":[";

					var gi=0;

					$.each(sdata,function(i,n){

						if (gi > 0) {ruleGroup += ",";}

						ruleGroup += "{\"field\":\"" + i + "\",";

						ruleGroup += "\"op\":\"" + sopt[i] + "\",";

						ruleGroup += "\"data\":\"" + n + "\"}";

						gi++;

					});

					ruleGroup += "]}";

					$.extend($t.p.postData,{filters:ruleGroup});

				} else {

					$.extend($t.p.postData,sdata);

				}

				var saveurl;

				if($t.p.searchurl) {

					saveurl = $t.p.url;

					$($t).jqGrid("setGridParam",{url:$t.p.searchurl});

				}

				var bsr = false;

				if($.isFunction(p.beforeSearch)){bsr = p.beforeSearch.call($t);}

				if(!bsr) { $($t).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]); }

				if(saveurl) {$($t).jqGrid("setGridParam",{url:saveurl});}

				if($.isFunction(p.afterSearch)){p.afterSearch();}

			};

			var clearToolbar = function(trigger){

				var sdata={}, v, j=0, nm;

				trigger = (typeof trigger != 'boolean') ? true : trigger;

				$.each($t.p.colModel,function(i,n){

					v = (this.searchoptions && this.searchoptions.defaultValue) ? this.searchoptions.defaultValue : "";

					nm = this.index || this.name;

					switch (this.stype) {

						case 'select' :

							var v1;

							$("select[name="+nm+"] option",$t.grid.hDiv).each(function (i){

								if(i===0) { this.selected = true; }

								if ($(this).text() == v) {

									this.selected = true;

									v1 = $(this).val();

									return false;

								}

							});

							if (v1) {

								// post the key and not the text

								sdata[nm] = v1;

								j++;

							} else {

								try {

									delete $t.p.postData[nm];

								} catch(e) {}

							}

							break;

						case 'text':

							$("input[name="+nm+"]",$t.grid.hDiv).val(v);

							if(v) {

								sdata[nm] = v;

								j++;

							} else {

								try {

									delete $t.p.postData[nm];

								} catch (e){}

							}

							break;

					}

				});

				var sd =  j>0 ? true : false;

				if(p.stringResult === true || $t.p.datatype == "local") {

					var ruleGroup = "{\"groupOp\":\"" + p.groupOp + "\",\"rules\":[";

					var gi=0;

					$.each(sdata,function(i,n){

						if (gi > 0) {ruleGroup += ",";}

						ruleGroup += "{\"field\":\"" + i + "\",";

						ruleGroup += "\"op\":\"" + "eq" + "\",";

						ruleGroup += "\"data\":\"" + n + "\"}";

						gi++;

					});

					ruleGroup += "]}";

					$.extend($t.p.postData,{filters:ruleGroup});

				} else {

					$.extend($t.p.postData,sdata);

				}

				var saveurl;

				if($t.p.searchurl) {

					saveurl = $t.p.url;

					$($t).jqGrid("setGridParam",{url:$t.p.searchurl});

				}

				var bcv = false;

				if($.isFunction(p.beforeClear)){bcv = p.beforeClear.call($t);}

				if(!bcv) {

					if(trigger) {

						$($t).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]);

					}

				}

				if(saveurl) {$($t).jqGrid("setGridParam",{url:saveurl});}

				if($.isFunction(p.afterClear)){p.afterClear();}

			};

			var toggleToolbar = function(){

				var trow = $("tr.ui-search-toolbar",$t.grid.hDiv);

				if(trow.css("display")=='none') { trow.show(); }

				else { trow.hide(); }

			};

			// create the row

			function bindEvents(selector, events) {

				var jElem = $(selector);

				if (jElem[0]) {

				    jQuery.each(events, function() {

				        if (this.data !== undefined) {

				            jElem.bind(this.type, this.data, this.fn);

				        } else {

				            jElem.bind(this.type, this.fn);

				        }

				    });

				}

			}

			var tr = $("<tr class='ui-search-toolbar' role='rowheader'></tr>");

			var timeoutHnd;

			$.each($t.p.colModel,function(i,n){

				var cm=this, thd , th, soptions,surl,self;

				th = $("<th role='columnheader' class='ui-state-default ui-th-column ui-th-"+$t.p.direction+"'></th>");

				thd = $("<div style='width:100%;position:relative;height:100%;padding-right:0.3em;'></div>");

				if(this.hidden===true) { $(th).css("display","none");}

				this.search = this.search === false ? false : true;

				if(typeof this.stype == 'undefined' ) {this.stype='text';}

				soptions = $.extend({},this.searchoptions || {});

				if(this.search){

					switch (this.stype)

					{

					case "select":

						surl = this.surl || soptions.dataUrl;

						if(surl) {

							// data returned should have already constructed html select

							// primitive jQuery load

							self = thd;

							$.ajax($.extend({

								url: surl,

								dataType: "html",

								complete: function(res,status) {

									if(soptions.buildSelect !== undefined) {

										var d = soptions.buildSelect(res);

										if (d) { $(self).append(d); }

									} else {

										$(self).append(res.responseText);

									}

									if(soptions.defaultValue) { $("select",self).val(soptions.defaultValue); }

									$("select",self).attr({name:cm.index || cm.name, id: "gs_"+cm.name});

									if(soptions.attr) {$("select",self).attr(soptions.attr);}

									$("select",self).css({width: "100%"});

									// preserve autoserch

									if(soptions.dataInit !== undefined) { soptions.dataInit($("select",self)[0]); }

									if(soptions.dataEvents !== undefined) { bindEvents($("select",self)[0],soptions.dataEvents); }

									if(p.autosearch===true){

										$("select",self).change(function(e){

											triggerToolbar();

											return false;

										});

									}

									res=null;

								}

							}, $.jgrid.ajaxOptions, $t.p.ajaxSelectOptions || {} ));

						} else {

							var oSv;

							if(cm.searchoptions && cm.searchoptions.value) {

								oSv = cm.searchoptions.value;

							} else if(cm.editoptions && cm.editoptions.value) {

								oSv = cm.editoptions.value;

							}

							if (oSv) {	

								var elem = document.createElement("select");

								elem.style.width = "100%";

								$(elem).attr({name:cm.index || cm.name, id: "gs_"+cm.name});

								var so, sv, ov;

								if(typeof oSv === "string") {

									so = oSv.split(";");

									for(var k=0; k<so.length;k++){

										sv = so[k].split(":");

										ov = document.createElement("option");

										ov.value = sv[0]; ov.innerHTML = sv[1];

										elem.appendChild(ov);

									}

								} else if(typeof oSv === "object" ) {

									for ( var key in oSv) {

										if(oSv.hasOwnProperty(key)) {

											ov = document.createElement("option");

											ov.value = key; ov.innerHTML = oSv[key];

											elem.appendChild(ov);

										}

									}

								}

								if(soptions.defaultValue) { $(elem).val(soptions.defaultValue); }

								if(soptions.attr) {$(elem).attr(soptions.attr);}

								if(soptions.dataInit !== undefined) { soptions.dataInit(elem); }

								if(soptions.dataEvents !== undefined) { bindEvents(elem, soptions.dataEvents); }

								$(thd).append(elem);

								if(p.autosearch===true){

									$(elem).change(function(e){

										triggerToolbar();

										return false;

									});

								}

							}

						}

						break;

					case 'text':

						var df = soptions.defaultValue ? soptions.defaultValue: "";

						$(thd).append("<input type='text' style='width:95%;padding:0px;' name='"+(cm.index || cm.name)+"' id='gs_"+cm.name+"' value='"+df+"'/>");

						if(soptions.attr) {$("input",thd).attr(soptions.attr);}

						if(soptions.dataInit !== undefined) { soptions.dataInit($("input",thd)[0]); }

						if(soptions.dataEvents !== undefined) { bindEvents($("input",thd)[0], soptions.dataEvents); }

						if(p.autosearch===true){

							if(p.searchOnEnter) {

								$("input",thd).keypress(function(e){

									var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;

									if(key == 13){

										triggerToolbar();

										return false;

									}

									return this;

								});

							} else {

								$("input",thd).keydown(function(e){

									var key = e.which;

									switch (key) {

										case 13:

											return false;

										case 9 :

										case 16:

										case 37:

										case 38:

										case 39:

										case 40:

										case 27:

											break;

										default :

											if(timeoutHnd) { clearTimeout(timeoutHnd); }

											timeoutHnd = setTimeout(function(){triggerToolbar();},500);

									}

								});

							}

						}

						break;

					}

				}

				$(th).append(thd);

				$(tr).append(th);

			});

			$("table thead",$t.grid.hDiv).append(tr);

			this.triggerToolbar = triggerToolbar;

			this.clearToolbar = clearToolbar;

			this.toggleToolbar = toggleToolbar;

		});

	}

});

})(jQuery);;(function($){

/**

 * jqGrid extension

 * Paul Tiseo ptiseo@wasteconsultants.com

 * 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/ 

$.jgrid.extend({

	getPostData : function(){

		var $t = this[0];

		if(!$t.grid) { return; }

		return $t.p.postData;

	},

	setPostData : function( newdata ) {

		var $t = this[0];

		if(!$t.grid) { return; }

		// check if newdata is correct type

		if ( typeof(newdata) === 'object' ) {

			$t.p.postData = newdata;

		}

		else {

			alert("Error: cannot add a non-object postData value. postData unchanged.");

		}

	},

	appendPostData : function( newdata ) { 

		var $t = this[0];

		if(!$t.grid) { return; }

		// check if newdata is correct type

		if ( typeof(newdata) === 'object' ) {

			$.extend($t.p.postData, newdata);

		}

		else {

			alert("Error: cannot append a non-object postData value. postData unchanged.");

		}

	},

	setPostDataItem : function( key, val ) {

		var $t = this[0];

		if(!$t.grid) { return; }

		$t.p.postData[key] = val;

	},

	getPostDataItem : function( key ) {

		var $t = this[0];

		if(!$t.grid) { return; }

		return $t.p.postData[key];

	},

	removePostDataItem : function( key ) {

		var $t = this[0];

		if(!$t.grid) { return; }

		delete $t.p.postData[key];

	},

	getUserData : function(){

		var $t = this[0];

		if(!$t.grid) { return; }

		return $t.p.userData;

	},

	getUserDataItem : function( key ) {

		var $t = this[0];

		if(!$t.grid) { return; }

		return $t.p.userData[key];

	}

});

})(jQuery);/*

 Transform a table to a jqGrid.

 Peter Romianowski <peter.romianowski@optivo.de> 

 If the first column of the table contains checkboxes or

 radiobuttons then the jqGrid is made selectable.

*/

// Addition - selector can be a class or id

function tableToGrid(selector, options) {

jQuery(selector).each(function() {

	if(this.grid) {return;} //Adedd from Tony Tomov

	// This is a small "hack" to make the width of the jqGrid 100%

	jQuery(this).width("99%");

	var w = jQuery(this).width();



	// Text whether we have single or multi select

	var inputCheckbox = jQuery('input[type=checkbox]:first', jQuery(this));

	var inputRadio = jQuery('input[type=radio]:first', jQuery(this));

	var selectMultiple = inputCheckbox.length > 0;

	var selectSingle = !selectMultiple && inputRadio.length > 0;

	var selectable = selectMultiple || selectSingle;

	//var inputName = inputCheckbox.attr("name") || inputRadio.attr("name");



	// Build up the columnModel and the data

	var colModel = [];

	var colNames = [];

	jQuery('th', jQuery(this)).each(function() {

		if (colModel.length === 0 && selectable) {

			colModel.push({

				name: '__selection__',

				index: '__selection__',

				width: 0,

				hidden: true

			});

			colNames.push('__selection__');

		} else {

			colModel.push({

				name: jQuery(this).attr("id") || jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(' ').join('_'),

				index: jQuery(this).attr("id") || jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(' ').join('_'),

				width: jQuery(this).width() || 150

			});

			colNames.push(jQuery(this).html());

		}

	});

	var data = [];

	var rowIds = [];

	var rowChecked = [];

	jQuery('tbody > tr', jQuery(this)).each(function() {

		var row = {};

		var rowPos = 0;

		jQuery('td', jQuery(this)).each(function() {

			if (rowPos === 0 && selectable) {

				var input = jQuery('input', jQuery(this));

				var rowId = input.attr("value");

				rowIds.push(rowId || data.length);

				if (input.attr("checked")) {

					rowChecked.push(rowId);

				}

				row[colModel[rowPos].name] = input.attr("value");

			} else {

				row[colModel[rowPos].name] = jQuery(this).html();

			}

			rowPos++;

		});

		if(rowPos >0) { data.push(row); }

	});



	// Clear the original HTML table

	jQuery(this).empty();



	// Mark it as jqGrid

	jQuery(this).addClass("scroll");



	jQuery(this).jqGrid(jQuery.extend({

		datatype: "local",

		width: w,

		colNames: colNames,

		colModel: colModel,

		multiselect: selectMultiple

		//inputName: inputName,

		//inputValueCol: imputName != null ? "__selection__" : null

	}, options || {}));



	// Add data

	var a;

	for (a = 0; a < data.length; a++) {

		var id = null;

		if (rowIds.length > 0) {

			id = rowIds[a];

			if (id && id.replace) {

				// We have to do this since the value of a checkbox

				// or radio button can be anything 

				id = encodeURIComponent(id).replace(/[.\-%]/g, "_");

			}

		}

		if (id === null) {

			id = a + 1;

		}

		jQuery(this).jqGrid("addRowData",id, data[a]);

	}



	// Set the selection

	for (a = 0; a < rowChecked.length; a++) {

		jQuery(this).jqGrid("setSelection",rowChecked[a]);

	}

});

};

;(function($){

/**

 * jqGrid extension for manipulating columns properties

 * Piotr Roznicki roznicki@o2.pl

 * http://www.roznicki.prv.pl

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/

$.jgrid.extend({

	setColumns : function(p) {

		p = $.extend({

			top : 0,

			left: 0,

			width: 200,

			height: 'auto',

			dataheight: 'auto',

			modal: false,

			drag: true,

			beforeShowForm: null,

			afterShowForm: null,

			afterSubmitForm: null,

			closeOnEscape : true,

			ShrinkToFit : false,

			jqModal : false,

			saveicon: [true,"left","ui-icon-disk"],

			closeicon: [true,"left","ui-icon-close"],

			onClose : null,

			colnameview : true,

			closeAfterSubmit : true,

			updateAfterCheck : false,

			recreateForm : false

		}, $.jgrid.col, p ||{});

		return this.each(function(){

			var $t = this;

			if (!$t.grid ) { return; }

			var onBeforeShow = typeof p.beforeShowForm === 'function' ? true: false;

			var onAfterShow = typeof p.afterShowForm === 'function' ? true: false;

			var onAfterSubmit = typeof p.afterSubmitForm === 'function' ? true: false;			

			var gID = $t.p.id,

			dtbl = "ColTbl_"+gID,

			IDs = {themodal:'colmod'+gID,modalhead:'colhd'+gID,modalcontent:'colcnt'+gID, scrollelm: dtbl};

			if(p.recreateForm===true && $("#"+IDs.themodal).html() != null) {

				$("#"+IDs.themodal).remove();

			}

			if ( $("#"+IDs.themodal).html() != null ) {

				if(onBeforeShow) { p.beforeShowForm($("#"+dtbl)); }

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal, jqM:false, modal:p.modal});

				if(onAfterShow) { p.afterShowForm($("#"+dtbl)); }

			} else {

				var dh = isNaN(p.dataheight) ? p.dataheight : p.dataheight+"px";

				var formdata = "<div id='"+dtbl+"' class='formdata' style='width:100%;overflow:auto;position:relative;height:"+dh+";'>";

				formdata += "<table class='ColTable' cellspacing='1' cellpading='2' border='0'><tbody>";

				for(i=0;i<this.p.colNames.length;i++){

					if(!$t.p.colModel[i].hidedlg) { // added from T. Tomov

						formdata += "<tr><td style='white-space: pre;'><input type='checkbox' style='margin-right:5px;' id='col_" + this.p.colModel[i].name + "' class='cbox' value='T' " + 

						((this.p.colModel[i].hidden===false)?"checked":"") + "/>" +  "<label for='col_" + this.p.colModel[i].name + "'>" + this.p.colNames[i] + ((p.colnameview) ? " (" + this.p.colModel[i].name + ")" : "" )+ "</label></td></tr>";

					}

				}

				formdata += "</tbody></table></div>"

				var bS  = !p.updateAfterCheck ? "<a href='javascript:void(0)' id='dData' class='fm-button ui-state-default ui-corner-all'>"+p.bSubmit+"</a>" : "",

				bC  ="<a href='javascript:void(0)' id='eData' class='fm-button ui-state-default ui-corner-all'>"+p.bCancel+"</a>";

				formdata += "<table border='0' class='EditTable' id='"+dtbl+"_2'><tbody><tr style='display:block;height:3px;'><td></td></tr><tr><td class='DataTD ui-widget-content'></td></tr><tr><td class='ColButton EditButton'>"+bS+"&#160;"+bC+"</td></tr></tbody></table>";

				p.gbox = "#gbox_"+gID;

				$.jgrid.createModal(IDs,formdata,p,"#gview_"+$t.p.id,$("#gview_"+$t.p.id)[0]);

				if(p.saveicon[0]==true) {

					$("#dData","#"+dtbl+"_2").addClass(p.saveicon[1] == "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')

					.append("<span class='ui-icon "+p.saveicon[2]+"'></span>");

				}

				if(p.closeicon[0]==true) {

					$("#eData","#"+dtbl+"_2").addClass(p.closeicon[1] == "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')

					.append("<span class='ui-icon "+p.closeicon[2]+"'></span>");

				}

				if(!p.updateAfterCheck) {

					$("#dData","#"+dtbl+"_2").click(function(e){

						for(i=0;i<$t.p.colModel.length;i++){

							if(!$t.p.colModel[i].hidedlg) { // added from T. Tomov

								var nm = $t.p.colModel[i].name.replace(/\./g, "\\.");

								if($("#col_" + nm,"#"+dtbl).attr("checked")) {

									$($t).jqGrid("showCol",$t.p.colModel[i].name);

									$("#col_" + nm,"#"+dtbl).attr("defaultChecked",true); // Added from T. Tomov IE BUG

								} else {

									$($t).jqGrid("hideCol",$t.p.colModel[i].name);

									$("#col_" + nm,"#"+dtbl).attr("defaultChecked",""); // Added from T. Tomov IE BUG

								}

							}

						}

						if(p.ShrinkToFit===true) {

							$($t).jqGrid("setGridWidth",$t.grid.width-0.001,true);

						}

						if(p.closeAfterSubmit) $.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal, onClose: p.onClose});

						if (onAfterSubmit) { p.afterSubmitForm($("#"+dtbl)); }

						return false;

					});

				} else {

					$(":input","#"+dtbl).click(function(e){

						var cn = this.id.substr(4);

						if(cn){

							if(this.checked) {

								$($t).jqGrid("showCol",cn);

							} else {

								$($t).jqGrid("hideCol",cn);

							}

							if(p.ShrinkToFit===true) {

								$($t).jqGrid("setGridWidth",$t.grid.width-0.001,true);

							}

						}

						return this;

					});

				}

				$("#eData", "#"+dtbl+"_2").click(function(e){

					$.jgrid.hideModal("#"+IDs.themodal,{gb:"#gbox_"+gID,jqm:p.jqModal, onClose: p.onClose});

					return false;

				});

				$("#dData, #eData","#"+dtbl+"_2").hover(

				   function(){$(this).addClass('ui-state-hover');}, 

				   function(){$(this).removeClass('ui-state-hover');}

				);				

				if(onBeforeShow) { p.beforeShowForm($("#"+dtbl)); }

				$.jgrid.viewModal("#"+IDs.themodal,{gbox:"#gbox_"+gID,jqm:p.jqModal, jqM: true, modal:p.modal});

				if(onAfterShow) { p.afterShowForm($("#"+dtbl)); }

			}

		});

	}

});

})(jQuery);;(function($){

/*

 * jqGrid extension for constructing Grid Data from external file

 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

**/ 

    $.jgrid.extend({

        jqGridImport : function(o) {

            o = $.extend({

                imptype : "xml", // xml, json, xmlstring, jsonstring

                impstring: "",

                impurl: "",

                mtype: "GET",

                impData : {},

                xmlGrid :{

                    config : "roots>grid",

                    data: "roots>rows"

                },

                jsonGrid :{

                    config : "grid",

                    data: "data"

                },

                ajaxOptions :{}

            }, o || {});

            return this.each(function(){

                var $t = this;

                var XmlConvert = function (xml,o) {

                    var cnfg = $(o.xmlGrid.config,xml)[0];

                    var xmldata = $(o.xmlGrid.data,xml)[0], jstr, jstr1;

                    if(xmlJsonClass.xml2json && $.jgrid.parse) {

                        jstr = xmlJsonClass.xml2json(cnfg," ");

                        jstr = $.jgrid.parse(jstr);

                        for(var key in jstr) {

                            if(jstr.hasOwnProperty(key)) {

                                jstr1=jstr[key];

                            }

                        }

                        if(xmldata) {

                        // save the datatype

                            var svdatatype = jstr.grid.datatype;

                            jstr.grid.datatype = 'xmlstring';

                            jstr.grid.datastr = xml;

                            $($t).jqGrid( jstr1 ).jqGrid("setGridParam",{datatype:svdatatype});

                        } else {

                            $($t).jqGrid( jstr1 );

                        }

                        jstr = null;jstr1=null;

                    } else {

                        alert("xml2json or parse are not present");

                    }

                };

                var JsonConvert = function (jsonstr,o){

                    if (jsonstr && typeof jsonstr == 'string') {

                        var json = $.jgrid.parse(jsonstr);

                        var gprm = json[o.jsonGrid.config];

                        var jdata = json[o.jsonGrid.data];

                        if(jdata) {

                            var svdatatype = gprm.datatype;

                            gprm.datatype = 'jsonstring';

                            gprm.datastr = jdata;

                            $($t).jqGrid( gprm ).jqGrid("setGridParam",{datatype:svdatatype});

                        } else {

                            $($t).jqGrid( gprm );

                        }

                    }

                };

                switch (o.imptype){

                    case 'xml':

                        $.ajax($.extend({

                            url:o.impurl,

                            type:o.mtype,

                            data: o.impData,

                            dataType:"xml",

                            complete: function(xml,stat) {

                                if(stat == 'success') {

                                    XmlConvert(xml.responseXML,o);

                                    if($.isFunction(o.importComplete)) {

                                        o.importComplete(xml);

                                    }

                                }

                                xml=null;

                            }

                        }, o.ajaxOptions));

                        break;

                    case 'xmlstring' :

                        // we need to make just the conversion and use the same code as xml

                        if(o.impstring && typeof o.impstring == 'string') {

                            var xmld = $.jgrid.stringToDoc(o.impstring);

                            if(xmld) {

                                XmlConvert(xmld,o);

                                if($.isFunction(o.importComplete)) {

                                    o.importComplete(xmld);

                                }

                                o.impstring = null;

                            }

                            xmld = null;

                        }

                        break;

                    case 'json':

                        $.ajax($.extend({

                            url:o.impurl,

                            type:o.mtype,

                            data: o.impData,

                            dataType:"json",

                            complete: function(json,stat) {

                                if(stat == 'success') {

                                    JsonConvert(json.responseText,o );

                                    if($.isFunction(o.importComplete)) {

                                        o.importComplete(json);

                                    }

                                }

                                json=null;

                            }

                        }, o.ajaxOptions ));

                        break;

                    case 'jsonstring' :

                        if(o.impstring && typeof o.impstring == 'string') {

                            JsonConvert(o.impstring,o );

                            if($.isFunction(o.importComplete)) {

                                o.importComplete(o.impstring);

                            }

                            o.impstring = null;

                        }

                        break;

                }

            });

        },

        jqGridExport : function(o) {

            o = $.extend({

                exptype : "xmlstring",

                root: "grid",

                ident: "\t"

            }, o || {});

            var ret = null;

            this.each(function () {

                if(!this.grid) { return;}

                var gprm = $.extend({},$(this).jqGrid("getGridParam"));

                // we need to check for:

                // 1.multiselect, 2.subgrid  3. treegrid and remove the unneded columns from colNames

                if(gprm.rownumbers) {

                    gprm.colNames.splice(0,1);

                    gprm.colModel.splice(0,1);

                }

                if(gprm.multiselect) {

                    gprm.colNames.splice(0,1);

                    gprm.colModel.splice(0,1);

                }

                if(gprm.subGrid) {

                    gprm.colNames.splice(0,1);

                    gprm.colModel.splice(0,1);

                }

                gprm.knv = null;

                if(gprm.treeGrid) {

                    for (var key in gprm.treeReader) {

                        if(gprm.treeReader.hasOwnProperty(key)) {

                            gprm.colNames.splice(gprm.colNames.length-1);

                            gprm.colModel.splice(gprm.colModel.length-1);

                        }

                    }

                }

                switch (o.exptype) {

                    case 'xmlstring' :

                        ret = "<"+o.root+">"+xmlJsonClass.json2xml(gprm,o.ident)+"</"+o.root+">";

                        break;

                    case 'jsonstring' :

                        ret = "{"+ xmlJsonClass.toJson(gprm,o.root,o.ident)+"}";

                        if(gprm.postData.filters !== undefined) {

                            ret=ret.replace(/filters":"/,'filters":');

                            ret=ret.replace(/}]}"/,'}]}');

                        }

                        break;

                }

            });

            return ret;

        },

        excelExport : function(o) {

            o = $.extend({

                exptype : "remote",

                url : null,

                oper: "oper",

                tag: "excel",

                exportOptions : {}

            }, o || {});

            return this.each(function(){

                if(!this.grid) { return;}

                var url;

                if(o.exptype == "remote") {

                    var pdata = $.extend({},this.p.postData);

                    pdata[o.oper] = o.tag;

                    var params = jQuery.param(pdata);

                    if(o.url.indexOf("?") != -1) { url = o.url+"&"+params; }

                    else { url = o.url+"?"+params; }

                    window.location = url;

                }

            });

        }

    });

})(jQuery);// Grouping module

;(function($){

$.jgrid.extend({

	groupingSetup : function () {

		return this.each(function (){

			var $t = this,

			grp = $t.p.groupingView;

			if(grp !== null && ( (typeof grp === 'object') || $.isFunction(grp) ) ) {

				if(!grp.groupField.length) {

					$t.p.grouping = false;

                } else {

					for(var i=0;i<grp.groupField.length;i++) {

						if(!grp.groupOrder[i]) {

							grp.groupOrder[i] = 'asc';

						}

						if(!grp.groupText[i]) {

							grp.groupText[i] = '{0}';

						}

						if( typeof(grp.groupColumnShow[i]) != 'boolean') {

							grp.groupColumnShow[i] = true;

						}

						if( typeof(grp.groupSummary[i]) != 'boolean') {

							grp.groupSummary[i] = false;

						}

						if(grp.groupColumnShow[i] === true) {

							$($t).jqGrid('showCol',grp.groupField[i]);

						} else {

							$($t).jqGrid('hideCol',grp.groupField[i]);

						}

						grp.sortitems[i] = [];

						grp.sortnames[i] = [];

						grp.summaryval[i] = [];

						if(grp.groupSummary[i]) {

							grp.summary[i] =[];

							var cm = $t.p.colModel;

							for(var j=0, cml = cm.length; j < cml; j++) {

								if(cm[j].summaryType) {

									grp.summary[i].push({nm:cm[j].name,st:cm[j].summaryType, v:''});

								}

							}

						}

					}

					$t.p.scroll = false;

					$t.p.rownumbers = false;

					$t.p.subGrid = false;

					$t.p.treeGrid = false;

					$t.p.gridview = true;

				}

			} else {

				$t.p.grouping = false;

			}

		});

	},

	groupingPrepare : function (rData, items, gdata, record) {

		this.each(function(){

			// currently only one level

			// Is this a good idea to do it so!!!!?????

			items[0]  += "";

			var itm = items[0].toString().split(' ').join('');

			

			var grp = this.p.groupingView, $t= this;

			if(gdata.hasOwnProperty(itm)) {

				gdata[itm].push(rData);

			} else {

				gdata[itm] = [];

				gdata[itm].push(rData);

				grp.sortitems[0].push(itm);

				grp.sortnames[0].push($.trim(items[0].toString()));

				grp.summaryval[0][itm] = $.extend(true,[],grp.summary[0]);

			}

			if(grp.groupSummary[0]) {

				$.each(grp.summaryval[0][itm],function(i,n) {

					if ($.isFunction(this.st)) {

						this.v = this.st.call($t, this.v, this.nm, record);

					} else {

						this.v = $($t).jqGrid('groupingCalculations.'+this.st, this.v, this.nm, record);

					}

				});

			}

		});

		return gdata;

	},

	groupingToggle : function(hid){

		this.each(function(){

			var $t = this,

			grp = $t.p.groupingView,

			strpos = hid.lastIndexOf('_'),

			uid = hid.substring(0,strpos+1),

			num = parseInt(hid.substring(strpos+1),10)+1,

			minus = grp.minusicon,

			plus = grp.plusicon;

			if( $("#"+hid+" span").hasClass(minus) ) {

				if(grp.showSummaryOnHide && grp.groupSummary[0]) {

					$("#"+hid).nextUntil(".jqfoot").hide();

				} else  {

					$("#"+hid).nextUntil("#"+uid+String(num)).hide();

				}

				$("#"+hid+" span").removeClass(minus).addClass(plus);

			} else {

				$("#"+hid).nextUntil("#"+uid+String(num)).show();

				$("#"+hid+" span").removeClass(plus).addClass(minus);

			}

		});

		return false;

	},

	groupingRender : function (grdata, colspans ) {

		return this.each(function(){

			var $t = this,

			grp = $t.p.groupingView,

			str = "", icon = "", hid, pmrtl ="", gv, cp, ii;

			//only one level for now

			if(!grp.groupDataSorted) {

				// ???? TO BE IMPROVED

				grp.sortitems[0].sort();

				grp.sortnames[0].sort();

				if(grp.groupOrder[0].toLowerCase() == 'desc')

				{

					grp.sortitems[0].reverse();

					grp.sortnames[0].reverse();

				}

			}   

			if(grp.groupCollapse) { pmrtl = grp.plusicon; }

			else {pmrtl = grp.minusicon;}

			pmrtl += " tree-wrap-"+$t.p.direction; 

			ii = 0;

			while(ii < colspans) {

				if($t.p.colModel[ii].name == grp.groupField[0]) {

					cp = ii;

					break;

				}

				ii++;

			}

			$.each(grp.sortitems[0],function(i,n){

				hid = $t.p.id+"ghead_"+i;

				icon = "<span style='cursor:pointer;' class='ui-icon "+pmrtl+"' onclick=\"jQuery('#"+$t.p.id+"').jqGrid('groupingToggle','"+hid+"');return false;\"></span>";

				try {

					gv = $t.formatter(hid, grp.sortnames[0][i], cp, grp.sortitems[0] );

				} catch (egv) {

					gv = grp.sortnames[0][i];

				}

				str += "<tr id=\""+hid+"\" role=\"row\" class= \"ui-widget-content jqgroup ui-row-"+$t.p.direction+"\"><td colspan=\""+colspans+"\">"+icon+$.jgrid.format(grp.groupText[0], gv, grdata[n].length)+"</td></tr>";

				for(var kk=0;kk<grdata[n].length;kk++) {

					str += grdata[n][kk].join('');

				}

				if(grp.groupSummary[0]) {

					var hhdr = "";

					if(grp.groupCollapse && !grp.showSummaryOnHide) {

						hhdr = " style=\"display:none;\"";

					}

					str += "<tr"+hhdr+" role=\"row\" class=\"ui-widget-content jqfoot ui-row-"+$t.p.direction+"\">";

					var fdata = grp.summaryval[0][n],

					cm = $t.p.colModel,

					vv, grlen = grdata[n].length;

					for(var k=0; k<colspans;k++) {

						var tmpdata = "<td "+$t.formatCol(k,1,'')+">&#160;</td>",

						tplfld = "{0}";

						$.each(fdata,function(){

							if(this.nm == cm[k].name) {

								if(cm[k].summaryTpl)  {

									tplfld = cm[k].summaryTpl;

								}

								if(this.st == 'avg') {

									if(this.v && grlen > 0) {

										this.v = (this.v/grlen);

									}

								}

								try {

									vv = $t.formatter('', this.v, k, this);

								} catch (ef) {

									vv = this.v;

								}

								tmpdata= "<td "+$t.formatCol(k,1,'')+">"+$.jgrid.format(tplfld,vv)+ "</td>";

								return false;

							}

						});

						str += tmpdata;

					}

					str += "</tr>";

				}

			});

			$("#"+$t.p.id+" tbody:first").append(str);

			// free up memory

			str = null;

		});

	},

	groupingGroupBy : function (name, options, current) {

		return this.each(function(){

			var $t = this;

			if(typeof(name) == "string") {

				name = [name];

			}

			var grp = $t.p.groupingView;

			$t.p.grouping = true;

			// show previoous hidden  groups if they are hidden

			for(var i=0;i<grp.groupField.length;i++) {

				if(!grp.groupColumnShow[i]) {

					$($t).jqGrid('showCol',grp.groupField[i]);

				}

			}

			$t.p.groupingView = $.extend($t.p.groupingView, options || {});

			grp.groupField = name;

			$($t).trigger("reloadGrid");

		});

	},

	groupingRemove : function (current) {

		return this.each(function(){

			var $t = this;

			if(typeof(current) == 'undefined') {

				current = true;

			}

			$t.p.grouping = false;

			if(current===true) {

				$("tr.jqgroup, tr.jqfoot","#"+$t.p.id+" tbody:first").remove();

				$("tr.jqgrow:hidden","#"+$t.p.id+" tbody:first").show();

			} else {

				$($t).trigger("reloadGrid");

			}

		});

	},

	groupingCalculations : {

		"sum" : function(v, field, rc) {

			return parseFloat(v||0) + parseFloat((rc[field]||0));

		},

		"min" : function(v, field, rc) {

			if(v==="") {

				return parseFloat(rc[field]||0);

			}

			return Math.min(parseFloat(v),parseFloat(rc[field]||0));

		},

		"max" : function(v, field, rc) {

			if(v==="") {

				return parseFloat(rc[field]||0);

			}

			return Math.max(parseFloat(v),parseFloat(rc[field]||0));

		},

		"count" : function(v, field, rc) {

			if(v==="") {v=0;}

			if(rc.hasOwnProperty(field)) {

				return v+1;

			} else {

				return 0;

			}

		},

		"avg" : function(v, field, rc) {

			// the same as sum, but at end we divide it

			return parseFloat(v||0) + parseFloat((rc[field]||0));

		}

	}

});

})(jQuery);/*

**

 * formatter for values but most of the values if for jqGrid

 * Some of this was inspired and based on how YUI does the table datagrid but in jQuery fashion

 * we are trying to keep it as light as possible

 * Joshua Burnett josh@9ci.com	

 * http://www.greenbill.com

 *

 * Changes from Tony Tomov tony@trirand.com

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl-2.0.html

 * 

**/



;(function($) {

	$.fmatter = {};

	//opts can be id:row id for the row, rowdata:the data for the row, colmodel:the column model for this column

	//example {id:1234,}

	$.extend($.fmatter,{

		isBoolean : function(o) {

			return typeof o === 'boolean';

		},

		isObject : function(o) {

			return (o && (typeof o === 'object' || $.isFunction(o))) || false;

		},

		isString : function(o) {

			return typeof o === 'string';

		},

		isNumber : function(o) {

			return typeof o === 'number' && isFinite(o);

		},

		isNull : function(o) {

			return o === null;

		},

		isUndefined : function(o) {

			return typeof o === 'undefined';

		},

		isValue : function (o) {

			return (this.isObject(o) || this.isString(o) || this.isNumber(o) || this.isBoolean(o));

		},

		isEmpty : function(o) {

			if(!this.isString(o) && this.isValue(o)) {

				return false;

			}else if (!this.isValue(o)){

				return true;

			}

			o = $.trim(o).replace(/\&nbsp\;/ig,'').replace(/\&#160\;/ig,'');

			return o==="";	

		}

	});

	$.fn.fmatter = function(formatType, cellval, opts, rwd, act) {

		// build main options before element iteration

		var v=cellval;

		opts = $.extend({}, $.jgrid.formatter, opts);



		if ($.fn.fmatter[formatType]){

			v = $.fn.fmatter[formatType](cellval, opts, rwd, act);

		}

		return v;

	};

	$.fmatter.util = {

		// Taken from YAHOO utils

		NumberFormat : function(nData,opts) {

			if(!$.fmatter.isNumber(nData)) {

				nData *= 1;

			}

			if($.fmatter.isNumber(nData)) {

				var bNegative = (nData < 0);

				var sOutput = nData + "";

				var sDecimalSeparator = (opts.decimalSeparator) ? opts.decimalSeparator : ".";

				var nDotIndex;

				if($.fmatter.isNumber(opts.decimalPlaces)) {

					// Round to the correct decimal place

					var nDecimalPlaces = opts.decimalPlaces;

					var nDecimal = Math.pow(10, nDecimalPlaces);

					sOutput = Math.round(nData*nDecimal)/nDecimal + "";

					nDotIndex = sOutput.lastIndexOf(".");

					if(nDecimalPlaces > 0) {

					// Add the decimal separator

						if(nDotIndex < 0) {

							sOutput += sDecimalSeparator;

							nDotIndex = sOutput.length-1;

						}

						// Replace the "."

						else if(sDecimalSeparator !== "."){

							sOutput = sOutput.replace(".",sDecimalSeparator);

						}

					// Add missing zeros

						while((sOutput.length - 1 - nDotIndex) < nDecimalPlaces) {

							sOutput += "0";

						}

					}

				}

				if(opts.thousandsSeparator) {

					var sThousandsSeparator = opts.thousandsSeparator;

					nDotIndex = sOutput.lastIndexOf(sDecimalSeparator);

					nDotIndex = (nDotIndex > -1) ? nDotIndex : sOutput.length;

					var sNewOutput = sOutput.substring(nDotIndex);

					var nCount = -1;

					for (var i=nDotIndex; i>0; i--) {

						nCount++;

						if ((nCount%3 === 0) && (i !== nDotIndex) && (!bNegative || (i > 1))) {

							sNewOutput = sThousandsSeparator + sNewOutput;

						}

						sNewOutput = sOutput.charAt(i-1) + sNewOutput;

					}

					sOutput = sNewOutput;

				}

				// Prepend prefix

				sOutput = (opts.prefix) ? opts.prefix + sOutput : sOutput;

				// Append suffix

				sOutput = (opts.suffix) ? sOutput + opts.suffix : sOutput;

				return sOutput;

				

			} else {

				return nData;

			}

		},

		// Tony Tomov

		// PHP implementation. Sorry not all options are supported.

		// Feel free to add them if you want

		DateFormat : function (format, date, newformat, opts)  {

			var	token = /\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,

			timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,

			timezoneClip = /[^-+\dA-Z]/g,

			msDateRegExp = new RegExp("^/Date\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\)/$"),

			msMatch = date.match(msDateRegExp),

			pad = function (value, length) {

				value = String(value);

				length = parseInt(length,10) || 2;

				while (value.length < length)  { value = '0' + value; }

				return value;

			},

			ts = {m : 1, d : 1, y : 1970, h : 0, i : 0, s : 0, u:0},

			timestamp=0, dM, k,hl,

			dateFormat=["i18n"];

			// Internationalization strings

			dateFormat.i18n = {

				dayNames: opts.dayNames,

				monthNames: opts.monthNames

			};

			if( format in opts.masks ) { format = opts.masks[format]; }

			if(date.constructor === Number) {

			    timestamp = new Date(date);

			} else if(date.constructor === Date) {

				timestamp = date;

				// Microsoft date format support

			} else if( msMatch !== null ) {

				timestamp = new Date(parseInt(msMatch[1], 10));

				if (msMatch[3]) {

					var offset = Number(msMatch[5]) * 60 + Number(msMatch[6]);

					offset *= ((msMatch[4] == '-') ? 1 : -1);

					offset -= timestamp.getTimezoneOffset();

					timestamp.setTime(Number(Number(timestamp) + (offset * 60 * 1000)));

				}

			} else {

				date = date.split(/[\\\/:_;.,\t\T\s-]/);

				format = format.split(/[\\\/:_;.,\t\T\s-]/);

				// parsing for month names

				for(k=0,hl=format.length;k<hl;k++){

					if(format[k] == 'M') {

						dM = $.inArray(date[k],dateFormat.i18n.monthNames);

						if(dM !== -1 && dM < 12){date[k] = dM+1;}

					}

					if(format[k] == 'F') {

						dM = $.inArray(date[k],dateFormat.i18n.monthNames);

						if(dM !== -1 && dM > 11){date[k] = dM+1-12;}

					}

					if(date[k]) {

						ts[format[k].toLowerCase()] = parseInt(date[k],10);

					}

				}

				if(ts.f) { ts.m = ts.f; }

				if( ts.m === 0 && ts.y === 0 && ts.d === 0) {

					return "&#160;" ;

				}

				ts.m = parseInt(ts.m,10)-1;

				var ty = ts.y;

				if (ty >= 70 && ty <= 99) { ts.y = 1900+ts.y; }

				else if (ty >=0 && ty <=69) { ts.y= 2000+ts.y; }

				timestamp = new Date(ts.y, ts.m, ts.d, ts.h, ts.i, ts.s, ts.u);

			}

			

			if( newformat in opts.masks )  {

				newformat = opts.masks[newformat];

			} else if ( !newformat ) {

				newformat = 'Y-m-d';

			}

			var 

				G = timestamp.getHours(),

				i = timestamp.getMinutes(),

				j = timestamp.getDate(),

				n = timestamp.getMonth() + 1,

				o = timestamp.getTimezoneOffset(),

				s = timestamp.getSeconds(),

				u = timestamp.getMilliseconds(),

				w = timestamp.getDay(),

				Y = timestamp.getFullYear(),

				N = (w + 6) % 7 + 1,

				z = (new Date(Y, n - 1, j) - new Date(Y, 0, 1)) / 86400000,

				flags = {

					// Day

					d: pad(j),

					D: dateFormat.i18n.dayNames[w],

					j: j,

					l: dateFormat.i18n.dayNames[w + 7],

					N: N,

					S: opts.S(j),

					//j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th',

					w: w,

					z: z,

					// Week

					W: N < 5 ? Math.floor((z + N - 1) / 7) + 1 : Math.floor((z + N - 1) / 7) || ((new Date(Y - 1, 0, 1).getDay() + 6) % 7 < 4 ? 53 : 52),

					// Month

					F: dateFormat.i18n.monthNames[n - 1 + 12],

					m: pad(n),

					M: dateFormat.i18n.monthNames[n - 1],

					n: n,

					t: '?',

					// Year

					L: '?',

					o: '?',

					Y: Y,

					y: String(Y).substring(2),

					// Time

					a: G < 12 ? opts.AmPm[0] : opts.AmPm[1],

					A: G < 12 ? opts.AmPm[2] : opts.AmPm[3],

					B: '?',

					g: G % 12 || 12,

					G: G,

					h: pad(G % 12 || 12),

					H: pad(G),

					i: pad(i),

					s: pad(s),

					u: u,

					// Timezone

					e: '?',

					I: '?',

					O: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),

					P: '?',

					T: (String(timestamp).match(timezone) || [""]).pop().replace(timezoneClip, ""),

					Z: '?',

					// Full Date/Time

					c: '?',

					r: '?',

					U: Math.floor(timestamp / 1000)

				};	

			return newformat.replace(token, function ($0) {

				return $0 in flags ? flags[$0] : $0.substring(1);

			});			

		}

	};

	$.fn.fmatter.defaultFormat = function(cellval, opts) {

		return ($.fmatter.isValue(cellval) && cellval!=="" ) ?  cellval : opts.defaultValue ? opts.defaultValue : "&#160;";

	};

	$.fn.fmatter.email = function(cellval, opts) {

		if(!$.fmatter.isEmpty(cellval)) {

			return "<a href=\"mailto:" + cellval + "\">" + cellval + "</a>";

		}else {

			return $.fn.fmatter.defaultFormat(cellval,opts );

		}

	};

	$.fn.fmatter.checkbox =function(cval, opts) {

		var op = $.extend({},opts.checkbox), ds;

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend({},op,opts.colModel.formatoptions);

		}

		if(op.disabled===true) {ds = "disabled=\"disabled\"";} else {ds="";}

		if($.fmatter.isEmpty(cval) || $.fmatter.isUndefined(cval) ) { cval = $.fn.fmatter.defaultFormat(cval,op); }

		cval=cval+""; cval=cval.toLowerCase();

		var bchk = cval.search(/(false|0|no|off)/i)<0 ? " checked='checked' " : "";

		return "<input type=\"checkbox\" " + bchk  + " value=\""+ cval+"\" offval=\"no\" "+ds+ "/>";

	};

	$.fn.fmatter.link = function(cellval, opts) {

		var op = {target:opts.target };

		var target = "";

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend({},op,opts.colModel.formatoptions);

		}

		if(op.target) {target = 'target=' + op.target;}

		if(!$.fmatter.isEmpty(cellval)) {

			return "<a "+target+" href=\"" + cellval + "\">" + cellval + "</a>";

		}else {

			return $.fn.fmatter.defaultFormat(cellval,opts);

		}

	};

	$.fn.fmatter.showlink = function(cellval, opts) {

		var op = {baseLinkUrl: opts.baseLinkUrl,showAction:opts.showAction, addParam: opts.addParam || "", target: opts.target, idName: opts.idName },

		target = "", idUrl;

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend({},op,opts.colModel.formatoptions);

		}

		if(op.target) {target = 'target=' + op.target;}

		idUrl = op.baseLinkUrl+op.showAction + '?'+ op.idName+'='+opts.rowId+op.addParam;

		if($.fmatter.isString(cellval) || $.fmatter.isNumber(cellval)) {	//add this one even if its blank string

			return "<a "+target+" href=\"" + idUrl + "\">" + cellval + "</a>";

		}else {

			return $.fn.fmatter.defaultFormat(cellval,opts);

		}

	};

	$.fn.fmatter.integer = function(cellval, opts) {

		var op = $.extend({},opts.integer);

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend({},op,opts.colModel.formatoptions);

		}

		if($.fmatter.isEmpty(cellval)) {

			return op.defaultValue;

		}

		return $.fmatter.util.NumberFormat(cellval,op);

	};

	$.fn.fmatter.number = function (cellval, opts) {

		var op = $.extend({},opts.number);

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend({},op,opts.colModel.formatoptions);

		}

		if($.fmatter.isEmpty(cellval)) {

			return op.defaultValue;

		}

		return $.fmatter.util.NumberFormat(cellval,op);

	};

	$.fn.fmatter.currency = function (cellval, opts) {

		var op = $.extend({},opts.currency);

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend({},op,opts.colModel.formatoptions);

		}

		if($.fmatter.isEmpty(cellval)) {

			return op.defaultValue;

		}

		return $.fmatter.util.NumberFormat(cellval,op);

	};

	$.fn.fmatter.date = function (cellval, opts, rwd, act) {

		var op = $.extend({},opts.date);

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend({},op,opts.colModel.formatoptions);

		}

		if(!op.reformatAfterEdit && act=='edit'){

			return $.fn.fmatter.defaultFormat(cellval, opts);

		} else if(!$.fmatter.isEmpty(cellval)) {

			return  $.fmatter.util.DateFormat(op.srcformat,cellval,op.newformat,op);

		} else {

			return $.fn.fmatter.defaultFormat(cellval, opts);

		}

	};

	$.fn.fmatter.select = function (cellval,opts, rwd, act) {

		// jqGrid specific

		cellval = cellval + "";

		var oSelect = false, ret=[];

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)){

			oSelect= opts.colModel.formatoptions.value;

		} else if(!$.fmatter.isUndefined(opts.colModel.editoptions)){

			oSelect= opts.colModel.editoptions.value;

		}

		if (oSelect) {

			var	msl =  opts.colModel.editoptions.multiple === true ? true : false,

			scell = [], sv;

			if(msl) {scell = cellval.split(",");scell = $.map(scell,function(n){return $.trim(n);});}

			if ($.fmatter.isString(oSelect)) {

				// mybe here we can use some caching with care ????

				var so = oSelect.split(";"), j=0;

				for(var i=0; i<so.length;i++){

					sv = so[i].split(":");

					if(sv.length > 2 ) {

						sv[1] = jQuery.map(sv,function(n,i){if(i>0) { return n; } }).join(":");

					}

					if(msl) {

						if(jQuery.inArray(sv[0],scell)>-1) {

							ret[j] = sv[1];

							j++;

						}

					} else if($.trim(sv[0])==$.trim(cellval)) {

						ret[0] = sv[1];

						break;

					}

				}

			} else if($.fmatter.isObject(oSelect)) {

				// this is quicker

				if(msl) {

					ret = jQuery.map(scell, function(n, i){

						return oSelect[n];

					});

				} else {

					ret[0] = oSelect[cellval] || "";

				}

			}

		}

		cellval = ret.join(", ");

		return  cellval === "" ? $.fn.fmatter.defaultFormat(cellval,opts) : cellval;

	};

	$.fn.fmatter.rowactions = function(rid,gid,act,pos) {

		var op ={

			keys:false,

			editbutton:true,

			delbutton:true,

			onEdit : null, 

			onSuccess: null, 

			afterSave:null,

			onError: null,

			afterRestore: null,

			extraparam: {oper:'edit'},

			url: null,

			delOptions: {}

		},

		cm = $('#'+gid)[0].p.colModel[pos];

		if(!$.fmatter.isUndefined(cm.formatoptions)) {

			op = $.extend(op,cm.formatoptions);

		}

		var saverow = function( rowid)	{

			if(op.afterSave) op.afterSave(rowid);

			$("tr#"+rid+" div.ui-inline-edit, "+"tr#"+rid+" div.ui-inline-del","#"+gid).show();

			$("tr#"+rid+" div.ui-inline-save, "+"tr#"+rid+" div.ui-inline-cancel","#"+gid).hide();

		},

		restorerow = function( rowid)	{

			if(op.afterRestore) op.afterRestore(rowid);

			$("tr#"+rid+" div.ui-inline-edit, "+"tr#"+rid+" div.ui-inline-del","#"+gid).show();

			$("tr#"+rid+" div.ui-inline-save, "+"tr#"+rid+" div.ui-inline-cancel","#"+gid).hide();

		};



		switch(act)

		{

			case 'edit':

				$('#'+gid).jqGrid('editRow',rid, op.keys, op.onEdit, op.onSuccess, op.url, op.extraparam, saverow, op.onError,restorerow);

				$("tr#"+rid+" div.ui-inline-edit, "+"tr#"+rid+" div.ui-inline-del","#"+gid).hide();

				$("tr#"+rid+" div.ui-inline-save, "+"tr#"+rid+" div.ui-inline-cancel","#"+gid).show();

				break;

			case 'save':

				$('#'+gid).jqGrid('saveRow',rid,  op.onSuccess,op.url, op.extraparam, saverow, op.onError,restorerow);

				$("tr#"+rid+" div.ui-inline-edit, "+"tr#"+rid+" div.ui-inline-del","#"+gid).show();

				$("tr#"+rid+" div.ui-inline-save, "+"tr#"+rid+" div.ui-inline-cancel","#"+gid).hide();

				break;

			case 'cancel' :

				$('#'+gid).jqGrid('restoreRow',rid, restorerow);

				$("tr#"+rid+" div.ui-inline-edit, "+"tr#"+rid+" div.ui-inline-del","#"+gid).show();

				$("tr#"+rid+" div.ui-inline-save, "+"tr#"+rid+" div.ui-inline-cancel","#"+gid).hide();

				break;

			case 'del':

				$('#'+gid).jqGrid('delGridRow',rid, op.delOptions);

				break;

		}

	};

	$.fn.fmatter.actions = function(cellval,opts, rwd) {

		var op ={keys:false, editbutton:true, delbutton:true};

		if(!$.fmatter.isUndefined(opts.colModel.formatoptions)) {

			op = $.extend(op,opts.colModel.formatoptions);

		}

		var rowid = opts.rowId, str="",ocl;

		if(typeof(rowid) =='undefined' || $.fmatter.isEmpty(rowid)) { return ""; }

		if(op.editbutton){

			ocl = "onclick=$.fn.fmatter.rowactions('"+rowid+"','"+opts.gid+"','edit',"+opts.pos+");";

			str =str+ "<div style='margin-left:8px;'><div title='"+$.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+ocl+"><span class='ui-icon ui-icon-pencil'></span></div>";

		}

		if(op.delbutton) {

			ocl = "onclick=$.fn.fmatter.rowactions('"+rowid+"','"+opts.gid+"','del',"+opts.pos+");";

			str = str+"<div title='"+$.jgrid.nav.deltitle+"' style='float:left;margin-left:5px;' class='ui-pg-div ui-inline-del' "+ocl+"><span class='ui-icon ui-icon-trash'></span></div>";

		}

		ocl = "onclick=$.fn.fmatter.rowactions('"+rowid+"','"+opts.gid+"','save',"+opts.pos+");";

		str = str+"<div title='"+$.jgrid.edit.bSubmit+"' style='float:left;display:none' class='ui-pg-div ui-inline-save'><span class='ui-icon ui-icon-disk' "+ocl+"></span></div>";

		ocl = "onclick=$.fn.fmatter.rowactions('"+rowid+"','"+opts.gid+"','cancel',"+opts.pos+");";

		str = str+"<div title='"+$.jgrid.edit.bCancel+"' style='float:left;display:none;margin-left:5px;' class='ui-pg-div ui-inline-cancel'><span class='ui-icon ui-icon-cancel' "+ocl+"></span></div></div>";

		return str;

	};

	$.unformat = function (cellval,options,pos,cnt) {

		// specific for jqGrid only

		var ret, formatType = options.colModel.formatter,

		op =options.colModel.formatoptions || {}, sep,

		re = /([\.\*\_\'\(\)\{\}\+\?\\])/g,

		unformatFunc = options.colModel.unformat||($.fn.fmatter[formatType] && $.fn.fmatter[formatType].unformat);

		if(typeof unformatFunc !== 'undefined' && $.isFunction(unformatFunc) ) {

			ret = unformatFunc($(cellval).text(), options, cellval);

		} else if(!$.fmatter.isUndefined(formatType) && $.fmatter.isString(formatType) ) {

			var opts = $.jgrid.formatter || {}, stripTag;

			switch(formatType) {

				case 'integer' :

					op = $.extend({},opts.integer,op);

					sep = op.thousandsSeparator.replace(re,"\\$1");

					stripTag = new RegExp(sep, "g");

					ret = $(cellval).text().replace(stripTag,'');

					break;

				case 'number' :

					op = $.extend({},opts.number,op);

					sep = op.thousandsSeparator.replace(re,"\\$1");

					stripTag = new RegExp(sep, "g");

					ret = $(cellval).text().replace(stripTag,"").replace(op.decimalSeparator,'.');

					break;

				case 'currency':

					op = $.extend({},opts.currency,op);

					sep = op.thousandsSeparator.replace(re,"\\$1");

					stripTag = new RegExp(sep, "g");

					ret = $(cellval).text().replace(stripTag,'').replace(op.decimalSeparator,'.').replace(op.prefix,'').replace(op.suffix,'');

					break;

				case 'checkbox':

					var cbv = (options.colModel.editoptions) ? options.colModel.editoptions.value.split(":") : ["Yes","No"];

					ret = $('input',cellval).attr("checked") ? cbv[0] : cbv[1];

					break;

				case 'select' :

					ret = $.unformat.select(cellval,options,pos,cnt);

					break;

				case 'actions':

					return "";

				default:

					ret= $(cellval).text();

			}

		}

		return ret ? ret : cnt===true ? $(cellval).text() : $.jgrid.htmlDecode($(cellval).html());

	};

	$.unformat.select = function (cellval,options,pos,cnt) {

		// Spacial case when we have local data and perform a sort

		// cnt is set to true only in sortDataArray

		var ret = [];

		var cell = $(cellval).text();

		if(cnt===true) { return cell; }

		var op = $.extend({},options.colModel.editoptions);

		if(op.value){

			var oSelect = op.value,

			msl =  op.multiple === true ? true : false,

			scell = [], sv;

			if(msl) { scell = cell.split(","); scell = $.map(scell,function(n){return $.trim(n);}); }

			if ($.fmatter.isString(oSelect)) {

				var so = oSelect.split(";"), j=0;

				for(var i=0; i<so.length;i++){

					sv = so[i].split(":");

					if(sv.length > 2 ) {

						sv[1] = jQuery.map(sv,function(n,i){if(i>0) { return n; } }).join(":");

					}					

					if(msl) {

						if(jQuery.inArray(sv[1],scell)>-1) {

							ret[j] = sv[0];

							j++;

						}

					} else if($.trim(sv[1])==$.trim(cell)) {

						ret[0] = sv[0];

						break;

					}

				}

			} else if($.fmatter.isObject(oSelect) || $.isArray(oSelect) ){

				if(!msl) { scell[0] =  cell; }

				ret = jQuery.map(scell, function(n){

					var rv;

					$.each(oSelect, function(i,val){

						if (val == n) {

							rv = i;

							return false;

						}

					});

					if( typeof(rv) != 'undefined' ) { return rv; }

				});

			}

			return ret.join(", ");

		} else {

			return cell || "";

		}

	};

	$.unformat.date = function (cellval, opts) {

		var op = $.jgrid.formatter.date || {};

		if(!$.fmatter.isUndefined(opts.formatoptions)) {

			op = $.extend({},op,opts.formatoptions);

		}		

		if(!$.fmatter.isEmpty(cellval)) {

			return  $.fmatter.util.DateFormat(op.newformat,cellval,op.srcformat,op);

		} else {

			return $.fn.fmatter.defaultFormat(cellval, opts);

		}

	};

})(jQuery);/*

	The below work is licensed under Creative Commons GNU LGPL License.



	Original work:



	License:     http://creativecommons.org/licenses/LGPL/2.1/

	Author:      Stefan Goessner/2006

	Web:         http://goessner.net/ 



	Modifications made:



	Version:     0.9-p5

	Description: Restructured code, JSLint validated (no strict whitespaces),

	             added handling of empty arrays, empty strings, and int/floats values.

	Author:      Michael Schøler/2008-01-29

	Web:         http://michael.hinnerup.net/blog/2008/01/26/converting-json-to-xml-and-xml-to-json/

	

	Description: json2xml added support to convert functions as CDATA

	             so it will be easy to write characters that cause some problems when convert

	Author:      Tony Tomov

*/



/*global alert */

var xmlJsonClass = {

	// Param "xml": Element or document DOM node.

	// Param "tab": Tab or indent string for pretty output formatting omit or use empty string "" to supress.

	// Returns:     JSON string

	xml2json: function(xml, tab) {

		if (xml.nodeType === 9) {

			// document node

			xml = xml.documentElement;

		}

		var nws = this.removeWhite(xml);

		var obj = this.toObj(nws);

		var json = this.toJson(obj, xml.nodeName, "\t");

		return "{\n" + tab + (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) + "\n}";

	},



	// Param "o":   JavaScript object

	// Param "tab": tab or indent string for pretty output formatting omit or use empty string "" to supress.

	// Returns:     XML string

	json2xml: function(o, tab) {

		var toXml = function(v, name, ind) {

			var xml = "";

			var i, n;

			if (v instanceof Array) {

				if (v.length === 0) {

					xml += ind + "<"+name+">__EMPTY_ARRAY_</"+name+">\n";

				}

				else {

					for (i = 0, n = v.length; i < n; i += 1) {

						var sXml = ind + toXml(v[i], name, ind+"\t") + "\n";

						xml += sXml;

					}

				}

			}

			else if (typeof(v) === "object") {

				var hasChild = false;

				xml += ind + "<" + name;

				var m;

				for (m in v) if (v.hasOwnProperty(m)) {

					if (m.charAt(0) === "@") {

						xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";

					}

					else {

						hasChild = true;

					}

				}

				xml += hasChild ? ">" : "/>";

				if (hasChild) {

					for (m in v) if (v.hasOwnProperty(m)) {

						if (m === "#text") {

							xml += v[m];

						}

						else if (m === "#cdata") {

							xml += "<![CDATA[" + v[m] + "]]>";

						}

						else if (m.charAt(0) !== "@") {

							xml += toXml(v[m], m, ind+"\t");

						}

					}

					xml += (xml.charAt(xml.length - 1) === "\n" ? ind : "") + "</" + name + ">";

				}

			}

			else if (typeof(v) === "function") {

				xml += ind + "<" + name + ">" + "<![CDATA[" + v + "]]>" + "</" + name + ">";

			}

			else {

				if (v.toString() === "\"\"" || v.toString().length === 0) {

					xml += ind + "<" + name + ">__EMPTY_STRING_</" + name + ">";

				} 

				else {

					xml += ind + "<" + name + ">" + v.toString() + "</" + name + ">";

				}

			}

			return xml;

		};

		var xml = "";

		var m;

		for (m in o) if (o.hasOwnProperty(m)) {

			xml += toXml(o[m], m, "");

		}

		return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");

	},

	// Internal methods

	toObj: function(xml) {

		var o = {};

		var FuncTest = /function/i;

		if (xml.nodeType === 1) {

			// element node ..

			if (xml.attributes.length) {

				// element with attributes ..

				var i;

				for (i = 0; i < xml.attributes.length; i += 1) {

					o["@" + xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue || "").toString();

				}

			}

			if (xml.firstChild) {

				// element has child nodes ..

				var textChild = 0, cdataChild = 0, hasElementChild = false;

				var n;

				for (n = xml.firstChild; n; n = n.nextSibling) {

					if (n.nodeType === 1) {

						hasElementChild = true;

					}

					else if (n.nodeType === 3 && n.nodeValue.match(/[^ \f\n\r\t\v]/)) {

						// non-whitespace text

						textChild += 1;

					}

					else if (n.nodeType === 4) {

						// cdata section node

						cdataChild += 1;

					}

				}

				if (hasElementChild) {

					if (textChild < 2 && cdataChild < 2) {

						// structured element with evtl. a single text or/and cdata node ..

						this.removeWhite(xml);

						for (n = xml.firstChild; n; n = n.nextSibling) {

							if (n.nodeType === 3) {

								// text node

								o["#text"] = this.escape(n.nodeValue);

							}

							else if (n.nodeType === 4) {

								// cdata node

								if (FuncTest.test(n.nodeValue)) {

									o[n.nodeName] = [o[n.nodeName], n.nodeValue];

								} else {

									o["#cdata"] = this.escape(n.nodeValue);

								}

							}

							else if (o[n.nodeName]) {

								// multiple occurence of element ..

								if (o[n.nodeName] instanceof Array) {

									o[n.nodeName][o[n.nodeName].length] = this.toObj(n);

								}

								else {

									o[n.nodeName] = [o[n.nodeName], this.toObj(n)];

								}

							}

							else {

								// first occurence of element ..

								o[n.nodeName] = this.toObj(n);

							}

						}

					}

					else {

						// mixed content

						if (!xml.attributes.length) {

							o = this.escape(this.innerXml(xml));

						}

						else {

							o["#text"] = this.escape(this.innerXml(xml));

						}

					}

				}

				else if (textChild) {

					// pure text

					if (!xml.attributes.length) {

						o = this.escape(this.innerXml(xml));

						if (o === "__EMPTY_ARRAY_") {

							o = "[]";

						} else if (o === "__EMPTY_STRING_") {

							o = "";

						}

					}

					else {

						o["#text"] = this.escape(this.innerXml(xml));

					}

				}

				else if (cdataChild) {

					// cdata

					if (cdataChild > 1) {

						o = this.escape(this.innerXml(xml));

					}

					else {

						for (n = xml.firstChild; n; n = n.nextSibling) {

							if(FuncTest.test(xml.firstChild.nodeValue)) {

								o = xml.firstChild.nodeValue;

								break;

							} else {

								o["#cdata"] = this.escape(n.nodeValue);

							}

						}

					}

				}

			}

			if (!xml.attributes.length && !xml.firstChild) {

				o = null;

			}

		}

		else if (xml.nodeType === 9) {

			// document.node

			o = this.toObj(xml.documentElement);

		}

		else {

			alert("unhandled node type: " + xml.nodeType);

		}

		return o;

	},

	toJson: function(o, name, ind) {

		var json = name ? ("\"" + name + "\"") : "";

		if (o === "[]") {

			json += (name ? ":[]" : "[]");

		}

		else if (o instanceof Array) {

			var n, i, ar=[];

			for (i = 0, n = o.length; i < n; i += 1) {

				ar[i] = this.toJson(o[i], "", ind + "\t");

			}

			json += (name ? ":[" : "[") + (ar.length > 1 ? ("\n" + ind + "\t" + ar.join(",\n" + ind + "\t") + "\n" + ind) : ar.join("")) + "]";

		}

		else if (o === null) {

			json += (name && ":") + "null";

		}

		else if (typeof(o) === "object") {

			var arr = [];

			var m;

			for (m in o) if (o.hasOwnProperty(m)) {

				arr[arr.length] = this.toJson(o[m], m, ind + "\t");

			}

			json += (name ? ":{" : "{") + (arr.length > 1 ? ("\n" + ind + "\t" + arr.join(",\n" + ind + "\t") + "\n" + ind) : arr.join("")) + "}";

		}

		else if (typeof(o) === "string") {

			var objRegExp  = /(^-?\d+\.?\d*$)/;

			var FuncTest = /function/i;

			var os = o.toString();

			if (objRegExp.test(os) || FuncTest.test(os) || os==="false" || os==="true") {

				// int or float

				json += (name && ":") + os;

			} 

			else {

				json += (name && ":") + "\"" + o + "\"";

			}

		}

		else {

			json += (name && ":") + o.toString();

		}

		return json;

	},

	innerXml: function(node) {

		var s = "";

		if ("innerHTML" in node) {

			s = node.innerHTML;

		}

		else {

			var asXml = function(n) {

				var s = "", i;

				if (n.nodeType === 1) {

					s += "<" + n.nodeName;

					for (i = 0; i < n.attributes.length; i += 1) {

						s += " " + n.attributes[i].nodeName + "=\"" + (n.attributes[i].nodeValue || "").toString() + "\"";

					}

					if (n.firstChild) {

						s += ">";

						for (var c = n.firstChild; c; c = c.nextSibling) {

							s += asXml(c);

						}

						s += "</" + n.nodeName + ">";

					}

					else {

						s += "/>";

					}

				}

				else if (n.nodeType === 3) {

					s += n.nodeValue;

				}

				else if (n.nodeType === 4) {

					s += "<![CDATA[" + n.nodeValue + "]]>";

				}

				return s;

			};

			for (var c = node.firstChild; c; c = c.nextSibling) {

				s += asXml(c);

			}

		}

		return s;

	},

	escape: function(txt) {

		return txt.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r');

	},

	removeWhite: function(e) {

		e.normalize();

		var n;

		for (n = e.firstChild; n; ) {

			if (n.nodeType === 3) {

				// text node

				if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) {

					// pure whitespace text node

					var nxt = n.nextSibling;

					e.removeChild(n);

					n = nxt;

				}

				else {

					n = n.nextSibling;

				}

			}

			else if (n.nodeType === 1) {

				// element node

				this.removeWhite(n);

				n = n.nextSibling;

			}

			else {

				// any other node

				n = n.nextSibling;

			}

		}

		return e;

	}

};/* Plugin:      searchFilter v1.2.9

 * Author:      Kasey Speakman (kasey@cornerspeed.com)

 * License:     Dual Licensed, MIT and GPL v2 (http://www.gnu.org/licenses/gpl-2.0.html)

 *

 * REQUIREMENTS:

 *    jQuery 1.3+           (http://jquery.com/)

 *    A Themeroller Theme   (http://jqueryui.com/themeroller/)

 *

 * SECURITY WARNING

 *    You should always implement server-side checking to ensure that

 *    the query will fail when forged/invalid data is received.

 *    Clever users can send any value they want through JavaScript and HTTP POST/GET.

 *

 * THEMES

 *    Simply include the CSS file for your Themeroller theme.

 *

 * DESCRIPTION

 *     This plugin creates a new searchFilter object in the specified container

 *

 * INPUT TYPE

 *     fields:  an array of field objects. each object has the following properties:

 *              text: a string containing the display name of the field (e.g. "Field 1")

 *              itemval: a string containing the actual field name (e.g. "field1")

 *              optional properties:

 *                  ops: an array of operators in the same format as jQuery.fn.searchFilter.defaults.operators

 *                       that is: [ { op: 'gt', text: 'greater than'}, { op:'lt', text: 'less than'}, ... ]

 *                       if not specified, the passed-in options used, and failting that, jQuery.fn.searchFilter.defaults.operators will be used

 *                  *** NOTE ***

 *                  Specifying a dataUrl or dataValues property means that a <select ...> (drop-down-list) will be generated

 *                  instead of a text input <input type='text'.../> where the user would normally type in their search data

 *                  ************

 *                  dataUrl: a url that will return the html select for this field, this url will only be called once for this field

 *                  dataValues: the possible values for this field in the form [ { text: 'Data Display Text', value: 'data_actual_value' }, { ... } ]

 *                  dataInit: a function that you can use to initialize the data field. this function is passed the jQuery-fied data element

 *                  dataEvents: list of events to apply to the data element. uses $("#id").bind(type, [data], fn) to bind events to data element

 *              *** JSON of this object could look like this: ***

 *               var fields = [

 *                 {

 *                   text: 'Field Display Name',

 *                   itemval: 'field_actual_name',

 *                   // below this are optional values

 *                   ops: [ // this format is the same as jQuery.fn.searchFilter.defaults.operators

 *                     { op: 'gt', text: 'greater than' },

 *                     { op: 'lt', text: 'less than' }

 *                   ],

 *                   dataUrl: 'http://server/path/script.php?propName=propValue', // using this creates a select for the data input instead of an input type='text'

 *                   dataValues: [ // using this creates a select for the data input instead of an input type='text'

 *                     { text: 'Data Value Display Name', value: 'data_actual_value' },

 *                     { ... }

 *                   ],

 *                   dataInit: function(jElem) { jElem.datepicker(options); },

 *                   dataEvents: [ // these are the same options that you pass to $("#id").bind(type, [data], fn)

 *                     { type: 'click', data: { i: 7 }, fn: function(e) { console.log(e.data.i); } },

 *                     { type: 'keypress', fn: function(e) { console.log('keypress'); } }

 *                   ]

 *                 },

 *                 { ... }

 *               ]

 *     options: name:value properties containing various creation options

 *              see jQuery.fn.searchFilter.defaults for the overridable options

 *

 * RETURN TYPE: This plugin returns a SearchFilter object, which has additional SearchFilter methods:

 *     Methods

 *         add:    Adds a filter. added to the end of the list unless a jQuery event object or valid row number is passed.

 *         del:    Removes a filter. removed from the end of the list unless a jQuery event object or valid row number is passed.

 *         reset:  resets filters back to original state (only one blank filter), and calls onReset

 *         search: puts the search rules into an object and calls onSearch with it

 *         close:  calls the onClose event handler

 *

 * USAGE

 *     HTML

 *         <head>

 *             ...

 *             <script src="path/to/jquery.min.js" type="text/javascript"></script>

 *             <link href="path/to/themeroller.css" rel="Stylesheet" type="text/css" />

 *             <script src="path/to/jquery.searchFilter.js" type="text/javascript"></script>

 *             <link href="path/to/jquery.searchFilter.css" rel="Stylesheet" type="text/css" />

 *             ...

 *         </head>

 *         <body>

 *             ...

 *             <div id='mySearch'></div>

 *             ...

 *         </body>

 *     JQUERY

 *         Methods

 *             initializing: $("#mySearch").searchFilter([{text: "Field 1", value: "field1"},{text: "Field 2", value: "field2"}], {onSearch: myFilterRuleReceiverFn, onReset: myFilterResetFn });

 *         Manual Methods (there's no need to call these methods unless you are trying to manipulate searchFilter with script)

 *             add:          $("#mySearch").searchFilter().add();     // appends a blank filter

 *                           $("#mySearch").searchFilter().add(0);    // copies the first filter as second

 *             del:          $("#mySearch").searchFilter().del();     // removes the bottom filter

 *                           $("#mySearch").searchFilter().del(1);    // removes the second filter

 *             search:       $("#mySearch").searchFilter().search();  // invokes onSearch, passing it a ruleGroup object

 *             reset:        $("#mySearch").searchFilter().reset();   // resets rules and invokes onReset

 *             close:        $("#mySearch").searchFilter().close();   // without an onClose handler, equivalent to $("#mySearch").hide();

 * 

 * NOTE: You can get the jQuery object back from the SearchFilter object by chaining .$

 *     Example

 *         $("#mySearch").searchFilter().add().add().reset().$.hide();

 *     Verbose Example

 *         $("#mySearch")      // gets jQuery object for the HTML element with id="mySearch"

 *             .searchFilter() // gets the SearchFilter object for an existing search filter

 *             .add()          // adds a new filter to the end of the list

 *             .add()          // adds another new filter to the end of the list

 *             .reset()        // resets filters back to original state, triggers onReset

 *             .$              // returns jQuery object for $("#mySearch")

 *             .hide();        // equivalent to $("#mySearch").hide();

 */



jQuery.fn.searchFilter = function(fields, options) {



    function SearchFilter(jQ, fields, options) {





        //---------------------------------------------------------------

        // PUBLIC VARS

        //---------------------------------------------------------------



        this.$ = jQ; // makes the jQuery object available as .$ from the return value





        //---------------------------------------------------------------

        // PUBLIC FUNCTIONS

        //---------------------------------------------------------------



        this.add = function(i) {

            if (i == null) jQ.find(".ui-add-last").click();

            else jQ.find(".sf:eq(" + i + ") .ui-add").click();

            return this;

        };



        this.del = function(i) {

            if (i == null) jQ.find(".sf:last .ui-del").click();

            else jQ.find(".sf:eq(" + i + ") .ui-del").click();

            return this;

        };



        this.search = function(e) {

            jQ.find(".ui-search").click();

            return this;

        };



        this.reset = function(o) {

            if(o===undefined) o = false;

            jQ.find(".ui-reset").trigger('click',[o]);

            return this;

        };



        this.close = function() {

            jQ.find(".ui-closer").click();

            return this;

        };







        //---------------------------------------------------------------

        // "CONSTRUCTOR" (in air quotes)

        //---------------------------------------------------------------



        if (fields != null) { // type coercion matches undefined as well as null





            //---------------------------------------------------------------

            // UTILITY FUNCTIONS

            //---------------------------------------------------------------



            function hover() {

                jQuery(this).toggleClass("ui-state-hover");

                return false;

            }



            function active(e) {

                jQuery(this).toggleClass("ui-state-active", (e.type == "mousedown"));

                return false;

            }



            function buildOpt(value, text) {

                return "<option value='" + value + "'>" + text + "</option>";

            }



            function buildSel(className, options, isHidden) {

                return "<select class='" + className + "'" + (isHidden ? " style='display:none;'" : "") + ">" + options + "</select>";

            }



            function initData(selector, fn) {

                var jElem = jQ.find("tr.sf td.data " + selector);

                if (jElem[0] != null)

                    fn(jElem);

            }



            function bindDataEvents(selector, events) {

                var jElem = jQ.find("tr.sf td.data " + selector);

                if (jElem[0] != null) {

                    jQuery.each(events, function() {

                        if (this.data != null)

                            jElem.bind(this.type, this.data, this.fn);

                        else

                            jElem.bind(this.type, this.fn);

                    });

                }

            }





            //---------------------------------------------------------------

            // SUPER IMPORTANT PRIVATE VARS

            //---------------------------------------------------------------



            // copies jQuery.fn.searchFilter.defaults.options properties onto an empty object, then options onto that

            var opts = jQuery.extend({}, jQuery.fn.searchFilter.defaults, options);



            // this is keeps track of the last asynchronous setup

            var highest_late_setup = -1;





            //---------------------------------------------------------------

            // CREATION PROCESS STARTS

            //---------------------------------------------------------------



            // generate the global ops

            var gOps_html = "";

            jQuery.each(opts.groupOps, function() { gOps_html += buildOpt(this.op, this.text); });

            gOps_html = "<select name='groupOp'>" + gOps_html + "</select>";



            /* original content - doesn't minify very well

            jQ

            .html("") // clear any old content

            .addClass("ui-searchFilter") // add classes

            .append( // add content

            "\

            <div class='ui-widget-overlay' style='z-index: -1'>&nbsp;</div>\

            <table class='ui-widget-content ui-corner-all'>\

            <thead>\

            <tr>\

            <td colspan='5' class='ui-widget-header ui-corner-all' style='line-height: 18px;'>\

            <div class='ui-closer ui-state-default ui-corner-all ui-helper-clearfix' style='float: right;'>\

            <span class='ui-icon ui-icon-close'></span>\

            </div>\

            " + opts.windowTitle + "\

            </td>\

            </tr>\

            </thead>\

            <tbody>\

            <tr class='sf'>\

            <td class='fields'></td>\

            <td class='ops'></td>\

            <td class='data'></td>\

            <td><div class='ui-del ui-state-default ui-corner-all'><span class='ui-icon ui-icon-minus'></span></div></td>\

            <td><div class='ui-add ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plus'></span></div></td>\

            </tr>\

            <tr>\

            <td colspan='5' class='divider'><div>&nbsp;</div></td>\

            </tr>\

            </tbody>\

            <tfoot>\

            <tr>\

            <td colspan='3'>\

            <span class='ui-reset ui-state-default ui-corner-all' style='display: inline-block; float: left;'><span class='ui-icon ui-icon-arrowreturnthick-1-w' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.resetText + "</span></span>\

            <span class='ui-search ui-state-default ui-corner-all' style='display: inline-block; float: right;'><span class='ui-icon ui-icon-search' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.searchText + "</span></span>\

            <span class='matchText'>" + opts.matchText + "</span> \

            " + gOps_html + " \

            <span class='rulesText'>" + opts.rulesText + "</span>\

            </td>\

            <td>&nbsp;</td>\

            <td><div class='ui-add-last ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plusthick'></span></div></td>\

            </tr>\

            </tfoot>\

            </table>\

            ");

            /* end hard-to-minify code */

            /* begin easier to minify code */

            jQ.html("").addClass("ui-searchFilter").append("<div class='ui-widget-overlay' style='z-index: -1'>&#160;</div><table class='ui-widget-content ui-corner-all'><thead><tr><td colspan='5' class='ui-widget-header ui-corner-all' style='line-height: 18px;'><div class='ui-closer ui-state-default ui-corner-all ui-helper-clearfix' style='float: right;'><span class='ui-icon ui-icon-close'></span></div>" + opts.windowTitle + "</td></tr></thead><tbody><tr class='sf'><td class='fields'></td><td class='ops'></td><td class='data'></td><td><div class='ui-del ui-state-default ui-corner-all'><span class='ui-icon ui-icon-minus'></span></div></td><td><div class='ui-add ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plus'></span></div></td></tr><tr><td colspan='5' class='divider'><hr class='ui-widget-content' style='margin:1px'/></td></tr></tbody><tfoot><tr><td colspan='3'><span class='ui-reset ui-state-default ui-corner-all' style='display: inline-block; float: left;'><span class='ui-icon ui-icon-arrowreturnthick-1-w' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.resetText + "</span></span><span class='ui-search ui-state-default ui-corner-all' style='display: inline-block; float: right;'><span class='ui-icon ui-icon-search' style='float: left;'></span><span style='line-height: 18px; padding: 0 7px 0 3px;'>" + opts.searchText + "</span></span><span class='matchText'>" + opts.matchText + "</span> " + gOps_html + " <span class='rulesText'>" + opts.rulesText + "</span></td><td>&#160;</td><td><div class='ui-add-last ui-state-default ui-corner-all'><span class='ui-icon ui-icon-plusthick'></span></div></td></tr></tfoot></table>");

            /* end easier-to-minify code */



            var jRow = jQ.find("tr.sf");

            var jFields = jRow.find("td.fields");

            var jOps = jRow.find("td.ops");

            var jData = jRow.find("td.data");



            // generate the defaults

            var default_ops_html = "";

            jQuery.each(opts.operators, function() { default_ops_html += buildOpt(this.op, this.text); });

            default_ops_html = buildSel("default", default_ops_html, true);

            jOps.append(default_ops_html);

            var default_data_html = "<input type='text' class='default' style='display:none;' />";

            jData.append(default_data_html);



            // generate the field list as a string

            var fields_html = "";

            var has_custom_ops = false;

            var has_custom_data = false;

            jQuery.each(fields, function(i) {

                var field_num = i;

                fields_html += buildOpt(this.itemval, this.text);

                // add custom ops if they exist

                if (this.ops != null) {

                    has_custom_ops = true;

                    var custom_ops = "";

                    jQuery.each(this.ops, function() { custom_ops += buildOpt(this.op, this.text); });

                    custom_ops = buildSel("field" + field_num, custom_ops, true);

                    jOps.append(custom_ops);

                }

                // add custom data if it is given

                if (this.dataUrl != null) {

                    if (i > highest_late_setup) highest_late_setup = i;

                    has_custom_data = true;

                    var dEvents = this.dataEvents;

                    var iEvent = this.dataInit;

                    var bs = this.buildSelect;

                    jQuery.ajax(jQuery.extend({

                        url : this.dataUrl,

                        complete: function(data) {

                            var $d;

                            if(bs != null) $d =jQuery("<div />").append(bs(data));

                            else $d = jQuery("<div />").append(data.responseText);

                            $d.find("select").addClass("field" + field_num).hide();

                            jData.append($d.html());

                            if (iEvent) initData(".field" + i, iEvent);

                            if (dEvents) bindDataEvents(".field" + i, dEvents);

                            if (i == highest_late_setup) { // change should get called no more than twice when this searchFilter is constructed

                                jQ.find("tr.sf td.fields select[name='field']").change();

                            }

                        }

                    },opts.ajaxSelectOptions));

                } else if (this.dataValues != null) {

                    has_custom_data = true;

                    var custom_data = "";

                    jQuery.each(this.dataValues, function() { custom_data += buildOpt(this.value, this.text); });

                    custom_data = buildSel("field" + field_num, custom_data, true);

                    jData.append(custom_data);

                } else if (this.dataEvents != null || this.dataInit != null) {

                    has_custom_data = true;

                    var custom_data = "<input type='text' class='field" + field_num + "' />";

                    jData.append(custom_data);

                }

                // attach events to data if they exist

                if (this.dataInit != null && i != highest_late_setup)

                    initData(".field" + i, this.dataInit);

                if (this.dataEvents != null && i != highest_late_setup)

                    bindDataEvents(".field" + i, this.dataEvents);

            });

            fields_html = "<select name='field'>" + fields_html + "</select>";

            jFields.append(fields_html);



            // setup the field select with an on-change event if there are custom ops or data

            var jFSelect = jFields.find("select[name='field']");

            if (has_custom_ops) jFSelect.change(function(e) {

                var index = e.target.selectedIndex;

                var td = jQuery(e.target).parents("tr.sf").find("td.ops");

                td.find("select").removeAttr("name").hide(); // disown and hide all elements

                var jElem = td.find(".field" + index);

                if (jElem[0] == null) jElem = td.find(".default"); // if there's not an element for that field, use the default one

                jElem.attr("name", "op").show();

                return false;

            });

            else jOps.find(".default").attr("name", "op").show();

            if (has_custom_data) jFSelect.change(function(e) {

                var index = e.target.selectedIndex;

                var td = jQuery(e.target).parents("tr.sf").find("td.data");

                td.find("select,input").removeClass("vdata").hide(); // disown and hide all elements

                var jElem = td.find(".field" + index);

                if (jElem[0] == null) jElem = td.find(".default"); // if there's not an element for that field, use the default one

                jElem.show().addClass("vdata");

                return false;

            });

            else jData.find(".default").show().addClass("vdata");

            // go ahead and call the change event and setup the ops and data values

            if (has_custom_ops || has_custom_data) jFSelect.change();



            // bind events

            jQ.find(".ui-state-default").hover(hover, hover).mousedown(active).mouseup(active); // add hover/active effects to all buttons

            jQ.find(".ui-closer").click(function(e) {

                opts.onClose(jQuery(jQ.selector));

                return false;

            });

            jQ.find(".ui-del").click(function(e) {

                var row = jQuery(e.target).parents(".sf");

                if (row.siblings(".sf").length > 0) { // doesn't remove if there's only one filter left

                    if (opts.datepickerFix === true && jQuery.fn.datepicker !== undefined)

                        row.find(".hasDatepicker").datepicker("destroy"); // clean up datepicker's $.data mess

                    row.remove(); // also unbinds

                } else { // resets the filter if it's the last one

                    row.find("select[name='field']")[0].selectedIndex = 0;

                    row.find("select[name='op']")[0].selectedIndex = 0;

                    row.find(".data input").val(""); // blank all input values

                    row.find(".data select").each(function() { this.selectedIndex = 0; }); // select first option on all selects

                    row.find("select[name='field']").change(function(event){event.stopPropagation();}); // trigger any change events

                }

                return false;

            });

            jQ.find(".ui-add").click(function(e) {

                var row = jQuery(e.target).parents(".sf");

                var newRow = row.clone(true).insertAfter(row);

                newRow.find(".ui-state-default").removeClass("ui-state-hover ui-state-active");

                if (opts.clone) {

                    newRow.find("select[name='field']")[0].selectedIndex = row.find("select[name='field']")[0].selectedIndex;

                    var stupid_browser = (newRow.find("select[name='op']")[0] == null); // true for IE6

                    if (!stupid_browser)

                        newRow.find("select[name='op']").focus()[0].selectedIndex = row.find("select[name='op']")[0].selectedIndex;

                    var jElem = newRow.find("select.vdata");

                    if (jElem[0] != null) // select doesn't copy it's selected index when cloned

                        jElem[0].selectedIndex = row.find("select.vdata")[0].selectedIndex;

                } else {

                    newRow.find(".data input").val(""); // blank all input values

                    newRow.find("select[name='field']").focus();

                }

                if (opts.datepickerFix === true && jQuery.fn.datepicker !== undefined) { // using $.data to associate data with document elements is Not Good

                    row.find(".hasDatepicker").each(function() {

                        var settings = jQuery.data(this, "datepicker").settings;

                        newRow.find("#" + this.id).unbind().removeAttr("id").removeClass("hasDatepicker").datepicker(settings);

                    });

                }

                newRow.find("select[name='field']").change(function(event){event.stopPropagation();} );

                return false;

            });

            jQ.find(".ui-search").click(function(e) {

                var ui = jQuery(jQ.selector); // pointer to search box wrapper element

                var ruleGroup;

                var group_op = ui.find("select[name='groupOp'] :selected").val(); // puls "AND" or "OR"

                if (!opts.stringResult) {

                    ruleGroup = {

                        groupOp: group_op,

                        rules: []

                    };

                } else {

                    ruleGroup = "{\"groupOp\":\"" + group_op + "\",\"rules\":[";

                }

                ui.find(".sf").each(function(i) {

                    var tField = jQuery(this).find("select[name='field'] :selected").val();

                    var tOp = jQuery(this).find("select[name='op'] :selected").val();

                    var tData = jQuery(this).find("input.vdata,select.vdata :selected").val();

                    tData += "";

                    tData = tData.replace(/\\/g,'\\\\').replace(/\"/g,'\\"');

                    if (!opts.stringResult) {

                        ruleGroup.rules.push({

                            field: tField,

                            op: tOp,

                            data: tData

                        });

                    } else {

                        if (i > 0) ruleGroup += ",";

                        ruleGroup += "{\"field\":\"" + tField + "\",";

                        ruleGroup += "\"op\":\"" + tOp + "\",";

                        ruleGroup += "\"data\":\"" + tData + "\"}";

                    }

                });

                if (opts.stringResult) ruleGroup += "]}";

                opts.onSearch(ruleGroup);

                return false;

            });

            jQ.find(".ui-reset").click(function(e,op) {

                var ui = jQuery(jQ.selector);

                ui.find(".ui-del").click(); // removes all filters, resets the last one

                ui.find("select[name='groupOp']")[0].selectedIndex = 0; // changes the op back to the default one

                opts.onReset(op);

                return false;

            });

            jQ.find(".ui-add-last").click(function() {

                var row = jQuery(jQ.selector + " .sf:last");

                var newRow = row.clone(true).insertAfter(row);

                newRow.find(".ui-state-default").removeClass("ui-state-hover ui-state-active");

                newRow.find(".data input").val(""); // blank all input values

                newRow.find("select[name='field']").focus();

                if (opts.datepickerFix === true && jQuery.fn.datepicker !== undefined) { // using $.data to associate data with document elements is Not Good

                    row.find(".hasDatepicker").each(function() {

                        var settings = jQuery.data(this, "datepicker").settings;

                        newRow.find("#" + this.id).unbind().removeAttr("id").removeClass("hasDatepicker").datepicker(settings);

                    });

                }

                newRow.find("select[name='field']").change(function(event){event.stopPropagation();});

                return false;

            });



            this.setGroupOp = function(setting) {

                /* a "setter" for groupping argument.

                 *  ("AND" or "OR")

                 *

                 * Inputs:

                 *  setting - a string

                 *

                 * Returns:

                 *  Does not return anything. May add success / failure reporting in future versions.

                 *

                 *  author: Daniel Dotsenko (dotsa@hotmail.com)

                 */

                selDOMobj = jQ.find("select[name='groupOp']")[0];

                var indexmap = {}, l = selDOMobj.options.length, i;

                for (i=0; i<l; i++) {

                    indexmap[selDOMobj.options[i].value] = i;

                }

                selDOMobj.selectedIndex = indexmap[setting];

                jQuery(selDOMobj).change(function(event){event.stopPropagation();});

            };



            this.setFilter = function(settings) {

                /* a "setter" for an arbitrary SearchFilter's filter line.

                 * designed to abstract the DOM manipulations required to infer

                 * a particular filter is a fit to the search box.

                 *

                 * Inputs:

                 *  settings - an "object" (dictionary)

                 *   index (optional*) (to be implemented in the future) : signed integer index (from top to bottom per DOM) of the filter line to fill.

                 *           Negative integers (rooted in -1 and lower) denote position of the line from the bottom.

                 *   sfref (optional*) : DOM object referencing individual '.sf' (normally a TR element) to be populated. (optional)

                 *   filter (mandatory) : object (dictionary) of form {'field':'field_value','op':'op_value','data':'data value'}

                 *

                 * * It is mandatory to have either index or sfref defined.

                 *

                 * Returns:

                 *  Does not return anything. May add success / failure reporting in future versions.

                 *

                 *  author: Daniel Dotsenko (dotsa@hotmail.com)

                 */



                var o = settings['sfref'], filter = settings['filter'];

                

                // setting up valueindexmap that we will need to manipulate SELECT elements.

                var fields = [], i, j , l, lj, li,

                    valueindexmap = {};

                    // example of valueindexmap:

                    // {'field1':{'index':0,'ops':{'eq':0,'ne':1}},'fieldX':{'index':1,'ops':{'eq':0,'ne':1},'data':{'true':0,'false':1}}},

                    // if data is undefined it's a INPUT field. If defined, it's SELECT

                selDOMobj = o.find("select[name='field']")[0];

                for (i=0, l=selDOMobj.options.length; i<l; i++) {

                    valueindexmap[selDOMobj.options[i].value] = {'index':i,'ops':{}};

                    fields.push(selDOMobj.options[i].value);

                }

                for (i=0, li=fields.length; i < li; i++) {

                    selDOMobj = o.find(".ops > select[class='field"+i+"']")[0];

                    if (selDOMobj) {

                        for (j=0, lj=selDOMobj.options.length; j<lj; j++) {

                            valueindexmap[fields[i]]['ops'][selDOMobj.options[j].value] = j;

                        }

                    }

                    selDOMobj = o.find(".data > select[class='field"+i+"']")[0];

                    if (selDOMobj) {

                        valueindexmap[fields[i]]['data'] = {}; // this setting is the flag that 'data' is contained in a SELECT

                        for (j=0, lj=selDOMobj.options.length; j<lj; j++) {

                            valueindexmap[fields[i]]['data'][selDOMobj.options[j].value] = j;

                        }

                    }

                } // done populating valueindexmap



                // preparsing the index values for SELECT elements.

                var fieldvalue, fieldindex, opindex, datavalue, dataindex;

                fieldvalue = filter['field'];

				if (valueindexmap[fieldvalue]) {

					fieldindex = valueindexmap[fieldvalue]['index'];

				}

                if (fieldindex != null) {

                    opindex = valueindexmap[fieldvalue]['ops'][filter['op']];

                    if(opindex === undefined) {

                        for(i=0,li=options.operators.length; i<li;i++) {

                            if(options.operators[i].op == filter.op ){

                                opindex = i;

                                break;

                            }

                        }

                    }

                    datavalue = filter['data'];

                    if (valueindexmap[fieldvalue]['data'] == null) {

                        dataindex = -1; // 'data' is not SELECT, Making the var 'defined'

                    } else {

                        dataindex = valueindexmap[fieldvalue]['data'][datavalue]; // 'undefined' may come from here.

                    }

                }

                // only if values for 'field' and 'op' and 'data' are 'found' in mapping...

                if (fieldindex != null && opindex != null && dataindex != null) {

                    o.find("select[name='field']")[0].selectedIndex = fieldindex;

                    o.find("select[name='field']").change();

                    o.find("select[name='op']")[0].selectedIndex = opindex;

                    o.find("input.vdata").val(datavalue); // if jquery does not find any INPUT, it does not set any. This means we deal with SELECT

                    o = o.find("select.vdata")[0];

                    if (o) {

                        o.selectedIndex = dataindex;

                    }

					return true

                } else {

					return false

				}

            }; // end of this.setFilter fn

        } // end of if fields != null

    }

    return new SearchFilter(this, fields, options);

};



jQuery.fn.searchFilter.version = '1.2.9';



/* This property contains the default options */

jQuery.fn.searchFilter.defaults = {



    /*

     * PROPERTY

     * TYPE:        boolean 

     * DESCRIPTION: clone a row if it is added from an existing row

     *              when false, any new added rows will be blank.

     */

    clone: true,



    /*

     * PROPERTY

     * TYPE:        boolean 

     * DESCRIPTION: current version of datepicker uses a data store,

     *              which is incompatible with $().clone(true)

     */

    datepickerFix: true,



    /*

     * FUNCTION

     * DESCRIPTION: the function that will be called when the user clicks Reset

     * INPUT TYPE:  JS object if stringResult is false, otherwise is JSON string

     */

    onReset: function(data) { alert("Reset Clicked. Data Returned: " + data) },



    /*

     * FUNCTION

     * DESCRIPTION: the function that will be called when the user clicks Search

     * INPUT TYPE:  JS object if stringResult is false, otherwise is JSON string

     */

    onSearch: function(data) { alert("Search Clicked. Data Returned: " + data) },



    /*

     * FUNCTION

     * DESCRIPTION: the function that will be called when the user clicks the Closer icon

     *              or the close() function is called

     *              if left null, it simply does a .hide() on the searchFilter

     * INPUT TYPE:  a jQuery object for the searchFilter

     */

    onClose: function(jElem) { jElem.hide(); },



    /* 

     * PROPERTY

     * TYPE:        array of objects, each object has the properties op and text 

     * DESCRIPTION: the selectable operators that are applied between rules

     *              e.g. for {op:"AND", text:"all"}

     *                  the search filter box will say: match all rules

     *                  the server should interpret this as putting the AND op between each rule:

     *                      rule1 AND rule2 AND rule3

     *              text will be the option text, and op will be the option value

     */

    groupOps: [

        { op: "AND", text: "all" },

        { op: "OR",  text: "any" }

    ],





    /* 

     * PROPERTY

     * TYPE:        array of objects, each object has the properties op and text 

     * DESCRIPTION: the operators that will appear as drop-down options

     *              text will be the option text, and op will be the option value

     */

    operators: [

        { op: "eq", text: "is equal to" },

        { op: "ne", text: "is not equal to" },

        { op: "lt", text: "is less than" },

        { op: "le", text: "is less or equal to" },

        { op: "gt", text: "is greater than" },

        { op: "ge", text: "is greater or equal to" },

        { op: "in", text: "is in" },

        { op: "ni", text: "is not in" },

        { op: "bw", text: "begins with" },

        { op: "bn", text: "does not begin with" },

        { op: "ew", text: "ends with" },

        { op: "en", text: "does not end with" },

        { op: "cn", text: "contains" },

        { op: "nc", text: "does not contain" }

    ],



    /*

     * PROPERTY

     * TYPE:        string

     * DESCRIPTION: part of the phrase: _match_ ANY/ALL rules

     */

    matchText: "match",



    /*

     * PROPERTY

     * TYPE:        string

     * DESCRIPTION: part of the phrase: match ANY/ALL _rules_

     */

    rulesText: "rules",



    /*

     * PROPERTY

     * TYPE:        string

     * DESCRIPTION: the text that will be displayed in the reset button

     */

    resetText: "Reset",

    

    /*

     * PROPERTY

     * TYPE:        string

     * DESCRIPTION: the text that will be displayed in the search button

     */

    searchText: "Search",

    

    /*

     * PROPERTY

     * TYPE:        boolean

     * DESCRIPTION: a flag that, when set, will make the onSearch and onReset return strings instead of objects

     */

    stringResult: true,    

    

    /*

     * PROPERTY

     * TYPE:        string

     * DESCRIPTION: the title of the searchFilter window

     */

    windowTitle: "Search Rules",

    /*

     * PROPERTY

     * TYPE:        object

     * DESCRIPTION: options to extend the ajax request

     */

    ajaxSelectOptions : {}

}; /* end of searchFilter */

