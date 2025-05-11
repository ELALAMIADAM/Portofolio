export function Header() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      var indicator = document.querySelector('.scroll-indicator');
      var skillsSection = document.getElementById('skills');
      if (indicator && skillsSection) {
        indicator.style.display = 'none';
        var observer = new window.IntersectionObserver(
          function(entries) {
            if (entries[0].isIntersecting) {
              indicator.style.display = '';
            } else {
              indicator.style.display = 'none';
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(skillsSection);
      }
    });
  }
  return `
  <div class="scroll-indicator">
    <div class="up">
      <span>↑</span>
      <div class="center">
        <span>mouse<br>scrolling</span>
      </div>
    </div>
    <div class="down">
      <span>↓</span>
    </div>
  </div>

  <!-- Left-aligned contact info bar -->
  <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 bg-black/60 rounded-xl p-4 shadow-lg border border-gray-700">
    <a href="mailto:adamelalami27@gmail.com" target="_blank" rel="noopener" class="group" aria-label="Email">
      <svg class="w-7 h-7 text-gray-300 group-hover:text-orange-400 transition" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25ZM3.75 7.5l7.5 6 7.5-6"/></svg>
    </a>
    <a href="https://github.com/ELALAMIADAM" target="_blank" rel="noopener" class="group" aria-label="GitHub">
      <svg class="w-7 h-7 text-gray-300 group-hover:text-orange-400 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/adam-el-alami-502170215/" target="_blank" rel="noopener" class="group" aria-label="LinkedIn">
      <svg class="w-7 h-7 text-gray-300 group-hover:text-orange-400 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5 .606z"/></svg>
    </a>
  </div>

  <header class="smooth-header fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300">
    <nav>
      <div class="flex items-center">
        <div id="header-name" class="text-2xl font-bold opacity-0 transform translate-y-2 transition-all duration-1000">
          <span class="color-loop-text text-white">EL ALAMI Adam</span>
        </div>
      </div>
      <ul class="nav-links">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#education" class="nav-link">Education</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>
  `;
}