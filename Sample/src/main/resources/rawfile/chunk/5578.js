/*! For license information please see 5578.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5578],{"63682":function(n,e,t){t.d(e,{"Z":function(){return m}});var c=t(82163),a=t(6676),o=t(65599),i=t(97150),s=t(77483),l=t(26380),r=t(21065),u=t(35859),f=t(38036),d=t(91753),p=t(66658),h=function(n){(0,i.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return n=e.call.apply(e,[this].concat(a)),(0,l.Z)((0,o.Z)(n),"state",{}),(0,l.Z)((0,o.Z)(n),"stringify",(function(n){var e=new Map,t=JSON.stringify(n,(function(n,t){if(void 0===t)return"undefined";if("function"==typeof t)return"function";if("object"===(0,d.Z)(t)&&null!==t){if(e.has(t))return;e.set(t,t)}return t}));return e.clear(),t})),n}return(0,a.Z)(Index,[{"key":"render","value":function render(){var n=this.props,e=n.testApi,t=n.callbackRes;return(0,p.jsx)(f.View,{"className":"callback-content","children":(0,p.jsx)(f.View,{"className":"callback-res","id":"".concat(e,"-callback"),"children":this.stringify(t)})})}}]),Index}(r.Component),m=function(n){(0,i.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return n=e.call.apply(e,[this].concat(a)),(0,l.Z)((0,o.Z)(n),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,l.Z)((0,o.Z)(n),"changeData",(function(e,t){var c=n.state.inputData;try{c[t]=JSON.parse(e.detail.value)}catch(n){c[t]=e.detail.value}n.setState({"inputData":c})})),(0,l.Z)((0,o.Z)(n),"submitData",(function(n,e,t){null!=e.func&&("string"==typeof n?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==n?e.func(t):e.func(t,n))})),(0,l.Z)((0,o.Z)(n),"minusHidden",(function(){var e=n.state.hiddenNum;e>0?n.setState({"hiddenNum":e-1}):(0,u.CF)({"title":"已全部显示"})})),(0,l.Z)((0,o.Z)(n),"addHidden",(function(){var e=n.state.hiddenNum;e<n.props.buttonList.length?n.setState({"hiddenNum":e+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,l.Z)((0,o.Z)(n),"hideTextarea",(function(e){var t=n.state.textareaControl;t[e]=!t[e],n.setState({"textareaControl":t})})),(0,l.Z)((0,o.Z)(n),"isAdvancedAPI",(function(n){try{return asAPIMap.get(n)}catch(n){return!1}})),n}return(0,a.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var n=this.props.buttonList,e=[],t=[];n.forEach((function(n){n.inputData?e.push(n.inputData):e.push(void 0),t.push(!0)})),this.setState({"inputData":e})}},{"key":"render","value":function render(){var n=this,e=this.props.buttonList,t=this.state,c=t.inputData,a=t.textareaControl,o=t.hiddenNum;return(0,p.jsxs)(f.View,{"className":"button-list","children":[(0,p.jsxs)(f.View,{"className":"hidden-control","children":[(0,p.jsx)(f.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(f.View,{"className":"stepper","children":[(0,p.jsx)(f.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(f.View,{"className":"stepper-num","children":o}),(0,p.jsx)(f.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),e.map((function(e,t){return(0,p.jsxs)(f.View,{"className":"api-page-btn-area ".concat(t<o?"api-page-btn-area-hidden":""),"children":[null!=c[t]?(0,p.jsxs)(f.View,{"className":"api-textarea-area","children":[(0,p.jsx)(f.Textarea,{"className":"api-input-area ".concat(a[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(e.id,"-input"),"value":"string"==typeof c[t]?c[t]:JSON.stringify(c[t],null,2),"onInput":function onInput(e){n.changeData(e,t)}}),(0,p.jsx)(f.View,{"className":"textarea-control","onClick":function onClick(){n.hideTextarea(t)},"children":a[t]?"+":"-"})]}):"",(0,p.jsxs)(f.View,{"className":"api-page-btn ".concat(null==e.func?"api-page-btn-uncreate":""," ").concat(n.isAdvancedAPI(e.id)?"api-page-btn-advanced":""),"id":e.id,"onClick":function onClick(){n.submitData(c[t],e,t)},"children":[e.id,null!=e.callbackRes?(0,p.jsx)(h,{"testApi":e.id,"callbackRes":e.callbackRes}):""]})]},e.id)}))]})}}]),Index}(r.Component)},"95578":function(n,e,t){t.r(e),t.d(e,{"default":function(){return m}});var c=t(82163),a=t(6676),o=t(65599),i=t(97150),s=t(77483),l=t(26380),r=t(21065),u=t(27442),f=t(38036),d=t(49141),p=t(63682),h=t(66658),m=function(n){(0,i.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return n=e.call.apply(e,[this].concat(a)),(0,l.Z)((0,o.Z)(n),"state",{"list":[{"id":"openSystemBluetoothSetting","func":null},{"id":"openAppAuthorizeSetting","func":function func(e){d.n.consoleTest("Taro.openAppAuthorizeSetting"),(0,u.nJ)({"success":function success(t){d.n.consoleSuccess.call((0,o.Z)(n),t,e)},"fail":function fail(t){d.n.consoleFail.call((0,o.Z)(n),t,e)},"complete":function complete(t){d.n.consoleComplete.call((0,o.Z)(n),t,e)}}).then((function(t){d.n.consoleResult.call((0,o.Z)(n),t,e)}))}},{"id":"getWindowInfo","func":function func(e){d.n.consoleTest("Taro.getWindowInfo");var t=(0,u._5)();d.n.consoleSuccess.call((0,o.Z)(n),t,e)}},{"id":"getSystemSetting","func":function func(e){d.n.consoleTest("Taro.getSystemSetting");var t=Date.now(),c=(0,u.FE)(),a=Date.now()-t;console.log("getSystemSetting took: ",a),d.n.consoleSuccess.call((0,o.Z)(n),c,e)}},{"id":"getSystemInfoSync","func":function func(e){d.n.consoleTest("Taro.getSystemInfoSync");try{var t=(0,u.xI)();d.n.consoleSuccess.call((0,o.Z)(n),t,e)}catch(t){d.n.consoleFail.call((0,o.Z)(n),t,e)}}},{"id":"getSystemInfoAsync","func":function func(e){d.n.consoleTest("Taro.getSystemInfoAsync"),(0,u.jC)({"success":function success(t){d.n.consoleSuccess.call((0,o.Z)(n),t,e)},"fail":function fail(t){d.n.consoleFail.call((0,o.Z)(n),t,e)},"complete":function complete(t){d.n.consoleComplete.call((0,o.Z)(n),t,e)}}).then((function(t){d.n.consoleResult.call((0,o.Z)(n),t,e)}))}},{"id":"getSystemInfo","func":function func(e){d.n.consoleTest("Taro.getSystemInfo"),(0,u.So)({"success":function success(t){d.n.consoleSuccess.call((0,o.Z)(n),t,e)},"fail":function fail(t){d.n.consoleFail.call((0,o.Z)(n),t,e)},"complete":function complete(t){d.n.consoleComplete.call((0,o.Z)(n),t,e)}}).then((function(t){d.n.consoleResult.call((0,o.Z)(n),t,e)}))}},{"id":"getDeviceInfo","func":function func(e){d.n.consoleTest("Taro.getDeviceInfo");var t=(0,u.dz)();d.n.consoleSuccess.call((0,o.Z)(n),t,e)}},{"id":"getAppBaseInfo","func":function func(e){d.n.consoleTest("Taro.getAppBaseInfo");var t=(0,u.K3)();d.n.consoleSuccess.call((0,o.Z)(n),t,e)}},{"id":"getAppAuthorizeSetting","func":function func(e){d.n.consoleTest("Taro.getAppAuthorizeSetting");var t=(0,u.U_)();d.n.consoleSuccess.call((0,o.Z)(n),t,e)}}]}),n}return(0,a.Z)(Index,[{"key":"render","value":function render(){var n=this.state.list;return(0,h.jsx)(f.View,{"className":"api-page","children":(0,h.jsx)(p.Z,{"buttonList":n})})}}]),Index}(r.Component)},"1834":function(n,e,t){var c=t(21065),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(n,e,t){var c,o={},r=null,u=null;for(c in void 0!==t&&(r=""+t),void 0!==e.key&&(r=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,c)&&!l.hasOwnProperty(c)&&(o[c]=e[c]);if(n&&n.defaultProps)for(c in e=n.defaultProps)void 0===o[c]&&(o[c]=e[c]);return{"$$typeof":a,"type":n,"key":r,"ref":u,"props":o,"_owner":s.current}}e.Fragment=o,e.jsx=q,e.jsxs=q},"66658":function(n,e,t){n.exports=t(1834)}}]);