(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{897:function(n,a,t){"use strict";t.r(a),t.d(a,"default",function(){return x});var e=t(34),s=t.n(e),o=t(35),c=t.n(o),p=t(36),l=t.n(p),r=t(37),i=t.n(r),u=t(46),d=t.n(u),k=t(38),h=t.n(k),m=t(39),f=t.n(m),g=t(771),v=t.n(g),y=t(0),b=t.n(y),E=t(199),z=t(139),_=function(){return b.a.createElement("div",null,b.a.createElement(z.W,{href:"https://youzan.com",target:"_blank"},"Index"),b.a.createElement(z.W,{href:"https://youzan.com",disabled:!0},"Index"))};function w(n){return b.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return b.a.createElement(w,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function L(n){return b.a.createElement(w,{tag:"style",html:n.style})}var C=function(n){function a(){var n,t;s()(this,a);for(var e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return t=l()(this,(n=i()(a)).call.apply(n,[this].concat(o))),f()(d()(t),"state",{showCode:!1}),f()(d()(t),"toggle",function(){t.setState({showCode:!t.state.showCode})}),t}return h()(a,n),c()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,e=a.src,s=a.children;return b.a.createElement("div",{className:"zandoc-react-demo"},b.a.createElement("div",{className:"zandoc-react-demo__preview"},s),b.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.a.createElement("div",{className:"zandoc-react-demo__title"},b.a.createElement("p",null,t||"")),b.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.a.createElement("pre",{className:"zandoc-react-demo__code"},b.a.createElement(w,{tag:"code",html:e,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),x=function(n){function a(){return s()(this,a),l()(this,i()(a).apply(this,arguments))}return h()(a,n),c()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(E.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(L,{style:".zent-link {\n    margin-left: 10px;\n  }"}),b.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#link">¶</a><a href="javascript:void(0)" id="link" class="anchor-point"></a>Link</h2>\n<p>Link is a wrapper around native <code>a</code> tag, with an option to disable it.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.a.createElement(C,{title:"Link",id:"Demo1basic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Index<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n      Index\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(_)),b.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Supports all props in <code>&#x3C;a></code>.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>Link is disabled</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(y.Component)}}]);