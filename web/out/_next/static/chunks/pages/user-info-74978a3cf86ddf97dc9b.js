_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{HUJD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-info",function(){return s("OJpR")}])},OJpR:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));var c=s("nKUr"),n=s("y5kw"),l=(s("vDqi"),s("iVi/"),s("lC1J"),s("g/yB"),s("q1tI")),r=s("rCLJ"),o=s("YFqc"),a=s.n(o),i=s("vU+/"),j=s("HEOa"),d=s("LcVh"),u=s("40OB"),b=s("20a2"),O=s("vlZu"),f=s("gbgE");function h(){Object(j.c)();var e=Object(b.useRouter)(),t=e.query.user;Object(l.useEffect)((function(){t&&t.startsWith("*")&&e.push("/source-info?source="+t)}),[t]);var s=Object(j.d)(),o=s.user,h=(s.isFollowingSource,Object(u.b)(null,"source_stats",{source:t},[o,t],(function(){return null!=t}))),x=Object(l.useState)("interaction"),p=x[0],w=x[1],m=Object(l.useState)("descending"),g=m[0],v=m[1];return t?Object(c.jsxs)("div",{className:"animate-fade-in-down grid grid-cols-12 mt-2 gap-2",children:[Object(c.jsx)("div",{className:"col-start-2 col-span-2",children:Object(c.jsxs)(n.a,{collapsable:!1,children:[Object(c.jsx)(n.a.Header,{children:Object(c.jsxs)("div",{className:"grid grid-cols-1 place-items-center",children:[Object(c.jsx)("span",{className:"text-4xl",children:Object(c.jsx)(r.a,{})}),Object(c.jsx)("span",{className:"mt-2",children:Object(d.h)(t)[0]}),Object(c.jsx)("span",{className:"mt-2 text-xs font-normal hover:underline",children:Object(c.jsx)(a.a,{href:"/source-info?source=*@".concat(Object(d.h)(t)[1]),children:Object(d.h)(t)[1]})}),Object(c.jsxs)("span",{className:"mt-2 font-light",children:[(null===h||void 0===h?void 0:h.num_followers)&&h.num_followers," Followers"]}),Object(c.jsx)("div",{className:"mt-2",children:Object(c.jsx)(i.a,{followType:"source",followTarget:t})})]})}),Object(c.jsx)(n.a.Body,{})]})}),Object(c.jsx)("div",{className:"col-start-4 col-span-7",children:Object(c.jsxs)(n.a,{restrictedHeight:!1,collapsable:!1,children:[Object(c.jsx)(n.a.Header,{children:Object(c.jsxs)("div",{className:"flex items-center flex-justify-between font-normal",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:["Showing posts from"," "]}),Object(c.jsx)("span",{className:"font-semibold",children:t})]}),Object(c.jsx)("span",{class:"flex-grow"}),Object(c.jsx)(O.a,{minimal:!0,sortByState:[p,w],sortOrderState:[g,v],sortByOptions:["time","interaction","impact"]})]})}),Object(c.jsx)(n.a.Body,{children:Object(c.jsx)(f.a,{coinType:"all",selectedRange:"all",selectedSources:[t],sortBy:p,sortOrder:g})})]})})]}):"..."}},"vU+/":function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var c=s("nKUr"),n=s("q1tI"),l=s("HEOa"),r=s("0PHq"),o=function(e){var t=e.followType,s=e.followTarget,o=Object(l.d)(),a=o.user,i=o.updateUser,j=o.isFollowing,d=Object(n.useState)(!1),u=d[0],b=d[1];return Object(n.useEffect)((function(){b(!1)}),[a]),Object(c.jsx)(r.a,{onClick:function(){return function(){b(!0);var e=j(t,s)?"follow/delete":"follow/create";i(e,{type:t,target:s,notify:!1})}()},textColor:j(t,s)?"yellow-400":"green-400",fullWidth:!0,isDisabled:function(){return u},width:24,children:j(t,s)?"Unfollow":"Follow"})}}},[["HUJD",0,2,4,5,6,7,9,8,12,13,1,3,10,11,14]]]);