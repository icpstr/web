import './style.css'
import icm from './assets/icm.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
    <canvas data-src="${icm}" alt="ICM Logo" class="logo" width="200" height="200" style="image-rendering: pixelated; width: 200px; height: 200px;"></canvas>
  </div>
</a>
<h1 style="position: fixed; bottom: 20px; left: 10px; font-size: 12px; color: white; opacity: 1; z-index: 1; text-align: right; pointer-events: none;">a resume-worthy invention by stephen hellings, stephen.hellings.cc</h1>
</div>
`


const canvas = document.querySelector('.logo') as HTMLCanvasElement;
const ctx = canvas!.getContext('2d');
const img = new Image();
img.addEventListener('load', () => {
  ctx!.imageSmoothingEnabled = false;
  ctx!.globalAlpha = 0.5;
  let f = 0;
  const rdr = () => {
    f++;
    if (f > 360) {
      f = 0;
    }
    const gradient = ctx!.createConicGradient(0, canvas.width / 2, canvas.height / 2);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(0.25, 'hsla(' + (f % 360) + ', 100%, 50%)');
    gradient.addColorStop(0.50, 'hsla(' + ((f + (360/3)) % 360) + ', 100%, 50%)');
    gradient.addColorStop(0.75, 'hsla(' + ((f + (2*360/3)) % 360) + ', 100%, 50%)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');

    ctx!.fillStyle = gradient;
    ctx!.fillRect(0, 0, canvas.width, canvas.height);
    ctx!.drawImage(img, 0, 0, canvas.width, canvas.height);

    requestAnimationFrame(rdr);
  }
  requestAnimationFrame(rdr);
  console.log('ICM logo loaded and drawn on canvas');
});
console.log('Setting image source to:', canvas.dataset.src);
img.src = canvas.dataset.src!;