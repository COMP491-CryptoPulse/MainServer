(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"40OB":function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return l}));var n=c("KQm4"),r=c("vDqi"),s=c.n(r),o=c("q1tI"),a=c("LcVh"),i=function(e,t,c){s.a.get(a.a+"/api/"+e,{params:t}).then((function(e){c(e.data)}))},l=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(e){return!0},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e){return e},l=Object(o.useState)(e),d=l[0],u=l[1],j=Object(o.useState)(!1),b=j[0],f=j[1],O=Object(o.useMemo)((function(){return Object.values(c)}),[c]);return Object(o.useEffect)((function(){s(O)&&(f(!0),i(t,c,(function(e){u(a(e))})))}),[].concat(Object(n.a)(O),Object(n.a)(r))),Object(o.useEffect)((function(){f(!1)}),[d]),{result:d,isLoading:b}}},KQm4:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c("a3WO");var r=c("BsWD");function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"g/yB":function(e,t,c){"use strict";c.d(t,"a",(function(){return v}));var n=c("nKUr"),r=c("q1tI"),s=c("RW2Z"),o=c("LcVh"),a=c("6lE0"),i=c("rePB"),l=c("ODXe"),d=c("pGKQ");function u(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function j(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?u(Object(c),!0).forEach((function(t){Object(i.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):u(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var b=function(e){var t=e.avgImpact,c=e.impact,s=Object(r.useMemo)((function(){return!isNaN(t)}),[t]),a=Object(d.b)(),i=Object(l.a)(a,2),u=i[0],b=i[1],f=Object(d.c)({isOpen:u,overflowContainer:!1,placement:"bottom-end",auto:!0,possiblePlacements:["top-end"],triggerOffset:0}),O=f.triggerProps,x=f.layerProps,p=f.renderLayer;return Object(n.jsxs)("div",{className:"flex flex-row max-w-8 cursor-default",children:[Object(n.jsxs)("div",j(j(j({},O),b),{},{className:"flex flex-row border border-transparent items-center text-".concat(Object(o.e)(t)),children:[Object(n.jsx)("span",{className:"mr-1",children:s?t.toFixed(1):"?"}),Object(n.jsx)("span",{children:s&&Object(o.f)(t)})]})),u&&s&&p(Object(n.jsx)("div",j(j({className:"tooltip"},x),{},{children:Object(n.jsx)("div",{className:"text-xs flex flex-row space-x-2 py-1 px-2 items-center rounded shadow-lg\n                            bg-".concat("gray-900"," border border-").concat(Object(o.e)(t)),children:c.map((function(e){return Object(n.jsxs)("div",{className:"flex flex-row space-x-1 items-center text-".concat(Object(o.e)(e)),children:[Object(n.jsx)("span",{children:e.toFixed(1)}),Object(n.jsx)("span",{children:Object(o.f)(e)})]})}))})})))]})},f=c("YFqc"),O=c.n(f),x=c("X13+"),p=c("NIcq"),m="gray-500",h="gray-850",v=function(e){var t=e.post,c=Object(r.useState)(!1),i=c[0],l=c[1],d=Object(r.useRef)(null),u=Object(r.useCallback)((function(e){return e>1e3?"red-500":e>500?"green-600":e>200?"green-500":e>100?"green-300":e>80?"yellow-600":e>60?"yellow-500":e>40?"yellow-300":m}),[t]),j=Object(r.useState)(!1),f=j[0],v=j[1];Object(r.useLayoutEffect)((function(){d.current&&d.current.clientHeight<d.current.scrollHeight&&v(!0)}),[d]);var g=Object(r.useMemo)((function(){return f&&!i}),[f,i]);return Object(n.jsxs)(a.a,{badgeColor:Object(o.g)(t.user+"@"+t.source),aligned:!1,children:[Object(n.jsx)(a.a.Left,{children:Object(n.jsxs)("div",{className:"flex flex-col px-4 py-2 w-32",children:[Object(n.jsx)("span",{className:"font-semibold width-50 truncate hover:underline",children:Object(n.jsx)(O.a,{href:"/user-info?user=".concat(t.user,"@").concat(t.source),children:t.user})}),Object(n.jsxs)("div",{className:"py-1 flex flex-row items-center text-xs text-".concat(m),children:[Object(n.jsx)("span",{className:"mr-1",children:Object(o.h)(t.user+"@"+t.source)}),Object(n.jsx)("span",{className:"truncate hover:underline",children:Object(n.jsx)(O.a,{href:"/source-info?source=*@".concat(t.source),children:t.source})})]}),Object(n.jsxs)("div",{className:"flex flex-row items-center text-xs text-".concat(m),children:[Object(n.jsx)("span",{className:"mr-1",children:Object(o.d)(t.coin_type)}),Object(n.jsx)("span",{className:"text-xs text-".concat(m," truncate hover:underline"),children:Object(n.jsx)(O.a,{href:"/coin-info?coin=".concat(t.coin_type),children:t.coin_type.toUpperCase()})})]})]})}),Object(n.jsx)(a.a.Middle,{children:Object(n.jsxs)("div",{className:"flex flex-col justify-between bg-".concat(h," border border-").concat("gray-800"," mx-4 my-2 rounded relative"),children:[Object(n.jsx)("div",{className:"".concat(i?"max-h-48 overflow-scroll":"h-16 overflow-hidden"," px-4 py-2"),ref:d,children:t.content}),g&&Object(n.jsx)("p",{className:"absolute left-0 right-0 bottom-0 w-full h-8 flex flex-col items-center justify-end \n          text-transparent hover:text-white font-semibold bg-gradient-to-t from-".concat(h," \n          ").concat(!i&&"cursor-pointer"),onClick:function(){return l(!i)},children:Object(n.jsx)(x.d,{})})]})}),Object(n.jsx)(a.a.Right,{children:Object(n.jsxs)("div",{className:"flex px-4 py-2 flex-col w-32",children:[t.streamed?Object(n.jsxs)("div",{className:"px-2 py-1 flex flex-row space-x-1 items-center lg:justify-end text-gray-300",children:[Object(n.jsx)("span",{className:"text-sm",children:Object(n.jsx)(p.a,{})}),Object(n.jsx)("span",{className:"text-xs",children:"Streamed"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"px-2 py-1 flex flex-row items-center lg:justify-end text-".concat(u(t.interaction)),children:[Object(n.jsx)("span",{className:"mr-1",children:t.interaction}),Object(n.jsx)(s.a,{})]}),Object(n.jsx)("div",{className:"px-2 flex flex-row lg:justify-end text-".concat(m),children:Object(n.jsx)(b,{avgImpact:t.avg_impact,impact:t.impact})})]}),Object(n.jsx)("div",{className:"flex py-1 items-center flex-row lg:justify-end text-xs text-".concat(m," truncate"),children:Object(n.jsx)("span",{children:Object(o.b)(new Date(1e3*t.time))})})]})})]})}},gbgE:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c("nKUr"),r=c("rePB"),s=c("q1tI"),o=c("40OB"),a=c("0PHq"),i=c("g/yB"),l=c("33Fu");function d(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function u(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?d(Object(c),!0).forEach((function(t){Object(r.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):d(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var j=function(e){var t=e.selectedRange,c=void 0===t?"all":t,d=e.coinType,j=void 0===d?"all":d,b=e.selectedSources,f=void 0===b?"all":b,O=e.sortBy,x=e.sortOrder,p=e.disabled,m=void 0!==p&&p,h=e.onUpdate,v=void 0===h?function(e){}:h,g=Object(s.useState)([]),y=g[0],w=g[1],N=Object(s.useState)(!0),P=N[0],S=N[1],D=Object(s.useState)(!0),k=D[0],C=D[1],E=Object(s.useMemo)((function(){return{source:"all"===f?null:f.join(";"),type:"all"===j?null:j,start:"all"===c?null:c[0],end:"all"===c?null:c[1],sort:O,desc:"descending"===x?1:0}}),[f,j,c,O,x]),B=Object(o.b)([],"posts",E,[],(function(){return!m})),I=B.result,q=B.isLoading;Object(s.useEffect)((function(){I&&(S(50===I.length),C(!1),w(I))}),[I]),Object(s.useEffect)((function(){v(y)}),[y]),Object(s.useEffect)((function(){m&&w([])}),[m]);var K=Object(s.useMemo)((function(){if(!y||0===y.length)return 0;var e=y[y.length-1];return"time"===O?e.time:"interaction"===O?e.interaction:"user"===O?e.user:"impact"===O?e.avg_impact:0}),[y,O]),L=Object(s.useCallback)((function(){P&&(C(!0),Object(o.a)("posts",u(u({},E),{},Object(r.a)({},"from",K)),(function(e){S(50===e.length),w(y.concat(e)),C(!1)})))}),[y,K,P,E,O]);return Object(s.useMemo)((function(){return y.length>0?Object(n.jsxs)("div",{className:"relative",children:[q&&Object(n.jsx)("div",{className:"absolute z-10 w-full h-full",children:Object(n.jsx)(l.a,{className:"animate-spin"})}),Object(n.jsxs)("div",{className:"flex flex-col space-y-2 overflow-y-auto max-h-128 ".concat(q&&"opacity-50"),children:[y.map((function(e){return Object(n.jsx)(i.a,{post:e})})),Object(n.jsx)("div",{className:"flex flex-row justify-center w-full",children:P?Object(n.jsxs)(a.a,{onClick:L,width:"full",size:"baseline",isDisabled:function(){return k},children:[Object(n.jsx)(l.a,{className:"animate-spin mr-2 ".concat(!k&&"invisible")}),"Load more"]}):Object(n.jsx)(a.a,{width:"full",size:"baseline",isDisabled:function(){return!0},textColor:"white",children:"That's all"})})]})]}):c?Object(n.jsx)("div",{className:"mt-2",children:"No new posts to show in the selected range."}):Object(n.jsx)("div",{className:"mt-2",children:"Please select a range from the graph and select your sources from the left panel to see the posts."})}),[y,P,k,q])}},ji1o:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c("nKUr"),r=c("q1tI"),s=c("PRV2"),o=function(e){var t=e.options,c=e.selected,o=e.setSelected,a=void 0===o?function(){}:o,i=Object(r.useMemo)((function(){return t.findIndex((function(e){return e===c}))}),[t,c]),l=Object(r.useCallback)((function(){var e=(i+1)%t.length;a(t[e])}),[i,c]);return t&&c&&a&&Object(n.jsx)("div",{children:Object(n.jsxs)("button",{type:"button",className:"flex z-0 items-center px-2 py-1 rounded-md \n                        bg-".concat("gray-800"," text-").concat("gray-200"," hover:bg-").concat("gray-700"),onClick:l,children:[Object(n.jsx)("span",{children:"descending"===c?Object(n.jsx)(s.e,{}):"ascending"===c?Object(n.jsx)(s.d,{}):null}),Object(n.jsx)("span",{children:c})]})})}},lC1J:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c("nKUr"),r=c("rePB"),s=c("q1tI"),o=c("pGKQ");function a(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function i(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?a(Object(c),!0).forEach((function(t){Object(r.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var l="gray-800",d="gray-700",u="gray-200",j=function(e){var t=e.options,c=e.selected,r=e.setSelected,a=Object(s.useState)(!1),j=a[0],b=a[1],f=Object(o.c)({isOpen:j,onOutsideClick:function(){return b(!1)},placement:"bottom-center",triggerOffset:8}),O=f.triggerProps,x=f.layerProps,p=f.arrowProps,m=f.renderLayer;return t&&c&&r&&Object(n.jsxs)("div",{className:"relative inline-block text-left text-xs",children:[Object(n.jsx)("div",{children:Object(n.jsx)("button",i(i({},O),{},{type:"button",className:"flex items-center px-2 py-1 rounded-md bg-".concat(l," text-").concat(u," hover:bg-").concat(d),onClick:function(){return b(!j)},children:Object(n.jsx)("span",{children:c})}))}),j&&m(Object(n.jsxs)("div",i(i({},x),{},{className:"z-50",children:[Object(n.jsx)("div",{className:"flex flex-col w-24 shadow-lg text-xs text-".concat(u," rounded-lg overflow-hidden"),children:t.filter((function(e){return e!==c})).map((function(e){return Object(n.jsx)("button",{onClick:function(){b(!1),r(e)},className:"px-3 py-2 bg-".concat(l," hover:bg-").concat(d),children:e})}))}),Object(n.jsx)(o.a,i({backgroundColor:"rgb(33,41,54)"},p))]})))]})}},vlZu:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c("nKUr"),r=c("ji1o"),s=c("lC1J"),o=function(e){var t=e.minimal,c=void 0!==t&&t,o=e.sortByState,a=e.sortOrderState,i=e.showPostsState,l=e.sortByOptions,d=void 0===l?["time","interaction","user","impact"]:l,u=e.sortOrderOptions,j=void 0===u?["ascending","descending"]:u,b=e.showPostsOptions,f=void 0===b?["relevant","all"]:b;return Object(n.jsxs)("div",{className:"flex text-xs items-center",children:[Object(n.jsxs)("div",{className:"flex items-center ".concat(!c&&"border-r"," border-gray-780 mr-2 px-2"),children:[Object(n.jsx)("span",{className:"mr-1",children:"sort by"}),Object(n.jsx)(s.a,{options:d,selected:o[0],setSelected:o[1]}),Object(n.jsx)("span",{className:"mx-1",children:"in"}),Object(n.jsx)(r.a,{options:j,selected:a[0],setSelected:a[1]}),Object(n.jsx)("span",{className:"mx-1",children:"order"})]}),!c&&Object(n.jsxs)("div",{className:"flex items-center px-2",children:[Object(n.jsx)("span",{className:"mx-1",children:"show"}),Object(n.jsx)(r.a,{options:f,selected:i[0],setSelected:i[1]}),Object(n.jsx)("span",{className:"mx-1",children:"posts"})]})]})}},y5kw:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var n=c("nKUr"),r=c("q1tI"),s=c("PRV2"),o=function(){return null},a=function(){return null},i=function(){return null},l="transparent",d=function(e){var t=e.children,c=e.collapsable,d=void 0===c||c,u=e.restrictedHeight,j=void 0===u||u,b=e.headerDivisior,f=void 0!==b&&b,O=e.width,x=void 0===O?"full":O,p=t.find((function(e){return e.type===o})),m=t.find((function(e){return e.type===a})),h=t.find((function(e){return e.type===i})),v=Object(r.useState)(!0),g=v[0],y=v[1];return Object(r.useMemo)((function(){return Object(n.jsxs)("div",{className:"text-".concat("gray-100"," text-sm mb-2 w-").concat(x),children:[Object(n.jsxs)("div",{className:"text-".concat("gray-100"," bg-").concat("gray-900"," ").concat(f&&"drop-shadow-md"," ").concat(d&&"cursor-pointer"," flex flex-justify-between ").concat(g?"rounded-t-md":"rounded-md"," py-4 px-5"),onClick:function(){return y(!d||!g)},children:[Object(n.jsx)("div",{className:"font-bold text-md w-full",children:p&&p.props.children}),d&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"flex-grow"}),g?Object(n.jsx)(s.b,{}):Object(n.jsx)(s.a,{})]})]}),g&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"".concat(h?"":"rounded-b border-b"," ").concat(j?"max-h-80":""," overflow-y-auto bg-").concat("gray-900"," border-r border-l border-b border-").concat(l," pb-4 px-5"),children:m&&m.props.children}),h&&Object(n.jsx)("div",{className:"overflow-y-auto bg-".concat("gray-900"," rounded-b-md text-md border-b border-r border-l border-").concat(l," py-2 px-5"),children:h.props.children})]})]})}))};d.Header=o,d.Body=a,d.Footer=i}}]);