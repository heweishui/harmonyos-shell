/*! For license information please see 3334.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3334],{"63682":function(n,e,o){o.d(e,{"Z":function(){return k}});var t=o(82163),a=o(6676),i=o(65599),c=o(97150),l=o(77483),r=o(26380),s=o(21065),u=o(34465),d=o(38036),f=o(91753),p=o(66658),C=function(n){(0,c.Z)(Index,n);var e=(0,l.Z)(Index);function Index(){var n;(0,t.Z)(this,Index);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=e.call.apply(e,[this].concat(a)),(0,r.Z)((0,i.Z)(n),"state",{}),(0,r.Z)((0,i.Z)(n),"stringify",(function(n){var e=new Map,o=JSON.stringify(n,(function(n,o){if(void 0===o)return"undefined";if("object"===(0,f.Z)(o)&&null!==o){if(e.has(o))return;e.set(o,o)}return o}));return e.clear(),o})),n}return(0,a.Z)(Index,[{"key":"render","value":function render(){var n=this.props,e=n.testApi,o=n.callbackRes;return(0,p.jsx)(d.View,{"className":"callback-content","children":(0,p.jsx)(d.View,{"className":"callback-res","id":"".concat(e,"-callback"),"children":this.stringify(o)})})}}]),Index}(s.Component),k=function(n){(0,c.Z)(Index,n);var e=(0,l.Z)(Index);function Index(){var n;(0,t.Z)(this,Index);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=e.call.apply(e,[this].concat(a)),(0,r.Z)((0,i.Z)(n),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,r.Z)((0,i.Z)(n),"changeData",(function(e,o){var t=n.state.inputData;try{t[o]=JSON.parse(e.detail.value)}catch(n){t[o]=e.detail.value}n.setState({"inputData":t})})),(0,r.Z)((0,i.Z)(n),"submitData",(function(n,e,o){null!=e.func&&("string"==typeof n?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==n?e.func(o):e.func(o,n))})),(0,r.Z)((0,i.Z)(n),"minusHidden",(function(){var e=n.state.hiddenNum;e>0?n.setState({"hiddenNum":e-1}):(0,u.CF)({"title":"已全部显示"})})),(0,r.Z)((0,i.Z)(n),"addHidden",(function(){var e=n.state.hiddenNum;e<n.props.buttonList.length?n.setState({"hiddenNum":e+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,r.Z)((0,i.Z)(n),"hideTextarea",(function(e){var o=n.state.textareaControl;o[e]=!o[e],n.setState({"textareaControl":o})})),(0,r.Z)((0,i.Z)(n),"isAdvancedAPI",(function(n){try{return asAPIMap.get(n)}catch(n){return!1}})),n}return(0,a.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var n=this.props.buttonList,e=[],o=[];n.forEach((function(n){n.inputData?e.push(n.inputData):e.push(void 0),o.push(!0)})),this.setState({"inputData":e})}},{"key":"render","value":function render(){var n=this,e=this.props.buttonList,o=this.state,t=o.inputData,a=o.textareaControl,i=o.hiddenNum;return(0,p.jsxs)(d.View,{"className":"button-list","children":[(0,p.jsxs)(d.View,{"className":"hidden-control","children":[(0,p.jsx)(d.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(d.View,{"className":"stepper","children":[(0,p.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(d.View,{"className":"stepper-num","children":i}),(0,p.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),e.map((function(e,o){return(0,p.jsxs)(d.View,{"className":"api-page-btn-area ".concat(o<i?"api-page-btn-area-hidden":""),"children":[null!=t[o]?(0,p.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,p.jsx)(d.Textarea,{"className":"api-input-area ".concat(a[o]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(e.id,"-input"),"value":"string"==typeof t[o]?t[o]:JSON.stringify(t[o],null,2),"onInput":function onInput(e){n.changeData(e,o)}}),(0,p.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){n.hideTextarea(o)},"children":a[o]?"+":"-"})]}):"",(0,p.jsxs)(d.View,{"className":"api-page-btn ".concat(null==e.func?"api-page-btn-uncreate":""," ").concat(n.isAdvancedAPI(e.id)?"api-page-btn-advanced":""),"id":e.id,"onClick":function onClick(){n.submitData(t[o],e,o)},"children":[e.id,null!=e.callbackRes?(0,p.jsx)(C,{"testApi":e.id,"callbackRes":e.callbackRes}):""]})]},e.id)}))]})}}]),Index}(s.Component)},"73334":function(n,e,o){o.r(e),o.d(e,{"default":function(){return y}});var t,a,i=o(36706),c=o(82163),l=o(6676),r=o(65599),s=o(97150),u=o(77483),d=o(26380),f=o(21065),p=o(76606),C=o(38036),k=o(63682),m=o(49141),x=o(66658),y=function(n){(0,s.Z)(Index,n);var e=(0,u.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return n=e.call.apply(e,[this].concat(l)),(0,d.Z)((0,r.Z)(n),"state",{"list":[{"id":"createInnerAudioContext","func":function func(e){m.n.consoleTest("createInnerAudioContext_native"),void 0!==t&&(t.destroy(),m.n.consoleNormal("innerAudioContext destroy:",t)),t=(0,p.fI)(),m.n.consoleResult.call((0,r.Z)(n),t,e)}},{"id":"createInnerAudioContext_{}","func":function func(e){m.n.consoleTest("createInnerAudioContext_native"),void 0!==t&&(t.destroy(),m.n.consoleNormal("innerAudioContext destroy:",t)),t=(0,p.fI)({}),m.n.consoleResult.call((0,r.Z)(n),t,e)}},{"id":"createInnerAudioContext_","func":function func(e){m.n.consoleTest("createInnerAudioContext_h5"),void 0!==t&&(t.destroy(),m.n.consoleNormal("innerAudioContext destroy:",t)),t=(0,p.fI)({"useWebAudioImplement":!0}),m.n.consoleResult.call((0,r.Z)(n),t,e)}},{"id":"set","inputData":{"src":"http://img.51miz.com/preview/sound/00/26/73/51miz-S267356-423D33372.mp3","startTime":0,"autoplay":!0,"loop":!1,"volume":1,"playbackRate":1,"referrerPolicy":"origin"},"func":function func(n,e){m.n.consoleTest("InnerAudioContext_set"),void 0!==t?(t.src=e.src,t.autoplay=e.autoplay,t.startTime=e.startTime,t.loop=e.loop,t.volume=e.volume,t.playbackRate=e.playbackRate,t.referrerPolicy=e.referrerPolicy):m.n.consoleNormal("set error")}},{"id":"set-volume","inputData":{"volume":1},"func":function func(n,e){m.n.consoleTest("InnerAudioContext_setVolume"),void 0!==t?t.volume=e.volume:m.n.consoleNormal("setVolume error")}},{"id":"set-playbackRate","inputData":{"playbackRate":1},"func":function func(n,e){m.n.consoleTest("InnerAudioContext_setPlaybackRate"),void 0!==t?t.playbackRate=e.playbackRate:m.n.consoleNormal("setPlaybackRate error")}},{"id":"set-loop","inputData":{"loop":!0},"func":function func(n,e){m.n.consoleTest("InnerAudioContext_setLoops"),void 0!==t?t.loop=e.loop:m.n.consoleNormal("setLoops error")}},{"id":"play","func":function func(n){m.n.consoleTest("InnerAudioContext_play"),void 0!==t?t.play():m.n.consoleNormal("play error")}},{"id":"pause","func":function func(n){m.n.consoleTest("InnerAudioContext_pause"),void 0!==t?t.pause():m.n.consoleNormal("pause error")}},{"id":"stop","func":function func(n){m.n.consoleTest("InnerAudioContext_stop"),void 0!==t?t.stop():m.n.consoleNormal("stop error")}},{"id":"seek","inputData":{"seekData":150},"func":function func(n,e){m.n.consoleTest("InnerAudioContext_seek"),void 0!==t?t.seek(e.seekData):m.n.consoleNormal("seek error")}},{"id":"destroy","func":function func(n){m.n.consoleTest("InnerAudioContext_destroy"),void 0!==t?t.destroy():m.n.consoleNormal("destroy error")}},{"id":"onCanplay","func":function func(e){m.n.consoleTest("InnerAudioContext_onCanplay"),void 0!==t?t.onCanplay(n.canPlayCallback):m.n.consoleNormal("onCanplay error")}},{"id":"onPlay","func":function func(e){m.n.consoleTest("InnerAudioContext_onPlay"),void 0!==t?t.onPlay(n.playCallback):m.n.consoleNormal("onPlay error")}},{"id":"onPause","func":function func(e){m.n.consoleTest("InnerAudioContext_onPause"),void 0!==t?t.onPause(n.pauseCallback):m.n.consoleNormal("onPause error")}},{"id":"onStop","func":function func(e){m.n.consoleTest("InnerAudioContext_onStop"),void 0!==t?t.onStop(n.stopCallback):m.n.consoleNormal("onStop error")}},{"id":"onEnded","func":function func(e){m.n.consoleTest("InnerAudioContext_onEnded"),void 0!==t?t.onEnded(n.endedCallback):m.n.consoleNormal("onEnded error")}},{"id":"onTimeUpdate","func":function func(e){m.n.consoleTest("InnerAudioContext_onTimeUpdate"),void 0!==t?t.onTimeUpdate(n.timeUpdateCallback):m.n.consoleNormal("onTimeUpdate error")}},{"id":"onError-音频出错才能触发","func":function func(e){m.n.consoleTest("InnerAudioContext_onError"),void 0!==t?t.onError(n.errorCallback):m.n.consoleNormal("onError error")}},{"id":"onWaiting-音频缓冲不足暂停才能触发","func":function func(e){m.n.consoleTest("InnerAudioContext_onWaiting"),void 0!==t?t.onWaiting(n.waitingCallback):m.n.consoleNormal("onWaiting error")}},{"id":"onSeeking","func":function func(e){m.n.consoleTest("InnerAudioContext_onSeeking"),void 0!==t?t.onSeeking(n.seekingCallback):m.n.consoleNormal("onSeeking error")}},{"id":"onSeeked","func":function func(e){m.n.consoleTest("InnerAudioContext_onSeeked"),void 0!==t?t.onSeeked(n.seekedCallback):m.n.consoleNormal("onSeeked error")}},{"id":"offCanplay","func":function func(e){m.n.consoleTest("InnerAudioContext_offCanplay"),void 0!==t?t.offCanplay(n.canPlayCallback):m.n.consoleNormal("offCanplay error")}},{"id":"offPlay","func":function func(e){m.n.consoleTest("InnerAudioContext_offPlay"),void 0!==t?t.offPlay(n.playCallback):m.n.consoleNormal("offPlay error")}},{"id":"offPause","func":function func(e){m.n.consoleTest("InnerAudioContext_offPause"),void 0!==t?t.offPause(n.pauseCallback):m.n.consoleNormal("offPause error")}},{"id":"offStop","func":function func(e){m.n.consoleTest("InnerAudioContext_offStop"),void 0!==t?t.offStop(n.stopCallback):m.n.consoleNormal("offStop error")}},{"id":"offEnded","func":function func(e){m.n.consoleTest("InnerAudioContext_offEnded"),void 0!==t?t.offEnded(n.endedCallback):m.n.consoleNormal("offEnded error")}},{"id":"offTimeUpdate","func":function func(e){m.n.consoleTest("InnerAudioContext_offTimeUpdate"),void 0!==t?t.offTimeUpdate(n.timeUpdateCallback):m.n.consoleNormal("offTimeUpdate error")}},{"id":"offError","func":function func(e){m.n.consoleTest("InnerAudioContext_offError"),void 0!==t?t.offError(n.errorCallback):m.n.consoleNormal("offError error")}},{"id":"offWaiting","func":function func(e){m.n.consoleTest("InnerAudioContext_offWaiting"),void 0!==t?t.offWaiting(n.waitingCallback):m.n.consoleNormal("offWaiting error")}},{"id":"offSeeking","func":function func(e){m.n.consoleTest("InnerAudioContext_offSeeking"),void 0!==t?t.offSeeking(n.seekingCallback):m.n.consoleNormal("offSeeking error")}},{"id":"offSeeked","func":function func(e){m.n.consoleTest("InnerAudioContext_offSeeked"),void 0!==t?t.offSeeked(n.seekedCallback):m.n.consoleNormal("offSeeked error")}},{"id":"createAudioContext","func":function func(e){m.n.consoleTest("createAudioContext");var o=n.state.IdList[n.state.IdList.length-1];a=(0,p.MW)(o),m.n.consoleResult.call((0,r.Z)(n),a,e);var t=n.setState((function(n){return{"count":n.count+1}}));n.setState((function(e){return e.IdList=[].concat((0,i.Z)(e.IdList),["".concat(n.state.mainStr).concat(t)])})),n.setState((function(n){return n.AudioList=[].concat((0,i.Z)(n.AudioList),[a])}))}},{"id":"audioContext_play","func":function func(e){m.n.consoleTest("audioContext_play"),n.state.AudioList.length>1?n.state.AudioList.map((function(e){e.play(),n.setState({"isPlay":!0})})):1===n.state.AudioList.length&&(0!==n.state.count&&(n.setState((function(n){return n.AudioList=[].concat((0,i.Z)(n.AudioList),[a])})),n.setState((function(n){return{"count":n.count-1}}))),n.state.AudioList.map((function(e){e.play(),n.setState({"isPlay":!0})})))}},{"id":"audioContext_pause","func":function func(e){m.n.consoleTest("audioContext_pause"),n.state.AudioList.length>1&&!0===n.state.isPlay?(n.state.AudioList[n.state.AudioList.length-1].pause(),n.setState({"isPlay":!1}),n.setState((function(n){var e=(0,i.Z)(n.AudioList);return e.length--,{"AudioList":e}}))):n.state.AudioList.length>=1&&!1===n.state.isPlay?(n.state.AudioList[n.state.AudioList.length-1].pause(),n.setState({"isPlay":!1}),n.setState((function(n){var e=(0,i.Z)(n.AudioList);return e.length--,{"AudioList":e}}))):1===n.state.AudioList.length&&(a.pause(),n.setState({"isPlay":!1}))}},{"id":"audioContext_seek","inputData":{"position":120},"func":function func(e,o){m.n.consoleTest("audioContext_seek"),n.state.AudioList.length>1?n.state.AudioList[n.state.AudioList.length-1].seek(o.position):(1===n.state.AudioList.length||n.setState((function(n){return n.AudioList=[].concat((0,i.Z)(n.AudioList),[a])})),a.seek(o.position))}},{"id":"audioContext_setSrc","inputData":{"src":"https://storage.360buyimg.com/jdrd-blog/27.mp3"},"func":function func(n,e){m.n.consoleTest("audioContext_setSrc"),a.setSrc(e.src)}}],"innerConTextList":[],"IdList":["myAudio"],"AudioList":[],"isPlay":!1,"mainStr":"myAudio","count":0}),(0,d.Z)((0,r.Z)(n),"canPlayCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onCanPlayCallback",9)})),(0,d.Z)((0,r.Z)(n),"playCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onPlayCallback",10)})),(0,d.Z)((0,r.Z)(n),"pauseCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onPauseCallback",11)})),(0,d.Z)((0,r.Z)(n),"stopCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onStopCallback",12)})),(0,d.Z)((0,r.Z)(n),"endedCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onEndedCallback",13)})),(0,d.Z)((0,r.Z)(n),"timeUpdateCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onTimeUpdateCallback",14)})),(0,d.Z)((0,r.Z)(n),"errorCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onErrorCallback",15)})),(0,d.Z)((0,r.Z)(n),"waitingCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onWaitingCallback",16)})),(0,d.Z)((0,r.Z)(n),"seekingCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onSeekingCallback",17)})),(0,d.Z)((0,r.Z)(n),"seekedCallback",(function(e){m.n.consoleOnCallback.call((0,r.Z)(n),e,"onSeekedCallback",18)})),n}return(0,l.Z)(Index,[{"key":"render","value":function render(){var n=this.state.list;return(0,x.jsx)(C.View,{"className":"api-page","children":(0,x.jsx)(k.Z,{"buttonList":n})})}}]),Index}(f.Component)},"1834":function(n,e,o){var t=o(21065),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(n,e,o){var t,i={},s=null,u=null;for(t in void 0!==o&&(s=""+o),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(u=e.ref),e)c.call(e,t)&&!r.hasOwnProperty(t)&&(i[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===i[t]&&(i[t]=e[t]);return{"$$typeof":a,"type":n,"key":s,"ref":u,"props":i,"_owner":l.current}}e.Fragment=i,e.jsx=q,e.jsxs=q},"66658":function(n,e,o){n.exports=o(1834)}}]);