!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=!1,o=void 0;const a=document.getElementById("togglePlay");let d=[];function l(){const e=(new Date).getHours(),t=function(e){let t=d[e],n=Math.ceil(4*Math.random());for(;t&&t===n;)n=Math.ceil(4*Math.random());return d[e]=n,e+"."+n}(e);var n,r;n=e,r=t,document.getElementById("audioSrc").src=`music/${n}/${r}.mp3`,o.load()}o=document.getElementById("audio"),o.addEventListener("ended",()=>{l(),o.play()}),o.addEventListener("timeupdate",()=>{const e=o.currentTime/o.duration;document.getElementById("completed").style.flexBasis=100*e+"%"}),o.addEventListener("error",e=>{l(),o.play()},!0),l();const i=document.getElementById("timeDisplay"),u=document.getElementById("gradient"),c=document.getElementById("effectsLayer");function s(){const e=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0}).replace("AM","").replace("PM","");i.innerText=e;var t;u.style.transform="translateY(-500vh)",c.style.opacity=(t=5,1-Math.exp(-((t-13)**4)/4096))}document.addEventListener("DOMContentLoaded",e=>{s(),setInterval(s,1e3),function(){for(var e=document.getElementById("stars"),t=0;t<800;t++){var n=document.createElement("div");n.className="star",e.appendChild(n)}var r=document.getElementsByClassName("star");for(let e of r){var o=.2+Math.random(),a=500+1800*Math.random();e.style.transformOrigin="0 0 "+a+"px",e.style.transform="translate3d(0,0,-"+a+"px) rotateY("+360*Math.random()+"deg) rotateX("+-50*Math.random()+"deg) scale("+o+","+o+")"}}(),document.getElementById("togglePlay").addEventListener("click",()=>{r?(a.innerText="►",o.pause()):(a.innerText="❚❚",o.play()),r=!r})})}]);