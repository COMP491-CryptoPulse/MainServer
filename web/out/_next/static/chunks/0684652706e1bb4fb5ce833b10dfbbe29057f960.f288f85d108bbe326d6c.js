(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{Tgqd:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}));var r=e("Lnxd");function o(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"}},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}}]})(t)}function i(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"}},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"}}]})(t)}},"vU+/":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("nKUr"),o=e("q1tI"),i=e("HEOa"),a=e("0PHq"),c=function(t){var n=t.followType,e=t.followTarget,c=Object(i.d)(),l=c.user,u=c.updateUser,s=c.isFollowing,d=Object(o.useState)(!1),f=d[0],w=d[1];return Object(o.useEffect)((function(){w(!1)}),[l]),Object(r.jsx)(a.a,{onClick:function(){return function(){w(!0);var t=s(n,e)?"follow/delete":"follow/create";u(t,{type:n,target:e,notify:!1})}()},textColor:s(n,e)?"yellow-400":"green-400",fullWidth:!0,isDisabled:function(){return f},width:24,children:s(n,e)?"Unfollow":"Follow"})}}}]);