(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{4194:function(e,t,n){Promise.resolve().then(n.t.bind(n,414,23)),Promise.resolve().then(n.bind(n,74)),Promise.resolve().then(n.bind(n,6512)),Promise.resolve().then(n.bind(n,5496)),Promise.resolve().then(n.bind(n,6654)),Promise.resolve().then(n.bind(n,4998)),Promise.resolve().then(n.bind(n,2445))},74:function(e,t,n){"use strict";n.r(t);var a=n(9268),r=n(6394),o=n.n(r),l=n(6006);let c=e=>{let{src:t,fallback:n,...r}=e,[c,s]=(0,l.useState)(t);return(0,l.useEffect)(()=>{s(t)},[t]),(0,a.jsx)(o(),{...r,src:c,onError:()=>{s(n)}})};t.default=c},2445:function(e,t,n){"use strict";n.r(t);var a=n(9268),r=n(3853),o=n(9754),l=n(6008);let c=e=>{let{title:t,meta_title:n,image:c,description:s,canonical:i,noindex:u}=e,{meta_image:m,meta_author:p,meta_description:d}=r.metadata,{base_url:h}=r.site,g=(0,l.usePathname)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:(0,o.ab)(n||t||r.site.title)}),i&&(0,a.jsx)("link",{rel:"canonical",href:i,itemProp:"url"}),u&&(0,a.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,a.jsx)("meta",{name:"description",content:(0,o.ab)(s||d)}),(0,a.jsx)("meta",{name:"author",content:p}),(0,a.jsx)("meta",{property:"og:title",content:(0,o.ab)(n||t||r.site.title)}),(0,a.jsx)("meta",{property:"og:description",content:(0,o.ab)(s||d)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(h,"/").concat(g.replace("/",""))}),(0,a.jsx)("meta",{name:"twitter:title",content:(0,o.ab)(n||t||r.site.title)}),(0,a.jsx)("meta",{name:"twitter:description",content:(0,o.ab)(s||d)}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(h).concat(c||m)}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(h).concat(c||m)}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})};t.default=c},6512:function(e,t,n){"use strict";n.r(t);var a=n(9268),r=n(6006);let o=e=>{let{title:t,children:n,className:o}=e,[l,c]=(0,r.useState)(!1);return(0,a.jsxs)("div",{className:"accordion ".concat(l&&"active"," ").concat(o),children:[(0,a.jsxs)("button",{className:"accordion-header",onClick:()=>c(!l),children:[t,(0,a.jsx)("svg",{className:"accordion-icon",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:(0,a.jsx)("path",{fill:"currentColor",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,a.jsx)("div",{className:"accordion-content",children:n})]})};t.default=o},4998:function(e,t,n){"use strict";n.r(t);var a=n(9268);t.default=function(e){let{children:t}=e;return(0,a.jsx)("div",{className:"tab-content-panel",children:t})}},6654:function(e,t,n){"use strict";n.r(t);var a=n(9268),r=n(6006);t.default=function(e){let{children:t}=e,[n,o]=(0,r.useState)(0),l=(0,r.useRef)([]),[c,s]=(0,r.useState)(!1);(0,r.useEffect)(()=>{c?l.current[n].focus():s(!0)},[n]);let i=(e,a)=>{"Enter"===e.key||" "===e.key?o(a):"ArrowRight"===e.key?o((n+1)%t.length):"ArrowLeft"===e.key&&o((n-1+t.length)%t.length)};return(0,a.jsxs)("div",{className:"tab",children:[(0,a.jsx)("ul",{className:"tab-nav",role:"tablist",children:t.map((e,t)=>(0,a.jsx)("li",{className:"tab-nav-item ".concat(t===n&&"active"),role:"tab",tabIndex:t===n?0:-1,onClick:()=>o(t),onKeyDown:e=>i(e,t),ref:e=>l.current[t]=e,children:e.props.name},t))}),t.map((e,t)=>(0,a.jsx)("div",{className:"tab-content ".concat(t===n?"block":"hidden"),children:e.props.children},t))]})}},5496:function(e,t,n){"use strict";n.r(t);var a=n(9268),r=n(4695);n(217);let o=e=>{let{id:t,title:n,...o}=e;return(0,a.jsx)(r.Z,{wrapperClass:"yt-lite rounded-lg",id:t,title:n,...o})};t.default=o},9754:function(e,t,n){"use strict";n.d(t,{OI:function(){return c},ab:function(){return s},gI:function(){return l},lV:function(){return o}});var a=n(1446),r=n(8037);r.TU.use({mangle:!1,headerIds:!1});let o=e=>(0,a.o)(e),l=(e,t)=>({__html:t?r.TU.parse(e):r.TU.parseInline(e)}),c=e=>e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()}),s=e=>{let t=e.replace(/<\/?[^>]+(>|$)/gm,""),n=t.replace(/[\r\n]\s*[\r\n]/gm,""),a=i(n);return a},i=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},217:function(){},4695:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(6006),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function o(e){var t=a.useState(!1),n=t[0],o=t[1],l=a.useState(!1),c=l[0],s=l[1],i=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,p=e.poster||"hqdefault",d="&"+e.params,h=e.muted?"&mute=1":"",g=e.announce||"Watch",f=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+u+"/"+p+"."+f:"https://i.ytimg.com/"+b+"/"+i+"/"+p+"."+f),v=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var w=e.playlist?v+"/embed/videoseries?autoplay=1"+h+"&list="+i+d:v+"/embed/"+i+"?autoplay=1&state=1"+h+d,x=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,_=e.aspectHeight||9,j=e.aspectWidth||16,E=e.iframeClass||"",C=e.playerClass||"lty-playbtn",N=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},I=e.rel?"prefetch":"preload";return a.useEffect(function(){c&&P()},[c]),a.createElement(a.Fragment,null,a.createElement("link",{rel:I,href:y,as:"image"}),a.createElement(a.Fragment,null,n&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:v}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){n||o(!0)},onClick:function(){c||s(!0)},className:N+" "+(c?x:""),"data-title":m,style:r({backgroundImage:"url("+y+")"},{"--aspect-ratio":_/j*100+"%"})},a.createElement("button",{type:"button",className:C,"aria-label":g+" "+m}),c&&a.createElement("iframe",{className:E,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:w})))}},3853:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"PromptMarket","base_url":"https://nextplate.netlify.app","base_path":"/","trailing_slash":false,"favicon":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo-darkmode.png","logo_width":"150","logo_height":"27","logo_text":"PromptMarket"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"contact_form_action":"#","copyright":"IT Heyoom"},"navigation_button":{"enable":false,"label":"Get Started","link":"https://github.com/zeon-studio/nextplate"},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"아이티혜윰","meta_image":"/images/og-image.png","meta_description":"고민하시는 프롬프트를 프롬프트 엔지니어의 도움으로 빠르고 정확하게 제작해 드립니다."}}')}},function(e){e.O(0,[458,414,394,667,139,744],function(){return e(e.s=4194)}),_N_E=e.O()}]);