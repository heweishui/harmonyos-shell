/*! For license information please see 6921.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6921],{"63682":function(e,t,n){n.d(t,{"Z":function(){return v}});var c=n(82163),i=n(6676),o=n(65599),s=n(97150),a=n(77483),l=n(26380),r=n(21065),u=n(35859),d=n(38036),f=n(91753),p=n(66658),h=function(e){(0,s.Z)(Index,e);var t=(0,a.Z)(Index);function Index(){var e;(0,c.Z)(this,Index);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,l.Z)((0,o.Z)(e),"state",{}),(0,l.Z)((0,o.Z)(e),"stringify",(function(e){var t=new Map,n=JSON.stringify(e,(function(e,n){if(void 0===n)return"undefined";if("function"==typeof n)return"function";if("object"===(0,f.Z)(n)&&null!==n){if(t.has(n))return;t.set(n,n)}return n}));return t.clear(),n})),e}return(0,i.Z)(Index,[{"key":"render","value":function render(){var e=this.props,t=e.testApi,n=e.callbackRes;return(0,p.jsx)(d.View,{"className":"callback-content","children":(0,p.jsx)(d.View,{"className":"callback-res","id":"".concat(t,"-callback"),"children":this.stringify(n)})})}}]),Index}(r.Component),v=function(e){(0,s.Z)(Index,e);var t=(0,a.Z)(Index);function Index(){var e;(0,c.Z)(this,Index);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,l.Z)((0,o.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,l.Z)((0,o.Z)(e),"changeData",(function(t,n){var c=e.state.inputData;try{c[n]=JSON.parse(t.detail.value)}catch(e){c[n]=t.detail.value}e.setState({"inputData":c})})),(0,l.Z)((0,o.Z)(e),"submitData",(function(e,t,n){null!=t.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?t.func(n):t.func(n,e))})),(0,l.Z)((0,o.Z)(e),"minusHidden",(function(){var t=e.state.hiddenNum;t>0?e.setState({"hiddenNum":t-1}):(0,u.CF)({"title":"已全部显示"})})),(0,l.Z)((0,o.Z)(e),"addHidden",(function(){var t=e.state.hiddenNum;t<e.props.buttonList.length?e.setState({"hiddenNum":t+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,l.Z)((0,o.Z)(e),"hideTextarea",(function(t){var n=e.state.textareaControl;n[t]=!n[t],e.setState({"textareaControl":n})})),(0,l.Z)((0,o.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,i.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,t=[],n=[];e.forEach((function(e){e.inputData?t.push(e.inputData):t.push(void 0),n.push(!0)})),this.setState({"inputData":t})}},{"key":"render","value":function render(){var e=this,t=this.props.buttonList,n=this.state,c=n.inputData,i=n.textareaControl,o=n.hiddenNum;return(0,p.jsxs)(d.View,{"className":"button-list","children":[(0,p.jsxs)(d.View,{"className":"hidden-control","children":[(0,p.jsx)(d.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(d.View,{"className":"stepper","children":[(0,p.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(d.View,{"className":"stepper-num","children":o}),(0,p.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),t.map((function(t,n){return(0,p.jsxs)(d.View,{"className":"api-page-btn-area ".concat(n<o?"api-page-btn-area-hidden":""),"children":[null!=c[n]?(0,p.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,p.jsx)(d.Textarea,{"className":"api-input-area ".concat(i[n]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(t.id,"-input"),"value":"string"==typeof c[n]?c[n]:JSON.stringify(c[n],null,2),"onInput":function onInput(t){e.changeData(t,n)}}),(0,p.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(n)},"children":i[n]?"+":"-"})]}):"",(0,p.jsxs)(d.View,{"className":"api-page-btn ".concat(null==t.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(t.id)?"api-page-btn-advanced":""),"id":t.id,"onClick":function onClick(){e.submitData(c[n],t,n)},"children":[t.id,null!=t.callbackRes?(0,p.jsx)(h,{"testApi":t.id,"callbackRes":t.callbackRes}):""]})]},t.id)}))]})}}]),Index}(r.Component)},"96921":function(e,t,n){n.r(t),n.d(t,{"default":function(){return w}});var c=n(82163),i=n(6676),o=n(65599),s=n(97150),a=n(77483),l=n(26380),r=n(21065),u=n(35859),d=n(42597),f=n(3175),p=n(50686),h=n(71707),v=n(60043),m=n(40333),x=n(14611),y=n(20658),Z=n(57616),D=n(38036),g=n(63682),S=n(49141),I=n(66658);var w=function(e){(0,s.Z)(Index,e);var t=(0,a.Z)(Index);function Index(){var e;(0,c.Z)(this,Index);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,l.Z)((0,o.Z)(e),"state",{"list":[{"id":"stopBluetoothDevicesDiscovery","func":function func(t){S.n.consoleTest("stopBluetoothDevicesDiscovery"),e.stopBluetoothDevicesDiscovery()}},{"id":"openBluetoothAdapter","func":function func(t){e.openBluetoothAdapter()}},{"id":"offBluetoothDeviceFound","func":null},{"id":"offBluetoothAdapterStateChange","func":null},{"id":"makeBluetoothPair","func":null},{"id":"isBluetoothDevicePaired","func":null},{"id":"getConnectedBluetoothDevices","func":function func(t){S.n.consoleTest("getConnectedBluetoothDevices");var n=e.state.deviceUuid;if(""!=n){var c=[n];(0,d.N)({"services":c,"success":function success(e){S.n.consoleSuccess(e)},"fail":function fail(e){S.n.consoleFail(e)},"complete":function complete(e){S.n.consoleComplete(e)}}).then((function(e){S.n.consoleResult(e)}))}else(0,u.CF)({"title":"请输入设备uuid"})}},{"id":"getBluetoothDevices","func":function func(e){S.n.consoleTest("getBluetoothDevices"),(0,f.z)({"success":function success(e){S.n.consoleSuccess(e)},"fail":function fail(e){S.n.consoleFail(e)},"complete":function complete(e){S.n.consoleComplete(e)}}).then((function(e){S.n.consoleResult(e)}))}},{"id":"getBluetoothAdapterState","func":function func(e){S.n.consoleTest("getBluetoothAdapterState"),(0,p.M)({"success":function success(e){S.n.consoleSuccess(e)},"fail":function fail(e){S.n.consoleFail(e)},"complete":function complete(e){S.n.consoleComplete(e)}}).then((function(e){S.n.consoleResult(e)}))}},{"id":"closeBluetoothAdapter","func":function func(e){S.n.consoleTest("closeBluetoothAdapter"),(0,h.A)({"success":function success(e){S.n.consoleSuccess(e)},"fail":function fail(e){S.n.consoleFail(e)},"complete":function complete(e){S.n.consoleComplete(e)}}).then((function(e){S.n.consoleResult({"errMsg":e.errMsg})}))}}],"deviceUuid":"","devices":[]}),(0,l.Z)((0,o.Z)(e),"_discoveryStarted",!1),(0,l.Z)((0,o.Z)(e),"getUuid",(function(t){var n=t.detail.value+"";e.setState({"deviceUuid":n})})),(0,l.Z)((0,o.Z)(e),"openBluetoothAdapter",(function(){(0,v.B)({"success":function success(t){S.n.consoleSuccess(t),e.startBluetoothDevicesDiscovery()},"fail":function fail(t){S.n.consoleFail(t),10001===t.errCode&&((0,u.K4)({"title":"错误","content":"未找到蓝牙设备, 请打开蓝牙后重试。","showCancel":!1}),(0,m.L)((function(t){t&&t.available&&e.startBluetoothDevicesDiscovery()})))}})})),(0,l.Z)((0,o.Z)(e),"startBluetoothDevicesDiscovery",(function(){e._discoveryStarted||(e._discoveryStarted=!0,(0,x.A)({"allowDuplicatesKey":!0,"success":function success(t){S.n.consoleSuccess(t),e.onBluetoothDeviceFound()}}))})),(0,l.Z)((0,o.Z)(e),"onBluetoothDeviceFound",(function(){(0,y.H)((function(t){console.log(t.devices),t.devices.forEach((function(t){if(t.name||t.localName){var n=e.state.devices,c=function inArray(e,t,n){for(var c=0;c<e.length;c++)if(e[c][t]===n)return c;return-1}(n,"deviceId",t.deviceId);-1===c?n.push(t):n[c]=t,e.setState({"devices":n})}}))}))})),e}return(0,i.Z)(Index,[{"key":"stopBluetoothDevicesDiscovery","value":function stopBluetoothDevicesDiscovery(){var e=this;(0,Z.N)({"complete":function complete(){e._discoveryStarted=!1}})}},{"key":"render","value":function render(){var e=this.state,t=e.list,n=e.devices;return(0,I.jsxs)(D.View,{"className":"api-page","children":[(0,I.jsx)(D.View,{"className":"page-body-info","children":(0,I.jsx)(D.ScrollView,{"className":"device_list","scrollY":!0,"scrollWithAnimation":!0,"children":n.map((function(e,t){return(0,I.jsxs)(D.View,{"className":"device_item","children":[(0,I.jsx)(D.View,{"children":e.name}),(0,I.jsxs)(D.View,{"children":["信号强度: ",e.RSSI,"dBm (",Math.max(0,e.RSSI+100),"%)"]}),(0,I.jsxs)(D.View,{"children":["UUID: ",e.deviceId]}),(0,I.jsxs)(D.View,{"children":["Service数量: ",e.advertisServiceUUIDs.length]})]},t)}))})}),(0,I.jsx)(g.Z,{"buttonList":t})]})}}]),Index}(r.Component)},"1834":function(e,t,n){var c=n(21065),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var c,o={},r=null,u=null;for(c in void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,c)&&!l.hasOwnProperty(c)&&(o[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===o[c]&&(o[c]=t[c]);return{"$$typeof":i,"type":e,"key":r,"ref":u,"props":o,"_owner":a.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},"66658":function(e,t,n){e.exports=n(1834)}}]);