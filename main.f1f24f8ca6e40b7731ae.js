(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r={body:document.querySelector("body"),startBtn:document.querySelector('[data-action="start"]'),stopBtn:document.querySelector('[data-action="stop"]')},a=null;r.startBtn.addEventListener("click",(function(){a=setInterval(c,1e3),r.startBtn.disabled="true"})),r.stopBtn.addEventListener("click",(function(){clearInterval(a),r.startBtn.removeAttribute("disabled")}));function c(){var t,n,e=(t=0,n=o.length,Math.floor(Math.random()*(n-t+1)+t));r.body.style.backgroundColor=o[e]}}},[["QfWi",1]]]);
//# sourceMappingURL=main.f1f24f8ca6e40b7731ae.js.map