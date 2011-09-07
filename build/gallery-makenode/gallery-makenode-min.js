YUI.add("gallery-makenode",function(f){var c=/\s+/,a="Node",h=".",g="boundingBox",e=f.Lang,d=' for "{name}" defined in class {recentDef} also defined in class {prevDef}',b=function(){this._makeClassNames();this._concatUIAttrs();this._publishEvents();this.after("render",this._attachEvents,this);this.after("destroy",this._detachEvents,this);};b.prototype={_classNames:null,_templateHandlers:{"@":function(i){return this.get(i);},"p":function(i){return this[i];},"m":function(i){var j=i.split(c)[0];i=i.substr(j.length);i=this._parseMakeNodeArgs(i);return this[j].apply(this,i);},"c":function(i){return this._classNames[i];},"s":function(i){return this.get("strings")[i];},"?":function(i){i=this._parseMakeNodeArgs(i);return(!!i[0])?i[1]:i[2];},"1":function(i){i=this._parseMakeNodeArgs(i);return parseInt(i[0],10)===1?i[1]:i[2];}},_parseMakeNodeArgs:function(i){var k=/^(?:([ \t]+)|("[^"\\]*(?:\\.[^"\\]*)*")|(true)|(false)|(null)|([\-+]?[0-9]*(?:\.[0-9]+)?))/,j=[],l=function(m,n){if(m!==undefined&&n){switch(n){case 1:break;case 2:j.push(m.substr(1,m.length-2).replace('\\"','"'));break;case 3:j.push(true);break;case 4:j.push(false);break;case 5:j.push(null);break;case 6:if(m){j.push(parseFloat(m));}else{i=i.substr(1);}break;}i=i.substr(m.length);return true;}};while(i.length){f.some(k.exec(i),l);}return j;},_makeNode:function(j,i){if(!j){f.some(this._getClasses(),function(k){j=k._TEMPLATE;if(j){return true;}});}return f.Node.create(this._substitute(j,i));},_substitute:function(k,j){var i;return f.substitute(k,j||{},f.bind(function(m,n,l){if(l){i=this._templateHandlers[m.toLowerCase()];if(i){return i.call(this,l);}}return n;},this),true);},_locateNodes:function(){var i=this.get(g),j;if(arguments.length){f.each(arguments,function(k){j=i.one(h+this._classNames[k]);if(j){this["_"+k+a]=j;}},this);}else{f.each(this._classNames,function(k,l){j=i.one(h+k);if(j){this["_"+l+a]=j;}},this);}},_makeClassNames:function(){var j=f.ClassNameManager.getClassName,k={},i=this._classNames={};f.each(this._getClasses(),function(l){if(l._CLASS_NAMES){f.each(l._CLASS_NAMES,function(m){if(k[m]){}else{i[m]=j(l.NAME.toLowerCase(),m);k[m]=l.NAME;}});}});i.content=(i.boundingBox=j(this.constructor.NAME.toLowerCase()))+"-content";if(this.getStdModNode){i.HEADER="yui3-widget-hd";i.BODY="yui3-widget-bd";i.FOOTER="yui3-widget-ft";}},_concatUIAttrs:function(){var k,j,i={};f.each(["BIND","SYNC"],function(l){k={};f.each(this._UI_ATTRS[l],function(m){k[m]="Widget";});f.each(this._getClasses(),function(m){j=m._ATTRS_2_UI;if(j){f.each(f.Array(j[l]),function(n){if(k[n]){}else{k[n]=m.NAME;}});}});i[l]=f.Object.keys(k);},this);this._UI_ATTRS=i;},_attachEvents:function(){var q=this.get(g),j,p=this,k=[],m,n,l,o=function(r){return r.charAt(0).toUpperCase()+r.substr(1);},i={boundingBox:q,document:q.get("ownerDocument"),THIS:p,Y:f};f.each(this._getClasses(),function(r){f.each(r._EVENTS||{},function(s,t){j=i[t]||h+this._classNames[t];f.each(f.Array(s),function(u){n=null;if(e.isString(u)){m=u;l=null;}else{if(e.isObject(u)){m=u.type;n=u.fn;l=u.args;}else{}}if(m){n=n||"_after"+o(t)+o(m);if(!p[n]){}else{n=p[n];}if(e.isString(j)){if(m==="key"){k.push(q.delegate(m,n,l,j,p));}else{k.push(q.delegate(m,n,j,p,l));}}else{if(j===p||j===f){k.push(j.after(m,n,p,l));}else{if(m==="key"){k.push(f.after(m,n,j,l,p));}else{k.push(f.after(m,n,j,p,l));}}}}else{}});},this);},this);this._eventHandles=k;},_publishEvents:function(){var m=this._getClasses(),j=m.length,k,n=function(l,i){var o={};f.each(l||{},function(q,p){o[p]=p.substr(-2)==="Fn"?this[q]:q;},this);this.publish(i,o);};for(k=j-1;k>=0;k--){f.each(m[k]._PUBLISH||{},n,this);}},_detachEvents:function(){f.each(this._eventHandles,function(i){i.detach();});}};f.MakeNode=b;},"gallery-2011.08.31-20-57",{requires:["substitute","classnamemanager"],skinnable:false});