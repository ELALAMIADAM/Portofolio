export function Header() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      // Splash cursor toggle functionality
      const splashToggle = document.querySelector('.splash-toggle');
      let splashEnabled = !window.matchMedia('(max-width: 768px)').matches; // Disabled on mobile by default
      
      // Update toggle button state
      function updateToggleButton() {
        const toggleButton = document.querySelector('.splash-toggle');
        const toggleIcon = document.querySelector('.splash-toggle-icon');
        const toggleText = document.querySelector('.splash-toggle-text');
        
        if (splashEnabled) {
          toggleButton.classList.add('active');
          toggleIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          `;
          toggleText.textContent = 'ON';
        } else {
          toggleButton.classList.remove('active');
          toggleIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 12M6 6l12 12"></path>
          `;
          toggleText.textContent = 'OFF';
        }
      }

      // Toggle splash cursor
      if (splashToggle) {
        splashToggle.addEventListener('click', () => {
          splashEnabled = !splashEnabled;
          updateToggleButton();
          
          // Dispatch custom event to control splash cursor
          window.dispatchEvent(new CustomEvent('splashToggle', { 
            detail: { enabled: splashEnabled } 
          }));
        });
      }

      // Initialize toggle button
      updateToggleButton();

      // Disable on mobile automatically
      window.addEventListener('resize', () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile && splashEnabled) {
          splashEnabled = false;
          updateToggleButton();
          window.dispatchEvent(new CustomEvent('splashToggle', { 
            detail: { enabled: false } 
          }));
        }
      });

      // Mobile menu toggle
      const menuButton = document.querySelector('.mobile-menu-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

      if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          menuButton.classList.toggle('active');
        });

        // Close menu when clicking a link
        mobileMenuLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuButton.classList.remove('active');
          });
        });
      }

      // Active link highlighting
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');

      function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 150;
          const sectionId = section.getAttribute('id');
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
              link.classList.remove('active');
              const linkHref = link.getAttribute('href').substring(1);
              if (linkHref === sectionId) {
                link.classList.add('active');
              }
            });
          }
        });
      }

      window.addEventListener('scroll', highlightNavLink);
      highlightNavLink();
    });
  }

  return `
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
  `;
}