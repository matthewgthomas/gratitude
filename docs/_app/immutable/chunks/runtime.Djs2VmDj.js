var Pt=Array.isArray,Ft=Array.from,Lt=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Wn=Object.getOwnPropertyDescriptors,Mt=Object.prototype,qt=Array.prototype,Xn=Object.getPrototypeOf;function Ht(n){return typeof n=="function"}const Yt=()=>{};function Ut(n){return n()}function nt(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,U=8,en=16,A=32,z=64,W=128,R=256,G=512,h=1024,x=2048,b=4096,k=8192,P=16384,tt=32768,yn=65536,jt=1<<17,rt=1<<19,wn=1<<20,vn=Symbol("$state"),Bt=Symbol("legacy props"),Vt=Symbol("");function Tn(n){return n===this.v}function et(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!et(n,this.v)}function at(n){throw new Error("effect_in_teardown")}function st(){throw new Error("effect_in_unowned_derived")}function lt(n){throw new Error("effect_orphan")}function ot(){throw new Error("effect_update_depth_exceeded")}function Gt(){throw new Error("hydration_failed")}function Kt(n){throw new Error("props_invalid_value")}function $t(){throw new Error("state_descriptors_fixed")}function Zt(){throw new Error("state_prototype_fixed")}function ut(){throw new Error("state_unsafe_local_read")}function it(){throw new Error("state_unsafe_mutation")}let J=!1;function zt(){J=!0}function an(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Jt(n){return An(an(n))}function ft(n,t=!1){var e;const r=an(n);return t||(r.equals=mn),J&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function Qt(n,t=!1){return An(ft(n,t))}function An(n){return i!==null&&i.f&y&&(m===null?It([n]):m.push(n)),n}function Wt(n,t){return gn(n,Jn(()=>zn(n))),t}function gn(n,t){return i!==null&&un()&&i.f&(y|en)&&(m===null||!m.includes(n))&&it(),_t(n,t)}function _t(n,t){return n.equals(t)||(n.v=t,n.version=Bn(),xn(n,x),un()&&o!==null&&o.f&h&&!(o.f&A)&&(v!==null&&v.includes(n)?(T(o,x),Q(o)):g===null?Ot([n]):g.push(n))),t}function xn(n,t){var r=n.reactions;if(r!==null)for(var e=un(),a=r.length,s=0;s<a;s++){var l=r[s],f=l.f;f&x||!e&&l===o||(T(l,t),f&(h|R)&&(f&y?xn(l,b):Q(l)))}}const Xt=1,nr=2,tr=4,rr=8,er=16,ar=1,sr=2,lr=4,or=8,ur=16,ir=1,fr=2,_r=4,cr=1,vr=2,ct="[",vt="[!",pt="]",In={},pr=Symbol();function On(n){console.warn("hydration_mismatch")}let O=!1;function hr(n){O=n}let w;function q(n){if(n===null)throw On(),In;return w=n}function dr(){return q(S(w))}function Er(n){if(O){if(S(w)!==null)throw On(),In;w=n}}function yr(n=1){if(O){for(var t=n,r=w;t--;)r=S(r);w=r}}function wr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===pt){if(n===0)return t;n-=1}else(r===ct||r===vt)&&(n+=1)}var e=S(t);t.remove(),t=e}}var pn,ht,Rn,Sn;function Tr(){if(pn===void 0){pn=window,ht=document;var n=Element.prototype,t=Node.prototype;Rn=cn(t,"firstChild").get,Sn=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function nn(n){return Rn.call(n)}function S(n){return Sn.call(n)}function mr(n,t){if(!O)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),q(e),e}return q(r),r}function Ar(n,t){if(!O){var r=nn(n);return r instanceof Comment&&r.data===""?S(r):r}return w}function gr(n,t=1,r=!1){let e=O?w:n;for(var a;t--;)a=e,e=S(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=X();return e===null?a==null||a.after(l):e.before(l),q(l),l}return q(e),e}function xr(n){n.textContent=""}function dt(n){var t=y|x;o===null?t|=R:o.f|=wn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:u,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function Ir(n){const t=dt(n);return t.equals=mn,t}function Nn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?sn(e):L(e)}}}function Et(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Dn(n){var t,r=o;Z(Et(n));try{Nn(n),t=Vn(n)}finally{Z(r)}return t}function Cn(n){var t=Dn(n),r=(N||n.f&R)&&n.deps!==null?b:h;T(n,r),n.equals(t)||(n.v=t,n.version=Bn())}function sn(n){Nn(n),Y(n,0),T(n,P),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){o===null&&i===null&&lt(),i!==null&&i.f&R&&st(),on&&at()}function yt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var a=(n&z)!==0,s=o,l={ctx:u,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{hn(!0),j(l),l.f|=tt}catch(_){throw L(l),_}finally{hn(f)}}else t!==null&&Q(l);var p=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!p&&!a&&e&&(s!==null&&yt(l,s),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(l)}return l}function Or(n){const t=F(U,null,!1);return T(t,h),t.teardown=n,t}function Rr(n){kn();var t=o!==null&&(o.f&A)!==0&&u!==null&&!u.m;if(t){var r=u;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:i})}else{var e=bn(n);return e}}function Sr(n){return kn(),ln(n)}function Nr(n){const t=F(z,n,!0);return()=>{L(t)}}function bn(n){return F(En,n,!1)}function Dr(n,t){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ln(()=>{n(),!e.ran&&(e.ran=!0,gn(r.l.r2,!0),Jn(t))})}function Cr(){var n=u;ln(()=>{if(zn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&T(r,b),M(r)&&j(r),t.ran=!1}n.l.r2.v=!1}})}function ln(n){return F(U,n,!0)}function kr(n){return wt(n)}function wt(n,t=0){return F(U|en|t,n,!0)}function br(n,t=!0){return F(U|A,n,!0,t)}function Pn(n){var t=n.teardown;if(t!==null){const r=on,e=i;dn(!0),$(null);try{t.call(null)}finally{dn(r),$(e)}}}function Fn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function Ln(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;L(r,t),r=e}}function Tt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||L(t),t=r}}function L(n,t=!0){var r=!1;if((t||n.f&rt)&&n.nodes_start!==null){for(var e=n.nodes_start,a=n.nodes_end;e!==null;){var s=e===a?null:S(e);e.remove(),e=s}r=!0}Ln(n,t&&!r),Fn(n),Y(n,0),T(n,P);var l=n.transitions;if(l!==null)for(const p of l)p.stop();Pn(n);var f=n.parent;f!==null&&f.first!==null&&Mn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Mn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Pr(n,t){var r=[];qn(n,r,!0),mt(r,()=>{L(n),t&&t()})}function mt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var a of n)a.out(e)}else t()}function qn(n,t,r){if(!(n.f&k)){if(n.f^=k,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var a=e.next,s=(e.f&yn)!==0||(e.f&A)!==0;qn(e,t,s?r:!1),e=a}}}function Fr(n){Hn(n,!0)}function Hn(n,t){if(n.f&k){M(n)&&j(n),n.f^=k;for(var r=n.first;r!==null;){var e=r.next,a=(r.f&yn)!==0||(r.f&A)!==0;Hn(r,a?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let K=!1,tn=[];function Yn(){K=!1;const n=tn.slice();tn=[],nt(n)}function Lr(n){K||(K=!0,queueMicrotask(Yn)),tn.push(n)}function At(){K&&Yn()}function Mr(){throw new Error("invalid_default_snippet")}function gt(n){throw new Error("lifecycle_outside_component")}const Un=0,xt=1;let B=!1,V=Un,H=!1,D=!1,on=!1;function hn(n){D=n}function dn(n){on=n}let I=[],C=0;let i=null;function $(n){i=n}let o=null;function Z(n){o=n}let m=null;function It(n){m=n}let v=null,E=0,g=null;function Ot(n){g=n}let jn=0,N=!1,u=null;function Bn(){return++jn}function un(){return!J||u!==null&&u.l===null}function M(n){var l,f;var t=n.f;if(t&x)return!0;if(t&b){var r=n.deps,e=(t&R)!==0;if(r!==null){var a;if(t&G){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(n);n.f^=G}for(a=0;a<r.length;a++){var s=r[a];if(M(s)&&Cn(s),e&&o!==null&&!N&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||T(n,h)}return!1}function Rt(n,t){for(var r=t;r!==null;){if(r.f&W)try{r.fn(n);return}catch{r.f^=W}r=r.parent}throw B=!1,n}function St(n){return(n.f&P)===0&&(n.parent===null||(n.parent.f&W)===0)}function fn(n,t,r,e){if(B){if(r===null&&(B=!1),St(t))throw n;return}r!==null&&(B=!0);{Rt(n,t);return}}function Vn(n){var _n;var t=v,r=E,e=g,a=i,s=N,l=m,f=u,p=n.f;v=null,E=0,g=null,i=p&(A|z)?null:n,N=!D&&(p&R)!==0,m=null,u=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!N)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,g=e,i=a,N=s,m=l,u=f}}function Nt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[e]=r[a],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(T(t,b),t.f&(R|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Nt(n,r[e])}function j(n){var t=n.f;if(!(t&P)){T(n,h);var r=o,e=u;o=n;try{t&en?Tt(n):Ln(n),Fn(n),Pn(n);var a=Vn(n);n.teardown=typeof a=="function"?a:null,n.version=jn}catch(s){fn(s,n,r,e||n.ctx)}finally{o=r}}}function Gn(){C>1e3&&(C=0,ot()),C++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=D;D=!0;try{for(var e=0;e<t;e++){var a=n[e];a.f&h||(a.f^=h);var s=[];$n(a,s),Dt(s)}}finally{D=r}}}function Dt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(P|k)))try{M(e)&&(j(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mn(e):e.fn=null))}catch(a){fn(a,e,null,e.ctx)}}}function Ct(){if(H=!1,C>1001)return;const n=I;I=[],Kn(n),H||(C=0)}function Q(n){V===Un&&(H||(H=!0,queueMicrotask(Ct)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|A)){if(!(r&h))return;t.f^=h}}I.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var a=r.f,s=(a&A)!==0,l=s&&(a&h)!==0,f=r.next;if(!l&&!(a&k))if(a&U){if(s)r.f^=h;else try{M(r)&&j(r)}catch(c){fn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else a&En&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),$n(p,t)}function Zn(n){var t=V,r=I;try{Gn();const a=[];V=xt,I=a,H=!1,Kn(r);var e=n==null?void 0:n();return At(),(I.length>0||a.length>0)&&Zn(),C=0,e}finally{V=t,I=r}}async function qr(){await Promise.resolve(),Zn()}function zn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&P){var e=Dn(n);return sn(n),e}if(i!==null){m!==null&&m.includes(n)&&ut();var a=i.deps;v===null&&a!==null&&a[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&o!==null&&o.f&h&&!(o.f&A)&&g.includes(n)&&(T(o,x),Q(o))}else if(r&&n.deps===null)for(var s=n,l=s.parent,f=s;l!==null;)if(l.f&y){var p=l;f=p,l=p.parent}else{var d=l;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=n,M(s)&&Cn(s)),n.v}function Jn(n){const t=i;try{return i=null,n()}finally{i=t}}const kt=~(x|b|h);function T(n,t){n.f=n.f&kt|t}function Hr(n){return Qn().get(n)}function Yr(n,t){return Qn().set(n,t),t}function Qn(n){return u===null&&gt(),u.c??(u.c=new Map(bt(u)||void 0))}function bt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Ur(n,t=!1,r){u={p:u,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(u.l={s:null,u:null,r1:[],r2:an(!1)})}function jr(n){const t=u;if(t!==null){const l=t.e;if(l!==null){var r=o,e=i;t.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];Z(s.effect),$(s.reaction),bn(s.fn)}}finally{Z(r),$(e)}}u=t.p,t.m=!0}return{}}function Br(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Xn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wn(r);for(let a in e){const s=e[a].get;if(s)try{s.call(n)}catch{}}}}}export{ht as $,o as A,Or as B,Lt as C,Pt as D,yn as E,Lr as F,Tr as G,nn as H,ct as I,S as J,In as K,hr as L,q as M,dr as N,pt as O,On as P,Gt as Q,xr as R,Ft as S,Nr as T,X as U,ft as V,gn as W,rt as X,cr as Y,vr as Z,Bt as _,jr as a,Zn as a0,qr as a1,Jt as a2,vn as a3,Mt as a4,qt as a5,an as a6,$t as a7,cn as a8,pr as a9,tr as aA,Xt as aB,er as aC,rr as aD,Vt as aE,Wn as aF,en as aG,tt as aH,Ht as aI,ir as aJ,fr as aK,_r as aL,Qt as aM,yr as aN,Dr as aO,Cr as aP,Wt as aQ,Yr as aR,Hr as aS,Mr as aT,et as aU,Zt as aa,Xn as ab,Fr as ac,Pr as ad,vt as ae,wr as af,bn as ag,ln as ah,Kt as ai,jt as aj,lr as ak,mn as al,A as am,z as an,ar as ao,J as ap,sr as aq,or as ar,Ir as as,ur as at,gt as au,k as av,_t as aw,qn as ax,mt as ay,nr as az,wt as b,mr as c,br as d,L as e,Ar as f,w as g,O as h,Sr as i,Rr as j,u as k,nt as l,zn as m,Yt as n,Ut as o,Ur as p,Br as q,Er as r,gr as s,kr as t,Jn as u,dt as v,zt as w,$ as x,Z as y,i as z};
