export function AboutSection() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.about-paragraph').forEach(paragraph => {
        observer.observe(paragraph);
      });
    });
  }
  return `
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
  `;
} 