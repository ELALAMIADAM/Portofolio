export function HeroSection() {
  return `
  <section id="home" class="rockstar-section bg-black py-16">
    <div class="section-content max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <!-- Left: Description -->
      <div class="md:w-1/2 w-full mb-10 md:mb-0">
        <p class="text-lg font-semibold mb-2 appear-on-scroll text-gradient">Hi, my name is</p>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 appear-on-scroll text-gradient">ADAM EL ALAMI</h1>
        <p class="text-xl mb-6 appear-on-scroll text-gradient">Software Developer passionate about building impactful digital experiences.</p>
        <div class="flex gap-4 mt-4 appear-on-scroll justify-center md:justify-start">
          <a href="#contact" class="nav-link font-semibold px-6 py-2 rounded-lg shadow transition-colors text-white bg-gradient-to-r from-yellow-400 to-red-500 border-0">Contact me</a>
          <a href="#about" class="ml-2 nav-link border font-semibold px-6 py-2 rounded-lg shadow transition-colors text-gradient border-yellow-400">Check Portfolio</a>
        </div>
      </div>
      <!-- Right: Image -->
      <div class="md:w-1/2 w-full flex justify-center md:justify-end">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E35AQHpz1WN_3_Pew/profile-framedphoto-shrink_400_400/B4EZYLsiI.HkAg-/0/1743952946019?e=1747422000&v=beta&t=n4MU0HbPXzAkMkJviLBAizNSO3pyERFVQU6gALn3ejc"
          alt="EL ALAMI ADAM"
          class="rounded-2xl w-56 h-56 object-cover border-4 shadow-lg appear-on-scroll border-yellow-400"
        />
      </div>
    </div>
    <!-- Stats Row -->
    <div class="max-w-3xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-black bg-opacity-40 rounded-xl py-6 px-4 appear-on-scroll">
      <div>
        <p class="text-3xl font-extrabold text-gradient">30+</p>
        <p class="text-sm text-white">Repositories</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient">50+</p>
        <p class="text-sm text-white">Followers</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient">120+</p>
        <p class="text-sm text-white">Stars</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient">365</p>
        <p class="text-sm text-white">Contributions (2024)</p>
      </div>
    </div>
    <div class="mt-12 flex justify-center appear-on-scroll">
      <a href="#about" class="inline-block animate-bounce">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="color:#2188ff;">
          <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </section>
  `;
}