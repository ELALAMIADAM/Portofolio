(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function Header(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".mobile-menu-button"),a=document.querySelector(".mobile-menu"),l=document.querySelectorAll(".mobile-menu a");o&&a&&(o.addEventListener("click",()=>{a.classList.toggle("hidden"),o.classList.toggle("active")}),l.forEach(s=>{s.addEventListener("click",()=>{a.classList.add("hidden"),o.classList.remove("active")})}));const r=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".nav-link");function t(){const s=window.pageYOffset;r.forEach(n=>{const h=n.offsetHeight,v=n.offsetTop-150,g=n.getAttribute("id");s>v&&s<=v+h&&e.forEach(p=>{p.classList.remove("active"),p.getAttribute("href").substring(1)===g&&p.classList.add("active")})})}window.addEventListener("scroll",t),t()}),`


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

  <header class="smooth-header fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300">
    <nav class="container mx-auto px-4 md:px-6 py-4">
      <div class="flex items-center justify-between">
        <div id="header-name" class="text-xl md:text-2xl font-bold opacity-0 transform translate-y-2 transition-all duration-1000">
          <span class="color-loop-text text-white">EL ALAMI Adam</span>
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
  </style>
  `}function HeroSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){function o(r,e){let t=0;const s=Math.ceil(e/1e4),n=()=>{t+=s,t>=e?r.textContent=e+(e===365?"":"+"):(r.textContent=t,requestAnimationFrame(n))};n()}document.querySelectorAll(".stat-number").forEach(r=>{const e=parseInt(r.getAttribute("data-target"),10);o(r,e)});const a=["/profile/images/adam.jpg","/profile/images/adamm.png","/profile/images/adammm.jpg"];let l=0;setInterval(()=>{l=(l+1)%a.length;const r=document.getElementById("hero-img-left"),e=document.getElementById("hero-img-right"),t=document.getElementById("hero-img-main"),s=(l-1+a.length)%a.length,n=(l+1)%a.length;r&&(r.src=a[s],r.classList.remove("hero-img-animate"),r.offsetWidth,r.classList.add("hero-img-animate")),t&&(t.src=a[l],t.classList.remove("hero-img-animate"),t.offsetWidth,t.classList.add("hero-img-animate")),e&&(e.src=a[n],e.classList.remove("hero-img-animate"),e.offsetWidth,e.classList.add("hero-img-animate"))},2500)}),`
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
      <!-- Right: Image Card Stack -->
      <div class="md:w-1/2 w-full flex justify-center md:justify-end">
        <div class="relative w-64 h-80 flex items-center justify-center">
          <!-- Left blurred image -->
          <img
            id="hero-img-left"
            src="/profile/images/adam.jpg"
            alt="Adam"
            class="absolute left-0 top-4 w-56 h-72 object-cover rounded-3xl opacity-40 blur-sm scale-90 z-0"
            style="transform: translateX(-40px) rotate(-8deg);"
          />
          <!-- Right blurred image -->
          <img
            id="hero-img-right"
            src="/profile/images/adamm.png"
            alt="Adam"
            class="absolute right-0 top-4 w-56 h-72 object-cover rounded-3xl opacity-40 blur-sm scale-90 z-0"
            style="transform: translateX(40px) rotate(8deg);"
          />
          <!-- Main image -->
          <img
            id="hero-img-main"
            src="/profile/images/adammm.jpg"
            alt="Adam"
            class="relative w-64 h-80 object-cover rounded-3xl shadow-2xl z-10 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
    <!-- Stats Row -->
    <div class="max-w-3xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-black bg-opacity-40 rounded-xl py-6 px-4 appear-on-scroll">
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="20">0</p>
        <p class="text-sm text-white">Repositories</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="50">0</p>
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
  `}function AboutSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){const o=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&l.target.classList.add("show")})},{threshold:.1});document.querySelectorAll(".about-paragraph").forEach(a=>{o.observe(a)})}),`
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
                src="src/images/ae-removebg-preview.png"
                alt="AE Logo"
                class="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src="src/images/IMG_20250330_215752_781.webp"
                alt="Adam"
                class="absolute inset-0 w-full h-full object-cover rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function EducationSection(){return`
  <section id="education" class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#090909] to-[#1a1a1a] py-16">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center">Education</h2>
      <div class="space-y-10">
        <!-- ENIB Brest -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll">
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
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll">
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
  `}function SkillsSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll("#skills-filter-row button"),a=document.querySelectorAll(".skill-pill");o.forEach(function(l){l.addEventListener("click",function(){var r=l.getAttribute("data-skilltype");o.forEach(e=>{e.classList.remove("bg-gradient-to-r","from-red-500","via-orange-500","to-yellow-500","text-white","font-bold","ring-2","ring-orange-400","scale-105")}),l.classList.add("bg-gradient-to-r","from-red-500","via-orange-500","to-yellow-500","text-white","font-bold","ring-2","ring-orange-400","scale-105"),a.forEach(function(e){r==="all"||e.getAttribute("data-skilltype")===r?e.style.display="":e.style.display="none"})})})}),`
  <section id="skills" class="rockstar-section bg-rockstar">
    <div class="section-content relative">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center">Skills</h2>
      <div class="flex flex-wrap gap-3 mb-4 justify-center" id="skills-filter-row">
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-sm font-bold shadow ring-2 ring-orange-200 scale-105 transition-all" data-skilltype="all">All</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="dev">Dev</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="data">Data/AI</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="Tools">Tools</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="soft">Soft Skills</button>
      </div>
      <div class="flex flex-wrap gap-3 justify-center" id="skills-list">
        <a href="https://www.python.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/python.png" class="h-5 w-5 object-contain mr-2" alt="Python"/>Python</a>
        <a href="https://www.java.com/fr/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/java.png" class="h-5 w-5 object-contain mr-2" alt="Java"/>Java</a>
        <a href="https://cplusplus.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/C_.png" class="h-5 w-5 object-contain mr-2" alt="C++"/>C++</a>
        <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/js.png" class="h-5 w-5 object-contain mr-2" alt="JavaScript"/>Javascript</a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/ts.png" class="h-5 w-5 object-contain mr-2" alt="Typescript"/>Typescript</a>
        <a href="https://webassembly.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev">Assembly</a>
        <a href="https://react.dev/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/react.png" class="h-5 w-5 object-contain mr-2" alt="React"/>React</a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/nodejs.png" class="h-5 w-5 object-contain mr-2" alt="Node.js"/>Node.js</a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/nextjs.png" class="h-5 w-5 object-contain mr-2" alt="Next.js"/>Next.js</a>
        <a href="https://expressjs.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/expressjs.png" class="h-5 w-5 object-contain mr-2" alt="Express.js"/>Express.js</a>
        <a href="https://pypi.org/project/Flask/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev">Flask</a>        
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/tailwind.png" class="h-5 w-5 object-contain mr-2" alt="TailwindCSS"/>TailwindCSS</a>
        <a href="https://github.com/ELALAMIADAM/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/github.png" class="h-5 w-5 object-contain mr-2" alt="Github"/>Github</a>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="src/images/VS.png" class="h-5 w-5 object-contain mr-2" alt="Visual Studio Code"/>Visual Studio Code</a>
        <a href="https://www.cursor.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="src/images/cursor.jpeg" class="h-5 w-5 object-contain mr-2" alt="Cursor"/>Cursor</a>
        <a href="https://www.eclipse.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="src/images/eclipse_94656.webp" class="h-5 w-5 object-contain mr-2" alt="Eclipse"/>Eclipse</a>
        <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="src/images/idea.webp" class="h-5 w-5 object-contain mr-2" alt="IntelliJ IDEA"/>IntelliJ IDEA</a>
        <a href="https://www.docker.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="src/images/docker.png" class="h-5 w-5 object-contain mr-2" alt="Docker"/>Docker</a>
        <a href="https://www.oracle.com/analytics/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/oracle.png" class="h-5 w-5 object-contain mr-2" alt="Oracle Analytics"/>Oracle Analytics</a>
        <a href="https://www.starburst.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/starburst.png" class="h-5 w-5 object-contain mr-2" alt="Starburst"/>Starburst</a>
        <a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/ETL.png" class="h-5 w-5 object-contain mr-2" alt="ETL"/>ETL</a>
        <a href="https://pig.apache.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/pig.png" class="h-5 w-5 object-contain mr-2" alt="PIG Latin"/>PIG Latin</a>
        <a href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/nlp.png" class="h-5 w-5 object-contain mr-2" alt="NLP"/>NLP</a>
        <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/ML.png" class="h-5 w-5 object-contain mr-2" alt="ML & DL"/>ML & DL</a>
        <a href="https://www.sqlite.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/sqlite.png" class="h-5 w-5 object-contain mr-2" alt="SQLite"/>SQLite</a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/mysql.png" class="h-5 w-5 object-contain mr-2" alt="MySQL"/>MySQL</a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/postgres.png" class="h-5 w-5 object-contain mr-2" alt="PostgreSQL"/>PostgreSQL</a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/mongo.png" class="h-5 w-5 object-contain mr-2" alt="MongoDB"/>MongoDB</a>
        <a href="https://streamlit.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/streamlit.png" class="h-5 w-5 object-contain mr-2" alt="Streamlit"/>Streamlit</a>
        <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="src/images/jira.png" class="h-5 w-5 object-contain mr-2" alt="Jira"/>Jira</a>
        <a href="https://en.wikipedia.org/wiki/Teamwork" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="src/images/3135715.png" class="h-5 w-5 object-contain mr-2" alt="Teamwork"/>Teamwork</a>
        <a href="https://en.wikipedia.org/wiki/Communication" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="src/images/190411.png" class="h-5 w-5 object-contain mr-2" alt="Communication"/>Communication</a>
        <a href="https://en.wikipedia.org/wiki/Problem_solving" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="src/images/1828884.png" class="h-5 w-5 object-contain mr-2" alt="Problem Solving"/>Problem Solving</a>
      </div>
      <p class="text-center text-white/70 mt-6">...and many more!</p>
    </div>
  </section>
  `}function ExperienceSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("experience-carousel-track"),a=document.querySelectorAll(".experience-arkeabs-desc"),l=!1;if(o&&a.length){let u=function(c){a.forEach(function(i,y){y===c?i.classList.remove("hidden"):i.classList.add("hidden")});var f=document.getElementById("exp-logo-0"),b=document.getElementById("exp-logo-1"),x=document.getElementById("exp-logo-2"),d=document.getElementById("exp-logo-3"),m=document.getElementById("exp-logo-5");f&&b&&x&&d&&m&&([f,b,x,d,m].forEach(function(i){i.classList.remove("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","text-white","font-bold","scale-105"),i.classList.add("border-neutral-700","bg-neutral-900/70","text-white")}),c===0?(f.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),d.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):c===1?(b.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),d.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),m.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):c===2&&(x.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),d.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),m.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")))},w=function(){l||(t=o.offsetWidth,e=(e+1)%r.length,o.style.transform=`translateX(-${e*t}px)`,u(e))};var k=u,L=w,r=o.children,e=0,t=o.offsetWidth;setInterval(w,2e3),o.addEventListener("mouseenter",function(){l=!0}),o.addEventListener("mouseleave",function(){l=!1}),window.addEventListener("resize",function(){t=o.offsetWidth,o.style.transform=`translateX(-${e*t}px)`}),u(0)}var s=document.getElementById("freeray-carousel-track"),n=document.querySelectorAll(".experience-freeray-desc"),h=!1;if(s&&n.length){let u=function(c){n.forEach(function(i,y){y===c?i.classList.remove("hidden"):i.classList.add("hidden")});var f=document.getElementById("freeray-logo-0"),b=document.getElementById("freeray-logo-1"),x=document.getElementById("freeray-logo-2"),d=document.getElementById("freeray-logo-3"),m=document.getElementById("freeray-logo-4");f&&b&&x&&d&&m&&([f,b,x,d,m].forEach(function(i){i.classList.remove("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),i.classList.add("border-neutral-700","bg-neutral-900/80","text-white")}),c===0?(m.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),f.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),b.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):c===1?x.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"):c===2&&d.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"))},w=function(){h||(p=s.offsetWidth,g=(g+1)%v.length,s.style.transform=`translateX(-${g*p}px)`,u(g))};var S=u,j=w,v=s.children,g=0,p=s.offsetWidth;setInterval(w,2e3),s.addEventListener("mouseenter",function(){h=!0}),s.addEventListener("mouseleave",function(){h=!1}),window.addEventListener("resize",function(){p=s.offsetWidth,s.style.transform=`translateX(-${g*p}px)`}),u(0)}}),`
  <section id="experience" class="rockstar-section bg-rockstar bg-cover bg-center bg-no-repeat">
    <div class="section-content">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center mt-34">Professional Experience</h2>
      
      <div class="flex flex-col gap-24">
        <!-- Data Analyst at ARKEA BANKING SERVICE -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-white">Data Analyst | Apprenticeship</h3>
            <a href="https://www.arkea-banking-services.com/public/cms/c_5386/fr/accueil" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="src/images/arkea.png" alt="ARKEA" class="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span class="text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@ARKEA</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div class="min-h-[300px]">
              <div class="experience-arkeabs-desc" data-index="0">
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
              <div class="experience-arkeabs-desc hidden" data-index="1">
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
              <div class="experience-arkeabs-desc hidden" data-index="2">
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
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700">
              <div class="h-64 flex items-center justify-center rounded-lg relative">
                <div id="experience-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="src/images/viz.png" alt="oracle analytics" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="src/images/datalakehouse.png" alt="datalakehouse" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="src/images/Pig-Latin-script.png" alt="Pig-Latin-script" class="w-full h-full object-contain flex-shrink-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="experience-logos-row">
            <span id="exp-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/oracle.png" alt="Oracle Analytics" class="h-6 w-6 object-contain" /> Oracle Analytics
            </span>
            <span id="exp-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/sql.png" alt="SQL" class="h-6 w-6 object-contain" /> SQL
            </span>
            <span id="exp-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/etl.png" alt="ETL" class="h-6 w-6 object-contain" /> ETL
            </span>
            <span id="exp-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/python.png" alt="python" class="h-6 w-6 object-contain" /> Python
            </span>
            <span id="exp-logo-5" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/starburst.png" alt="Starburst" class="h-6 w-6 object-contain" /> Starburst
            </span>
          </div>
        </div>
        
        <!-- Full-Stack Developer at FREERAY -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600 mb-12">
          <div class="flex justify-between items-center ">
            <h3 class="text-2xl font-bold text-white">Full-Stack Developer | Intern</h3>
            <a href="https://freeray.ma" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="src/images/freeray_logo.jpeg" alt="FREERAY" class="h-8 w-8 object-contain rounded-full group-hover:scale-110 transition-transform duration-300" />
              <span class="text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@FREERAY</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div class="min-h-[300px]">
              <div class="experience-freeray-desc" data-index="0">
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
              <div class="experience-freeray-desc hidden" data-index="1">
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
              <div class="experience-freeray-desc hidden" data-index="2">
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
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700">
              <div class="h-64 flex items-center justify-center rounded-lg relative">
                <div id="freeray-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="src/images/dash.webp" alt="FREERAY Project 1" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="src/images/hq720.jpg" alt="FREERAY Project 2" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="src/images/mceclip12.png" alt="FREERAY Project 3" class="w-full h-full object-contain flex-shrink-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="freeray-logos-row">
            <span id="freeray-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/react.png" alt="React.js" class="h-6 w-6 object-contain" /> React
            </span>
            <span id="freeray-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/nodejs.png" alt="Node.js" class="h-6 w-6 object-contain" /> Node.js
            </span>
            <span id="freeray-logo-4" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/expressjs.png" alt="express" class="h-6 w-6 object-contain" /> Express
            </span>
            <span id="freeray-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/mysql.png" alt="MySQL" class="h-6 w-6 object-contain" /> MySQL
            </span>
            <span id="freeray-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="src/images/tcp.png" alt="TCP/IP" class="h-6 w-6 object-contain" /> TCP/IP
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function ProjectsSection(){return`
  <section id="projects" class="rockstar-section bg-rockstar">
    <div class="section-content">
    <h2 class="text-2xl md:text-4xl font-bold mt-20 pt-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center">Projects</h2>
      
      <div class="grid md:grid-cols-2 gap-8 mt-8 mb-20"> 
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
  `}function ContactSection(){return`
  <section id="contact" class="rockstar-section bg-rockstar ">
    <div class="section-content max-w-4xl mx-auto">
      <h2 class="text-4xl font-extrabold text-white mb-2 text-left mt-24">Contact <span class="text-gradient">me.</span></h2>
      <p class="text-lg md:text-xl text-white/80 mb-8 text-left font-mono">I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</p>
      <form class="bg-transparent border border-neutral-800 rounded-xl p-8 space-y-6" autocomplete="off">
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
        <button type="submit" class="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow hover:scale-105 transition-transform tracking-wide font-mono">Send Message</button>
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
  `}const appElement=document.querySelector("#app");appElement.innerHTML=`
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
`;document.addEventListener("DOMContentLoaded",()=>{eval(setupAnimations())});
