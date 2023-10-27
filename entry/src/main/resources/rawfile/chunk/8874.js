/*! For license information please see 8874.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8874],{"45177":function(e,t,a){a.d(t,{"Z":function(){return l}});var s=a(82163),r=a(6676),n=a(97150),o=a(77483),f=a(26380),c=a(21065),d=a(38036),i=a(66658),l=function(e){(0,n.Z)(ComponentState,e);var t=(0,o.Z)(ComponentState);function ComponentState(){return(0,s.Z)(this,ComponentState),t.apply(this,arguments)}return(0,r.Z)(ComponentState,[{"key":"render","value":function render(){return(0,i.jsxs)(d.View,{"className":"page-state","children":[(0,i.jsxs)(d.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,i.jsxs)(d.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(c.Component);(0,f.Z)(l,"options",{"addGlobalClass":!0})},"74565":function(e,t,a){a.d(t,{"Z":function(){return l}});var s=a(82163),r=a(6676),n=a(97150),o=a(77483),f=a(26380),c=a(21065),d=a(38036),i=a(66658),l=function(e){(0,n.Z)(Header,e);var t=(0,o.Z)(Header);function Header(){return(0,s.Z)(this,Header),t.apply(this,arguments)}return(0,r.Z)(Header,[{"key":"render","value":function render(){return(0,i.jsxs)(d.View,{"className":"page-head","children":[(0,i.jsx)(d.View,{"className":"page-head-title","children":this.props.title}),(0,i.jsx)(d.View,{"className":"page-head-line"}),this.props.desc?(0,i.jsx)(d.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(c.Component);(0,f.Z)(l,"options",{"addGlobalClass":!0})},"18874":function(e,t,a){a.r(t),a.d(t,{"default":function(){return PageView}});var s=a(38036),r=a(44133),n=(a(21065),a(74565)),o=a(45177),f=a(66658);function PageView(){return r.ZP.useLoad((function(){console.log("Page loaded.")})),(0,f.jsxs)(s.View,{"className":"components-page","children":[(0,f.jsxs)(s.View,{"className":"components-page__header","children":[(0,f.jsx)(n.Z,{"title":"StickyHeader"}),(0,f.jsx)(o.Z,{"platform":"H5","rate":"100","children":" "})]}),(0,f.jsx)(s.StickyHeader,{"children":(0,f.jsx)(s.StickySection,{"style":{"background":"#aaaaaa"},"children":"我是吸顶容器"})}),(0,f.jsx)(s.CoverImage,{"style":{"display":"flex"},"src":"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"}),(0,f.jsx)(s.CoverImage,{"style":{"display":"flex"},"src":"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"}),(0,f.jsx)(s.CoverImage,{"style":{"display":"flex"},"src":"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"}),(0,f.jsx)(s.CoverImage,{"style":{"display":"flex"},"src":"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"}),(0,f.jsx)(s.CoverImage,{"style":{"display":"flex"},"src":"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"})]})}},"1834":function(e,t,a){var s=a(21065),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,f=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,a){var s,n={},d=null,i=null;for(s in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{"$$typeof":r,"type":e,"key":d,"ref":i,"props":n,"_owner":f.current}}t.Fragment=n,t.jsx=q,t.jsxs=q},"66658":function(e,t,a){e.exports=a(1834)}}]);