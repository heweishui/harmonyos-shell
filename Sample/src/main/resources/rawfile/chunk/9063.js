/*! For license information please see 9063.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9063],{"63682":function(e,n,t){t.d(n,{"Z":function(){return m}});var a=t(82163),i=t(6676),c=t(65599),r=t(97150),s=t(77483),l=t(26380),o=t(21065),u=t(35859),d=t(38036),f=t(91753),p=t(66658),h=function(e){(0,r.Z)(Index,e);var n=(0,s.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e=n.call.apply(n,[this].concat(i)),(0,l.Z)((0,c.Z)(e),"state",{}),(0,l.Z)((0,c.Z)(e),"stringify",(function(e){var n=new Map,t=JSON.stringify(e,(function(e,t){if(void 0===t)return"undefined";if("function"==typeof t)return"function";if("object"===(0,f.Z)(t)&&null!==t){if(n.has(t))return;n.set(t,t)}return t}));return n.clear(),t})),e}return(0,i.Z)(Index,[{"key":"render","value":function render(){var e=this.props,n=e.testApi,t=e.callbackRes;return(0,p.jsx)(d.View,{"className":"callback-content","children":(0,p.jsx)(d.View,{"className":"callback-res","id":"".concat(n,"-callback"),"children":this.stringify(t)})})}}]),Index}(o.Component),m=function(e){(0,r.Z)(Index,e);var n=(0,s.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e=n.call.apply(n,[this].concat(i)),(0,l.Z)((0,c.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,l.Z)((0,c.Z)(e),"changeData",(function(n,t){var a=e.state.inputData;try{a[t]=JSON.parse(n.detail.value)}catch(e){a[t]=n.detail.value}e.setState({"inputData":a})})),(0,l.Z)((0,c.Z)(e),"submitData",(function(e,n,t){null!=n.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?n.func(t):n.func(t,e))})),(0,l.Z)((0,c.Z)(e),"minusHidden",(function(){var n=e.state.hiddenNum;n>0?e.setState({"hiddenNum":n-1}):(0,u.CF)({"title":"已全部显示"})})),(0,l.Z)((0,c.Z)(e),"addHidden",(function(){var n=e.state.hiddenNum;n<e.props.buttonList.length?e.setState({"hiddenNum":n+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,l.Z)((0,c.Z)(e),"hideTextarea",(function(n){var t=e.state.textareaControl;t[n]=!t[n],e.setState({"textareaControl":t})})),(0,l.Z)((0,c.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,i.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,n=[],t=[];e.forEach((function(e){e.inputData?n.push(e.inputData):n.push(void 0),t.push(!0)})),this.setState({"inputData":n})}},{"key":"render","value":function render(){var e=this,n=this.props.buttonList,t=this.state,a=t.inputData,i=t.textareaControl,c=t.hiddenNum;return(0,p.jsxs)(d.View,{"className":"button-list","children":[(0,p.jsxs)(d.View,{"className":"hidden-control","children":[(0,p.jsx)(d.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(d.View,{"className":"stepper","children":[(0,p.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(d.View,{"className":"stepper-num","children":c}),(0,p.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),n.map((function(n,t){return(0,p.jsxs)(d.View,{"className":"api-page-btn-area ".concat(t<c?"api-page-btn-area-hidden":""),"children":[null!=a[t]?(0,p.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,p.jsx)(d.Textarea,{"className":"api-input-area ".concat(i[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(n.id,"-input"),"value":"string"==typeof a[t]?a[t]:JSON.stringify(a[t],null,2),"onInput":function onInput(n){e.changeData(n,t)}}),(0,p.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(t)},"children":i[t]?"+":"-"})]}):"",(0,p.jsxs)(d.View,{"className":"api-page-btn ".concat(null==n.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(n.id)?"api-page-btn-advanced":""),"id":n.id,"onClick":function onClick(){e.submitData(a[t],n,t)},"children":[n.id,null!=n.callbackRes?(0,p.jsx)(h,{"testApi":n.id,"callbackRes":n.callbackRes}):""]})]},n.id)}))]})}}]),Index}(o.Component)},"99063":function(e,n,t){t.r(n),t.d(n,{"default":function(){return m}});var a=t(82163),i=t(6676),c=t(65599),r=t(97150),s=t(77483),l=t(26380),o=t(21065),u=t(95943),d=t(38036),f=t(63682),p=t(49141),h=t(66658),m=function(e){(0,r.Z)(Index,e);var n=(0,s.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e=n.call.apply(n,[this].concat(i)),(0,l.Z)((0,c.Z)(e),"state",{"list":[{"id":"addPhoneRepeatCalendar","func":function func(n){p.n.consoleTest("addPhoneRepeatCalendar"),(0,u.P)({"title":"日历事件标题","startTime":(new Date).getTime(),"allDay":!1,"description":"事件说明","location":"事件位置","endTime":"","alarm":!0,"alarmOffset":10,"repeatInterval":"day","repeatEndTime":(new Date).getTime()+36e4,"success":function success(t){p.n.consoleSuccess.call((0,c.Z)(e),t,n)},"fail":function fail(t){p.n.consoleFail.call((0,c.Z)(e),t,n)},"complete":function complete(t){p.n.consoleComplete.call((0,c.Z)(e),t,n)}}).then((function(t){p.n.consoleResult.call((0,c.Z)(e),t,n)}))}},{"id":"addPhoneCalendar","func":function func(n){p.n.consoleTest("addPhoneCalendar"),(0,u.U)({"title":"日历事件标题","startTime":(new Date).getTime(),"allDay":!1,"description":"事件说明","location":"事件位置","endTime":"","alarm":!0,"alarmOffset":10,"success":function success(t){p.n.consoleSuccess.call((0,c.Z)(e),t,n)},"fail":function fail(t){p.n.consoleFail.call((0,c.Z)(e),t,n)},"complete":function complete(t){p.n.consoleComplete.call((0,c.Z)(e),t,n)}}).then((function(t){p.n.consoleResult.call((0,c.Z)(e),t,n)}))}}]}),e}return(0,i.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,h.jsx)(d.View,{"className":"api-page","children":(0,h.jsx)(f.Z,{"buttonList":e})})}}]),Index}(o.Component)},"1834":function(e,n,t){var a=t(21065),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var a,c={},o=null,u=null;for(a in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(u=n.ref),n)r.call(n,a)&&!l.hasOwnProperty(a)&&(c[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===c[a]&&(c[a]=n[a]);return{"$$typeof":i,"type":e,"key":o,"ref":u,"props":c,"_owner":s.current}}n.Fragment=c,n.jsx=q,n.jsxs=q},"66658":function(e,n,t){e.exports=t(1834)}}]);