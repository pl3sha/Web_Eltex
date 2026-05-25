import{$ as Ye,$a as Le,$b as er,A as wt,Aa as fn,Ab as ze,B as Ts,Ba as Gs,Bb as ee,C as Fs,Ca as qs,Cb as Xi,D as ut,Da as Ws,Db as Uo,E as xt,Ea as Zs,Eb as me,F as No,Fa as Ys,Fb as fe,G as Os,Ga as Ks,Gb as rl,H as Ps,Ha as Xs,Hb as vn,I as Ns,Ia as Ne,Ib as $t,J as ks,Ja as Mt,Jb as zo,K as $i,Ka as Qs,Kb as K,L as Se,La as h,Lb as Qi,M as it,Ma as hn,Mb as u,N as ye,Na as Js,Nb as O,O as E,Oa as qi,Ob as Ji,P as Vt,Pa as Wi,Pb as ol,Q as Wn,Qa as rt,Qb as ot,R as v,Ra as Ce,Rb as al,S as Oe,Sa as N,Sb as sl,T as Ls,Ta as Zi,Tb as St,U as y,Ua as Yi,Ub as At,V as M,Va as el,Vb as ll,W as c,Wa as Lo,Wb as cl,X as cn,Xa as C,Xb as dl,Y as Bs,Ya as ke,Yb as z,Z as Pe,Za as F,Zb as ie,_ as Ae,_a as tl,_b as ul,a as p,aa as Ke,ab as Ki,ac as pe,b as P,ba as _e,bb as Bo,bc as ft,ca as k,cb as Vo,cc as ml,d as on,da as dn,db as Kn,dc as ht,e as Es,ea as Vs,eb as nl,ec as fl,f as an,fa as L,fb as pn,fc as ue,g as te,ga as q,gb as oe,gc as $o,h as Ee,ha as jt,hb as j,hc as hl,i as Me,ia as Zn,ib as U,ic as pl,j as be,ja as js,jb as Ie,k as _,ka as I,kb as Re,l as ji,la as Us,lb as B,m as Oo,ma as zs,mb as m,n as Ms,na as Et,nb as g,o as H,oa as je,ob as Y,p as Ss,pa as Ut,pb as D,q as dt,qa as ko,qb as x,r as Po,ra as Z,rb as se,s as As,sa as $s,sb as gn,t as Ui,ta as Yn,tb as mt,u as zi,ua as Hs,ub as il,v as Is,va as un,vb as Ue,w as Rs,wa as Hi,wb as le,x as Fe,xa as mn,xb as R,y as sn,ya as Gi,yb as jo,z as ln,za as zt,zb as G}from"./chunk-HGI6OKDP.js";var gl=null;function $e(){return gl}function Ho(t){gl??=t}var Xn=class{},Qn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(vl),providedIn:"platform"})}return t})();var vl=(()=>{class t extends Qn{_location;_history;_doc=c(k);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return $e().getBaseHref(this._doc)}onPopState(e){let i=$e().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=$e().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function _l(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function bl(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function It(t){return t&&t[0]!=="?"?`?${t}`:t}var Ht=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(Cl),providedIn:"root"})}return t})(),Au=new y(""),Cl=(()=>{class t extends Ht{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??c(k).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _l(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+It(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+It(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+It(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(M(Qn),M(Au,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Gt=(()=>{class t{_subject=new te;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=Tu(bl(yl(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+It(i))}normalize(e){return t.stripTrailingSlash(Ru(this._basePath,yl(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+It(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+It(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=It;static joinWithSlash=_l;static stripTrailingSlash=bl;static \u0275fac=function(i){return new(i||t)(M(Ht))};static \u0275prov=v({token:t,factory:()=>Iu(),providedIn:"root"})}return t})();function Iu(){return new Gt(M(Ht))}function Ru(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function yl(t){return t.replace(/\/index.html$/,"")}function Tu(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ge=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(ge||{}),W=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(W||{}),Te=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(Te||{}),gt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function wl(t){return Ue(t)[le.LocaleId]}function xl(t,n,e){let i=Ue(t),r=[i[le.DayPeriodsFormat],i[le.DayPeriodsStandalone]],o=He(r,n);return He(o,e)}function El(t,n,e){let i=Ue(t),r=[i[le.DaysFormat],i[le.DaysStandalone]],o=He(r,n);return He(o,e)}function Ml(t,n,e){let i=Ue(t),r=[i[le.MonthsFormat],i[le.MonthsStandalone]],o=He(r,n);return He(o,e)}function Sl(t,n){let i=Ue(t)[le.Eras];return He(i,n)}function Jn(t,n){let e=Ue(t);return He(e[le.DateFormat],n)}function ei(t,n){let e=Ue(t);return He(e[le.TimeFormat],n)}function ti(t,n){let i=Ue(t)[le.DateTimeFormat];return He(i,n)}function ni(t,n){let e=Ue(t),i=e[le.NumberSymbols][n];if(typeof i>"u"){if(n===gt.CurrencyDecimal)return e[le.NumberSymbols][gt.Decimal];if(n===gt.CurrencyGroup)return e[le.NumberSymbols][gt.Group]}return i}function Al(t){if(!t[le.ExtraData])throw new E(2303,!1)}function Il(t){let n=Ue(t);return Al(n),(n[le.ExtraData][2]||[]).map(i=>typeof i=="string"?Go(i):[Go(i[0]),Go(i[1])])}function Rl(t,n,e){let i=Ue(t);Al(i);let r=[i[le.ExtraData][0],i[le.ExtraData][1]],o=He(r,n)||[];return He(o,e)||[]}function He(t,n){for(let e=n;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new E(2304,!1)}function Go(t){let[n,e]=t.split(":");return{hours:+n,minutes:+e}}var Fu=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,tr={},Ou=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Tl(t,n,e,i){let r=zu(t);n=pt(e,n)||n;let a=[],s;for(;n;)if(s=Ou.exec(n),s){a=a.concat(s.slice(1));let f=a.pop();if(!f)break;n=f}else{a.push(n);break}let l=r.getTimezoneOffset();i&&(l=Ol(i,l),r=Uu(r,i));let d="";return a.forEach(f=>{let b=Vu(f);d+=b?b(r,e,l):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function ar(t,n,e){let i=new Date(0);return i.setFullYear(t,n,e),i.setHours(0,0,0),i}function pt(t,n){let e=wl(t);if(tr[e]??={},tr[e][n])return tr[e][n];let i="";switch(n){case"shortDate":i=Jn(t,Te.Short);break;case"mediumDate":i=Jn(t,Te.Medium);break;case"longDate":i=Jn(t,Te.Long);break;case"fullDate":i=Jn(t,Te.Full);break;case"shortTime":i=ei(t,Te.Short);break;case"mediumTime":i=ei(t,Te.Medium);break;case"longTime":i=ei(t,Te.Long);break;case"fullTime":i=ei(t,Te.Full);break;case"short":let r=pt(t,"shortTime"),o=pt(t,"shortDate");i=nr(ti(t,Te.Short),[r,o]);break;case"medium":let a=pt(t,"mediumTime"),s=pt(t,"mediumDate");i=nr(ti(t,Te.Medium),[a,s]);break;case"long":let l=pt(t,"longTime"),d=pt(t,"longDate");i=nr(ti(t,Te.Long),[l,d]);break;case"full":let f=pt(t,"fullTime"),b=pt(t,"fullDate");i=nr(ti(t,Te.Full),[f,b]);break}return i&&(tr[e][n]=i),i}function nr(t,n){return n&&(t=t.replace(/\{([^}]+)}/g,function(e,i){return n!=null&&i in n?n[i]:e})),t}function Xe(t,n,e="-",i,r){let o="";(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<n;)a="0"+a;return i&&(a=a.slice(a.length-n)),o+a}function Pu(t,n){return Xe(t,3).substring(0,n)}function ae(t,n,e=0,i=!1,r=!1){return function(o,a){let s=Nu(t,o);if((e>0||s>-e)&&(s+=e),t===3)s===0&&e===-12&&(s=12);else if(t===6)return Pu(s,n);let l=ni(a,gt.MinusSign);return Xe(s,n,l,i,r)}}function Nu(t,n){switch(t){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new E(2301,!1)}}function X(t,n,e=ge.Format,i=!1){return function(r,o){return ku(r,o,t,n,e,i)}}function ku(t,n,e,i,r,o){switch(e){case 2:return Ml(n,r,i)[t.getMonth()];case 1:return El(n,r,i)[t.getDay()];case 0:let a=t.getHours(),s=t.getMinutes();if(o){let d=Il(n),f=Rl(n,r,i),b=d.findIndex(A=>{if(Array.isArray(A)){let[ne,Q]=A,J=a>=ne.hours&&s>=ne.minutes,T=a<Q.hours||a===Q.hours&&s<Q.minutes;if(ne.hours<Q.hours){if(J&&T)return!0}else if(J||T)return!0}else if(A.hours===a&&A.minutes===s)return!0;return!1});if(b!==-1)return f[b]}return xl(n,r,i)[a<12?0:1];case 3:return Sl(n,i)[t.getFullYear()<=0?0:1];default:let l=e;throw new E(2302,!1)}}function ir(t){return function(n,e,i){let r=-1*i,o=ni(e,gt.MinusSign),a=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?"+":"")+Xe(a,2,o)+Xe(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+Xe(a,1,o);case 2:return"GMT"+(r>=0?"+":"")+Xe(a,2,o)+":"+Xe(Math.abs(r%60),2,o);case 3:return i===0?"Z":(r>=0?"+":"")+Xe(a,2,o)+":"+Xe(Math.abs(r%60),2,o);default:throw new E(2310,!1)}}}var Lu=0,or=4;function Bu(t){let n=ar(t,Lu,1).getDay();return ar(t,0,1+(n<=or?or:or+7)-n)}function Fl(t){let n=t.getDay(),e=n===0?-3:or-n;return ar(t.getFullYear(),t.getMonth(),t.getDate()+e)}function qo(t,n=!1){return function(e,i){let r;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();r=1+Math.floor((a+o)/7)}else{let o=Fl(e),a=Bu(o.getFullYear()),s=o.getTime()-a.getTime();r=1+Math.round(s/6048e5)}return Xe(r,t,ni(i,gt.MinusSign))}}function rr(t,n=!1){return function(e,i){let o=Fl(e).getFullYear();return Xe(o,t,ni(i,gt.MinusSign),n)}}var Wo={};function Vu(t){if(Wo[t])return Wo[t];let n;switch(t){case"G":case"GG":case"GGG":n=X(3,W.Abbreviated);break;case"GGGG":n=X(3,W.Wide);break;case"GGGGG":n=X(3,W.Narrow);break;case"y":n=ae(0,1,0,!1,!0);break;case"yy":n=ae(0,2,0,!0,!0);break;case"yyy":n=ae(0,3,0,!1,!0);break;case"yyyy":n=ae(0,4,0,!1,!0);break;case"Y":n=rr(1);break;case"YY":n=rr(2,!0);break;case"YYY":n=rr(3);break;case"YYYY":n=rr(4);break;case"M":case"L":n=ae(1,1,1);break;case"MM":case"LL":n=ae(1,2,1);break;case"MMM":n=X(2,W.Abbreviated);break;case"MMMM":n=X(2,W.Wide);break;case"MMMMM":n=X(2,W.Narrow);break;case"LLL":n=X(2,W.Abbreviated,ge.Standalone);break;case"LLLL":n=X(2,W.Wide,ge.Standalone);break;case"LLLLL":n=X(2,W.Narrow,ge.Standalone);break;case"w":n=qo(1);break;case"ww":n=qo(2);break;case"W":n=qo(1,!0);break;case"d":n=ae(2,1);break;case"dd":n=ae(2,2);break;case"c":case"cc":n=ae(7,1);break;case"ccc":n=X(1,W.Abbreviated,ge.Standalone);break;case"cccc":n=X(1,W.Wide,ge.Standalone);break;case"ccccc":n=X(1,W.Narrow,ge.Standalone);break;case"cccccc":n=X(1,W.Short,ge.Standalone);break;case"E":case"EE":case"EEE":n=X(1,W.Abbreviated);break;case"EEEE":n=X(1,W.Wide);break;case"EEEEE":n=X(1,W.Narrow);break;case"EEEEEE":n=X(1,W.Short);break;case"a":case"aa":case"aaa":n=X(0,W.Abbreviated);break;case"aaaa":n=X(0,W.Wide);break;case"aaaaa":n=X(0,W.Narrow);break;case"b":case"bb":case"bbb":n=X(0,W.Abbreviated,ge.Standalone,!0);break;case"bbbb":n=X(0,W.Wide,ge.Standalone,!0);break;case"bbbbb":n=X(0,W.Narrow,ge.Standalone,!0);break;case"B":case"BB":case"BBB":n=X(0,W.Abbreviated,ge.Format,!0);break;case"BBBB":n=X(0,W.Wide,ge.Format,!0);break;case"BBBBB":n=X(0,W.Narrow,ge.Format,!0);break;case"h":n=ae(3,1,-12);break;case"hh":n=ae(3,2,-12);break;case"H":n=ae(3,1);break;case"HH":n=ae(3,2);break;case"m":n=ae(4,1);break;case"mm":n=ae(4,2);break;case"s":n=ae(5,1);break;case"ss":n=ae(5,2);break;case"S":n=ae(6,1);break;case"SS":n=ae(6,2);break;case"SSS":n=ae(6,3);break;case"Z":case"ZZ":case"ZZZ":n=ir(0);break;case"ZZZZZ":n=ir(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=ir(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=ir(2);break;default:return null}return Wo[t]=n,n}function Ol(t,n){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?n:e}function ju(t,n){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+n),t}function Uu(t,n,e){let r=t.getTimezoneOffset(),o=Ol(n,r);return ju(t,-1*(o-r))}function zu(t){if(Dl(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,a=1]=t.split("-").map(s=>+s);return ar(r,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let i;if(i=t.match(Fu))return $u(i)}let n=new Date(t);if(!Dl(n))throw new E(2311,!1);return n}function $u(t){let n=new Date(0),e=0,i=0,r=t[8]?n.setUTCFullYear:n.setFullYear,o=t[8]?n.setUTCHours:n.setHours;t[9]&&(e=Number(t[9]+t[10]),i=Number(t[9]+t[11])),r.call(n,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,s=Number(t[5]||0)-i,l=Number(t[6]||0),d=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(n,a,s,l,d),n}function Dl(t){return t instanceof Date&&!isNaN(t.valueOf())}var Zo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(_e);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(N(Yi))};static \u0275dir=F({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[je]})}return t})();function Hu(t,n){return new E(2100,!1)}var Gu="mediumDate",Pl=new y(""),Nl=new y(""),vt=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,i,r){this.locale=e,this.defaultTimezone=i,this.defaultOptions=r}transform(e,i,r,o){if(e==null||e===""||e!==e)return null;try{let a=i??this.defaultOptions?.dateFormat??Gu,s=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Tl(e,a,o||this.locale,s)}catch(a){throw Hu(t,a.message)}}static \u0275fac=function(i){return new(i||t)(N(dl,16),N(Pl,24),N(Nl,24))};static \u0275pipe=tl({name:"date",type:t,pure:!0})}return t})();function sr(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var qt=class{};function Ll(t,n,e){return il(t,n,e)}var Ko="browser";function Bl(t){return t===Ko}var Vl=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new Yo(c(k),window)})}return t})(),Yo=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(P(p({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=Xu(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(Vt(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(P(p({},e),{left:r-a[0],top:o-a[1]}))}};function Xu(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=i.nextNode()}}return null}var ii=class{_doc;constructor(n){this._doc=n}manager},lr=(()=>{class t extends ii{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),ur=new y(""),ea=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof lr));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof lr);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new E(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(M(ur),M(q))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Xo="ng-app-id";function jl(t){for(let n of t)n.remove()}function Ul(t,n){let e=n.createElement("style");return e.textContent=t,e}function Ju(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Xo}="${n}"],link[${Xo}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Xo),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Jo(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ta=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,Ju(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,Ul);i?.forEach(r=>this.addUsage(r,this.external,Jo))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(jl(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])jl(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,Ul(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Jo(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(M(k),M(Yn),M(mn,8),M(un))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Qo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},na=/%COMP%/g;var $l="%COMP%",em=`_nghost-${$l}`,tm=`_ngcontent-${$l}`,nm=!0,im=new y("",{factory:()=>nm});function rm(t){return tm.replace(na,t)}function om(t){return em.replace(na,t)}function Hl(t,n){return n.map(e=>e.replace(na,t))}var ai=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new ri(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof dr?r.applyToHost(e):r instanceof oi&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,b=this.tracingService;switch(i.encapsulation){case Gi.Emulated:o=new dr(l,d,i,this.appId,f,a,s,b);break;case Gi.ShadowDom:return new cr(l,e,i,a,s,this.nonce,b,d);case Gi.ExperimentalIsolatedShadowDom:return new cr(l,e,i,a,s,this.nonce,b);default:o=new oi(l,d,i,f,a,s,b);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(M(ea),M(ta),M(Yn),M(im),M(k),M(q),M(mn),M(qi,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),ri=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Qo[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(zl(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(zl(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new E(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Qo[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Qo[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(hn.DashCase|hn.Important)?n.style.setProperty(e,i,r&hn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&hn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=$e().getGlobalEventTarget(this.doc,n),!n))throw new E(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function zl(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var cr=class extends ri{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=Hl(i.id,d);for(let b of d){let A=document.createElement("style");a&&A.setAttribute("nonce",a),A.textContent=b,this.shadowRoot.appendChild(A)}let f=i.getExternalStyles?.();if(f)for(let b of f){let A=Jo(b,r);a&&A.setAttribute("nonce",a),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},oi=class extends ri{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles;this.styles=l?Hl(l,d):d,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Js.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},dr=class extends oi{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let d=r+"-"+i.id;super(n,e,i,o,a,s,l,d),this.contentAttr=rm(d),this.hostAttr=om(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var mr=class t extends Xn{supportsDOMEvents=!0;static makeCurrent(){Ho(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=sm();return e==null?null:lm(e)}resetBaseElement(){si=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return sr(document.cookie,n)}},si=null;function sm(){return si=si||document.head.querySelector("base"),si?si.getAttribute("href"):null}function lm(t){return new URL(t,document.baseURI).pathname}var cm=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Gl=["alt","control","meta","shift"],dm={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},um={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},ql=(()=>{class t extends ii{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>$e().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),Gl.forEach(d=>{let f=i.indexOf(d);f>-1&&(i.splice(f,1),a+=d+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=dm[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Gl.forEach(a=>{if(a!==r){let s=um[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();async function ia(t,n,e){let i=p({rootComponent:t},mm(n,e));return fl(i)}function mm(t,n){return{platformRef:n?.platformRef,appProviders:[...vm,...t?.providers??[]],platformProviders:gm}}function fm(){mr.makeCurrent()}function hm(){return new jt}function pm(){return $s(document),document}var gm=[{provide:un,useValue:Ko},{provide:Hs,useValue:fm,multi:!0},{provide:k,useFactory:pm}];var vm=[{provide:Bs,useValue:"root"},{provide:jt,useFactory:hm},{provide:ur,useClass:lr,multi:!0},{provide:ur,useClass:ql,multi:!0},ai,ta,ea,{provide:rt,useExisting:ai},{provide:qt,useClass:cm},[]];var Rt=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var oa=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},aa=class{encodeKey(n){return Wl(n)}encodeValue(n){return Wl(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function bm(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var ym=/%(\d[a-f0-9])/gi,_m={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Wl(t){return encodeURIComponent(t).replace(ym,(n,e)=>_m[e]??n)}function fr(t){return`${t}`}var bt=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new aa,n.fromString){if(n.fromObject)throw new E(2805,!1);this.map=bm(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(fr):[fr(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(fr(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(fr(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function Cm(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Zl(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Yl(t){return typeof Blob<"u"&&t instanceof Blob}function Kl(t){return typeof FormData<"u"&&t instanceof FormData}function Dm(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Xl="Content-Type",Ql="Accept",Jl="text/plain",ec="application/json",wm=`${ec}, ${Jl}, */*`,bn=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(Cm(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Rt,this.context??=new oa,!this.params)this.params=new bt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Zl(this.body)||Yl(this.body)||Kl(this.body)||Dm(this.body)?this.body:this.body instanceof bt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Kl(this.body)?null:Yl(this.body)?this.body.type||null:Zl(this.body)?null:typeof this.body=="string"?Jl:this.body instanceof bt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ec:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,d=n.redirect||this.redirect,f=n.credentials||this.credentials,b=n.referrer||this.referrer,A=n.integrity||this.integrity,ne=n.referrerPolicy||this.referrerPolicy,Q=n.transferCache??this.transferCache,J=n.timeout??this.timeout,T=n.body!==void 0?n.body:this.body,V=n.withCredentials??this.withCredentials,re=n.reportProgress??this.reportProgress,xe=n.headers||this.headers,de=n.params||this.params,Gn=n.context??this.context;return n.setHeaders!==void 0&&(xe=Object.keys(n.setHeaders).reduce((qn,Bt)=>qn.set(Bt,n.setHeaders[Bt]),xe)),n.setParams&&(de=Object.keys(n.setParams).reduce((qn,Bt)=>qn.set(Bt,n.setParams[Bt]),de)),new t(e,i,T,{params:de,headers:xe,context:Gn,reportProgress:re,responseType:r,withCredentials:V,transferCache:Q,keepalive:o,cache:s,priority:a,timeout:J,mode:l,redirect:d,credentials:f,referrer:b,integrity:A,referrerPolicy:ne})}},Wt=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Wt||{}),li=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Rt,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},sa=class t extends li{constructor(n={}){super(n)}type=Wt.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ci=class t extends li{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Wt.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},yn=class extends li{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},xm=200,Em=204;var Mm=/^\)\]\}',?\n/;var Sm=(()=>{class t{xhrFactory;tracingService=c(qi,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new E(-2800,!1);let i=this.xhrFactory;return _(null).pipe(Se(()=>new an(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((T,V)=>a.setRequestHeader(T,V.join(","))),e.headers.has(Ql)||a.setRequestHeader(Ql,wm),!e.headers.has(Xl)){let T=e.detectContentTypeHeader();T!==null&&a.setRequestHeader(Xl,T)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();a.responseType=T!=="json"?T:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let T=a.statusText||"OK",V=new Rt(a.getAllResponseHeaders()),re=a.responseURL||e.url;return l=new sa({headers:V,status:a.status,statusText:T,url:re}),l},f=this.maybePropagateTrace(()=>{let{headers:T,status:V,statusText:re,url:xe}=d(),de=null;V!==Em&&(de=typeof a.response>"u"?a.responseText:a.response),V===0&&(V=de?xm:0);let Gn=V>=200&&V<300;if(e.responseType==="json"&&typeof de=="string"){let qn=de;de=de.replace(Mm,"");try{de=de!==""?JSON.parse(de):null}catch(Bt){de=qn,Gn&&(Gn=!1,de={error:Bt,text:de})}}Gn?(o.next(new ci({body:de,headers:T,status:V,statusText:re,url:xe||void 0})),o.complete()):o.error(new yn({error:de,headers:T,status:V,statusText:re,url:xe||void 0}))}),b=this.maybePropagateTrace(T=>{let{url:V}=d(),re=new yn({error:T,status:a.status||0,statusText:a.statusText||"Unknown Error",url:V||void 0});o.error(re)}),A=b;e.timeout&&(A=this.maybePropagateTrace(T=>{let{url:V}=d(),re=new yn({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:V||void 0});o.error(re)}));let ne=!1,Q=this.maybePropagateTrace(T=>{ne||(o.next(d()),ne=!0);let V={type:Wt.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(V.total=T.total),e.responseType==="text"&&a.responseText&&(V.partialText=a.responseText),o.next(V)}),J=this.maybePropagateTrace(T=>{let V={type:Wt.UploadProgress,loaded:T.loaded};T.lengthComputable&&(V.total=T.total),o.next(V)});return a.addEventListener("load",f),a.addEventListener("error",b),a.addEventListener("timeout",A),a.addEventListener("abort",b),e.reportProgress&&(a.addEventListener("progress",Q),s!==null&&a.upload&&a.upload.addEventListener("progress",J)),a.send(s),o.next({type:Wt.Sent}),()=>{a.removeEventListener("error",b),a.removeEventListener("abort",b),a.removeEventListener("load",f),a.removeEventListener("timeout",A),e.reportProgress&&(a.removeEventListener("progress",Q),s!==null&&a.upload&&a.upload.removeEventListener("progress",J)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(M(qt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Am(t,n){return n(t)}function Im(t,n,e){return(i,r)=>Ae(e,()=>n(i,o=>t(o,r)))}var Rm=new y("",{factory:()=>[]}),tc=new y(""),Tm=new y("",{factory:()=>!0});var Fm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(Sm),r},providedIn:"root"})}return t})();var Om=(()=>{class t{backend;injector;chain=null;pendingTasks=c(zs);contributeToStability=c(Tm);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(Rm),...this.injector.get(tc,[])]));this.chain=i.reduceRight((r,o)=>Im(r,o,this.injector),Am)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ut(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(M(Fm),M(Pe))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(Om),r},providedIn:"root"})}return t})();function ra(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var la=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof bn)o=e;else{let l;r.headers instanceof Rt?l=r.headers:l=new Rt(r.headers);let d;r.params&&(r.params instanceof bt?d=r.params:d=new bt({fromObject:r.params})),o=new bn(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=_(o).pipe(ln(l=>this.handler.handle(l)));if(e instanceof bn||r.observe==="events")return a;let s=a.pipe(Fe(l=>l instanceof ci));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(H(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new E(2806,!1);return l.body}));case"blob":return s.pipe(H(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new E(2807,!1);return l.body}));case"text":return s.pipe(H(l=>{if(l.body!==null&&typeof l.body!="string")throw new E(2808,!1);return l.body}));default:return s.pipe(H(l=>l.body))}case"response":return s;default:throw new E(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new bt().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,ra(r,i))}post(e,i,r={}){return this.request("POST",e,ra(r,i))}put(e,i,r={}){return this.request("PUT",e,ra(r,i))}static \u0275fac=function(i){return new(i||t)(M(Pm))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Tt=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ca=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=M(Bm),r},providedIn:"root"})}return t})(),Bm=(()=>{class t extends ca{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Ne.NONE:return i;case Ne.HTML:return fn(i,"HTML")?zt(i):Xs(this._doc,String(i)).toString();case Ne.STYLE:return fn(i,"Style")?zt(i):i;case Ne.SCRIPT:if(fn(i,"Script"))return zt(i);throw new E(5200,!1);case Ne.URL:return fn(i,"URL")?zt(i):Ks(String(i));case Ne.RESOURCE_URL:if(fn(i,"ResourceURL"))return zt(i);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(e){return Gs(e)}bypassSecurityTrustStyle(e){return qs(e)}bypassSecurityTrustScript(e){return Ws(e)}bypassSecurityTrustUrl(e){return Zs(e)}bypassSecurityTrustResourceUrl(e){return Ys(e)}static \u0275fac=function(i){return new(i||t)(M(k))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vm(t){let n=t,e=Math.floor(Math.abs(t)),i=t.toString().replace(/^[^.]*\.?/,"").length;return i===0&&e%10===1&&e%100!==11?1:i===0&&e%10===Math.floor(e%10)&&e%10>=2&&e%10<=4&&!(e%100>=12&&e%100<=14)?3:i===0&&e%10===0||i===0&&e%10===Math.floor(e%10)&&e%10>=5&&e%10<=9||i===0&&e%100===Math.floor(e%100)&&e%100>=11&&e%100<=14?4:5}var ic=["ru",[["AM","PM"]],void 0,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],void 0,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y\u202F'\u0433'.","d MMMM y\u202F'\u0433'.","EEEE, d MMMM y\u202F'\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[void 0,"\u0440."],GEL:[void 0,"\u10DA"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",Vm];var S="primary",Di=Symbol("RouteTitle"),ha=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Yt(t){return new ha(t)}function da(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function uc(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},d=t.slice(0,i.length);return da(i,d,l)?{consumed:d,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!da(o,t.slice(0,o.length),s)||!da(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function yr(t){return new Promise((n,e)=>{t.pipe(xt()).subscribe({next:i=>n(i),error:i=>e(i)})})}function jm(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!at(t[e],n[e]))return!1;return!0}function at(t,n){let e=t?pa(t):void 0,i=n?pa(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!mc(t[r],n[r]))return!1;return!0}function pa(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function mc(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function Um(t){return t.length>0?t[t.length-1]:null}function Xt(t){return Oo(t)?t:Kn(t)?be(Promise.resolve(t)):_(t)}function fc(t){return Oo(t)?yr(t):Promise.resolve(t)}var zm={exact:pc,subset:gc},hc={exact:$m,subset:Hm,ignored:()=>!0},Ia={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},hi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ra(t,n,e){let i=t instanceof De?t:n.parseUrl(t);return ie(()=>ga(n.lastSuccessfulNavigation()?.finalUrl??new De,i,p(p({},hi),e)))}function ga(t,n,e){return zm[e.paths](t.root,n.root,e.matrixParams)&&hc[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function $m(t,n){return at(t,n)}function pc(t,n,e){if(!Zt(t.segments,n.segments)||!gr(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!pc(t.children[i],n.children[i],e))return!1;return!0}function Hm(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>mc(t[e],n[e]))}function gc(t,n,e){return vc(t,n,n.segments,e)}function vc(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Zt(r,e)||n.hasChildren()||!gr(r,e,i))}else if(t.segments.length===e.length){if(!Zt(t.segments,e)||!gr(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!gc(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Zt(t.segments,r)||!gr(t.segments,r,i)||!t.children[S]?!1:vc(t.children[S],n,o,i)}}function gr(t,n,e){return n.every((i,r)=>hc[e](t[r].parameters,i.parameters))}var De=class{root;queryParams;fragment;_queryParamMap;constructor(n=new $([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Yt(this.queryParams),this._queryParamMap}toString(){return Wm.serialize(this)}},$=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return vr(this)}},Ft=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Yt(this.parameters),this._parameterMap}toString(){return yc(this)}};function Gm(t,n){return Zt(t,n)&&t.every((e,i)=>at(e.parameters,n[i].parameters))}function Zt(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function qm(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===S&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==S&&(e=e.concat(n(r,i)))}),e}var Qt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>new Ot,providedIn:"root"})}return t})(),Ot=class{parse(n){let e=new ba(n);return new De(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${di(n.root,!0)}`,i=Km(n.queryParams),r=typeof n.fragment=="string"?`#${Zm(n.fragment)}`:"";return`${e}${i}${r}`}},Wm=new Ot;function vr(t){return t.segments.map(n=>yc(n)).join("/")}function di(t,n){if(!t.hasChildren())return vr(t);if(n){let e=t.children[S]?di(t.children[S],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==S&&i.push(`${r}:${di(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=qm(t,(i,r)=>r===S?[di(t.children[S],!1)]:[`${r}:${di(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[S]!=null?`${vr(t)}/${e[0]}`:`${vr(t)}/(${e.join("//")})`}}function bc(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function hr(t){return bc(t).replace(/%3B/gi,";")}function Zm(t){return encodeURI(t)}function va(t){return bc(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function br(t){return decodeURIComponent(t)}function rc(t){return br(t.replace(/\+/g,"%20"))}function yc(t){return`${va(t.path)}${Ym(t.parameters)}`}function Ym(t){return Object.entries(t).map(([n,e])=>`;${va(n)}=${va(e)}`).join("")}function Km(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${hr(e)}=${hr(r)}`).join("&"):`${hr(e)}=${hr(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var Xm=/^[^\/()?;#]+/;function ua(t){let n=t.match(Xm);return n?n[0]:""}var Qm=/^[^\/()?;=#]+/;function Jm(t){let n=t.match(Qm);return n?n[0]:""}var ef=/^[^=?&#]+/;function tf(t){let n=t.match(ef);return n?n[0]:""}var nf=/^[^&#]+/;function rf(t){let n=t.match(nf);return n?n[0]:""}var ba=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new $([],{}):new $([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[S]=new $(e,i)),r}parseSegment(){let n=ua(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(n),new Ft(br(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=Jm(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=ua(this.remaining);r&&(i=r,this.capture(i))}n[br(e)]=br(i)}parseQueryParam(n){let e=tf(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=rf(this.remaining);a&&(i=a,this.capture(i))}let r=rc(e),o=rc(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ua(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=S);let s=this.parseChildren(e+1);i[a??S]=Object.keys(s).length===1&&s[S]?s[S]:new $([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new E(4011,!1)}};function _c(t){return t.segments.length>0?new $([],{[S]:t}):t}function Cc(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=Cc(r);if(i===S&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new $(t.segments,n);return of(e)}function of(t){if(t.numberOfChildren===1&&t.children[S]){let n=t.children[S];return new $(t.segments.concat(n.segments),n.children)}return t}function Pt(t){return t instanceof De}function Dc(t,n,e=null,i=null,r=new Ot){let o=wc(t);return xc(o,n,e,i,r)}function wc(t){let n;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new $(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=_c(i);return n??r}function xc(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return ma(o,o,o,e,i,r);let a=af(n);if(a.toRoot())return ma(o,o,new $([],{}),e,i,r);let s=sf(a,o,t),l=s.processChildren?mi(s.segmentGroup,s.index,a.commands):Mc(s.segmentGroup,s.index,a.commands);return ma(o,s.segmentGroup,l,e,i,r)}function _r(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function pi(t){return typeof t=="object"&&t!=null&&t.outlets}function oc(t,n,e){t||="\u0275";let i=new De;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function ma(t,n,e,i,r,o){let a={};for(let[d,f]of Object.entries(i??{}))a[d]=Array.isArray(f)?f.map(b=>oc(d,b,o)):oc(d,f,o);let s;t===n?s=e:s=Ec(t,n,e);let l=_c(Cc(s));return new De(l,a,r)}function Ec(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=Ec(o,n,e)}),new $(t.segments,i)}var Cr=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&_r(i[0]))throw new E(4003,!1);let r=i.find(pi);if(r&&r!==Um(i))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function af(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Cr(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Cr(e,n,i)}var Cn=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function sf(t,n,e){if(t.isAbsolute)return new Cn(n,!0,0);if(!e)return new Cn(n,!1,NaN);if(e.parent===null)return new Cn(e,!0,0);let i=_r(t.commands[0])?0:1,r=e.segments.length-1+i;return lf(e,r,t.numberOfDoubleDots)}function lf(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new E(4005,!1);r=i.segments.length}return new Cn(i,!1,r-o)}function cf(t){return pi(t[0])?t[0].outlets:{[S]:t}}function Mc(t,n,e){if(t??=new $([],{}),t.segments.length===0&&t.hasChildren())return mi(t,n,e);let i=df(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new $(t.segments.slice(0,i.pathIndex),{});return o.children[S]=new $(t.segments.slice(i.pathIndex),t.children),mi(o,0,r)}else return i.match&&r.length===0?new $(t.segments,{}):i.match&&!t.hasChildren()?ya(t,n,e):i.match?mi(t,0,r):ya(t,n,e)}function mi(t,n,e){if(e.length===0)return new $(t.segments,{});{let i=cf(e),r={};if(Object.keys(i).some(o=>o!==S)&&t.children[S]&&t.numberOfChildren===1&&t.children[S].segments.length===0){let o=mi(t.children[S],n,e);return new $(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Mc(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new $(t.segments,r)}}function df(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(pi(s))break;let l=`${s}`,d=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!sc(l,d,a))return o;i+=2}else{if(!sc(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ya(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(pi(o)){let l=uf(o.outlets);return new $(i,l)}if(r===0&&_r(e[0])){let l=t.segments[n];i.push(new Ft(l.path,ac(e[0]))),r++;continue}let a=pi(o)?o.outlets[S]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&_r(s)?(i.push(new Ft(a,ac(s))),r+=2):(i.push(new Ft(a,{})),r++)}return new $(i,{})}function uf(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=ya(new $([],{}),0,i))}),n}function ac(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function sc(t,n,e){return t==e.path&&at(n,e.parameters)}var Dn="imperative",ce=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(ce||{}),Ve=class{id;url;constructor(n,e){this.id=n,this.url=e}},Nt=class extends Ve{type=ce.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},qe=class extends Ve{urlAfterRedirects;type=ce.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ve=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ve||{}),xn=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(xn||{}),Ge=class extends Ve{reason;code;type=ce.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Sc(t){return t instanceof Ge&&(t.code===ve.Redirect||t.code===ve.SupersededByNewNavigation)}var st=class extends Ve{reason;code;type=ce.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Kt=class extends Ve{error;target;type=ce.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},gi=class extends Ve{urlAfterRedirects;state;type=ce.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dr=class extends Ve{urlAfterRedirects;state;type=ce.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wr=class extends Ve{urlAfterRedirects;state;shouldActivate;type=ce.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},xr=class extends Ve{urlAfterRedirects;state;type=ce.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Er=class extends Ve{urlAfterRedirects;state;type=ce.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mr=class{route;type=ce.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Sr=class{route;type=ce.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ar=class{snapshot;type=ce.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ir=class{snapshot;type=ce.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rr=class{snapshot;type=ce.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Tr=class{snapshot;type=ce.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},En=class{routerEvent;position;anchor;scrollBehavior;type=ce.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Mn=class{},vi=class{},Sn=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function mf(t){return!(t instanceof Mn)&&!(t instanceof Sn)&&!(t instanceof vi)}var Fr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Tn(this.rootInjector)}},Tn=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Fr(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(M(Pe))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Or=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=_a(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=_a(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Ca(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Ca(n,this._root).map(e=>e.value)}};function _a(t,n){if(t===n.value)return n;for(let e of n.children){let i=_a(t,e);if(i)return i}return null}function Ca(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Ca(t,e);if(i.length)return i.unshift(n),i}return[]}var Be=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function _n(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var bi=class extends Or{snapshot;constructor(n,e){super(n),this.snapshot=e,Fa(this,n)}toString(){return this.snapshot.toString()}};function Ac(t,n){let e=ff(t,n),i=new Ee([new Ft("",{})]),r=new Ee({}),o=new Ee({}),a=new Ee({}),s=new Ee(""),l=new Je(i,r,a,s,o,S,t,e.root);return l.snapshot=e.root,new bi(new Be(l,[]),e)}function ff(t,n){let e={},i={},r={},a=new An([],e,r,"",i,S,t,null,{},n);return new yi("",new Be(a,[]))}var Je=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(H(d=>d[Di]))??_(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(H(n=>Yt(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(H(n=>Yt(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ta(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:p(p({},n.params),t.params),data:p(p({},n.data),t.data),resolve:p(p(p(p({},t.data),n.data),r?.data),t._resolvedData)}:i={params:p({},t.params),data:p({},t.data),resolve:p(p({},t.data),t._resolvedData??{})},r&&Rc(r)&&(i.resolve[Di]=r.title),i}var An=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Di]}constructor(n,e,i,r,o,a,s,l,d,f){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Yt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Yt(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},yi=class extends Or{url;constructor(n,e){super(e),this.url=n,Fa(this,e)}toString(){return Ic(this._root)}};function Fa(t,n){n.value._routerState=t,n.children.forEach(e=>Fa(t,e))}function Ic(t){let n=t.children.length>0?` { ${t.children.map(Ic).join(", ")} } `:"";return`${t.value}${n}`}function fa(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,at(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),at(n.params,e.params)||t.paramsSubject.next(e.params),jm(n.url,e.url)||t.urlSubject.next(e.url),at(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Da(t,n){let e=at(t.params,n.params)&&Gm(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Da(t.parent,n.parent))}function Rc(t){return typeof t.title=="string"||t.title===null}var Tc=new y(""),wi=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=S;activateEvents=new L;deactivateEvents=new L;attachEvents=new L;detachEvents=new L;routerOutletData=pe();parentContexts=c(Tn);location=c(Yi);changeDetector=c(ht);inputBinder=c(Lr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new wa(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[je]})}return t})(),wa=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Je?this.route:n===Tn?this.childContexts:n===Tc?this.outletData:this.parent.get(n,e)}},Lr=new y("");var Oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Y(0,"router-outlet")},dependencies:[wi],encapsulation:2})}return t})();function Pa(t){let n=t.children&&t.children.map(Pa),e=n?P(p({},t),{children:n}):p({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==S&&(e.component=Oa),e}function hf(t,n,e){let i=_i(t,n._root,e?e._root:void 0);return new bi(i,n)}function _i(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=pf(t,n,e);return new Be(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>_i(t,s)),a}}let i=gf(n.value),r=n.children.map(o=>_i(t,o));return new Be(i,r)}}function pf(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return _i(t,i,r);return _i(t,i)})}function gf(t){return new Je(new Ee(t.url),new Ee(t.params),new Ee(t.queryParams),new Ee(t.fragment),new Ee(t.data),t.outlet,t.component,t)}var In=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Fc="ngNavigationCancelingError";function Pr(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Pt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Oc(!1,ve.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Oc(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Fc]=!0,e.cancellationCode=n,e}function vf(t){return Pc(t)&&Pt(t.url)}function Pc(t){return!!t&&t[Fc]}var xa=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),fa(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=_n(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=_n(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=_n(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=_n(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Tr(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Ir(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(fa(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),fa(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Nr=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},wn=class{component;route;constructor(n,e){this.component=n,this.route=e}};function bf(t,n,e){let i=t._root,r=n?n._root:null;return ui(i,r,e,[i.value])}function yf(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Fn(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Ls(t)?t:n.get(t):i}function ui(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=_n(n);return t.children.forEach(a=>{_f(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>fi(s,e.getContext(a),r)),r}function _f(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Cf(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Nr(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ui(t,n,s?s.children:null,i,r):ui(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new wn(s.outlet.component,a))}else a&&fi(n,s,r),r.canActivateChecks.push(new Nr(i)),o.component?ui(t,null,s?s.children:null,i,r):ui(t,null,e,i,r);return r}function Cf(t,n,e){if(typeof e=="function")return Ae(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Zt(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Zt(t.url,n.url)||!at(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Da(t,n)||!at(t.queryParams,n.queryParams);default:return!Da(t,n)}}function fi(t,n,e){let i=_n(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?fi(a,n.children.getContext(o),e):fi(a,null,e):fi(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new wn(n.outlet.component,r)):e.canDeactivateChecks.push(new wn(null,r)):e.canDeactivateChecks.push(new wn(null,r))}function xi(t){return typeof t=="function"}function Df(t){return typeof t=="boolean"}function wf(t){return t&&xi(t.canLoad)}function xf(t){return t&&xi(t.canActivate)}function Ef(t){return t&&xi(t.canActivateChild)}function Mf(t){return t&&xi(t.canDeactivate)}function Sf(t){return t&&xi(t.canMatch)}function Nc(t){return t instanceof Ms||t?.name==="EmptyError"}var pr=Symbol("INITIAL_VALUE");function Rn(){return Se(t=>Ss(t.map(n=>n.pipe(wt(1),$i(pr)))).pipe(H(n=>{for(let e of n)if(e!==!0){if(e===pr)return pr;if(e===!1||Af(e))return e}return!0}),Fe(n=>n!==pr),wt(1)))}function Af(t){return Pt(t)||t instanceof In}function kc(t){return t.aborted?_(void 0).pipe(wt(1)):new an(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Lc(t){return it(kc(t))}function If(t){return dt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?_(P(p({},n),{guardsResult:!0})):Rf(o,e,i).pipe(dt(a=>a&&Df(a)?Tf(e,r,t):_(a)),H(a=>P(p({},n),{guardsResult:a})))})}function Rf(t,n,e){return be(t).pipe(dt(i=>kf(i.component,i.route,e,n)),xt(i=>i!==!0,!0))}function Tf(t,n,e){return be(n).pipe(ln(i=>As(Of(i.route.parent,e),Ff(i.route,e),Nf(t,i.path),Pf(t,i.route))),xt(i=>i!==!0,!0))}function Ff(t,n){return t!==null&&n&&n(new Rr(t)),_(!0)}function Of(t,n){return t!==null&&n&&n(new Ar(t)),_(!0)}function Pf(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return _(!0);let i=e.map(r=>Ui(()=>{let o=n._environmentInjector,a=Fn(r,o),s=xf(a)?a.canActivate(n,t):Ae(o,()=>a(n,t));return Xt(s).pipe(xt())}));return _(i).pipe(Rn())}function Nf(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>yf(o)).filter(o=>o!==null).map(o=>Ui(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=Fn(s,l),f=Ef(d)?d.canActivateChild(e,t):Ae(l,()=>d(e,t));return Xt(f).pipe(xt())});return _(a).pipe(Rn())}));return _(r).pipe(Rn())}function kf(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return _(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Fn(a,s),d=Mf(l)?l.canDeactivate(t,n,e,i):Ae(s,()=>l(t,n,e,i));return Xt(d).pipe(xt())});return _(o).pipe(Rn())}function Lf(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return _(!0);let a=o.map(s=>{let l=Fn(s,t),d=wf(l)?l.canLoad(n,e):Ae(t,()=>l(n,e)),f=Xt(d);return r?f.pipe(Lc(r)):f});return _(a).pipe(Rn(),Bc(i))}function Bc(t){return Es(ye(n=>{if(typeof n!="boolean")throw Pr(t,n)}),H(n=>n===!0))}function Bf(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return _(!0);let s=a.map(l=>{let d=Fn(l,t),f=Sf(d)?d.canMatch(n,e,r):Ae(t,()=>d(n,e,r));return Xt(f).pipe(Lc(o))});return _(s).pipe(Rn(),Bc(i))}var yt=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Ci=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Vf(t){throw new E(4e3,!1)}function jf(t){throw Oc(!1,ve.GuardRejected)}var Ea=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[S])throw Vf(`${n.redirectTo}`);r=r.children[S]}}async applyRedirectCommands(n,e,i,r,o){let a=await Uf(e,r,o);if(a instanceof De)throw new Ci(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Ci(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new De(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new $(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new E(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function Uf(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return yr(Xt(Ae(e,()=>i(n))))}function zf(t,n){return t.providers&&!t._injector&&(t._injector=Lo(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Qe(t){return t.outlet||S}function $f(t,n){let e=t.filter(i=>Qe(i)===n);return e.push(...t.filter(i=>Qe(i)!==n)),e}var Ma={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Vc(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Hf(t,n,e,i,r,o,a){let s=jc(t,n,e);if(!s.matched)return _(s);let l=Vc(o(s));return i=zf(n,i),Bf(i,n,e,r,l,a).pipe(H(d=>d===!0?s:p({},Ma)))}function jc(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?p({},Ma):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||uc)(e,t,n);if(!r)return p({},Ma);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?p(p({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function lc(t,n,e,i,r){return e.length>0&&Wf(t,e,i,r)?{segmentGroup:new $(n,qf(i,new $(e,t.children))),slicedSegments:[]}:e.length===0&&Zf(t,e,i)?{segmentGroup:new $(t.segments,Gf(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new $(t.segments,t.children),slicedSegments:e}}function Gf(t,n,e,i){let r={};for(let o of e)if(Br(t,n,o)&&!i[Qe(o)]){let a=new $([],{});r[Qe(o)]=a}return p(p({},i),r)}function qf(t,n){let e={};e[S]=n;for(let i of t)if(i.path===""&&Qe(i)!==S){let r=new $([],{});e[Qe(i)]=r}return e}function Wf(t,n,e,i){return e.some(r=>!Br(t,n,r)||!(Qe(r)!==S)?!1:!(i!==void 0&&Qe(r)===i))}function Zf(t,n,e){return e.some(i=>Br(t,n,i))}function Br(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Yf(t,n,e){return n.length===0&&!t.children[e]}var Sa=class{};async function Kf(t,n,e,i,r,o,a="emptyOnly",s){return new Aa(t,n,e,i,r,a,o,s).recognize()}var Xf=31,Aa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Ea(this.urlSerializer,this.urlTree)}noMatchError(n){return new E(4002,`'${n.segmentGroup}'`)}async recognize(){let n=lc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Be(i,e),o=new yi("",r),a=Dc(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new An([],Object.freeze({}),Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,S,e),rootSnapshot:e}}catch(i){if(i instanceof Ci)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof yt?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Be?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=i.children[l],f=$f(e,l),b=await this.processSegmentGroup(n,f,d,l,r);a.push(...b)}let s=Uc(a);return Qf(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(d){if(d instanceof yt||Nc(d))continue;throw d}if(Yf(i,r,o))return new Sa;throw new yt(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Qe(i)!==a&&(a===S||!Br(r,o,i)))throw new yt(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new yt(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:d,consumedSegments:f,positionalParamSegments:b,remainingSegments:A}=jc(e,r,o);if(!l)throw new yt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Xf&&(this.allowRedirects=!1));let ne=this.createSnapshot(n,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Q=await this.applyRedirects.applyRedirectCommands(f,r.redirectTo,b,Vc(ne),n),J=await this.applyRedirects.lineralizeSegments(r,Q);return this.processSegment(n,i,e,J.concat(A),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new An(i,r,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,eh(e),Qe(e),e.component??e._loadedComponent??null,e,th(e),n),s=Ta(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=xe=>this.createSnapshot(n,i,xe.consumedSegments,xe.parameters,a),l=await yr(Hf(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new yt(e);n=i._injector??n;let{routes:d}=await this.getChildConfig(n,i,r),f=i._loadedInjector??n,{parameters:b,consumedSegments:A,remainingSegments:ne}=l,Q=this.createSnapshot(n,i,A,b,a),{segmentGroup:J,slicedSegments:T}=lc(e,A,ne,d,o);if(T.length===0&&J.hasChildren()){let xe=await this.processChildren(f,d,J,Q);return new Be(Q,xe)}if(d.length===0&&T.length===0)return new Be(Q,[]);let V=Qe(i)===o,re=await this.processSegment(f,d,J,T,V?S:o,!0,Q);return new Be(Q,re instanceof Be?[re]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await yr(Lf(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw jf(e)}return{routes:[],injector:n}}};function Qf(t){t.sort((n,e)=>n.value.outlet===S?-1:e.value.outlet===S?1:n.value.outlet.localeCompare(e.value.outlet))}function Jf(t){let n=t.value.routeConfig;return n&&n.path===""}function Uc(t){let n=[],e=new Set;for(let i of t){if(!Jf(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=Uc(i.children);n.push(new Be(i.value,r))}return n.filter(i=>!e.has(i))}function eh(t){return t.data||{}}function th(t){return t.resolve||{}}function nh(t,n,e,i,r,o,a){return dt(async s=>{let{state:l,tree:d}=await Kf(t,n,e,i,s.extractedUrl,r,o,a);return P(p({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function ih(t){return dt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return _(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of zc(s))o.add(l);let a=0;return be(o).pipe(ln(s=>r.has(s)?rh(s,e,t):(s.data=Ta(s,s.parent,t).resolve,_(void 0))),ye(()=>a++),No(1),dt(s=>a===o.size?_(n):Me))})}function zc(t){let n=t.children.map(e=>zc(e)).flat();return[t,...n]}function rh(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Rc(i)&&(r[Di]=i.title),Ui(()=>(t.data=Ta(t,t.parent,e).resolve,oh(r,t,n).pipe(H(o=>(t._resolvedData=o,t.data=p(p({},t.data),o),null)))))}function oh(t,n,e){let i=pa(t);if(i.length===0)return _({});let r={};return be(i).pipe(dt(o=>ah(t[o],n,e).pipe(xt(),ye(a=>{if(a instanceof In)throw Pr(new Ot,a);r[o]=a}))),No(1),H(()=>r),sn(o=>Nc(o)?Me:ji(o)))}function ah(t,n,e){let i=n._environmentInjector,r=Fn(t,i),o=r.resolve?r.resolve(n,e):Ae(i,()=>r(n,e));return Xt(o)}function cc(t){return Se(n=>{let e=t(n);return e?be(e).pipe(H(()=>n)):_(n)})}var Na=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===S);return i}getResolvedTitleForRoute(e){return e.data[Di]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c($c),providedIn:"root"})}return t})(),$c=(()=>{class t extends Na{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(M(Tt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),On=new y("",{factory:()=>({})}),Ei=new y(""),Hc=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(cl);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await fc(Ae(e,()=>i.loadComponent())),a=await Wc(qc(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Gc(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Gc(t,n,e,i){let r=await fc(Ae(e,()=>t.loadChildren())),o=await Wc(qc(r)),a;o instanceof el||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,d=!1,f;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,f=a,l=s.get(Ei,[],{optional:!0,self:!0}).flat()),{routes:l.map(Pa),injector:s,factory:f}}function sh(t){return t&&typeof t=="object"&&"default"in t}function qc(t){return sh(t)?t.default:t}async function Wc(t){return t}var Vr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(lh),providedIn:"root"})}return t})(),lh=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zc=new y("");var ch=()=>{},Yc=new y(""),ka=(()=>{class t{currentNavigation=I(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=I(null);events=new te;transitionAbortWithErrorSubject=new te;configLoader=c(Hc);environmentInjector=c(Pe);destroyRef=c(dn);urlSerializer=c(Qt);rootContexts=c(Tn);location=c(Gt);inputBindingEnabled=c(Lr,{optional:!0})!==null;titleStrategy=c(Na);options=c(On,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(Vr);createViewTransition=c(Zc,{optional:!0});navigationErrorHandler=c(Yc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Mr(r)),i=r=>this.events.next(new Sr(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;z(()=>{this.transitions?.next(P(p({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ee(null),this.transitions.pipe(Fe(i=>i!==null),Se(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return _(i).pipe(Se(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",ve.SupersededByNewNavigation),Me;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?P(p({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!=="reload")return this.events.next(new st(s.id,this.urlSerializer.serialize(s.rawUrl),"",xn.IgnoredSameUrlNavigation)),s.resolve(!1),Me;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _(s).pipe(Se(b=>(this.events.next(new Nt(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),b.id!==this.navigationId?Me:Promise.resolve(b))),nh(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ye(b=>{i.targetSnapshot=b.targetSnapshot,i.urlAfterRedirects=b.urlAfterRedirects,this.currentNavigation.update(A=>(A.finalUrl=b.urlAfterRedirects,A)),this.events.next(new vi)}),Se(b=>be(i.routesRecognizeHandler.deferredHandle??_(void 0)).pipe(H(()=>b))),ye(()=>{let b=new gi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(b)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:b,extractedUrl:A,source:ne,restoredState:Q,extras:J}=s,T=new Nt(b,this.urlSerializer.serialize(A),ne,Q);this.events.next(T);let V=Ac(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=P(p({},s),{targetSnapshot:V,urlAfterRedirects:A,extras:P(p({},J),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(re=>(re.finalUrl=A,re)),_(i)}else return this.events.next(new st(s.id,this.urlSerializer.serialize(s.extractedUrl),"",xn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Me}),H(s=>{let l=new Dr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=P(p({},s),{guards:bf(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),If(s=>this.events.next(s)),Se(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Pr(this.urlSerializer,s.guardsResult);let l=new wr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Me;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ve.GuardRejected),Me;if(s.guards.canActivateChecks.length===0)return _(s);let d=new xr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Me;let f=!1;return _(s).pipe(ih(this.paramsInheritanceStrategy),ye({next:()=>{f=!0;let b=new Er(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(b)},complete:()=>{f||this.cancelNavigationTransition(s,"",ve.NoDataFromResolver)}}))}),cc(s=>{let l=f=>{let b=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let A=f._environmentInjector;b.push(this.configLoader.loadComponent(A,f.routeConfig).then(ne=>{f.component=ne}))}for(let A of f.children)b.push(...l(A));return b},d=l(s.targetSnapshot.root);return d.length===0?_(s):be(Promise.all(d).then(()=>s))}),cc(()=>this.afterPreactivation()),Se(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?be(d).pipe(H(()=>i)):_(i)}),wt(1),Se(s=>{let l=hf(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=P(p({},s),{targetRouterState:l}),this.currentNavigation.update(f=>(f.targetRouterState=l,f)),this.events.next(new Mn);let d=i.beforeActivateHandler.deferredHandle;return d?be(d.then(()=>s)):_(s)}),ye(s=>{new xa(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=ch,l)),this.lastSuccessfulNavigation.set(z(this.currentNavigation)),this.events.next(new qe(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),it(kc(o.signal).pipe(Fe(()=>!r&&!i.targetRouterState),ye(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",ve.Aborted)}))),ye({complete:()=>{r=!0}}),it(this.transitionAbortWithErrorSubject.pipe(ye(s=>{throw s}))),ut(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",ve.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),sn(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Me;if(Pc(s))this.events.next(new Ge(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),vf(s)?this.events.next(new Sn(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Kt(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=Ae(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof In){let{message:f,cancellationCode:b}=Pr(this.urlSerializer,d);this.events.next(new Ge(i.id,this.urlSerializer.serialize(i.extractedUrl),f,b)),this.events.next(new Sn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return Me}))}))}cancelNavigationTransition(e,i,r){let o=new Ge(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=z(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dh(t){return t!==Dn}var Kc=new y("");var Xc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(uh),providedIn:"root"})}return t})(),kr=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},uh=(()=>{class t extends kr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ut(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jr=(()=>{class t{urlSerializer=c(Qt);options=c(On,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Gt);urlHandlingStrategy=c(Vr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new De;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof De?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=Ac(null,c(Pe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>c(mh),providedIn:"root"})}return t})(),mh=(()=>{class t extends jr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Nt?this.updateStateMemento():e instanceof st?this.commitTransition(i):e instanceof gi?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Mn?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ge&&!Sc(e)?this.restoreHistory(i):e instanceof Kt?this.restoreHistory(i,!0):e instanceof qe&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,d=p(p({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",d)}else{let l=p(p({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?p({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):p({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ut(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function La(t,n){t.events.pipe(Fe(e=>e instanceof qe||e instanceof Ge||e instanceof Kt||e instanceof st),H(e=>e instanceof qe||e instanceof st?0:(e instanceof Ge?e.code===ve.Redirect||e.code===ve.SupersededByNewNavigation:!1)?2:1),Fe(e=>e!==2),wt(1)).subscribe(()=>{n()})}var _t=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Bo);stateManager=c(jr);options=c(On,{optional:!0})||{};pendingTasks=c(Vs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(ka);urlSerializer=c(Qt);location=c(Gt);urlHandlingStrategy=c(Vr);injector=c(Pe);_events=new te;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Xc);injectorCleanup=c(Kc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Ei,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Lr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new on;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=z(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Ge&&i.code!==ve.Redirect&&i.code!==ve.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof qe)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Sn){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=p({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||dh(r.source)},a);this.scheduleNavigation(s,Dn,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}mf(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Dn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=P(p({},o),{browserUrl:e})),r){let d=p({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(d=>{this.disposed||this.injector.get(Zn)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return z(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Pa),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,d=l?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=p(p({},this.currentUrlTree.queryParams),o);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=o||null}f!==null&&(f=this.removeEmptyProps(f));let b;try{let A=r?r.snapshot:this.routerState.snapshot.root;b=wc(A)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),b=this.currentUrlTree.root}return xc(b,e,f,d??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Pt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Dn,null,i)}navigate(e,i={skipLocationChange:!1}){return fh(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Vt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=p({},Ia):i===!1?r=p({},hi):r=p(p({},hi),i),Pt(e))return ga(this.currentUrlTree,e,r);let o=this.parseUrl(e);return ga(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((b,A)=>{s=b,l=A});let f=this.pendingTasks.add();return La(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fh(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new E(4008,!1)}var hh=(()=>{class t{router=c(_t);stateManager=c(jr);fragment=I("");queryParams=I({});path=I("");serializer=c(Qt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof qe&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new De(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),We=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new er("href"),{optional:!0});reactiveHref=ul(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return z(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return z(this._target)}_target=I(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return z(this._queryParams)}_queryParams=I(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return z(this._fragment)}_fragment=I(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return z(this._queryParamsHandling)}_queryParamsHandling=I(void 0);set state(e){this._state.set(e)}get state(){return z(this._state)}_state=I(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return z(this._info)}_info=I(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return z(this._relativeTo)}_relativeTo=I(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return z(this._preserveFragment)}_preserveFragment=I(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return z(this._skipLocationChange)}_skipLocationChange=I(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return z(this._replaceUrl)}_replaceUrl=I(!1);isAnchorElement;onChanges=new te;applicationErrorHandler=c(Zn);options=c(On,{optional:!0});reactiveRouterState=c(hh);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=I(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Pt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=ie(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Pt(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return z(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(N(_t),N(Je),ko("tabindex"),N(Ce),N(Z),N(Ht))};static \u0275dir=F({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&R("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&oe("href",r.reactiveHref(),Qs)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ue],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ue],replaceUrl:[2,"replaceUrl","replaceUrl",ue],routerLink:"routerLink"},features:[je]})}return t})(),Ba=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new L;link=c(We,{optional:!0});constructor(e,i,r,o){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof qe&&this.update()})}ngAfterContentInit(){_(this.links.changes,_(null)).pipe(Po()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=be(e).pipe(Po()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=ph(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?p({},Ia):p({},hi);return r=>{let o=r.urlTree;return o?z(Ra(o,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||t)(N(_t),N(Z),N(Ce),N(ht))};static \u0275dir=F({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&Xi(o,We,5),i&2){let a;me(a=fe())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[je]})}return t})();function ph(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Qc=new y(""),gh=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Dn;restoredId=0;store={};urlSerializer=c(Qt);zone=c(q);viewportScroller=c(Vl);transitions=c(ka);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Nt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof qe?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof st&&e.code===xn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof En)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=z(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new En(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Zi()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function Va(t,...n){return cn([{provide:Ei,multi:!0,useValue:t},[],{provide:Je,useFactory:vh},{provide:nl,multi:!0,useFactory:yh},n.map(e=>e.\u0275providers)])}function vh(){return c(_t).routerState.root}function bh(t,n){return{\u0275kind:t,\u0275providers:n}}function ja(t={}){return bh(4,[{provide:Qc,useFactory:()=>new gh(t)}])}function yh(){let t=c(_e);return n=>{let e=t.get(pn);if(n!==e.components[0])return;let i=t.get(_t),r=t.get(_h);t.get(Ch)===1&&i.initialNavigation(),t.get(Dh,null,{optional:!0})?.setUpPreloading(),t.get(Qc,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var _h=new y("",{factory:()=>new te}),Ch=new y("",{factory:()=>1});var Dh=new y("");var wh="@",xh=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(_e);loadingSchedulerFn=c(Eh,{optional:!0});_engine;constructor(e,i,r,o,a){this.doc=e,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-USSFOVJ3.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(r=>{throw new E(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,i){let r=this.delegate.createRenderer(e,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Ua(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,i);o.use(s),this.scheduler??=this.injector.get(Us,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(i){Zi()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Ua=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,i,r){this.delegate.insertBefore(n,e,i,r)}removeChild(n,e,i,r){this.delegate.removeChild(n,e,i,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,i)),this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,i,r)),this.delegate.listen(n,e,i,r)}shouldReplay(n){return this.replay!==null&&n.startsWith(wh)}},Eh=new y("");function Jc(t="animations"){return Wi("NgAsyncAnimations"),cn([{provide:rt,useFactory:()=>new xh(c(k),c(ai),c(q),t)},{provide:Hi,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Pn=new y("ARTICLES_DATA_SERVICE");var lt=class t{articles=I([]);activePage=I(1);setArticles(n){this.articles.set(n)}setActivePage(n){this.activePage.set(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ur=class t{article;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-home-article-card"]],inputs:{article:"article"},decls:11,vars:11,consts:[[3,"src","alt"]],template:function(e,i){e&1&&(D(0,"article"),se(1,"img",0),D(2,"div")(3,"h3"),u(4),x(),D(5,"small")(6,"time"),u(7),St(8,"date"),x()(),D(9,"p"),u(10),x()()()),e&2&&(h(),mt("src",i.article.image,Mt)("alt",i.article.title),h(3),O(i.article.title),h(2),oe("datetime",i.article.date),h(),O(At(8,6,i.article.date,"d MMMM y","","ru")),h(3),O(i.article.description))},dependencies:[vt],styles:["[_nghost-%COMP%]{display:block;margin-bottom:22px}article[_ngcontent-%COMP%]{display:flex;align-items:stretch;border-radius:16px;overflow:hidden}[_nghost-%COMP%]:nth-of-type(odd)   article[_ngcontent-%COMP%]{background-color:var(--bg-peach)}[_nghost-%COMP%]:nth-of-type(even)   article[_ngcontent-%COMP%]{background-color:var(--light-green)}article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;min-height:0;max-height:240px;height:240px;object-fit:cover;flex-shrink:0}article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:26px;display:flex;flex-direction:column;justify-content:center}article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700;line-height:1.35;margin-bottom:6px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px;line-height:1.5;margin:4px 0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px}@media(max-width:800px){article[_ngcontent-%COMP%]{flex-direction:column}article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:260px;height:260px}}"]})};var Sh=(t,n)=>n.title;function Ah(t,n){if(t&1&&(D(0,"article")(1,"small"),u(2,"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"),x(),D(3,"strong"),u(4),x(),D(5,"p"),u(6),x()()),t&2){let e=n.$implicit;h(4),O(e.title),h(2),O(e.description)}}var zr=class t{items=pe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-main-education"]],inputs:{items:[1,"items"]},decls:6,vars:0,consts:[[1,"education-section","container"],[1,"career-list"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"h2"),u(2,"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"),x(),D(3,"div",1),Ie(4,Ah,7,2,"article",null,Sh),x()()),e&2&&(h(4),Re(i.items()))},styles:['.education-section[_ngcontent-%COMP%]{padding:60px 0;border-top:1px solid var(--light-gray)}.education-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px;color:var(--dark)}.career-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding-bottom:25px;position:relative}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:1px;background:var(--light-gray);margin-top:20px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child:after{display:none}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px;display:block;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:18px;font-weight:700;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px}']})};var $r=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-main-hero"]],decls:9,vars:0,consts:[[1,"about-section","container"],["routerLink","/blog",1,"more-link"],["src","image/owl.jpg","alt","\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F \u0441\u043E\u0432\u0430"]],template:function(e,i){e&1&&(m(0,"section",0)(1,"div")(2,"h1"),u(3,"\u041E\u0431\u043E \u043C\u043D\u0435"),g(),m(4,"p"),u(5,"\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C! \u042F \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u041D\u0415 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 5-\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432. \u041D\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0431\u043B\u043E\u0433\u0435 \u044F \u0434\u0435\u043B\u044E\u0441\u044C \u0441\u0432\u043E\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u043D\u0438\u044F\u043C\u0438. \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0451\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u0443\u0437\u043D\u0430\u0435\u0442\u0435 \u043F\u0440\u043E \u043C\u0435\u043D\u044F \u0438 \u043F\u0440\u043E \u043C\u043E\u0439 \u043F\u0443\u0442\u044C!"),g(),m(6,"a",1),u(7,"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431\u043E \u043C\u043D\u0435 \u203A"),g()(),Y(8,"img",2),g())},dependencies:[We],styles:[".about-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:40px;padding:80px 0 60px}.about-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:15px;color:var(--dark)}.about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:480px;color:var(--gray);font-size:15px}.more-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-top:20px;color:var(--accent-green);font-size:15px;font-weight:700;transition:opacity .3s ease}.more-link[_ngcontent-%COMP%]:hover{opacity:.7}.about-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:340px;height:400px;object-fit:cover;border-radius:200px;flex-shrink:0}@media(max-width:800px){.about-section[_ngcontent-%COMP%]{flex-direction:column;padding:40px 0 30px}.about-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:300px}}"]})};var Ih=(t,n)=>n.label;function Rh(t,n){if(t&1&&(D(0,"div",2),se(1,"img",3),D(2,"div",4)(3,"p"),u(4),x()()()),t&2){let e=n.$implicit;h(),mt("src",e.image,Mt)("alt",e.alt),h(3),O(e.label)}}var Hr=class t{intro=pe("");items=pe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-main-hobbies"]],inputs:{intro:[1,"intro"],items:[1,"items"]},decls:8,vars:1,consts:[[1,"hobby-section","container"],[1,"hobby-grid"],[1,"hobby-card"],[3,"src","alt"],[1,"overlay"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"h2"),u(2,"Hobby projects"),x(),D(3,"p"),u(4),x(),D(5,"div",1),Ie(6,Rh,5,3,"div",2,Ih),x()()),e&2&&(h(4),O(i.intro()),h(2),Re(i.items()))},styles:[".hobby-section[_ngcontent-%COMP%]{padding:60px 0}.hobby-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px}.hobby-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--gray);max-width:500px;margin-bottom:30px;font-size:15px}.hobby-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.hobby-card[_ngcontent-%COMP%]{position:relative;height:300px;border-radius:16px;overflow:hidden;cursor:pointer}.hobby-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hobby-card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#2d3142b3;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .4s ease}.hobby-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.hobby-card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--white);font-size:20px;font-weight:700;text-align:center;padding:20px}@media(max-width:800px){.hobby-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var Th=(t,n)=>n.text;function Fh(t,n){if(t&1&&(D(0,"div",2),u(1),x()),t&2){let e=n.$implicit;h(),O(e.text)}}var Gr=class t{items=pe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-main-skills"]],inputs:{items:[1,"items"]},decls:6,vars:0,consts:[[1,"skills-section","container"],[1,"skills-grid"],[1,"skill-item"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"h2"),u(2,"\u041D\u0430\u0432\u044B\u043A\u0438"),x(),D(3,"div",1),Ie(4,Fh,2,1,"div",2,Th),x()()),e&2&&(h(4),Re(i.items()))},styles:['.skills-section[_ngcontent-%COMP%]{padding:60px 0;border-top:1px solid var(--light-gray)}.skills-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:0 30px}.skill-item[_ngcontent-%COMP%]{padding:18px 0;font-size:16px;color:var(--dark);position:relative;place-self:end stretch}.skill-item[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:1px;background:var(--light-gray);position:absolute;bottom:0;left:0}@media(max-width:800px){.skills-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})};var Oh=(t,n)=>n.title;function Ph(t,n){if(t&1&&(D(0,"article")(1,"small"),u(2),x(),D(3,"strong"),u(4),x(),D(5,"p"),u(6),x()()),t&2){let e=n.$implicit;h(2),O(e.kind),h(2),O(e.title),h(2),O(e.description)}}var qr=class t{items=pe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-main-work"]],inputs:{items:[1,"items"]},decls:9,vars:0,consts:[[1,"work-section","container"],[1,"section-header"],[1,"career-list"]],template:function(e,i){e&1&&(D(0,"section",0)(1,"div",1)(2,"h2"),u(3,"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"),x(),D(4,"p"),u(5,"\u0423\u0447\u0435\u043D\u0438\u043A \u0428\u043A\u043E\u043B\u044B EltexSchool, \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u043F\u0430\u0440\u0435\u043D\u044C"),x()(),D(6,"div",2),Ie(7,Ph,7,3,"article",null,Oh),x()()),e&2&&(h(7),Re(i.items()))},styles:['.work-section[_ngcontent-%COMP%]{padding:60px 0;border-top:1px solid var(--light-gray);display:flex;gap:60px;align-items:flex-start}.section-header[_ngcontent-%COMP%]{flex-shrink:0;max-width:320px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:15px;color:var(--dark)}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:15px}.career-list[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:30px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding-bottom:25px;position:relative}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:1px;background:var(--light-gray);margin-top:20px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child:after{display:none}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px;display:block;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:18px;font-weight:700;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px}@media(max-width:800px){.work-section[_ngcontent-%COMP%]{flex-direction:column;gap:30px}.section-header[_ngcontent-%COMP%]{max-width:100%}}']})};var Nh=(t,n)=>n.id;function kh(t,n){if(t&1&&Y(0,"app-home-article-card",3),t&2){let e=n.$implicit;B("article",e)}}function Lh(t,n){if(t&1&&(m(0,"section",0)(1,"h2"),u(2,"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0421\u0442\u0430\u0442\u044C\u0438"),g(),Ie(3,kh,1,1,"app-home-article-card",3,Nh),m(5,"div",4)(6,"a",5),u(7,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"),g()()()),t&2){let e=G();h(3),Re(e.latestArticles())}}var Wr=class t{store=c(lt);articlesData=c(Pn);title=c(Tt);skillItems=[{text:"HTML5, CSS3, \u0431\u0430\u0437\u043E\u0432\u044B\u0439 JavaScript"},{text:"\u042F\u0437\u044B\u043A\u0438: C, Python, Go (\u0438\u0437\u0443\u0447\u0430\u044E)"},{text:"\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u043C\u0438\u043A\u0440\u043E\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u0430\u043C\u0438: ESP32, Arduino"}];workItems=[{kind:"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",title:"\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D",description:"\u041F\u043E\u043C\u043E\u0433\u0430\u043B \u043C\u0430\u043C\u0435 \u0432 \u0446\u0432\u0435\u0442\u043E\u0447\u043D\u043E\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u043A\u0430\u0436\u0434\u043E\u0435 8 \u043C\u0430\u0440\u0442\u0430"},{kind:"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",title:"\u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A-\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u0438\u0439",description:"\u0420\u044B\u0431\u0430\u0447\u0438\u043B, \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043D\u0430 \u0437\u0430\u0432\u043E\u0434\u0435"},{kind:"\u0421\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043A\u0430",title:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",description:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438, \u043F\u043E\u043C\u043E\u0449\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"}];educationItems=[{title:"\u0421\u0438\u0431\u0413\u0423\u0422\u0418",description:"\u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0422\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439 \u0438 \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438, 09.03.01 \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430"}];hobbyItems=[{image:"image/nature.jpg",alt:"\u041F\u0440\u0438\u0440\u043E\u0434\u0430",label:"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F"},{image:"image/electronics.jpg",alt:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",label:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"},{image:"image/drawing.jpg",alt:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",label:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435"}];hobbyIntro="\u041F\u043E\u043C\u0438\u043C\u043E \u0443\u0447\u0451\u0431\u044B \u0438 \u0440\u0430\u0431\u043E\u0442\u044B, \u044F \u0443\u0432\u043B\u0435\u043A\u0430\u044E\u0441\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0435\u0439, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u043E\u0439 \u0438 \u0438\u043D\u043E\u0433\u0434\u0430 \u0440\u0438\u0441\u0443\u044E.";latestArticles=ie(()=>[...this.store.articles()].sort((i,r)=>new Date(r.date).getTime()-new Date(i.date).getTime()).slice(0,2));ngOnInit(){this.title.setTitle("Name-folio"),this.articlesData.fetch().subscribe(n=>this.apply(n))}apply(n){this.store.setArticles(n.articles),this.store.setActivePage(n.activePage)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-main"]],decls:7,vars:6,consts:[[1,"articles-section","container"],[3,"items"],[3,"intro","items"],[3,"article"],[1,"articles-all"],["routerLink","/blog"]],template:function(e,i){e&1&&(m(0,"main"),Y(1,"app-main-hero"),j(2,Lh,8,0,"section",0),Y(3,"app-main-skills",1)(4,"app-main-work",1)(5,"app-main-education",1)(6,"app-main-hobbies",2),g()),e&2&&(h(2),U(i.latestArticles().length>0?2:-1),h(),B("items",i.skillItems),h(),B("items",i.workItems),h(),B("items",i.educationItems),h(),B("intro",i.hobbyIntro)("items",i.hobbyItems))},dependencies:[We,Ur,$r,Gr,qr,zr,Hr],styles:[".articles-section[_ngcontent-%COMP%]{padding:50px 0}.articles-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px;color:var(--dark)}.articles-section[_ngcontent-%COMP%] > .articles-all[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:24px}.articles-section[_ngcontent-%COMP%] > .articles-all[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:inline-block;padding:12px 30px;border:1px solid var(--accent-green);border-radius:25px;color:var(--accent-green);font-size:15px;transition:all .3s ease}.articles-section[_ngcontent-%COMP%] > .articles-all[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background:var(--accent-green);color:var(--white)}"]})};var Mi=7,ed="blog-articles",td="blog-active-page",Zr=class t{constructor(n){this.store=n}pageSize=Mi;fetch(){let n=this.store.articles();if(n.length>0)return _(this.buildResult(n,this.store.activePage()));let e=this.readArticlesFromStorage(),i=this.readPageFromStorage(),r=Math.max(1,Math.ceil(e.length/this.pageSize)),o=e.length===0?1:Math.min(Math.max(1,i),r);return o!==i&&this.writePageToStorage(o),_(this.buildResult(e,o))}add(n){let e=[n,...this.getAllFromStoreOrLs()];this.writeArticlesToStorage(e);let i=1;return this.writePageToStorage(i),_(this.buildResult(e,i))}update(n){let e=this.getAllFromStoreOrLs().map(o=>o.id===n.id?n:o);this.writeArticlesToStorage(e);let i=this.store.activePage(),r=Math.max(1,Math.ceil(e.length/this.pageSize));return i=e.length===0?1:Math.min(Math.max(1,i),r),this.writePageToStorage(i),_(this.buildResult(e,i))}remove(n){let e=this.getAllFromStoreOrLs().filter(o=>o.id!==n);this.writeArticlesToStorage(e);let i=this.store.activePage(),r=Math.max(1,Math.ceil(e.length/this.pageSize));return i=e.length===0?1:Math.min(i,r),this.writePageToStorage(i),_(this.buildResult(e,i))}goToPage(n){let e=this.getAllFromStoreOrLs(),i=Math.max(1,Math.ceil(e.length/this.pageSize)),r=e.length===0?1:Math.min(Math.max(1,n),i);return this.writePageToStorage(r),_(this.buildResult(e,r))}getAllFromStoreOrLs(){let n=this.store.articles();return n.length>0?n.map(e=>p({},e)):this.readArticlesFromStorage()}readArticlesFromStorage(){if(typeof localStorage>"u")return[];try{let n=localStorage.getItem(ed);if(!n)return[];let e=JSON.parse(n);return Array.isArray(e)?e:[]}catch{return[]}}readPageFromStorage(){if(typeof localStorage>"u")return 1;let n=localStorage.getItem(td);if(!n)return 1;let e=parseInt(n,10);return Number.isFinite(e)&&e>=1?e:1}writeArticlesToStorage(n){typeof localStorage>"u"||localStorage.setItem(ed,JSON.stringify(n))}writePageToStorage(n){typeof localStorage>"u"||localStorage.setItem(td,String(n))}buildResult(n,e){let i=(e-1)*this.pageSize,r=n.slice(i,i+this.pageSize);return{articles:n,pageItems:r,total:n.length,activePage:e}}static \u0275fac=function(e){return new(e||t)(M(lt))};static \u0275prov=v({token:t,factory:t.\u0275fac})};function Si(t){return t.buttons===0||t.detail===0}function Ai(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var za;function nd(){if(za==null){let t=typeof document<"u"?document.head:null;za=!!(t&&(t.createShadowRoot||t.attachShadow))}return za}function $a(t){if(nd()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function et(t){return t.composedPath?t.composedPath()[0]:t.target}var Ha;try{Ha=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ha=!1}var we=(()=>{class t{_platformId=c(un);isBrowser=this._platformId?Bl(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ha)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ii;function id(){if(Ii==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ii=!0}))}finally{Ii=Ii||!1}return Ii}function Nn(t){return id()?t:!!t.capture}function tt(t){return t instanceof Z?t.nativeElement:t}var rd=new y("cdk-input-modality-detector-options"),od={ignoreKeys:[18,17,224,91,16]},ad=650,Ga={passive:!0,capture:!0},sd=(()=>{class t{_platform=c(we);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ee(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=et(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ad||(this._modality.next(Si(e)?"keyboard":"mouse"),this._mostRecentTarget=et(e))};_onTouchstart=e=>{if(Ai(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=et(e)};constructor(){let e=c(q),i=c(k),r=c(rd,{optional:!0});if(this._options=p(p({},od),r),this.modalityDetected=this._modality.pipe(ks(1)),this.modalityChanged=this.modalityDetected.pipe(Fs()),this._platform.isBrowser){let o=c(rt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Ga),o.listen(i,"mousedown",this._onMousedown,Ga),o.listen(i,"touchstart",this._onTouchstart,Ga)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ri=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Ri||{}),ld=new y("cdk-focus-monitor-default-options"),Yr=Nn({passive:!0,capture:!0}),qa=(()=>{class t{_ngZone=c(q);_platform=c(we);_inputModalityDetector=c(sd);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(k);_stopInputModalityDetector=new te;constructor(){let e=c(ld,{optional:!0});this._detectionMode=e?.detectionMode||Ri.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=et(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=tt(e);if(!this._platform.isBrowser||r.nodeType!==1)return _();let o=$a(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new te,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=tt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=tt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ri.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Ri.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?ad:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=et(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Yr),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Yr)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(it(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Yr),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Yr),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kr=new WeakMap,Jt=(()=>{class t{_appRef;_injector=c(_e);_environmentInjector=c(Pe);load(e){let i=this._appRef=this._appRef||this._injector.get(pn),r=Kr.get(i);r||(r={loaders:new Set,refs:[]},Kr.set(i,r),i.onDestroy(()=>{Kr.get(i)?.refs.forEach(o=>o.destroy()),Kr.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(pl(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xr;function Bh(){if(Xr===void 0&&(Xr=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Xr=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Xr}function kn(t){return Bh()?.createHTML(t)||t}var cd=new Set,en,Wa=(()=>{class t{_platform=c(we);_nonce=c(mn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):jh}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Vh(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vh(t,n){if(!cd.has(t))try{en||(en=document.createElement("style"),n&&en.setAttribute("nonce",n),en.setAttribute("type","text/css"),document.head.appendChild(en)),en.sheet&&(en.sheet.insertRule(`@media ${t} {body{ }}`,0),cd.add(t))}catch(e){console.error(e)}}function jh(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Za={},Ct=class t{_appId=c(Yn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Za.hasOwnProperty(n)||(Za[n]=0),`${n}${e?t._infix+"-":""}${Za[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ln,dd=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ya(){if(Ln)return Ln;if(typeof document!="object"||!document)return Ln=new Set(dd),Ln;let t=document.createElement("input");return Ln=new Set(dd.filter(n=>(t.setAttribute("type",n),t.type===n))),Ln}var Uh=new y("MATERIAL_ANIMATIONS"),ud=null;function zh(){return c(Uh,{optional:!0})?.animationsDisabled||c(Hi,{optional:!0})==="NoopAnimations"?"di-disabled":(ud??=c(Wa).matchMedia("(prefers-reduced-motion)").matches,ud?"reduced-motion":"enabled")}function Bn(){return zh()!=="enabled"}function Vn(t){return t!=null&&`${t}`!="false"}var Ze=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ze||{}),Ka=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ze.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},md=Nn({passive:!0,capture:!0}),Xa=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,md)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,md)))}_delegateEventHandler=n=>{let e=et(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Ti={enterDuration:225,exitDuration:150},Hh=800,fd=Nn({passive:!0,capture:!0}),hd=["mousedown","touchstart"],pd=["mouseup","mouseleave","touchend","touchcancel"],Gh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Qr=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xa;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=tt(i)),o&&o.get(Jt).load(Gh)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=p(p({},Ti),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||qh(n,e,r),s=n-r.left,l=e-r.top,d=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${l-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,i.color!=null&&(f.style.backgroundColor=i.color),f.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(f);let b=window.getComputedStyle(f),A=b.transitionProperty,ne=b.transitionDuration,Q=A==="none"||ne==="0s"||ne==="0s, 0s"||r.width===0&&r.height===0,J=new Ka(this,f,i,Q);f.style.transform="scale3d(1, 1, 1)",J.state=Ze.FADING_IN,i.persistent||(this._mostRecentTransientRipple=J);let T=null;return!Q&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let V=()=>{T&&(T.fallbackTimer=null),clearTimeout(xe),this._finishRippleTransition(J)},re=()=>this._destroyRipple(J),xe=setTimeout(re,d+100);f.addEventListener("transitionend",V),f.addEventListener("transitioncancel",re),T={onTransitionEnd:V,onTransitionCancel:re,fallbackTimer:xe}}),this._activeRipples.set(J,T),(Q||!d)&&this._finishRippleTransition(J),J}fadeOutRipple(n){if(n.state===Ze.FADING_OUT||n.state===Ze.HIDDEN)return;let e=n.element,i=p(p({},Ti),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Ze.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=tt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,hd.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{pd.forEach(e=>{this._triggerElement.addEventListener(e,this,fd)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Ze.FADING_IN?this._startFadeOutTransition(n):n.state===Ze.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Ze.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Ze.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Si(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Hh;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ai(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Ze.VISIBLE||n.config.terminateOnPointerUp&&n.state===Ze.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(hd.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(pd.forEach(e=>n.removeEventListener(e,this,fd)),this._pointerUpEventsRegistered=!1))}};function qh(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var gd=new y("mat-ripple-global-options");var Wh={capture:!0},Zh=["focus","mousedown","mouseenter","touchstart"],Qa="mat-ripple-loader-uninitialized",Ja="mat-ripple-loader-class-name",vd="mat-ripple-loader-centered",Jr="mat-ripple-loader-disabled",bd=(()=>{class t{_document=c(k);_animationsDisabled=Bn();_globalRippleOptions=c(gd,{optional:!0});_platform=c(we);_ngZone=c(q);_injector=c(_e);_eventCleanups;_hosts=new Map;constructor(){let e=c(rt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Zh.map(i=>e.listen(this._document,i,this._onInteraction,Wh)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Qa,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Ja))&&e.setAttribute(Ja,i.className||""),i.centered&&e.setAttribute(vd,""),i.disabled&&e.setAttribute(Jr,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Jr,""):e.removeAttribute(Jr)}_onInteraction=e=>{let i=et(e);if(i instanceof HTMLElement){let r=i.closest(`[${Qa}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Ja)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ti.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ti.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Jr),rippleConfig:{centered:e.hasAttribute(vd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Qr(s,this._ngZone,i,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(Qa)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Yh=["mat-icon-button",""],Kh=["*"],Xh=new y("MAT_BUTTON_CONFIG");function _d(t){return t==null?void 0:$o(t)}var es=(()=>{class t{_elementRef=c(Z);_ngZone=c(q);_animationsDisabled=Bn();_config=c(Xh,{optional:!0});_focusMonitor=c(qa);_cleanupClick;_renderer=c(Ce);_rippleLoader=c(bd);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Jt).load(yd);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Qi(r.color?"mat-"+r.color:""),K("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ue],disabled:[2,"disabled","disabled",ue],ariaDisabled:[2,"aria-disabled","ariaDisabled",ue],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ue],tabIndex:[2,"tabIndex","tabIndex",_d],_tabindex:[2,"tabindex","_tabindex",_d]}})}return t})(),tn=(()=>{class t extends es{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Le],attrs:Yh,ngContentSelectors:Kh,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ze(),se(0,"span",0),ee(1),se(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Qh=new y("cdk-dir-doc",{providedIn:"root",factory:()=>c(k)}),Jh=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Cd(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Jh.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var ts=(()=>{class t{get value(){return this.valueSignal()}valueSignal=I("ltr");change=new L;constructor(){let e=c(Qh,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Cd(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ep=["matButton",""],tp=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],np=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Dd=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),wd=(()=>{class t extends es{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=ip(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Dd.get(this._appearance):null,o=Dd.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Le],attrs:ep,ngContentSelectors:np,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ze(tp),se(0,"span",0),ee(1),D(2,"span",1),ee(3,1),x(),ee(4,2),se(5,"span",2)(6,"span",3)),i&2&&K("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function ip(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}function xd(t){return Error(`Unable to find icon with the name "${t}"`)}function rp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ed(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function Md(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Dt=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},Ad=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Dt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Ne.HTML,r);if(!a)throw Md(r);let s=kn(a);return this._addSvgIconConfig(e,i,new Dt("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Dt(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Ne.HTML,i);if(!o)throw Md(i);let a=kn(o);return this._addSvgIconSetConfig(e,new Dt("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Ne.RESOURCE_URL,e);if(!i)throw Ed(e);let r=this._cachedIconsByUrl.get(i);return r?_(eo(r)):this._loadSvgIconFromConfig(new Dt(e,null)).pipe(ye(o=>this._cachedIconsByUrl.set(i,o)),H(o=>eo(o)))}getNamedSvgIcon(e,i=""){let r=Sd(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):ji(xd(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?_(eo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(H(i=>eo(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return _(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(sn(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ne.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),_(null)})));return zi(o).pipe(H(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw xd(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ye(i=>e.svgText=i),H(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?_(null):this._fetchIcon(e).pipe(ye(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(kn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(kn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw rp();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Ne.RESOURCE_URL,i);if(!a)throw Ed(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(H(d=>kn(d)),ut(()=>this._inProgressUrlFetches.delete(a)),Ps());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(Sd(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return op(o)?new Dt(o.url,null,o.options):new Dt(o,null)}}static \u0275fac=function(i){return new(i||t)(M(la,8),M(ca),M(k,8),M(jt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function eo(t){return t.cloneNode(!0)}function Sd(t,n){return t+":"+n}function op(t){return!!(t.url&&t.options)}var ap=["*"],sp=new y("MAT_ICON_DEFAULT_OPTIONS"),lp=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(k),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Id=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],cp=Id.map(t=>`[${t}]`).join(", "),dp=/^url\(['"]?#(.*?)['"]?\)$/,ct=(()=>{class t{_elementRef=c(Z);_iconRegistry=c(Ad);_location=c(lp);_errorHandler=c(jt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=on.EMPTY;constructor(){let e=c(new er("aria-hidden"),{optional:!0}),i=c(sp,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(cp),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)Id.forEach(a=>{let s=i[o],l=s.getAttribute(a),d=l?l.match(dp):null;if(d){let f=r.get(s);f||(f=[],r.set(s,f)),f.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(wt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(oe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Qi(r.color?"mat-"+r.color:""),K("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ue],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ap,decls:1,vars:0,template:function(i,r){i&1&&(ze(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})();var to=class t{create=new L;stats=new L;onCreate(){this.create.emit()}onStats(){this.stats.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-admin-panel"]],outputs:{create:"create",stats:"stats"},decls:7,vars:0,consts:[[1,"admin-panel"],["mat-icon-button","","title","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","aria-label","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"admin-btn",3,"click"],["mat-icon-button","","title","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443","aria-label","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",1,"admin-btn",3,"click"]],template:function(e,i){e&1&&(m(0,"aside",0)(1,"button",1),R("click",function(){return i.onCreate()}),m(2,"mat-icon"),u(3,"add_circle"),g()(),m(4,"button",2),R("click",function(){return i.onStats()}),m(5,"mat-icon"),u(6,"bar_chart"),g()()())},dependencies:[tn,ct],styles:[".admin-panel[_ngcontent-%COMP%]{position:fixed;right:0;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;background:var(--white);border:1px solid var(--light-gray);border-radius:12px 0 0 12px;box-shadow:-2px 2px 10px #0000001f;overflow:hidden;z-index:100}.admin-btn[_ngcontent-%COMP%]{width:38px!important;height:38px!important;border:none;background:transparent;color:var(--accent-green)!important;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:color .2s ease,background .2s ease}.admin-btn[_ngcontent-%COMP%]:hover{background:var(--bg-light)}.admin-btn[_ngcontent-%COMP%] + .admin-btn[_ngcontent-%COMP%]{border-top:1px solid var(--light-gray)}"]})};var Ld=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(N(Ce),N(Z))};static \u0275dir=F({type:t})}return t})(),up=(()=>{class t extends Ld{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ut(t)))(r||t)}})();static \u0275dir=F({type:t,features:[Le]})}return t})(),Bd=new y("");var mp={provide:Bd,useExisting:Wn(()=>Hn),multi:!0};function fp(){let t=$e()?$e().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var hp=new y(""),Hn=(()=>{class t extends Ld{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!fp())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(N(Ce),N(Z),N(hp,8))};static \u0275dir=F({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&R("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ot([mp]),Le]})}return t})();function as(t){return t==null||ss(t)===0}function ss(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var ls=new y(""),cs=new y(""),pp=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,nt=class{static min(n){return gp(n)}static max(n){return vp(n)}static required(n){return bp(n)}static requiredTrue(n){return yp(n)}static email(n){return _p(n)}static minLength(n){return Cp(n)}static maxLength(n){return Dp(n)}static pattern(n){return wp(n)}static nullValidator(n){return Vd()}static compose(n){return Gd(n)}static composeAsync(n){return qd(n)}};function gp(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function vp(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function bp(t){return as(t.value)?{required:!0}:null}function yp(t){return t.value===!0?null:{required:!0}}function _p(t){return as(t.value)||pp.test(t.value)?null:{email:!0}}function Cp(t){return n=>{let e=n.value?.length??ss(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Dp(t){return n=>{let e=n.value?.length??ss(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function wp(t){if(!t)return Vd;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(as(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Vd(t){return null}function jd(t){return t!=null}function Ud(t){return Kn(t)?be(t):t}function zd(t){let n={};return t.forEach(e=>{n=e!=null?p(p({},n),e):n}),Object.keys(n).length===0?null:n}function $d(t,n){return n.map(e=>e(t))}function xp(t){return!t.validate}function Hd(t){return t.map(n=>xp(n)?n:e=>n.validate(e))}function Gd(t){if(!t)return null;let n=t.filter(jd);return n.length==0?null:function(e){return zd($d(e,n))}}function ds(t){return t!=null?Gd(Hd(t)):null}function qd(t){if(!t)return null;let n=t.filter(jd);return n.length==0?null:function(e){let i=$d(e,n).map(Ud);return zi(i).pipe(H(zd))}}function us(t){return t!=null?qd(Hd(t)):null}function Rd(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Wd(t){return t._rawValidators}function Zd(t){return t._rawAsyncValidators}function ns(t){return t?Array.isArray(t)?t:[t]:[]}function ro(t,n){return Array.isArray(t)?t.includes(n):t===n}function Td(t,n){let e=ns(n);return ns(t).forEach(r=>{ro(e,r)||e.push(r)}),e}function Fd(t,n){return ns(n).filter(e=>!ro(t,e))}var oo=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ds(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=us(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},kt=class extends oo{name;get formDirective(){return null}get path(){return null}},nn=class extends oo{_parent=null;name=null;valueAccessor=null},ao=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var mo=(()=>{class t extends ao{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(N(nn,2))};static \u0275dir=F({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Le]})}return t})(),fo=(()=>{class t extends ao{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(N(kt,10))};static \u0275dir=F({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Le]})}return t})();var Fi="VALID",no="INVALID",jn="PENDING",Oi="DISABLED",Lt=class{},so=class extends Lt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ni=class extends Lt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},ki=class extends Lt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Un=class extends Lt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},lo=class extends Lt{source;constructor(n){super(),this.source=n}},Li=class extends Lt{source;constructor(n){super(),this.source=n}};function ms(t){return(ho(t)?t.validators:t)||null}function Ep(t){return Array.isArray(t)?ds(t):t||null}function fs(t,n){return(ho(n)?n.asyncValidators:t)||null}function Mp(t){return Array.isArray(t)?us(t):t||null}function ho(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Yd(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new E(1e3,"");if(!i[e])throw new E(1001,"")}function Kd(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new E(-1002,"")})}var zn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return z(this.statusReactive)}set status(n){z(()=>this.statusReactive.set(n))}_status=ie(()=>this.statusReactive());statusReactive=I(void 0);get valid(){return this.status===Fi}get invalid(){return this.status===no}get pending(){return this.status===jn}get disabled(){return this.status===Oi}get enabled(){return this.status!==Oi}errors;get pristine(){return z(this.pristineReactive)}set pristine(n){z(()=>this.pristineReactive.set(n))}_pristine=ie(()=>this.pristineReactive());pristineReactive=I(!0);get dirty(){return!this.pristine}get touched(){return z(this.touchedReactive)}set touched(n){z(()=>this.touchedReactive.set(n))}_touched=ie(()=>this.touchedReactive());touchedReactive=I(!1);get untouched(){return!this.touched}_events=new te;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Td(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Td(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Fd(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Fd(n,this._rawAsyncValidators))}hasValidator(n){return ro(this._rawValidators,n)}hasAsyncValidator(n){return ro(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(P(p({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ki(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new ki(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(P(p({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ni(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ni(!0,i))}markAsPending(n={}){this.status=jn;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Un(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(P(p({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Oi,this.errors=null,this._forEachChild(r=>{r.disable(P(p({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new so(this.value,i)),this._events.next(new Un(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(P(p({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Fi,this._forEachChild(i=>{i.enable(P(p({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(P(p({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Fi||this.status===jn)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new so(this.value,e)),this._events.next(new Un(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(P(p({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Oi:Fi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=jn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=Ud(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Un(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new L,this.statusChanges=new L}_calculateStatus(){return this._allControlsDisabled()?Oi:this.errors?no:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(jn)?jn:this._anyControlsHaveStatus(no)?no:Fi}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Ni(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new ki(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ho(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Ep(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Mp(this._rawAsyncValidators)}},$n=class extends zn{constructor(n,e,i){super(ms(e),fs(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Kd(this,!0,n),Object.keys(n).forEach(i=>{Yd(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,P(p({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Li(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var is=class extends $n{};var hs=new y("",{factory:()=>ps}),ps="always";function Sp(t,n){return[...n.path,t]}function rs(t,n,e=ps){gs(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Ip(t,n),Tp(t,n),Rp(t,n),Ap(t,n)}function Od(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),uo(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function co(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Ap(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function gs(t,n){let e=Wd(t);n.validator!==null?t.setValidators(Rd(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Zd(t);n.asyncValidator!==null?t.setAsyncValidators(Rd(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();co(n._rawValidators,r),co(n._rawAsyncValidators,r)}function uo(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=Wd(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=Zd(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return co(n._rawValidators,i),co(n._rawAsyncValidators,i),e}function Ip(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Xd(t,n)})}function Rp(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Xd(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Xd(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Tp(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Qd(t,n){t==null,gs(t,n)}function Fp(t,n){return uo(t,n)}function Op(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Pp(t){return Object.getPrototypeOf(t.constructor)===up}function Jd(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Np(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Hn?e=o:Pp(o)?i=o:r=o}),r||i||e||null}function kp(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var Lp={provide:kt,useExisting:Wn(()=>vs)},Pi=Promise.resolve(),vs=(()=>{class t extends kt{callSetDisabledState;get submitted(){return z(this.submittedReactive)}_submitted=ie(()=>this.submittedReactive());submittedReactive=I(!1);_directives=new Set;form;ngSubmit=new L;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new $n({},ds(e),us(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Pi.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),rs(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Pi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Pi.then(()=>{let i=this._findContainer(e.path),r=new $n({});Qd(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Pi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Pi.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Jd(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new lo(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(N(ls,10),N(cs,10),N(hs,8))};static \u0275dir=F({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&R("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ot([Lp]),Le]})}return t})();function Pd(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Nd(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var io=class extends zn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(ms(e),fs(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ho(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Nd(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Li(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Pd(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Pd(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Nd(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Bp=t=>t instanceof io;var po=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var os=class extends zn{constructor(n,e,i){super(ms(e),fs(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Kd(this,!1,n),n.forEach((i,r)=>{Yd(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],P(p({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Li(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var Vp=(()=>{class t extends kt{callSetDisabledState;get submitted(){return z(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ie(()=>this._submittedReactive());_submittedReactive=I(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(uo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return rs(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Od(e.control||null,e,!1),kp(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Jd(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new lo(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Od(i||null,e),Bp(r)&&(rs(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Qd(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Fp(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){gs(this.form,this),this._oldForm&&uo(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(N(ls,10),N(cs,10),N(hs,8))};static \u0275dir=F({type:t,features:[Le,je]})}return t})();var eu=new y("");var jp={provide:nn,useExisting:Wn(()=>Bi)},Bi=(()=>{class t extends nn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new L;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Np(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Op(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Sp(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(N(kt,13),N(ls,10),N(cs,10),N(Bd,10),N(eu,8))};static \u0275dir=F({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ot([jp]),Le,je]})}return t})();var Up={provide:kt,useExisting:Wn(()=>rn)},rn=(()=>{class t extends Vp{form=null;ngSubmit=new L;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ut(t)))(r||t)}})();static \u0275dir=F({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&R("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ot([Up]),Le]})}return t})();var zp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ke({type:t});static \u0275inj=Oe({})}return t})();function kd(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var go=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return kd(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new $n(r,o)}record(e,i=null){let r=this._reduceControls(e);return new is(r,i)}control(e,i,r){let o={};return this.useNonNullable?(kd(i)?o=i:(o.validators=i,o.asyncValidators=r),new io(e,P(p({},o),{nonNullable:!0}))):new io(e,i,r)}array(e,i,r){let o=e.map(a=>this._createControl(a));return new os(o,i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof io)return e;if(e instanceof zn)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vo=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:eu,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:hs,useValue:e.callSetDisabledState??ps}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ke({type:t});static \u0275inj=Oe({imports:[zp]})}return t})();function $p(t,n){t&1&&(m(0,"small",8),u(1,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D"),g())}function Hp(t,n){t&1&&(m(0,"small",8),u(1,"\u041C\u0438\u043D\u0438\u043C\u0443\u043C 25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),g())}function Gp(t,n){if(t&1&&j(0,$p,2,0,"small",8)(1,Hp,2,0,"small",8),t&2){let e=G();U(e.titleCtrl.errors!=null&&e.titleCtrl.errors.required?0:e.titleCtrl.errors!=null&&e.titleCtrl.errors.minlength?1:-1)}}function qp(t,n){t&1&&(m(0,"small",8),u(1,"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D"),g())}function Wp(t,n){if(t&1&&j(0,qp,2,0,"small",8),t&2){let e=G();U(e.descriptionCtrl.errors!=null&&e.descriptionCtrl.errors.required?0:-1)}}var Zp="image/nature.jpg",bo=class t{editingArticle=pe(null);set locked(n){this._locked=n,n?this.form.disable({emitEvent:!1}):this.form.enable({emitEvent:!1})}get locked(){return this._locked}_locked=!1;submitArticle=new L;cancel=new L;fb=c(go);form=this.fb.nonNullable.group({title:["",[nt.required,nt.minLength(25)]],description:["",[nt.required]]});get titleCtrl(){return this.form.controls.title}get descriptionCtrl(){return this.form.controls.description}constructor(){Et(()=>{let n=this.editingArticle();n?this.form.reset({title:n.title,description:n.description}):this.form.reset({title:"",description:""})})}onSubmit(){if(this._locked||this.form.invalid)return;let{title:n,description:e}=this.form.getRawValue(),i=n.trim(),r=e.trim(),o=this.editingArticle();o?this.submitArticle.emit(P(p({},o),{title:i,description:r})):this.submitArticle.emit({id:this.generateId(),title:i,description:r,date:new Date().toISOString().split("T")[0],image:Zp}),this.form.reset({title:"",description:""})}onCancel(){this.form.reset({title:"",description:""}),this.cancel.emit()}generateId(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-article-form"]],inputs:{editingArticle:[1,"editingArticle"],locked:[2,"locked","locked",ue]},outputs:{submitArticle:"submitArticle",cancel:"cancel"},decls:16,vars:11,consts:[[1,"article-form",3,"ngSubmit","formGroup"],["for","article-title"],["type","text","id","article-title","formControlName","title","placeholder","\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438"],["for","article-text"],["id","article-text","formControlName","description","placeholder","\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438"],[1,"form-buttons"],["type","submit",1,"btn-add",3,"disabled"],["type","button",1,"btn-cancel",3,"click","disabled"],[1,"error"]],template:function(e,i){e&1&&(m(0,"h2"),u(1),g(),m(2,"form",0),R("ngSubmit",function(){return i.onSubmit()}),m(3,"label",1),u(4,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),g(),Y(5,"input",2),j(6,Gp,2,1),m(7,"label",3),u(8,"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438"),g(),Y(9,"textarea",4),j(10,Wp,1,1),m(11,"div",5)(12,"button",6),u(13),g(),m(14,"button",7),R("click",function(){return i.onCancel()}),u(15,"\u041E\u0442\u043C\u0435\u043D\u0430"),g()()()),e&2&&(h(),O(i.editingArticle()?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E"),h(),B("formGroup",i.form),h(3),K("invalid",i.titleCtrl.invalid&&(i.titleCtrl.touched||i.titleCtrl.dirty)),h(),U(i.titleCtrl.invalid&&(i.titleCtrl.touched||i.titleCtrl.dirty)?6:-1),h(3),K("invalid",i.descriptionCtrl.invalid&&(i.descriptionCtrl.touched||i.descriptionCtrl.dirty)),h(),U(i.descriptionCtrl.invalid&&(i.descriptionCtrl.touched||i.descriptionCtrl.dirty)?10:-1),h(2),B("disabled",i.locked||i.form.invalid),h(),Ji(" ",i.locked?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"," "),h(),B("disabled",i.locked))},dependencies:[vo,po,Hn,mo,fo,rn,Bi],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;max-height:0;opacity:0;padding:0;transition:max-height .4s ease,opacity .3s ease,padding .4s ease}.visible[_nghost-%COMP%]{max-height:700px;opacity:1;padding:50px 0 40px}h2[_ngcontent-%COMP%]{margin-bottom:30px}.article-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;max-width:800px}.article-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:var(--gray)}.article-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .article-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid var(--dark);border-radius:8px;padding:14px 16px;font-family:Inter,sans-serif;font-size:15px;color:var(--dark);background:var(--white);outline:none;transition:border-color .2s ease}.article-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .article-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:var(--accent-green)}.article-form[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%], .article-form[_ngcontent-%COMP%]   textarea.invalid[_ngcontent-%COMP%]{border-color:var(--error)}.article-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:var(--error);font-size:12px;line-height:1.3;margin-top:-2px}.article-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical;min-height:140px}.form-buttons[_ngcontent-%COMP%]{display:flex;gap:20px;margin-top:10px}.btn-add[_ngcontent-%COMP%]{flex:1;padding:14px;background:var(--accent-green);color:var(--white);border:none;border-radius:8px;font-family:Inter,sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s ease}.btn-add[_ngcontent-%COMP%]:hover{background:#43a047}.btn-cancel[_ngcontent-%COMP%]{flex:1;padding:14px;background:transparent;color:var(--accent-green);border:1px solid var(--accent-green);border-radius:8px;font-family:Inter,sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s ease,color .2s ease}.btn-cancel[_ngcontent-%COMP%]:hover{background:var(--accent-green);color:var(--white)}.btn-add[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.btn-add[_ngcontent-%COMP%]:disabled:hover{background:var(--accent-green)}"]})};var Yp=t=>["/blog",t],yo=class t{article;remove=new L;edit=new L;onRemove(n){n.stopPropagation(),this.remove.emit(this.article.id)}onEdit(n){n.stopPropagation(),this.edit.emit(this.article)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-blog-article-card"]],inputs:{article:"article"},outputs:{remove:"remove",edit:"edit"},decls:16,vars:14,consts:[[3,"routerLink"],["type","button","aria-label","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"btn-edit",3,"click"],["type","button","aria-label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"btn-delete",3,"click"],[3,"src","alt"]],template:function(e,i){e&1&&(m(0,"article",0)(1,"button",1),R("click",function(o){return i.onEdit(o)}),m(2,"mat-icon"),u(3,"edit"),g()(),m(4,"button",2),R("click",function(o){return i.onRemove(o)}),m(5,"mat-icon"),u(6,"delete"),g()(),Y(7,"img",3),m(8,"h3"),u(9),g(),m(10,"small")(11,"time"),u(12),St(13,"date"),g()(),m(14,"p"),u(15),g()()),e&2&&(B("routerLink",sl(12,Yp,i.article.id)),h(7),B("src",i.article.image,Mt)("alt",i.article.title),h(2),O(i.article.title),h(2),oe("datetime",i.article.date),h(),O(At(13,7,i.article.date,"d MMMM y","","ru")),h(3),O(i.article.description))},dependencies:[We,ct,vt],styles:["[_nghost-%COMP%]{display:flex;min-width:0;height:100%}article[_ngcontent-%COMP%]{cursor:pointer;position:relative;flex:1;display:flex;flex-direction:column;min-height:0;min-width:0}article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:4/3;flex-shrink:0;object-fit:cover;border-radius:12px;margin-bottom:14px;transition:transform .3s ease}article[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.03)}article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700;line-height:1.4;margin-bottom:6px;color:var(--dark);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;word-break:break-word;overflow-wrap:anywhere}article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px;display:block;margin-bottom:6px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px;flex:1;min-height:0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-word;overflow-wrap:anywhere}.btn-delete[_ngcontent-%COMP%], .btn-edit[_ngcontent-%COMP%]{position:absolute;top:10px;width:32px;height:32px;padding:0;border:none;border-radius:50%;background:#2d3142bf;color:var(--white);line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.85);transition:opacity .2s ease,background .2s ease,transform .2s ease;z-index:5}.btn-delete[_ngcontent-%COMP%]{right:10px}.btn-edit[_ngcontent-%COMP%]{right:50px}.btn-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}article[_ngcontent-%COMP%]:hover   .btn-delete[_ngcontent-%COMP%], article[_ngcontent-%COMP%]:hover   .btn-edit[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%]:focus-visible, .btn-edit[_ngcontent-%COMP%]:focus-visible{opacity:1;transform:scale(1)}.btn-delete[_ngcontent-%COMP%]:hover{background:var(--accent-orange);transform:scale(1.08)}.btn-edit[_ngcontent-%COMP%]:hover{background:var(--accent-green);transform:scale(1.08)}"]})};var Kp=["dialogEl"],_o=class t{count=pe(0);open=pe(!1);close=new L;dialogRef=ft("dialogEl");constructor(){Et(()=>{let n=this.open(),e=this.dialogRef()?.nativeElement;e&&(n&&!e.open&&e.showModal(),!n&&e.open&&e.close())})}onClose(){this.close.emit()}onBackdropClick(n){n.target===this.dialogRef()?.nativeElement&&this.close.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-stats-dialog"]],viewQuery:function(e,i){e&1&&vn(i.dialogRef,Kp,5),e&2&&$t()},inputs:{count:[1,"count"],open:[1,"open"]},outputs:{close:"close"},decls:17,vars:1,consts:[["dialogEl",""],[1,"stats-dialog",3,"click","close"],["type","button","aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C",1,"dialog-close",3,"click"],[1,"stats-grid"],[1,"stat-card"]],template:function(e,i){e&1&&(D(0,"dialog",1,0),jo("click",function(o){return i.onBackdropClick(o)})("close",function(){return i.onClose()}),D(2,"button",2),jo("click",function(){return i.onClose()}),u(3,"\xD7"),x(),D(4,"h2"),u(5,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"),x(),D(6,"div",3)(7,"div",4)(8,"span"),u(9,"\u0412\u0441\u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0435\u0439:"),x(),D(10,"strong"),u(11),x()(),D(12,"div",4)(13,"span"),u(14,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"),x(),D(15,"strong"),u(16,"0"),x()()()()),e&2&&(h(11),O(i.count()))},styles:[".stats-dialog[_ngcontent-%COMP%]{border:none;border-radius:16px;padding:40px;max-width:480px;width:90%;box-shadow:0 8px 40px #00000026;margin:auto}.stats-dialog[_ngcontent-%COMP%]::backdrop{background:#0006}.stats-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:24px}.dialog-close[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;background:none;border:none;font-size:22px;cursor:pointer;color:var(--gray);line-height:1;transition:color .2s ease}.dialog-close[_ngcontent-%COMP%]:hover{color:var(--dark)}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}.stat-card[_ngcontent-%COMP%]{background:var(--bg-light);border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:8px}.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:var(--gray)}.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:var(--dark)}"]})};var Xp=["formEl"],Qp=(t,n)=>n.id;function Jp(t,n){t&1&&(m(0,"div",3),Y(1,"span",10),m(2,"p",11),u(3,"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),g()())}function eg(t,n){if(t&1){let e=gn();m(0,"app-blog-article-card",13),R("remove",function(r){Ye(e);let o=G(2);return Ke(o.onRemove(r))})("edit",function(r){Ye(e);let o=G(2);return Ke(o.onEdit(r))}),g()}if(t&2){let e=n.$implicit;B("article",e)}}function tg(t,n){if(t&1&&(m(0,"div",4),Ie(1,eg,1,1,"app-blog-article-card",12,Qp),g()),t&2){let e=G();h(),Re(e.visibleArticles())}}function ng(t,n){t&1&&(m(0,"p",5),u(1,"\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u0435\u0439"),g())}function ig(t,n){if(t&1){let e=gn();m(0,"nav",6)(1,"button",14),R("click",function(){Ye(e);let r=G();return Ke(r.onPrevPage())}),u(2," \u041D\u0430\u0437\u0430\u0434 "),g(),m(3,"span",15),u(4),g(),m(5,"button",14),R("click",function(){Ye(e);let r=G();return Ke(r.onNextPage())}),u(6," \u0412\u043F\u0435\u0440\u0451\u0434 "),g()()}if(t&2){let e=G();h(),B("disabled",e.activePage()<=1),h(3),ol("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ",e.activePage()," \u0438\u0437 ",e.totalPages()),h(),B("disabled",e.activePage()>=e.totalPages())}}var rg=1e3,og=800,Co=class t{store=c(lt);articlesData=c(Pn);title=c(Tt);showForm=I(!1);showStats=I(!1);editingArticle=I(null);articlesLoading=I(!0);isSaving=I(!1);formEl=ft("formEl",{read:Z});visibleArticles=ie(()=>{let n=this.store.articles(),i=(this.store.activePage()-1)*Mi;return n.slice(i,i+Mi)});totalCount=ie(()=>this.store.articles().length);totalPages=ie(()=>Math.max(1,Math.ceil(this.store.articles().length/Mi)));activePage=ie(()=>this.store.activePage());ngOnInit(){this.title.setTitle("\u0411\u043B\u043E\u0433 \u2014 Name-folio"),Is(rg).pipe(Se(()=>this.articlesData.fetch()),ut(()=>this.articlesLoading.set(!1))).subscribe(n=>this.apply(n))}onCreate(){this.editingArticle.set(null),this.showForm.set(!0),this.scrollToForm()}onEdit(n){this.editingArticle.set(n),this.showForm.set(!0),this.scrollToForm()}onShowStats(){this.showStats.set(!0)}onCloseStats(){this.showStats.set(!1)}onSave(n){if(this.isSaving())return;this.isSaving.set(!0),(this.editingArticle()?this.articlesData.update(n):this.articlesData.add(n)).pipe(Ts(og),ut(()=>this.isSaving.set(!1))).subscribe(r=>{this.apply(r),this.editingArticle.set(null),this.showForm.set(!1)})}onCancel(){this.editingArticle.set(null),this.showForm.set(!1)}onRemove(n){this.editingArticle()?.id===n&&(this.editingArticle.set(null),this.showForm.set(!1)),this.articlesData.remove(n).subscribe(e=>this.apply(e))}onPrevPage(){let n=this.store.activePage();n<=1||this.articlesData.goToPage(n-1).subscribe(e=>this.apply(e))}onNextPage(){let n=this.store.activePage();n>=this.totalPages()||this.articlesData.goToPage(n+1).subscribe(e=>this.apply(e))}apply(n){this.store.setArticles(n.articles),this.store.setActivePage(n.activePage)}scrollToForm(){setTimeout(()=>{this.formEl()?.nativeElement?.scrollIntoView({behavior:"smooth",block:"start"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-blog"]],viewQuery:function(e,i){e&1&&vn(i.formEl,Xp,5,Z),e&2&&$t()},decls:12,vars:8,consts:[["formEl",""],[1,"container"],[1,"blog-articles"],["role","status","aria-live","polite",1,"articles-loader"],[1,"articles-grid"],[1,"empty-state"],["aria-label","\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0442\u0430\u0442\u0435\u0439",1,"pagination"],[3,"submitArticle","cancel","editingArticle","locked"],[3,"create","stats"],[3,"close","count","open"],["aria-hidden","true",1,"loader-spinner"],[1,"loader-text"],[3,"article"],[3,"remove","edit","article"],["type","button",1,"pagination-btn",3,"click","disabled"],[1,"pagination-info"]],template:function(e,i){e&1&&(m(0,"main",1)(1,"section",2)(2,"h1"),u(3,"\u0421\u0442\u0430\u0442\u044C\u0438"),g(),j(4,Jp,4,0,"div",3)(5,tg,3,0,"div",4)(6,ng,2,0,"p",5),j(7,ig,7,4,"nav",6),m(8,"app-article-form",7,0),R("submitArticle",function(o){return i.onSave(o)})("cancel",function(){return i.onCancel()}),g()()(),m(10,"app-admin-panel",8),R("create",function(){return i.onCreate()})("stats",function(){return i.onShowStats()}),g(),m(11,"app-stats-dialog",9),R("close",function(){return i.onCloseStats()}),g()),e&2&&(h(4),U(i.articlesLoading()?4:i.totalCount()>0?5:6),h(3),U(!i.articlesLoading()&&i.totalCount()>0&&i.totalPages()>1?7:-1),h(),K("visible",i.showForm()),B("editingArticle",i.editingArticle())("locked",i.isSaving()),h(3),B("count",i.totalCount())("open",i.showStats()))},dependencies:[yo,bo,to,_o],styles:[".blog-articles[_ngcontent-%COMP%]{padding:60px 0 50px}.blog-articles[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-bottom:30px;color:var(--dark)}.articles-loader[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;min-height:220px;padding:40px 20px;color:var(--gray)}.loader-spinner[_ngcontent-%COMP%]{width:42px;height:42px;border:3px solid var(--light-gray);border-top-color:var(--accent-green);border-radius:50%;animation:_ngcontent-%COMP%_blog-loader-spin .75s linear infinite}.loader-text[_ngcontent-%COMP%]{font-size:15px}@keyframes _ngcontent-%COMP%_blog-loader-spin{to{transform:rotate(360deg)}}.articles-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;align-items:stretch}.empty-state[_ngcontent-%COMP%]{text-align:center;color:var(--gray);font-size:16px;padding:120px 20px}.pagination[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px;margin:30px 0 10px}.pagination-btn[_ngcontent-%COMP%]{padding:10px 20px;border:1px solid var(--accent-green);border-radius:8px;background:var(--white);color:var(--accent-green);font-family:Inter,sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:background .2s ease,color .2s ease}.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--accent-green);color:var(--white)}.pagination-btn[_ngcontent-%COMP%]:disabled{opacity:.45;cursor:not-allowed}.pagination-info[_ngcontent-%COMP%]{font-size:14px;color:var(--gray)}@media(max-width:800px){.articles-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var Do=new y("POST_DATA_SERVICE");var wo=class t{article=I(null);comments=I([]);setArticle(n){this.article.set(n)}setComments(n){this.comments.set(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var ag=["*"];var sg=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],lg=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],cg=new y("MAT_CARD_CONFIG"),nu=(()=>{class t{appearance;constructor(){let e=c(cg,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&K("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ag,decls:1,vars:0,template:function(i,r){i&1&&(ze(),ee(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),iu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ru=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),ou=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),au=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&K("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),su=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:lg,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ze(sg),ee(0),D(1,"div",0),ee(2,1),x(),ee(3,2))},encapsulation:2,changeDetection:0})}return t})();var xo=class t{comment;ratingChange=new L;onUp(){this.ratingChange.emit(1)}onDown(){this.ratingChange.emit(-1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-post-comment-card"]],inputs:{comment:"comment"},outputs:{ratingChange:"ratingChange"},decls:20,vars:10,consts:[[1,"comment-card"],[1,"comment-text"],[1,"comment-rating"],["mat-icon-button","","aria-label","\u041F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"rating-value"],["mat-icon-button","","aria-label","\u041F\u043E\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"]],template:function(e,i){e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),u(3),g(),m(4,"mat-card-subtitle")(5,"time"),u(6),St(7,"date"),g()()(),m(8,"mat-card-content")(9,"p",1),u(10),g()(),m(11,"mat-card-actions",2)(12,"button",3),R("click",function(){return i.onUp()}),m(13,"mat-icon"),u(14,"thumb_up"),g()(),m(15,"span",4),u(16),g(),m(17,"button",5),R("click",function(){return i.onDown()}),m(18,"mat-icon"),u(19,"thumb_down"),g()()()()),e&2&&(h(3),O(i.comment.authorName),h(2),oe("datetime",i.comment.date),h(),O(At(7,5,i.comment.date,"d MMMM y","","ru")),h(4),O(i.comment.text),h(6),O(i.comment.rating))},dependencies:[nu,su,iu,ou,ru,au,tn,ct,vt],styles:[".comment-card[_ngcontent-%COMP%]{margin-bottom:16px}.comment-text[_ngcontent-%COMP%]{margin-top:8px;color:var(--gray);font-size:15px;line-height:1.6}.comment-rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:4px 8px 8px}.rating-value[_ngcontent-%COMP%]{font-size:15px;font-weight:700;min-width:28px;text-align:center;color:var(--dark)}"]})};var bs=class{_box;_destroyed=new te;_resizeSubject=new te;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new an(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Fe(e=>e.some(i=>i.target===n)),Ns({bufferSize:1,refCount:!0}),it(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},lu=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(q);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new bs(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dg=["notch"],ug=["matFormFieldNotchedOutline",""],mg=["*"],cu=["iconPrefixContainer"],du=["textPrefixContainer"],uu=["iconSuffixContainer"],mu=["textSuffixContainer"],fg=["textField"],hg=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],pg=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function gg(t,n){t&1&&Y(0,"span",21)}function vg(t,n){if(t&1&&(m(0,"label",20),ee(1,1),j(2,gg,1,0,"span",21),g()),t&2){let e=G(2);B("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),U(!e.hideRequiredMarker&&e._control.required?2:-1)}}function bg(t,n){if(t&1&&j(0,vg,3,5,"label",20),t&2){let e=G();U(e._hasFloatingLabel()?0:-1)}}function yg(t,n){t&1&&Y(0,"div",7)}function _g(t,n){}function Cg(t,n){if(t&1&&Ki(0,_g,0,0,"ng-template",13),t&2){G(2);let e=zo(1);B("ngTemplateOutlet",e)}}function Dg(t,n){if(t&1&&(m(0,"div",9),j(1,Cg,1,1,null,13),g()),t&2){let e=G();B("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),U(e._forceDisplayInfixLabel()?-1:1)}}function wg(t,n){t&1&&(m(0,"div",10,2),ee(2,2),g())}function xg(t,n){t&1&&(m(0,"div",11,3),ee(2,3),g())}function Eg(t,n){}function Mg(t,n){if(t&1&&Ki(0,Eg,0,0,"ng-template",13),t&2){G();let e=zo(1);B("ngTemplateOutlet",e)}}function Sg(t,n){t&1&&(m(0,"div",14,4),ee(2,4),g())}function Ag(t,n){t&1&&(m(0,"div",15,5),ee(2,5),g())}function Ig(t,n){t&1&&Y(0,"div",16)}function Rg(t,n){t&1&&(m(0,"div",18),ee(1,6),g())}function Tg(t,n){if(t&1&&(m(0,"mat-hint",22),u(1),g()),t&2){let e=G(2);B("id",e._hintLabelId),h(),O(e.hintLabel)}}function Fg(t,n){if(t&1&&(m(0,"div",19),j(1,Tg,2,2,"mat-hint",22),ee(2,7),Y(3,"div",23),ee(4,8),g()),t&2){let e=G();h(),U(e.hintLabel?1:-1)}}var Vi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-label"]]})}return t})(),yu=new y("MatError"),_s=(()=>{class t{id=c(Ct).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&mt("id",r.id)},inputs:{id:"id"},features:[ot([{provide:yu,useExisting:t}])]})}return t})(),ys=(()=>{class t{align="start";id=c(Ct).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(mt("id",r.id),oe("align",null),K("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Og=new y("MatPrefix");var Pg=new y("MatSuffix");var _u=new y("FloatingLabelParent"),fu=(()=>{class t{_elementRef=c(Z);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(lu);_ngZone=c(q);_parent=c(_u);_resizeSubscription=new on;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Ng(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&K("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Ng(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var hu="mdc-line-ripple--active",Eo="mdc-line-ripple--deactivating",pu=(()=>{class t{_elementRef=c(Z);_cleanupTransitionEnd;constructor(){let e=c(q),i=c(Ce);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Eo),e.add(hu)}deactivate(){this._elementRef.nativeElement.classList.add(Eo)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Eo);e.propertyName==="opacity"&&r&&i.remove(hu,Eo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),gu=(()=>{class t{_elementRef=c(Z);_ngZone=c(q);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Uo(dg,5),i&2){let o;me(o=fe())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&K("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ug,ngContentSelectors:mg,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ze(),se(0,"div",1),D(1,"div",2,0),ee(3),x(),se(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Cs=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t})}return t})();var Ds=new y("MatFormField"),kg=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),vu="fill",Lg="auto",bu="fixed",Bg="translateY(-50%)",ws=(()=>{class t{_elementRef=c(Z);_changeDetectorRef=c(ht);_platform=c(we);_idGenerator=c(Ct);_ngZone=c(q);_defaults=c(kg,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ft("iconPrefixContainer");_textPrefixContainerSignal=ft("textPrefixContainer");_iconSuffixContainerSignal=ft("iconSuffixContainer");_textSuffixContainerSignal=ft("textSuffixContainer");_prefixSuffixContainers=ie(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ml(Vi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Vn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Lg}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||vu;this._appearanceSignal.set(i)}_appearanceSignal=I(vu);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||bu}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||bu}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new te;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Bn();constructor(){let e=this._defaults,i=c(ts);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Et(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ie(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe($i([void 0,void 0]),H(()=>[i.errorState,i.userAriaDescribedBy]),Os(),Fe(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(it(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Rs(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){hl({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ie(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",b=`${a+s}px`,ne=`calc(${f} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Q=`var(--mat-mdc-form-field-label-transform, ${Bg} translateX(${ne}))`,J=a+s+l+d;return[Q,J]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(rl(o,r._labelChild,Vi,5),Xi(o,Cs,5)(o,Og,5)(o,Pg,5)(o,yu,5)(o,ys,5)),i&2){$t();let a;me(a=fe())&&(r._formFieldControl=a.first),me(a=fe())&&(r._prefixChildren=a),me(a=fe())&&(r._suffixChildren=a),me(a=fe())&&(r._errorChildren=a),me(a=fe())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(vn(r._iconPrefixContainerSignal,cu,5)(r._textPrefixContainerSignal,du,5)(r._iconSuffixContainerSignal,uu,5)(r._textSuffixContainerSignal,mu,5),Uo(fg,5)(cu,5)(du,5)(uu,5)(mu,5)(fu,5)(gu,5)(pu,5)),i&2){$t(4);let o;me(o=fe())&&(r._textField=o.first),me(o=fe())&&(r._iconPrefixContainer=o.first),me(o=fe())&&(r._textPrefixContainer=o.first),me(o=fe())&&(r._iconSuffixContainer=o.first),me(o=fe())&&(r._textSuffixContainer=o.first),me(o=fe())&&(r._floatingLabel=o.first),me(o=fe())&&(r._notchedOutline=o.first),me(o=fe())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&K("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ot([{provide:Ds,useExisting:t},{provide:_u,useExisting:t}])],ngContentSelectors:pg,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ze(hg),Ki(0,bg,1,1,"ng-template",null,0,ll),m(2,"div",6,1),R("click",function(a){return r._control.onContainerClick(a)}),j(4,yg,1,0,"div",7),m(5,"div",8),j(6,Dg,2,2,"div",9),j(7,wg,3,0,"div",10),j(8,xg,3,0,"div",11),m(9,"div",12),j(10,Mg,1,1,null,13),ee(11),g(),j(12,Sg,3,0,"div",14),j(13,Ag,3,0,"div",15),g(),j(14,Ig,1,0,"div",16),g(),m(15,"div",17),j(16,Rg,2,0,"div",18)(17,Fg,5,1,"div",19),g()),i&2){let o;h(2),K("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),U(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),U(r._hasOutline()?6:-1),h(),U(r._hasIconPrefix?7:-1),h(),U(r._hasTextPrefix?8:-1),h(2),U(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),U(r._hasTextSuffix?12:-1),h(),U(r._hasIconSuffix?13:-1),h(),U(r._hasOutline()?-1:14),h(),K("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();h(),U((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[fu,gu,Zo,pu,ys],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Vg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),jg={passive:!0},Cu=(()=>{class t{_platform=c(we);_ngZone=c(q);_renderer=c(rt).createRenderer(null,null);_styleLoader=c(Jt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Me;this._styleLoader.load(Vg);let i=tt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new te,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,jg)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=tt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Du=new y("MAT_INPUT_VALUE_ACCESSOR");var wu=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mo=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Ug=["button","checkbox","file","hidden","image","radio","range","reset","submit"],zg=new y("MAT_INPUT_CONFIG"),xu=(()=>{class t{_elementRef=c(Z);_platform=c(we);ngControl=c(nn,{optional:!0,self:!0});_autofillMonitor=c(Cu);_ngZone=c(q);_formField=c(Ds,{optional:!0});_renderer=c(Ce);_uid=c(Ct).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(zg,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new te;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Vn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(nt.required)??!1}set required(e){this._required=Vn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ya().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Vn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ya().has(e));constructor(){let e=c(vs,{optional:!0}),i=c(rn,{optional:!0}),r=c(wu),o=c(Du,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Vo(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Mo(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Et(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ug.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&R("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(mt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),oe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),K("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ue]},exportAs:["matInput"],features:[ot([{provide:Cs,useExisting:t}]),je]})}return t})();function $g(t,n){t&1&&(m(0,"mat-error"),u(1,"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F \u0438\u043B\u0438 \u043D\u0438\u043A"),g())}function Hg(t,n){t&1&&(m(0,"mat-error"),u(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F"),g())}var So=class t{submitComment=new L;form=new go().group({authorName:["",[nt.required]],text:["",[nt.required]]});onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}let n={id:crypto.randomUUID(),authorName:this.form.value.authorName.trim(),text:this.form.value.text.trim(),date:new Date().toISOString(),rating:0};this.submitComment.emit(n),this.form.reset()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-post-comment-form"]],outputs:{submitComment:"submitComment"},decls:17,vars:3,consts:[[1,"comment-form",3,"ngSubmit","formGroup"],[1,"form-title"],["appearance","outline",1,"form-field"],["matInput","","formControlName","authorName","placeholder","\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"],["matInput","","formControlName","text","placeholder","\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F","rows","4"],["mat-flat-button","","type","submit",1,"submit-btn"]],template:function(e,i){e&1&&(m(0,"form",0),R("ngSubmit",function(){return i.onSubmit()}),m(1,"h3",1),u(2,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),g(),m(3,"mat-form-field",2)(4,"mat-label"),u(5,"\u0418\u043C\u044F / \u043D\u0438\u043A"),g(),Y(6,"input",3),j(7,$g,2,0,"mat-error"),g(),m(8,"mat-form-field",2)(9,"mat-label"),u(10,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),g(),Y(11,"textarea",4),j(12,Hg,2,0,"mat-error"),g(),m(13,"button",5)(14,"mat-icon"),u(15,"send"),g(),u(16," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),g()()),e&2&&(B("formGroup",i.form),h(7),U(i.form.controls.authorName.touched&&i.form.controls.authorName.hasError("required")?7:-1),h(5),U(i.form.controls.text.touched&&i.form.controls.text.hasError("required")?12:-1))},dependencies:[vo,po,Hn,mo,fo,rn,Bi,ws,Vi,_s,xu,wd,ct],styles:[".comment-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:28px;background:var(--bg-light);border-radius:12px;margin-top:24px}.form-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--dark);margin-bottom:12px}.form-field[_ngcontent-%COMP%]{width:100%}.submit-btn[_ngcontent-%COMP%]{align-self:flex-start;background-color:var(--accent-green)!important;color:var(--white)!important;gap:6px}"]})};var Gg=(t,n)=>n.id;function qg(t,n){if(t&1&&Y(0,"img",5),t&2){let e=G(2);B("src",e.article().image,Mt)("alt",e.article().title)}}function Wg(t,n){t&1&&(m(0,"div",6)(1,"mat-icon"),u(2,"image"),g()())}function Zg(t,n){if(t&1){let e=gn();m(0,"app-post-comment-card",20),R("ratingChange",function(r){let o=Ye(e).$implicit,a=G(3);return Ke(a.onCommentRatingChange(o.id,r))}),g()}if(t&2){let e=n.$implicit;B("comment",e)}}function Yg(t,n){if(t&1&&Ie(0,Zg,1,1,"app-post-comment-card",19,Gg),t&2){let e=G(2);Re(e.comments())}}function Kg(t,n){t&1&&(m(0,"p",17),u(1,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!"),g())}function Xg(t,n){if(t&1){let e=gn();m(0,"button",2),R("click",function(){Ye(e);let r=G();return Ke(r.onBack())}),m(1,"mat-icon"),u(2,"arrow_back"),g()(),m(3,"article",3)(4,"div",4),j(5,qg,1,2,"img",5)(6,Wg,3,0,"div",6),g(),m(7,"div",7)(8,"small")(9,"time"),u(10),St(11,"date"),g()()(),m(12,"h1",8),u(13),g(),m(14,"p",9),u(15),g(),m(16,"div",10)(17,"span",11),u(18,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433:"),g(),m(19,"button",12),R("click",function(){Ye(e);let r=G();return Ke(r.onRatingUp())}),m(20,"mat-icon"),u(21,"thumb_up"),g()(),m(22,"span",13),u(23),g(),m(24,"button",14),R("click",function(){Ye(e);let r=G();return Ke(r.onRatingDown())}),m(25,"mat-icon"),u(26,"thumb_down"),g()()()(),m(27,"section",15)(28,"h2",16),u(29,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"),g(),j(30,Yg,2,0)(31,Kg,2,0,"p",17),m(32,"app-post-comment-form",18),R("submitComment",function(r){Ye(e);let o=G();return Ke(o.onAddComment(r))}),g()()}if(t&2){let e=G();h(5),U(e.article().image?5:6),h(4),oe("datetime",e.article().date),h(),Ji(" ",At(11,7,e.article().date,"d MMMM y","","ru")," "),h(3),O(e.article().title),h(2),O(e.article().description),h(8),O(e.article().rating??0),h(7),U(e.comments().length>0?30:31)}}var Ao=class t{route=c(Je);router=c(_t);title=c(Tt);store=c(wo);postData=c(Do);article=this.store.article;comments=this.store.comments;ngOnInit(){let n=this.route.snapshot.paramMap.get("id");if(!n){this.router.navigate(["/blog"]);return}this.postData.fetchPost(n).subscribe(e=>{if(!e){this.router.navigate(["/blog"]);return}this.store.setArticle(e.article),this.store.setComments(e.comments),this.title.setTitle(`${e.article.title} \u2014 Name-folio`)})}onRatingUp(){let n=this.article();n&&this.postData.updateArticleRating(n.id,1).subscribe(e=>{this.store.setArticle(e)})}onRatingDown(){let n=this.article();n&&this.postData.updateArticleRating(n.id,-1).subscribe(e=>{this.store.setArticle(e)})}onCommentRatingChange(n,e){let i=this.article();i&&this.postData.updateCommentRating(i.id,n,e).subscribe(r=>{this.store.setComments(r)})}onAddComment(n){let e=this.article();e&&this.postData.addComment(e.id,n).subscribe(i=>{this.store.setComments(i)})}onBack(){this.router.navigate(["/blog"])}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-post"]],decls:3,vars:1,consts:[[1,"container"],[1,"post-section"],["mat-icon-button","","aria-label","\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443",1,"back-btn",3,"click"],[1,"post-article"],[1,"post-image-wrap"],[1,"post-image",3,"src","alt"],["aria-hidden","true",1,"post-image-placeholder"],[1,"post-meta"],[1,"post-title"],[1,"post-description"],[1,"post-rating"],[1,"rating-label"],["mat-icon-button","","aria-label","\u041F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"rating-value"],["mat-icon-button","","aria-label","\u041F\u043E\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"comments-section"],[1,"comments-title"],[1,"no-comments"],[3,"submitComment"],[3,"comment"],[3,"ratingChange","comment"]],template:function(e,i){e&1&&(m(0,"main",0)(1,"section",1),j(2,Xg,33,12),g()()),e&2&&(h(2),U(i.article()?2:-1))},dependencies:[tn,ct,xo,So,vt],styles:[".post-section[_ngcontent-%COMP%]{padding:40px 0 60px}.back-btn[_ngcontent-%COMP%]{margin-bottom:20px;color:var(--gray)!important}.post-article[_ngcontent-%COMP%]{margin-bottom:48px}.post-image-wrap[_ngcontent-%COMP%]{width:100%;border-radius:16px;overflow:hidden;margin-bottom:24px;aspect-ratio:16/9;background:var(--bg-light)}.post-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.post-image-placeholder[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--light-gray);font-size:80px}.post-image-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:80px;width:80px;height:80px}.post-meta[_ngcontent-%COMP%]{margin-bottom:8px;color:var(--gray);font-size:14px}.post-title[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:var(--dark);margin-bottom:16px;line-height:1.25}.post-description[_ngcontent-%COMP%]{font-size:16px;color:var(--gray);line-height:1.7;margin-bottom:24px}.post-rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.rating-label[_ngcontent-%COMP%]{font-size:15px;color:var(--gray);margin-right:4px}.rating-value[_ngcontent-%COMP%]{font-size:18px;font-weight:700;min-width:32px;text-align:center;color:var(--dark)}.comments-section[_ngcontent-%COMP%]{border-top:1px solid var(--light-gray);padding-top:32px}.comments-title[_ngcontent-%COMP%]{font-size:26px;font-weight:700;color:var(--dark);margin-bottom:24px}.no-comments[_ngcontent-%COMP%]{color:var(--gray);font-size:15px;padding:20px 0}@media(max-width:800px){.post-title[_ngcontent-%COMP%]{font-size:26px}}"]})};var Eu=[{path:"",component:Wr},{path:"blog",component:Co},{path:"blog/:id",component:Ao},{path:"**",redirectTo:""}];var Mu="blog-articles",xs="blog-post-comments",Io=class t{fetchPost(n){let e=this.readArticle(n);if(!e)return _(null);let i=this.readComments(n);return _({article:e,comments:i})}addComment(n,e){let i=this.readComments(n),r=[e,...i];return this.writeComments(n,r),_(r)}updateCommentRating(n,e,i){let r=this.readComments(n).map(o=>o.id===e?P(p({},o),{rating:o.rating+i}):o);return this.writeComments(n,r),_(r)}updateArticleRating(n,e){let r=this.readAllArticles().map(a=>a.id===n?P(p({},a),{rating:(a.rating??0)+e}):a);this.writeAllArticles(r);let o=r.find(a=>a.id===n);return _(o)}readArticle(n){return this.readAllArticles().find(i=>i.id===n)??null}readAllArticles(){if(typeof localStorage>"u")return[];try{let n=localStorage.getItem(Mu);if(!n)return[];let e=JSON.parse(n);return Array.isArray(e)?e:[]}catch{return[]}}writeAllArticles(n){typeof localStorage>"u"||localStorage.setItem(Mu,JSON.stringify(n))}readComments(n){if(typeof localStorage>"u")return[];try{let e=localStorage.getItem(xs);if(!e)return[];let i=JSON.parse(e);return Array.isArray(i[n])?i[n]:[]}catch{return[]}}writeComments(n,e){if(!(typeof localStorage>"u"))try{let i=localStorage.getItem(xs),r=i?JSON.parse(i):{};r[n]=e,localStorage.setItem(xs,JSON.stringify(r))}catch{return}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})};var Su={providers:[js(),Jc(),Va(Eu,ja({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"})),{provide:Pn,useFactory:t=>new Zr(t),deps:[lt]},{provide:Do,useClass:Io}]};var Qg=()=>({exact:!0}),Ro=class t{scrollToContacts(n){n.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth",block:"start"})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-header"]],decls:14,vars:2,consts:[[1,"logo"],["routerLink","/","routerLinkActive","is-active",1,"nav-link",3,"routerLinkActiveOptions"],["routerLink","/blog","routerLinkActive","is-active",1,"nav-link"],["href","/",1,"nav-link",3,"click"]],template:function(e,i){e&1&&(m(0,"header")(1,"nav")(2,"div",0),u(3,"Name-folio"),g(),m(4,"ul")(5,"li")(6,"a",1),u(7,"\u041E\u0431\u043E \u043C\u043D\u0435"),g()(),m(8,"li")(9,"a",2),u(10,"\u0411\u043B\u043E\u0433"),g()(),m(11,"li")(12,"a",3),R("click",function(o){return i.scrollToContacts(o)}),u(13,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),g()()()()()),e&2&&(h(6),B("routerLinkActiveOptions",al(1,Qg)))},dependencies:[We,Ba],styles:["header[_ngcontent-%COMP%]{padding:20px 60px;border-bottom:1px solid var(--light-gray)}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto}.logo[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--dark)}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px}.nav-link[_ngcontent-%COMP%]{font-size:15px;color:var(--gray);transition:color .3s ease,font-weight .3s ease;padding-bottom:3px}.nav-link[_ngcontent-%COMP%]:hover{font-weight:700;color:var(--dark)}.nav-link.is-active[_ngcontent-%COMP%]{color:var(--accent-green);font-weight:700}@media(max-width:800px){header[_ngcontent-%COMP%]{padding:15px 20px}}"]})};var To=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-footer"]],decls:32,vars:0,consts:[["id","contact"],["href","mailto:pl3shkov.m@yandex.ru"],["href","tel:+79997776655"],[1,"social-icons"],["href","#"],["src","https://cdn.simpleicons.org/vk/ffffff","alt","VK","width","24","height","24"],["src","https://cdn.simpleicons.org/telegram/ffffff","alt","Telegram","width","24","height","24"],["src","https://cdn.simpleicons.org/github/ffffff","alt","GitHub","width","24","height","24"],["action","#","method","POST"],["for","email"],["type","email","id","email","name","email","placeholder","\u0412\u0430\u0448 email"],["for","message"],["id","message","name","message","rows","4","placeholder","\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442"],["type","submit"]],template:function(e,i){e&1&&(D(0,"footer",0)(1,"div")(2,"div")(3,"h2"),u(4,"\u0421\u0432\u044F\u0437\u044C"),x(),D(5,"address")(6,"p"),u(7,"Email: "),D(8,"a",1),u(9,"pl3shkov.m@yandex.ru"),x()(),D(10,"p"),u(11,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),D(12,"a",2),u(13,"+7 999 777 66 55"),x()()(),D(14,"p",3)(15,"a",4),se(16,"img",5),x(),D(17,"a",4),se(18,"img",6),x(),D(19,"a",4),se(20,"img",7),x()()(),D(21,"form",8)(22,"label",9),u(23,"Email"),x(),se(24,"input",10),D(25,"label",11),u(26,"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),x(),se(27,"textarea",12),D(28,"button",13),u(29,"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"),x()()(),D(30,"small"),u(31,"\xA9 2026 Name-folio"),x()())},styles:["footer[_ngcontent-%COMP%]{background:var(--bg-dark);color:var(--white);padding:60px;margin-top:50px}footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;flex-wrap:wrap;gap:40px}footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:700;margin-bottom:15px;color:var(--white)}footer[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]{font-style:normal;margin-bottom:15px}footer[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;font-size:15px;color:var(--white)}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--accent-green);text-decoration:underline;transition:color .25s}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent-orange)}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;min-width:350px}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:var(--light-gray)}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--gray);border-radius:6px;padding:12px 14px;color:var(--white);font-family:Inter,sans-serif;font-size:14px}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:var(--gray)}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:14px 35px;background:var(--accent-green);color:var(--white);border:none;border-radius:6px;cursor:pointer;font-family:Inter,sans-serif;font-size:15px;font-weight:700;align-self:flex-start;transition:background .3s ease}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#43a047}footer[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{display:block;max-width:1200px;margin:30px auto 0;font-size:13px;color:var(--gray)}.social-icons[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:15px}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--white);text-decoration:none;transition:color .3s}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent-green)}@media(max-width:800px){footer[_ngcontent-%COMP%]{padding:40px 20px}footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:column}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{min-width:auto}}"]})};var Fo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-root"]],decls:3,vars:0,template:function(e,i){e&1&&Y(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[wi,Ro,To],encapsulation:2})};Ll(ic);ia(Fo,Su).catch(t=>console.error(t));
