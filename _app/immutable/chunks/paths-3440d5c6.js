function _(){}function W(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function q(){return Object.create(null)}function g(t){t.forEach(P)}function C(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let w;function _t(t,n){return w||(w=document.createElement("a")),w.href=n,t===w.href}function I(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(J(n,e))}function ht(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?W(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,l){if(r){const c=L(n,e,i,l);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function gt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function xt(t){const n={};for(const e in t)n[e]=!0;return n}function $t(t,n,e){return t.set(e),n}function wt(t){return t&&C(t.destroy)?t.destroy:_}let A=!1;function K(){A=!0}function Q(){A=!1}function U(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const o=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:U(1,r,$=>n[e[$]].claim_order,o))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const l=[],c=[];let u=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(l.push(n[s-1]);u>=s;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);l.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<l.length&&c[s].claim_order>=l[o].claim_order;)o++;const a=o<l.length?l[o]:null;t.insertBefore(c[s],a)}}function X(t,n){if(A){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Et(t,n,e){A&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Nt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function At(){return v(" ")}function jt(){return v("")}function kt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function St(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Tt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Ct(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:z(t,i,n[i])}function vt(t,n){Object.keys(n).forEach(e=>{tt(t,e,n[e])})}function tt(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:z(t,n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){et(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||l.push(u.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Dt(t,n,e){return it(t,n,e,Z)}function rt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function Ot(t){return rt(t," ")}function qt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Mt(t,n){t.value=n??""}function Pt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Lt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function zt(t,n){return new t(n)}let b;function y(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}function Bt(t){x().$$.on_mount.push(t)}function Ht(t){x().$$.after_update.push(t)}function Ft(t){x().$$.on_destroy.push(t)}function Rt(t,n){return x().$$.context.set(t,n),n}function Wt(t){return x().$$.context.get(t)}function Gt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const p=[],M=[],E=[],k=[],H=Promise.resolve();let S=!1;function F(){S||(S=!0,H.then(R))}function It(){return F(),H}function T(t){E.push(t)}function Jt(t){k.push(t)}const j=new Set;let h=0;function R(){if(h!==0)return;const t=b;do{try{for(;h<p.length;){const n=p[h];h++,y(n),st(n.$$)}}catch(n){throw p.length=0,h=0,n}for(y(null),p.length=0,h=0;M.length;)M.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];j.has(e)||(j.add(e),e())}E.length=0}while(p.length);for(;k.length;)k.pop()();S=!1,j.clear(),y(t)}function st(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const N=new Set;let d;function Kt(){d={r:0,c:[],p:d}}function Qt(){d.r||g(d.c),d=d.p}function ct(t,n){t&&t.i&&(N.delete(t),t.i(n))}function Ut(t,n,e,i){if(t&&t.o){if(N.has(t))return;N.add(t),d.c.push(()=>{N.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Vt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Xt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=n[l];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(e[s]=u[s],r[s]=1);t[l]=u}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Yt(t){return typeof t=="object"&&t!==null?t:{}}function Zt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function tn(t){t&&t.c()}function nn(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||T(()=>{const c=t.$$.on_mount.map(P).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),l.forEach(T)}function ut(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(p.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function en(t,n,e,i,r,l,c,u=[-1]){const s=b;y(t);const o=t.$$={fragment:null,ctx:[],props:l,update:_,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:n.target||s.$$.root};c&&c(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,$,...D)=>{const O=D.length?D[0]:$;return o.ctx&&r(o.ctx[f],o.ctx[f]=O)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](O),a&&lt(t,f)),$}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){K();const f=nt(n.target);o.fragment&&o.fragment.l(f),f.forEach(Y)}else o.fragment&&o.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),Q(),R()}y(s)}class rn{$destroy(){ut(this,1),this.$destroy=_}$on(n,e){if(!C(e))return _;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const m=[];function sn(t,n){return{subscribe:ft(t,n).subscribe}}function ft(t,n=_){let e;const i=new Set;function r(u){if(G(t,u)&&(t=u,e)){const s=!m.length;for(const o of i)o[1](),m.push(o,t);if(s){for(let o=0;o<m.length;o+=2)m[o][0](m[o+1]);m.length=0}}}function l(u){r(u(t))}function c(u,s=_){const o=[u,s];return i.add(o),i.size===1&&(e=n(r)||_),u(t),()=>{i.delete(o),i.size===0&&(e(),e=null)}}return{set:r,update:l,subscribe:c}}const cn="/FrontLibraries";let at="";function on(t){at=t}export{Zt as $,ut as A,It as B,cn as C,on as D,ft as E,at as F,ht as G,W as H,Ct as I,kt as J,wt as K,pt as L,yt as M,mt as N,Xt as O,C as P,g as Q,gt as R,rn as S,x as T,sn as U,bt as V,Vt as W,Rt as X,Ft as Y,Yt as Z,Wt as _,At as a,Lt as a0,X as a1,Jt as a2,Gt as a3,St as a4,Tt as a5,_ as a6,vt as a7,dt as a8,Nt as a9,$t as aa,Mt as ab,xt as ac,_t as ad,Et as b,Ot as c,Qt as d,jt as e,ct as f,Kt as g,Y as h,en as i,Ht as j,Z as k,Dt as l,nt as m,z as n,Bt as o,Pt as p,v as q,rt as r,G as s,Ut as t,qt as u,M as v,zt as w,tn as x,nn as y,ot as z};
