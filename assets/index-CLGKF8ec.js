(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR4AdSPMQ6CQBBFf2i139rGVmksvIPnsDKewHto5y28g1Y2Fh6BhFBwANi/yRAyBGaBioQXZnZm3s4mAKo5UIBrem/wMuwOjyjYGwQMpmIKvu8z2uiLTIF+zmiBHtC5uUF7fR1TZgrYdLqUEJjjVSDgkyiB7+v9FiBwzvWuz0LnCdaArif6gNZYOBs2+GxTCBxebfYQmOfZDwLz4/MPwjgI1sUNAg8l5n8oZ60GAAD//8Se94AAAAAGSURBVAMAUzFhcGaQb18AAAAASUVORK5CYII=`;document.querySelector(`#app`).innerHTML=`
<div>
<div style="position: fixed; top: 50%; right: 0; transform: translateY(-50%); color: white; opacity: 0.1; font-size: 12px; text-align: right; pointer-events: none; font-size: 10rem; z-index: 0;">
<ul style="list-style: none; padding: 0; margin: 0;">
<li>WRITTEN IN C</li>
<li>XWAYLAND SUPPORT</li>
<li>IPC OVER UDS</li>
<li>ANIMATIONS</li>
<li>4x4 MATRIX TRANSFORMS</li>
<li>WINDOW DECORATIONS</li>
<li>KEYBINDINGS</li>
<li>CLICK REGIONS</li>
<li>EXTERNAL LAYOUT MANAGERS</li>
<li>DIRECT RENDERING UTILITIES</li>
</ul>
</div>
<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white;">
  <h1>icm</h1>
  <p style="max-width: 400px; text-align: center; font-size: 14px; opacity: 0.8;">
    icm is just a boring wlroots compositor, a bash auto-launch script and a basic unix domain socket<br/>exposing abstractions over what you need and the fun stuff you want.<br/><br/>
    so yeah, build that desktop environment you dreamed of in 2000 LoC, and have fun doing it.<br/>
    enjoy the simple lifestyle of not reinventing the wheel and focusing just on your stunning design with no cluttery web frameworks or wayland protocol implementations in sight.<br/><br/>
    icm remains easily-packageable, modular and hot-swappable as themed distro-rollers and nerdy individuals deem fit<br/>
    it's truly <i>un-revolutionary</i>.
  <p/>
</div>
<a href="https://github.com/icpstr/icm" target="_blank">
  <div class="icm" style="min-width: 100vw; min-height: 100vh; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center;">
    <canvas data-src="${e}" alt="ICM Logo" class="logo" width="200" height="200" style="image-rendering: pixelated; width: 200px; height: 200px;"></canvas>
  </div>
</a>
<h1 style="position: fixed; bottom: 20px; left: 10px; font-size: 12px; color: white; opacity: 1; z-index: 1; text-align: right; pointer-events: none;">a resume-worthy invention by stephen hellings, stephen.hellings.cc</h1>
</div>
`;var t=document.querySelector(`.logo`),n=t.getContext(`2d`),r=new Image;r.addEventListener(`load`,()=>{n.imageSmoothingEnabled=!1,n.globalAlpha=.5;let e=0,i=()=>{e++,e>360&&(e=0);let a=n.createConicGradient(0,t.width/2,t.height/2);a.addColorStop(0,`rgba(255, 255, 255, 0.5)`),a.addColorStop(.25,`hsla(`+e%360+`, 100%, 50%)`),a.addColorStop(.5,`hsla(`+(e+360/3)%360+`, 100%, 50%)`),a.addColorStop(.75,`hsla(`+(e+2*360/3)%360+`, 100%, 50%)`),a.addColorStop(1,`rgba(255, 255, 255, 0.5)`),n.fillStyle=a,n.fillRect(0,0,t.width,t.height),n.drawImage(r,0,0,t.width,t.height),requestAnimationFrame(i)};requestAnimationFrame(i),console.log(`ICM logo loaded and drawn on canvas`)}),console.log(`Setting image source to:`,t.dataset.src),r.src=t.dataset.src;