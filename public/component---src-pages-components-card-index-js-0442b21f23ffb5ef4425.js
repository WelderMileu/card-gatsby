(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},A=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(A);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(R,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},R=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:A,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,v=e.loading,N=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:j?1:0,transition:L?"opacity "+b+"ms":"none"},o),O="boolean"==typeof h?"lightgray":h,Q={transitionDelay:b+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},L&&Q,{},o,{},A),Y={title:t,alt:this.state.isVisible?"":a,style:z,className:f,itemProp:y};if(m){var G=m,V=g(m);return l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),O&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&Q)}),V.base64&&l.default.createElement(B,{ariaHidden:!0,src:V.base64,spreadProps:Y,imageVariants:G,generateSources:x}),V.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,src:V.tracedSVG,spreadProps:Y,imageVariants:G,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(G),l.default.createElement(R,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:N})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:v},V,{imageVariants:G}))}}))}if(p){var P=p,D=g(p),k=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete k.display,l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},O&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},L&&Q)}),D.base64&&l.default.createElement(B,{ariaHidden:!0,src:D.base64,spreadProps:Y,imageVariants:P,generateSources:x}),D.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,src:D.tracedSVG,spreadProps:Y,imageVariants:P,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(P),l.default.createElement(R,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:N})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:v},D,{imageVariants:P}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:C,sizes:O,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=L;t.default=Q},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},cnGA:function(e,t,a){"use strict";a.r(t);a("0mN4");var r=a("y99y"),i=a("q1tI"),n=a.n(i),s=a("lnJF"),o=a("9eSz"),d=a.n(o);t.default=function(e){var t=r.data.imagem;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"flex flex-col justify-center items-center lg:mr-20 mr-0 mb-10 w-full sm:w-1/2"},n.a.createElement(d.a,{fixed:t.childImageSharp.fixed,className:"w-32 rounded rounded-full object-cover mb-5 p-1 shadow",alt:"menininha"}),n.a.createElement("div",null,n.a.createElement("p",{className:"card-name"},e.title),n.a.createElement("p",{className:"text-green-400"},"SEO da Empresa Criança"))),n.a.createElement("div",{className:"p-2 lg:p-0 lg:w-2/3"},n.a.createElement("div",null,n.a.createElement("p",{className:"text-gray-900 text-base w-full font-sans p-2"},e.text)),n.a.createElement("div",{className:"flex w-full flex-col sm:flex-row"},n.a.createElement(s.default,{style:"outline",content:"Sign",bg:"bg-green-400"}),n.a.createElement(s.default,{style:"outline-none",content:"Sign Out"}))))}},lnJF:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r);t.default=function(e){var t=["btn","focus:outline-none","hover:opacity-50","sm:w-40"],a=[""+e.bg,"text-white"],r=t.concat(a),n=[""+e.bg,"border","border-green-500","text-green-500"],s=t.concat(n);return i.a.createElement("div",{className:"mt-5"},i.a.createElement("button",{type:"button",className:function(){switch(e.style){case"outline":return r.join(" ");case"outline-none":return s.join(" ");default:return null}}()},e.content))}},y99y:function(e){e.exports=JSON.parse('{"data":{"imagem":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQCAwX/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgAB/9oADAMBAAIQAxAAAAGqDqyGm1SqM4DuoDl//8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxIRISL/2gAIAQEAAQUCtGmtqlB1SyjPCl1XKx19A9f/xAAXEQADAQAAAAAAAAAAAAAAAAABAhAx/9oACAEDAQE/ARFwz//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/AYeoo//EABsQAAEEAwAAAAAAAAAAAAAAAAABAhEhECBB/9oACAEBAAY/AkaSi2N6XiNP/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERIUExYf/aAAgBAQABPyGh2RvCFa+B7DdSDjRcmHkp1YhSl8Q3zgjWjuj/2gAMAwEAAgADAAAAECsQwf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAiSyjW/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxBUbIlI3l//xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAxUSGR/9oACAEBAAE/EKqDYrhzE3Y5jNwo3xzS9NcMyGDIos3M0/dayQXNN1fcMFfPd//Z","width":125,"height":125,"src":"/static/cbb03c5c53c1af13a96c242ef3981486/bac10/image.jpg","srcSet":"/static/cbb03c5c53c1af13a96c242ef3981486/bac10/image.jpg 1x,\\n/static/cbb03c5c53c1af13a96c242ef3981486/1b59b/image.jpg 1.5x,\\n/static/cbb03c5c53c1af13a96c242ef3981486/034c8/image.jpg 2x"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-components-card-index-js-0442b21f23ffb5ef4425.js.map