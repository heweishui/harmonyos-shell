/*! For license information please see 699.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[699],{"63682":function(e,n,a){a.d(n,{"Z":function(){return x}});var t=a(82163),r=a(6676),i=a(65599),c=a(97150),o=a(77483),s=a(26380),l=a(21065),u=a(34465),d=a(38036),f=a(91753),p=a(66658),h=function(e){(0,c.Z)(Index,e);var n=(0,o.Z)(Index);function Index(){var e;(0,t.Z)(this,Index);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=n.call.apply(n,[this].concat(r)),(0,s.Z)((0,i.Z)(e),"state",{}),(0,s.Z)((0,i.Z)(e),"stringify",(function(e){var n=new Map,a=JSON.stringify(e,(function(e,a){if(void 0===a)return"undefined";if("object"===(0,f.Z)(a)&&null!==a){if(n.has(a))return;n.set(a,a)}return a}));return n.clear(),a})),e}return(0,r.Z)(Index,[{"key":"render","value":function render(){var e=this.props,n=e.testApi,a=e.callbackRes;return(0,p.jsx)(d.View,{"className":"callback-content","children":(0,p.jsx)(d.View,{"className":"callback-res","id":"".concat(n,"-callback"),"children":this.stringify(a)})})}}]),Index}(l.Component),x=function(e){(0,c.Z)(Index,e);var n=(0,o.Z)(Index);function Index(){var e;(0,t.Z)(this,Index);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=n.call.apply(n,[this].concat(r)),(0,s.Z)((0,i.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,s.Z)((0,i.Z)(e),"changeData",(function(n,a){var t=e.state.inputData;try{t[a]=JSON.parse(n.detail.value)}catch(e){t[a]=n.detail.value}e.setState({"inputData":t})})),(0,s.Z)((0,i.Z)(e),"submitData",(function(e,n,a){null!=n.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?n.func(a):n.func(a,e))})),(0,s.Z)((0,i.Z)(e),"minusHidden",(function(){var n=e.state.hiddenNum;n>0?e.setState({"hiddenNum":n-1}):(0,u.CF)({"title":"已全部显示"})})),(0,s.Z)((0,i.Z)(e),"addHidden",(function(){var n=e.state.hiddenNum;n<e.props.buttonList.length?e.setState({"hiddenNum":n+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,s.Z)((0,i.Z)(e),"hideTextarea",(function(n){var a=e.state.textareaControl;a[n]=!a[n],e.setState({"textareaControl":a})})),(0,s.Z)((0,i.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,r.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,n=[],a=[];e.forEach((function(e){e.inputData?n.push(e.inputData):n.push(void 0),a.push(!0)})),this.setState({"inputData":n})}},{"key":"render","value":function render(){var e=this,n=this.props.buttonList,a=this.state,t=a.inputData,r=a.textareaControl,i=a.hiddenNum;return(0,p.jsxs)(d.View,{"className":"button-list","children":[(0,p.jsxs)(d.View,{"className":"hidden-control","children":[(0,p.jsx)(d.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(d.View,{"className":"stepper","children":[(0,p.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(d.View,{"className":"stepper-num","children":i}),(0,p.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),n.map((function(n,a){return(0,p.jsxs)(d.View,{"className":"api-page-btn-area ".concat(a<i?"api-page-btn-area-hidden":""),"children":[null!=t[a]?(0,p.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,p.jsx)(d.Textarea,{"className":"api-input-area ".concat(r[a]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(n.id,"-input"),"value":"string"==typeof t[a]?t[a]:JSON.stringify(t[a],null,2),"onInput":function onInput(n){e.changeData(n,a)}}),(0,p.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(a)},"children":r[a]?"+":"-"})]}):"",(0,p.jsxs)(d.View,{"className":"api-page-btn ".concat(null==n.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(n.id)?"api-page-btn-advanced":""),"id":n.id,"onClick":function onClick(){e.submitData(t[a],n,a)},"children":[n.id,null!=n.callbackRes?(0,p.jsx)(h,{"testApi":n.id,"callbackRes":n.callbackRes}):""]})]},n.id)}))]})}}]),Index}(l.Component)},"80699":function(e,n,a){a.r(n),a.d(n,{"default":function(){return v}});var t=a(82163),r=a(6676),i=a(65599),c=a(97150),o=a(77483),s=a(26380),l=a(21065),u=a(59889),d=a(40231),f=a(44133),p=a(56819),h=a(38036),x=a(49141),m=a(63682),y=a(66658),v=function(e){(0,c.Z)(Index,e);var n=(0,o.Z)(Index);function Index(){var e;(0,t.Z)(this,Index);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=n.call.apply(n,[this].concat(r)),(0,s.Z)((0,i.Z)(e),"state",{"list":[{"id":"env","func":function func(n){x.n.consoleTest("Taro.canIUseWebp"),x.n.consoleSuccess.call((0,i.Z)(e),u.OB,n)}},{"id":"canIUse","inputData":{"apiName":"openBluetoothAdapter"},"func":function func(n,a){var t=a.apiName;x.n.consoleTest("Taro.canIUse: ".concat(t)),x.n.consoleSuccess.call((0,i.Z)(e),(0,d.q)(t),n)}},{"id":"canIuseWebp","func":function func(n){x.n.consoleTest("Taro.canIUseWebp");try{var a=(0,f.FT)();x.n.consoleSuccess.call((0,i.Z)(e),a,n)}catch(a){x.n.consoleFail.call((0,i.Z)(e),a,n)}}},{"id":"base64ToArrayBuffer","func":function func(n){x.n.consoleTest("Taro.base64ToArrayBuffer");var a="CxYh",t=(0,u.RG)(a);x.n.consoleNormal("Taro.base64ToArrayBuffer before: ",a),x.n.consoleNormal("Taro.base64ToArrayBuffer after: ",t);var r={"Int8Array":new Int8Array(t),"Uint8Array":new Uint8Array(t),"ArrayBufferByteLength":t.byteLength};x.n.consoleResult.call((0,i.Z)(e),r,n)}},{"id":"arrayBufferToBase64","func":function func(n){x.n.consoleTest("Taro.arrayBufferToBase64");var a=new Uint8Array([11,22,33]),t=(0,u.sM)(a);x.n.consoleNormal("Taro.arrayBufferToBase64 before: ",a),x.n.consoleSuccess.call((0,i.Z)(e),t,n)}},{"id":"perload","func":function func(e){x.n.consoleTest("Taro.perload"),(0,f.MA)("x",1),x.n.consoleNormal("Taro.perload","向页面 /pages/index/index 传递参数{x,1}"),(0,p.T8)({"url":"/pages/index/index"})}}]}),e}return(0,r.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,y.jsx)(h.View,{"className":"api-page","children":(0,y.jsx)(m.Z,{"buttonList":e})})}}]),Index}(l.Component)},"1834":function(e,n,a){var t=a(21065),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,a){var t,i={},l=null,u=null;for(t in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)c.call(n,t)&&!s.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{"$$typeof":r,"type":e,"key":l,"ref":u,"props":i,"_owner":o.current}}n.Fragment=i,n.jsx=q,n.jsxs=q},"66658":function(e,n,a){e.exports=a(1834)}}]);