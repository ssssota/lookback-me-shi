var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function l(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}function i(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function u(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}function $(t,e,n,s,r,c){if(r){const o=i(e,n,s,c);t.p(o,r)}}function a(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function v(){return g("")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e,n){t.classList[n?"add":"remove"](e)}let w;function k(t){w=t}const L=[],C=[],_=[],M=[],T=Promise.resolve();let H=!1;function E(t){_.push(t)}let q=!1;const S=new Set;function z(){if(!q){q=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];k(e),A(e.$$)}for(k(null),L.length=0;C.length;)C.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];S.has(e)||(S.add(e),e())}_.length=0}while(L.length);for(;M.length;)M.pop()();H=!1,q=!1,S.clear()}}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const N=new Set;let R;function j(){R={r:0,c:[],p:R}}function V(){R.r||s(R.c),R=R.p}function P(t,e){t&&t.i&&(N.delete(t),t.i(e))}function O(t,e,n,s){if(t&&t.o){if(N.has(t))return;N.add(t),R.c.push((()=>{N.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function B(t){t&&t.c()}function G(t,n,c,o){const{fragment:l,on_mount:i,on_destroy:u,after_update:$}=t.$$;l&&l.m(n,c),o||E((()=>{const n=i.map(e).filter(r);u?u.push(...n):s(n),t.$$.on_mount=[]})),$.forEach(E)}function K(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(L.push(t),H||(H=!0,T.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,r,c,o,l,i,u,$=[-1]){const a=w;k(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(a?a.$$.context:[])),callbacks:n(),dirty:$,skip_bound:!1,root:r.target||a.$$.root};u&&u(p.root);let f=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),f&&U(e,t)),n})):[],p.update(),f=!0,s(p.before_update),p.fragment=!!o&&o(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();r.intro&&P(e.$$.fragment),G(e,r.target,r.anchor,r.customElement),z()}k(a)}class X{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(e){let n,s;return{c(){n=m("div"),b(n,"style",s=`transform: scaleX(${e[0]});`),b(n,"class","svelte-1r2otxf")},m(t,e){f(t,n,e)},p(t,[e]){1&e&&s!==(s=`transform: scaleX(${t[0]});`)&&b(n,"style",s)},i:t,o:t,d(t){t&&d(n)}}}function I(t,e,n){let{progress:s=0}=e;return t.$$set=t=>{"progress"in t&&n(0,s=t.progress)},[s]}class Q extends X{constructor(t){super(),W(this,t,I,D,c,{progress:0})}}const F=[];const J=()=>Number(location.hash.substring(1))||1,Y=J(),Z=t=>{const e=new URL(location.href);e.hash=`#${t}`,history.pushState(null,`Page ${t}`,e.href)},tt=(()=>{const{subscribe:e,update:n,set:s}=function(e,n=t){let s;const r=new Set;function o(t){if(c(e,t)&&(e=t,s)){const t=!F.length;for(const t of r)t[1](),F.push(t,e);if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,l=t){const i=[c,l];return r.add(i),1===r.size&&(s=n(o)||t),c(e),()=>{r.delete(i),0===r.size&&(s(),s=null)}}}}(Y);return{subscribe:e,set:s,next:()=>n((t=>{const e=t+1;return Z(e),e})),prev:()=>n((t=>{const e=Math.max(1,t-1);return e!==t&&Z(e),e}))}})();function et(t){let e,n;return{c(){e=m("div"),n=g(t[3]),b(e,"class","page-count svelte-vnpb94")},m(t,s){f(t,e,s),p(e,n)},p(t,e){8&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,t[3])},d(t){t&&d(e)}}}function nt(t){let e,n,c,o,i,g,v,w,k,L;const C=t[5].default,_=l(C,t,t[4],null);let M=!0===t[2]&&et(t);return{c(){e=m("div"),n=m("section"),_&&_.c(),c=h(),o=m("div"),i=h(),g=m("div"),v=h(),M&&M.c(),b(n,"class","slide svelte-vnpb94"),b(o,"class","left svelte-vnpb94"),y(o,"cursor",null!=t[0]),b(g,"class","right svelte-vnpb94"),y(g,"cursor",null!=t[1]),b(e,"class","wrapper svelte-vnpb94")},m(s,l){f(s,e,l),p(e,n),_&&_.m(n,null),p(e,c),p(e,o),p(e,i),p(e,g),p(e,v),M&&M.m(e,null),w=!0,k||(L=[x(o,"click",(function(){r(t[0])&&t[0].apply(this,arguments)})),x(g,"click",(function(){r(t[1])&&t[1].apply(this,arguments)}))],k=!0)},p(n,[s]){t=n,_&&_.p&&(!w||16&s)&&$(_,C,t,t[4],w?u(C,t[4],s,null):a(t[4]),null),1&s&&y(o,"cursor",null!=t[0]),2&s&&y(g,"cursor",null!=t[1]),!0===t[2]?M?M.p(t,s):(M=et(t),M.c(),M.m(e,null)):M&&(M.d(1),M=null)},i(t){w||(P(_,t),w=!0)},o(t){O(_,t),w=!1},d(t){t&&d(e),_&&_.d(t),M&&M.d(),k=!1,s(L)}}}function st(t,e,n){let s;o(t,tt,(t=>n(3,s=t)));let{$$slots:r={},$$scope:c}=e,{onLeftClick:l}=e,{onRightClick:i}=e,{pageCount:u}=e;return t.$$set=t=>{"onLeftClick"in t&&n(0,l=t.onLeftClick),"onRightClick"in t&&n(1,i=t.onRightClick),"pageCount"in t&&n(2,u=t.pageCount),"$$scope"in t&&n(4,c=t.$$scope)},[l,i,u,s,c,r]}window.addEventListener("hashchange",(()=>tt.set(J()))),window.addEventListener("popstate",(()=>tt.set(J())));class rt extends X{constructor(t){super(),W(this,t,st,nt,c,{onLeftClick:0,onRightClick:1,pageCount:2})}}function ct(t){let e,n;const s=t[1].default,r=l(s,t,t[0],null);return{c(){e=m("div"),r&&r.c(),b(e,"class","svelte-u59caw")},m(t,s){f(t,e,s),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&(!n||1&e)&&$(r,s,t,t[0],n?u(s,t[0],e,null):a(t[0]),null)},i(t){n||(P(r,t),n=!0)},o(t){O(r,t),n=!1},d(t){t&&d(e),r&&r.d(t)}}}function ot(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class lt extends X{constructor(t){super(),W(this,t,ot,ct,c,{})}}function it(t){let e,n,s,r,c;return{c(){e=m("h3"),e.innerHTML='<img src="https://raw.githubusercontent.com/kanko-dori/me-shi/main/frontend/static/logo.svg" alt="me-shi" class="svelte-yf38ad"/> とは',n=h(),s=m("p"),s.textContent="知らない人に簡単に紹介",r=h(),c=m("ul"),c.innerHTML="<li>ハッカソン後に参加者とつながるためのWebアプリ</li> \n    <li>名刺をモチーフに交換したりシェアしたり</li> \n    <li>詳しいことは後の人が話します🤥</li> \n    <li><p>ざっくり技術構成</p> \n      <ul><li>フロントエンドAzure+SvelteKit+TailwindCSS</li> \n        <li>バックエンドAWS+AppSync</li></ul></li>",b(e,"class","svelte-yf38ad")},m(t,o){f(t,e,o),f(t,n,o),f(t,s,o),f(t,r,o),f(t,c,o)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(r),t&&d(c)}}}function ut(t){let e,n;return e=new lt({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class $t extends X{constructor(t){super(),W(this,t,null,ut,c,{})}}function at(t){let e,n;const s=t[1].default,r=l(s,t,t[0],null);return{c(){e=m("div"),r&&r.c(),b(e,"class","svelte-ak8gs1")},m(t,s){f(t,e,s),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&(!n||1&e)&&$(r,s,t,t[0],n?u(s,t[0],e,null):a(t[0]),null)},i(t){n||(P(r,t),n=!0)},o(t){O(r,t),n=!1},d(t){t&&d(e),r&&r.d(t)}}}function pt(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class ft extends X{constructor(t){super(),W(this,t,pt,at,c,{})}}function dt(t){let e,n,s;return{c(){e=m("p"),e.innerHTML='<img src="./images/actionsfail.png" alt="actions fail" class="svelte-1mde2zj"/>',n=h(),s=m("p"),s.textContent="ハッカソン最終日 ビルド死亡（享年5日）",b(e,"class","svelte-1mde2zj"),b(s,"class","svelte-1mde2zj")},m(t,r){f(t,e,r),f(t,n,r),f(t,s,r)},d(t){t&&d(e),t&&d(n),t&&d(s)}}}function mt(t){let e,n;return e=new ft({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class gt extends X{constructor(t){super(),W(this,t,null,mt,c,{})}}function ht(t){let e,n,s;return{c(){e=m("h3"),e.innerHTML="個人的な趣味でSvelteKitをチームメイトに書かせ、巻き込んだことを反省しています。\n    <br/>\n    (後悔はしていない)",n=h(),s=m("h1"),s.textContent="みんなもSvelteを使おう！！！！",b(e,"class","svelte-1clpd6n"),b(s,"class","svelte-1clpd6n")},m(t,r){f(t,e,r),f(t,n,r),f(t,s,r)},d(t){t&&d(e),t&&d(n),t&&d(s)}}}function vt(t){let e,n;return e=new ft({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class xt extends X{constructor(t){super(),W(this,t,null,vt,c,{})}}function bt(t){let e,n,s,r,c;return{c(){e=m("p"),e.innerHTML='<img src="./images/firstaccident.png" alt="first accident" class="svelte-pcp961"/>',n=h(),s=m("p"),s.innerHTML="ハッカソン初日 1度目の事故<br/>\n    なぜか動かなくなったのでエラーを無視しようとしている",r=h(),c=m("p"),c.innerHTML="本来ビルド(バンドル)したら\n    <code>node_modules</code>\n    は必要なくなるはず<br/>\n    なのに 一緒にデプロイしないと動かなくなった",b(e,"class","svelte-pcp961"),b(s,"class","svelte-pcp961"),b(c,"class","svelte-pcp961")},m(t,o){f(t,e,o),f(t,n,o),f(t,s,o),f(t,r,o),f(t,c,o)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(r),t&&d(c)}}}function yt(t){let e,n;return e=new ft({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class wt extends X{constructor(t){super(),W(this,t,null,yt,c,{})}}function kt(t){let e,n,s;return{c(){e=m("p"),e.innerHTML='<img src="./images/gitinit.png" alt="first move" class="svelte-3mwpc1"/>',n=h(),s=m("p"),s.textContent="ハッカソン4日前 リポジトリ初期化後すぐにDeploy Pipeline整備",b(e,"class","svelte-3mwpc1"),b(s,"class","svelte-3mwpc1")},m(t,r){f(t,e,r),f(t,n,r),f(t,s,r)},d(t){t&&d(e),t&&d(n),t&&d(s)}}}function Lt(t){let e,n;return e=new ft({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class Ct extends X{constructor(t){super(),W(this,t,null,Lt,c,{})}}function _t(t){let e,n,s,r,c;return{c(){e=m("h3"),e.textContent="誰？",n=h(),s=m("p"),s.innerHTML='チーム <img src="https://raw.githubusercontent.com/kanko-dori/branding/master/logo.svg" alt="閑古鳥" class="svelte-vr7zu8"/> のデザイナ兼フロントエンドエンジニア',r=h(),c=m("p"),c.innerHTML='<img src="./images/me-shi.svg" alt="my me-shi"/>',b(s,"class","team svelte-vr7zu8")},m(t,o){f(t,e,o),f(t,n,o),f(t,s,o),f(t,r,o),f(t,c,o)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(r),t&&d(c)}}}function Mt(t){let e,n;return e=new lt({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class Tt extends X{constructor(t){super(),W(this,t,null,Mt,c,{})}}function Ht(t){let e;return{c(){e=m("div"),e.innerHTML='<p><img src="./images/me-shi.ss.png" alt="me-shi screenshot" class="svelte-gzoa7q"/></p> \n    <p>これをつくった</p>',b(e,"class","svelte-gzoa7q")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function Et(t){let e,n;return e=new ft({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class qt extends X{constructor(t){super(),W(this,t,null,Et,c,{})}}function St(t){let e,n,s,r,c,o,l;return{c(){e=m("p"),e.innerHTML='<img src="./images/nevergiveup.png" alt="never give up" class="svelte-1csqq14"/>',n=h(),s=m("p"),s.textContent="ハッカソン最終日",r=h(),c=m("p"),c.textContent="GraphQLや認証周りの依存が増えた結果バンドルの依存解決に失敗するように",o=h(),l=m("p"),l.innerHTML="<code>NEVER GIVE UP</code>などとよくわからないコミット",b(e,"class","svelte-1csqq14"),b(s,"class","svelte-1csqq14"),b(c,"class","svelte-1csqq14"),b(l,"class","svelte-1csqq14")},m(t,i){f(t,e,i),f(t,n,i),f(t,s,i),f(t,r,i),f(t,c,i),f(t,o,i),f(t,l,i)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(r),t&&d(c),t&&d(o),t&&d(l)}}}function zt(t){let e,n;return e=new ft({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class At extends X{constructor(t){super(),W(this,t,null,zt,c,{})}}function Nt(t){let e,n,s,r,c;return{c(){e=m("p"),e.innerHTML='<img src="./images/npm.png" alt="pnpm to npm" class="svelte-1pns4by"/>',n=h(),s=m("p"),s.innerHTML="先の問題解決にnpmを使わないとダメでは？<br/>\n    →爆速pnpm廃止、npmを使用",r=h(),c=m("p"),c.textContent="キャッシュが効きにくく遅すぎてパイプラインが2分から6分に",b(e,"class","svelte-1pns4by"),b(s,"class","svelte-1pns4by"),b(c,"class","svelte-1pns4by")},m(t,o){f(t,e,o),f(t,n,o),f(t,s,o),f(t,r,o),f(t,c,o)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(r),t&&d(c)}}}function Rt(t){let e,n;return e=new ft({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class jt extends X{constructor(t){super(),W(this,t,null,Rt,c,{})}}function Vt(t){let e,n,s,r,c;return{c(){e=m("h3"),e.textContent="コミット履歴を見て思い出す回",n=h(),s=m("p"),s.innerHTML="リポジトリ公開しました<br/>https://github.com/kanko-dori/me-shi",r=h(),c=m("ul"),c.innerHTML="<li>総コミット数: およそ350 (svg2png-wasmは除く)</li> \n    <li>作業時はリポジトリを分けていたが、ハッカソン後に統合</li>"},m(t,o){f(t,e,o),f(t,n,o),f(t,s,o),f(t,r,o),f(t,c,o)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(r),t&&d(c)}}}function Pt(t){let e,n;return e=new lt({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class Ot extends X{constructor(t){super(),W(this,t,null,Pt,c,{})}}function Bt(t){let e,n,s;return{c(){e=m("h1"),e.textContent="me-shiの裏側",n=h(),s=m("p"),s.textContent="ssssota"},m(t,r){f(t,e,r),f(t,n,r),f(t,s,r)},d(t){t&&d(e),t&&d(n),t&&d(s)}}}function Gt(t){let e,n;return e=new ft({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}class Kt extends X{constructor(t){super(),W(this,t,null,Gt,c,{})}}function Ut(t,e,n){const s=t.slice();return s[4]=e[n],s}function Wt(t){let e,n,s=t[2],r=[];for(let e=0;e<s.length;e+=1)r[e]=It(Ut(t,s,e));const c=t=>O(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=v()},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);f(t,e,s),n=!0},p(t,n){if(4&n){let o;for(s=t[2],o=0;o<s.length;o+=1){const c=Ut(t,s,o);r[o]?(r[o].p(c,n),P(r[o],1)):(r[o]=It(c),r[o].c(),P(r[o],1),r[o].m(e.parentNode,e))}for(j(),o=s.length;o<r.length;o+=1)c(o);V()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)P(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)O(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&d(e)}}}function Xt(t){let e,n,s,r;return e=new rt({props:{onLeftClick:tt.prev,onRightClick:tt.next,$$slots:{default:[Qt]},$$scope:{ctx:t}}}),s=new Q({props:{progress:(t[1]-1)/(t[2].length-1)}}),{c(){B(e.$$.fragment),n=h(),B(s.$$.fragment)},m(t,c){G(e,t,c),f(t,n,c),G(s,t,c),r=!0},p(t,n){const r={};130&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const c={};2&n&&(c.progress=(t[1]-1)/(t[2].length-1)),s.$set(c)},i(t){r||(P(e.$$.fragment,t),P(s.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),O(s.$$.fragment,t),r=!1},d(t){K(e,t),t&&d(n),K(s,t)}}}function Dt(t){let e,n,s;var r=t[4];return r&&(e=new r({})),{c(){e&&B(e.$$.fragment),n=h()},m(t,r){e&&G(e,t,r),f(t,n,r),s=!0},p(t,s){if(r!==(r=t[4])){if(e){j();const t=e;O(t.$$.fragment,1,0,(()=>{K(t,1)})),V()}r?(e=new r({}),B(e.$$.fragment),P(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}},i(t){s||(e&&P(e.$$.fragment,t),s=!0)},o(t){e&&O(e.$$.fragment,t),s=!1},d(t){e&&K(e,t),t&&d(n)}}}function It(t){let e,n;return e=new rt({props:{onLeftClick:void 0,onRightClick:void 0,$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,s){G(e,t,s),n=!0},p(t,n){const s={};128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Qt(t){let e,n,s;var r=t[2][t[1]-1];return r&&(e=new r({})),{c(){e&&B(e.$$.fragment),n=v()},m(t,r){e&&G(e,t,r),f(t,n,r),s=!0},p(t,s){if(r!==(r=t[2][t[1]-1])){if(e){j();const t=e;O(t.$$.fragment,1,0,(()=>{K(t,1)})),V()}r?(e=new r({}),B(e.$$.fragment),P(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}},i(t){s||(e&&P(e.$$.fragment,t),s=!0)},o(t){e&&O(e.$$.fragment,t),s=!1},d(t){t&&d(n),e&&K(e,t)}}}function Ft(t){let e,n,s,r,c,o;const l=[Xt,Wt],i=[];function u(t,e){return t[0]?1:0}return e=u(t),n=i[e]=l[e](t),{c(){n.c(),s=v()},m(n,l){i[e].m(n,l),f(n,s,l),r=!0,c||(o=x(window,"keydown",t[3]),c=!0)},p(t,[r]){let c=e;e=u(t),e===c?i[e].p(t,r):(j(),O(i[c],1,1,(()=>{i[c]=null})),V(),n=i[e],n?n.p(t,r):(n=i[e]=l[e](t),n.c()),P(n,1),n.m(s.parentNode,s))},i(t){r||(P(n),r=!0)},o(t){O(n),r=!1},d(t){i[e].d(t),t&&d(s),c=!1,o()}}}function Jt(t,e,n){let s;o(t,tt,(t=>n(1,s=t)));let{listView:r=!1}=e;const c=[Kt,Tt,qt,$t,Ot,Ct,wt,jt,At,gt,xt];return t.$$set=t=>{"listView"in t&&n(0,r=t.listView)},[r,s,c,t=>{switch(t.code){case"ArrowRight":case"Space":case"Enter":tt.next();break;case"ArrowLeft":tt.prev()}}]}return new class extends X{constructor(t){super(),W(this,t,Jt,Ft,c,{listView:0})}}({target:document.body,props:{listView:"#list"===location.hash}})}();
//# sourceMappingURL=bundle.js.map
