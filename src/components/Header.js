export function Header() {
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