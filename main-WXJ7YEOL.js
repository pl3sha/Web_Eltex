import{$ as ve,$a as sc,$b as Gt,A as Tn,Aa as kn,Ab as Qe,B as xr,Ba as Mr,Bb as uc,C as it,Ca as dn,Cb as rt,D as Er,Da as Nn,Db as _e,E as Ta,Ea as Ql,Eb as I,F as Et,Fa as Jl,Fb as Ua,G as Vt,Ga as ec,Gb as z,H as Pa,Ha as tc,Hb as De,I as Fa,Ia as nc,Ib as Q,J as Hl,Ja as ic,Jb as Vn,K as ka,Ka as rc,Kb as Ht,L as Sr,La as Ke,Lb as ae,M as mt,Ma as yt,Mb as se,N as ne,Na as oc,Nb as hc,O as Ye,Oa as f,Ob as jn,P as ge,Pa as Ln,Pb as un,Q as A,Qa as ac,Qb as xi,R as an,Ra as Ar,Rb as G,S as jt,Sa as Rr,Sb as Un,T as v,Ta as St,Tb as h,U as Se,Ua as Bn,Ub as $,V as $l,Va as we,Vb as zn,W as b,Wa as me,Wb as mc,X as S,Xa as q,Xb as Le,Y as c,Ya as Ir,Yb as fc,Z as sn,Za as Mt,Zb as pc,_ as Gl,_a as Ba,_b as $t,a as p,aa as $e,ab as Va,ac as gc,b as H,ba as Xe,bb as C,bc as vc,c as Ra,ca as Ze,cb as Ae,cc as _c,d as Ee,da as ce,db as F,dc as X,e as jl,ea as P,eb as lc,ec as de,f as qe,fa as ln,fb as Ge,fc as bc,g as R,ga as Wl,gb as Or,gc as Tr,h as ze,ha as N,hb as cc,hc as Oe,i as He,ia as L,ib as ja,ic as Rt,j as Ne,ja as cn,jb as Ut,jc as yc,k as y,ka as Ci,kb as Di,kc as Be,l as br,la as ql,lb as dc,lc as Cc,m as yr,ma as M,mb as At,mc as ee,n as Ul,na as Yl,nb as oe,nc as za,o as k,oa as Xl,ob as j,oc as wc,p as Cr,pa as ft,pb as U,pc as Pr,q as xt,qa as Me,qb as Re,r as Ia,ra as bt,rb as Ie,s as wr,sa as Na,sb as V,t as Rn,ta as B,tb as m,u as Dr,ua as La,ub as g,v as zl,va as Zl,vb as Y,w as In,wa as wi,wb as D,x as he,xa as Kl,xb as x,y as Oa,ya as Pn,yb as fe,z as On,za as Fn,zb as zt}from"./chunk-ULM4Y37A.js";var Dc=null;function ot(){return Dc}function Ha(i){Dc??=i}var Ei=class{},hn=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>c(xc),providedIn:"platform"})}return i})();var xc=(()=>{class i extends hn{_location;_history;_doc=c(P);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ot().getBaseHref(this._doc)}onPopState(e){let n=ot().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=ot().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function Mc(i,t){return i?t?i.endsWith("/")?t.startsWith("/")?i+t.slice(1):i+t:t.startsWith("/")?i+t:`${i}/${t}`:i:t}function Ec(i){let t=i.search(/#|\?|$/);return i[t-1]==="/"?i.slice(0,t-1)+i.slice(t):i}function Wt(i){return i&&i[0]!=="?"?`?${i}`:i}var mn=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>c(Ac),providedIn:"root"})}return i})(),lm=new b(""),Ac=(()=>{class i extends mn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Mc(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Wt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Wt(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Wt(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||i)(S(hn),S(lm,8))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var It=(()=>{class i{_subject=new R;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=um(Ec(Sc(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Wt(n))}normalize(e){return i.stripTrailingSlash(dm(this._basePath,Sc(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Wt(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Wt(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Wt;static joinWithSlash=Mc;static stripTrailingSlash=Ec;static \u0275fac=function(n){return new(n||i)(S(mn))};static \u0275prov=v({token:i,factory:()=>cm(),providedIn:"root"})}return i})();function cm(){return new It(S(mn))}function dm(i,t){if(!i||!t.startsWith(i))return t;let e=t.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function Sc(i){return i.replace(/\/index.html$/,"")}function um(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var Te=(function(i){return i[i.Format=0]="Format",i[i.Standalone=1]="Standalone",i})(Te||{}),ie=(function(i){return i[i.Narrow=0]="Narrow",i[i.Abbreviated=1]="Abbreviated",i[i.Wide=2]="Wide",i[i.Short=3]="Short",i})(ie||{}),We=(function(i){return i[i.Short=0]="Short",i[i.Medium=1]="Medium",i[i.Long=2]="Long",i[i.Full=3]="Full",i})(We||{}),Tt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ic(i){return rt(i)[_e.LocaleId]}function Oc(i,t,e){let n=rt(i),r=[n[_e.DayPeriodsFormat],n[_e.DayPeriodsStandalone]],o=at(r,t);return at(o,e)}function Tc(i,t,e){let n=rt(i),r=[n[_e.DaysFormat],n[_e.DaysStandalone]],o=at(r,t);return at(o,e)}function Pc(i,t,e){let n=rt(i),r=[n[_e.MonthsFormat],n[_e.MonthsStandalone]],o=at(r,t);return at(o,e)}function Fc(i,t){let n=rt(i)[_e.Eras];return at(n,t)}function Si(i,t){let e=rt(i);return at(e[_e.DateFormat],t)}function Mi(i,t){let e=rt(i);return at(e[_e.TimeFormat],t)}function Ai(i,t){let n=rt(i)[_e.DateTimeFormat];return at(n,t)}function Ri(i,t){let e=rt(i),n=e[_e.NumberSymbols][t];if(typeof n>"u"){if(t===Tt.CurrencyDecimal)return e[_e.NumberSymbols][Tt.Decimal];if(t===Tt.CurrencyGroup)return e[_e.NumberSymbols][Tt.Group]}return n}function kc(i){if(!i[_e.ExtraData])throw new A(2303,!1)}function Nc(i){let t=rt(i);return kc(t),(t[_e.ExtraData][2]||[]).map(n=>typeof n=="string"?$a(n):[$a(n[0]),$a(n[1])])}function Lc(i,t,e){let n=rt(i);kc(n);let r=[n[_e.ExtraData][0],n[_e.ExtraData][1]],o=at(r,t)||[];return at(o,e)||[]}function at(i,t){for(let e=t;e>-1;e--)if(typeof i[e]<"u")return i[e];throw new A(2304,!1)}function $a(i){let[t,e]=i.split(":");return{hours:+t,minutes:+e}}var mm=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Fr={},fm=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Bc(i,t,e,n){let r=Dm(i);t=Ot(e,t)||t;let a=[],s;for(;t;)if(s=fm.exec(t),s){a=a.concat(s.slice(1));let u=a.pop();if(!u)break;t=u}else{a.push(t);break}let l=r.getTimezoneOffset();n&&(l=jc(n,l),r=wm(r,n));let d="";return a.forEach(u=>{let _=ym(u);d+=_?_(r,e,l):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function Vr(i,t,e){let n=new Date(0);return n.setFullYear(i,t,e),n.setHours(0,0,0),n}function Ot(i,t){let e=Ic(i);if(Fr[e]??={},Fr[e][t])return Fr[e][t];let n="";switch(t){case"shortDate":n=Si(i,We.Short);break;case"mediumDate":n=Si(i,We.Medium);break;case"longDate":n=Si(i,We.Long);break;case"fullDate":n=Si(i,We.Full);break;case"shortTime":n=Mi(i,We.Short);break;case"mediumTime":n=Mi(i,We.Medium);break;case"longTime":n=Mi(i,We.Long);break;case"fullTime":n=Mi(i,We.Full);break;case"short":let r=Ot(i,"shortTime"),o=Ot(i,"shortDate");n=kr(Ai(i,We.Short),[r,o]);break;case"medium":let a=Ot(i,"mediumTime"),s=Ot(i,"mediumDate");n=kr(Ai(i,We.Medium),[a,s]);break;case"long":let l=Ot(i,"longTime"),d=Ot(i,"longDate");n=kr(Ai(i,We.Long),[l,d]);break;case"full":let u=Ot(i,"fullTime"),_=Ot(i,"fullDate");n=kr(Ai(i,We.Full),[u,_]);break}return n&&(Fr[e][t]=n),n}function kr(i,t){return t&&(i=i.replace(/\{([^}]+)}/g,function(e,n){return t!=null&&n in t?t[n]:e})),i}function pt(i,t,e="-",n,r){let o="";(i<0||r&&i<=0)&&(r?i=-i+1:(i=-i,o=e));let a=String(i);for(;a.length<t;)a="0"+a;return n&&(a=a.slice(a.length-t)),o+a}function pm(i,t){return pt(i,3).substring(0,t)}function pe(i,t,e=0,n=!1,r=!1){return function(o,a){let s=gm(i,o);if((e>0||s>-e)&&(s+=e),i===3)s===0&&e===-12&&(s=12);else if(i===6)return pm(s,t);let l=Ri(a,Tt.MinusSign);return pt(s,t,l,n,r)}}function gm(i,t){switch(i){case 0:return t.getFullYear();case 1:return t.getMonth();case 2:return t.getDate();case 3:return t.getHours();case 4:return t.getMinutes();case 5:return t.getSeconds();case 6:return t.getMilliseconds();case 7:return t.getDay();default:throw new A(2301,!1)}}function re(i,t,e=Te.Format,n=!1){return function(r,o){return vm(r,o,i,t,e,n)}}function vm(i,t,e,n,r,o){switch(e){case 2:return Pc(t,r,n)[i.getMonth()];case 1:return Tc(t,r,n)[i.getDay()];case 0:let a=i.getHours(),s=i.getMinutes();if(o){let d=Nc(t),u=Lc(t,r,n),_=d.findIndex(E=>{if(Array.isArray(E)){let[J,W]=E,te=a>=J.hours&&s>=J.minutes,T=a<W.hours||a===W.hours&&s<W.minutes;if(J.hours<W.hours){if(te&&T)return!0}else if(te||T)return!0}else if(E.hours===a&&E.minutes===s)return!0;return!1});if(_!==-1)return u[_]}return Oc(t,r,n)[a<12?0:1];case 3:return Fc(t,n)[i.getFullYear()<=0?0:1];default:let l=e;throw new A(2302,!1)}}function Nr(i){return function(t,e,n){let r=-1*n,o=Ri(e,Tt.MinusSign),a=r>0?Math.floor(r/60):Math.ceil(r/60);switch(i){case 0:return(r>=0?"+":"")+pt(a,2,o)+pt(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+pt(a,1,o);case 2:return"GMT"+(r>=0?"+":"")+pt(a,2,o)+":"+pt(Math.abs(r%60),2,o);case 3:return n===0?"Z":(r>=0?"+":"")+pt(a,2,o)+":"+pt(Math.abs(r%60),2,o);default:throw new A(2310,!1)}}}var _m=0,Br=4;function bm(i){let t=Vr(i,_m,1).getDay();return Vr(i,0,1+(t<=Br?Br:Br+7)-t)}function Vc(i){let t=i.getDay(),e=t===0?-3:Br-t;return Vr(i.getFullYear(),i.getMonth(),i.getDate()+e)}function Ga(i,t=!1){return function(e,n){let r;if(t){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();r=1+Math.floor((a+o)/7)}else{let o=Vc(e),a=bm(o.getFullYear()),s=o.getTime()-a.getTime();r=1+Math.round(s/6048e5)}return pt(r,i,Ri(n,Tt.MinusSign))}}function Lr(i,t=!1){return function(e,n){let o=Vc(e).getFullYear();return pt(o,i,Ri(n,Tt.MinusSign),t)}}var Wa={};function ym(i){if(Wa[i])return Wa[i];let t;switch(i){case"G":case"GG":case"GGG":t=re(3,ie.Abbreviated);break;case"GGGG":t=re(3,ie.Wide);break;case"GGGGG":t=re(3,ie.Narrow);break;case"y":t=pe(0,1,0,!1,!0);break;case"yy":t=pe(0,2,0,!0,!0);break;case"yyy":t=pe(0,3,0,!1,!0);break;case"yyyy":t=pe(0,4,0,!1,!0);break;case"Y":t=Lr(1);break;case"YY":t=Lr(2,!0);break;case"YYY":t=Lr(3);break;case"YYYY":t=Lr(4);break;case"M":case"L":t=pe(1,1,1);break;case"MM":case"LL":t=pe(1,2,1);break;case"MMM":t=re(2,ie.Abbreviated);break;case"MMMM":t=re(2,ie.Wide);break;case"MMMMM":t=re(2,ie.Narrow);break;case"LLL":t=re(2,ie.Abbreviated,Te.Standalone);break;case"LLLL":t=re(2,ie.Wide,Te.Standalone);break;case"LLLLL":t=re(2,ie.Narrow,Te.Standalone);break;case"w":t=Ga(1);break;case"ww":t=Ga(2);break;case"W":t=Ga(1,!0);break;case"d":t=pe(2,1);break;case"dd":t=pe(2,2);break;case"c":case"cc":t=pe(7,1);break;case"ccc":t=re(1,ie.Abbreviated,Te.Standalone);break;case"cccc":t=re(1,ie.Wide,Te.Standalone);break;case"ccccc":t=re(1,ie.Narrow,Te.Standalone);break;case"cccccc":t=re(1,ie.Short,Te.Standalone);break;case"E":case"EE":case"EEE":t=re(1,ie.Abbreviated);break;case"EEEE":t=re(1,ie.Wide);break;case"EEEEE":t=re(1,ie.Narrow);break;case"EEEEEE":t=re(1,ie.Short);break;case"a":case"aa":case"aaa":t=re(0,ie.Abbreviated);break;case"aaaa":t=re(0,ie.Wide);break;case"aaaaa":t=re(0,ie.Narrow);break;case"b":case"bb":case"bbb":t=re(0,ie.Abbreviated,Te.Standalone,!0);break;case"bbbb":t=re(0,ie.Wide,Te.Standalone,!0);break;case"bbbbb":t=re(0,ie.Narrow,Te.Standalone,!0);break;case"B":case"BB":case"BBB":t=re(0,ie.Abbreviated,Te.Format,!0);break;case"BBBB":t=re(0,ie.Wide,Te.Format,!0);break;case"BBBBB":t=re(0,ie.Narrow,Te.Format,!0);break;case"h":t=pe(3,1,-12);break;case"hh":t=pe(3,2,-12);break;case"H":t=pe(3,1);break;case"HH":t=pe(3,2);break;case"m":t=pe(4,1);break;case"mm":t=pe(4,2);break;case"s":t=pe(5,1);break;case"ss":t=pe(5,2);break;case"S":t=pe(6,1);break;case"SS":t=pe(6,2);break;case"SSS":t=pe(6,3);break;case"Z":case"ZZ":case"ZZZ":t=Nr(0);break;case"ZZZZZ":t=Nr(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=Nr(1);break;case"OOOO":case"ZZZZ":case"zzzz":t=Nr(2);break;default:return null}return Wa[i]=t,t}function jc(i,t){i=i.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+i)/6e4;return isNaN(e)?t:e}function Cm(i,t){return i=new Date(i.getTime()),i.setMinutes(i.getMinutes()+t),i}function wm(i,t,e){let r=i.getTimezoneOffset(),o=jc(t,r);return Cm(i,-1*(o-r))}function Dm(i){if(Rc(i))return i;if(typeof i=="number"&&!isNaN(i))return new Date(i);if(typeof i=="string"){if(i=i.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(i)){let[r,o=1,a=1]=i.split("-").map(s=>+s);return Vr(r,o-1,a)}let e=parseFloat(i);if(!isNaN(i-e))return new Date(e);let n;if(n=i.match(mm))return xm(n)}let t=new Date(i);if(!Rc(t))throw new A(2311,!1);return t}function xm(i){let t=new Date(0),e=0,n=0,r=i[8]?t.setUTCFullYear:t.setFullYear,o=i[8]?t.setUTCHours:t.setHours;i[9]&&(e=Number(i[9]+i[10]),n=Number(i[9]+i[11])),r.call(t,Number(i[1]),Number(i[2])-1,Number(i[3]));let a=Number(i[4]||0)-e,s=Number(i[5]||0)-n,l=Number(i[6]||0),d=Math.floor(parseFloat("0."+(i[7]||0))*1e3);return o.call(t,a,s,l,d),t}function Rc(i){return i instanceof Date&&!isNaN(i.valueOf())}var qa=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(ce);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||i)(q(Mt))};static \u0275dir=F({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Me]})}return i})();function Em(i,t){return new A(2100,!1)}var Sm="mediumDate",Uc=new b(""),zc=new b(""),Pt=(()=>{class i{locale;defaultTimezone;defaultOptions;constructor(e,n,r){this.locale=e,this.defaultTimezone=n,this.defaultOptions=r}transform(e,n,r,o){if(e==null||e===""||e!==e)return null;try{let a=n??this.defaultOptions?.dateFormat??Sm,s=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Bc(e,a,o||this.locale,s)}catch(a){throw Em(i,a.message)}}static \u0275fac=function(n){return new(n||i)(q(_c,16),q(Uc,24),q(zc,24))};static \u0275pipe=lc({name:"date",type:i,pure:!0})}return i})();function Ii(i,t){t=encodeURIComponent(t);for(let e of i.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===t)return decodeURIComponent(o)}return null}var fn=class{};function $c(i,t,e){return uc(i,t,e)}var Xa="browser";function Gc(i){return i===Xa}var Wc=(()=>{class i{static \u0275prov=v({token:i,providedIn:"root",factory:()=>new Ya(c(P),window)})}return i})(),Ya=class{document;window;offset=()=>[0,0];constructor(t,e){this.document=t,this.window=e}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,e){this.window.scrollTo(H(p({},e),{left:t[0],top:t[1]}))}scrollToAnchor(t,e){let n=Tm(this.document,t);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch{console.warn(an(2400,!1))}}scrollToElement(t,e){let n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(H(p({},e),{left:r-a[0],top:o-a[1]}))}};function Tm(i,t){let e=i.getElementById(t)||i.getElementsByName(t)[0];if(e)return e;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let n=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(t)||o.querySelector(`[name="${t}"]`);if(a)return a}r=n.nextNode()}}return null}var Oi=class{_doc;constructor(t){this._doc=t}manager},jr=(()=>{class i extends Oi{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||i)(S(P))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Hr=new b(""),Ja=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof jr));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof jr);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new A(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||i)(S(Hr),S(L))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Za="ng-app-id";function qc(i){for(let t of i)t.remove()}function Yc(i,t){let e=t.createElement("style");return e.textContent=i,e}function Fm(i,t,e,n){let r=i.head?.querySelectorAll(`style[${Za}="${t}"],link[${Za}="${t}"]`);if(r)for(let o of r)o.removeAttribute(Za),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Qa(i,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var es=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,Fm(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Yc);n?.forEach(r=>this.addUsage(r,this.external,Qa))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(qc(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])qc(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Yc(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,Qa(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||i)(S(P),S(wi),S(kn,8),S(Pn))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Ka={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ts=/%COMP%/g;var Zc="%COMP%",km=`_nghost-${Zc}`,Nm=`_ngcontent-${Zc}`,Lm=!0,Bm=new b("",{factory:()=>Lm});function Vm(i){return Nm.replace(ts,i)}function jm(i){return km.replace(ts,i)}function Kc(i,t){return t.map(e=>e.replace(ts,i))}var Fi=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Ti(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof zr?r.applyToHost(e):r instanceof Pi&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,_=this.tracingService;switch(n.encapsulation){case Mr.Emulated:o=new zr(l,d,n,this.appId,u,a,s,_);break;case Mr.ShadowDom:return new Ur(l,e,n,a,s,this.nonce,_,d);case Mr.ExperimentalIsolatedShadowDom:return new Ur(l,e,n,a,s,this.nonce,_);default:o=new Pi(l,d,n,u,a,s,_);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||i)(S(Ja),S(es),S(wi),S(Bm),S(P),S(L),S(kn),S(Ar,8))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Ti=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,r){this.eventManager=t,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Ka[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Xc(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Xc(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new A(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;let o=Ka[r];o?t.setAttributeNS(o,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let r=Ka[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(Ln.DashCase|Ln.Important)?t.style.setProperty(e,n,r&Ln.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&Ln.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,r){if(typeof t=="string"&&(t=ot().getGlobalEventTarget(this.doc,t),!t))throw new A(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,r)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function Xc(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Ur=class extends Ti{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,n,r,o,a,s,l){super(t,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=Kc(n.id,d);for(let _ of d){let E=document.createElement("style");a&&E.setAttribute("nonce",a),E.textContent=_,this.shadowRoot.appendChild(E)}let u=n.getExternalStyles?.();if(u)for(let _ of u){let E=Qa(_,r);a&&E.setAttribute("nonce",a),this.shadowRoot.appendChild(E)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Pi=class extends Ti{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,r,o,a,s,l){super(t,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=l?Kc(l,d):d,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ac.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},zr=class extends Pi{contentAttr;hostAttr;constructor(t,e,n,r,o,a,s,l){let d=r+"-"+n.id;super(t,e,n,o,a,s,l,d),this.contentAttr=Vm(d),this.hostAttr=jm(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}};var $r=class i extends Ei{supportsDOMEvents=!0;static makeCurrent(){Ha(new i)}onAndCancel(t,e,n,r){return t.addEventListener(e,n,r),()=>{t.removeEventListener(e,n,r)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=zm();return e==null?null:Hm(e)}resetBaseElement(){ki=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Ii(document.cookie,t)}},ki=null;function zm(){return ki=ki||document.head.querySelector("base"),ki?ki.getAttribute("href"):null}function Hm(i){return new URL(i,document.baseURI).pathname}var $m=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),Qc=["alt","control","meta","shift"],Gm={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Wm={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Jc=(()=>{class i extends Oi{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=i.parseEventName(n),s=i.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ot().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),Qc.forEach(d=>{let u=n.indexOf(d);u>-1&&(n.splice(u,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let r=Gm[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Qc.forEach(a=>{if(a!==r){let s=Wm[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||i)(S(P))};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})();async function ns(i,t,e){let n=p({rootComponent:i},qm(t,e));return Cc(n)}function qm(i,t){return{platformRef:t?.platformRef,appProviders:[...Qm,...i?.providers??[]],platformProviders:Km}}function Ym(){$r.makeCurrent()}function Xm(){return new cn}function Zm(){return Zl(document),document}var Km=[{provide:Pn,useValue:Xa},{provide:Kl,useValue:Ym,multi:!0},{provide:P,useFactory:Zm}];var Qm=[{provide:Gl,useValue:"root"},{provide:cn,useFactory:Xm},{provide:Hr,useClass:jr,multi:!0},{provide:Hr,useClass:Jc,multi:!0},Fi,es,Ja,{provide:we,useExisting:Fi},{provide:fn,useClass:$m},[]];var qt=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=(t.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Wr=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},qr=class{encodeKey(t){return ed(t)}encodeValue(t){return ed(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Jm(i,t){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,o)),t.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var ef=/%(\d[a-f0-9])/gi,tf={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ed(i){return encodeURIComponent(i).replace(ef,(t,e)=>tf[e]??t)}function Gr(i){return`${i}`}var Ft=class i{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new qr,t.fromString){if(t.fromObject)throw new A(2805,!1);this.map=Jm(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],r=Array.isArray(n)?n.map(Gr):[Gr(n)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Gr(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(Gr(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function nf(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function td(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function nd(i){return typeof Blob<"u"&&i instanceof Blob}function id(i){return typeof FormData<"u"&&i instanceof FormData}function rf(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var rd="Content-Type",od="Accept",ad="text/plain",sd="application/json",of=`${sd}, ${ad}, */*`,Hn=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,n,r){this.url=e,this.method=t.toUpperCase();let o;if(nf(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new qt,this.context??=new Wr,!this.params)this.params=new Ft,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||td(this.body)||nd(this.body)||id(this.body)||rf(this.body)?this.body:this.body instanceof Ft?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||id(this.body)?null:nd(this.body)?this.body.type||null:td(this.body)?null:typeof this.body=="string"?ad:this.body instanceof Ft?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?sd:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,o=t.keepalive??this.keepalive,a=t.priority||this.priority,s=t.cache||this.cache,l=t.mode||this.mode,d=t.redirect||this.redirect,u=t.credentials||this.credentials,_=t.referrer||this.referrer,E=t.integrity||this.integrity,J=t.referrerPolicy||this.referrerPolicy,W=t.transferCache??this.transferCache,te=t.timeout??this.timeout,T=t.body!==void 0?t.body:this.body,Z=t.withCredentials??this.withCredentials,ue=t.reportProgress??this.reportProgress,Ue=t.headers||this.headers,Ce=t.params||this.params,bi=t.context??this.context;return t.setHeaders!==void 0&&(Ue=Object.keys(t.setHeaders).reduce((yi,on)=>yi.set(on,t.setHeaders[on]),Ue)),t.setParams&&(Ce=Object.keys(t.setParams).reduce((yi,on)=>yi.set(on,t.setParams[on]),Ce)),new i(e,n,T,{params:Ce,headers:Ue,context:bi,reportProgress:ue,responseType:r,withCredentials:Z,transferCache:W,keepalive:o,cache:s,priority:a,timeout:te,mode:l,redirect:d,credentials:u,referrer:_,integrity:E,referrerPolicy:J})}},pn=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(pn||{}),Gn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,n="OK"){this.headers=t.headers||new qt,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Yr=class i extends Gn{constructor(t={}){super(t)}type=pn.ResponseHeader;clone(t={}){return new i({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},Ni=class i extends Gn{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=pn.Response;clone(t={}){return new i({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},$n=class extends Gn{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},af=200,sf=204;var lf=new b("");var cf=/^\)\]\}',?\n/;var rs=(()=>{class i{xhrFactory;tracingService=c(Ar,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let n=this.xhrFactory;return y(null).pipe(ne(()=>new qe(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((T,Z)=>a.setRequestHeader(T,Z.join(","))),e.headers.has(od)||a.setRequestHeader(od,of),!e.headers.has(rd)){let T=e.detectContentTypeHeader();T!==null&&a.setRequestHeader(rd,T)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();a.responseType=T!=="json"?T:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let T=a.statusText||"OK",Z=new qt(a.getAllResponseHeaders()),ue=a.responseURL||e.url;return l=new Yr({headers:Z,status:a.status,statusText:T,url:ue}),l},u=this.maybePropagateTrace(()=>{let{headers:T,status:Z,statusText:ue,url:Ue}=d(),Ce=null;Z!==sf&&(Ce=typeof a.response>"u"?a.responseText:a.response),Z===0&&(Z=Ce?af:0);let bi=Z>=200&&Z<300;if(e.responseType==="json"&&typeof Ce=="string"){let yi=Ce;Ce=Ce.replace(cf,"");try{Ce=Ce!==""?JSON.parse(Ce):null}catch(on){Ce=yi,bi&&(bi=!1,Ce={error:on,text:Ce})}}bi?(o.next(new Ni({body:Ce,headers:T,status:Z,statusText:ue,url:Ue||void 0})),o.complete()):o.error(new $n({error:Ce,headers:T,status:Z,statusText:ue,url:Ue||void 0}))}),_=this.maybePropagateTrace(T=>{let{url:Z}=d(),ue=new $n({error:T,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Z||void 0});o.error(ue)}),E=_;e.timeout&&(E=this.maybePropagateTrace(T=>{let{url:Z}=d(),ue=new $n({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Z||void 0});o.error(ue)}));let J=!1,W=this.maybePropagateTrace(T=>{J||(o.next(d()),J=!0);let Z={type:pn.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(Z.total=T.total),e.responseType==="text"&&a.responseText&&(Z.partialText=a.responseText),o.next(Z)}),te=this.maybePropagateTrace(T=>{let Z={type:pn.UploadProgress,loaded:T.loaded};T.lengthComputable&&(Z.total=T.total),o.next(Z)});return a.addEventListener("load",u),a.addEventListener("error",_),a.addEventListener("timeout",E),a.addEventListener("abort",_),e.reportProgress&&(a.addEventListener("progress",W),s!==null&&a.upload&&a.upload.addEventListener("progress",te)),a.send(s),o.next({type:pn.Sent}),()=>{a.removeEventListener("error",_),a.removeEventListener("abort",_),a.removeEventListener("load",u),a.removeEventListener("timeout",E),e.reportProgress&&(a.removeEventListener("progress",W),s!==null&&a.upload&&a.upload.removeEventListener("progress",te)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||i)(S(fn))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function df(i,t){return t(i)}function uf(i,t,e){return(n,r)=>$e(e,()=>t(n,o=>i(o,r)))}var ld=new b("",{factory:()=>[]}),cd=new b(""),dd=new b("",{factory:()=>!0});var os=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=S(rs),r},providedIn:"root"})}return i})();var Xr=(()=>{class i{backend;injector;chain=null;pendingTasks=c(Xl);contributeToStability=c(dd);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(ld),...this.injector.get(cd,[])]));this.chain=n.reduceRight((r,o)=>uf(r,o,this.injector),df)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Et(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||i)(S(os),S(ve))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),as=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=S(Xr),r},providedIn:"root"})}return i})();function is(i,t){return{body:t,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Yt=(()=>{class i{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Hn)o=e;else{let l;r.headers instanceof qt?l=r.headers:l=new qt(r.headers);let d;r.params&&(r.params instanceof Ft?d=r.params:d=new Ft({fromObject:r.params})),o=new Hn(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(Tn(l=>this.handler.handle(l)));if(e instanceof Hn||r.observe==="events")return a;let s=a.pipe(he(l=>l instanceof Ni));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(k(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new A(2806,!1);return l.body}));case"blob":return s.pipe(k(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new A(2807,!1);return l.body}));case"text":return s.pipe(k(l=>{if(l.body!==null&&typeof l.body!="string")throw new A(2808,!1);return l.body}));default:return s.pipe(k(l=>l.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ft().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,is(r,n))}post(e,n,r={}){return this.request("POST",e,is(r,n))}put(e,n,r={}){return this.request("PUT",e,is(r,n))}static \u0275fac=function(n){return new(n||i)(S(as))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var hf=new b("",{factory:()=>!0}),mf="XSRF-TOKEN",ff=new b("",{factory:()=>mf}),pf="X-XSRF-TOKEN",gf=new b("",{factory:()=>pf}),vf=(()=>{class i{cookieName=c(ff);doc=c(P);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ii(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ud=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=S(vf),r},providedIn:"root"})}return i})();function _f(i,t){if(!c(hf)||i.method==="GET"||i.method==="HEAD")return t(i);try{let r=c(hn).href,{origin:o}=new URL(r),{origin:a}=new URL(i.url,o);if(o!==a)return t(i)}catch{return t(i)}let e=c(ud).getToken(),n=c(gf);return e!=null&&!i.headers.has(n)&&(i=i.clone({headers:i.headers.set(n,e)})),t(i)}function ss(...i){let t=[Yt,Xr,{provide:as,useExisting:Xr},{provide:os,useFactory:()=>c(lf,{optional:!0})??c(rs)},{provide:ld,useValue:_f,multi:!0}];for(let e of i)t.push(...e.\u0275providers);return sn(t)}var Xt=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||i)(S(P))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ls=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=S(Cf),r},providedIn:"root"})}return i})(),Cf=(()=>{class i extends ls{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ke.NONE:return n;case Ke.HTML:return Nn(n,"HTML")?dn(n):rc(this._doc,String(n)).toString();case Ke.STYLE:return Nn(n,"Style")?dn(n):n;case Ke.SCRIPT:if(Nn(n,"Script"))return dn(n);throw new A(5200,!1);case Ke.URL:return Nn(n,"URL")?dn(n):ic(String(n));case Ke.RESOURCE_URL:if(Nn(n,"ResourceURL"))return dn(n);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Ql(e)}bypassSecurityTrustStyle(e){return Jl(e)}bypassSecurityTrustScript(e){return ec(e)}bypassSecurityTrustUrl(e){return tc(e)}bypassSecurityTrustResourceUrl(e){return nc(e)}static \u0275fac=function(n){return new(n||i)(S(P))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function wf(i){let t=i,e=Math.floor(Math.abs(i)),n=i.toString().replace(/^[^.]*\.?/,"").length;return n===0&&e%10===1&&e%100!==11?1:n===0&&e%10===Math.floor(e%10)&&e%10>=2&&e%10<=4&&!(e%100>=12&&e%100<=14)?3:n===0&&e%10===0||n===0&&e%10===Math.floor(e%10)&&e%10>=5&&e%10<=9||n===0&&e%100===Math.floor(e%100)&&e%100>=11&&e%100<=14?4:5}var fd=["ru",[["AM","PM"]],void 0,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],void 0,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y\u202F'\u0433'.","d MMMM y\u202F'\u0433'.","EEEE, d MMMM y\u202F'\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[void 0,"\u0440."],GEL:[void 0,"\u10DA"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",wf];var O="primary",Xi=Symbol("RouteTitle"),ms=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function vn(i){return new ms(i)}function cs(i,t,e){for(let n=0;n<i.length;n++){let r=i[n],o=t[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Cd(i,t,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>i.length||e.pathMatch==="full"&&(t.hasChildren()||n.length<i.length))return null;let l={},d=i.slice(0,n.length);return cs(n,d,l)?{consumed:d,posParams:l}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&t.hasChildren()&&e.path!=="**")return null;let s={};return!cs(o,i.slice(0,o.length),s)||!cs(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function to(i){return new Promise((t,e)=>{i.pipe(Vt()).subscribe({next:n=>t(n),error:n=>e(n)})})}function Df(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;++e)if(!Ct(i[e],t[e]))return!1;return!0}function Ct(i,t){let e=i?fs(i):void 0,n=t?fs(t):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!wd(i[r],t[r]))return!1;return!0}function fs(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function wd(i,t){if(Array.isArray(i)&&Array.isArray(t)){if(i.length!==t.length)return!1;let e=[...i].sort(),n=[...t].sort();return e.every((r,o)=>n[o]===r)}else return i===t}function xf(i){return i.length>0?i[i.length-1]:null}function bn(i){return yr(i)?i:Di(i)?Ne(Promise.resolve(i)):y(i)}function Dd(i){return yr(i)?to(i):Promise.resolve(i)}var Ef={exact:Ed,subset:Sd},xd={exact:Sf,subset:Mf,ignored:()=>!0},As={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ui={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Rs(i,t,e){let n=i instanceof Ve?i:t.parseUrl(i);return de(()=>ps(t.lastSuccessfulNavigation()?.finalUrl??new Ve,n,p(p({},Ui),e)))}function ps(i,t,e){return Ef[e.paths](i.root,t.root,e.matrixParams)&&xd[e.queryParams](i.queryParams,t.queryParams)&&!(e.fragment==="exact"&&i.fragment!==t.fragment)}function Sf(i,t){return Ct(i,t)}function Ed(i,t,e){if(!gn(i.segments,t.segments)||!Qr(i.segments,t.segments,e)||i.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!i.children[n]||!Ed(i.children[n],t.children[n],e))return!1;return!0}function Mf(i,t){return Object.keys(t).length<=Object.keys(i).length&&Object.keys(t).every(e=>wd(i[e],t[e]))}function Sd(i,t,e){return Md(i,t,t.segments,e)}function Md(i,t,e,n){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!gn(r,e)||t.hasChildren()||!Qr(r,e,n))}else if(i.segments.length===e.length){if(!gn(i.segments,e)||!Qr(i.segments,e,n))return!1;for(let r in t.children)if(!i.children[r]||!Sd(i.children[r],t.children[r],n))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!gn(i.segments,r)||!Qr(i.segments,r,n)||!i.children[O]?!1:Md(i.children[O],t,o,n)}}function Qr(i,t,e){return t.every((n,r)=>xd[e](i[r].parameters,n.parameters))}var Ve=class{root;queryParams;fragment;_queryParamMap;constructor(t=new K([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=vn(this.queryParams),this._queryParamMap}toString(){return If.serialize(this)}},K=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Jr(this)}},Zt=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=vn(this.parameters),this._parameterMap}toString(){return Rd(this)}};function Af(i,t){return gn(i,t)&&i.every((e,n)=>Ct(e.parameters,t[n].parameters))}function gn(i,t){return i.length!==t.length?!1:i.every((e,n)=>e.path===t[n].path)}function Rf(i,t){let e=[];return Object.entries(i.children).forEach(([n,r])=>{n===O&&(e=e.concat(t(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==O&&(e=e.concat(t(r,n)))}),e}var yn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>new Kt,providedIn:"root"})}return i})(),Kt=class{parse(t){let e=new vs(t);return new Ve(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Li(t.root,!0)}`,n=Pf(t.queryParams),r=typeof t.fragment=="string"?`#${Of(t.fragment)}`:"";return`${e}${n}${r}`}},If=new Kt;function Jr(i){return i.segments.map(t=>Rd(t)).join("/")}function Li(i,t){if(!i.hasChildren())return Jr(i);if(t){let e=i.children[O]?Li(i.children[O],!1):"",n=[];return Object.entries(i.children).forEach(([r,o])=>{r!==O&&n.push(`${r}:${Li(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Rf(i,(n,r)=>r===O?[Li(i.children[O],!1)]:[`${r}:${Li(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[O]!=null?`${Jr(i)}/${e[0]}`:`${Jr(i)}/(${e.join("//")})`}}function Ad(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Zr(i){return Ad(i).replace(/%3B/gi,";")}function Of(i){return encodeURI(i)}function gs(i){return Ad(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function eo(i){return decodeURIComponent(i)}function pd(i){return eo(i.replace(/\+/g,"%20"))}function Rd(i){return`${gs(i.path)}${Tf(i.parameters)}`}function Tf(i){return Object.entries(i).map(([t,e])=>`;${gs(t)}=${gs(e)}`).join("")}function Pf(i){let t=Object.entries(i).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Zr(e)}=${Zr(r)}`).join("&"):`${Zr(e)}=${Zr(n)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var Ff=/^[^\/()?;#]+/;function ds(i){let t=i.match(Ff);return t?t[0]:""}var kf=/^[^\/()?;=#]+/;function Nf(i){let t=i.match(kf);return t?t[0]:""}var Lf=/^[^=?&#]+/;function Bf(i){let t=i.match(Lf);return t?t[0]:""}var Vf=/^[^&#]+/;function jf(i){let t=i.match(Vf);return t?t[0]:""}var vs=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new K([],{}):new K([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,t));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,t)),(e.length>0||Object.keys(n).length>0)&&(r[O]=new K(e,n)),r}parseSegment(){let t=ds(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(t),new Zt(eo(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=Nf(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=ds(this.remaining);r&&(n=r,this.capture(n))}t[eo(e)]=eo(n)}parseQueryParam(t){let e=Bf(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=jf(this.remaining);a&&(n=a,this.capture(n))}let r=pd(e),o=pd(n);if(t.hasOwnProperty(r)){let a=t[r];Array.isArray(a)||(a=[a],t[r]=a),a.push(o)}else t[r]=o}parseParens(t,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ds(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):t&&(a=O);let s=this.parseChildren(e+1);n[a??O]=Object.keys(s).length===1&&s[O]?s[O]:new K([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new A(4011,!1)}};function Id(i){return i.segments.length>0?new K([],{[O]:i}):i}function Od(i){let t={};for(let[n,r]of Object.entries(i.children)){let o=Od(r);if(n===O&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))t[a]=s;else(o.segments.length>0||o.hasChildren())&&(t[n]=o)}let e=new K(i.segments,t);return Uf(e)}function Uf(i){if(i.numberOfChildren===1&&i.children[O]){let t=i.children[O];return new K(i.segments.concat(t.segments),t.children)}return i}function Qt(i){return i instanceof Ve}function Td(i,t,e=null,n=null,r=new Kt){let o=Pd(i);return Fd(o,t,e,n,r)}function Pd(i){let t;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new K(o.url,a);return o===i&&(t=s),s}let n=e(i.root),r=Id(n);return t??r}function Fd(i,t,e,n,r){let o=i;for(;o.parent;)o=o.parent;if(t.length===0)return us(o,o,o,e,n,r);let a=zf(t);if(a.toRoot())return us(o,o,new K([],{}),e,n,r);let s=Hf(a,o,i),l=s.processChildren?Vi(s.segmentGroup,s.index,a.commands):Nd(s.segmentGroup,s.index,a.commands);return us(o,s.segmentGroup,l,e,n,r)}function no(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function zi(i){return typeof i=="object"&&i!=null&&i.outlets}function gd(i,t,e){i||="\u0275";let n=new Ve;return n.queryParams={[i]:t},e.parse(e.serialize(n)).queryParams[i]}function us(i,t,e,n,r,o){let a={};for(let[d,u]of Object.entries(n??{}))a[d]=Array.isArray(u)?u.map(_=>gd(d,_,o)):gd(d,u,o);let s;i===t?s=e:s=kd(i,t,e);let l=Id(Od(s));return new Ve(l,a,r)}function kd(i,t,e){let n={};return Object.entries(i.children).forEach(([r,o])=>{o===t?n[r]=e:n[r]=kd(o,t,e)}),new K(i.segments,n)}var io=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&no(n[0]))throw new A(4003,!1);let r=n.find(zi);if(r&&r!==xf(n))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function zf(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new io(!0,0,i);let t=0,e=!1,n=i.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?t++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new io(e,t,n)}var qn=class{segmentGroup;processChildren;index;constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function Hf(i,t,e){if(i.isAbsolute)return new qn(t,!0,0);if(!e)return new qn(t,!1,NaN);if(e.parent===null)return new qn(e,!0,0);let n=no(i.commands[0])?0:1,r=e.segments.length-1+n;return $f(e,r,i.numberOfDoubleDots)}function $f(i,t,e){let n=i,r=t,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new A(4005,!1);r=n.segments.length}return new qn(n,!1,r-o)}function Gf(i){return zi(i[0])?i[0].outlets:{[O]:i}}function Nd(i,t,e){if(i??=new K([],{}),i.segments.length===0&&i.hasChildren())return Vi(i,t,e);let n=Wf(i,t,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let o=new K(i.segments.slice(0,n.pathIndex),{});return o.children[O]=new K(i.segments.slice(n.pathIndex),i.children),Vi(o,0,r)}else return n.match&&r.length===0?new K(i.segments,{}):n.match&&!i.hasChildren()?_s(i,t,e):n.match?Vi(i,0,r):_s(i,t,e)}function Vi(i,t,e){if(e.length===0)return new K(i.segments,{});{let n=Gf(e),r={};if(Object.keys(n).some(o=>o!==O)&&i.children[O]&&i.numberOfChildren===1&&i.children[O].segments.length===0){let o=Vi(i.children[O],t,e);return new K(i.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Nd(i.children[o],t,a))}),Object.entries(i.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new K(i.segments,r)}}function Wf(i,t,e){let n=0,r=t,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=e.length)return o;let a=i.segments[r],s=e[n];if(zi(s))break;let l=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!_d(l,d,a))return o;n+=2}else{if(!_d(l,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function _s(i,t,e){let n=i.segments.slice(0,t),r=0;for(;r<e.length;){let o=e[r];if(zi(o)){let l=qf(o.outlets);return new K(n,l)}if(r===0&&no(e[0])){let l=i.segments[t];n.push(new Zt(l.path,vd(e[0]))),r++;continue}let a=zi(o)?o.outlets[O]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&no(s)?(n.push(new Zt(a,vd(s))),r+=2):(n.push(new Zt(a,{})),r++)}return new K(n,{})}function qf(i){let t={};return Object.entries(i).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[e]=_s(new K([],{}),0,n))}),t}function vd(i){let t={};return Object.entries(i).forEach(([e,n])=>t[e]=`${n}`),t}function _d(i,t,e){return i==e.path&&Ct(t,e.parameters)}var Yn="imperative",be=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(be||{}),et=class{id;url;constructor(t,e){this.id=t,this.url=e}},Jt=class extends et{type=be.NavigationStart;navigationTrigger;restoredState;constructor(t,e,n="imperative",r=null){super(t,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},lt=class extends et{urlAfterRedirects;type=be.NavigationEnd;constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Pe=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(Pe||{}),Zn=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Zn||{}),st=class extends et{reason;code;type=be.NavigationCancel;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ld(i){return i instanceof st&&(i.code===Pe.Redirect||i.code===Pe.SupersededByNewNavigation)}var wt=class extends et{reason;code;type=be.NavigationSkipped;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}},_n=class extends et{error;target;type=be.NavigationError;constructor(t,e,n,r){super(t,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Hi=class extends et{urlAfterRedirects;state;type=be.RoutesRecognized;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ro=class extends et{urlAfterRedirects;state;type=be.GuardsCheckStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},oo=class extends et{urlAfterRedirects;state;shouldActivate;type=be.GuardsCheckEnd;constructor(t,e,n,r,o){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ao=class extends et{urlAfterRedirects;state;type=be.ResolveStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},so=class extends et{urlAfterRedirects;state;type=be.ResolveEnd;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lo=class{route;type=be.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},co=class{route;type=be.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},uo=class{snapshot;type=be.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ho=class{snapshot;type=be.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mo=class{snapshot;type=be.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fo=class{snapshot;type=be.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kn=class{routerEvent;position;anchor;scrollBehavior;type=be.Scroll;constructor(t,e,n,r){this.routerEvent=t,this.position=e,this.anchor=n,this.scrollBehavior=r}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},Qn=class{},$i=class{},Jn=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function Yf(i){return!(i instanceof Qn)&&!(i instanceof Jn)&&!(i instanceof $i)}var po=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new ii(this.rootInjector)}},ii=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new po(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||i)(S(ve))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),go=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=bs(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=bs(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=ys(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return ys(t,this._root).map(e=>e.value)}};function bs(i,t){if(i===t.value)return t;for(let e of t.children){let n=bs(i,e);if(n)return n}return null}function ys(i,t){if(i===t.value)return[t];for(let e of t.children){let n=ys(i,e);if(n.length)return n.unshift(t),n}return[]}var Je=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Wn(i){let t={};return i&&i.children.forEach(e=>t[e.value.outlet]=e),t}var Gi=class extends go{snapshot;constructor(t,e){super(t),this.snapshot=e,Os(this,t)}toString(){return this.snapshot.toString()}};function Bd(i,t){let e=Xf(i,t),n=new ze([new Zt("",{})]),r=new ze({}),o=new ze({}),a=new ze({}),s=new ze(""),l=new vt(n,r,a,s,o,O,i,e.root);return l.snapshot=e.root,new Gi(new Je(l,[]),e)}function Xf(i,t){let e={},n={},r={},a=new ei([],e,r,"",n,O,i,null,{},t);return new Wi("",new Je(a,[]))}var vt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,n,r,o,a,s,l){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(k(d=>d[Xi]))??y(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(k(t=>vn(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(k(t=>vn(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Is(i,t,e="emptyOnly"){let n,{routeConfig:r}=i;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?n={params:p(p({},t.params),i.params),data:p(p({},t.data),i.data),resolve:p(p(p(p({},i.data),t.data),r?.data),i._resolvedData)}:n={params:p({},i.params),data:p({},i.data),resolve:p(p({},i.data),i._resolvedData??{})},r&&jd(r)&&(n.resolve[Xi]=r.title),n}var ei=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Xi]}constructor(t,e,n,r,o,a,s,l,d,u){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=vn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=vn(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},Wi=class extends go{url;constructor(t,e){super(e),this.url=t,Os(this,e)}toString(){return Vd(this._root)}};function Os(i,t){t.value._routerState=i,t.children.forEach(e=>Os(i,e))}function Vd(i){let t=i.children.length>0?` { ${i.children.map(Vd).join(", ")} } `:"";return`${i.value}${t}`}function hs(i){if(i.snapshot){let t=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Ct(t.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Ct(t.params,e.params)||i.paramsSubject.next(e.params),Df(t.url,e.url)||i.urlSubject.next(e.url),Ct(t.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Cs(i,t){let e=Ct(i.params,t.params)&&Af(i.url,t.url),n=!i.parent!=!t.parent;return e&&!n&&(!i.parent||Cs(i.parent,t.parent))}function jd(i){return typeof i.title=="string"||i.title===null}var Ud=new b(""),Zi=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=O;activateEvents=new N;deactivateEvents=new N;attachEvents=new N;detachEvents=new N;routerOutletData=Oe();parentContexts=c(ii);location=c(Mt);changeDetector=c(Be);inputBinder=c(yo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new ws(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Me]})}return i})(),ws=class{route;childContexts;parent;outletData;constructor(t,e,n,r){this.route=t,this.childContexts=e,this.parent=n,this.outletData=r}get(t,e){return t===vt?this.route:t===ii?this.childContexts:t===Ud?this.outletData:this.parent.get(t,e)}},yo=new b("");var Ts=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Y(0,"router-outlet")},dependencies:[Zi],encapsulation:2})}return i})();function Ps(i){let t=i.children&&i.children.map(Ps),e=t?H(p({},i),{children:t}):p({},i);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==O&&(e.component=Ts),e}function Zf(i,t,e){let n=qi(i,t._root,e?e._root:void 0);return new Gi(n,t)}function qi(i,t,e){if(e&&i.shouldReuseRoute(t.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=t.value;let r=Kf(i,t,e);return new Je(n,r)}else{if(i.shouldAttach(t.value)){let o=i.retrieve(t.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=t.value,a.children=t.children.map(s=>qi(i,s)),a}}let n=Qf(t.value),r=t.children.map(o=>qi(i,o));return new Je(n,r)}}function Kf(i,t,e){return t.children.map(n=>{for(let r of e.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return qi(i,n,r);return qi(i,n)})}function Qf(i){return new vt(new ze(i.url),new ze(i.params),new ze(i.queryParams),new ze(i.fragment),new ze(i.data),i.outlet,i.component,i)}var ti=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},zd="ngNavigationCancelingError";function vo(i,t){let{redirectTo:e,navigationBehaviorOptions:n}=Qt(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=Hd(!1,Pe.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Hd(i,t){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[zd]=!0,e.cancellationCode=t,e}function Jf(i){return $d(i)&&Qt(i.url)}function $d(i){return!!i&&i[zd]}var Ds=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,n,r,o){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),hs(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let r=Wn(e);t.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(t,e,n){let r=t.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(t,e,a.children)}else this.deactivateChildRoutes(t,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,o=Wn(t);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:a,route:t,contexts:s})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,o=Wn(t);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(t,e,n){let r=Wn(e);t.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new fo(o.value.snapshot))}),t.children.length&&this.forwardEvent(new ho(t.value.snapshot))}activateRoutes(t,e,n){let r=t.value,o=e?e.value:null;if(hs(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,a.children)}else this.activateChildRoutes(t,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),hs(s.route.value),this.activateChildRoutes(t,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(t,null,a.children)}else this.activateChildRoutes(t,null,n)}},_o=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Xn=class{component;route;constructor(t,e){this.component=t,this.route=e}};function ep(i,t,e){let n=i._root,r=t?t._root:null;return Bi(n,r,e,[n.value])}function tp(i){let t=i.routeConfig?i.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:i,guards:t}}function ri(i,t){let e=Symbol(),n=t.get(i,e);return n===e?typeof i=="function"&&!$l(i)?i:t.get(i):n}function Bi(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Wn(t);return i.children.forEach(a=>{np(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>ji(s,e.getContext(a),r)),r}function np(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=t?t.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=ip(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new _o(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Bi(i,t,s?s.children:null,n,r):Bi(i,t,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Xn(s.outlet.component,a))}else a&&ji(t,s,r),r.canActivateChecks.push(new _o(n)),o.component?Bi(i,null,s?s.children:null,n,r):Bi(i,null,e,n,r);return r}function ip(i,t,e){if(typeof e=="function")return $e(t._environmentInjector,()=>e(i,t));switch(e){case"pathParamsChange":return!gn(i.url,t.url);case"pathParamsOrQueryParamsChange":return!gn(i.url,t.url)||!Ct(i.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Cs(i,t)||!Ct(i.queryParams,t.queryParams);default:return!Cs(i,t)}}function ji(i,t,e){let n=Wn(i),r=i.value;Object.entries(n).forEach(([o,a])=>{r.component?t?ji(a,t.children.getContext(o),e):ji(a,null,e):ji(a,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Xn(t.outlet.component,r)):e.canDeactivateChecks.push(new Xn(null,r)):e.canDeactivateChecks.push(new Xn(null,r))}function Ki(i){return typeof i=="function"}function rp(i){return typeof i=="boolean"}function op(i){return i&&Ki(i.canLoad)}function ap(i){return i&&Ki(i.canActivate)}function sp(i){return i&&Ki(i.canActivateChild)}function lp(i){return i&&Ki(i.canDeactivate)}function cp(i){return i&&Ki(i.canMatch)}function Gd(i){return i instanceof Ul||i?.name==="EmptyError"}var Kr=Symbol("INITIAL_VALUE");function ni(){return ne(i=>Cr(i.map(t=>t.pipe(it(1),mt(Kr)))).pipe(k(t=>{for(let e of t)if(e!==!0){if(e===Kr)return Kr;if(e===!1||dp(e))return e}return!0}),he(t=>t!==Kr),it(1)))}function dp(i){return Qt(i)||i instanceof ti}function Wd(i){return i.aborted?y(void 0).pipe(it(1)):new qe(t=>{let e=()=>{t.next(),t.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function qd(i){return Ye(Wd(i))}function up(i){return xt(t=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=t;return o.length===0&&r.length===0?y(H(p({},t),{guardsResult:!0})):hp(o,e,n).pipe(xt(a=>a&&rp(a)?mp(e,r,i):y(a)),k(a=>H(p({},t),{guardsResult:a})))})}function hp(i,t,e){return Ne(i).pipe(xt(n=>_p(n.component,n.route,e,t)),Vt(n=>n!==!0,!0))}function mp(i,t,e){return Ne(t).pipe(Tn(n=>wr(pp(n.route.parent,e),fp(n.route,e),vp(i,n.path),gp(i,n.route))),Vt(n=>n!==!0,!0))}function fp(i,t){return i!==null&&t&&t(new mo(i)),y(!0)}function pp(i,t){return i!==null&&t&&t(new uo(i)),y(!0)}function gp(i,t){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let n=e.map(r=>Rn(()=>{let o=t._environmentInjector,a=ri(r,o),s=ap(a)?a.canActivate(t,i):$e(o,()=>a(t,i));return bn(s).pipe(Vt())}));return y(n).pipe(ni())}function vp(i,t){let e=t[t.length-1],r=t.slice(0,t.length-1).reverse().map(o=>tp(o)).filter(o=>o!==null).map(o=>Rn(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=ri(s,l),u=sp(d)?d.canActivateChild(e,i):$e(l,()=>d(e,i));return bn(u).pipe(Vt())});return y(a).pipe(ni())}));return y(r).pipe(ni())}function _p(i,t,e,n){let r=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let s=t._environmentInjector,l=ri(a,s),d=lp(l)?l.canDeactivate(i,t,e,n):$e(s,()=>l(i,t,e,n));return bn(d).pipe(Vt())});return y(o).pipe(ni())}function bp(i,t,e,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(s=>{let l=ri(s,i),d=op(l)?l.canLoad(t,e):$e(i,()=>l(t,e)),u=bn(d);return r?u.pipe(qd(r)):u});return y(a).pipe(ni(),Yd(n))}function Yd(i){return jl(ge(t=>{if(typeof t!="boolean")throw vo(i,t)}),k(t=>t===!0))}function yp(i,t,e,n,r,o){let a=t.canMatch;if(!a||a.length===0)return y(!0);let s=a.map(l=>{let d=ri(l,i),u=cp(d)?d.canMatch(t,e,r):$e(i,()=>d(t,e,r));return bn(u).pipe(qd(o))});return y(s).pipe(ni(),Yd(n))}var kt=class i extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,i.prototype)}},Yi=class i extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,i.prototype)}};function Cp(i){throw new A(4e3,!1)}function wp(i){throw Hd(!1,Pe.GuardRejected)}var xs=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}async lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[O])throw Cp(`${t.redirectTo}`);r=r.children[O]}}async applyRedirectCommands(t,e,n,r,o){let a=await Dp(e,r,o);if(a instanceof Ve)throw new Yi(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),t,n);if(a[0]==="/")throw new Yi(s);return s}applyRedirectCreateUrlTree(t,e,n,r){let o=this.createSegmentGroup(t,e.root,n,r);return new Ve(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(t,e,n,r){let o=this.createSegments(t,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(t,l,n,r)}),new K(o,a)}createSegments(t,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(t,o,r):this.findOrReturn(o,n))}findPosParam(t,e,n){let r=n[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(t,e){let n=0;for(let r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}};function Dp(i,t,e){if(typeof i=="string")return Promise.resolve(i);let n=i;return to(bn($e(e,()=>n(t))))}function xp(i,t){return i.providers&&!i._injector&&(i._injector=Va(i.providers,t,`Route: ${i.path}`)),i._injector??t}function gt(i){return i.outlet||O}function Ep(i,t){let e=i.filter(n=>gt(n)===t);return e.push(...i.filter(n=>gt(n)!==t)),e}var Es={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Xd(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function Sp(i,t,e,n,r,o,a){let s=Zd(i,t,e);if(!s.matched)return y(s);let l=Xd(o(s));return n=xp(t,n),yp(n,t,e,r,l,a).pipe(k(d=>d===!0?s:p({},Es)))}function Zd(i,t,e){if(t.path==="")return t.pathMatch==="full"&&(i.hasChildren()||e.length>0)?p({},Es):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||Cd)(e,i,t);if(!r)return p({},Es);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?p(p({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function bd(i,t,e,n,r){return e.length>0&&Rp(i,e,n,r)?{segmentGroup:new K(t,Ap(n,new K(e,i.children))),slicedSegments:[]}:e.length===0&&Ip(i,e,n)?{segmentGroup:new K(i.segments,Mp(i,e,n,i.children)),slicedSegments:e}:{segmentGroup:new K(i.segments,i.children),slicedSegments:e}}function Mp(i,t,e,n){let r={};for(let o of e)if(Co(i,t,o)&&!n[gt(o)]){let a=new K([],{});r[gt(o)]=a}return p(p({},n),r)}function Ap(i,t){let e={};e[O]=t;for(let n of i)if(n.path===""&&gt(n)!==O){let r=new K([],{});e[gt(n)]=r}return e}function Rp(i,t,e,n){return e.some(r=>!Co(i,t,r)||!(gt(r)!==O)?!1:!(n!==void 0&&gt(r)===n))}function Ip(i,t,e){return e.some(n=>Co(i,t,n))}function Co(i,t,e){return(i.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Op(i,t,e){return t.length===0&&!i.children[e]}var Ss=class{};async function Tp(i,t,e,n,r,o,a="emptyOnly",s){return new Ms(i,t,e,n,r,a,o,s).recognize()}var Pp=31,Ms=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,n,r,o,a,s,l){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new xs(this.urlSerializer,this.urlTree)}noMatchError(t){return new A(4002,`'${t.segmentGroup}'`)}async recognize(){let t=bd(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(t),r=new Je(n,e),o=new Wi("",r),a=Td(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(t){let e=new ei([],Object.freeze({}),Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),O,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,t,O,e),rootSnapshot:e}}catch(n){if(n instanceof Yi)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof kt?this.noMatchError(n):n}}async processSegmentGroup(t,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(t,e,n,o);let a=await this.processSegment(t,e,n,n.segments,r,!0,o);return a instanceof Je?[a]:[]}async processChildren(t,e,n,r){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=n.children[l],u=Ep(e,l),_=await this.processSegmentGroup(t,u,d,l,r);a.push(..._)}let s=Kd(a);return Fp(s),s}async processSegment(t,e,n,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??t,e,l,n,r,o,a,s)}catch(d){if(d instanceof kt||Gd(d))continue;throw d}if(Op(n,r,o))return new Ss;throw new kt(n)}async processSegmentAgainstRoute(t,e,n,r,o,a,s,l){if(gt(n)!==a&&(a===O||!Co(r,o,n)))throw new kt(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,r,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(t,r,e,n,o,a,l);throw new kt(r)}async expandSegmentAgainstRouteUsingRedirect(t,e,n,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:_,remainingSegments:E}=Zd(e,r,o);if(!l)throw new kt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Pp&&(this.allowRedirects=!1));let J=this.createSnapshot(t,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,_,Xd(J),t),te=await this.applyRedirects.lineralizeSegments(r,W);return this.processSegment(t,n,e,te.concat(E),a,!1,s)}createSnapshot(t,e,n,r,o){let a=new ei(n,r,Object.freeze(p({},this.urlTree.queryParams)),this.urlTree.fragment,Np(e),gt(e),e.component??e._loadedComponent??null,e,Lp(e),t),s=Is(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(t,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ue=>this.createSnapshot(t,n,Ue.consumedSegments,Ue.parameters,a),l=await to(Sp(e,n,r,t,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new kt(e);t=n._injector??t;let{routes:d}=await this.getChildConfig(t,n,r),u=n._loadedInjector??t,{parameters:_,consumedSegments:E,remainingSegments:J}=l,W=this.createSnapshot(t,n,E,_,a),{segmentGroup:te,slicedSegments:T}=bd(e,E,J,d,o);if(T.length===0&&te.hasChildren()){let Ue=await this.processChildren(u,d,te,W);return new Je(W,Ue)}if(d.length===0&&T.length===0)return new Je(W,[]);let Z=gt(n)===o,ue=await this.processSegment(u,d,te,T,Z?O:o,!0,W);return new Je(W,ue instanceof Je?[ue]:[])}async getChildConfig(t,e,n){if(e.children)return{routes:e.children,injector:t};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(t).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await to(bp(t,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(t,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw wp(e)}return{routes:[],injector:t}}};function Fp(i){i.sort((t,e)=>t.value.outlet===O?-1:e.value.outlet===O?1:t.value.outlet.localeCompare(e.value.outlet))}function kp(i){let t=i.value.routeConfig;return t&&t.path===""}function Kd(i){let t=[],e=new Set;for(let n of i){if(!kp(n)){t.push(n);continue}let r=t.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):t.push(n)}for(let n of e){let r=Kd(n.children);t.push(new Je(n.value,r))}return t.filter(n=>!e.has(n))}function Np(i){return i.data||{}}function Lp(i){return i.resolve||{}}function Bp(i,t,e,n,r,o,a){return xt(async s=>{let{state:l,tree:d}=await Tp(i,t,e,n,s.extractedUrl,r,o,a);return H(p({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function Vp(i){return xt(t=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return y(t);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of Qd(s))o.add(l);let a=0;return Ne(o).pipe(Tn(s=>r.has(s)?jp(s,e,i):(s.data=Is(s,s.parent,i).resolve,y(void 0))),ge(()=>a++),Pa(1),xt(s=>a===o.size?y(t):He))})}function Qd(i){let t=i.children.map(e=>Qd(e)).flat();return[i,...t]}function jp(i,t,e){let n=i.routeConfig,r=i._resolve;return n?.title!==void 0&&!jd(n)&&(r[Xi]=n.title),Rn(()=>(i.data=Is(i,i.parent,e).resolve,Up(r,i,t).pipe(k(o=>(i._resolvedData=o,i.data=p(p({},i.data),o),null)))))}function Up(i,t,e){let n=fs(i);if(n.length===0)return y({});let r={};return Ne(n).pipe(xt(o=>zp(i[o],t,e).pipe(Vt(),ge(a=>{if(a instanceof ti)throw vo(new Kt,a);r[o]=a}))),Pa(1),k(()=>r),On(o=>Gd(o)?He:br(o)))}function zp(i,t,e){let n=t._environmentInjector,r=ri(i,n),o=r.resolve?r.resolve(t,e):$e(n,()=>r(t,e));return bn(o)}function yd(i){return ne(t=>{let e=i(t);return e?Ne(e).pipe(k(()=>t)):y(t)})}var Fs=(()=>{class i{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===O);return n}getResolvedTitleForRoute(e){return e.data[Xi]}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>c(Jd),providedIn:"root"})}return i})(),Jd=(()=>{class i extends Fs{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||i)(S(Xt))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),oi=new b("",{factory:()=>({})}),Qi=new b(""),eu=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(vc);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await Dd($e(e,()=>n.loadComponent())),a=await iu(nu(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await tu(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();async function tu(i,t,e,n){let r=await Dd($e(e,()=>i.loadChildren())),o=await iu(nu(r)),a;o instanceof sc||Array.isArray(o)?a=o:a=await t.compileModuleAsync(o),n&&n(i);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(Qi,[],{optional:!0,self:!0}).flat()),{routes:l.map(Ps),injector:s,factory:u}}function Hp(i){return i&&typeof i=="object"&&"default"in i}function nu(i){return Hp(i)?i.default:i}async function iu(i){return i}var wo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>c($p),providedIn:"root"})}return i})(),$p=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ru=new b("");var Gp=()=>{},ou=new b(""),ks=(()=>{class i{currentNavigation=M(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=M(null);events=new R;transitionAbortWithErrorSubject=new R;configLoader=c(eu);environmentInjector=c(ve);destroyRef=c(ln);urlSerializer=c(yn);rootContexts=c(ii);location=c(It);inputBindingEnabled=c(yo,{optional:!0})!==null;titleStrategy=c(Fs);options=c(oi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(wo);createViewTransition=c(ru,{optional:!0});navigationErrorHandler=c(ou,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new lo(r)),n=r=>this.events.next(new co(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;X(()=>{this.transitions?.next(H(p({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ze(null),this.transitions.pipe(he(n=>n!==null),ne(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return y(n).pipe(ne(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Pe.SupersededByNewNavigation),He;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?H(p({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new wt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Zn.IgnoredSameUrlNavigation)),s.resolve(!1),He;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(ne(_=>(this.events.next(new Jt(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?He:Promise.resolve(_))),Bp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ge(_=>{n.targetSnapshot=_.targetSnapshot,n.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=_.urlAfterRedirects,E)),this.events.next(new $i)}),ne(_=>Ne(n.routesRecognizeHandler.deferredHandle??y(void 0)).pipe(k(()=>_))),ge(()=>{let _=new Hi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:E,source:J,restoredState:W,extras:te}=s,T=new Jt(_,this.urlSerializer.serialize(E),J,W);this.events.next(T);let Z=Bd(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=H(p({},s),{targetSnapshot:Z,urlAfterRedirects:E,extras:H(p({},te),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ue=>(ue.finalUrl=E,ue)),y(n)}else return this.events.next(new wt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Zn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),He}),k(s=>{let l=new ro(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=H(p({},s),{guards:ep(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),up(s=>this.events.next(s)),ne(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw vo(this.urlSerializer,s.guardsResult);let l=new oo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return He;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Pe.GuardRejected),He;if(s.guards.canActivateChecks.length===0)return y(s);let d=new ao(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return He;let u=!1;return y(s).pipe(Vp(this.paramsInheritanceStrategy),ge({next:()=>{u=!0;let _=new so(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{u||this.cancelNavigationTransition(s,"",Pe.NoDataFromResolver)}}))}),yd(s=>{let l=u=>{let _=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let E=u._environmentInjector;_.push(this.configLoader.loadComponent(E,u.routeConfig).then(J=>{u.component=J}))}for(let E of u.children)_.push(...l(E));return _},d=l(s.targetSnapshot.root);return d.length===0?y(s):Ne(Promise.all(d).then(()=>s))}),yd(()=>this.afterPreactivation()),ne(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?Ne(d).pipe(k(()=>n)):y(n)}),it(1),ne(s=>{let l=Zf(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=H(p({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Qn);let d=n.beforeActivateHandler.deferredHandle;return d?Ne(d.then(()=>s)):y(s)}),ge(s=>{new Ds(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=Gp,l)),this.lastSuccessfulNavigation.set(X(this.currentNavigation)),this.events.next(new lt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ye(Wd(o.signal).pipe(he(()=>!r&&!n.targetRouterState),ge(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",Pe.Aborted)}))),ge({complete:()=>{r=!0}}),Ye(this.transitionAbortWithErrorSubject.pipe(ge(s=>{throw s}))),Et(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",Pe.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),On(s=>{if(r=!0,this.destroyed)return n.resolve(!1),He;if($d(s))this.events.next(new st(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Jf(s)?this.events.next(new Jn(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new _n(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=$e(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ti){let{message:u,cancellationCode:_}=vo(this.urlSerializer,d);this.events.next(new st(n.id,this.urlSerializer.serialize(n.extractedUrl),u,_)),this.events.next(new Jn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return He}))}))}cancelNavigationTransition(e,n,r){let o=new st(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=X(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Wp(i){return i!==Yn}var au=new b("");var su=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>c(qp),providedIn:"root"})}return i})(),bo=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}shouldDestroyInjector(t){return!0}},qp=(()=>{class i extends bo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Do=(()=>{class i{urlSerializer=c(yn);options=c(oi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(It);urlHandlingStrategy=c(wo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ve;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof Ve?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Bd(null,c(ve));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:()=>c(Yp),providedIn:"root"})}return i})(),Yp=(()=>{class i extends Do{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof Jt?this.updateStateMemento():e instanceof wt?this.commitTransition(n):e instanceof Hi?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Qn?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof st&&!Ld(e)?this.restoreHistory(n):e instanceof _n?this.restoreHistory(n,!0):e instanceof lt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:r,id:o}=n,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,d=p(p({},s),this.generateNgRouterState(o,l,n));this.location.replaceState(e,"",d)}else{let l=p(p({},s),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",l)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,r){return this.canceledNavigationResolution==="computed"?p({navigationId:e,\u0275routerPageId:n},this.routerUrlState(r)):p({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ns(i,t){i.events.pipe(he(e=>e instanceof lt||e instanceof st||e instanceof _n||e instanceof wt),k(e=>e instanceof lt||e instanceof wt?0:(e instanceof st?e.code===Pe.Redirect||e.code===Pe.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),it(1)).subscribe(()=>{t()})}var Nt=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(ja);stateManager=c(Do);options=c(oi,{optional:!0})||{};pendingTasks=c(Wl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(ks);urlSerializer=c(yn);location=c(It);urlHandlingStrategy=c(wo);injector=c(ve);_events=new R;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(su);injectorCleanup=c(au,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Qi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(yo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ee;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=X(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof st&&n.code!==Pe.Redirect&&n.code!==Pe.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof lt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Jn){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=p({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Wp(r.source)},a);this.scheduleNavigation(s,Yn,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Yf(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Yn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=H(p({},o),{browserUrl:e})),r){let d=p({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(s);this.scheduleNavigation(l,n,a,o).catch(d=>{this.disposed||this.injector.get(Ci)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return X(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ps),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=p(p({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let _;try{let E=r?r.snapshot:this.routerState.snapshot.root;_=Pd(E)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return Fd(_,e,u,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Qt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Yn,null,n)}navigate(e,n={skipLocationChange:!1}){return Xp(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(an(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=p({},As):n===!1?r=p({},Ui):r=p(p({},Ui),n),Qt(e))return ps(this.currentUrlTree,e,r);let o=this.parseUrl(e);return ps(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((_,E)=>{s=_,l=E});let u=this.pendingTasks.add();return Ns(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Xp(i){for(let t=0;t<i.length;t++)if(i[t]==null)throw new A(4008,!1)}var Zp=(()=>{class i{router=c(Nt);stateManager=c(Do);fragment=M("");queryParams=M({});path=M("");serializer=c(yn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof lt&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Ve(n)))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ct=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Tr("href"),{optional:!0});reactiveHref=bc(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return X(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return X(this._target)}_target=M(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return X(this._queryParams)}_queryParams=M(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return X(this._fragment)}_fragment=M(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return X(this._queryParamsHandling)}_queryParamsHandling=M(void 0);set state(e){this._state.set(e)}get state(){return X(this._state)}_state=M(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return X(this._info)}_info=M(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return X(this._relativeTo)}_relativeTo=M(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return X(this._preserveFragment)}_preserveFragment=M(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return X(this._skipLocationChange)}_skipLocationChange=M(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return X(this._replaceUrl)}_replaceUrl=M(!1);isAnchorElement;onChanges=new R;applicationErrorHandler=c(Ci);options=c(oi,{optional:!0});reactiveRouterState=c(Zp);constructor(e,n,r,o,a,s){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=M(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Qt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||n||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,e,n):r.removeAttribute(o,e)}_urlTree=de(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:Qt(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return X(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||i)(q(Nt),q(vt),Na("tabindex"),q(me),q(B),q(mn))};static \u0275dir=F({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,r){n&1&&I("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&oe("href",r.reactiveHref(),oc)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ee],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ee],replaceUrl:[2,"replaceUrl","replaceUrl",ee],routerLink:"routerLink"},features:[Me]})}return i})(),Ls=(()=>{class i{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new N;link=c(ct,{optional:!0});constructor(e,n,r,o){this.router=e,this.element=n,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof lt&&this.update()})}ngAfterContentInit(){y(this.links.changes,y(null)).pipe(Ia()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=Ne(e).pipe(Ia()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Kp(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?p({},As):p({},Ui);return r=>{let o=r.urlTree;return o?X(Rs(o,e,n)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||i)(q(Nt),q(B),q(me),q(Be))};static \u0275dir=F({type:i,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,o){if(n&1&&Vn(o,ct,5),n&2){let a;ae(a=se())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Me]})}return i})();function Kp(i){let t=i;return!!(t.paths||t.matrixParams||t.queryParams||t.fragment)}var lu=new b(""),Qp=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Yn;restoredId=0;store={};urlSerializer=c(yn);zone=c(L);viewportScroller=c(Wc);transitions=c(ks);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Jt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof lt?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof wt&&e.code===Zn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Kn)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){let r=X(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Kn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Ir()};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})();function Bs(i,...t){return sn([{provide:Qi,multi:!0,useValue:i},[],{provide:vt,useFactory:Jp},{provide:dc,multi:!0,useFactory:tg},t.map(e=>e.\u0275providers)])}function Jp(){return c(Nt).routerState.root}function eg(i,t){return{\u0275kind:i,\u0275providers:t}}function Vs(i={}){return eg(4,[{provide:lu,useFactory:()=>new Qp(i)}])}function tg(){let i=c(ce);return t=>{let e=i.get(At);if(t!==e.components[0])return;let n=i.get(Nt),r=i.get(ng);i.get(ig)===1&&n.initialNavigation(),i.get(rg,null,{optional:!0})?.setUpPreloading(),i.get(lu,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ng=new b("",{factory:()=>new R}),ig=new b("",{factory:()=>1});var rg=new b("");var og="@",ag=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(ce);loadingSchedulerFn=c(sg,{optional:!0});_engine;constructor(e,n,r,o,a){this.doc=e,this.delegate=n,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-5Y2VTS5O.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new A(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new js(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,n);o.use(s),this.scheduler??=this.injector.get(Yl,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){Ir()};static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})(),js=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,r){this.delegate.insertBefore(t,e,n,r)}removeChild(t,e,n,r){this.delegate.removeChild(t,e,n,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,n,r)),this.delegate.listen(t,e,n,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(og)}},sg=new b("");function cu(i="animations"){return Rr("NgAsyncAnimations"),sn([{provide:we,useFactory:()=>new ag(c(P),c(Fi),c(L),i)},{provide:Fn,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ai=new b("ARTICLES_DATA_SERVICE");var dt=class i{articles=M([]);activePage=M(1);total=M(0);setArticles(t){this.articles.set(t)}setActivePage(t){this.activePage.set(t)}setTotal(t){this.total.set(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var xo=class i{article;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-home-article-card"]],inputs:{article:"article"},decls:11,vars:11,consts:[[3,"src","alt"]],template:function(e,n){e&1&&(D(0,"article"),fe(1,"img",0),D(2,"div")(3,"h3"),h(4),x(),D(5,"small")(6,"time"),h(7),$t(8,"date"),x()(),D(9,"p"),h(10),x()()()),e&2&&(f(),Qe("src",n.article.image,yt)("alt",n.article.title),f(3),$(n.article.title),f(2),oe("datetime",n.article.date),f(),$(Gt(8,6,n.article.date,"d MMMM y","","ru")),f(3),$(n.article.description))},dependencies:[Pt],styles:["[_nghost-%COMP%]{display:block;margin-bottom:22px}article[_ngcontent-%COMP%]{display:flex;align-items:stretch;border-radius:16px;overflow:hidden}[_nghost-%COMP%]:nth-of-type(odd)   article[_ngcontent-%COMP%]{background-color:var(--bg-peach)}[_nghost-%COMP%]:nth-of-type(even)   article[_ngcontent-%COMP%]{background-color:var(--light-green)}article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;min-height:0;max-height:240px;height:240px;object-fit:cover;flex-shrink:0}article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:26px;display:flex;flex-direction:column;justify-content:center}article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700;line-height:1.35;margin-bottom:6px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px;line-height:1.5;margin:4px 0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px}@media(max-width:800px){article[_ngcontent-%COMP%]{flex-direction:column}article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:260px;height:260px}}"]})};var lg=(i,t)=>t.title;function cg(i,t){if(i&1&&(D(0,"article")(1,"small"),h(2,"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"),x(),D(3,"strong"),h(4),x(),D(5,"p"),h(6),x()()),i&2){let e=t.$implicit;f(4),$(e.title),f(2),$(e.description)}}var Eo=class i{items=Oe.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-main-education"]],inputs:{items:[1,"items"]},decls:6,vars:0,consts:[[1,"education-section","container"],[1,"career-list"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"h2"),h(2,"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"),x(),D(3,"div",1),Re(4,cg,7,2,"article",null,lg),x()()),e&2&&(f(4),Ie(n.items()))},styles:['.education-section[_ngcontent-%COMP%]{padding:60px 0;border-top:1px solid var(--light-gray)}.education-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px;color:var(--dark)}.career-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding-bottom:25px;position:relative}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:1px;background:var(--light-gray);margin-top:20px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child:after{display:none}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px;display:block;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:18px;font-weight:700;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px}']})};var So=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-main-hero"]],decls:9,vars:0,consts:[[1,"about-section","container"],["routerLink","/blog",1,"more-link"],["src","image/owl.jpg","alt","\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F \u0441\u043E\u0432\u0430"]],template:function(e,n){e&1&&(m(0,"section",0)(1,"div")(2,"h1"),h(3,"\u041E\u0431\u043E \u043C\u043D\u0435"),g(),m(4,"p"),h(5,"\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C! \u042F \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u041D\u0415 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 5-\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432. \u041D\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0431\u043B\u043E\u0433\u0435 \u044F \u0434\u0435\u043B\u044E\u0441\u044C \u0441\u0432\u043E\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u043D\u0438\u044F\u043C\u0438. \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0451\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u0443\u0437\u043D\u0430\u0435\u0442\u0435 \u043F\u0440\u043E \u043C\u0435\u043D\u044F \u0438 \u043F\u0440\u043E \u043C\u043E\u0439 \u043F\u0443\u0442\u044C!"),g(),m(6,"a",1),h(7,"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431\u043E \u043C\u043D\u0435 \u203A"),g()(),Y(8,"img",2),g())},dependencies:[ct],styles:[".about-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:40px;padding:80px 0 60px}.about-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:15px;color:var(--dark)}.about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:480px;color:var(--gray);font-size:15px}.more-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-top:20px;color:var(--accent-green);font-size:15px;font-weight:700;transition:opacity .3s ease}.more-link[_ngcontent-%COMP%]:hover{opacity:.7}.about-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:340px;height:400px;object-fit:cover;border-radius:200px;flex-shrink:0}@media(max-width:800px){.about-section[_ngcontent-%COMP%]{flex-direction:column;padding:40px 0 30px}.about-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:300px}}"]})};var dg=(i,t)=>t.label;function ug(i,t){if(i&1&&(D(0,"div",2),fe(1,"img",3),D(2,"div",4)(3,"p"),h(4),x()()()),i&2){let e=t.$implicit;f(),Qe("src",e.image,yt)("alt",e.alt),f(3),$(e.label)}}var Mo=class i{intro=Oe("");items=Oe.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-main-hobbies"]],inputs:{intro:[1,"intro"],items:[1,"items"]},decls:8,vars:1,consts:[[1,"hobby-section","container"],[1,"hobby-grid"],[1,"hobby-card"],[3,"src","alt"],[1,"overlay"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"h2"),h(2,"Hobby projects"),x(),D(3,"p"),h(4),x(),D(5,"div",1),Re(6,ug,5,3,"div",2,dg),x()()),e&2&&(f(4),$(n.intro()),f(2),Ie(n.items()))},styles:[".hobby-section[_ngcontent-%COMP%]{padding:60px 0}.hobby-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:10px}.hobby-section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:var(--gray);max-width:500px;margin-bottom:30px;font-size:15px}.hobby-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.hobby-card[_ngcontent-%COMP%]{position:relative;height:300px;border-radius:16px;overflow:hidden;cursor:pointer}.hobby-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hobby-card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#2d3142b3;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .4s ease}.hobby-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.hobby-card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--white);font-size:20px;font-weight:700;text-align:center;padding:20px}@media(max-width:800px){.hobby-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var hg=(i,t)=>t.text;function mg(i,t){if(i&1&&(D(0,"div",2),h(1),x()),i&2){let e=t.$implicit;f(),$(e.text)}}var Ao=class i{items=Oe.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-main-skills"]],inputs:{items:[1,"items"]},decls:6,vars:0,consts:[[1,"skills-section","container"],[1,"skills-grid"],[1,"skill-item"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"h2"),h(2,"\u041D\u0430\u0432\u044B\u043A\u0438"),x(),D(3,"div",1),Re(4,mg,2,1,"div",2,hg),x()()),e&2&&(f(4),Ie(n.items()))},styles:['.skills-section[_ngcontent-%COMP%]{padding:60px 0;border-top:1px solid var(--light-gray)}.skills-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:0 30px}.skill-item[_ngcontent-%COMP%]{padding:18px 0;font-size:16px;color:var(--dark);position:relative;place-self:end stretch}.skill-item[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:1px;background:var(--light-gray);position:absolute;bottom:0;left:0}@media(max-width:800px){.skills-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})};var fg=(i,t)=>t.title;function pg(i,t){if(i&1&&(D(0,"article")(1,"small"),h(2),x(),D(3,"strong"),h(4),x(),D(5,"p"),h(6),x()()),i&2){let e=t.$implicit;f(2),$(e.kind),f(2),$(e.title),f(2),$(e.description)}}var Ro=class i{items=Oe.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-main-work"]],inputs:{items:[1,"items"]},decls:9,vars:0,consts:[[1,"work-section","container"],[1,"section-header"],[1,"career-list"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"div",1)(2,"h2"),h(3,"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"),x(),D(4,"p"),h(5,"\u0423\u0447\u0435\u043D\u0438\u043A \u0428\u043A\u043E\u043B\u044B EltexSchool, \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u043F\u0430\u0440\u0435\u043D\u044C"),x()(),D(6,"div",2),Re(7,pg,7,3,"article",null,fg),x()()),e&2&&(f(7),Ie(n.items()))},styles:['.work-section[_ngcontent-%COMP%]{padding:60px 0;border-top:1px solid var(--light-gray);display:flex;gap:60px;align-items:flex-start}.section-header[_ngcontent-%COMP%]{flex-shrink:0;max-width:320px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:15px;color:var(--dark)}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:15px}.career-list[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:30px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding-bottom:25px;position:relative}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:1px;background:var(--light-gray);margin-top:20px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child:after{display:none}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px;display:block;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:18px;font-weight:700;margin-bottom:5px}.career-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px}@media(max-width:800px){.work-section[_ngcontent-%COMP%]{flex-direction:column;gap:30px}.section-header[_ngcontent-%COMP%]{max-width:100%}}']})};var gg=(i,t)=>t.id;function vg(i,t){if(i&1&&Y(0,"app-home-article-card",3),i&2){let e=t.$implicit;V("article",e)}}function _g(i,t){if(i&1&&(m(0,"section",0)(1,"h2"),h(2,"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0421\u0442\u0430\u0442\u044C\u0438"),g(),Re(3,vg,1,1,"app-home-article-card",3,gg),m(5,"div",4)(6,"a",5),h(7,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"),g()()()),i&2){let e=z();f(3),Ie(e.latestArticles())}}var Io=class i{store=c(dt);articlesData=c(ai);title=c(Xt);skillItems=[{text:"HTML5, CSS3, \u0431\u0430\u0437\u043E\u0432\u044B\u0439 JavaScript"},{text:"\u042F\u0437\u044B\u043A\u0438: C, Python, Go (\u0438\u0437\u0443\u0447\u0430\u044E)"},{text:"\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u043C\u0438\u043A\u0440\u043E\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u0430\u043C\u0438: ESP32, Arduino"}];workItems=[{kind:"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",title:"\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D",description:"\u041F\u043E\u043C\u043E\u0433\u0430\u043B \u043C\u0430\u043C\u0435 \u0432 \u0446\u0432\u0435\u0442\u043E\u0447\u043D\u043E\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u043A\u0430\u0436\u0434\u043E\u0435 8 \u043C\u0430\u0440\u0442\u0430"},{kind:"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",title:"\u041F\u0435\u0442\u0440\u043E\u043F\u0430\u0432\u043B\u043E\u0432\u0441\u043A-\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u0438\u0439",description:"\u0420\u044B\u0431\u0430\u0447\u0438\u043B, \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043D\u0430 \u0437\u0430\u0432\u043E\u0434\u0435"},{kind:"\u0421\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043A\u0430",title:"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",description:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438, \u043F\u043E\u043C\u043E\u0449\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"}];educationItems=[{title:"\u0421\u0438\u0431\u0413\u0423\u0422\u0418",description:"\u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0422\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439 \u0438 \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438, 09.03.01 \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430"}];hobbyItems=[{image:"image/nature.jpg",alt:"\u041F\u0440\u0438\u0440\u043E\u0434\u0430",label:"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F"},{image:"image/electronics.jpg",alt:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",label:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430"},{image:"image/drawing.jpg",alt:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",label:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435"}];hobbyIntro="\u041F\u043E\u043C\u0438\u043C\u043E \u0443\u0447\u0451\u0431\u044B \u0438 \u0440\u0430\u0431\u043E\u0442\u044B, \u044F \u0443\u0432\u043B\u0435\u043A\u0430\u044E\u0441\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0435\u0439, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u043E\u0439 \u0438 \u0438\u043D\u043E\u0433\u0434\u0430 \u0440\u0438\u0441\u0443\u044E.";latestArticles=de(()=>[...this.store.articles()].sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()).slice(0,2));ngOnInit(){this.title.setTitle("Name-folio"),this.articlesData.fetch().subscribe(t=>this.apply(t))}apply(t){this.store.setArticles(t.articles),this.store.setActivePage(t.activePage),this.store.setTotal(t.total)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-main"]],decls:7,vars:6,consts:[[1,"articles-section","container"],[3,"items"],[3,"intro","items"],[3,"article"],[1,"articles-all"],["routerLink","/blog"]],template:function(e,n){e&1&&(m(0,"main"),Y(1,"app-main-hero"),j(2,_g,8,0,"section",0),Y(3,"app-main-skills",1)(4,"app-main-work",1)(5,"app-main-education",1)(6,"app-main-hobbies",2),g()),e&2&&(f(2),U(n.latestArticles().length>0?2:-1),f(),V("items",n.skillItems),f(),V("items",n.workItems),f(),V("items",n.educationItems),f(),V("intro",n.hobbyIntro)("items",n.hobbyItems))},dependencies:[ct,xo,So,Ao,Ro,Eo,Mo],styles:[".articles-section[_ngcontent-%COMP%]{padding:50px 0}.articles-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px;color:var(--dark)}.articles-section[_ngcontent-%COMP%] > .articles-all[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:24px}.articles-section[_ngcontent-%COMP%] > .articles-all[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:inline-block;padding:12px 30px;border:1px solid var(--accent-green);border-radius:25px;color:var(--accent-green);font-size:15px;transition:all .3s ease}.articles-section[_ngcontent-%COMP%] > .articles-all[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background:var(--accent-green);color:var(--white)}"]})};var Fe={production:!0,useBackend:!1,apiUrl:""};var Cn=7,uu="blog-articles",hu="blog-active-page",Oo=class i{constructor(t){this.store=t}pageSize=Cn;fetch(){let t=this.store.articles();if(t.length>0)return y(this.buildResult(t,this.store.activePage()));let e=this.readArticlesFromStorage(),n=this.readPageFromStorage(),r=Math.max(1,Math.ceil(e.length/this.pageSize)),o=e.length===0?1:Math.min(Math.max(1,n),r);return o!==n&&this.writePageToStorage(o),y(this.buildResult(e,o))}add(t){let e=[this.toStored(t),...this.getAllFromStoreOrLs()];this.writeArticlesToStorage(e);let n=1;return this.writePageToStorage(n),y(this.buildResult(e,n))}update(t){let e=this.toStored(t),n=this.getAllFromStoreOrLs().map(a=>a.id===e.id?e:a);this.writeArticlesToStorage(n);let r=this.store.activePage(),o=Math.max(1,Math.ceil(n.length/this.pageSize));return r=n.length===0?1:Math.min(Math.max(1,r),o),this.writePageToStorage(r),y(this.buildResult(n,r))}remove(t){let e=this.getAllFromStoreOrLs().filter(o=>o.id!==t);this.writeArticlesToStorage(e);let n=this.store.activePage(),r=Math.max(1,Math.ceil(e.length/this.pageSize));return n=e.length===0?1:Math.min(n,r),this.writePageToStorage(n),y(this.buildResult(e,n))}goToPage(t){let e=this.getAllFromStoreOrLs(),n=Math.max(1,Math.ceil(e.length/this.pageSize)),r=e.length===0?1:Math.min(Math.max(1,t),n);return this.writePageToStorage(r),y(this.buildResult(e,r))}getAllFromStoreOrLs(){let t=this.store.articles();return t.length>0?t.map(e=>p({},e)):this.readArticlesFromStorage()}readArticlesFromStorage(){if(typeof localStorage>"u")return[];try{let t=localStorage.getItem(uu);if(!t)return[];let e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}readPageFromStorage(){if(typeof localStorage>"u")return 1;let t=localStorage.getItem(hu);if(!t)return 1;let e=parseInt(t,10);return Number.isFinite(e)&&e>=1?e:1}writeArticlesToStorage(t){typeof localStorage>"u"||localStorage.setItem(uu,JSON.stringify(t))}writePageToStorage(t){typeof localStorage>"u"||localStorage.setItem(hu,String(t))}buildResult(t,e){let n=(e-1)*this.pageSize,r=t.slice(n,n+this.pageSize);return{articles:t,pageItems:r,total:t.length,activePage:e}}toStored(t){let r=t,{imageFile:e}=r;return Ra(r,["imageFile"])}static \u0275fac=function(e){return new(e||i)(S(dt))};static \u0275prov=v({token:i,factory:i.\u0275fac})};function Ji(i){return i.buttons===0||i.detail===0}function er(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Us;function mu(){if(Us==null){let i=typeof document<"u"?document.head:null;Us=!!(i&&(i.createShadowRoot||i.attachShadow))}return Us}function zs(i){if(mu()){let t=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function Hs(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let t=i.shadowRoot.activeElement;if(t===i)break;i=t}return i}function ke(i){return i.composedPath?i.composedPath()[0]:i.target}var $s;try{$s=typeof Intl<"u"&&Intl.v8BreakIterator}catch{$s=!1}var le=(()=>{class i{_platformId=c(Pn);isBrowser=this._platformId?Gc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||$s)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var tr;function fu(){if(tr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>tr=!0}))}finally{tr=tr||!1}return tr}function si(i){return fu()?i:!!i.capture}function tt(i){return i instanceof B?i.nativeElement:i}var pu=new b("cdk-input-modality-detector-options"),gu={ignoreKeys:[18,17,224,91,16]},vu=650,Gs={passive:!0,capture:!0},_u=(()=>{class i{_platform=c(le);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ze(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ke(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<vu||(this._modality.next(Ji(e)?"keyboard":"mouse"),this._mostRecentTarget=ke(e))};_onTouchstart=e=>{if(er(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ke(e)};constructor(){let e=c(L),n=c(P),r=c(pu,{optional:!0});if(this._options=p(p({},gu),r),this.modalityDetected=this._modality.pipe(Sr(1)),this.modalityChanged=this.modalityDetected.pipe(Ta()),this._platform.isBrowser){let o=c(we).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Gs),o.listen(n,"mousedown",this._onMousedown,Gs),o.listen(n,"touchstart",this._onTouchstart,Gs)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),nr=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(nr||{}),bu=new b("cdk-focus-monitor-default-options"),To=si({passive:!0,capture:!0}),Ws=(()=>{class i{_ngZone=c(L);_platform=c(le);_inputModalityDetector=c(_u);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(P);_stopInputModalityDetector=new R;constructor(){let e=c(bu,{optional:!0});this._detectionMode=e?.detectionMode||nr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=ke(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=tt(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=zs(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new R,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=tt(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=tt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===nr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===nr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?vu:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=ke(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,To),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,To)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ye(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,To),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,To),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Po=new WeakMap,ut=(()=>{class i{_appRef;_injector=c(ce);_environmentInjector=c(ve);load(e){let n=this._appRef=this._appRef||this._injector.get(At),r=Po.get(n);r||(r={loaders:new Set,refs:[]},Po.set(n,r),n.onDestroy(()=>{Po.get(n)?.refs.forEach(o=>o.destroy()),Po.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Pr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var yu=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Fo;function bg(){if(Fo===void 0&&(Fo=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Fo=i.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return Fo}function li(i){return bg()?.createHTML(i)||i}function Lt(i){return Array.isArray(i)?i:[i]}var Cu=new Set,wn,ko=(()=>{class i{_platform=c(le);_nonce=c(kn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Cg}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&yg(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function yg(i,t){if(!Cu.has(i))try{wn||(wn=document.createElement("style"),t&&wn.setAttribute("nonce",t),wn.setAttribute("type","text/css"),document.head.appendChild(wn)),wn.sheet&&(wn.sheet.insertRule(`@media ${i} {body{ }}`,0),Cu.add(i))}catch(e){console.error(e)}}function Cg(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var qs=(()=>{class i{_mediaMatcher=c(ko);_zone=c(L);_queries=new Map;_destroySubject=new R;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return wu(Lt(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=wu(Lt(e)).map(a=>this._registerQuery(a).observable),o=Cr(r);return o=wr(o.pipe(it(1)),o.pipe(Sr(1),xr(0))),o.pipe(k(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new qe(a=>{let s=l=>this._zone.run(()=>a.next(l));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(mt(n),k(({matches:a})=>({query:e,matches:a})),Ye(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function wu(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var wg=200,No=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(t,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:wg;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(ge(e=>this._pressedLetters.push(e)),xr(t),he(()=>this._pressedLetters.length>0),k(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function en(i,...t){return t.length?t.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Lo=class{_items;_activeItemIndex=M(-1);_activeItem=M(null);_wrap=!1;_typeaheadSubscription=Ee.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof La?this._itemChangesSubscription=t.changes.subscribe(n=>this._itemsChanged(n.toArray())):Ut(t)&&(this._effectRef=ft(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new No(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!t[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||en(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),n=typeof t=="number"?t:e.indexOf(t),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+t*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let n=this._getItemsArray();if(n[t]){for(;this._skipPredicateFn(n[t]);)if(t+=e,!n[t])return;this.setActiveItem(t)}}_getItemsArray(){return Ut(this._items)?this._items():this._items instanceof La?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let n=t.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var ir=class extends Lo{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var Xs={},je=class i{_appId=c(wi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){return this._appId!=="ng"&&(t+=this._appId),Xs.hasOwnProperty(t)||(Xs[t]=0),`${t}${e?i._infix+"-":""}${Xs[t]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var Eu=" ";function Zs(i,t,e){let n=Su(i,t);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),i.setAttribute(t,n.join(Eu)))}function Bo(i,t,e){let n=Su(i,t);e=e.trim();let r=n.filter(o=>o!==e);r.length?i.setAttribute(t,r.join(Eu)):i.removeAttribute(t)}function Su(i,t){return i.getAttribute(t)?.match(/\S+/g)??[]}function Ks(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ci,Mu=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Qs(){if(ci)return ci;if(typeof document!="object"||!document)return ci=new Set(Mu),ci;let i=document.createElement("input");return ci=new Set(Mu.filter(t=>(i.setAttribute("type",t),i.type===t))),ci}var Au={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Dg=new b("MATERIAL_ANIMATIONS"),Ru=null;function xg(){return c(Dg,{optional:!0})?.animationsDisabled||c(Fn,{optional:!0})==="NoopAnimations"?"di-disabled":(Ru??=c(ko).matchMedia("(prefers-reduced-motion)").matches,Ru?"reduced-motion":"enabled")}function nt(){return xg()!=="enabled"}function ye(i){return i==null?"":typeof i=="string"?i:`${i}px`}function di(i){return i!=null&&`${i}`!="false"}var ht=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(ht||{}),Js=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ht.HIDDEN;constructor(t,e,n,r=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ou=si({passive:!0,capture:!0}),el=class{_events=new Map;addHandler(t,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ou)})}removeHandler(t,e,n){let r=this._events.get(t);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Ou)))}_delegateEventHandler=t=>{let e=ke(t);e&&this._events.get(t.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(t))})}},rr={enterDuration:225,exitDuration:150},Eg=800,Tu=si({passive:!0,capture:!0}),Pu=["mousedown","touchstart"],Fu=["mouseup","mouseleave","touchend","touchcancel"],Sg=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return i})(),or=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new el;constructor(t,e,n,r,o){this._target=t,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=tt(n)),o&&o.get(ut).load(Sg)}fadeInRipple(t,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=p(p({},rr),n.animation);n.centered&&(t=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||Mg(t,e,r),s=t-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let _=window.getComputedStyle(u),E=_.transitionProperty,J=_.transitionDuration,W=E==="none"||J==="0s"||J==="0s, 0s"||r.width===0&&r.height===0,te=new Js(this,u,n,W);u.style.transform="scale3d(1, 1, 1)",te.state=ht.FADING_IN,n.persistent||(this._mostRecentTransientRipple=te);let T=null;return!W&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Z=()=>{T&&(T.fallbackTimer=null),clearTimeout(Ue),this._finishRippleTransition(te)},ue=()=>this._destroyRipple(te),Ue=setTimeout(ue,d+100);u.addEventListener("transitionend",Z),u.addEventListener("transitioncancel",ue),T={onTransitionEnd:Z,onTransitionCancel:ue,fallbackTimer:Ue}}),this._activeRipples.set(te,T),(W||!d)&&this._finishRippleTransition(te),te}fadeOutRipple(t){if(t.state===ht.FADING_OUT||t.state===ht.HIDDEN)return;let e=t.element,n=p(p({},rr),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=ht.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=tt(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Pu.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Fu.forEach(e=>{this._triggerElement.addEventListener(e,this,Tu)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===ht.FADING_IN?this._startFadeOutTransition(t):t.state===ht.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=ht.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=ht.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Ji(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Eg;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!er(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===ht.VISIBLE||t.config.terminateOnPointerUp&&t.state===ht.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Pu.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Fu.forEach(e=>t.removeEventListener(e,this,Tu)),this._pointerUpEventsRegistered=!1))}};function Mg(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+r*r)}var tl=new b("mat-ripple-global-options"),ku=(()=>{class i{_elementRef=c(B);_animationsDisabled=nt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(L),n=c(le),r=c(tl,{optional:!0}),o=c(ce);this._globalOptions=r||{},this._rippleRenderer=new or(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:p(p(p({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,p(p({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,p(p({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&G("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Ag={capture:!0},Rg=["focus","mousedown","mouseenter","touchstart"],nl="mat-ripple-loader-uninitialized",il="mat-ripple-loader-class-name",Nu="mat-ripple-loader-centered",Vo="mat-ripple-loader-disabled",Lu=(()=>{class i{_document=c(P);_animationsDisabled=nt();_globalRippleOptions=c(tl,{optional:!0});_platform=c(le);_ngZone=c(L);_injector=c(ce);_eventCleanups;_hosts=new Map;constructor(){let e=c(we).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Rg.map(n=>e.listen(this._document,n,this._onInteraction,Ag)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(nl,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(il))&&e.setAttribute(il,n.className||""),n.centered&&e.setAttribute(Nu,""),n.disabled&&e.setAttribute(Vo,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Vo,""):e.removeAttribute(Vo)}_onInteraction=e=>{let n=ke(e);if(n instanceof HTMLElement){let r=n.closest(`[${nl}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(il)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??rr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??rr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Vo),rippleConfig:{centered:e.hasAttribute(Nu),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new or(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(nl)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var jo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return i})();var Ig=["mat-icon-button",""],Og=["*"],Tg=new b("MAT_BUTTON_CONFIG");function Bu(i){return i==null?void 0:za(i)}var rl=(()=>{class i{_elementRef=c(B);_ngZone=c(L);_animationsDisabled=nt();_config=c(Tg,{optional:!0});_focusMonitor=c(Ws);_cleanupClick;_renderer=c(me);_rippleLoader=c(Lu);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(ut).load(jo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Un(r.color?"mat-"+r.color:""),G("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ee],disabled:[2,"disabled","disabled",ee],ariaDisabled:[2,"aria-disabled","ariaDisabled",ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee],tabIndex:[2,"tabIndex","tabIndex",Bu],_tabindex:[2,"tabindex","_tabindex",Bu]}})}return i})(),Dn=(()=>{class i extends rl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ge],attrs:Ig,ngContentSelectors:Og,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(De(),fe(0,"span",0),Q(1),fe(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return i})();var Pg=new b("cdk-dir-doc",{providedIn:"root",factory:()=>c(P)}),Fg=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Vu(i){let t=i?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?Fg.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var xn=(()=>{class i{get value(){return this.valueSignal()}valueSignal=M("ltr");change=new N;constructor(){let e=c(Pg,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Vu(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var kg=["matButton",""],Ng=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Lg=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ju=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Uu=(()=>{class i extends rl{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Bg(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?ju.get(this._appearance):null,o=ju.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ge],attrs:kg,ngContentSelectors:Lg,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(De(Ng),fe(0,"span",0),Q(1),D(2,"span",1),Q(3,1),x(),Q(4,2),fe(5,"span",2)(6,"span",3)),n&2&&G("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return i})();function Bg(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}function zu(i){return Error(`Unable to find icon with the name "${i}"`)}function Vg(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Hu(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function $u(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Bt=class{url;svgText;options;svgElement=null;constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},Wu=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new Bt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Ke.HTML,r);if(!a)throw $u(r);let s=li(a);return this._addSvgIconConfig(e,n,new Bt("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new Bt(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Ke.HTML,n);if(!o)throw $u(n);let a=li(o);return this._addSvgIconSetConfig(e,new Bt("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Ke.RESOURCE_URL,e);if(!n)throw Hu(e);let r=this._cachedIconsByUrl.get(n);return r?y(Uo(r)):this._loadSvgIconFromConfig(new Bt(e,null)).pipe(ge(o=>this._cachedIconsByUrl.set(n,o)),k(o=>Uo(o)))}getNamedSvgIcon(e,n=""){let r=Gu(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):br(zu(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(Uo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(k(n=>Uo(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return y(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(On(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ke.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return Dr(o).pipe(k(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw zu(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ge(n=>e.svgText=n),k(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(ge(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(li("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(li("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Vg();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Ke.RESOURCE_URL,n);if(!a)throw Hu(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(k(d=>li(d)),Et(()=>this._inProgressUrlFetches.delete(a)),Hl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(Gu(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return jg(o)?new Bt(o.url,null,o.options):new Bt(o,null)}}static \u0275fac=function(n){return new(n||i)(S(Yt,8),S(ls),S(P,8),S(cn))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Uo(i){return i.cloneNode(!0)}function Gu(i,t){return i+":"+t}function jg(i){return!!(i.url&&i.options)}var Ug=["*"],zg=new b("MAT_ICON_DEFAULT_OPTIONS"),Hg=new b("mat-icon-location",{providedIn:"root",factory:()=>{let i=c(P),t=i?i.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),qu=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],$g=qu.map(i=>`[${i}]`).join(", "),Gg=/^url\(['"]?#(.*?)['"]?\)$/,Dt=(()=>{class i{_elementRef=c(B);_iconRegistry=c(Wu);_location=c(Hg);_errorHandler=c(cn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ee.EMPTY;constructor(){let e=c(new Tr("aria-hidden"),{optional:!0}),n=c(zg,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll($g),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)qu.forEach(a=>{let s=n[o],l=s.getAttribute(a),d=l?l.match(Gg):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(it(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(oe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Un(r.color?"mat-"+r.color:""),G("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ee],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ug,decls:1,vars:0,template:function(n,r){n&1&&(De(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return i})();var zo=class i{create=new N;stats=new N;onCreate(){this.create.emit()}onStats(){this.stats.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-admin-panel"]],outputs:{create:"create",stats:"stats"},decls:7,vars:0,consts:[[1,"admin-panel"],["mat-icon-button","","title","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","aria-label","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"admin-btn",3,"click"],["mat-icon-button","","title","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443","aria-label","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",1,"admin-btn",3,"click"]],template:function(e,n){e&1&&(m(0,"aside",0)(1,"button",1),I("click",function(){return n.onCreate()}),m(2,"mat-icon"),h(3,"add_circle"),g()(),m(4,"button",2),I("click",function(){return n.onStats()}),m(5,"mat-icon"),h(6,"bar_chart"),g()()())},dependencies:[Dn,Dt],styles:[".admin-panel[_ngcontent-%COMP%]{position:fixed;right:0;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;background:var(--white);border:1px solid var(--light-gray);border-radius:12px 0 0 12px;box-shadow:-2px 2px 10px #0000001f;overflow:hidden;z-index:100}.admin-btn[_ngcontent-%COMP%]{width:38px!important;height:38px!important;border:none;background:transparent;color:var(--accent-green)!important;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:color .2s ease,background .2s ease}.admin-btn[_ngcontent-%COMP%]:hover{background:var(--bg-light)}.admin-btn[_ngcontent-%COMP%] + .admin-btn[_ngcontent-%COMP%]{border-top:1px solid var(--light-gray)}"]})};var th=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||i)(q(me),q(B))};static \u0275dir=F({type:i})}return i})(),Wg=(()=>{class i extends th{static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275dir=F({type:i,features:[Ge]})}return i})(),Qo=new b("");var qg={provide:Qo,useExisting:jt(()=>pi),multi:!0};function Yg(){let i=ot()?ot().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Xg=new b(""),pi=(()=>{class i extends th{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Yg())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||i)(q(me),q(B),q(Xg,8))};static \u0275dir=F({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&I("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Le([qg]),Ge]})}return i})();function cl(i){return i==null||dl(i)===0}function dl(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var ul=new b(""),hl=new b(""),Zg=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_t=class{static min(t){return Kg(t)}static max(t){return Qg(t)}static required(t){return Jg(t)}static requiredTrue(t){return ev(t)}static email(t){return tv(t)}static minLength(t){return nv(t)}static maxLength(t){return iv(t)}static pattern(t){return rv(t)}static nullValidator(t){return nh()}static compose(t){return lh(t)}static composeAsync(t){return ch(t)}};function Kg(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function Qg(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function Jg(i){return cl(i.value)?{required:!0}:null}function ev(i){return i.value===!0?null:{required:!0}}function tv(i){return cl(i.value)||Zg.test(i.value)?null:{email:!0}}function nv(i){return t=>{let e=t.value?.length??dl(t.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function iv(i){return t=>{let e=t.value?.length??dl(t.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function rv(i){if(!i)return nh;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(cl(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function nh(i){return null}function ih(i){return i!=null}function rh(i){return Di(i)?Ne(i):i}function oh(i){let t={};return i.forEach(e=>{t=e!=null?p(p({},t),e):t}),Object.keys(t).length===0?null:t}function ah(i,t){return t.map(e=>e(i))}function ov(i){return!i.validate}function sh(i){return i.map(t=>ov(t)?t:e=>t.validate(e))}function lh(i){if(!i)return null;let t=i.filter(ih);return t.length==0?null:function(e){return oh(ah(e,t))}}function ml(i){return i!=null?lh(sh(i)):null}function ch(i){if(!i)return null;let t=i.filter(ih);return t.length==0?null:function(e){let n=ah(e,t).map(rh);return Dr(n).pipe(k(oh))}}function fl(i){return i!=null?ch(sh(i)):null}function Yu(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function dh(i){return i._rawValidators}function uh(i){return i._rawAsyncValidators}function ol(i){return i?Array.isArray(i)?i:[i]:[]}function Go(i,t){return Array.isArray(i)?i.includes(t):i===t}function Xu(i,t){let e=ol(t);return ol(i).forEach(r=>{Go(e,r)||e.push(r)}),e}function Zu(i,t){return ol(t).filter(e=>!Go(i,e))}var Wo=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ml(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=fl(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},tn=class extends Wo{name;get formDirective(){return null}get path(){return null}},En=class extends Wo{_parent=null;name=null;valueAccessor=null},qo=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Jo=(()=>{class i extends qo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||i)(q(En,2))};static \u0275dir=F({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&G("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ge]})}return i})(),ea=(()=>{class i extends qo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||i)(q(tn,10))};static \u0275dir=F({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&G("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ge]})}return i})();var ar="VALID",Ho="INVALID",ui="PENDING",sr="DISABLED",nn=class{},Yo=class extends nn{value;source;constructor(t,e){super(),this.value=t,this.source=e}},cr=class extends nn{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},dr=class extends nn{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},hi=class extends nn{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Xo=class extends nn{source;constructor(t){super(),this.source=t}},ur=class extends nn{source;constructor(t){super(),this.source=t}};function pl(i){return(ta(i)?i.validators:i)||null}function av(i){return Array.isArray(i)?ml(i):i||null}function gl(i,t){return(ta(t)?t.asyncValidators:i)||null}function sv(i){return Array.isArray(i)?fl(i):i||null}function ta(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function hh(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new A(1e3,"");if(!n[e])throw new A(1001,"")}function mh(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new A(-1002,"")})}var mi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return X(this.statusReactive)}set status(t){X(()=>this.statusReactive.set(t))}_status=de(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===ar}get invalid(){return this.status===Ho}get pending(){return this.status===ui}get disabled(){return this.status===sr}get enabled(){return this.status!==sr}errors;get pristine(){return X(this.pristineReactive)}set pristine(t){X(()=>this.pristineReactive.set(t))}_pristine=de(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return X(this.touchedReactive)}set touched(t){X(()=>this.touchedReactive.set(t))}_touched=de(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Xu(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Xu(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Zu(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Zu(t,this._rawAsyncValidators))}hasValidator(t){return Go(this._rawValidators,t)}hasAsyncValidator(t){return Go(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(H(p({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new dr(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new dr(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(H(p({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new cr(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new cr(!0,n))}markAsPending(t={}){this.status=ui;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new hi(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(H(p({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=sr,this.errors=null,this._forEachChild(r=>{r.disable(H(p({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Yo(this.value,n)),this._events.next(new hi(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(H(p({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=ar,this._forEachChild(n=>{n.enable(H(p({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(H(p({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ar||this.status===ui)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Yo(this.value,e)),this._events.next(new hi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(H(p({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?sr:ar}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=ui,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=rh(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new hi(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?sr:this.errors?Ho:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ui)?ui:this._anyControlsHaveStatus(Ho)?Ho:ar}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new cr(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new dr(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ta(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=av(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=sv(this._rawAsyncValidators)}},fi=class extends mi{constructor(t,e,n){super(pl(e),gl(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){mh(this,!0,t),Object.keys(t).forEach(n=>{hh(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this.controls[n];r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,H(p({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ur(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var al=class extends fi{};var vl=new b("",{factory:()=>_l}),_l="always";function lv(i,t){return[...t.path,i]}function sl(i,t,e=_l){bl(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),dv(i,t),hv(i,t),uv(i,t),cv(i,t)}function Ku(i,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),Ko(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Zo(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function cv(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function bl(i,t){let e=dh(i);t.validator!==null?i.setValidators(Yu(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=uh(i);t.asyncValidator!==null?i.setAsyncValidators(Yu(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Zo(t._rawValidators,r),Zo(t._rawAsyncValidators,r)}function Ko(i,t){let e=!1;if(i!==null){if(t.validator!==null){let r=dh(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(t.asyncValidator!==null){let r=uh(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let n=()=>{};return Zo(t._rawValidators,n),Zo(t._rawAsyncValidators,n),e}function dv(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&fh(i,t)})}function uv(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&fh(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function fh(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function hv(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function ph(i,t){i==null,bl(i,t)}function mv(i,t){return Ko(i,t)}function fv(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function pv(i){return Object.getPrototypeOf(i.constructor)===Wg}function gh(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function gv(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(o=>{o.constructor===pi?e=o:pv(o)?n=o:r=o}),r||n||e||null}function vv(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var _v={provide:tn,useExisting:jt(()=>yl)},lr=Promise.resolve(),yl=(()=>{class i extends tn{callSetDisabledState;get submitted(){return X(this.submittedReactive)}_submitted=de(()=>this.submittedReactive());submittedReactive=M(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new fi({},ml(e),fl(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){lr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),sl(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){lr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){lr.then(()=>{let n=this._findContainer(e.path),r=new fi({});ph(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){lr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){lr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),gh(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Xo(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||i)(q(ul,10),q(hl,10),q(vl,8))};static \u0275dir=F({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&I("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Le([_v]),Ge]})}return i})();function Qu(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function Ju(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var $o=class extends mi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(pl(e),gl(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ta(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ju(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ur(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Qu(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Qu(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ju(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var bv=i=>i instanceof $o;var na=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var ll=class extends mi{constructor(t,e,n){super(pl(e),gl(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){let n=this._adjustIndex(t);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){mh(this,!1,t),t.forEach((n,r)=>{hh(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(t.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],H(p({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ur(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var yv=(()=>{class i extends tn{callSetDisabledState;get submitted(){return X(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=de(()=>this._submittedReactive());_submittedReactive=M(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ko(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return sl(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Ku(e.control||null,e,!1),vv(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,gh(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Xo(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Ku(n||null,e),bv(r)&&(sl(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);ph(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&mv(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){bl(this.form,this),this._oldForm&&Ko(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||i)(q(ul,10),q(hl,10),q(vl,8))};static \u0275dir=F({type:i,features:[Ge,Me]})}return i})();var vh=new b("");var Cv={provide:En,useExisting:jt(()=>hr)},hr=(()=>{class i extends En{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new N;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=gv(this,o)}ngOnChanges(e){this._added||this._setUpControl(),fv(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return lv(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||i)(q(tn,13),q(ul,10),q(hl,10),q(Qo,10),q(vh,8))};static \u0275dir=F({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Le([Cv]),Ge,Me]})}return i})();var wv={provide:tn,useExisting:jt(()=>Sn)},Sn=(()=>{class i extends yv{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275dir=F({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&I("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Le([wv]),Ge]})}return i})();var Dv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ae({type:i});static \u0275inj=Se({})}return i})();function eh(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ia=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return eh(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new fi(r,o)}record(e,n=null){let r=this._reduceControls(e);return new al(r,n)}control(e,n,r){let o={};return this.useNonNullable?(eh(n)?o=n:(o.validators=n,o.asyncValidators=r),new $o(e,H(p({},o),{nonNullable:!0}))):new $o(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new ll(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof $o)return e;if(e instanceof mi)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ra=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:vh,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:vl,useValue:e.callSetDisabledState??_l}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ae({type:i});static \u0275inj=Se({imports:[Dv]})}return i})();var bh=(()=>{class i{_animationsDisabled=nt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,r){n&2&&G("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ev=["text"],Sv=[[["mat-icon"]],"*"],Mv=["mat-icon","*"];function Av(i,t){if(i&1&&Y(0,"mat-pseudo-checkbox",1),i&2){let e=z();V("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Rv(i,t){if(i&1&&Y(0,"mat-pseudo-checkbox",3),i&2){let e=z();V("disabled",e.disabled)}}function Iv(i,t){if(i&1&&(m(0,"span",4),h(1),g()),i&2){let e=z();f(),zn("(",e.group.label,")")}}var wl=new b("MAT_OPTION_PARENT_COMPONENT"),Dl=new b("MatOptgroup");var mr=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}},oa=(()=>{class i{_element=c(B);_changeDetectorRef=c(Be);_parent=c(wl,{optional:!0});group=c(Dl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(je).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new N;_text;_stateChanges=new R;constructor(){let e=c(ut);e.load(jo),e.load(yu),this._signalDisableRipple=!!this._parent&&Ut(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!en(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new mr(this,e))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-option"]],viewQuery:function(n,r){if(n&1&&Ht(Ev,7),n&2){let o;ae(o=se())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,r){n&1&&I("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(Qe("id",r.id),oe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),G("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ee]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Mv,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,r){n&1&&(De(Sv),j(0,Av,1,2,"mat-pseudo-checkbox",1),Q(1),m(2,"span",2,0),Q(4,1),g(),j(5,Rv,1,1,"mat-pseudo-checkbox",3),j(6,Iv,2,1,"span",4),Y(7,"div",5)),n&2&&(U(r.multiple?0:-1),f(5),U(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),f(),U(r.group&&r.group._inert?6:-1),f(),V("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[bh,ku],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function yh(i,t,e){if(e.length){let n=t.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)n[a].group&&n[a].group===r[o]&&o++;return o}return 0}function Ch(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}var Ov=20,wh=(()=>{class i{_ngZone=c(L);_platform=c(le);_renderer=c(we).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Ov){return this._platform.isBrowser?new qe(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Oa(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let r=tt(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Tv=20,fr=(()=>{class i{_platform=c(le);_listeners;_viewportSize=null;_change=new R;_document=c(P);constructor(){let e=c(L),n=c(we).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=Tv){return e>0?this._change.pipe(Oa(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var pr=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},xl=class extends pr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(t,e,n,r,o){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=o||null}},gi=class extends pr{templateRef;viewContainerRef;context;injector;constructor(t,e,n,r){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},El=class extends pr{element;constructor(t){super(),this.element=t instanceof B?t.nativeElement:t}},Sl=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof xl)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof gi)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof El)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},aa=class extends Sl{outletElement;_appRef;_defaultInjector;constructor(t,e,n){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let n=t.injector||t.viewContainerRef.injector,r=n.get(Ba,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=t.injector||this._defaultInjector||ce.NULL,o=r.get(ve,n.injector);e=Pr(t.component,{elementInjector:r,environmentInjector:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=t,n}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var sa=class{enable(){}disable(){}attach(){}};function Ml(i,t){return t.some(e=>{let n=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return n||r||o||a})}function Dh(i,t){return t.some(e=>{let n=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return n||r||o||a})}function Rl(i,t){return new la(i.get(wh),i.get(fr),i.get(L),t)}var la=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,n,r){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();Ml(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var vi=class{positionStrategy;scrollStrategy=new sa;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let n of e)t[n]!==void 0&&(this[n]=t[n])}}};var ca=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Ah=(()=>{class i{_attachedOverlays=[];_document=c(P);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Rh=(()=>{class i extends Ah{_ngZone=c(L);_renderer=c(we).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let o=n[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ih=(()=>{class i extends Ah{_platform=c(le);_ngZone=c(L);_renderer=c(we).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,r),o.listen(n,"click",this._clickListener,r),o.listen(n,"auxclick",this._clickListener,r),o.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ke(e)};_clickListener=e=>{let n=ke(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(xh(s.overlayElement,n)||xh(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=bt(i)))(r||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function xh(i,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=t;for(;n;){if(n===i)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Oh=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Th=(()=>{class i{_platform=c(le);_containerElement;_document=c(P);_styleLoader=c(ut);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ks()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let n=this._document.createElement("div");n.classList.add(e),Ks()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Oh)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Al=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,n,r){this._renderer=e,this._ngZone=n,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Il(i){return i&&i.nodeType===1}var da=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=Ee.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(t,e,n,r,o,a,s,l,d,u=!1,_,E){this._portalOutlet=t,this._host=e,this._pane=n,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=_,this._renderer=E,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=St(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=p(p({},this._config),t),this._updateElementSize()}setDirection(t){this._config=H(p({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=ye(this._config.width),t.height=ye(this._config.height),t.minWidth=ye(this._config.minWidth),t.minHeight=ye(this._config.minHeight),t.maxWidth=ye(this._config.maxWidth),t.maxHeight=ye(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Il(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Al(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,n){let r=Lt(e||[]).filter(o=>!!o);r.length&&(n?t.classList.add(...r):t.classList.remove(...r))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=St(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},Eh="cdk-overlay-connected-position-bounding-box",Pv=/([A-Za-z%]+)$/;function Ol(i,t){return new ua(t,i.get(fr),i.get(P),i.get(le),i.get(Th))}var ua=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=Ee.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,n,r,o){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=o,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Eh),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(t,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,n)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Mn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Eh),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof B?this._origin.nativeElement:Il(this._origin)?this._origin:null}_getOriginPoint(t,e,n){let r;if(n.originX=="center")r=t.left+t.width/2;else{let a=this._isRtl()?t.right:t.left,s=this._isRtl()?t.left:t.right;r=n.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return n.originY=="center"?o=t.top+t.height/2:o=n.originY=="top"?t.top:t.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(t,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:t.x+r,y:t.y+o}}_getOverlayFit(t,e,n,r){let o=Mh(e),{x:a,y:s}=t,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,_=a+o.width-n.width,E=0-s,J=s+o.height-n.height,W=this._subtractOverflows(o.width,u,_),te=this._subtractOverflows(o.height,E,J),T=W*te;return{visibleArea:T,isCompletelyWithinViewport:o.width*o.height===T,fitsInViewportVertically:te===o.height,fitsInViewportHorizontally:W==o.width}}_canFitWithFlexibleDimensions(t,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,o=n.right-e.x,a=Sh(this._overlayRef.getConfig().minHeight),s=Sh(this._overlayRef.getConfig().minWidth),l=t.fitsInViewportVertically||a!=null&&a<=r,d=t.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(t,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let r=Mh(e),o=this._viewportRect,a=Math.max(t.x+r.width-o.width,0),s=Math.max(t.y+r.height-o.height,0),l=Math.max(o.top-n.top-t.y,0),d=Math.max(o.left-n.left-t.x,0),u=0,_=0;return r.width<=o.width?u=d||-a:u=t.x<this._getViewportMarginStart()?o.left-n.left-t.x:0,r.height<=o.height?_=l||-s:_=t.y<this._getViewportMarginTop()?o.top-n.top-t.y:0,this._previousPushAmount={x:u,y:_},{x:t.x+u,y:t.y+_}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!Fv(this._lastScrollVisibility,n)){let r=new ca(t,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=t.overlayY;t.overlayX==="center"?n="center":this._isRtl()?n=t.overlayX==="start"?"right":"left":n=t.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(t,e){let n=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=t.y,o=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-s+this._getViewportMarginTop();else{let J=Math.min(n.bottom-t.y+n.top,t.y),W=this._lastBoundingBoxSize.height;o=J*2,a=t.y-J,o>W&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.y-W/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,_,E;if(d)E=n.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=t.x-this._getViewportMarginStart();else if(l)_=t.x,u=n.right-t.x-this._getViewportMarginEnd();else{let J=Math.min(n.right-t.x+n.left,t.x),W=this._lastBoundingBoxSize.width;u=J*2,_=t.x-J,u>W&&!this._isInitialRender&&!this._growAfterOpen&&(_=t.x-W/2)}return{top:a,left:_,bottom:s,right:E,width:u,height:o}}_setBoundingBoxStyles(t,e){let n=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ye(n.width),r.height=ye(n.height),r.top=ye(n.top)||"auto",r.bottom=ye(n.bottom)||"auto",r.left=ye(n.left)||"auto",r.right=ye(n.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ye(o)),a&&(r.maxWidth=ye(a))}this._lastBoundingBoxSize=n,Mn(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Mn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Mn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let n={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Mn(n,this._getExactOverlayY(e,t,u)),Mn(n,this._getExactOverlayX(e,t,u))}else n.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),n.transform=s.trim(),a.maxHeight&&(r?n.maxHeight=ye(a.maxHeight):o&&(n.maxHeight="")),a.maxWidth&&(r?n.maxWidth=ye(a.maxWidth):o&&(n.maxWidth="")),Mn(this._pane.style,n)}_getExactOverlayY(t,e,n){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),t.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ye(o.y);return r}_getExactOverlayX(t,e,n){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let a;if(this._isRtl()?a=t.overlayX==="end"?"left":"right":a=t.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ye(o.x);return r}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Dh(t,n),isOriginOutsideView:Ml(t,n),isOverlayClipped:Dh(e,n),isOverlayOutsideView:Ml(e,n)}}_subtractOverflows(t,...e){return e.reduce((n,r)=>n-Math.max(r,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+t-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Lt(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof B)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,n=t.height||0;return{top:t.y,bottom:t.y+n,left:t.x,right:t.x+e,height:n,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let n=e.getBoundingClientRect();return t&&(e.style.display=""),n}};function Mn(i,t){for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function Sh(i){if(typeof i!="number"&&i!=null){let[t,e]=i.split(Pv);return!e||e==="px"?parseFloat(t):null}return i||null}function Mh(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Fv(i,t){return i===t?!0:i.isOriginClipped===t.isOriginClipped&&i.isOriginOutsideView===t.isOriginOutsideView&&i.isOverlayClipped===t.isOverlayClipped&&i.isOverlayOutsideView===t.isOverlayOutsideView}var Ph=new b("OVERLAY_DEFAULT_CONFIG");function Tl(i,t){i.get(ut).load(Oh);let e=i.get(Th),n=i.get(P),r=i.get(je),o=i.get(At),a=i.get(xn),s=i.get(me,null,{optional:!0})||i.get(we).createRenderer(null,null),l=new vi(t),d=i.get(Ph,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in n.body?l.usePopover=t?.usePopover??d:l.usePopover=!1;let u=n.createElement("div"),_=n.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),_.appendChild(u),l.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let E=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Il(E)?E.after(_):E?.type==="parent"?E.element.appendChild(_):e.getContainerElement().appendChild(_),new da(new aa(u,o,i),_,u,l,i.get(L),i.get(Rh),n,i.get(It),i.get(Ih),t?.disableAnimations??i.get(Fn,null,{optional:!0})==="NoopAnimations",i.get(ve),s)}var Pl=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new qe(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(he(e=>e.some(n=>n.target===t)),ka({bufferSize:1,refCount:!0}),Ye(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Fh=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(L);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Pl(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Nv=["notch"],Lv=["matFormFieldNotchedOutline",""],Bv=["*"],kh=["iconPrefixContainer"],Nh=["textPrefixContainer"],Lh=["iconSuffixContainer"],Bh=["textSuffixContainer"],Vv=["textField"],jv=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Uv=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function zv(i,t){i&1&&Y(0,"span",21)}function Hv(i,t){if(i&1&&(m(0,"label",20),Q(1,1),j(2,zv,1,0,"span",21),g()),i&2){let e=z(2);V("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),U(!e.hideRequiredMarker&&e._control.required?2:-1)}}function $v(i,t){if(i&1&&j(0,Hv,3,5,"label",20),i&2){let e=z();U(e._hasFloatingLabel()?0:-1)}}function Gv(i,t){i&1&&Y(0,"div",7)}function Wv(i,t){}function qv(i,t){if(i&1&&Or(0,Wv,0,0,"ng-template",13),i&2){z(2);let e=xi(1);V("ngTemplateOutlet",e)}}function Yv(i,t){if(i&1&&(m(0,"div",9),j(1,qv,1,1,null,13),g()),i&2){let e=z();V("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),U(e._forceDisplayInfixLabel()?-1:1)}}function Xv(i,t){i&1&&(m(0,"div",10,2),Q(2,2),g())}function Zv(i,t){i&1&&(m(0,"div",11,3),Q(2,3),g())}function Kv(i,t){}function Qv(i,t){if(i&1&&Or(0,Kv,0,0,"ng-template",13),i&2){z();let e=xi(1);V("ngTemplateOutlet",e)}}function Jv(i,t){i&1&&(m(0,"div",14,4),Q(2,4),g())}function e_(i,t){i&1&&(m(0,"div",15,5),Q(2,5),g())}function t_(i,t){i&1&&Y(0,"div",16)}function n_(i,t){i&1&&(m(0,"div",18),Q(1,6),g())}function i_(i,t){if(i&1&&(m(0,"mat-hint",22),h(1),g()),i&2){let e=z(2);V("id",e._hintLabelId),f(),$(e.hintLabel)}}function r_(i,t){if(i&1&&(m(0,"div",19),j(1,i_,2,2,"mat-hint",22),Q(2,7),Y(3,"div",23),Q(4,8),g()),i&2){let e=z();f(),U(e.hintLabel?1:-1)}}var An=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-label"]]})}return i})(),Gh=new b("MatError"),kl=(()=>{class i{id=c(je).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&Qe("id",r.id)},inputs:{id:"id"},features:[Le([{provide:Gh,useExisting:i}])]})}return i})(),Fl=(()=>{class i{align="start";id=c(je).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Qe("id",r.id),oe("align",null),G("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),o_=new b("MatPrefix");var a_=new b("MatSuffix");var Wh=new b("FloatingLabelParent"),Vh=(()=>{class i{_elementRef=c(B);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Fh);_ngZone=c(L);_parent=c(Wh);_resizeSubscription=new Ee;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return s_(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&G("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function s_(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var jh="mdc-line-ripple--active",ha="mdc-line-ripple--deactivating",Uh=(()=>{class i{_elementRef=c(B);_cleanupTransitionEnd;constructor(){let e=c(L),n=c(me);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ha),e.add(jh)}deactivate(){this._elementRef.nativeElement.classList.add(ha)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(ha);e.propertyName==="opacity"&&r&&n.remove(jh,ha)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),zh=(()=>{class i{_elementRef=c(B);_ngZone=c(L);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Ht(Nv,5),n&2){let o;ae(o=se())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&G("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Lv,ngContentSelectors:Bv,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(De(),fe(0,"div",1),D(1,"div",2,0),Q(3),x(),fe(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Nl=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i})}return i})();var gr=new b("MatFormField"),l_=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Hh="fill",c_="auto",$h="fixed",d_="translateY(-50%)",vr=(()=>{class i{_elementRef=c(B);_changeDetectorRef=c(Be);_platform=c(le);_idGenerator=c(je);_ngZone=c(L);_defaults=c(l_,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Rt("iconPrefixContainer");_textPrefixContainerSignal=Rt("textPrefixContainer");_iconSuffixContainerSignal=Rt("iconSuffixContainer");_textSuffixContainerSignal=Rt("textSuffixContainer");_prefixSuffixContainers=de(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=yc(An);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=di(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||c_}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Hh;this._appearanceSignal.set(n)}_appearanceSignal=M(Hh);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$h}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||$h}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=nt();constructor(){let e=this._defaults,n=c(xn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ft(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=de(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(mt([void 0,void 0]),k(()=>[n.errorState,n.userAriaDescribedBy]),Fa(),he(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Ye(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),In(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){wc({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=de(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",_=`${a+s}px`,J=`calc(${u} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${d_} translateX(${J}))`,te=a+s+l+d;return[W,te]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(hc(o,r._labelChild,An,5),Vn(o,Nl,5)(o,o_,5)(o,a_,5)(o,Gh,5)(o,Fl,5)),n&2){un();let a;ae(a=se())&&(r._formFieldControl=a.first),ae(a=se())&&(r._prefixChildren=a),ae(a=se())&&(r._suffixChildren=a),ae(a=se())&&(r._errorChildren=a),ae(a=se())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(jn(r._iconPrefixContainerSignal,kh,5)(r._textPrefixContainerSignal,Nh,5)(r._iconSuffixContainerSignal,Lh,5)(r._textSuffixContainerSignal,Bh,5),Ht(Vv,5)(kh,5)(Nh,5)(Lh,5)(Bh,5)(Vh,5)(zh,5)(Uh,5)),n&2){un(4);let o;ae(o=se())&&(r._textField=o.first),ae(o=se())&&(r._iconPrefixContainer=o.first),ae(o=se())&&(r._textPrefixContainer=o.first),ae(o=se())&&(r._iconSuffixContainer=o.first),ae(o=se())&&(r._textSuffixContainer=o.first),ae(o=se())&&(r._floatingLabel=o.first),ae(o=se())&&(r._notchedOutline=o.first),ae(o=se())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&G("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Le([{provide:gr,useExisting:i},{provide:Wh,useExisting:i}])],ngContentSelectors:Uv,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(De(jv),Or(0,$v,1,1,"ng-template",null,0,gc),m(2,"div",6,1),I("click",function(a){return r._control.onContainerClick(a)}),j(4,Gv,1,0,"div",7),m(5,"div",8),j(6,Yv,2,2,"div",9),j(7,Xv,3,0,"div",10),j(8,Zv,3,0,"div",11),m(9,"div",12),j(10,Qv,1,1,null,13),Q(11),g(),j(12,Jv,3,0,"div",14),j(13,e_,3,0,"div",15),g(),j(14,t_,1,0,"div",16),g(),m(15,"div",17),j(16,n_,2,0,"div",18)(17,r_,5,1,"div",19),g()),n&2){let o;f(2),G("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),U(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),U(r._hasOutline()?6:-1),f(),U(r._hasIconPrefix?7:-1),f(),U(r._hasTextPrefix?8:-1),f(2),U(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),U(r._hasTextSuffix?12:-1),f(),U(r._hasIconSuffix?13:-1),f(),U(r._hasOutline()?-1:14),f(),G("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),U((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Vh,zh,qa,Uh,Fl],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var u_=["panel"],h_=["*"];function m_(i,t){if(i&1&&(D(0,"div",1,0),Q(2),x()),i&2){let e=t.id,n=z();Un(n._classList),G("mat-mdc-autocomplete-visible",n.showPanel)("mat-mdc-autocomplete-hidden",!n.showPanel)("mat-autocomplete-panel-animations-enabled",!n._animationsDisabled)("mat-primary",n._color==="primary")("mat-accent",n._color==="accent")("mat-warn",n._color==="warn"),Qe("id",n.id),oe("aria-label",n.ariaLabel||null)("aria-labelledby",n._getPanelAriaLabelledby(e))}}var Ll=class{source;option;constructor(t,e){this.source=t,this.option=e}},Yh=new b("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Xh=(()=>{class i{_changeDetectorRef=c(Be);_elementRef=c(B);_defaults=c(Yh);_animationsDisabled=nt();_activeOptionChanges=Ee.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new N;opened=new N;closed=new N;optionActivated=new N;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=c(je).getId("mat-autocomplete-");inertGroups;constructor(){let e=c(le);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ir(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let n=new Ll(this,e);this.optionSelected.emit(n)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(n,r,o){if(n&1&&Vn(o,oa,5)(o,Dl,5),n&2){let a;ae(a=se())&&(r.options=a),ae(a=se())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&Ht(Bn,7)(u_,5),n&2){let o;ae(o=se())&&(r.template=o.first),ae(o=se())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ee],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ee],requireSelection:[2,"requireSelection","requireSelection",ee],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ee],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ee]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Le([{provide:wl,useExisting:i}])],ngContentSelectors:h_,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(n,r){n&1&&(De(),cc(0,m_,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})();var f_={provide:Qo,useExisting:jt(()=>Bl),multi:!0};var p_=new b("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(ce);return()=>Rl(i)}}),Bl=(()=>{class i{_environmentInjector=c(ve);_element=c(B);_injector=c(ce);_viewContainerRef=c(Mt);_zone=c(L);_changeDetectorRef=c(Be);_dir=c(xn,{optional:!0});_formField=c(gr,{optional:!0,host:!0});_viewportRuler=c(fr);_scrollStrategy=c(p_);_renderer=c(me);_animationsDisabled=nt();_defaults=c(Yh,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new R;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Ee.EMPTY;_breakpointObserver=c(qs);_handsetLandscapeSubscription=Ee.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new R;_overlayPanelClass=Lt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Bo(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return In(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(he(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(he(()=>this._overlayAttached)):y()).pipe(k(e=>e instanceof mr?e:null))}optionSelections=Rn(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(mt(e),ne(()=>In(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(ne(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new qe(e=>{let n=o=>{let a=ke(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",n),this._renderer.listen("document","auxclick",n),this._renderer.listen("document","touchend",n)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let n=e,r=n.keyCode,o=en(n);if(r===27&&!o&&n.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),n.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(n):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let n=e.target,r=n.value;if(n.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Hs()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new qe(r=>{St(()=>{r.next()},{injector:this._environmentInjector})}),n=this.autocomplete.options?.changes.pipe(ge(()=>this._positionStrategy.reapplyLastPosition()),Er(0))??y();return In(e,n).pipe(ne(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),it(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let n=this.autocomplete;return n&&n.displayWith?n.displayWith(e):e}_assignOptionValue(e){let n=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(n??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let n=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),n._emitSelectEvent(r),this._element.nativeElement.focus()):n.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,n){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(n)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let n=this.autocomplete.id;Zs(this._trackedModal,"aria-owns",n)}}_attachOverlay(e){if(!this.autocomplete)return;let n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new gi(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),n=Tl(this._injector,this._getOverlayConfig()),this._overlayRef=n,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&n&&n.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Au.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),n&&!n.hasAttached()&&(n.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!en(e)||e.keyCode===38&&en(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new vi({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Ol(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=n:a=[...n,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let n=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){n=r;break}e._keyManager.setActiveItem(n)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let n=this.autocomplete,r=yh(e,n.options,n.optionGroups);if(e===0&&r===1)n._setScrollTop(0);else if(n.panel){let o=n.options.toArray()[e];if(o){let a=o._getHostElement(),s=Ch(a.offsetTop,a.offsetHeight,n._getScrollTop(),n.panel.nativeElement.offsetHeight);n._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=this.autocomplete.id;this._trackedModal&&Bo(this._trackedModal,"aria-owns",n),Zs(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Bo(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(n,r){n&1&&I("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),n&2&&oe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ee]},exportAs:["matAutocompleteTrigger"],features:[Le([f_]),Me]})}return i})();var g_=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),v_={passive:!0},Zh=(()=>{class i{_platform=c(le);_ngZone=c(L);_renderer=c(we).createRenderer(null,null);_styleLoader=c(ut);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return He;this._styleLoader.load(g_);let n=tt(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new R,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,v_)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=tt(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Kh=new b("MAT_INPUT_VALUE_ACCESSOR");var Qh=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ma=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,n,r,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==t&&(this.errorState=o,this._stateChanges.next())}};var __=["button","checkbox","file","hidden","image","radio","range","reset","submit"],b_=new b("MAT_INPUT_CONFIG"),fa=(()=>{class i{_elementRef=c(B);_platform=c(le);ngControl=c(En,{optional:!0,self:!0});_autofillMonitor=c(Zh);_ngZone=c(L);_formField=c(gr,{optional:!0});_renderer=c(me);_uid=c(je).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(b_,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=di(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(_t.required)??!1}set required(e){this._required=di(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Qs().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=di(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Qs().has(e));constructor(){let e=c(yl,{optional:!0}),n=c(Sn,{optional:!0}),r=c(Qh),o=c(Kh,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Ut(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ma(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ft(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){__.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&I("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Qe("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),oe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),G("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee]},exportAs:["matInput"],features:[Le([{provide:Nl,useExisting:i}]),Me]})}return i})();var pa="image/nature.jpg",_i=class i{toArticle(t){return{id:t.id,title:t.title,description:t.content,date:t.createdAt,image:t.imgSrc||pa,rating:t.rating??0,categoryId:t.categoryId??void 0}}toQueryResult(t,e){let n=t.items.map(r=>this.toArticle(r));return{articles:n,pageItems:n,total:t.total,activePage:e}}toFormData(t,e){let n=new FormData;return n.append("title",t.title),n.append("content",t.description),e&&n.append("categoryId",e),t.imageFile&&n.append("image",t.imageFile),n}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var rn=class i{http=c(Yt);fetchAll(){return Fe.useBackend?this.http.get(`${Fe.apiUrl}/categories`):y([])}create(t){return this.http.post(`${Fe.apiUrl}/categories`,{name:t})}resolveCategoryId(t){let e=t?.trim();return e?this.fetchAll().pipe(ne(n=>{let r=n.find(o=>o.name.toLowerCase()===e.toLowerCase());return r?y(r.id):this.create(e).pipe(k(o=>o.id))})):y(void 0)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var w_=(i,t)=>t.id;function D_(i,t){i&1&&(m(0,"small",11),h(1,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D"),g())}function x_(i,t){i&1&&(m(0,"small",11),h(1,"\u041C\u0438\u043D\u0438\u043C\u0443\u043C 25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),g())}function E_(i,t){if(i&1&&j(0,D_,2,0,"small",11)(1,x_,2,0,"small",11),i&2){let e=z();U(e.titleCtrl.errors!=null&&e.titleCtrl.errors.required?0:e.titleCtrl.errors!=null&&e.titleCtrl.errors.minlength?1:-1)}}function S_(i,t){i&1&&(m(0,"small",11),h(1,"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D"),g())}function M_(i,t){if(i&1&&j(0,S_,2,0,"small",11),i&2){let e=z();U(e.descriptionCtrl.errors!=null&&e.descriptionCtrl.errors.required?0:-1)}}function A_(i,t){if(i&1&&(m(0,"mat-option",13),h(1),g()),i&2){let e=t.$implicit;V("value",e.name),f(),$(e.name)}}function R_(i,t){if(i&1&&(m(0,"mat-form-field",6)(1,"mat-label"),h(2,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"),g(),Y(3,"input",12),m(4,"mat-autocomplete",null,0),Re(6,A_,2,2,"mat-option",13,w_),g()()),i&2){let e=xi(5),n=z();f(3),V("matAutocomplete",e),f(3),Ie(n.filteredCategories())}}function I_(i,t){if(i&1){let e=zt();m(0,"label",14),h(1,"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"),g(),m(2,"input",15),I("change",function(r){Xe(e);let o=z();return Ze(o.onFileSelected(r))}),g()}}function O_(i,t){if(i&1&&Y(0,"img",7),i&2){let e=z();V("src",e.imagePreview(),yt)}}var ga=class i{editingArticle=Oe(null);useBackend=Fe.useBackend;set locked(t){this._locked=t,t?this.form.disable({emitEvent:!1}):this.form.enable({emitEvent:!1})}get locked(){return this._locked}_locked=!1;submitArticle=new N;cancel=new N;fb=c(ia);categoryService=c(rn);imagePreview=M(null);selectedFile=M(null);categories=M([]);filteredCategories=M([]);form=this.fb.nonNullable.group({title:["",[_t.required,_t.minLength(25)]],description:["",[_t.required]],categoryName:[""]});get titleCtrl(){return this.form.controls.title}get descriptionCtrl(){return this.form.controls.description}constructor(){ft(()=>{let t=this.editingArticle();t?(this.form.reset({title:t.title,description:t.description,categoryName:t.categoryName??""}),this.imagePreview.set(t.image||pa),this.selectedFile.set(null)):(this.form.reset({title:"",description:"",categoryName:""}),this.imagePreview.set(null),this.selectedFile.set(null))})}ngOnInit(){this.useBackend&&(this.categoryService.fetchAll().subscribe(t=>{this.categories.set(t),this.filteredCategories.set(t)}),this.form.controls.categoryName.valueChanges.pipe(mt(""),k(t=>this.filterCategories(t??""))).subscribe(t=>this.filteredCategories.set(t)))}onFileSelected(t){let n=t.target.files?.[0]??null;this.selectedFile.set(n),n&&this.imagePreview.set(URL.createObjectURL(n))}onSubmit(){if(this._locked||this.form.invalid)return;let{title:t,description:e,categoryName:n}=this.form.getRawValue(),r=t.trim(),o=e.trim(),a=n.trim(),s=this.editingArticle();s?this.submitArticle.emit(H(p({},s),{title:r,description:o,categoryName:a||void 0,imageFile:this.selectedFile()})):this.submitArticle.emit({id:this.generateId(),title:r,description:o,date:new Date().toISOString().split("T")[0],image:pa,categoryName:a||void 0,imageFile:this.selectedFile()}),this.form.reset({title:"",description:"",categoryName:""}),this.selectedFile.set(null),this.imagePreview.set(null)}onCancel(){this.form.reset({title:"",description:"",categoryName:""}),this.selectedFile.set(null),this.imagePreview.set(null),this.cancel.emit()}filterCategories(t){let e=t.trim().toLowerCase(),n=this.categories();return e?n.filter(r=>r.name.toLowerCase().includes(e)):n}generateId(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-article-form"]],inputs:{editingArticle:[1,"editingArticle"],locked:[2,"locked","locked",ee]},outputs:{submitArticle:"submitArticle",cancel:"cancel"},decls:19,vars:14,consts:[["categoryAuto","matAutocomplete"],[1,"article-form",3,"ngSubmit","formGroup"],["for","article-title"],["type","text","id","article-title","formControlName","title","placeholder","\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438"],["for","article-text"],["id","article-text","formControlName","description","placeholder","\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438"],["appearance","outline",1,"category-field"],["alt","\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",1,"image-preview",3,"src"],[1,"form-buttons"],["type","submit",1,"btn-add",3,"disabled"],["type","button",1,"btn-cancel",3,"click","disabled"],[1,"error"],["matInput","","formControlName","categoryName","placeholder","\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",3,"matAutocomplete"],[3,"value"],["for","article-image"],["type","file","id","article-image","accept","image/jpeg,image/jpg,image/png,image/gif,image/svg+xml",3,"change"]],template:function(e,n){e&1&&(m(0,"h2"),h(1),g(),m(2,"form",1),I("ngSubmit",function(){return n.onSubmit()}),m(3,"label",2),h(4,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),g(),Y(5,"input",3),j(6,E_,2,1),m(7,"label",4),h(8,"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438"),g(),Y(9,"textarea",5),j(10,M_,1,1),j(11,R_,8,1,"mat-form-field",6),j(12,I_,3,0),j(13,O_,1,1,"img",7),m(14,"div",8)(15,"button",9),h(16),g(),m(17,"button",10),I("click",function(){return n.onCancel()}),h(18,"\u041E\u0442\u043C\u0435\u043D\u0430"),g()()()),e&2&&(f(),$(n.editingArticle()?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E"),f(),V("formGroup",n.form),f(3),G("invalid",n.titleCtrl.invalid&&(n.titleCtrl.touched||n.titleCtrl.dirty)),f(),U(n.titleCtrl.invalid&&(n.titleCtrl.touched||n.titleCtrl.dirty)?6:-1),f(3),G("invalid",n.descriptionCtrl.invalid&&(n.descriptionCtrl.touched||n.descriptionCtrl.dirty)),f(),U(n.descriptionCtrl.invalid&&(n.descriptionCtrl.touched||n.descriptionCtrl.dirty)?10:-1),f(),U(n.useBackend?11:-1),f(),U(n.useBackend?12:-1),f(),U(n.imagePreview()?13:-1),f(2),V("disabled",n.locked||n.form.invalid),f(),zn(" ",n.locked?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"," "),f(),V("disabled",n.locked))},dependencies:[ra,na,pi,Jo,ea,Sn,hr,vr,An,fa,Xh,Bl,oa],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;max-height:0;opacity:0;padding:0;transition:max-height .4s ease,opacity .3s ease,padding .4s ease}.visible[_nghost-%COMP%]{max-height:1100px;opacity:1;padding:50px 0 40px}h2[_ngcontent-%COMP%]{margin-bottom:30px}.article-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;max-width:800px}.article-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:var(--gray)}.article-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .article-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid var(--dark);border-radius:8px;padding:14px 16px;font-family:Inter,sans-serif;font-size:15px;color:var(--dark);background:var(--white);outline:none;transition:border-color .2s ease}.article-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .article-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:var(--accent-green)}.article-form[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%], .article-form[_ngcontent-%COMP%]   textarea.invalid[_ngcontent-%COMP%]{border-color:var(--error)}.article-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:var(--error);font-size:12px;line-height:1.3;margin-top:-2px}.article-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical;min-height:140px}.form-buttons[_ngcontent-%COMP%]{display:flex;gap:20px;margin-top:10px}.btn-add[_ngcontent-%COMP%]{flex:1;padding:14px;background:var(--accent-green);color:var(--white);border:none;border-radius:8px;font-family:Inter,sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s ease}.btn-add[_ngcontent-%COMP%]:hover{background:#43a047}.btn-cancel[_ngcontent-%COMP%]{flex:1;padding:14px;background:transparent;color:var(--accent-green);border:1px solid var(--accent-green);border-radius:8px;font-family:Inter,sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s ease,color .2s ease}.btn-cancel[_ngcontent-%COMP%]:hover{background:var(--accent-green);color:var(--white)}.btn-add[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.btn-add[_ngcontent-%COMP%]:disabled:hover{background:var(--accent-green)}.category-field[_ngcontent-%COMP%]{width:100%}.image-preview[_ngcontent-%COMP%]{width:100%;max-width:320px;aspect-ratio:4/3;object-fit:cover;border-radius:12px;margin-top:4px}"]})};var T_=i=>["/blog",i],va=class i{article;remove=new N;edit=new N;onRemove(t){t.stopPropagation(),this.remove.emit(this.article.id)}onEdit(t){t.stopPropagation(),this.edit.emit(this.article)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-blog-article-card"]],inputs:{article:"article"},outputs:{remove:"remove",edit:"edit"},decls:16,vars:14,consts:[[3,"routerLink"],["type","button","aria-label","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"btn-edit",3,"click"],["type","button","aria-label","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E","title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"btn-delete",3,"click"],[3,"src","alt"]],template:function(e,n){e&1&&(m(0,"article",0)(1,"button",1),I("click",function(o){return n.onEdit(o)}),m(2,"mat-icon"),h(3,"edit"),g()(),m(4,"button",2),I("click",function(o){return n.onRemove(o)}),m(5,"mat-icon"),h(6,"delete"),g()(),Y(7,"img",3),m(8,"h3"),h(9),g(),m(10,"small")(11,"time"),h(12),$t(13,"date"),g()(),m(14,"p"),h(15),g()()),e&2&&(V("routerLink",pc(12,T_,n.article.id)),f(7),V("src",n.article.image,yt)("alt",n.article.title),f(2),$(n.article.title),f(2),oe("datetime",n.article.date),f(),$(Gt(13,7,n.article.date,"d MMMM y","","ru")),f(3),$(n.article.description))},dependencies:[ct,Dt,Pt],styles:["[_nghost-%COMP%]{display:flex;min-width:0;height:100%}article[_ngcontent-%COMP%]{cursor:pointer;position:relative;flex:1;display:flex;flex-direction:column;min-height:0;min-width:0}article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:4/3;flex-shrink:0;object-fit:cover;border-radius:12px;margin-bottom:14px;transition:transform .3s ease}article[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.03)}article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700;line-height:1.4;margin-bottom:6px;color:var(--dark);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;word-break:break-word;overflow-wrap:anywhere}article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--gray);font-size:13px;display:block;margin-bottom:6px}article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray);font-size:14px;flex:1;min-height:0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-word;overflow-wrap:anywhere}.btn-delete[_ngcontent-%COMP%], .btn-edit[_ngcontent-%COMP%]{position:absolute;top:10px;width:32px;height:32px;padding:0;border:none;border-radius:50%;background:#2d3142bf;color:var(--white);line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.85);transition:opacity .2s ease,background .2s ease,transform .2s ease;z-index:5}.btn-delete[_ngcontent-%COMP%]{right:10px}.btn-edit[_ngcontent-%COMP%]{right:50px}.btn-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}article[_ngcontent-%COMP%]:hover   .btn-delete[_ngcontent-%COMP%], article[_ngcontent-%COMP%]:hover   .btn-edit[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%]:focus-visible, .btn-edit[_ngcontent-%COMP%]:focus-visible{opacity:1;transform:scale(1)}.btn-delete[_ngcontent-%COMP%]:hover{background:var(--accent-orange);transform:scale(1.08)}.btn-edit[_ngcontent-%COMP%]:hover{background:var(--accent-green);transform:scale(1.08)}"]})};var P_=["dialogEl"],_a=class i{count=Oe(0);open=Oe(!1);close=new N;dialogRef=Rt("dialogEl");constructor(){ft(()=>{let t=this.open(),e=this.dialogRef()?.nativeElement;e&&(t&&!e.open&&e.showModal(),!t&&e.open&&e.close())})}onClose(){this.close.emit()}onBackdropClick(t){t.target===this.dialogRef()?.nativeElement&&this.close.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-stats-dialog"]],viewQuery:function(e,n){e&1&&jn(n.dialogRef,P_,5),e&2&&un()},inputs:{count:[1,"count"],open:[1,"open"]},outputs:{close:"close"},decls:17,vars:1,consts:[["dialogEl",""],[1,"stats-dialog",3,"click","close"],["type","button","aria-label","\u0417\u0430\u043A\u0440\u044B\u0442\u044C",1,"dialog-close",3,"click"],[1,"stats-grid"],[1,"stat-card"]],template:function(e,n){e&1&&(D(0,"dialog",1,0),Ua("click",function(o){return n.onBackdropClick(o)})("close",function(){return n.onClose()}),D(2,"button",2),Ua("click",function(){return n.onClose()}),h(3,"\xD7"),x(),D(4,"h2"),h(5,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"),x(),D(6,"div",3)(7,"div",4)(8,"span"),h(9,"\u0412\u0441\u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0435\u0439:"),x(),D(10,"strong"),h(11),x()(),D(12,"div",4)(13,"span"),h(14,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"),x(),D(15,"strong"),h(16,"0"),x()()()()),e&2&&(f(11),$(n.count()))},styles:[".stats-dialog[_ngcontent-%COMP%]{border:none;border-radius:16px;padding:40px;max-width:480px;width:90%;box-shadow:0 8px 40px #00000026;margin:auto}.stats-dialog[_ngcontent-%COMP%]::backdrop{background:#0006}.stats-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:24px}.dialog-close[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;background:none;border:none;font-size:22px;cursor:pointer;color:var(--gray);line-height:1;transition:color .2s ease}.dialog-close[_ngcontent-%COMP%]:hover{color:var(--dark)}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}.stat-card[_ngcontent-%COMP%]{background:var(--bg-light);border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:8px}.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:var(--gray)}.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:var(--dark)}"]})};var F_=["formEl"],k_=(i,t)=>t.id;function N_(i,t){i&1&&(m(0,"div",3),Y(1,"span",10),m(2,"p",11),h(3,"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),g()())}function L_(i,t){if(i&1){let e=zt();m(0,"app-blog-article-card",13),I("remove",function(r){Xe(e);let o=z(2);return Ze(o.onRemove(r))})("edit",function(r){Xe(e);let o=z(2);return Ze(o.onEdit(r))}),g()}if(i&2){let e=t.$implicit;V("article",e)}}function B_(i,t){if(i&1&&(m(0,"div",4),Re(1,L_,1,1,"app-blog-article-card",12,k_),g()),i&2){let e=z();f(),Ie(e.visibleArticles())}}function V_(i,t){i&1&&(m(0,"p",5),h(1,"\u041D\u0435\u0442 \u0441\u0442\u0430\u0442\u0435\u0439"),g())}function j_(i,t){if(i&1){let e=zt();m(0,"nav",6)(1,"button",14),I("click",function(){Xe(e);let r=z();return Ze(r.onPrevPage())}),h(2," \u041D\u0430\u0437\u0430\u0434 "),g(),m(3,"span",15),h(4),g(),m(5,"button",14),I("click",function(){Xe(e);let r=z();return Ze(r.onNextPage())}),h(6," \u0412\u043F\u0435\u0440\u0451\u0434 "),g()()}if(i&2){let e=z();f(),V("disabled",e.activePage()<=1),f(3),mc("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ",e.activePage()," \u0438\u0437 ",e.totalPages()),f(),V("disabled",e.activePage()>=e.totalPages())}}var U_=1e3,z_=800,ba=class i{store=c(dt);articlesData=c(ai);title=c(Xt);showForm=M(!1);showStats=M(!1);editingArticle=M(null);articlesLoading=M(!0);isSaving=M(!1);formEl=Rt("formEl",{read:B});visibleArticles=de(()=>{let t=this.store.articles();if(Fe.useBackend)return t;let n=(this.store.activePage()-1)*Cn;return t.slice(n,n+Cn)});totalCount=de(()=>Fe.useBackend?this.store.total():this.store.articles().length);totalPages=de(()=>Math.max(1,Math.ceil(this.totalCount()/Cn)));activePage=de(()=>this.store.activePage());ngOnInit(){this.title.setTitle("\u0411\u043B\u043E\u0433 \u2014 Name-folio"),zl(U_).pipe(ne(()=>this.articlesData.fetch()),Et(()=>this.articlesLoading.set(!1))).subscribe(t=>this.apply(t))}onCreate(){this.editingArticle.set(null),this.showForm.set(!0),this.scrollToForm()}onEdit(t){this.editingArticle.set(t),this.showForm.set(!0),this.scrollToForm()}onShowStats(){this.showStats.set(!0)}onCloseStats(){this.showStats.set(!1)}onSave(t){if(this.isSaving())return;this.isSaving.set(!0),(this.editingArticle()?this.articlesData.update(t):this.articlesData.add(t)).pipe(Er(z_),Et(()=>this.isSaving.set(!1))).subscribe(r=>{this.apply(r),this.editingArticle.set(null),this.showForm.set(!1)})}onCancel(){this.editingArticle.set(null),this.showForm.set(!1)}onRemove(t){this.editingArticle()?.id===t&&(this.editingArticle.set(null),this.showForm.set(!1)),this.articlesData.remove(t).subscribe(e=>this.apply(e))}onPrevPage(){let t=this.store.activePage();t<=1||this.articlesData.goToPage(t-1).subscribe(e=>this.apply(e))}onNextPage(){let t=this.store.activePage();t>=this.totalPages()||this.articlesData.goToPage(t+1).subscribe(e=>this.apply(e))}apply(t){this.store.setArticles(t.articles),this.store.setActivePage(t.activePage),this.store.setTotal(t.total)}scrollToForm(){setTimeout(()=>{this.formEl()?.nativeElement?.scrollIntoView({behavior:"smooth",block:"start"})})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-blog"]],viewQuery:function(e,n){e&1&&jn(n.formEl,F_,5,B),e&2&&un()},decls:12,vars:8,consts:[["formEl",""],[1,"container"],[1,"blog-articles"],["role","status","aria-live","polite",1,"articles-loader"],[1,"articles-grid"],[1,"empty-state"],["aria-label","\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0442\u0430\u0442\u0435\u0439",1,"pagination"],[3,"submitArticle","cancel","editingArticle","locked"],[3,"create","stats"],[3,"close","count","open"],["aria-hidden","true",1,"loader-spinner"],[1,"loader-text"],[3,"article"],[3,"remove","edit","article"],["type","button",1,"pagination-btn",3,"click","disabled"],[1,"pagination-info"]],template:function(e,n){e&1&&(m(0,"main",1)(1,"section",2)(2,"h1"),h(3,"\u0421\u0442\u0430\u0442\u044C\u0438"),g(),j(4,N_,4,0,"div",3)(5,B_,3,0,"div",4)(6,V_,2,0,"p",5),j(7,j_,7,4,"nav",6),m(8,"app-article-form",7,0),I("submitArticle",function(o){return n.onSave(o)})("cancel",function(){return n.onCancel()}),g()()(),m(10,"app-admin-panel",8),I("create",function(){return n.onCreate()})("stats",function(){return n.onShowStats()}),g(),m(11,"app-stats-dialog",9),I("close",function(){return n.onCloseStats()}),g()),e&2&&(f(4),U(n.articlesLoading()?4:n.totalCount()>0?5:6),f(3),U(!n.articlesLoading()&&n.totalCount()>0&&n.totalPages()>1?7:-1),f(),G("visible",n.showForm()),V("editingArticle",n.editingArticle())("locked",n.isSaving()),f(3),V("count",n.totalCount())("open",n.showStats()))},dependencies:[va,ga,zo,_a],styles:[".blog-articles[_ngcontent-%COMP%]{padding:60px 0 50px}.blog-articles[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-bottom:30px;color:var(--dark)}.articles-loader[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;min-height:220px;padding:40px 20px;color:var(--gray)}.loader-spinner[_ngcontent-%COMP%]{width:42px;height:42px;border:3px solid var(--light-gray);border-top-color:var(--accent-green);border-radius:50%;animation:_ngcontent-%COMP%_blog-loader-spin .75s linear infinite}.loader-text[_ngcontent-%COMP%]{font-size:15px}@keyframes _ngcontent-%COMP%_blog-loader-spin{to{transform:rotate(360deg)}}.articles-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;align-items:stretch}.empty-state[_ngcontent-%COMP%]{text-align:center;color:var(--gray);font-size:16px;padding:120px 20px}.pagination[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px;margin:30px 0 10px}.pagination-btn[_ngcontent-%COMP%]{padding:10px 20px;border:1px solid var(--accent-green);border-radius:8px;background:var(--white);color:var(--accent-green);font-family:Inter,sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:background .2s ease,color .2s ease}.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--accent-green);color:var(--white)}.pagination-btn[_ngcontent-%COMP%]:disabled{opacity:.45;cursor:not-allowed}.pagination-info[_ngcontent-%COMP%]{font-size:14px;color:var(--gray)}@media(max-width:800px){.articles-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var ya=new b("POST_DATA_SERVICE");var Ca=class i{article=M(null);comments=M([]);setArticle(t){this.article.set(t)}setComments(t){this.comments.set(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var H_=["*"];var $_=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],G_=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],W_=new b("MAT_CARD_CONFIG"),Jh=(()=>{class i{appearance;constructor(){let e=c(W_,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&G("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:H_,decls:1,vars:0,template:function(n,r){n&1&&(De(),Q(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return i})(),em=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var tm=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),nm=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return i})(),im=(()=>{class i{align="start";static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,r){n&2&&G("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),rm=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:G_,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(De($_),Q(0),D(1,"div",0),Q(2,1),x(),Q(3,2))},encapsulation:2,changeDetection:0})}return i})();var wa=class i{comment;ratingChange=new N;onUp(){this.ratingChange.emit(1)}onDown(){this.ratingChange.emit(-1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-post-comment-card"]],inputs:{comment:"comment"},outputs:{ratingChange:"ratingChange"},decls:20,vars:10,consts:[[1,"comment-card"],[1,"comment-text"],[1,"comment-rating"],["mat-icon-button","","aria-label","\u041F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"rating-value"],["mat-icon-button","","aria-label","\u041F\u043E\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"]],template:function(e,n){e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),h(3),g(),m(4,"mat-card-subtitle")(5,"time"),h(6),$t(7,"date"),g()()(),m(8,"mat-card-content")(9,"p",1),h(10),g()(),m(11,"mat-card-actions",2)(12,"button",3),I("click",function(){return n.onUp()}),m(13,"mat-icon"),h(14,"thumb_up"),g()(),m(15,"span",4),h(16),g(),m(17,"button",5),I("click",function(){return n.onDown()}),m(18,"mat-icon"),h(19,"thumb_down"),g()()()()),e&2&&(f(3),$(n.comment.authorName),f(2),oe("datetime",n.comment.date),f(),$(Gt(7,5,n.comment.date,"d MMMM y","","ru")),f(4),$(n.comment.text),f(6),$(n.comment.rating))},dependencies:[Jh,rm,em,nm,tm,im,Dn,Dt,Pt],styles:[".comment-card[_ngcontent-%COMP%]{margin-bottom:16px}.comment-text[_ngcontent-%COMP%]{margin-top:8px;color:var(--gray);font-size:15px;line-height:1.6}.comment-rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:4px 8px 8px}.rating-value[_ngcontent-%COMP%]{font-size:15px;font-weight:700;min-width:28px;text-align:center;color:var(--dark)}"]})};function q_(i,t){i&1&&(m(0,"mat-error"),h(1,"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F \u0438\u043B\u0438 \u043D\u0438\u043A"),g())}function Y_(i,t){i&1&&(m(0,"mat-error"),h(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F"),g())}var Da=class i{submitComment=new N;form=new ia().group({authorName:["",[_t.required]],text:["",[_t.required]]});onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}let t={id:crypto.randomUUID(),authorName:this.form.value.authorName.trim(),text:this.form.value.text.trim(),date:new Date().toISOString(),rating:0};this.submitComment.emit(t),this.form.reset()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-post-comment-form"]],outputs:{submitComment:"submitComment"},decls:17,vars:3,consts:[[1,"comment-form",3,"ngSubmit","formGroup"],[1,"form-title"],["appearance","outline",1,"form-field"],["matInput","","formControlName","authorName","placeholder","\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"],["matInput","","formControlName","text","placeholder","\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F","rows","4"],["mat-flat-button","","type","submit",1,"submit-btn"]],template:function(e,n){e&1&&(m(0,"form",0),I("ngSubmit",function(){return n.onSubmit()}),m(1,"h3",1),h(2,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),g(),m(3,"mat-form-field",2)(4,"mat-label"),h(5,"\u0418\u043C\u044F / \u043D\u0438\u043A"),g(),Y(6,"input",3),j(7,q_,2,0,"mat-error"),g(),m(8,"mat-form-field",2)(9,"mat-label"),h(10,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),g(),Y(11,"textarea",4),j(12,Y_,2,0,"mat-error"),g(),m(13,"button",5)(14,"mat-icon"),h(15,"send"),g(),h(16," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),g()()),e&2&&(V("formGroup",n.form),f(7),U(n.form.controls.authorName.touched&&n.form.controls.authorName.hasError("required")?7:-1),f(5),U(n.form.controls.text.touched&&n.form.controls.text.hasError("required")?12:-1))},dependencies:[ra,na,pi,Jo,ea,Sn,hr,vr,An,kl,fa,Uu,Dt],styles:[".comment-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:28px;background:var(--bg-light);border-radius:12px;margin-top:24px}.form-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--dark);margin-bottom:12px}.form-field[_ngcontent-%COMP%]{width:100%}.submit-btn[_ngcontent-%COMP%]{align-self:flex-start;background-color:var(--accent-green)!important;color:var(--white)!important;gap:6px}"]})};var X_=(i,t)=>t.id;function Z_(i,t){if(i&1&&Y(0,"img",5),i&2){let e=z(2);V("src",e.article().image,yt)("alt",e.article().title)}}function K_(i,t){i&1&&(m(0,"div",6)(1,"mat-icon"),h(2,"image"),g()())}function Q_(i,t){if(i&1){let e=zt();m(0,"app-post-comment-card",20),I("ratingChange",function(r){let o=Xe(e).$implicit,a=z(3);return Ze(a.onCommentRatingChange(o.id,r))}),g()}if(i&2){let e=t.$implicit;V("comment",e)}}function J_(i,t){if(i&1&&Re(0,Q_,1,1,"app-post-comment-card",19,X_),i&2){let e=z(2);Ie(e.comments())}}function eb(i,t){i&1&&(m(0,"p",17),h(1,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!"),g())}function tb(i,t){if(i&1){let e=zt();m(0,"button",2),I("click",function(){Xe(e);let r=z();return Ze(r.onBack())}),m(1,"mat-icon"),h(2,"arrow_back"),g()(),m(3,"article",3)(4,"div",4),j(5,Z_,1,2,"img",5)(6,K_,3,0,"div",6),g(),m(7,"div",7)(8,"small")(9,"time"),h(10),$t(11,"date"),g()()(),m(12,"h1",8),h(13),g(),m(14,"p",9),h(15),g(),m(16,"div",10)(17,"span",11),h(18,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433:"),g(),m(19,"button",12),I("click",function(){Xe(e);let r=z();return Ze(r.onRatingUp())}),m(20,"mat-icon"),h(21,"thumb_up"),g()(),m(22,"span",13),h(23),g(),m(24,"button",14),I("click",function(){Xe(e);let r=z();return Ze(r.onRatingDown())}),m(25,"mat-icon"),h(26,"thumb_down"),g()()()(),m(27,"section",15)(28,"h2",16),h(29,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"),g(),j(30,J_,2,0)(31,eb,2,0,"p",17),m(32,"app-post-comment-form",18),I("submitComment",function(r){Xe(e);let o=z();return Ze(o.onAddComment(r))}),g()()}if(i&2){let e=z();f(5),U(e.article().image?5:6),f(4),oe("datetime",e.article().date),f(),zn(" ",Gt(11,7,e.article().date,"d MMMM y","","ru")," "),f(3),$(e.article().title),f(2),$(e.article().description),f(8),$(e.article().rating??0),f(7),U(e.comments().length>0?30:31)}}var xa=class i{route=c(vt);router=c(Nt);title=c(Xt);store=c(Ca);postData=c(ya);article=this.store.article;comments=this.store.comments;ngOnInit(){let t=this.route.snapshot.paramMap.get("id");if(!t){this.router.navigate(["/blog"]);return}this.postData.fetchPost(t).subscribe(e=>{if(!e){this.router.navigate(["/blog"]);return}this.store.setArticle(e.article),this.store.setComments(e.comments),this.title.setTitle(`${e.article.title} \u2014 Name-folio`)})}onRatingUp(){let t=this.article();t&&this.postData.updateArticleRating(t.id,1).subscribe(e=>{this.store.setArticle(e)})}onRatingDown(){let t=this.article();t&&this.postData.updateArticleRating(t.id,-1).subscribe(e=>{this.store.setArticle(e)})}onCommentRatingChange(t,e){let n=this.article();n&&this.postData.updateCommentRating(n.id,t,e).subscribe(r=>{this.store.setComments(r)})}onAddComment(t){let e=this.article();e&&this.postData.addComment(e.id,t).subscribe(n=>{this.store.setComments(n)})}onBack(){this.router.navigate(["/blog"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-post"]],decls:3,vars:1,consts:[[1,"container"],[1,"post-section"],["mat-icon-button","","aria-label","\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443",1,"back-btn",3,"click"],[1,"post-article"],[1,"post-image-wrap"],[1,"post-image",3,"src","alt"],["aria-hidden","true",1,"post-image-placeholder"],[1,"post-meta"],[1,"post-title"],[1,"post-description"],[1,"post-rating"],[1,"rating-label"],["mat-icon-button","","aria-label","\u041F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"rating-value"],["mat-icon-button","","aria-label","\u041F\u043E\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"comments-section"],[1,"comments-title"],[1,"no-comments"],[3,"submitComment"],[3,"comment"],[3,"ratingChange","comment"]],template:function(e,n){e&1&&(m(0,"main",0)(1,"section",1),j(2,tb,33,12),g()()),e&2&&(f(2),U(n.article()?2:-1))},dependencies:[Dn,Dt,wa,Da,Pt],styles:[".post-section[_ngcontent-%COMP%]{padding:40px 0 60px}.back-btn[_ngcontent-%COMP%]{margin-bottom:20px;color:var(--gray)!important}.post-article[_ngcontent-%COMP%]{margin-bottom:48px}.post-image-wrap[_ngcontent-%COMP%]{width:100%;border-radius:16px;overflow:hidden;margin-bottom:24px;aspect-ratio:16/9;background:var(--bg-light)}.post-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.post-image-placeholder[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--light-gray);font-size:80px}.post-image-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:80px;width:80px;height:80px}.post-meta[_ngcontent-%COMP%]{margin-bottom:8px;color:var(--gray);font-size:14px}.post-title[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:var(--dark);margin-bottom:16px;line-height:1.25}.post-description[_ngcontent-%COMP%]{font-size:16px;color:var(--gray);line-height:1.7;margin-bottom:24px}.post-rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.rating-label[_ngcontent-%COMP%]{font-size:15px;color:var(--gray);margin-right:4px}.rating-value[_ngcontent-%COMP%]{font-size:18px;font-weight:700;min-width:32px;text-align:center;color:var(--dark)}.comments-section[_ngcontent-%COMP%]{border-top:1px solid var(--light-gray);padding-top:32px}.comments-title[_ngcontent-%COMP%]{font-size:26px;font-weight:700;color:var(--dark);margin-bottom:24px}.no-comments[_ngcontent-%COMP%]{color:var(--gray);font-size:15px;padding:20px 0}@media(max-width:800px){.post-title[_ngcontent-%COMP%]{font-size:26px}}"]})};var om=[{path:"",component:Io},{path:"blog",component:ba},{path:"blog/:id",component:xa},{path:"**",redirectTo:""}];var _r=class i{constructor(t,e,n,r){this.http=t;this.store=e;this.mapper=n;this.categoryService=r}pageSize=Cn;fetch(){let t=this.store.activePage()||1;return this.loadPage(t)}add(t){return this.categoryService.resolveCategoryId(t.categoryName).pipe(ne(e=>{let n=this.mapper.toFormData(t,e);return this.http.post(`${Fe.apiUrl}/articles`,n)}),ne(()=>this.loadPage(1)))}update(t){let e=this.store.activePage();return this.categoryService.resolveCategoryId(t.categoryName).pipe(ne(n=>{let r=this.mapper.toFormData(t,n);return this.http.patch(`${Fe.apiUrl}/articles/${t.id}`,r)}),ne(()=>this.loadPage(e)))}remove(t){let e=this.store.activePage();return this.http.delete(`${Fe.apiUrl}/articles/${t}`).pipe(ne(()=>this.loadPage(e)))}goToPage(t){return this.loadPage(t)}loadPage(t){return this.http.get(`${Fe.apiUrl}/articles`,{params:{page:String(t),limit:String(this.pageSize)}}).pipe(ne(e=>{if(t>1&&e.items.length===0&&e.total>0){let n=Math.max(1,Math.ceil(e.total/this.pageSize));if(n!==t)return this.loadPage(n)}return y(this.mapper.toQueryResult(e,t))}))}static \u0275fac=function(e){return new(e||i)(S(Yt),S(dt),S(_i),S(rn))};static \u0275prov=v({token:i,factory:i.\u0275fac})};var am="blog-articles",Vl="blog-post-comments",Ea=class i{fetchPost(t){let e=this.readArticle(t);if(!e)return y(null);let n=this.readComments(t);return y({article:e,comments:n})}addComment(t,e){let n=this.readComments(t),r=[e,...n];return this.writeComments(t,r),y(r)}updateCommentRating(t,e,n){let r=this.readComments(t).map(o=>o.id===e?H(p({},o),{rating:o.rating+n}):o);return this.writeComments(t,r),y(r)}updateArticleRating(t,e){let r=this.readAllArticles().map(a=>a.id===t?H(p({},a),{rating:(a.rating??0)+e}):a);this.writeAllArticles(r);let o=r.find(a=>a.id===t);return y(o)}readArticle(t){return this.readAllArticles().find(n=>n.id===t)??null}readAllArticles(){if(typeof localStorage>"u")return[];try{let t=localStorage.getItem(am);if(!t)return[];let e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}writeAllArticles(t){typeof localStorage>"u"||localStorage.setItem(am,JSON.stringify(t))}readComments(t){if(typeof localStorage>"u")return[];try{let e=localStorage.getItem(Vl);if(!e)return[];let n=JSON.parse(e);return Array.isArray(n[t])?n[t]:[]}catch{return[]}}writeComments(t,e){if(!(typeof localStorage>"u"))try{let n=localStorage.getItem(Vl),r=n?JSON.parse(n):{};r[t]=e,localStorage.setItem(Vl,JSON.stringify(r))}catch{return}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac})};var sm={providers:[ql(),cu(),ss(),Bs(om,Vs({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"})),{provide:ai,useFactory:(i,t)=>Fe.useBackend?t:new Oo(i),deps:[dt,_r]},_r,_i,rn,{provide:ya,useClass:Ea}]};var nb=()=>({exact:!0}),Sa=class i{scrollToContacts(t){t.preventDefault(),document.getElementById("contact")?.scrollIntoView({behavior:"smooth",block:"start"})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-header"]],decls:14,vars:2,consts:[[1,"logo"],["routerLink","/","routerLinkActive","is-active",1,"nav-link",3,"routerLinkActiveOptions"],["routerLink","/blog","routerLinkActive","is-active",1,"nav-link"],["href","/",1,"nav-link",3,"click"]],template:function(e,n){e&1&&(m(0,"header")(1,"nav")(2,"div",0),h(3,"Name-folio"),g(),m(4,"ul")(5,"li")(6,"a",1),h(7,"\u041E\u0431\u043E \u043C\u043D\u0435"),g()(),m(8,"li")(9,"a",2),h(10,"\u0411\u043B\u043E\u0433"),g()(),m(11,"li")(12,"a",3),I("click",function(o){return n.scrollToContacts(o)}),h(13,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),g()()()()()),e&2&&(f(6),V("routerLinkActiveOptions",fc(1,nb)))},dependencies:[ct,Ls],styles:["header[_ngcontent-%COMP%]{padding:20px 60px;border-bottom:1px solid var(--light-gray)}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto}.logo[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--dark)}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px}.nav-link[_ngcontent-%COMP%]{font-size:15px;color:var(--gray);transition:color .3s ease,font-weight .3s ease;padding-bottom:3px}.nav-link[_ngcontent-%COMP%]:hover{font-weight:700;color:var(--dark)}.nav-link.is-active[_ngcontent-%COMP%]{color:var(--accent-green);font-weight:700}@media(max-width:800px){header[_ngcontent-%COMP%]{padding:15px 20px}}"]})};var Ma=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-footer"]],decls:32,vars:0,consts:[["id","contact"],["href","mailto:pl3shkov.m@yandex.ru"],["href","tel:+79997776655"],[1,"social-icons"],["href","#"],["src","https://cdn.simpleicons.org/vk/ffffff","alt","VK","width","24","height","24"],["src","https://cdn.simpleicons.org/telegram/ffffff","alt","Telegram","width","24","height","24"],["src","https://cdn.simpleicons.org/github/ffffff","alt","GitHub","width","24","height","24"],["action","#","method","POST"],["for","email"],["type","email","id","email","name","email","placeholder","\u0412\u0430\u0448 email"],["for","message"],["id","message","name","message","rows","4","placeholder","\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442"],["type","submit"]],template:function(e,n){e&1&&(D(0,"footer",0)(1,"div")(2,"div")(3,"h2"),h(4,"\u0421\u0432\u044F\u0437\u044C"),x(),D(5,"address")(6,"p"),h(7,"Email: "),D(8,"a",1),h(9,"pl3shkov.m@yandex.ru"),x()(),D(10,"p"),h(11,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),D(12,"a",2),h(13,"+7 999 777 66 55"),x()()(),D(14,"p",3)(15,"a",4),fe(16,"img",5),x(),D(17,"a",4),fe(18,"img",6),x(),D(19,"a",4),fe(20,"img",7),x()()(),D(21,"form",8)(22,"label",9),h(23,"Email"),x(),fe(24,"input",10),D(25,"label",11),h(26,"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),x(),fe(27,"textarea",12),D(28,"button",13),h(29,"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"),x()()(),D(30,"small"),h(31,"\xA9 2026 Name-folio"),x()())},styles:["footer[_ngcontent-%COMP%]{background:var(--bg-dark);color:var(--white);padding:60px;margin-top:50px}footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;flex-wrap:wrap;gap:40px}footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:700;margin-bottom:15px;color:var(--white)}footer[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]{font-style:normal;margin-bottom:15px}footer[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;font-size:15px;color:var(--white)}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--accent-green);text-decoration:underline;transition:color .25s}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent-orange)}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;min-width:350px}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:var(--light-gray)}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--gray);border-radius:6px;padding:12px 14px;color:var(--white);font-family:Inter,sans-serif;font-size:14px}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:var(--gray)}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:14px 35px;background:var(--accent-green);color:var(--white);border:none;border-radius:6px;cursor:pointer;font-family:Inter,sans-serif;font-size:15px;font-weight:700;align-self:flex-start;transition:background .3s ease}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#43a047}footer[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{display:block;max-width:1200px;margin:30px auto 0;font-size:13px;color:var(--gray)}.social-icons[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:15px}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--white);text-decoration:none;transition:color .3s}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent-green)}@media(max-width:800px){footer[_ngcontent-%COMP%]{padding:40px 20px}footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:column}footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{min-width:auto}}"]})};var Aa=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-root"]],decls:3,vars:0,template:function(e,n){e&1&&Y(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[Zi,Sa,Ma],encapsulation:2})};$c(fd);ns(Aa,sm).catch(i=>console.error(i));
