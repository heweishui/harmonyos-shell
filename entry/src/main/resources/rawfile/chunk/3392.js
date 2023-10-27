/*! For license information please see 3392.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3392],{"63682":function(e,n,t){t.d(n,{"Z":function(){return Z}});var a=t(82163),c=t(6676),s=t(65599),r=t(97150),i=t(77483),o=t(26380),l=t(21065),u=t(34465),d=t(38036),f=t(91753),p=t(66658),h=function(e){(0,r.Z)(Index,e);var n=(0,i.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return e=n.call.apply(n,[this].concat(c)),(0,o.Z)((0,s.Z)(e),"state",{}),(0,o.Z)((0,s.Z)(e),"stringify",(function(e){var n=new Map,t=JSON.stringify(e,(function(e,t){if(void 0===t)return"undefined";if("object"===(0,f.Z)(t)&&null!==t){if(n.has(t))return;n.set(t,t)}return t}));return n.clear(),t})),e}return(0,c.Z)(Index,[{"key":"render","value":function render(){var e=this.props,n=e.testApi,t=e.callbackRes;return(0,p.jsx)(d.View,{"className":"callback-content","children":(0,p.jsx)(d.View,{"className":"callback-res","id":"".concat(n,"-callback"),"children":this.stringify(t)})})}}]),Index}(l.Component),Z=function(e){(0,r.Z)(Index,e);var n=(0,i.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return e=n.call.apply(n,[this].concat(c)),(0,o.Z)((0,s.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,o.Z)((0,s.Z)(e),"changeData",(function(n,t){var a=e.state.inputData;try{a[t]=JSON.parse(n.detail.value)}catch(e){a[t]=n.detail.value}e.setState({"inputData":a})})),(0,o.Z)((0,s.Z)(e),"submitData",(function(e,n,t){null!=n.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?n.func(t):n.func(t,e))})),(0,o.Z)((0,s.Z)(e),"minusHidden",(function(){var n=e.state.hiddenNum;n>0?e.setState({"hiddenNum":n-1}):(0,u.CF)({"title":"已全部显示"})})),(0,o.Z)((0,s.Z)(e),"addHidden",(function(){var n=e.state.hiddenNum;n<e.props.buttonList.length?e.setState({"hiddenNum":n+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,o.Z)((0,s.Z)(e),"hideTextarea",(function(n){var t=e.state.textareaControl;t[n]=!t[n],e.setState({"textareaControl":t})})),(0,o.Z)((0,s.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,c.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,n=[],t=[];e.forEach((function(e){e.inputData?n.push(e.inputData):n.push(void 0),t.push(!0)})),this.setState({"inputData":n})}},{"key":"render","value":function render(){var e=this,n=this.props.buttonList,t=this.state,a=t.inputData,c=t.textareaControl,s=t.hiddenNum;return(0,p.jsxs)(d.View,{"className":"button-list","children":[(0,p.jsxs)(d.View,{"className":"hidden-control","children":[(0,p.jsx)(d.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(d.View,{"className":"stepper","children":[(0,p.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(d.View,{"className":"stepper-num","children":s}),(0,p.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),n.map((function(n,t){return(0,p.jsxs)(d.View,{"className":"api-page-btn-area ".concat(t<s?"api-page-btn-area-hidden":""),"children":[null!=a[t]?(0,p.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,p.jsx)(d.Textarea,{"className":"api-input-area ".concat(c[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(n.id,"-input"),"value":"string"==typeof a[t]?a[t]:JSON.stringify(a[t],null,2),"onInput":function onInput(n){e.changeData(n,t)}}),(0,p.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(t)},"children":c[t]?"+":"-"})]}):"",(0,p.jsxs)(d.View,{"className":"api-page-btn ".concat(null==n.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(n.id)?"api-page-btn-advanced":""),"id":n.id,"onClick":function onClick(){e.submitData(a[t],n,t)},"children":[n.id,null!=n.callbackRes?(0,p.jsx)(h,{"testApi":n.id,"callbackRes":n.callbackRes}):""]})]},n.id)}))]})}}]),Index}(l.Component)},"53392":function(e,n,t){t.r(n),t.d(n,{"default":function(){return C}});var a=t(24497),c=t(82163),s=t(6676),r=t(65599),i=t(97150),o=t(77483),l=t(26380),u=t(21065),d=t(13223),f=t(29250),p=t(57269),h=t(26623),Z=t(56170),m=t(38036),x=t(49141),v=t(63682),S=t(66658),C=function(e){(0,i.Z)(Index,e);var n=(0,o.Z)(Index);function Index(){var e;(0,c.Z)(this,Index);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return e=n.call.apply(n,[this].concat(s)),(0,l.Z)((0,r.Z)(e),"state",{"list":[{"id":"setScreenBrightness","inputData":{"value":.5},"func":function func(n,t){x.n.consoleTest("Taro.setScreenBrightness"),x.n.consoleNormal("Taro.setScreenBrightness value:",t.value),(0,d.L)((0,a.Z)((0,a.Z)({},t),{},{"success":function success(t){x.n.consoleSuccess.call((0,r.Z)(e),t,n)},"fail":function fail(t){x.n.consoleFail.call((0,r.Z)(e),t,n)},"complete":function complete(t){x.n.consoleComplete.call((0,r.Z)(e),t,n)}})).then((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)})).catch((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)}))}},{"id":"setKeepScreenOn","inputData":{"keepScreenOn":!0},"func":function func(n,t){x.n.consoleTest("Taro.setKeepScreenOn"),(0,f.j)((0,a.Z)((0,a.Z)({},t),{},{"success":function success(t){x.n.consoleSuccess.call((0,r.Z)(e),t,n)},"fail":function fail(t){x.n.consoleFail.call((0,r.Z)(e),t,n)},"complete":function complete(t){x.n.consoleComplete.call((0,r.Z)(e),t,n)}})).then((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)})).catch((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)}))}},{"id":"onUserCaptureScreen","func":function func(n){x.n.consoleTest("Taro.onUserCaptureScreen"),(0,p.o)(e.userCaptureScreen)}},{"id":"offUserCaptureScreen","func":function func(n){x.n.consoleTest("Taro.offUserCaptureScreen"),(0,h.j)(e.userCaptureScreen)}},{"id":"getScreenBrightness","func":function func(n){x.n.consoleTest("Taro.getScreenBrightness"),(0,Z.b)({"success":function success(t){x.n.consoleSuccess.call((0,r.Z)(e),t,n)},"fail":function fail(t){x.n.consoleFail.call((0,r.Z)(e),t,n)},"complete":function complete(t){x.n.consoleComplete.call((0,r.Z)(e),t,n)}}).then((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)})).catch((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)}))}}]}),(0,l.Z)((0,r.Z)(e),"userCaptureScreen",(function(n){x.n.consoleOnCallback.call((0,r.Z)(e),n,"onUserCaptureScreen",2)})),e}return(0,s.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,S.jsx)(m.View,{"className":"api-page","children":(0,S.jsx)(v.Z,{"buttonList":e})})}}]),Index}(u.Component)},"1834":function(e,n,t){var a=t(21065),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var a,s={},l=null,u=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)r.call(n,a)&&!o.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{"$$typeof":c,"type":e,"key":l,"ref":u,"props":s,"_owner":i.current}}n.Fragment=s,n.jsx=q,n.jsxs=q},"66658":function(e,n,t){e.exports=t(1834)}}]);