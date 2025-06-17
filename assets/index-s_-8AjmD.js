(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const x of d.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&l(x)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function Header(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".splash-toggle");let i=!window.matchMedia("(max-width: 768px)").matches;function r(){const t=document.querySelector(".splash-toggle"),b=document.querySelector(".splash-toggle-icon"),S=document.querySelector(".splash-toggle-text");i?(t.classList.add("active"),b.innerHTML=`
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          `,S.textContent="ON"):(t.classList.remove("active"),b.innerHTML=`
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 12M6 6l12 12"></path>
          `,S.textContent="OFF")}n&&n.addEventListener("click",()=>{i=!i,r(),window.dispatchEvent(new CustomEvent("splashToggle",{detail:{enabled:i}}))}),r(),window.addEventListener("resize",()=>{window.matchMedia("(max-width: 768px)").matches&&i&&(i=!1,r(),window.dispatchEvent(new CustomEvent("splashToggle",{detail:{enabled:!1}})))});const l=document.querySelector(".mobile-menu-button"),c=document.querySelector(".mobile-menu"),d=document.querySelectorAll(".mobile-menu a");l&&c&&(l.addEventListener("click",()=>{c.classList.toggle("hidden"),l.classList.toggle("active")}),d.forEach(t=>{t.addEventListener("click",()=>{c.classList.add("hidden"),l.classList.remove("active")})}));const x=document.querySelectorAll("section[id]"),w=document.querySelectorAll(".nav-link");function y(){const t=window.pageYOffset;x.forEach(b=>{const S=b.offsetHeight,A=b.offsetTop-150,O=b.getAttribute("id");t>A&&t<=A+S&&w.forEach(N=>{N.classList.remove("active"),N.getAttribute("href").substring(1)===O&&N.classList.add("active")})})}window.addEventListener("scroll",y),y()}),`
  <!-- Left-aligned contact info bar - Hidden on mobile -->
  <div class="fixed left-2 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-800">
    <a href="mailto:adamelalami27@gmail.com" target="_blank" rel="noopener" class="group" aria-label="Email">
      <svg class="w-5 h-5 text-gray-300 group-hover:text-orange-400 transition-all duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25ZM3.75 7.5l7.5 6 7.5-6"/></svg>
    </a>
    <a href="https://github.com/ELALAMIADAM" target="_blank" rel="noopener" class="group" aria-label="GitHub">
      <svg class="w-5 h-5 text-gray-300 group-hover:text-orange-400 transition-all duration-300 transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/adam-el-alami-502170215/" target="_blank" rel="noopener" class="group" aria-label="LinkedIn">
      <svg class="w-5 h-5 text-gray-300 group-hover:text-orange-400 transition-all duration-300 transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5 .606z"/></svg>
    </a>
  </div>

  <!-- Right-aligned splash cursor toggle - Hidden on mobile -->
  <div class="fixed right-2 top-1/2 -translate-y-1/2 z-50 hidden md:block">
    <button class="splash-toggle group relative bg-black/40 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-800 hover:bg-black/60 transition-all duration-300 hover:scale-105" aria-label="Toggle Splash Cursor">
      <div class="flex flex-col items-center gap-2">
        <div class="relative overflow-hidden">
          <svg class="splash-toggle-icon w-5 h-5 text-gray-300 group-hover:text-orange-400 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <span class="splash-toggle-text text-xs font-mono text-gray-400 group-hover:text-orange-400 transition-colors duration-300">ON</span>
      </div>
      
      <!-- Animated background effect -->
      <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <!-- Pulse effect when active -->
      <div class="absolute inset-0 rounded-lg bg-orange-400/10 opacity-0 transition-opacity duration-300"></div>
    </button>
  </div>

  <header class="smooth-header fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300">
    <nav class="container mx-auto px-4 md:px-6 py-4">
      <div class="flex items-center justify-between">
        <div id="header-name" class="text-xl md:text-2xl font-bold opacity-0 transform translate-y-2 transition-all duration-1000">
          <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">EL ALAMI Adam</span>
        </div>

        <!-- Mobile menu button -->
        <button class="mobile-menu-button md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors ml-30">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <ul class="nav-links hidden md:flex ">
          <li>
            <a href="#home" class="ml-100 nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#about" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#education" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Education
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#skills" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Skills
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#experience" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Experience
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#projects" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Projects
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#contact" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-menu hidden md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
        <ul class="py-4 px-6 space-y-4">
          <li>
            <a href="#home" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              About
            </a>
          </li>
          <li>
            <a href="#education" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <style>
    .nav-link.active {
      color: white;
    }
    .nav-link.active span {
      width: 100%;
    }
    .nav-link:hover span {
      width: 100%;
    }
    .smooth-header {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .smooth-header.scrolled {
      padding: 0.5rem 0;
      background: rgba(0, 0, 0, 0.95);
    }
    @keyframes colorLoop {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .color-loop-text {
      background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6c5ce7);
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: colorLoop 5s ease infinite;
    }
    .mobile-menu-button.active svg {
      transform: rotate(90deg);
    }
    .mobile-menu-button svg {
      transition: transform 0.3s ease;
    }
    
    /* Splash toggle animations */
    .splash-toggle.active {
      background: rgba(255, 107, 53, 0.15) !important;
      border-color: rgba(255, 107, 53, 0.3);
      box-shadow: 0 0 20px rgba(255, 107, 53, 0.2);
    }
    
    .splash-toggle.active .splash-toggle-icon {
      color: #ff6b35;
      animation: pulseGlow 2s ease-in-out infinite;
    }
    
    .splash-toggle.active .splash-toggle-text {
      color: #ff6b35;
    }
    
    .splash-toggle.active .absolute:last-child {
      opacity: 1;
      animation: pulseBackground 2s ease-in-out infinite;
    }
    
    @keyframes pulseGlow {
      0%, 100% {
        filter: drop-shadow(0 0 5px rgba(255, 107, 53, 0.5));
        transform: scale(1);
      }
      50% {
        filter: drop-shadow(0 0 15px rgba(255, 107, 53, 0.8));
        transform: scale(1.05);
      }
    }
    
    @keyframes pulseBackground {
      0%, 100% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.2;
      }
    }
    
    .splash-toggle-icon svg {
      transition: all 0.3s ease;
    }
  </style>
  `}function HeroSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){function n(i,r){let l=0;const c=Math.ceil(r/1e4),d=()=>{l+=c,l>=r?i.textContent=r+(r===365?"":"+"):(i.textContent=l,requestAnimationFrame(d))};d()}document.querySelectorAll(".stat-number").forEach(i=>{const r=parseInt(i.getAttribute("data-target"),20);n(i,r)})}),`
  
  <section id="home" class="rockstar-section bg-black py-16 ">
    <div class="section-content max-w-5xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <!-- Left: Description -->
      <div class="md:w-1/2 w-full mb-10 md:mb-0">
        <p class="text-lg font-semibold mb-2 appear-on-scroll text-white">Hi, my name is</p>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 appear-on-scroll text-gradient">ADAM EL ALAMI</h1>
        <p class="text-xl mb-6 appear-on-scroll text-white">Software Developer passionate about building impactful digital experiences.</p>
        <div class="flex gap-4 mt-4 appear-on-scroll justify-center md:justify-start">
          <a href="#contact" class="font-semibold px-6 py-2 rounded-lg shadow transition-colors text-white bg-gradient-to-r from-yellow-400 to-red-500 border-0 hover:scale-105 focus:scale-105 ">Contact me</a>
          <a href="#about" class="ml-2 border font-semibold px-6 py-2 rounded-lg shadow transition-colors text-gradient border-yellow-400 hover:bg-yellow-400 hover:scale-105 hover:border-yellow-400 focus:bg-yellow-400 focus:text-black focus:border-yellow-400">Check Portfolio</a>
        </div>
      </div>
      <!-- Right: Single Image -->
      <div class="md:w-1/2 w-full flex justify-center md:justify-end">
        <div class="relative w-64 h-80 flex items-center justify-center">
          <!-- Single main image -->
          <img
            src="/images/Adam.jpg"
            alt="Adam"
            class="relative w-64 h-80 object-cover rounded-3xl shadow-2xl z-10"
          />
        </div>
      </div>
    </div>
    <!-- Stats Row -->
    <div class="max-w-3xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-black bg-opacity-40 rounded-xl py-6 px-4 appear-on-scroll">
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="10">0</p>
        <p class="text-sm text-white">Repositories</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="30">0</p>
        <p class="text-sm text-white">Technologies Mastered</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="10">0</p>
        <p class="text-sm text-white">Projects</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="2">0</p>
        <p class="text-sm text-white">Years of Experience</p>
      </div>
    </div>
    <div class="mt-12 flex justify-center appear-on-scroll">
      <a href="#about" class="inline-block animate-bounce">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="color:#e63946;">
          <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </section>
  `}function AboutSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){const n=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&r.target.classList.add("show")})},{threshold:.1});document.querySelectorAll(".about-paragraph").forEach(i=>{n.observe(i)})}),`
  <section id="about" class="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-[#090909] to-[#1a1a1a] py-16">
    <div class="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      <!-- Left: Text -->
      <div class="flex-1">
        <div class="uppercase tracking-widest text-sm text-gray-400 font-semibold mt-12">Know About Me</div>
        <h2 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
          Software Engineer and a little bit of<br/>
          <span class="inline-block"> <span class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent font-bold">everything</span></span>
        </h2>
        <div class="space-y-6 text-white/90">
          <p class="about-paragraph text-lg leading-relaxed">
            I'm a software engineer passionate about building efficient systems and solving complex problems. With expertise in backend development and data engineering, I enjoy working with Python, Java, and JavaScript to create scalable solutions.           </p>
          <p class="about-paragraph text-lg leading-relaxed">
            A lifelong learner at heart, I thrive in dynamic environments where I can grow my skills while delivering impactful results. Fluent in French, English, and Arabic, I bring both technical rigor and a global perspective to every challenge.          </p>

          <p class="about-paragraph text-lg leading-relaxed font-semibold">
            Let's connect and explore the possibilities of technology together!
          </p>
        </div>
      </div>
      <!-- Right: Logo/Image -->
      <div class="flex-1 flex justify-center items-center">
        <div class="rounded-full bg-gradient-to-tr from-blue-700 via-blue-400 to-indigo-500 p-1 shadow-2xl">
          <div class="bg-black rounded-full flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
            <div class="relative w-40 h-40 md:w-64 md:h-64 group">
              <img
                src="/images/ae-removebg-preview.png"
                alt="AE Logo"
                class="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src="/images/IMG_20250330_215752_781.webp"
                alt="Adam"
                class="absolute inset-0 w-full h-full object-cover rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function EducationSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){function n(){const i=document.getElementById("education");if(!i)return;const r={glitchColors:["#ff6b35","#ffd93d","#ff8500"],glitchSpeed:80,fontSize:16,charWidth:10,charHeight:20},l=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"],c=document.createElement("div");c.style.cssText=`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        `;const d=document.createElement("canvas");d.style.cssText=`
          display: block;
          width: 100%;
          height: 100%;
        `;const x=document.createElement("div");x.style.cssText=`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 100%);
        `,c.appendChild(d),c.appendChild(x),i.style.position="relative",i.insertBefore(c,i.firstChild);const w=d.getContext("2d");let y=[],t={columns:0},b,S=Date.now();function A(){return l[Math.floor(Math.random()*l.length)]}function O(){return r.glitchColors[Math.floor(Math.random()*r.glitchColors.length)]}function N(p){const h=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;p=p.replace(h,(P,T,D,g)=>T+T+D+D+g+g);const v=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p);return v?{r:parseInt(v[1],16),g:parseInt(v[2],16),b:parseInt(v[3],16)}:null}function _(p,h,v){const P={r:Math.round(p.r+(h.r-p.r)*v),g:Math.round(p.g+(h.g-p.g)*v),b:Math.round(p.b+(h.b-p.b)*v)};return`rgb(${P.r}, ${P.g}, ${P.b})`}function B(p,h){const v=Math.ceil(p/r.charWidth),P=Math.ceil(h/r.charHeight);return{columns:v,rows:P}}function H(p,h){t={columns:p,rows:h};const v=p*h;y=Array.from({length:v},()=>({char:A(),color:O(),targetColor:O(),colorProgress:1}))}function k(){const p=i.getBoundingClientRect(),h=window.devicePixelRatio||1;d.width=p.width*h,d.height=p.height*h,d.style.width=`${p.width}px`,d.style.height=`${p.height}px`,w.setTransform(h,0,0,h,0,0);const{columns:v,rows:P}=B(p.width,p.height);H(v,P),j()}function j(){if(!w||y.length===0)return;const p=i.getBoundingClientRect();w.clearRect(0,0,p.width,p.height),w.font=`${r.fontSize}px monospace`,w.textBaseline="top",y.forEach((h,v)=>{const P=v%t.columns*r.charWidth,T=Math.floor(v/t.columns)*r.charHeight;w.fillStyle=h.color,w.fillText(h.char,P,T)})}function F(){if(!y||y.length===0)return;const p=Math.max(1,Math.floor(y.length*.05));for(let h=0;h<p;h++){const v=Math.floor(Math.random()*y.length);y[v]&&(y[v].char=A(),y[v].targetColor=O(),y[v].colorProgress=0)}}function z(){let p=!1;y.forEach(h=>{if(h.colorProgress<1){h.colorProgress+=.05,h.colorProgress>1&&(h.colorProgress=1);const v=N(h.color),P=N(h.targetColor);v&&P&&(h.color=_(v,P,h.colorProgress),p=!0)}}),p&&j()}function M(){const p=Date.now();p-S>=r.glitchSpeed&&(F(),j(),S=p),z(),b=requestAnimationFrame(M)}k(),M();let C;function R(){clearTimeout(C),C=setTimeout(()=>{cancelAnimationFrame(b),k(),M()},100)}window.addEventListener("resize",R),window.addEventListener("beforeunload",()=>{cancelAnimationFrame(b),window.removeEventListener("resize",R)})}n()}),`
  <section id="education" class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#090909] to-[#1a1a1a] py-16 overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-center">Education</h2>
      <div class="space-y-10">
        <!-- ENIB Brest -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll relative z-20">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="https://wiki.lesfabriquesduponant.net/images/4/48/Logo-enib.png" alt="ENIB Brest Logo" class="object-contain h-16" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="https://www.enib.fr/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">Brest national school of engineering</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 md:mt-0 font-semibold">Sept. 2023 - Sept. 2025</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Software Engineer's Degree | Brest, FR</p>
          </div>
        </div>
        <!-- ENSAM Meknes -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll relative z-20">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="https://media.licdn.com/dms/image/v2/C4D0BAQGdzavIDZgbEA/company-logo_200_200/company-logo_200_200/0/1630503044596/cole_nationale_suprieure_d_arts_et_mtiers_ensam_mknes_______logo?e=2147483647&v=beta&t=i0T8AX3IfqDqhCR_CIqwbxpx3k8t_1ljYY1zm1huKr8" alt="ENSAM Meknes Logo" class="object-contain h-16" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="http://www.ensam-umi.ac.ma/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">National Higher School of Arts and Crafts</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 ml-4 md:mt-0 font-semibold">Sept. 2019 - July 2023</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Engineer's Degree | Meknes, MA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function SkillsSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll("#skills-filter-row button"),i=document.querySelectorAll(".skill-pill");n.forEach(function(r){r.addEventListener("click",function(){var l=r.getAttribute("data-skilltype");n.forEach(c=>{c.classList.remove("bg-gradient-to-r","from-red-500","via-orange-500","to-yellow-500","text-white","font-bold","ring-2","ring-orange-400","scale-105")}),r.classList.add("bg-gradient-to-r","from-red-500","via-orange-500","to-yellow-500","text-white","font-bold","ring-2","ring-orange-400","scale-105"),i.forEach(function(c){l==="all"||c.getAttribute("data-skilltype")===l?c.style.display="":c.style.display="none"})})})}),`
  <section id="skills" class="rockstar-section bg-rockstar">
    <div class="section-content relative">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent text-center">Skills</h2>
      <div class="flex flex-wrap gap-3 mb-4 justify-center" id="skills-filter-row">
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-sm font-bold shadow ring-2 ring-orange-200 scale-105 transition-all" data-skilltype="all">All</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="dev">Dev</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="data">Data/AI</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="Tools">Tools</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="soft">Soft Skills</button>
      </div>
      <div class="flex flex-wrap gap-3 justify-center" id="skills-list">
        <a href="https://www.python.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/python.png" class="h-5 w-5 object-contain mr-2" alt="Python"/>Python</a>
        <a href="https://www.java.com/fr/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/java.png" class="h-5 w-5 object-contain mr-2" alt="Java"/>Java</a>
        <a href="https://cplusplus.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/Cpp.png"  class="h-5 w-5 object-contain mr-2" alt="C++"/>C++</a>
        <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/js.png" class="h-5 w-5 object-contain mr-2" alt="JavaScript"/>Javascript</a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/ts.png" class="h-5 w-5 object-contain mr-2" alt="Typescript"/>Typescript</a>
        <a href="https://webassembly.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev">Assembly</a>
        <a href="https://react.dev/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/react.png" class="h-5 w-5 object-contain mr-2" alt="React"/>React</a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/nodejs.png" class="h-5 w-5 object-contain mr-2" alt="Node.js"/>Node.js</a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/nextjs.png" class="h-5 w-5 object-contain mr-2" alt="Next.js"/>Next.js</a>
        <a href="https://expressjs.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/expressjs.png" class="h-5 w-5 object-contain mr-2" alt="Express.js"/>Express.js</a>
        <a href="https://pypi.org/project/Flask/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev">Flask</a>        
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/tailwind.png" class="h-5 w-5 object-contain mr-2" alt="TailwindCSS"/>TailwindCSS</a>
        <a href="https://github.com/ELALAMIADAM/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="/images/github.png" class="h-5 w-5 object-contain mr-2" alt="Github"/>Github</a>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="/images/VS.png" class="h-5 w-5 object-contain mr-2" alt="Visual Studio Code"/>Visual Studio Code</a>
        <a href="https://www.cursor.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="/images/cursor.jpeg" class="h-5 w-5 object-contain mr-2" alt="Cursor"/>Cursor</a>
        <a href="https://www.eclipse.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="/images/eclipse_94656.webp" class="h-5 w-5 object-contain mr-2" alt="Eclipse"/>Eclipse</a>
        <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="/images/idea.webp" class="h-5 w-5 object-contain mr-2" alt="IntelliJ IDEA"/>IntelliJ IDEA</a>
        <a href="https://www.docker.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="/images/docker.png" class="h-5 w-5 object-contain mr-2" alt="Docker"/>Docker</a>
        <a href="https://www.oracle.com/analytics/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/oracle.png" class="h-5 w-5 object-contain mr-2" alt="Oracle Analytics"/>Oracle Analytics</a>
        <a href="https://www.starburst.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/starburst.png" class="h-5 w-5 object-contain mr-2" alt="Starburst"/>Starburst</a>
        <a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/ETL.png" class="h-5 w-5 object-contain mr-2" alt="ETL"/>ETL</a>
        <a href="https://pig.apache.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/pig.png" class="h-5 w-5 object-contain mr-2" alt="PIG Latin"/>PIG Latin</a>
        <a href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/nlp.png" class="h-5 w-5 object-contain mr-2" alt="NLP"/>NLP</a>
        <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/ML.png" class="h-5 w-5 object-contain mr-2" alt="ML & DL"/>ML & DL</a>
        <a href="https://www.sqlite.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/sqlite.png" class="h-5 w-5 object-contain mr-2" alt="SQLite"/>SQLite</a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/mysql.png" class="h-5 w-5 object-contain mr-2" alt="MySQL"/>MySQL</a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/postgres.png" class="h-5 w-5 object-contain mr-2" alt="PostgreSQL"/>PostgreSQL</a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/mongo.png" class="h-5 w-5 object-contain mr-2" alt="MongoDB"/>MongoDB</a>
        <a href="https://streamlit.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="/images/streamlit.png" class="h-5 w-5 object-contain mr-2" alt="Streamlit"/>Streamlit</a>
        <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="/images/jira.png" class="h-5 w-5 object-contain mr-2" alt="Jira"/>Jira</a>
        <a href="https://en.wikipedia.org/wiki/Teamwork" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="/images/3135715.png" class="h-5 w-5 object-contain mr-2" alt="Teamwork"/>Teamwork</a>
        <a href="https://en.wikipedia.org/wiki/Communication" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="/images/190411.png" class="h-5 w-5 object-contain mr-2" alt="Communication"/>Communication</a>
        <a href="https://en.wikipedia.org/wiki/Problem_solving" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="/images/1828884.png" class="h-5 w-5 object-contain mr-2" alt="Problem Solving"/>Problem Solving</a>
      </div>
      <p class="text-center text-white/70 mt-6">...and many more!</p>
    </div>
  </section>
  `}function ExperienceSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("experience-carousel-track"),i=document.querySelectorAll(".experience-arkeabs-desc"),r=!1;if(n&&i.length){let B=function(k){i.forEach(function(R,p){p===k?R.classList.remove("hidden"):R.classList.add("hidden")});var j=document.getElementById("exp-logo-0"),F=document.getElementById("exp-logo-1"),z=document.getElementById("exp-logo-2"),M=document.getElementById("exp-logo-3"),C=document.getElementById("exp-logo-5");j&&F&&z&&M&&C&&([j,F,z,M,C].forEach(function(R){R.classList.remove("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","text-white","font-bold","scale-105"),R.classList.add("border-neutral-700","bg-neutral-900/70","text-white")}),k===0?(j.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),M.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):k===1?(F.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),M.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),C.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):k===2&&(z.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),M.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),C.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")))},H=function(){r||(d=n.offsetWidth,c=(c+1)%l.length,n.style.transform=`translateX(-${c*d}px)`,B(c))};var A=B,O=H,l=n.children,c=0,d=n.offsetWidth;setInterval(H,2e3),n.addEventListener("mouseenter",function(){r=!0}),n.addEventListener("mouseleave",function(){r=!1}),window.addEventListener("resize",function(){d=n.offsetWidth,n.style.transform=`translateX(-${c*d}px)`}),B(0)}var x=document.getElementById("freeray-carousel-track"),w=document.querySelectorAll(".experience-freeray-desc"),y=!1;if(x&&w.length){let B=function(k){w.forEach(function(R,p){p===k?R.classList.remove("hidden"):R.classList.add("hidden")});var j=document.getElementById("freeray-logo-0"),F=document.getElementById("freeray-logo-1"),z=document.getElementById("freeray-logo-2"),M=document.getElementById("freeray-logo-3"),C=document.getElementById("freeray-logo-4");j&&F&&z&&M&&C&&([j,F,z,M,C].forEach(function(R){R.classList.remove("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),R.classList.add("border-neutral-700","bg-neutral-900/80","text-white")}),k===0?(C.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),j.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),F.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):k===1?z.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"):k===2&&M.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"))},H=function(){y||(S=x.offsetWidth,b=(b+1)%t.length,x.style.transform=`translateX(-${b*S}px)`,B(b))};var N=B,_=H,t=x.children,b=0,S=x.offsetWidth;setInterval(H,2e3),x.addEventListener("mouseenter",function(){y=!0}),x.addEventListener("mouseleave",function(){y=!1}),window.addEventListener("resize",function(){S=x.offsetWidth,x.style.transform=`translateX(-${b*S}px)`}),B(0)}}),`
  <section id="experience" class="rockstar-section bg-rockstar bg-cover bg-center bg-no-repeat">
    <div class="section-content">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r  from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-center mt-34">Professional  Experience</h2>
      
      <div class="flex flex-col gap-24">
        <!-- Data Analyst at ARKEA BANKING SERVICE -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600 min-h-[600px] flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h3 class="text-2xl font-bold text-white">Data Analyst | Apprenticeship</h3>
              <p class="text-gray-400 mt-1">September 2023 - Present</p>
            </div>
            <a href="https://www.arkea-banking-services.com/public/cms/c_5386/fr/accueil" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="/images/arkea.png" alt="ARKEA" class="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span class="text-sm md:text-base text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@ARKEA</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8 flex-grow">
            <div class="min-h-[300px] flex flex-col">
              <div class="experience-arkeabs-desc flex-grow" data-index="0">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Clients struggled with inefficient workflows and unclear data insights.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Designed dynamic Oracle Analytics Cloud dashboards for self-service analytics.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Analyzed workflows, identified pain points, and structured intuitive data models.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Empowered users with dashboards, cutting manual reporting by 30%.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-arkeabs-desc hidden flex-grow" data-index="1">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Analytics teams faced challenges with data accessibility and processing speed.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Create scalable data pipelines to unify and integrate multi-source data for seamless analytics.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Built data pipelines to ingest and transform data into lakehouse formats.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Enhanced data accessibility and processing speed for analytics teams.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-arkeabs-desc hidden flex-grow" data-index="2">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Legacy Hadoop PIG scripts needed modernization for Starburst compatibility.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Develop a conversion tool to transform PIG scripts to Starburst SQL.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Created Python-based conversion tool while preserving business logic and partitioning schemes.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Successfully migrated legacy scripts to optimized Starburst-compatible SQL.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700 h-full">
              <div class="h-full flex items-center justify-center rounded-lg relative">
                <div id="experience-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="/images/viz.png" alt="oracle analytics" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/images/datalakehouse.png" alt="datalakehouse" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/images/Pig-Latin-script.png" alt="Pig-Latin-script" class="w-full h-full object-contain flex-shrink-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="experience-logos-row">
            <span id="exp-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/oracle.png" alt="Oracle Analytics" class="h-6 w-6 object-contain" /> Oracle Analytics
            </span>
            <span id="exp-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/sql.png" alt="SQL" class="h-6 w-6 object-contain" /> SQL
            </span>
            <span id="exp-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/ETL.png" alt="ETL" class="h-6 w-6 object-contain" /> ETL
            </span>
            <span id="exp-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/python.png" alt="python" class="h-6 w-6 object-contain" /> Python
            </span>
            <span id="exp-logo-5" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/starburst.png" alt="Starburst" class="h-6 w-6 object-contain" /> Starburst
            </span>
          </div>
        </div>
        
        <!-- Full-Stack Developer at FREERAY -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600 min-h-[600px] flex flex-col mb-12">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-2xl font-bold text-white">Full-Stack Developer | Intern</h3>
              <p class="text-gray-400 mt-1">June 2023 - August 2023</p>
            </div>
            <a href="https://freeray.ma" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="/images/freeray_logo.jpeg" alt="FREERAY" class="h-8 w-8 object-contain rounded-full group-hover:scale-110 transition-transform duration-300" />
              <span class="text-sm md:text-base text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@FREERAY</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8 flex-grow">
            <div class="min-h-[300px] flex flex-col">
              <div class="experience-freeray-desc flex-grow" data-index="0">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Solar monitoring clients needed better data visualization and reporting tools.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Develop a comprehensive solar monitoring dashboard with real-time data visualization.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Built React-based dashboard with 15+ data metrics and implemented MySQL database with 18+ tables.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Reduced client reporting time by 40% and improved data accessibility for project management.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-freeray-desc hidden flex-grow" data-index="1">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Need for centralized solar project management and device tracking system.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Design and implement a robust database system for solar project management.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Created MySQL database architecture with 18+ tables and implemented efficient data relationships.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Established a scalable database system that improved project tracking and device management efficiency.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-freeray-desc hidden flex-grow" data-index="2">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>High latency in solar device data collection affecting real-time monitoring.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Optimize data collection for 50+ connected Huawei solar devices.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Implemented TCP/IP protocol and optimized data transmission protocols.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Reduced data latency by 30% and improved real-time monitoring capabilities.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700 h-full">
              <div class="h-full flex items-center justify-center rounded-lg relative">
                <div id="freeray-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="/images/dash.webp" alt="FREERAY Project 1" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/images/hq720.jpg" alt="FREERAY Project 2" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/images/mceclip12.png" alt="FREERAY Project 3" class="w-full h-full object-contain flex-shrink-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="freeray-logos-row">
            <span id="freeray-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/react.png" alt="React.js" class="h-6 w-6 object-contain" /> React
            </span>
            <span id="freeray-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/nodejs.png" alt="Node.js" class="h-6 w-6 object-contain" /> Node.js
            </span>
            <span id="freeray-logo-4" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/expressjs.png" alt="express" class="h-6 w-6 object-contain" /> Express
            </span>
            <span id="freeray-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/mysql.png" alt="MySQL" class="h-6 w-6 object-contain" /> MySQL
            </span>
            <span id="freeray-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/tcp.png" alt="TCP/IP" class="h-6 w-6 object-contain" /> TCP/IP
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function ProjectsSection(){return`
  <section id="projects" class="rockstar-section bg-rockstar">
    <div class="section-content">
    <h2 class="text-2xl md:text-4xl font-bold mt-20 pt-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-center">Projects</h2>
      
      <div class="grid md:grid-cols-2 gap-8 mt-8 mb-20"> 
        <!-- Blood Donation App -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">Blood Donation App</h3>
            <a href="https://github.com/ELALAMIADAM/blood-connect" target="_blank" class="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">Vue.js</span>
            <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">Node.js</span>
            <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">PostgreSQL</span>
            <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">JWT</span>
          </div>
          <p class="text-white/80 text-base">Developed a full-stack app to connect blood donors and recipients, addressing delays in emergency blood supply. Implemented Vue.js frontend and Node.js backend with JWT authentication and geolocation matching. Resulted in a 40% faster donor response time, recognized for social impact.</p>
        </div>

        <!-- Job Market Analytics Scraper -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">Job Market Analytics Scraper</h3>
            <a href="https://github.com/ELALAMIADAM/Job-Market-Analytics-Scraper" target="_blank" class="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Python</span>
            <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Scrapy</span>
            <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Streamlit</span>
          </div>
          <p class="text-white/80 text-base">Developed a data pipeline to scrape, analyze and visualize job market trends from LinkedIn and Indeed using Python and Scrapy. Built an interactive dashboard using Streamlit to visualize key insights about job market demands and skill trends.</p>
        </div>

        <!-- Smart Menu Web App -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">Smart Menu Web App</h3>
            <a href="https://github.com/ELALAMIADAM/Smart-Menu-Web-App-for-Restaurant" target="_blank" class="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">React</span>
            <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">Figma</span>
            <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">UX/UI</span>
            <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">Tailwind CSS</span>
          </div>
          <p class="text-white/80 text-base">A digital ordering solution for restaurants, reducing service friction through UX research, prototyping, and web development.</p>
        </div>

        <!-- Wood Block Puzzle AI Game -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">Wood Block Puzzle AI Game</h3>
            <a href="https://github.com/ELALAMIADAM/Block-Puzzle-" target="_blank" class="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">React</span>
            <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">Tensorflow</span>
            <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">RL/DQN</span>
          </div>
          <p class="text-white/80 text-base">Built a React puzzle game with a self-learning AI using TensorFlow.js. Designed game mechanics, DQN-based reinforcement learning, and interactive UI to train and visualize AI performance. Demonstrated full-stack JS skills in game dev and ML.</p>
        </div>
        <!-- Market Sales Management Application -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">Market Sales Management</h3>
            <a href="https://github.com/ELALAMIADAM/logiciel-caisse" target="_blank" class="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">React</span>
            <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">Flask</span>
            <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">SQLite</span>
          </div>
          <p class="text-white/80 text-base">A market sales management app to track and manage sales transactions, with robust analytics for performance evaluation and business optimization.</p>
        </div>

        <!-- AI-Powered Career Management Platform -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">AI Career Management Platform</h3>
            <a href="https://github.com/ELALAMIADAM/careervoid" target="_blank" class="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Next.js</span>
            <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">NLP</span>
            <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Node.js</span>
            <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">PostgreSQL</span>
          </div>
          <p class="text-white/80 text-base">A full-stack AI-powered career management platform using Next.js, Node.js, and TypeScript, integrating OpenAI for resume optimization and job matching.</p>
        </div>

        <!-- Emergency Location Sender -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">Emergency Location Sender</h3>
            <a href="https://github.com/ELALAMIADAM/send-position-with-speech" target="_blank" class="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-white text-black rounded-full text-sm">Java</span>
            <span class="px-3 py-1 bg-white text-black rounded-full text-sm">Android Studio</span>
            <span class="px-3 py-1 bg-white text-black rounded-full text-sm">GPS/SMS</span>
          </div>
          <p class="text-white/80 text-base">Android app that automatically detects emergency button presses (even when screen is off) and sends GPS coordinates via SMS to predefined contacts, with auto-response to location requests. Built with Java using Accessibility Service and FusedLocationProvider.</p>
        </div>
        <!-- Virtual Museum -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-white">Virtual Museum</h3>
            <div class="flex gap-4">
              <a href="https://github.com/ayoubachak/museum-babylon" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://ayoubachak.github.io/museum-babylon/" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">JavaScript</span>
            <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Babylon.js</span>
            <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">3D</span>
          </div>
          <p class="text-white/80 text-base">A first-person immersive platform using JavaScript and Babylon.js. Explore a virtual museum, interact with visitors, and discover interactive exhibits.</p>
        </div>
      </div>
    </div>
  </section>
  `}class EmailJSResponseStatus{constructor(i=0,r="Network Error"){this.status=i,this.text=r}}const createWebStorage=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,i)=>Promise.resolve(localStorage.setItem(n,i)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},store={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:createWebStorage()},buildOptions=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},init=(n,i="https://api.emailjs.com")=>{if(!n)return;const r=buildOptions(n);store.publicKey=r.publicKey,store.blockHeadless=r.blockHeadless,store.storageProvider=r.storageProvider,store.blockList=r.blockList,store.limitRate=r.limitRate,store.origin=r.origin||i},sendPost=async(n,i,r={})=>{const l=await fetch(store.origin+n,{method:"POST",headers:r,body:i}),c=await l.text(),d=new EmailJSResponseStatus(l.status,c);if(l.ok)return d;throw d},validateParams=(n,i,r)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!i||typeof i!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},validateTemplateParams=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},isHeadless=n=>n.webdriver||!n.languages||n.languages.length===0,headlessError=()=>new EmailJSResponseStatus(451,"Unavailable For Headless Browser"),validateBlockListParams=(n,i)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof i!="string")throw"The BlockList watchVariable has to be a string"},isBlockListDisabled=n=>{var i;return!((i=n.list)!=null&&i.length)||!n.watchVariable},getValue=(n,i)=>n instanceof FormData?n.get(i):n[i],isBlockedValueInParams=(n,i)=>{if(isBlockListDisabled(n))return!1;validateBlockListParams(n.list,n.watchVariable);const r=getValue(i,n.watchVariable);return typeof r!="string"?!1:n.list.includes(r)},blockedEmailError=()=>new EmailJSResponseStatus(403,"Forbidden"),validateLimitRateParams=(n,i)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(i&&typeof i!="string")throw"The LimitRate ID has to be a non-empty string"},getLeftTime=async(n,i,r)=>{const l=Number(await r.get(n)||0);return i-Date.now()+l},isLimitRateHit=async(n,i,r)=>{if(!i.throttle||!r)return!1;validateLimitRateParams(i.throttle,i.id);const l=i.id||n;return await getLeftTime(l,i.throttle,r)>0?!0:(await r.set(l,Date.now().toString()),!1)},limitRateError=()=>new EmailJSResponseStatus(429,"Too Many Requests"),send=async(n,i,r,l)=>{const c=buildOptions(l),d=c.publicKey||store.publicKey,x=c.blockHeadless||store.blockHeadless,w=c.storageProvider||store.storageProvider,y={...store.blockList,...c.blockList},t={...store.limitRate,...c.limitRate};return x&&isHeadless(navigator)?Promise.reject(headlessError()):(validateParams(d,n,i),validateTemplateParams(r),r&&isBlockedValueInParams(y,r)?Promise.reject(blockedEmailError()):await isLimitRateHit(location.pathname,t,w)?Promise.reject(limitRateError()):sendPost("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:d,service_id:n,template_id:i,template_params:r}),{"Content-type":"application/json"}))},validateForm=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},findHTMLForm=n=>typeof n=="string"?document.querySelector(n):n,sendForm=async(n,i,r,l)=>{const c=buildOptions(l),d=c.publicKey||store.publicKey,x=c.blockHeadless||store.blockHeadless,w=store.storageProvider||c.storageProvider,y={...store.blockList,...c.blockList},t={...store.limitRate,...c.limitRate};if(x&&isHeadless(navigator))return Promise.reject(headlessError());const b=findHTMLForm(r);validateParams(d,n,i),validateForm(b);const S=new FormData(b);return isBlockedValueInParams(y,S)?Promise.reject(blockedEmailError()):await isLimitRateHit(location.pathname,t,w)?Promise.reject(limitRateError()):(S.append("lib_version","4.4.1"),S.append("service_id",n),S.append("template_id",i),S.append("user_id",d),sendPost("/api/v1.0/email/send-form",S))},emailjs={init,send,sendForm,EmailJSResponseStatus};function ContactSection(){return emailjs.init("EgxOaVTRVLeDEABrb"),window.handleSubmit=function(n){n.preventDefault();const i=n.target,r=i.querySelector('button[type="submit"]'),l=r.textContent;r.innerHTML=`
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `,r.disabled=!0,r.classList.add("opacity-75");const c={name:i.name.value,email:i.email.value,message:i.message.value};emailjs.send("service_t0r83jq","template_fcl2ipa",c).then(()=>{r.innerHTML=`
        <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Message Sent!
      `,r.classList.remove("from-orange-500","to-yellow-400"),r.classList.add("bg-green-500"),i.reset();const d=document.createElement("div");d.className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100",d.innerHTML="Your message has been sent successfully!",document.body.appendChild(d),setTimeout(()=>{d.classList.add("translate-y-2","opacity-0"),setTimeout(()=>d.remove(),500)},3e3),setTimeout(()=>{r.innerHTML=l,r.classList.remove("bg-green-500"),r.classList.add("from-orange-500","to-yellow-400"),r.disabled=!1,r.classList.remove("opacity-75")},3e3)}).catch(d=>{r.innerHTML=`
        <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        Error! Try Again
      `,r.classList.remove("from-orange-500","to-yellow-400"),r.classList.add("bg-red-500");const x=document.createElement("div");x.className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100",x.innerHTML="Failed to send message. Please try again.",document.body.appendChild(x),setTimeout(()=>{x.classList.add("translate-y-2","opacity-0"),setTimeout(()=>x.remove(),500)},3e3),setTimeout(()=>{r.innerHTML=l,r.classList.remove("bg-red-500"),r.classList.add("from-orange-500","to-yellow-400"),r.disabled=!1,r.classList.remove("opacity-75")},3e3),console.error("Error sending email:",d)})},`
  <section id="contact" class="rockstar-section bg-rockstar ">
    <div class="section-content max-w-4xl mx-auto">
      <h2 class="text-4xl font-extrabold text-white mb-2 text-left mt-24">Contact <span class="text-gradient">me.</span></h2>
      <p class="text-lg md:text-xl text-white/80 mb-8 text-left font-mono">I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</p>
      <form id="contactForm" class="bg-transparent border border-neutral-800 rounded-xl p-8 space-y-6" autocomplete="off">
        <div class="md:flex md:space-x-6 space-y-6 md:space-y-0">
          <div class="flex-1">
            <label for="name" class="block font-bold text-white mb-2 font-mono">Name<span class="text-red-500">*</span></label>
            <input id="name" name="name" type="text" placeholder="Your Name" class="w-full px-5 py-3 rounded-lg bg-transparent border border-neutral-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-neutral-500" required />
          </div>
          <div class="flex-1">
            <label for="email" class="block font-bold text-white mb-2 font-mono">Email<span class="text-red-500">*</span></label>
            <input id="email" name="email" type="email" placeholder="john@doe.com" class="w-full px-5 py-3 rounded-lg bg-transparent border border-neutral-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-neutral-500" required />
          </div>
        </div>
        <div>
          <label for="message" class="block font-bold text-white mb-2 font-mono">Message<span class="text-red-500">*</span></label>
          <textarea id="message" name="message" rows="5" placeholder="Hello there, I would like to ask you about..." class="w-full px-5 py-3 rounded-lg bg-transparent border border-neutral-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-neutral-500" required></textarea>
        </div>
        <button type="submit" class="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow hover:scale-105 transition-transform tracking-wide font-mono flex items-center justify-center">Send Message</button>
      </form>
    </div>
  </section>
  `}function Footer(){return`
  <footer class="py-8 text-center text-gray-400 bg-black">
    <p>&copy; ${new Date().getFullYear()} EL ALAMI Adam. All rights reserved.</p>
  </footer>
  `}function setupAnimations(){return`
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all elements with appear-on-scroll class
  document.querySelectorAll('.appear-on-scroll').forEach(element => {
    observer.observe(element);
  });
  
  // Smooth scrolling and active section detection
  const sections = document.querySelectorAll('.rockstar-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Detect current section and update nav links
  const handleSectionVisibility = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.id;
      }
    });
    
    // Update active nav link
    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1); // Remove the # from href
      if (href === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add active class to clicked link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll effect for header and smooth header
  const headerName = document.getElementById('header-name');
  const header = document.querySelector('header');
  const colorLoopText = document.querySelector('.color-loop-text');
  const scrollThreshold = 150; // Adjust this value as needed
  const maxScrollForEffect = 1500; // Maximum scroll value for animation speed effect
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Header name visibility
    if (scrollPosition > scrollThreshold) {
      headerName.classList.add('opacity-100', 'translate-y-0');
      headerName.classList.remove('opacity-0', 'translate-y-2');
      header.classList.add('scrolled');
      
      // Adjust color loop animation speed based on scroll position
      if (colorLoopText) {
        // Calculate animation duration between 2s (fast) and 10s (slow) based on scroll position
        const scrollPercentage = Math.min(scrollPosition / maxScrollForEffect, 1);
        const animationDuration = 10 - (scrollPercentage * 8); // 10s at top, 2s at maxScrollForEffect
        colorLoopText.style.animationDuration = animationDuration + 's';
      }
    } else {
      headerName.classList.remove('opacity-100', 'translate-y-0');
      headerName.classList.add('opacity-0', 'translate-y-2');
      header.classList.remove('scrolled');
    }
    
    // Update active section in navigation
    handleSectionVisibility();
    
    // About section scroll animations - fallback for browsers that don't support scroll timeline
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const aboutRect = aboutSection.getBoundingClientRect();
      const aboutMainText = document.querySelector('.about-main-text');
      const aboutSecondaryText = document.querySelector('.about-secondary-text');
      const aboutLinks = document.querySelectorAll('.about-link');
      
      // Calculate position relative to the viewport
      const viewportHeight = window.innerHeight;
      const aboutPosition = aboutRect.top / viewportHeight;
      
      if (aboutPosition < 0.7 && aboutPosition > -0.3) {
        // Main text animation
        if (aboutMainText) {
          const mainTextOpacity = Math.min(1, Math.max(0, 1 - aboutPosition));
          const backgroundPos = 50 + (aboutPosition * -100) + '%'; 
          aboutMainText.style.opacity = mainTextOpacity;
          aboutMainText.style.backgroundPosition = '50% ' + backgroundPos;
        }
        
        // Secondary text and links animations
        if (aboutPosition < 0.3) {
          if (aboutSecondaryText) {
            aboutSecondaryText.style.opacity = '0.65';
          }
          
          aboutLinks.forEach(link => {
            link.style.opacity = '1';
          });
        } else {
          if (aboutSecondaryText) {
            aboutSecondaryText.style.opacity = '0';
          }
          
          aboutLinks.forEach(link => {
            link.style.opacity = '0';
          });
        }
      }
    }
  });
  
  // Skills Horizontal Slider Functionality
  const setupSkillsSlider = () => {
    const sliderTrack = document.querySelector('.skills-slider-track');
    const cards = document.querySelectorAll('.skill-card');
    const controls = document.querySelectorAll('.skills-control');
    const prevButton = document.querySelector('.skills-prev');
    const nextButton = document.querySelector('.skills-next');
    const progressBar = document.querySelector('.skills-progress .progress-bar');
    
    if (!sliderTrack || cards.length === 0) return;
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;
    const cardGap = 24; // This corresponds to space-x-6 (1.5rem = 24px)
    const totalCards = cards.length;
    const visibleCards = Math.min(Math.floor(sliderTrack.offsetWidth / (cardWidth + cardGap)), totalCards);
    const maxIndex = totalCards - visibleCards;
    
    // Function to scroll to a specific card
    const scrollToCard = (index) => {
      // Ensure index is within bounds
      if (index < 0) index = 0;
      if (index > maxIndex) index = maxIndex;
      
      currentIndex = index;
      
      // Update scroll position
      const scrollAmount = index * (cardWidth + cardGap);
      sliderTrack.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Update controls
      controls.forEach((control, i) => {
        if (i === currentIndex) {
          control.classList.add('bg-white');
          control.classList.remove('bg-gray-600');
        } else {
          control.classList.remove('bg-white');
          control.classList.add('bg-gray-600');
        }
      });
      
      // Update progress bar
      if (progressBar) {
        const progress = (index / Math.max(maxIndex, 1)) * 100;
        progressBar.style.width = \`\${progress}%\`;
      }
    };
    
    // Set up click events for controls
    controls.forEach((control, index) => {
      control.addEventListener('click', () => {
        scrollToCard(index);
      });
    });
    
    // Set up prev/next buttons
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        scrollToCard(currentIndex - 1);
      });
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        scrollToCard(currentIndex + 1);
      });
    }
    
    // Sync control states when user manually scrolls
    sliderTrack.addEventListener('scroll', () => {
      const scrollPosition = sliderTrack.scrollLeft;
      const estimatedIndex = Math.round(scrollPosition / (cardWidth + cardGap));
      
      // Only update if the estimated index is different from current
      if (estimatedIndex !== currentIndex) {
        currentIndex = estimatedIndex;
        
        // Update controls
        controls.forEach((control, i) => {
          if (i === currentIndex) {
            control.classList.add('bg-white');
            control.classList.remove('bg-gray-600');
          } else {
            control.classList.remove('bg-white');
            control.classList.add('bg-gray-600');
          }
        });
        
        // Update progress bar
        if (progressBar) {
          const progress = (currentIndex / Math.max(maxIndex, 1)) * 100;
          progressBar.style.width = \`\${progress}%\`;
        }
      }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (document.querySelector('.skills-slider-container:hover')) {
        if (e.key === 'ArrowRight') {
          scrollToCard(currentIndex + 1);
        } else if (e.key === 'ArrowLeft') {
          scrollToCard(currentIndex - 1);
        }
      }
    });
    
    // Initialize auto-scroll
    let autoScrollInterval;
    
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        // Sequential scrolling - always move to next card, reset to 0 when reaching end
        const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        scrollToCard(nextIndex);
      }, 3000); // Scroll every 3 seconds
    };
    
    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };
    
    // Pause auto-scroll on hover or touch
    const sliderContainer = document.querySelector('.skills-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoScroll);
      sliderContainer.addEventListener('touchstart', stopAutoScroll);
      sliderContainer.addEventListener('mouseleave', startAutoScroll);
      sliderContainer.addEventListener('touchend', () => {
        setTimeout(startAutoScroll, 2000);
      });
    }
    
    // Initialize first card and auto-scroll
    scrollToCard(0);
    startAutoScroll();
  };
  
  // Initialize card sliders after the DOM is loaded
  setTimeout(() => {
    setupSkillsSlider();
    
    // Check if browser supports scroll-timeline
    if (!CSS.supports('animation-timeline: scroll()')) {
      console.log('Browser does not support scroll-timeline, using polyfill');
      // The scroll event handler will handle the animations as a fallback
    }
    
    // Initial call to set active section
    handleSectionVisibility();
  }, 500);
  
  // Trigger the scroll event once to initialize the header state
  window.dispatchEvent(new Event('scroll'));
  `}function SplashCursor(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){let i=!window.matchMedia("(max-width: 768px)").matches;const r={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10},l=document.createElement("canvas");if(l.id="fluid",l.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50;
        pointer-events: none;
        display: ${i?"block":"none"};
      `,document.body.appendChild(l),window.addEventListener("splashToggle",e=>{i=e.detail.enabled,l.style.display=i?"block":"none"}),window.addEventListener("resize",()=>{window.matchMedia("(max-width: 768px)").matches&&(i=!1,l.style.display="none")}),!i)return;function c(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let d=[new c];function x(e){const a={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let o=e.getContext("webgl2",a);const s=!!o;s||(o=e.getContext("webgl",a)||e.getContext("experimental-webgl",a));let u,m;s?(o.getExtension("EXT_color_buffer_float"),m=o.getExtension("OES_texture_float_linear")):(u=o.getExtension("OES_texture_half_float"),m=o.getExtension("OES_texture_half_float_linear")),o.clearColor(0,0,0,1);const f=s?o.HALF_FLOAT:u&&u.HALF_FLOAT_OES;let L,E,Y;return s?(L=w(o,o.RGBA16F,o.RGBA,f),E=w(o,o.RG16F,o.RG,f),Y=w(o,o.R16F,o.RED,f)):(L=w(o,o.RGBA,o.RGBA,f),E=w(o,o.RGBA,o.RGBA,f),Y=w(o,o.RGBA,o.RGBA,f)),{gl:o,ext:{formatRGBA:L,formatRG:E,formatR:Y,halfFloatTexType:f,supportLinearFiltering:m}}}function w(e,a,o,s){if(!y(e,a,o,s))switch(a){case e.R16F:return w(e,e.RG16F,e.RG,s);case e.RG16F:return w(e,e.RGBA16F,e.RGBA,s);default:return null}return{internalFormat:a,format:o}}function y(e,a,o,s){const u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,a,4,4,0,o,s,null);const m=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,m),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}const{gl:t,ext:b}=x(l);b.supportLinearFiltering||(r.DYE_RESOLUTION=256,r.SHADING=!1);class S{constructor(a,o){this.vertexShader=a,this.fragmentShaderSource=o,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(a){let o=0;for(let u=0;u<a.length;u++)o+=H(a[u]);let s=this.programs[o];if(s==null){let u=_(t.FRAGMENT_SHADER,this.fragmentShaderSource,a);s=O(this.vertexShader,u),this.programs[o]=s}s!==this.activeProgram&&(this.uniforms=N(s),this.activeProgram=s)}bind(){t.useProgram(this.activeProgram)}}class A{constructor(a,o){this.uniforms={},this.program=O(a,o),this.uniforms=N(this.program)}bind(){t.useProgram(this.program)}}function O(e,a){let o=t.createProgram();return t.attachShader(o,e),t.attachShader(o,a),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(o)),o}function N(e){let a=[],o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<o;s++){let u=t.getActiveUniform(e,s).name;a[u]=t.getUniformLocation(e,u)}return a}function _(e,a,o){a=B(a,o);const s=t.createShader(e);return t.shaderSource(s,a),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(s)),s}function B(e,a){if(!a)return e;let o="";return a.forEach(s=>{o+="#define "+s+`
`}),o+e}function H(e){if(e.length===0)return 0;let a=0;for(let o=0;o<e.length;o++)a=(a<<5)-a+e.charCodeAt(o),a|=0;return a}const k=_(t.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),j=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),F=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),z=`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform sampler2D uDithering;
        uniform vec2 ditherScale;
        uniform vec2 texelSize;

        vec3 linearToGamma (vec3 color) {
            color = max(color, vec3(0));
            return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
        }

        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;
            #ifdef SHADING
                vec3 lc = texture2D(uTexture, vL).rgb;
                vec3 rc = texture2D(uTexture, vR).rgb;
                vec3 tc = texture2D(uTexture, vT).rgb;
                vec3 bc = texture2D(uTexture, vB).rgb;

                float dx = length(rc) - length(lc);
                float dy = length(tc) - length(bc);

                vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                vec3 l = vec3(0.0, 0.0, 1.0);

                float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                c *= diffuse;
            #endif

            float a = max(c.r, max(c.g, c.b));
            gl_FragColor = vec4(c, a);
        }
      `,M=_(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),C=_(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,b.supportLinearFiltering?null:["MANUAL_FILTERING"]),R=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),p=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),h=_(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),v=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),P=_(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),T=(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,a=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),a&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)});let D,g,te,ae,X;const ce=new A(k,j),oe=new A(k,F),G=new A(k,M),U=new A(k,C),re=new A(k,R),ne=new A(k,p),q=new A(k,h),W=new A(k,v),J=new A(k,P),$=new S(k,z);function V(e,a,o,s,u,m){t.activeTexture(t.TEXTURE0);let f=t.createTexture();t.bindTexture(t.TEXTURE_2D,f),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,m),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,m),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,o,e,a,0,s,u,null);let L=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,L),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,f,0),t.viewport(0,0,e,a),t.clear(t.COLOR_BUFFER_BIT),{texture:f,fbo:L,width:e,height:a,texelSizeX:1/e,texelSizeY:1/a,attach(E){return t.activeTexture(t.TEXTURE0+E),t.bindTexture(t.TEXTURE_2D,f),E}}}function se(e,a,o,s,u,m){let f=V(e,a,o,s,u,m),L=V(e,a,o,s,u,m);return{width:e,height:a,texelSizeX:f.texelSizeX,texelSizeY:f.texelSizeY,get read(){return f},set read(E){f=E},get write(){return L},set write(E){L=E},swap(){let E=f;f=L,L=E}}}function fe(e,a,o,s,u,m,f){let L=V(a,o,s,u,m,f);return ce.bind(),t.uniform1i(ce.uniforms.uTexture,e.attach(0)),T(L),L}function de(e,a,o,s,u,m,f){return e.width===a&&e.height===o||(e.read=fe(e.read,a,o,s,u,m,f),e.write=V(a,o,s,u,m,f),e.width=a,e.height=o,e.texelSizeX=1/a,e.texelSizeY=1/o),e}function ue(e){let a=t.drawingBufferWidth/t.drawingBufferHeight;a<1&&(a=1/a);const o=Math.round(e),s=Math.round(e*a);return t.drawingBufferWidth>t.drawingBufferHeight?{width:s,height:o}:{width:o,height:s}}function pe(){let e=ue(r.SIM_RESOLUTION),a=ue(r.DYE_RESOLUTION);const o=b.halfFloatTexType,s=b.formatRGBA,u=b.formatRG,m=b.formatR,f=b.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),D?D=de(D,a.width,a.height,s.internalFormat,s.format,o,f):D=se(a.width,a.height,s.internalFormat,s.format,o,f),g?g=de(g,e.width,e.height,u.internalFormat,u.format,o,f):g=se(e.width,e.height,u.internalFormat,u.format,o,f),te=V(e.width,e.height,m.internalFormat,m.format,o,t.NEAREST),ae=V(e.width,e.height,m.internalFormat,m.format,o,t.NEAREST),X=se(e.width,e.height,m.internalFormat,m.format,o,t.NEAREST)}function he(){let e=[];r.SHADING&&e.push("SHADING"),$.setKeywords(e)}function I(e){const a=window.devicePixelRatio||1;return Math.floor(e*a)}function xe(){let e=I(l.clientWidth),a=I(l.clientHeight);return l.width!==e||l.height!==a?(l.width=e,l.height=a,!0):!1}function K(){let e=be(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function be(e,a,o){let s,u,m,f,L,E,Y,ee;switch(f=Math.floor(e*6),L=e*6-f,E=o*(1-a),Y=o*(1-L*a),ee=o*(1-(1-L)*a),f%6){case 0:s=o,u=ee,m=E;break;case 1:s=Y,u=o,m=E;break;case 2:s=E,u=o,m=ee;break;case 3:s=E,u=Y,m=o;break;case 4:s=ee,u=E,m=o;break;case 5:s=o,u=E,m=Y;break}return{r:s,g:u,b:m}}function ve(e,a,o){const s=o-a;return(e-a)%s+a}function me(e,a,o,s,u){G.bind(),t.uniform1i(G.uniforms.uTarget,g.read.attach(0)),t.uniform1f(G.uniforms.aspectRatio,l.width/l.height),t.uniform2f(G.uniforms.point,e,a),t.uniform3f(G.uniforms.color,o,s,0),t.uniform1f(G.uniforms.radius,we(r.SPLAT_RADIUS/100)),T(g.write),g.swap(),t.uniform1i(G.uniforms.uTarget,D.read.attach(0)),t.uniform3f(G.uniforms.color,u.r,u.g,u.b),T(D.write),D.swap()}function we(e){let a=l.width/l.height;return a>1&&(e*=a),e}function ye(e){let a=l.width/l.height;return a<1&&(e*=a),e}function ke(e){let a=l.width/l.height;return a>1&&(e/=a),e}function ie(e,a,o,s){e.id=a,e.down=!0,e.moved=!1,e.texcoordX=o/l.width,e.texcoordY=1-s/l.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=K()}function le(e,a,o,s){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=a/l.width,e.texcoordY=1-o/l.height,e.deltaX=ye(e.texcoordX-e.prevTexcoordX),e.deltaY=ke(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=s}function Se(e){e.down=!1}function Ee(e){let a=e.deltaX*r.SPLAT_FORCE,o=e.deltaY*r.SPLAT_FORCE;me(e.texcoordX,e.texcoordY,a,o,e.color)}function Le(e){const a=K();a.r*=10,a.g*=10,a.b*=10;let o=10*(Math.random()-.5),s=30*(Math.random()-.5);me(e.texcoordX,e.texcoordY,o,s,a)}function Te(e){t.disable(t.BLEND),ne.bind(),t.uniform2f(ne.uniforms.texelSize,g.texelSizeX,g.texelSizeY),t.uniform1i(ne.uniforms.uVelocity,g.read.attach(0)),T(ae),q.bind(),t.uniform2f(q.uniforms.texelSize,g.texelSizeX,g.texelSizeY),t.uniform1i(q.uniforms.uVelocity,g.read.attach(0)),t.uniform1i(q.uniforms.uCurl,ae.attach(1)),t.uniform1f(q.uniforms.curl,r.CURL),t.uniform1f(q.uniforms.dt,e),T(g.write),g.swap(),re.bind(),t.uniform2f(re.uniforms.texelSize,g.texelSizeX,g.texelSizeY),t.uniform1i(re.uniforms.uVelocity,g.read.attach(0)),T(te),oe.bind(),t.uniform1i(oe.uniforms.uTexture,X.read.attach(0)),t.uniform1f(oe.uniforms.value,r.PRESSURE),T(X.write),X.swap(),W.bind(),t.uniform2f(W.uniforms.texelSize,g.texelSizeX,g.texelSizeY),t.uniform1i(W.uniforms.uDivergence,te.attach(0));for(let o=0;o<r.PRESSURE_ITERATIONS;o++)t.uniform1i(W.uniforms.uPressure,X.read.attach(1)),T(X.write),X.swap();J.bind(),t.uniform2f(J.uniforms.texelSize,g.texelSizeX,g.texelSizeY),t.uniform1i(J.uniforms.uPressure,X.read.attach(0)),t.uniform1i(J.uniforms.uVelocity,g.read.attach(1)),T(g.write),g.swap(),U.bind(),t.uniform2f(U.uniforms.texelSize,g.texelSizeX,g.texelSizeY),b.supportLinearFiltering||t.uniform2f(U.uniforms.dyeTexelSize,g.texelSizeX,g.texelSizeY);let a=g.read.attach(0);t.uniform1i(U.uniforms.uVelocity,a),t.uniform1i(U.uniforms.uSource,a),t.uniform1f(U.uniforms.dt,e),t.uniform1f(U.uniforms.dissipation,r.VELOCITY_DISSIPATION),T(g.write),g.swap(),b.supportLinearFiltering||t.uniform2f(U.uniforms.dyeTexelSize,D.texelSizeX,D.texelSizeY),t.uniform1i(U.uniforms.uVelocity,g.read.attach(0)),t.uniform1i(U.uniforms.uSource,D.read.attach(1)),t.uniform1f(U.uniforms.dissipation,r.DENSITY_DISSIPATION),T(D.write),D.swap()}function Ae(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),Re(e)}function Re(e){let a=t.drawingBufferWidth,o=t.drawingBufferHeight;$.bind(),r.SHADING&&t.uniform2f($.uniforms.texelSize,1/a,1/o),t.uniform1i($.uniforms.uTexture,D.read.attach(0)),T(e)}function De(){d.forEach(e=>{e.moved&&(e.moved=!1,Ee(e))})}function _e(e){Q+=e*r.COLOR_UPDATE_SPEED,Q>=1&&(Q=ve(Q,0,1),d.forEach(a=>{a.color=K()}))}function Me(){let e=Date.now(),a=(e-ge)/1e3;return a=Math.min(a,.016666),ge=e,a}he(),pe();let ge=Date.now(),Q=0;function Z(){const e=Me();xe()&&pe(),_e(e),De(),Te(e),Ae(null),requestAnimationFrame(Z)}window.addEventListener("mousedown",e=>{let a=d[0],o=I(e.clientX),s=I(e.clientY);ie(a,-1,o,s),Le(a)}),document.body.addEventListener("mousemove",function e(a){let o=d[0],s=I(a.clientX),u=I(a.clientY),m=K();Z(),le(o,s,u,m),document.body.removeEventListener("mousemove",e)}),window.addEventListener("mousemove",e=>{let a=d[0],o=I(e.clientX),s=I(e.clientY),u=a.color;le(a,o,s,u)}),document.body.addEventListener("touchstart",function e(a){const o=a.targetTouches;let s=d[0];for(let u=0;u<o.length;u++){let m=I(o[u].clientX),f=I(o[u].clientY);Z(),ie(s,o[u].identifier,m,f)}document.body.removeEventListener("touchstart",e)}),window.addEventListener("touchstart",e=>{const a=e.targetTouches;let o=d[0];for(let s=0;s<a.length;s++){let u=I(a[s].clientX),m=I(a[s].clientY);ie(o,a[s].identifier,u,m)}}),window.addEventListener("touchmove",e=>{const a=e.targetTouches;let o=d[0];for(let s=0;s<a.length;s++){let u=I(a[s].clientX),m=I(a[s].clientY);le(o,u,m,o.color)}},!1),window.addEventListener("touchend",e=>{const a=e.changedTouches;let o=d[0];for(let s=0;s<a.length;s++)Se(o)}),Z()}),""}SplashCursor();const appElement=document.querySelector("#app");appElement.innerHTML=`
  ${Header()}
  <main>
    ${HeroSection()}
    ${AboutSection()}
    ${EducationSection()}
    ${SkillsSection()}
    ${ExperienceSection()}
    ${ProjectsSection()}
    ${ContactSection()}
  </main>
  ${Footer()}
`;document.addEventListener("DOMContentLoaded",()=>{eval(setupAnimations());const contactForm=document.getElementById("contactForm");contactForm&&contactForm.addEventListener("submit",window.handleSubmit)});
