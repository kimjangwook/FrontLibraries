function _(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(z)}function T(t){return typeof t=="function"}function I(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function dt(t,e){return w||(w=document.createElement("a")),w.href=e,t===w.href}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return _;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(K(e,n))}function mt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function yt(t,e,n,i,r,l){if(r){const c=B(e,n,i,l);t.p(c,r)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function $t(t){const e={};for(const n in t)e[n]=!0;return e}function wt(t,e,n){return t.set(n),e}function Et(t){return t&&T(t.destroy)?t.destroy:_}let k=!1;function Q(){k=!0}function U(){k=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:V(1,r,$=>e[n[$]].claim_order,o))-1;i[s]=n[a]+1;const f=a+1;n[f]=s,r=Math.max(f,r)}const l=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);l.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<l.length&&c[s].claim_order>=l[o].claim_order;)o++;const a=o<l.length?l[o]:null;t.insertBefore(c[s],a)}}function Y(t,e){if(k){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){k&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function At(){return C(" ")}function St(){return C("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function D(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:D(t,i,e[i])}function Tt(t,e){for(const n in e)D(t,n,e[n])}function Ct(t,e){Object.keys(e).forEach(n=>{nt(t,n,e[n])})}function nt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:D(t,e,n)}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){rt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function L(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||l.push(u.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Dt(t,e,n){return L(t,e,n,tt)}function Ot(t,e,n){return L(t,e,n,et)}function st(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function qt(t){return st(t," ")}function Mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pt(t,e){t.value=e??""}function zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ht(t,e){return new t(e)}let b;function y(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}function Lt(t){x().$$.on_mount.push(t)}function Ft(t){x().$$.after_update.push(t)}function Rt(t){x().$$.on_destroy.push(t)}function Wt(t,e){return x().$$.context.set(t,e),e}function Gt(t){return x().$$.context.get(t)}function It(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const p=[],P=[],E=[],S=[],F=Promise.resolve();let j=!1;function R(){j||(j=!0,F.then(W))}function Jt(){return R(),F}function v(t){E.push(t)}function Kt(t){S.push(t)}const A=new Set;let h=0;function W(){if(h!==0)return;const t=b;do{try{for(;h<p.length;){const e=p[h];h++,y(e),ct(e.$$)}}catch(e){throw p.length=0,h=0,e}for(y(null),p.length=0,h=0;P.length;)P.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];A.has(n)||(A.add(n),n())}E.length=0}while(p.length);for(;S.length;)S.pop()();j=!1,A.clear(),y(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const N=new Set;let d;function Qt(){d={r:0,c:[],p:d}}function Ut(){d.r||g(d.c),d=d.p}function ot(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Vt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),d.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Xt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Yt(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=e[l];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(n[s]=u[s],r[s]=1);t[l]=u}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Zt(t){return typeof t=="object"&&t!==null?t:{}}function te(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ee(t){t&&t.c()}function ne(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||v(()=>{const c=t.$$.on_mount.map(z).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),l.forEach(v)}function lt(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(p.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,i,r,l,c,u=[-1]){const s=b;y(t);const o=t.$$={fragment:null,ctx:[],props:l,update:_,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(f,$,...O)=>{const q=O.length?O[0]:$;return o.ctx&&r(o.ctx[f],o.ctx[f]=q)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](q),a&&ft(t,f)),$}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){Q();const f=it(e.target);o.fragment&&o.fragment.l(f),f.forEach(Z)}else o.fragment&&o.fragment.c();e.intro&&ot(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),U(),W()}y(s)}class re{$destroy(){lt(this,1),this.$destroy=_}$on(e,n){if(!T(n))return _;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const m=[];function se(t,e){return{subscribe:at(t,e).subscribe}}function at(t,e=_){let n;const i=new Set;function r(u){if(I(t,u)&&(t=u,n)){const s=!m.length;for(const o of i)o[1](),m.push(o,t);if(s){for(let o=0;o<m.length;o+=2)m[o][0](m[o+1]);m.length=0}}}function l(u){r(u(t))}function c(u,s=_){const o=[u,s];return i.add(o),i.size===1&&(n=e(r)||_),u(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:c}}const ce="";let _t="";function oe(t){_t=t}export{te as $,lt as A,Jt as B,ce as C,oe as D,at as E,_t as F,mt as G,G as H,vt as I,jt as J,Et as K,yt as L,bt as M,pt as N,Yt as O,T as P,g as Q,xt as R,re as S,x as T,se as U,gt as V,Xt as W,Wt as X,Rt as Y,Zt as Z,Gt as _,At as a,Bt as a0,Y as a1,Kt as a2,_ as a3,et as a4,Ot as a5,Tt as a6,Ct as a7,ht as a8,kt as a9,wt as aa,It as ab,Pt as ac,$t as ad,dt as ae,Nt as b,qt as c,Ut as d,St as e,ot as f,Qt as g,Z as h,ie as i,Ft as j,tt as k,Dt as l,it as m,D as n,Lt as o,zt as p,C as q,st as r,I as s,Vt as t,Mt as u,P as v,Ht as w,ee as x,ne as y,ut as z};
