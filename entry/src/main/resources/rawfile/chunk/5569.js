/*! For license information please see 5569.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5569],{"45177":function(e,a,s){s.d(a,{"Z":function(){return d}});var n=s(82163),t=s(6676),l=s(97150),r=s(77483),p=s(26380),o=s(21065),c=s(38036),i=s(66658),d=function(e){(0,l.Z)(ComponentState,e);var a=(0,r.Z)(ComponentState);function ComponentState(){return(0,n.Z)(this,ComponentState),a.apply(this,arguments)}return(0,t.Z)(ComponentState,[{"key":"render","value":function render(){return(0,i.jsxs)(c.View,{"className":"page-state","children":[(0,i.jsxs)(c.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,i.jsxs)(c.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(o.Component);(0,p.Z)(d,"options",{"addGlobalClass":!0})},"74565":function(e,a,s){s.d(a,{"Z":function(){return d}});var n=s(82163),t=s(6676),l=s(97150),r=s(77483),p=s(26380),o=s(21065),c=s(38036),i=s(66658),d=function(e){(0,l.Z)(Header,e);var a=(0,r.Z)(Header);function Header(){return(0,n.Z)(this,Header),a.apply(this,arguments)}return(0,t.Z)(Header,[{"key":"render","value":function render(){return(0,i.jsxs)(c.View,{"className":"page-head","children":[(0,i.jsx)(c.View,{"className":"page-head-title","children":this.props.title}),(0,i.jsx)(c.View,{"className":"page-head-line"}),this.props.desc?(0,i.jsx)(c.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(o.Component);(0,p.Z)(d,"options",{"addGlobalClass":!0})},"65569":function(e,a,s){s.r(a),s.d(a,{"default":function(){return h}});var n=s(82163),t=s(6676),l=s(65599),r=s(97150),p=s(77483),o=s(26380),c=s(38036),i=s(21065),d=s(74565),x=s(45177),m=s(66658),h=function(e){(0,r.Z)(PageInput,e);var a=(0,p.Z)(PageInput);function PageInput(){var e;(0,n.Z)(this,PageInput);for(var s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];return e=a.call.apply(a,[this].concat(t)),(0,o.Z)((0,l.Z)(e),"state",{"value":""}),(0,o.Z)((0,l.Z)(e),"onInput",(function(a){e.setState({"value":a.detail.value})})),e}return(0,t.Z)(PageInput,[{"key":"render","value":function render(){return(0,m.jsxs)(c.View,{"className":"components-page","children":[(0,m.jsxs)(c.View,{"className":"components-page__header","children":[(0,m.jsx)(d.Z,{"title":"Input"}),(0,m.jsx)(x.Z,{"platform":"H5","rate":"100","children":" "})]}),(0,m.jsxs)(c.View,{"className":"components-page__body","children":[(0,m.jsxs)(c.View,{"className":"components-page__body-example example","children":[(0,m.jsx)(c.View,{"className":"example-header","children":(0,m.jsx)(c.Text,{"children":"可以自动聚焦的input"})}),(0,m.jsx)(c.View,{"className":"example-body","children":(0,m.jsx)(c.Input,{"type":"text","placeholder":"将会获取焦点","focus":!0})})]}),(0,m.jsxs)(c.View,{"className":"components-page__body-example example","children":[(0,m.jsx)(c.View,{"className":"example-header","children":(0,m.jsx)(c.Text,{"children":"控制最大输入长度的input"})}),(0,m.jsx)(c.View,{"className":"example-body","children":(0,m.jsx)(c.Input,{"type":"text","placeholder":"最大输入长度为10","maxlength":"10"})})]}),(0,m.jsxs)(c.View,{"className":"components-page__body-example example","children":[(0,m.jsx)(c.View,{"className":"example-header","children":(0,m.jsxs)(c.Text,{"children":["实时获取输入值:",this.state.value]})}),(0,m.jsx)(c.View,{"className":"example-body","children":(0,m.jsx)(c.Input,{"type":"text","placeholder":"输入同步到view中","value":this.state.value,"onInput":this.onInput})})]}),(0,m.jsxs)(c.View,{"className":"components-page__body-example example","children":[(0,m.jsx)(c.View,{"className":"example-header","children":(0,m.jsx)(c.Text,{"children":"数字输入的input"})}),(0,m.jsx)(c.View,{"className":"example-body","children":(0,m.jsx)(c.Input,{"type":"number","placeholder":"这是一个数字输入框"})})]}),(0,m.jsxs)(c.View,{"className":"components-page__body-example example","children":[(0,m.jsx)(c.View,{"className":"example-header","children":(0,m.jsx)(c.Text,{"children":"密码输入的input"})}),(0,m.jsx)(c.View,{"className":"example-body","children":(0,m.jsx)(c.Input,{"type":"password","password":!0,"placeholder":"这是一个密码输入框"})})]}),(0,m.jsxs)(c.View,{"className":"components-page__body-example example","children":[(0,m.jsx)(c.View,{"className":"example-header","children":(0,m.jsx)(c.Text,{"children":"身份证输入的input"})}),(0,m.jsx)(c.View,{"className":"example-body","children":(0,m.jsx)(c.Input,{"type":"idcard","placeholder":"身份证输入键盘"})})]}),(0,m.jsxs)(c.View,{"className":"components-page__body-example example","children":[(0,m.jsx)(c.View,{"className":"example-header","children":(0,m.jsx)(c.Text,{"children":"控制占位符颜色的input"})}),(0,m.jsx)(c.View,{"className":"example-body","children":(0,m.jsx)(c.Input,{"type":"text","placeholder":"占位符字体是红色的","placeholderStyle":"color:red"})})]})]})]})}}]),PageInput}(i.Component)},"1834":function(e,a,s){var n=s(21065),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,a,s){var n,l={},c=null,i=null;for(n in void 0!==s&&(c=""+s),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(i=a.ref),a)r.call(a,n)&&!o.hasOwnProperty(n)&&(l[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===l[n]&&(l[n]=a[n]);return{"$$typeof":t,"type":e,"key":c,"ref":i,"props":l,"_owner":p.current}}a.Fragment=l,a.jsx=q,a.jsxs=q},"66658":function(e,a,s){e.exports=s(1834)}}]);