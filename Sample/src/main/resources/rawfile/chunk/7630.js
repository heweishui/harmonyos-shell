/*! For license information please see 7630.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7630],{"97630":function(e,r,n){n.r(r),n.d(r,{"default":function(){return PageView}});var t=n(38036),o=n(44133),i=(n(21065),n(72386)),a=n(74671),s=n(66658),c=(0,i.h)(1e3,4);function PageView(){o.ZP.useLoad((function(){console.log("Page loaded.")}));var e=c.map((function(e){return(0,s.jsx)(a.$,{"index":e.id,"height":100*e.sub},e.id)}));return(0,s.jsx)(t.ScrollView,{"className":"index","scrollY":!0,"children":(0,s.jsx)(t.GridView,{"className":"gridStyle","crossAxisCount":4,"mainAxisGap":4,"crossAxisGap":8,"type":"aligned","children":e})})}},"74671":function(e,r,n){n.d(r,{"$":function(){return i}});var t=n(38036),o=n(66658),i=function GridTile(e){var r=e.height,n=e.index;return(0,o.jsx)(t.View,{"className":"center","style":{"width":"100%","height":r+"px","backgroundColor":"#6bbc7a"},"children":(0,o.jsx)(t.View,{"className":"center","style":{"width":"60px","height":"60px","borderRadius":"30px","backgroundColor":"white","color":"black"},"children":n})},n)}},"72386":function(e,r,n){n.d(r,{"h":function(){return t}});var t=function generateGridList(e,r){for(var n,t=[],o=0;o<e;o++)t.push({"id":o,"sub":(n=r,Math.floor(Math.random()*n)+1)});return t}},"1834":function(e,r,n){var t=n(21065),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,n){var t,i={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{"$$typeof":o,"type":e,"key":l,"ref":u,"props":i,"_owner":s.current}}r.Fragment=i,r.jsx=q,r.jsxs=q},"66658":function(e,r,n){e.exports=n(1834)}}]);