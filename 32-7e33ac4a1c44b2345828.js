(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{910:function(n,a,t){"use strict";t.r(a),t.d(a,"default",function(){return B});var s=t(46),e=t.n(s),p=t(39),o=t.n(p),c=t(771),l=t.n(c),u=t(34),i=t.n(u),r=t(35),k=t.n(r),d=t(36),m=t.n(d),h=t(37),g=t.n(h),f=t(38),v=t.n(f),E=t(0),z=t.n(E),N=t(199),w=t(139),y=function(){var n=function(n){function a(){return i()(this,a),m()(this,g()(a).apply(this,arguments))}return v()(a,n),k()(a,[{key:"render",value:function(){return z.a.createElement("div",null,z.a.createElement(w.f,{title:"Youzan wsc",tooltip:z.a.createElement("span",null,"test"),position:"top-center"}),z.a.createElement("br",null),z.a.createElement(w.f,{className:"test-class",title:"Youzan wsc",position:"top-center",leftContent:z.a.createElement("a",{className:"zent-link",href:"/"},"left content")}),z.a.createElement("br",null),z.a.createElement(w.f,{title:"Youzan wsc",tooltip:z.a.createElement("span",null,"test"),position:"top-center",rightContent:z.a.createElement("a",{className:"zent-link",href:"/"},"right content")}),z.a.createElement("br",null),z.a.createElement(w.f,{className:"test-class",title:"Youzan wsc",tooltip:z.a.createElement("span",null,"test"),position:"top-center",leftContent:z.a.createElement("a",{className:"zent-link",href:"/"},"left content"),rightContent:z.a.createElement("a",{className:"zent-link",href:"/"},"right content")}))}}]),a}(z.a.Component);return z.a.createElement(n,null)};function b(n){return z.a.createElement(n.tag,l()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function C(n){return z.a.createElement(b,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return z.a.createElement(b,{tag:"style",html:n.style})}var Y=function(n){function a(){var n,t;i()(this,a);for(var s=arguments.length,p=new Array(s),c=0;c<s;c++)p[c]=arguments[c];return t=m()(this,(n=g()(a)).call.apply(n,[this].concat(p))),o()(e()(t),"state",{showCode:!1}),o()(e()(t),"toggle",function(){t.setState({showCode:!t.state.showCode})}),t}return v()(a,n),k()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return z.a.createElement("div",{className:"zandoc-react-demo"},z.a.createElement("div",{className:"zandoc-react-demo__preview"},e),z.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},z.a.createElement("div",{className:"zandoc-react-demo__title"},z.a.createElement("p",null,t||"")),z.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&z.a.createElement("pre",{className:"zandoc-react-demo__code"},z.a.createElement(b,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(E.Component),B=function(n){function a(){return i()(this,a),m()(this,g()(a).apply(this,arguments))}return v()(a,n),k()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(N.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return z.a.createElement("div",{className:"zandoc-react-container",key:null},z.a.createElement(_,{style:""}),z.a.createElement(C,{html:'<h2 class="anchor-heading"><a href="#blockheader">¶</a><a href="javascript:void(0)" id="blockheader" class="anchor-point"></a>BlockHeader</h2>\n<p>This is a block header.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),z.a.createElement(Y,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockHeader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n          <span class="token attr-name">leftContent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              left content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          rightContent<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              right content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Youzan wsc<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          leftContent<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              left content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n          rightContent<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              right content\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},z.a.createElement(y)),z.a.createElement(C,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>custom class name</td>\n<td>string</td>\n<td>\'\'</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>title</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td>content of the pop</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>pop position</td>\n<td>string</td>\n<td>\'top-right\'</td>\n<td></td>\n</tr>\n<tr>\n<td>leftContent</td>\n<td>left custom content</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>rightContent</td>\n<td>right custom content</td>\n<td>ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(E.Component)}}]);