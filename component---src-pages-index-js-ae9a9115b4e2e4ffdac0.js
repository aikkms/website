(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(200),l=a(201),s=a(202),c=a(149),o=a(150),u=a(156),d=a(151),m=a.n(d),p=a(164),v=a.n(p),h=a(199),f=a.n(h),E=a(168),g=a.n(E),x=a(166),b=Object(x.a)("carousel-caption",{Component:"div"}),y=Object(x.a)("carousel-item"),I=a(178);var N=a(175),k=a(153),w=function(e){return r.a.Children.toArray(e).filter(r.a.isValidElement).length},S={as:"div",slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},C=function(e){function t(t,a){var n;return(n=e.call(this,t,a)||this).handleSlideEnd=function(){var e=n._pendingIndex;n._isSliding=!1,n._pendingIndex=null,null!=e?n.to(e):n.cycle()},n.handleMouseOut=function(){n.cycle()},n.handleMouseOver=function(){n.props.pauseOnHover&&n.pause()},n.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),n.handlePrev(e);break;case"ArrowRight":e.preventDefault(),n.handleNext(e)}},n.handleNextWhenVisible=function(){n.isUnmounted||document.hidden||"hidden"===v()(n.carousel.current,"visibility")||n.handleNext()},n.handleNext=function(e){if(!n._isSliding){var t=n.props,a=t.wrap,r=t.activeIndex+1;if(r>w(n.props.children)-1){if(!a)return;r=0}n.select(r,e,"next")}},n.handlePrev=function(e){if(!n._isSliding){var t=n.props,a=t.wrap,r=t.activeIndex-1;if(r<0){if(!a)return;r=w(n.props.children)-1}n.select(r,e,"prev")}},n.state={prevClasses:"",currentClasses:"active"},n.isUnmounted=!1,n.carousel=r.a.createRef(),n}Object(u.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var a=t.activeIndex;if(e.activeIndex!==a){var n=w(e.children)-1,r=Math.max(0,Math.min(e.activeIndex,n));return{direction:0===r&&a>=n||a<=r?"next":"prev",previousActiveIndex:a,activeIndex:r}}return null},a.componentDidUpdate=function(e,t){var a=this,n=this.props,r=n.bsPrefix,i=n.slide,l=n.onSlideEnd;if(i&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var s,c,o=this.state,u=o.activeIndex,d=o.direction;"next"===d?(s=r+"-item-next",c=r+"-item-left"):"prev"===d&&(s=r+"-item-prev",c=r+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:s},function(){var e=a.carousel.current.children[u];Object(N.a)(e),a.safeSetState({prevClasses:m()("active",c),currentClasses:m()(s,c)},function(){return f.a.end(e,function(){a.safeSetState({prevClasses:"",currentClasses:"active"},a.handleSlideEnd),l&&l()})})})}},a.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},a.safeSetState=function(e,t){var a=this;this.isUnmounted||this.setState(e,function(){return!a.isUnmounted&&t()})},a.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},a.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},a.to=function(e,t){var a=this.props.children;e<0||e>w(a)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},a.select=function(e,t,a){var n=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout(function(){clearTimeout(n.timeout);var r=n.props,i=r.activeIndex,l=r.onSelect;e===i||n._isSliding||n.isUnmounted||l(e,a||(e<i?"prev":"next"),t)},50)},a.renderControls=function(e){var t=this.props.bsPrefix,a=e.wrap,n=e.children,i=e.activeIndex,l=e.prevIcon,s=e.nextIcon,c=e.prevLabel,o=e.nextLabel,u=w(n);return[(a||0!==i)&&r.a.createElement(I.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},l,c&&r.a.createElement("span",{className:"sr-only"},c)),(a||i!==u-1)&&r.a.createElement(I.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},s,o&&r.a.createElement("span",{className:"sr-only"},o))]},a.renderIndicators=function(e,t){var a=this,n=this.props.bsPrefix,i=[];return function(e,t){var a=0;r.a.Children.forEach(e,function(e){r.a.isValidElement(e)&&t(e,a++)})}(e,function(e,n){i.push(r.a.createElement("li",{key:n,className:n===t?"active":null,onClick:function(e){return a.to(n,e)}})," ")}),r.a.createElement("ol",{className:n+"-indicators"},i)},a.render=function(){var e=this.props,t=e.as,a=e.bsPrefix,i=e.slide,l=e.fade,s=e.indicators,u=e.controls,d=e.wrap,p=e.prevIcon,v=e.prevLabel,h=e.nextIcon,f=e.nextLabel,E=e.className,g=e.children,x=e.keyboard,b=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(o.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),y=this.state,I=y.activeIndex,N=y.previousActiveIndex,k=y.prevClasses,w=y.currentClasses;return r.a.createElement(t,Object(c.a)({},b,{className:m()(E,a,i&&"slide",l&&a+"-fade"),onKeyDown:x?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),s&&this.renderIndicators(g,I),r.a.createElement("div",{className:a+"-inner",ref:this.carousel},function(e,t){var a=0;return r.a.Children.map(e,function(e){return r.a.isValidElement(e)?t(e,a++):e})}(g,function(e,t){var r=t===I,i=t===N;return Object(n.cloneElement)(e,{className:m()(e.props.className,a+"-item",r&&w,i&&k)})})),u&&this.renderControls({wrap:d,children:g,activeIndex:I,prevIcon:p,prevLabel:v,nextIcon:h,nextLabel:f}))},t}(r.a.Component);C.defaultProps=S;var P=Object(k.a)(g()(C,{activeIndex:"onSelect"}),"carousel");P.Caption=b,P.Item=y;var M=P,O=function(){return r.a.createElement(M,null,r.a.createElement(M.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://source.unsplash.com/JTgE6KDJ2_Q/800x400",alt:"First slide"}),r.a.createElement(M.Caption,null,r.a.createElement("div",{style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8"}}," ",r.a.createElement("h3",null,"Movement in Tiptur, Karnataka"),r.a.createElement("p",null,"Sep 3-2018, Massive convention about demanding proper relief for victims of NH 206")))),r.a.createElement(M.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://source.unsplash.com/5yRqIhhGPgk/800x400",alt:"First slide"}),r.a.createElement(M.Caption,null,r.a.createElement("div",{style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8"}}," ",r.a.createElement("h3",null,"Movement in Tiptur, Karnataka"),r.a.createElement("p",null,"Sep 3-2018, Massive convention about demanding proper relief for victims of NH 206")))),r.a.createElement(M.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://source.unsplash.com/tu3xTNWlZU4/800x400",alt:"First slide"}),r.a.createElement(M.Caption,null,r.a.createElement("div",{style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8"}}," ",r.a.createElement("h3",null,"Protest - Moradabad UP"),r.a.createElement("p",null,"Jun 17-2018, Protest against Land Acquisition Amendment act and Anti Farmers' policies")))),r.a.createElement(M.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://source.unsplash.com/LDtPsIQI2rc/800x400",alt:"First slide"}),r.a.createElement(M.Caption,null,r.a.createElement("div",{style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8"}}," ",r.a.createElement("h3",null,"Protest - Panchakula, Haryana"),r.a.createElement("p",null,"13 Mar-2018, Vidhan Sabha Protest at Panchakula")))),r.a.createElement(M.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://source.unsplash.com/I1PjZMgc_Yo/800x400",alt:"First slide"}),r.a.createElement(M.Caption,null,r.a.createElement("div",{style:{backgroundColor:"rgb(32, 35, 42)",padding:"8px",opacity:".8"}}," ",r.a.createElement("h3",null,"Protest - Gubbi, Karnataka"),r.a.createElement("p",null,"25 Jul-2018, Protest against NH 206")))))},_=a(161),T=a(159);t.default=function(){return r.a.createElement(_.a,{pageInfo:{pageName:"index"}},r.a.createElement(T.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),r.a.createElement(i.a,{className:"text-center"},r.a.createElement(l.a,null,r.a.createElement(s.a,{md:{span:10,offset:1}},r.a.createElement(O,null)))))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(154);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},157:function(e){e.exports={data:{site:{siteMetadata:{title:"All India Kisan Khet Mazdoor Sanghathan"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(55),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(167),o=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},160:function(e){e.exports={data:{site:{siteMetadata:{title:"All India Kisan Khet Mazdoor Sanghathan",description:"",author:""}}}}},161:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),l=a(152),s=(a(144),a(200)),c=a(201),o=a(202),u=a(4),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#20232a"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"},className:"row align-top"},i.a.createElement("img",{alt:"",src:"https://source.unsplash.com/SOUXjk2v2VU/50x50",className:"d-inline-block align-top",style:{marginRight:"10px"}}),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:a.n(u).a.string},d.defaultProps={siteTitle:""};var m=d,p=a(204),v=a(203),h=function(e){var t=e.pageInfo;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{variant:"dark",expand:"lg",id:"site-navbar",style:{backgroundColor:"rgb(170, 0, 0)"}},i.a.createElement(l.a,{to:"/",className:"link-no-style"},i.a.createElement("img",{alt:"",src:"https://source.unsplash.com/SOUXjk2v2VU/30x30",width:"30",height:"30",className:"d-inline-block align-top"})," ",i.a.createElement(p.a.Brand,{as:"span"},"AIKKMS")),i.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(v.a,{className:"mr-auto",activeKey:t&&t.pageName},i.a.createElement(l.a,{to:"/about",className:"link-no-style"},i.a.createElement(v.a.Link,{as:"span",eventKey:"about"},"About"))))))};t.a=function(e){var t=e.children,a=e.pageInfo;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{fluid:!0,className:"px-0 main",style:{marginBottom:"40px"}},i.a.createElement(c.a,{noGutters:!0,className:"justify-content-center"},i.a.createElement(o.a,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}))),i.a.createElement(h,{pageInfo:a}),i.a.createElement(c.a,{noGutters:!0},i.a.createElement(o.a,null,i.a.createElement(s.a,{className:"mt-5"},i.a.createElement("main",null,t))))),i.a.createElement(s.a,{fluid:!0,className:"px-0"},i.a.createElement(c.a,{noGutters:!0},i.a.createElement(o.a,{className:"footer-col"},i.a.createElement("footer",null,i.a.createElement("span",null))))))},data:n})}},199:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r=n(a(174));t.end=r.default;var i=n(a(165));t.properties=i.default;var l={end:r.default,properties:i.default};t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-ae9a9115b4e2e4ffdac0.js.map