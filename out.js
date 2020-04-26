!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function e(){o(this,e),this.x=0,this.y=0,this.direction="right"},a=function e(){o(this,e),this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())},c=function(){function e(){o(this,e),this.board=document.querySelectorAll("#board div"),this.game=document.querySelector(".game"),this.car=new i,this.cone=new a,this.score=0}var t,n,c;return t=e,(n=[{key:"index",value:function(e,t){return e+10*t}},{key:"hideVisibleCar",value:function(){for(var e=0;e<this.board.length;e++)this.board[e].classList.remove("car")}},{key:"showCar",value:function(){this.hideVisibleCar();var e=this.index(this.car.x,this.car.y);this.board[e].classList.add("car")}},{key:"showCone",value:function(){var e=this.index(this.cone.x,this.cone.y);this.board[e].classList.add("cone")}},{key:"moveCar",value:function(){"right"===this.car.direction?this.car.x=this.car.x+1:"left"===this.car.direction?this.car.x=this.car.x-1:"up"===this.car.direction?this.car.y=this.car.y+1:"down"===this.car.direction&&(this.car.y=this.car.y-1),this.gameOver(),this.showCar(),this.checkConeCollision()}},{key:"turnCar",value:function(e){switch(e.which){case 37:this.car.direction="left";break;case 38:this.car.direction="down";break;case 39:this.car.direction="right";break;case 40:this.car.direction="up"}}},{key:"checkConeCollision",value:function(){this.car.x===this.cone.x&&this.car.y===this.cone.y&&(this.score+=1,document.querySelector("span").innerText=this.score,document.querySelector(".result").innerText=this.score,document.querySelector(".cone").classList.remove("cone"),this.cone=new a,this.showCone())}},{key:"startGame",value:function(){var e=this;this.showCar(),this.showCone(),this.idSetInterval=setInterval((function(){e.moveCar()}),250)}},{key:"gameOver",value:function(){if(this.car.x<0||this.car.x>9||this.car.y<0||this.car.y>9){
//!
clearInterval(this.idSetInterval);var e=document.getElementById("game-over");this.game.style.display="none",e.style.display="block"}}}])&&r(t.prototype,n),c&&r(t,c),e}();document.getElementById("start-btn").addEventListener("click",(function(){document.querySelector("#start").classList.add("invisible"),document.querySelector(".game").classList.remove("invisible");var e=new c;e.startGame(),document.addEventListener("keydown",(function(t){e.turnCar(t)}))})),document.querySelector("#try-again-btn").addEventListener("click",(function(){window.location.reload(!0)}))},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:m(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,p=0;function m(e,t){var n,r,o;if(t.singleton){var i=p++;n=b||(b=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){var r=n(4),o=n(5),i=n(6),a=n(7),c=n(8);t=r(!1);var s=o(i),u=o(a),l=o(c);t.push([e.i,"*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{margin:0;padding:0;background-color:#573dd9}button{outline:none}.car{background-image:url("+s+");background-repeat:no-repeat;background-size:contain;background-position:center;border:4px solid  #f23557}.cone{background-image:url("+u+");background-repeat:no-repeat;background-size:cover;border:4px solid  #12e2a3}section#start{position:relative;width:100vw;height:100vh;background-color:#12e2a3}section#start button{position:absolute;width:30rem;height:30rem;left:50%;top:25%;z-index:1;color:#fff1c1;font-size:3rem;font-weight:bold;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:50%;cursor:pointer;text-align:center;font-family:'Amatic SC', cursive;background-color:#573dd9;border:20px solid #f23557}section#start button:hover{-webkit-transition:font-size 0.5s;transition:font-size 0.5s;font-size:6rem}#board{width:800px;height:650px;margin:1em auto}#board div{width:64px;height:64px;margin:5px;float:left;border-radius:50%;background-color:white}section#score-board div{position:absolute;width:15em;height:15em;right:10%;top:40%;text-align:center;border-radius:50%;margin:1em auto;background-color:#12e2a3;border:8px solid #f23557}section#score-board div span{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-weight:900;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:15rem;color:#f23557;font-family:'Amatic SC'}section#game-over{position:absolute;width:45rem;height:45rem;left:50%;top:50%;z-index:1;background-image:url("+l+");background-position:center;background-repeat:no-repeat;background-color:white;text-align:center;font-size:2rem;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-radius:50%;border:20px solid #f23558cc}section#game-over button{position:absolute;width:15rem;height:15rem;left:100%;top:60%;z-index:1;padding:20px;text-align:center;font-size:2rem;font-weight:bold;font-family:'Amatic SC', cursive;-webkit-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;color:white;border-radius:50%;border:20px solid #f23557;background-color:#573dd9}section#game-over button:hover{-webkit-transition:font-size 0.5s;transition:font-size 0.5s;font-size:3rem}section#score-game-over div{position:absolute;width:10em;height:10em;right:110%;top:0%;margin:1em auto;text-align:center;border:8px solid #f23557;border-radius:50%;background-color:#12e2a3}section#score-game-over div span{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:3rem;color:white;font-family:'Amatic SC', cursive}section#score-game-over div .result{font-size:10rem;font-weight:700}.invisible{display:none}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"dadc7853b48598ece5a36ce0db5773b3.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"8c51419a6a0cf8fd52adbe0bb570a638.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"6fb86026ec985a2f283fbc5ffa9a15cf.png"}]);