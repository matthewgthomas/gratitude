var Pt=Array.isArray,Ft=Array.from,Lt=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Wn=Object.getOwnPropertyDescriptors,Mt=Object.prototype,qt=Array.prototype,Xn=Object.getPrototypeOf;function Ht(n){return typeof n=="function"}const Yt=()=>{};function jt(n){return n()}function nt(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,j=8,en=16,A=32,z=64,W=128,I=256,G=512,h=1024,x=2048,b=4096,k=8192,P=16384,tt=32768,yn=65536,Bt=1<<17,rt=1<<19,wn=1<<20,vn=Symbol("$state"),Ut=Symbol("legacy props"),Vt=Symbol("");function mn(n){return n===this.v}function et(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!et(n,this.v)}function at(n){throw new Error("effect_in_teardown")}function st(){throw new Error("effect_in_unowned_derived")}function lt(n){throw new Error("effect_orphan")}function ut(){throw new Error("effect_update_depth_exceeded")}function Gt(){throw new Error("hydration_failed")}function Kt(n){throw new Error("props_invalid_value")}function $t(){throw new Error("state_descriptors_fixed")}function Zt(){throw new Error("state_prototype_fixed")}function ot(){throw new Error("state_unsafe_local_read")}function it(){throw new Error("state_unsafe_mutation")}let J=!1;function zt(){J=!0}function an(n){return{f:0,v:n,reactions:null,equals:mn,version:0}}function Jt(n){return An(an(n))}function ft(n,t=!1){var e;const r=an(n);return t||(r.equals=Tn),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Qt(n,t=!1){return An(ft(n,t))}function An(n){return i!==null&&i.f&y&&(T===null?Rt([n]):T.push(n)),n}function Wt(n,t){return gn(n,Jn(()=>zn(n))),t}function gn(n,t){return i!==null&&on()&&i.f&(y|en)&&(T===null||!T.includes(n))&&it(),_t(n,t)}function _t(n,t){return n.equals(t)||(n.v=t,n.version=Un(),xn(n,x),on()&&u!==null&&u.f&h&&!(u.f&A)&&(v!==null&&v.includes(n)?(m(u,x),Q(u)):g===null?St([n]):g.push(n))),t}function xn(n,t){var r=n.reactions;if(r!==null)for(var e=on(),a=r.length,s=0;s<a;s++){var l=r[s],f=l.f;f&x||!e&&l===u||(m(l,t),f&(h|I)&&(f&y?xn(l,b):Q(l)))}}const Xt=1,nr=2,tr=4,rr=8,er=16,ar=1,sr=2,lr=4,ur=8,or=16,ir=4,fr=1,_r=2,ct="[",vt="[!",pt="]",Rn={},cr=Symbol();function Sn(n){console.warn("hydration_mismatch")}let S=!1;function vr(n){S=n}let w;function q(n){if(n===null)throw Sn(),Rn;return w=n}function pr(){return q(O(w))}function hr(n){if(S){if(O(w)!==null)throw Sn(),Rn;w=n}}function dr(n=1){if(S){for(var t=n,r=w;t--;)r=O(r);w=r}}function Er(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===pt){if(n===0)return t;n-=1}else(r===ct||r===vt)&&(n+=1)}var e=O(t);t.remove(),t=e}}var pn,ht,In,On;function yr(){if(pn===void 0){pn=window,ht=document;var n=Element.prototype,t=Node.prototype;In=cn(t,"firstChild").get,On=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function nn(n){return In.call(n)}function O(n){return On.call(n)}function wr(n,t){if(!S)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),q(e),e}return q(r),r}function mr(n,t){if(!S){var r=nn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function Tr(n,t=1,r=!1){let e=S?w:n;for(var a;t--;)a=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=X();return e===null?a==null||a.after(l):e.before(l),q(l),l}return q(e),e}function Ar(n){n.textContent=""}function dt(n){var t=y|x;u===null?t|=I:u.f|=wn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:mn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(n){const t=dt(n);return t.equals=Tn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?sn(e):L(e)}}}function Et(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Nn(n){var t,r=u;Z(Et(n));try{Dn(n),t=Vn(n)}finally{Z(r)}return t}function Cn(n){var t=Nn(n),r=(D||n.f&I)&&n.deps!==null?b:h;m(n,r),n.equals(t)||(n.v=t,n.version=Un())}function sn(n){Dn(n),Y(n,0),m(n,P),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){u===null&&i===null&&lt(),i!==null&&i.f&I&&st(),un&&at()}function yt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var a=(n&z)!==0,s=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=N;try{hn(!0),B(l),l.f|=tt}catch(_){throw L(l),_}finally{hn(f)}}else t!==null&&Q(l);var p=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!p&&!a&&e&&(s!==null&&yt(l,s),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(l)}return l}function xr(n){const t=F(j,null,!1);return m(t,h),t.teardown=n,t}function Rr(n){kn();var t=u!==null&&(u.f&A)!==0&&o!==null&&!o.m;if(t){var r=o;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:i})}else{var e=bn(n);return e}}function Sr(n){return kn(),ln(n)}function Ir(n){const t=F(z,n,!0);return()=>{L(t)}}function bn(n){return F(En,n,!1)}function Or(n,t){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ln(()=>{n(),!e.ran&&(e.ran=!0,gn(r.l.r2,!0),Jn(t))})}function Dr(){var n=o;ln(()=>{if(zn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&m(r,b),M(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function ln(n){return F(j,n,!0)}function Nr(n){return wt(n)}function wt(n,t=0){return F(j|en|t,n,!0)}function Cr(n,t=!0){return F(j|A,n,!0,t)}function Pn(n){var t=n.teardown;if(t!==null){const r=un,e=i;dn(!0),$(null);try{t.call(null)}finally{dn(r),$(e)}}}function Fn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function Ln(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;L(r,t),r=e}}function mt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||L(t),t=r}}function L(n,t=!0){var r=!1;if((t||n.f&rt)&&n.nodes_start!==null){for(var e=n.nodes_start,a=n.nodes_end;e!==null;){var s=e===a?null:O(e);e.remove(),e=s}r=!0}Ln(n,t&&!r),Fn(n),Y(n,0),m(n,P);var l=n.transitions;if(l!==null)for(const p of l)p.stop();Pn(n);var f=n.parent;f!==null&&f.first!==null&&Mn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Mn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function kr(n,t){var r=[];qn(n,r,!0),Tt(r,()=>{L(n),t&&t()})}function Tt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var a of n)a.out(e)}else t()}function qn(n,t,r){if(!(n.f&k)){if(n.f^=k,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var a=e.next,s=(e.f&yn)!==0||(e.f&A)!==0;qn(e,t,s?r:!1),e=a}}}function br(n){Hn(n,!0)}function Hn(n,t){if(n.f&k){M(n)&&B(n),n.f^=k;for(var r=n.first;r!==null;){var e=r.next,a=(r.f&yn)!==0||(r.f&A)!==0;Hn(r,a?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let K=!1,tn=[];function Yn(){K=!1;const n=tn.slice();tn=[],nt(n)}function Pr(n){K||(K=!0,queueMicrotask(Yn)),tn.push(n)}function At(){K&&Yn()}function Fr(){throw new Error("invalid_default_snippet")}function gt(n){throw new Error("lifecycle_outside_component")}const jn=0,xt=1;let U=!1,V=jn,H=!1,N=!1,un=!1;function hn(n){N=n}function dn(n){un=n}let R=[],C=0;let i=null;function $(n){i=n}let u=null;function Z(n){u=n}let T=null;function Rt(n){T=n}let v=null,E=0,g=null;function St(n){g=n}let Bn=0,D=!1,o=null;function Un(){return++Bn}function on(){return!J||o!==null&&o.l===null}function M(n){var l,f;var t=n.f;if(t&x)return!0;if(t&b){var r=n.deps,e=(t&I)!==0;if(r!==null){var a;if(t&G){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(n);n.f^=G}for(a=0;a<r.length;a++){var s=r[a];if(M(s)&&Cn(s),e&&u!==null&&!D&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||m(n,h)}return!1}function It(n,t){for(var r=t;r!==null;){if(r.f&W)try{r.fn(n);return}catch{r.f^=W}r=r.parent}throw U=!1,n}function Ot(n){return(n.f&P)===0&&(n.parent===null||(n.parent.f&W)===0)}function fn(n,t,r,e){if(U){if(r===null&&(U=!1),Ot(t))throw n;return}r!==null&&(U=!0);{It(n,t);return}}function Vn(n){var _n;var t=v,r=E,e=g,a=i,s=D,l=T,f=o,p=n.f;v=null,E=0,g=null,i=p&(A|z)?null:n,D=!N&&(p&I)!==0,T=null,o=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!D)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,g=e,i=a,D=s,T=l,o=f}}function Dt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[e]=r[a],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(m(t,b),t.f&(I|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Dt(n,r[e])}function B(n){var t=n.f;if(!(t&P)){m(n,h);var r=u,e=o;u=n;try{t&en?mt(n):Ln(n),Fn(n),Pn(n);var a=Vn(n);n.teardown=typeof a=="function"?a:null,n.version=Bn}catch(s){fn(s,n,r,e||n.ctx)}finally{u=r}}}function Gn(){C>1e3&&(C=0,ut()),C++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=N;N=!0;try{for(var e=0;e<t;e++){var a=n[e];a.f&h||(a.f^=h);var s=[];$n(a,s),Nt(s)}}finally{N=r}}}function Nt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(P|k)))try{M(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mn(e):e.fn=null))}catch(a){fn(a,e,null,e.ctx)}}}function Ct(){if(H=!1,C>1001)return;const n=R;R=[],Kn(n),H||(C=0)}function Q(n){V===jn&&(H||(H=!0,queueMicrotask(Ct)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|A)){if(!(r&h))return;t.f^=h}}R.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var a=r.f,s=(a&A)!==0,l=s&&(a&h)!==0,f=r.next;if(!l&&!(a&k))if(a&j){if(s)r.f^=h;else try{M(r)&&B(r)}catch(c){fn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else a&En&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),$n(p,t)}function Zn(n){var t=V,r=R;try{Gn();const a=[];V=xt,R=a,H=!1,Kn(r);var e=n==null?void 0:n();return At(),(R.length>0||a.length>0)&&Zn(),C=0,e}finally{V=t,R=r}}async function Lr(){await Promise.resolve(),Zn()}function zn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&P){var e=Nn(n);return sn(n),e}if(i!==null){T!==null&&T.includes(n)&&ot();var a=i.deps;v===null&&a!==null&&a[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&u!==null&&u.f&h&&!(u.f&A)&&g.includes(n)&&(m(u,x),Q(u))}else if(r&&n.deps===null)for(var s=n,l=s.parent,f=s;l!==null;)if(l.f&y){var p=l;f=p,l=p.parent}else{var d=l;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=n,M(s)&&Cn(s)),n.v}function Jn(n){const t=i;try{return i=null,n()}finally{i=t}}const kt=~(x|b|h);function m(n,t){n.f=n.f&kt|t}function Mr(n){return Qn().get(n)}function qr(n,t){return Qn().set(n,t),t}function Qn(n){return o===null&&gt(),o.c??(o.c=new Map(bt(o)||void 0))}function bt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Hr(n,t=!1,r){o={p:o,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(o.l={s:null,u:null,r1:[],r2:an(!1)})}function Yr(n){const t=o;if(t!==null){const l=t.e;if(l!==null){var r=u,e=i;t.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];Z(s.effect),$(s.reaction),bn(s.fn)}}finally{Z(r),$(e)}}o=t.p,t.m=!0}return{}}function jr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Xn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wn(r);for(let a in e){const s=e[a].get;if(s)try{s.call(n)}catch{}}}}}export{ht as $,u as A,xr as B,Lt as C,Pt as D,yn as E,Pr as F,yr as G,nn as H,ct as I,O as J,Rn as K,vr as L,q as M,pr as N,pt as O,Sn as P,Gt as Q,Ar as R,Ft as S,Ir as T,X as U,ft as V,gn as W,rt as X,fr as Y,_r as Z,Ut as _,Yr as a,Zn as a0,Lr as a1,Jt as a2,vn as a3,Mt as a4,qt as a5,an as a6,$t as a7,cn as a8,cr as a9,tr as aA,Xt as aB,er as aC,rr as aD,Vt as aE,Wn as aF,en as aG,tt as aH,Ht as aI,ir as aJ,Qt as aK,dr as aL,Or as aM,Dr as aN,Wt as aO,qr as aP,Mr as aQ,Fr as aR,et as aS,Zt as aa,Xn as ab,br as ac,kr as ad,vt as ae,Er as af,bn as ag,ln as ah,Kt as ai,Bt as aj,lr as ak,Tn as al,A as am,z as an,ar as ao,J as ap,sr as aq,ur as ar,gr as as,or as at,gt as au,k as av,_t as aw,qn as ax,Tt as ay,nr as az,wt as b,wr as c,Cr as d,L as e,mr as f,w as g,S as h,Sr as i,Rr as j,o as k,nt as l,zn as m,Yt as n,jt as o,Hr as p,jr as q,hr as r,Tr as s,Nr as t,Jn as u,dt as v,zt as w,$ as x,Z as y,i as z};