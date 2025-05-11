export function HeroSection() {
  // Animate stats from 0 to their target values
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      function animateStat(el, target) {
        let current = 0;
        const increment = Math.ceil(target / 10000);
        const update = () => {
          current += increment;
          if (current >= target) {
            el.textContent = target + (target === 365 ? '' : '+');
          } else {
            el.textContent = current;
            requestAnimationFrame(update);
          }
        };
        update();
      }
      document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        animateStat(el, target);
      });
      // Image carousel logic
      var track = document.getElementById('carousel-track');
      if (track) {
        var images = track.children;
        var current = 0;
        setInterval(function() {
          current = (current + 1) % images.length;
          track.style.transform = 'translateX(-' + (current * 224) + 'px)'; // 224px = 14rem = w-56
        }, 2000);
      }
    });
  }
  return `
  <section id="home" class="rockstar-section bg-black py-16">
    <div class="section-content max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <!-- Left: Description -->
      <div class="md:w-1/2 w-full mb-10 md:mb-0">
        <p class="text-lg font-semibold mb-2 appear-on-scroll text-white">Hi, my name is</p>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 appear-on-scroll text-gradient">ADAM EL ALAMI</h1>
        <p class="text-xl mb-6 appear-on-scroll text-white">Software Developer passionate about building impactful digital experiences.</p>
        <div class="flex gap-4 mt-4 appear-on-scroll justify-center md:justify-start">
          <a href="#contact" class="font-semibold px-6 py-2 rounded-lg shadow transition-colors text-white bg-gradient-to-r from-yellow-400 to-red-500 border-0 hover:scale-105 focus:scale-105">Contact me</a>
          <a href="#about" class="ml-2 border font-semibold px-6 py-2 rounded-lg shadow transition-colors text-gradient border-yellow-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 focus:bg-yellow-400 focus:text-black focus:border-yellow-400">Check Portfolio</a>
        </div>
      </div>
      <!-- Right: Image Carousel -->
      <div class="md:w-1/2 w-full flex justify-center md:justify-end">
        <div id="hero-image-carousel" class="relative w-56 h-56 overflow-hidden">
          <div id="carousel-track" class="flex transition-transform duration-700 w-[28rem] h-full">
            <img
              src="src/images/adam.jpg"
              alt="EL ALAMI ADAM 2"
              class="rounded-2xl w-56 h-56 object-cover border-4 shadow-lg appear-on-scroll border-yellow-400 flex-shrink-0"
            />
            <img
              src="src/images/adamm.png"
              alt="EL ALAMI ADAM"
              class="rounded-2xl w-56 h-56 object-cover border-4 shadow-lg appear-on-scroll border-yellow-400 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Stats Row -->
    <div class="max-w-3xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-black bg-opacity-40 rounded-xl py-6 px-4 appear-on-scroll">
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="30">0</p>
        <p class="text-sm text-white">Repositories</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="50">0</p>
        <p class="text-sm text-white">Followers</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="2">0</p>
        <p class="text-sm text-white">Projects</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="1">0</p>
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
  `;
}