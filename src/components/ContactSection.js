export function ContactSection() {
  return `
  <section id="contact" class="rockstar-section bg-rockstar">
    <div class="section-content text-center">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll">Get In Touch</h2>
      <p class="text-xl mb-8 appear-on-scroll">Let's connect and discuss how we can work together!</p>
      
      <div class="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <a href="mailto:adamelalami27@gmail.com" class="appear-on-scroll bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all">
          <div class="text-3xl mb-2">📧</div>
          <h3 class="text-xl font-bold">Email</h3>
          <p class="text-sm text-gray-300">adamelalami27@gmail.com</p>
        </a>
        
        <a href="tel:+33780542575" class="appear-on-scroll bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all">
          <div class="text-3xl mb-2">📱</div>
          <h3 class="text-xl font-bold">Phone</h3>
          <p class="text-sm text-gray-300">+33 7 80 54 25 75</p>
        </a>
        
        <a href="https://www.linkedin.com/in/adam-el-alami-502170215/" target="_blank" class="appear-on-scroll bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg transition-all">
          <div class="text-3xl mb-2">🔗</div>
          <h3 class="text-xl font-bold">LinkedIn</h3>
          <p class="text-sm text-gray-300">adam-el-alami-502170215</p>
        </a>
      </div>
    </div>
  </section>
  `;
} 