(this.webpackJsonpspectral=this.webpackJsonpspectral||[]).push([[0],{26:function(e,n,t){e.exports=t.p+"static/media/pikathink.a1450d16.png"},27:function(e,n,t){e.exports=t.p+"static/media/pikacry.544b30d9.gif"},31:function(e,n,t){e.exports=t(55)},36:function(e,n,t){},46:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(9),o=t.n(c),i=(t(36),t(1)),u=t(2),l=t(4),s=t(6);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=Object(r.createContext)(void 0),m=Object(r.createContext)(void 0),b={echo:!0,save:!1,enableHotkeys:!0,perf:"normal",stream:null,playing:null,gettingUserMedia:!1,hasUserMedia:!1,errors:{}};function v(e,n){switch(n.type){case"playAudio":return f({},e,{playing:n.payload});case"gettingUserMedia":return f({},e,{gettingUserMedia:!0});case"setStream":return f({},e,{stream:n.payload});case"getUserMediaError":return f({},e,{errors:f({},e.errors,{getUserMedia:n.payload})});case"setPerf":return f({},e,{perf:n.payload});case"stopPlayback":return f({},e,{playing:null});case"setSave":return f({},e,{save:n.payload});case"setEcho":return f({},e,{echo:n.payload});case"setHotkeysEnabled":return f({},e,{hotkeysEnablec:n.payload});default:throw new Error("Unhandled action type: ".concat(n.type))}}function g(e){var n=e.initialState,t=void 0===n?b:n,c=e.children,o=Object(r.useReducer)(v,t),i=Object(l.a)(o,2),u=i[0],s=i[1];return a.a.createElement(p.Provider,{value:u},a.a.createElement(m.Provider,{value:s},c))}function h(){var e=a.a.useContext(p);if(void 0===e)throw new Error("ContextState must be used within a CountProvider");return e}function O(){var e=a.a.useContext(m);if(void 0===e)throw new Error("ContextDispatch must be used within a CountProvider");return e}var y=t(19),j=t.n(y),E=new AudioContext,x=E.createAnalyser();x.fftSize=128,x.smoothingTimeConstant=0;var w=new Uint8Array(x.frequencyBinCount),k=E.createGain(),C=E.createBiquadFilter();C.type="bandpass";var P=E.currentTime;C.gain.setValueAtTime(10,P);var S=E.createGain();S.gain.setValueAtTime(0,P),k.connect(x),x.connect(S),S.connect(E.destination);var R={context:E,analyser:x,mix:k,filterGain:S,data:w,source:null};function D(e){R.source&&R.source.disconnect();var n=R.context.currentTime;R.filterGain.gain.setValueAtTime(1,n);var t=document.createElement("audio");t.src=e;var r=R.context.createMediaElementSource(t);R.source=r,R.source.connect(R.mix);var a=new Promise((function(e){t.addEventListener("ended",(function(){return e(!0)}))}));return t.play(),a}function A(e){R.source&&R.source.disconnect();var n=R.context.currentTime;R.filterGain.gain.setValueAtTime(0,n);var t=R.context.createMediaStreamSource(e);t.connect(R.mix),R.source=t,R.analyser.smoothingTimeConstant=0}var F=R;function M(e){return Math.log(e/2)/Math.log(1.02)}var U=["#8795E8","#94D0FF","#AD8CFF","#C774E8","#FF6AD5","white"];function T(e){switch(e){case"potato":return 128;case"low":return 256;case"normal":return 512;case"high":return 1024;case"very high":return 2048;case"pikoh":return 4096;default:return 512}}var L=function(){var e=Object(r.useRef)(null),n=h().perf,t=1e3,c=M(T(n)/2);return Object(r.useEffect)((function(){var r=T(n),a=M(r/2);F.analyser.fftSize=r;var c,o=e.current,i=o&&o.getContext("2d");return function e(){var n=document.createElement("canvas");n.height=a,n.width=t;var r=n.getContext("2d");if(r&&o&&i){r.drawImage(o,0,0,t,a);var u=new Uint8Array(F.analyser.frequencyBinCount),l=u.length;F.analyser.getByteFrequencyData(u),i.clearRect(0,0,t,a);for(var s=0;s<l-1;s++){var d=u[s],f=M(s);i&&(i.fillStyle=j.a.scale(U).domain([0,1,255]).out("hex")(d),i.fillRect(t-1,a-f,1,25))}i.translate(-2,0),i.drawImage(n,0,0,t,a,0,0,t,a),i.setTransform(1,0,0,1,0,0)}c=requestAnimationFrame(e)}(),function(){cancelAnimationFrame(c)}}),[n]),a.a.createElement("canvas",{ref:e,height:c,width:t})},q=t(5),z=t(10),B=t.n(z),I=t(20),V=function(e){var n=[O(),h()],t=n[0],c=n[1],o=Object(r.useState)(),i=Object(l.a)(o,2),u=i[0],s=i[1];return Object(r.useEffect)((function(){function e(){return(e=Object(I.a)(B.a.mark((function e(){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={state:"prompt"},e.prev=1,e.next=4,navigator.permissions.query({name:"microphone"});case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("can not query, defaulting to prompt");case 10:if(s(n.state),"prompt"!==n.state&&"granted"!==n.state){e.next=20;break}return e.next=14,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 14:A(r=e.sent),t({type:"setStream",payload:r}),s("granted"),e.next=21;break;case 20:"denied"===n.state&&(t({type:"getUserMediaError",payload:"permission denied"}),s("denied"));case 21:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),"granted"===u&&c.stream?a.a.createElement(a.a.Fragment,null,e.children):"denied"===u?a.a.createElement(a.a.Fragment,null,e.deniedComponent):a.a.createElement(a.a.Fragment,null,e.loadingComponent)},G=t(7),H=t.n(G),N=t(40).default;var J=function(e){var n=Object(r.useRef)(null),t=Object(r.useRef)(e.active),c=Object(r.useRef)();return Object(r.useEffect)((function(){var e;return c.current=new N({container:n.current,speed:.15,amplitude:.001,width:500,lerpSpeed:.5,pixelDepth:.07,height:150}),c.current.start(),function n(){var r=new Uint8Array(F.analyser.frequencyBinCount);F.analyser.getByteFrequencyData(r);var a,o,i=function(e){for(var n=0,t=e.length,r=0;r<t;r++)n+=e[r];return n/t}(r),u=Math.min(1.2,(i-(a=0))*(1-(o=.3))/(50-a)+o);t.current&&c.current.setAmplitude(u),e=requestAnimationFrame(n)}(),function(){return cancelAnimationFrame(e)}}),[]),Object(r.useEffect)((function(){c.current&&c.current.start&&(e.active?(t.current=!0,c.current.setAmplitude(1)):(t.current=!1,c.current.setAmplitude(.001)))}),[e]),a.a.createElement("div",{ref:n})};function W(){var e=Object(i.a)(["\n  height 160px;\n  border: 1px solid white;\n  box-sizing: border-box;\n"]);return W=function(){return e},e}var _=u.a.div(W()),K=function(e){var n=e.stream,t=e.onRecorded,c=Object(r.useRef)(new MediaRecorder(n)),o=Object(r.useState)(!1),i=Object(l.a)(o,2),u=i[0],s=i[1],d=Object(r.useRef)(new Date);return Object(r.useEffect)((function(){c.current=new MediaRecorder(n)}),[n]),Object(r.useEffect)((function(){var e=[];function r(n){n.data.size>0&&e.push(n.data)}if(!1===u){if("inactive"===c.current.state)return;return c.current.stop()}if(!0===u)return A(n),c.current.addEventListener("dataavailable",r),c.current.addEventListener("stop",(function n(){var a=URL.createObjectURL(new Blob(e)),o=(new Date).getTime()-d.current.getTime();t({name:"Recording",url:a,id:H()(),duration:o}),c.current.removeEventListener("dataavailable",r),c.current.removeEventListener("stop",n)})),d.current=new Date,void c.current.start()}),[t,u,n]),a.a.createElement(_,null,a.a.createElement(J,{active:u}),u?a.a.createElement("button",{onClick:function(){return s(!1)}},"Stop Recording"):a.a.createElement("button",{onClick:function(){return s(!0)}},"Start Recording"))};function X(){var e=Object(i.a)(["\n  display: flex;\n"]);return X=function(){return e},e}var Y=u.a.div(X()),Z=a.a.forwardRef((function(e,n){var t=Object(r.useState)(e.originalName),c=Object(l.a)(t,2),o=c[0],i=c[1],u=Object(r.useCallback)((function(n){"Enter"===n.key&&e.onSubmit(o),"Escape"===n.key&&e.onCancel()}),[o,e]);return a.a.createElement(Y,null,a.a.createElement("input",{ref:n,onFocus:function(e){return e.target.select()},value:o,onChange:function(e){return i(e.target.value)},onKeyDown:u}),a.a.createElement("div",{onClick:function(){return e.onSubmit(o)}},"Submit"),a.a.createElement("div",{onClick:e.onCancel},"Cancel"))}));function $(){var e=Object(i.a)(["\n  line-height: 23px;\n  cursor: pointer;\n  font-family: monospace;\n"]);return $=function(){return e},e}function Q(){var e=Object(i.a)(["\n  margin-left: 20px;\n  opacity: 0.4;\n  cursor: default;\n"]);return Q=function(){return e},e}function ee(){var e=Object(i.a)(["\n  margin-top: 50px;\n  height: 500px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\n  display: flex;\n  padding-bottom: 5px;\n  cursor: pointer;\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  display: flex;\n"]);return te=function(){return e},e}function re(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n"]);return re=function(){return e},e}var ae=u.a.div(re()),ce=u.a.div(te()),oe=u.a.div(ne()),ie=u.a.div(ee()),ue=u.a.div(Q()),le=u.a.div($()),se=function(e){var n=e.recordings,t=e.renaming,c=e.onSetRename,o=e.onRenameFile,i=e.onPlayAudio,u=e.onDeleteFile,l=e.downloadable,s=a.a.createRef();return Object(r.useEffect)((function(){s.current&&s.current.focus()}),[s]),a.a.createElement(ie,null,n.map((function(e,n){return a.a.createElement(ae,{key:e.id},a.a.createElement(oe,null,a.a.createElement("div",null,"".concat(n+1,".")),e.id===t?a.a.createElement(Z,{ref:s,originalName:e.name,onSubmit:function(e){return o(e,n)},onCancel:function(){return c(null)}}):a.a.createElement("div",{onClick:function(){return i(e)}},e.name),a.a.createElement(ue,null,e.duration&&function(e){var n=Math.floor(e/6e4),t=(e%6e4/1e3).toFixed(0);return n+":"+(parseInt(t,10)<10?"0":"")+t}(e.duration))),a.a.createElement(ce,null,a.a.createElement(le,{onClick:function(){return c(e.id)}},"\u5909\u66f4"),l&&a.a.createElement("a",{download:"".concat(e.name,".ogg"),href:e.url},"DL"),a.a.createElement(le,{onClick:function(){return u(n)}},"\u3010\u6d88\u3059\u3011")))})))};function de(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?de(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function pe(){var e=Object(i.a)(["\n  margin-left: 20px;\n  height: 300px;\n"]);return pe=function(){return e},e}var me=u.a.div(pe()),be=function(){var e=Object(r.useRef)(1),n=Object(r.useRef)(null),t=Object(r.useState)([]),c=Object(l.a)(t,2),o=c[0],i=c[1],u=Object(r.useState)(null),s=Object(l.a)(u,2),d=s[0],f=s[1],p=[h(),O()],m=p[0],b=p[1],v=m.stream,g=m.echo;Object(r.useEffect)((function(){n.current=v}),[v]);var y=Object(r.useCallback)((function(e){D(e.url).then((function(){b({type:"stopPlayback"}),n.current&&A(n.current)})),b({type:"playAudio",payload:e})}),[b]),j=Object(r.useCallback)((function(n){var t=fe({},n,{name:"new_recording_".concat(e.current++)});i([].concat(Object(q.a)(o),[t])),g&&y(t)}),[o,i,g,y]),E=Object(r.useCallback)((function(e,n){i([].concat(Object(q.a)(o.slice(0,n)),[fe({},o[n],{name:e})],Object(q.a)(o.slice(n+1)))),f(null)}),[o,i,f]),x=Object(r.useCallback)((function(e){i([].concat(Object(q.a)(o.slice(0,e)),Object(q.a)(o.slice(e+1))))}),[o,i]);return a.a.createElement(me,null,a.a.createElement(V,{loadingComponent:a.a.createElement("div",null,"Loading"),deniedComponent:a.a.createElement("div",null,"Denied")},a.a.createElement(K,{stream:m.stream,onRecorded:j}),a.a.createElement(se,{recordings:o,renaming:d,onRenameFile:E,onPlayAudio:y,onSetRename:f,onDeleteFile:x,downloadable:!0})))},ve=t(28);function ge(){var e=Object(i.a)(["\n  background: linear-gradient(\n      45deg,\n      rgba(0, 0, 0, 0.0980392) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(0, 0, 0, 0.0980392) 75%,\n      rgba(0, 0, 0, 0.0980392) 0\n    ),\n    linear-gradient(\n      45deg,\n      rgba(0, 0, 0, 0.0980392) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(0, 0, 0, 0.0980392) 75%,\n      rgba(0, 0, 0, 0.0980392) 0\n    ),\n    white;\n  background-repeat: repeat, repeat;\n  background-position: 0px 0, 5px 5px;\n  transform-origin: 0 0 0;\n  background-origin: padding-box, padding-box;\n  background-clip: border-box, border-box;\n  background-size: 10px 10px, 10px 10px;\n  box-shadow: none;\n  text-shadow: none;\n  transition: none;\n  transform: scaleX(1) scaleY(1) scaleZ(1);\n"]);return ge=function(){return e},e}var he=u.a.div(ge());function Oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ye(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Oe(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Oe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function je(){var e=Object(i.a)(["\n  color: ",";\n"]);return je=function(){return e},e}function Ee(){var e=Object(i.a)(["\n  margin-left: auto;\n  margin-rght: auto;\n  padding-top: 40px;\n  height: 160px;\n  border: 1px solid white;\n  box-sizing: border-box;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(i.a)(["\n  width: 50%;\n"]);return xe=function(){return e},e}function we(){var e=Object(i.a)(["\n  position: absolute;\n  left: 0;\n  height: 60px;\n  width: 50%;\n  z-index: 1;\n"]);return we=function(){return e},e}var ke=Object(u.a)(he)(we()),Ce=u.a.div(xe()),Pe=u.a.div(Ee()),Se=u.a.p(je(),(function(e){return e.dark?"black":"white"})),Re=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=[O(),h()],i=o[0],u=o[1],s=Object(r.useState)(null),d=Object(l.a)(s,2),f=d[0],p=d[1],m=u.stream,b=Object(r.useCallback)((function(e){D(e.url).then((function(){m&&(A(m),i({type:"stopPlayback"}))})),i({type:"playAudio",payload:e})}),[i,m]),v=Object(r.useCallback)((function(e){var n=e.map((function(e){return{name:e.name,url:URL.createObjectURL(e),id:H()()}}));c([].concat(Object(q.a)(t),Object(q.a)(n)))}),[c,t]),g=Object(r.useCallback)((function(e,n){c([].concat(Object(q.a)(t.slice(0,n)),[ye({},t[n],{name:e})],Object(q.a)(t.slice(n+1)))),p(null)}),[t,c,p]),y=Object(r.useCallback)((function(e){c([].concat(Object(q.a)(t.slice(0,e)),Object(q.a)(t.slice(e+1))))}),[t,c]),j=Object(ve.a)({onDrop:v}),E=j.getRootProps,x=j.getInputProps,w=j.isDragActive;return a.a.createElement(Ce,null,a.a.createElement(Pe,E(),a.a.createElement("input",x()),a.a.createElement(a.a.Fragment,null,a.a.createElement(Se,{dark:w},"\u300e\u30c9\u30ed\u30c3\u30d7\u30be\u30fc\u30f3\u300f"),w?a.a.createElement(Se,{dark:!0},"Drop the files here"):a.a.createElement(Se,null,"Drop files here or click to select files"),w&&a.a.createElement(ke,null))),a.a.createElement(se,{recordings:t,renaming:f,onPlayAudio:b,onSetRename:p,onRenameFile:g,onDeleteFile:y}))};function De(){var e=Object(i.a)(["\n  display: flex;\n"]);return De=function(){return e},e}var Ae=u.a.div(De()),Fe=function(){var e=h(),n=e.playing,t=e.stream;return a.a.createElement(Ae,null,a.a.createElement("div",null,"\u4eca\u30d7\u30ec\u30a4\u4e2d:"),n&&a.a.createElement("div",null,n.name),t&&!n&&a.a.createElement("div",null,"Mic Input"))};function Me(){var e=Object(i.a)(["\n  color: white;\n"]);return Me=function(){return e},e}function Ue(){var e=Object(i.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid white;\n  justify-content: space-between;\n  padding: 10px;\n  display: flex;\n  font-size: 13px;\n"]);return Ue=function(){return e},e}var Te=u.a.div(Ue()),Le=u.a.div(Me()),qe=function(){var e=[h(),O()],n=e[0],t=e[1];return a.a.createElement(Te,null,a.a.createElement(Le,null,a.a.createElement("span",null,"quality"),a.a.createElement("span",null,a.a.createElement("select",{defaultValue:n.perf,value:n.perf,onChange:function(e){return t({type:"setPerf",payload:e.target.value})}},a.a.createElement("option",{value:"potato"},"Potato"),a.a.createElement("option",{value:"low"},"Low"),a.a.createElement("option",{value:"normal"},"Normal"),a.a.createElement("option",{value:"high"},"High"),a.a.createElement("option",{value:"very high"},"Very High"),a.a.createElement("option",{value:"pikoh"},"pikoh")))),a.a.createElement(Le,null,a.a.createElement("span",null,"echo"),a.a.createElement("span",null,a.a.createElement("input",{type:"checkbox",checked:n.echo,onChange:function(e){t({type:"setEcho",payload:e.target.checked})}}))),a.a.createElement(Le,null,"save to idb"),a.a.createElement(Le,null,"hotkeys"),a.a.createElement(Le,null,"help"),a.a.createElement(Le,null,"exit"))},ze=t(26),Be=t.n(ze),Ie=(t(46),t(14)),Ve=t.n(Ie),Ge=t(27),He=t.n(Ge);function Ne(){var e=Object(i.a)(["\n  text-align: center;\n  margin: auto;\n"]);return Ne=function(){return e},e}function Je(){var e=Object(i.a)(["\n  font-family: 'Share Tech Mono';\n  background-color: #8795e8;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: white;\n"]);return Je=function(){return e},e}function We(){var e=Object(i.a)(["\n  font-family: 'Share Tech Mono';\n  background-color: #8795e8;\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]);return We=function(){return e},e}function _e(){var e=Object(i.a)(["\n  width: 300px;\n  height: 300px;\n  padding: 30px;\n  margin-bottom: 30px;\n  margin-right: 200px;\n  margin-left: 60px;\n  overflow: hidden;\n  background-position: cover;\n  background-image: url(",");\n"]);return _e=function(){return e},e}function Ke(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]);return Ke=function(){return e},e}var Xe=Object(u.a)(he)(Ke());Ve.a.setAppElement("#root");var Ye={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",padding:0,transform:"translate(-50%, -50%)",border:"none",borderRadius:0},overlay:{position:"static",border:"none",borderRadius:0}},Ze=u.a.div(_e(),He.a),$e=u.a.div(We()),Qe=u.a.p(Je()),en=u.a.button(Ne()),nn=function(){var e=Object(r.useState)(!1),n=Object(l.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){"suspended"===F.context.state&&c(!0),"running"===F.context.state&&c(!1)}),[]),a.a.createElement(Ve.a,{isOpen:t,onRequestClose:function(){return c(!1)},style:Ye},a.a.createElement(Xe,null,a.a.createElement(Ze,null,a.a.createElement($e,null,"Unpause AudioContext"),a.a.createElement(Qe,null,"Audio Context API is ask for user interaction to unpause"),a.a.createElement(en,{onClick:function(){return F.context.resume().then((function(){c(!1)}))}},"Unpause"))))};function tn(){var e=Object(i.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  position: fixed;\n  width: 111px;\n  height: 111px;\n  bottom: 0;\n  right: 0;\n"]);return tn=function(){return e},e}function rn(){var e=Object(i.a)(["\n  font-family: 'Liu Jian Mao Cao';\n  font-size: 80px;\n  color: white;\n"]);return rn=function(){return e},e}function an(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 1000px;\n  margin-top: 30px;\n"]);return an=function(){return e},e}var cn=u.a.div(an()),on=u.a.div(rn()),un=u.a.div(tn(),Be.a),ln=function(){return a.a.createElement(g,null,a.a.createElement("div",{className:"App"},a.a.createElement(on,null,"SpeccAnal"),a.a.createElement(Fe,null),a.a.createElement(L,null),a.a.createElement(qe,null),a.a.createElement(cn,null,a.a.createElement(Re,null),a.a.createElement(be,null)),a.a.createElement(nn,null),a.a.createElement(un,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(ln,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);