/*! For license information please see 6569.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6569],{"63682":function(n,e,t){t.d(e,{"Z":function(){return x}});var c=t(82163),o=t(6676),l=t(65599),s=t(97150),i=t(77483),a=t(26380),u=t(21065),r=t(35859),f=t(38036),d=t(91753),p=t(66658),m=function(n){(0,s.Z)(Index,n);var e=(0,i.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return n=e.call.apply(e,[this].concat(o)),(0,a.Z)((0,l.Z)(n),"state",{}),(0,a.Z)((0,l.Z)(n),"stringify",(function(n){var e=new Map,t=JSON.stringify(n,(function(n,t){if(void 0===t)return"undefined";if("function"==typeof t)return"function";if("object"===(0,d.Z)(t)&&null!==t){if(e.has(t))return;e.set(t,t)}return t}));return e.clear(),t})),n}return(0,o.Z)(Index,[{"key":"render","value":function render(){var n=this.props,e=n.testApi,t=n.callbackRes;return(0,p.jsx)(f.View,{"className":"callback-content","children":(0,p.jsx)(f.View,{"className":"callback-res","id":"".concat(e,"-callback"),"children":this.stringify(t)})})}}]),Index}(u.Component),x=function(n){(0,s.Z)(Index,n);var e=(0,i.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return n=e.call.apply(e,[this].concat(o)),(0,a.Z)((0,l.Z)(n),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,a.Z)((0,l.Z)(n),"changeData",(function(e,t){var c=n.state.inputData;try{c[t]=JSON.parse(e.detail.value)}catch(n){c[t]=e.detail.value}n.setState({"inputData":c})})),(0,a.Z)((0,l.Z)(n),"submitData",(function(n,e,t){null!=e.func&&("string"==typeof n?(0,r.CF)({"icon":"error","title":"请检查参数格式"}):null==n?e.func(t):e.func(t,n))})),(0,a.Z)((0,l.Z)(n),"minusHidden",(function(){var e=n.state.hiddenNum;e>0?n.setState({"hiddenNum":e-1}):(0,r.CF)({"title":"已全部显示"})})),(0,a.Z)((0,l.Z)(n),"addHidden",(function(){var e=n.state.hiddenNum;e<n.props.buttonList.length?n.setState({"hiddenNum":e+1}):(0,r.CF)({"title":"已全部隐藏"})})),(0,a.Z)((0,l.Z)(n),"hideTextarea",(function(e){var t=n.state.textareaControl;t[e]=!t[e],n.setState({"textareaControl":t})})),(0,a.Z)((0,l.Z)(n),"isAdvancedAPI",(function(n){try{return asAPIMap.get(n)}catch(n){return!1}})),n}return(0,o.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var n=this.props.buttonList,e=[],t=[];n.forEach((function(n){n.inputData?e.push(n.inputData):e.push(void 0),t.push(!0)})),this.setState({"inputData":e})}},{"key":"render","value":function render(){var n=this,e=this.props.buttonList,t=this.state,c=t.inputData,o=t.textareaControl,l=t.hiddenNum;return(0,p.jsxs)(f.View,{"className":"button-list","children":[(0,p.jsxs)(f.View,{"className":"hidden-control","children":[(0,p.jsx)(f.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(f.View,{"className":"stepper","children":[(0,p.jsx)(f.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(f.View,{"className":"stepper-num","children":l}),(0,p.jsx)(f.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),e.map((function(e,t){return(0,p.jsxs)(f.View,{"className":"api-page-btn-area ".concat(t<l?"api-page-btn-area-hidden":""),"children":[null!=c[t]?(0,p.jsxs)(f.View,{"className":"api-textarea-area","children":[(0,p.jsx)(f.Textarea,{"className":"api-input-area ".concat(o[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(e.id,"-input"),"value":"string"==typeof c[t]?c[t]:JSON.stringify(c[t],null,2),"onInput":function onInput(e){n.changeData(e,t)}}),(0,p.jsx)(f.View,{"className":"textarea-control","onClick":function onClick(){n.hideTextarea(t)},"children":o[t]?"+":"-"})]}):"",(0,p.jsxs)(f.View,{"className":"api-page-btn ".concat(null==e.func?"api-page-btn-uncreate":""," ").concat(n.isAdvancedAPI(e.id)?"api-page-btn-advanced":""),"id":e.id,"onClick":function onClick(){n.submitData(c[t],e,t)},"children":[e.id,null!=e.callbackRes?(0,p.jsx)(m,{"testApi":e.id,"callbackRes":e.callbackRes}):""]})]},e.id)}))]})}}]),Index}(u.Component)},"86569":function(n,e,t){t.r(e),t.d(e,{"default":function(){return C}});var c,o=t(24497),l=t(82163),s=t(6676),i=t(65599),a=t(97150),u=t(77483),r=t(26380),f=t(21065),d=t(41078),p=t(38036),m=t(63682),x=t(49141),Z=t(66658),h="请输入文本...",C=function(n){(0,a.Z)(Index,n);var e=(0,u.Z)(Index);function Index(){var n;(0,l.Z)(this,Index);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return n=e.call.apply(e,[this].concat(s)),(0,r.Z)((0,i.Z)(n),"state",{"list":[{"id":"EditorContext","func":function func(e){x.n.consoleTest("EditorContext"),(0,d.wF)().select("#editor").context((function(t){c=t.context,x.n.consoleResult.call((0,i.Z)(n),c,e)})).exec()}},{"id":"clear","func":function func(e){x.n.consoleTest("EditorContext_clear"),c.clear({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}},{"id":"format","inputData":{"name":"align","value":"left"},"func":function func(n,e){var t=e.name,o=e.value;o?(x.n.consoleTest("EditorContext_format(".concat(t,", ").concat(o,")")),c.format(t,o)):(x.n.consoleTest("EditorContext_format(".concat(t,")")),c.format(t)),x.n.consoleNormal("editorContext.format success")}},{"id":"getContents","func":function func(e){x.n.consoleTest("EditorContext_getContents"),c.getContents({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}},{"id":"insertDivider","func":function func(e){x.n.consoleTest("EditorContext_insertDivider"),c.insertDivider({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}},{"id":"insertImage","inputData":{"src":"https://user-images.githubusercontent.com/3369400/133268513-5bfe2f93-4402-42c9-a403-81c9e86934b6.jpeg","nowrap":!1,"alt":"hello,beautiful world","data":"","extClass":"test_image","height":"100","width":"100"},"func":function func(e,t){x.n.consoleTest("EditorContext_insertImage"),c.insertImage((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"insertText","inputData":{"text":"developer conference"},"func":function func(e,t){x.n.consoleTest("EditorContext_insertText"),c.insertText((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"redo","func":function func(e){x.n.consoleTest("EditorContext_redo"),c.redo({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}},{"id":"removeFormat","func":function func(e){x.n.consoleTest("EditorContext_removeFormat"),c.removeFormat({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}},{"id":"scrollIntoView","func":function func(n){x.n.consoleTest("EditorContext_scrollIntoView"),c.scrollIntoView(),x.n.consoleNormal("editorContext.scrollIntoView success ")}},{"id":"setContents","inputData":{"delta":"","html":"test_html"},"func":function func(e,t){x.n.consoleTest("EditorContext_setContents"),c.setContents((0,o.Z)((0,o.Z)({},t),{},{"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"undo","func":function func(e){x.n.consoleTest("EditorContext_undo"),c.undo({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}},{"id":"getSelectionText","func":function func(e){x.n.consoleTest("EditorContext_getSelectionText"),c.getSelectionText({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}},{"id":"blur","func":function func(e){x.n.consoleTest("EditorContext_blur"),c.blur({"success":function success(t){x.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){x.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){x.n.consoleComplete.call((0,i.Z)(n),t,e)}})}}]}),n}return(0,s.Z)(Index,[{"key":"render","value":function render(){var n=this.state.list;return(0,Z.jsxs)(p.View,{"className":"api-page","children":[(0,Z.jsx)(m.Z,{"buttonList":n}),(0,Z.jsx)(p.Editor,{"id":"editor","className":"editor","placeholder":h})]})}}]),Index}(f.Component)},"1834":function(n,e,t){var c=t(21065),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(n,e,t){var c,l={},u=null,r=null;for(c in void 0!==t&&(u=""+t),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(r=e.ref),e)s.call(e,c)&&!a.hasOwnProperty(c)&&(l[c]=e[c]);if(n&&n.defaultProps)for(c in e=n.defaultProps)void 0===l[c]&&(l[c]=e[c]);return{"$$typeof":o,"type":n,"key":u,"ref":r,"props":l,"_owner":i.current}}e.Fragment=l,e.jsx=q,e.jsxs=q},"66658":function(n,e,t){n.exports=t(1834)}}]);