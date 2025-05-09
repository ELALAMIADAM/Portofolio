(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function Header(){return`
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
        <div id="header-name" class="text-2xl font-bold opacity-0 transform translate-y-2 transition-all duration-500">
          <span class="color-loop-text">EL ALAMI Adam</span>
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
  `}function HeroSection(){return`
  <section id="home" class="rockstar-section bg-rockstar">
    <div class="section-content text-center">
      <p class="rockstar-heading text-gradient appear-on-scroll mb-4">EL ALAMI ADAM</h1>
      <p class="rockstar-subheading appear-on-scroll">Software Developer </p>
      <p class="text-xl appear-on-scroll">Specializing in Data Pipelines & Backend Systems</p>
      <div class="flex justify-center mt-6 space-x-4 appear-on-scroll">
        <a href="mailto:adamelalami27@gmail.com" class="text-white hover:text-yellow-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/adam-el-alami-502170215/" target="_blank" class="text-white hover:text-yellow-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
        </a>
        <a href="https://github.com/ELALAMIADAM/" target="_blank" class="text-white hover:text-yellow-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
      <div class="mt-12 appear-on-scroll">
        <a href="#about" class="inline-block animate-bounce">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  `}function AboutSection(){return`
  <section id="about" class="rockstar-section bg-rockstar">
    <div class="section-content">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll">About Me</h2>
      
      <div class="about-container">
        <p class="about-main-text">
          Hi, I'm Adam — a software engineer passionate about building smart, efficient backend systems and interactive dashboards.
        </p>
        
        <p class="about-secondary-text">
          From reducing data latency in solar monitoring systems to creating AI-powered career platforms, I enjoy solving real-world problems with clean, scalable code. I thrive in full-stack environments but have a growing passion for backend and data engineering.
        </p>
        
        
      </div>
    </div>
  </section>
  `}function EducationSection(){return`
  <section id="education" class="rockstar-section bg-rockstar">
    <div class="section-content">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll">Education</h2>
      
      <div class="space-y-12">
        <div class="appear-on-scroll">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-bold">Brest national school of engineering</h3>
            <span class="text-yellow-400">Sept. 2023 - Sept. 2025</span>
          </div>
          <p class="text-lg italic mb-2">Software Engineer's Degree - Brest, FR</p>
          <div class="mt-4 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg relative">
            <div class="bg-gradient-to-r from-blue-800 to-purple-800 h-32 flex items-center justify-center rounded-lg">
              <p class="text-xl text-white font-bold"><img src='../public/images/ENIB.png' alt="ENIB Brest Logo" class="w-1/2 h-1/2"></p>
            </div>
          </div>
        </div>
        
        <div class="appear-on-scroll">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-bold">National Higher School of Arts and Crafts</h3>
            <span class="text-yellow-400">Sept. 2018 - July 2023</span>
          </div>
          <p class="text-lg italic mb-2">Engineer's Degree - Meknes, MA</p>
          <div class="mt-4 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg relative">
            <div class="bg-gradient-to-r from-green-800 to-teal-800 h-32 flex items-center justify-center rounded-lg">
              <p class="text-xl text-white font-bold"><img src='../public/images/ENSAM.png' alt="ENSAM Meknes Logo" class="w-1/2 h-1/2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function SkillsSection(){return`
  <section id="skills" class="rockstar-section bg-rockstar">
    <div class="section-content relative">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll">Skills</h2>
      
      <!-- Horizontal Card Slider -->
      <div class="skills-slider-container w-full relative overflow-hidden">
        <!-- Slider Track -->
        <div class="skills-slider-track scrollport flex space-x-8 overflow-x-auto pb-6 snap-x">
          <!-- Languages Card -->
          <div class="skill-card min-w-[280px] md:min-w-[350px] flex-shrink-0 bg-glass rounded-lg overflow-hidden shadow-custom snap-center transform transition-transform duration-300 hover:scale-105 appear-on-scroll">
            <div class="h-16 gradient-card-header flex items-center justify-center">
              <h3 class="text-xl font-bold text-white">Languages</h3>
            </div>
            <div class="p-5">
              <div class="flex flex-col space-y-4">
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="../public/images/french.png" class="w-5 h-5 mr-2" alt="French">
                    French (Fluent)
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="../public/images/english.png" class="w-5 h-5 mr-2" alt="English">
                    English (Fluent)
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="../public/images/arabic.png" class="w-5 h-5 mr-2" alt="Arabic">
                    Arabic (Native)
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Technical Card -->
          <div class="skill-card min-w-[280px] md:min-w-[350px] flex-shrink-0 bg-glass rounded-lg overflow-hidden shadow-custom snap-center transform transition-transform duration-300 hover:scale-105 appear-on-scroll">
            <div class="h-16 gradient-card-header flex items-center justify-center">
              <h3 class="text-xl font-bold text-white">Technical</h3>
            </div>
            <div class="p-5">
              <div class="flex flex-col space-y-4">
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" class="w-5 h-5 mr-2" alt="Java">
                    Java
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" class="w-5 h-5 mr-2" alt="Python">
                    Python
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" class="w-5 h-5 mr-2" alt="React">
                    React
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="https://nodejs.org/static/images/logo.svg" class="w-5 h-5 mr-2" alt="Node.js">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Data Tools Card -->
          <div class="skill-card min-w-[280px] md:min-w-[350px] flex-shrink-0 bg-glass rounded-lg overflow-hidden shadow-custom snap-center transform transition-transform duration-300 hover:scale-105 appear-on-scroll">
            <div class="h-16 gradient-card-header flex items-center justify-center">
              <h3 class="text-xl font-bold text-white">Data Tools</h3>
            </div>
            <div class="p-5">
              <div class="flex flex-col space-y-4">
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" class="w-5 h-5 mr-2" alt="SQL">
                    PostgreSQL | SQLite | MySQL
                  </span>
                </div>

                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="../public/images/oracle.png" class="w-5 h-5 mr-2" alt="Oracle">
                    Oracle Analytics Cloud
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="https://streamlit.io/images/brand/streamlit-mark-color.png" class="w-5 h-5 mr-2" alt="Streamlit">
                    Streamlit
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Data Engineering Card -->
          <div class="skill-card min-w-[280px] md:min-w-[350px] flex-shrink-0 bg-glass rounded-lg overflow-hidden shadow-custom snap-center transform transition-transform duration-300 hover:scale-105 appear-on-scroll">
            <div class="h-16 gradient-card-header flex items-center justify-center">
              <h3 class="text-xl font-bold text-white">Data Engineering</h3>
            </div>
            <div class="p-5">
              <div class="flex flex-col space-y-4">
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="../public/images/starburst.png" class="w-5 h-5 mr-2" alt="Starburst">
                    Starburst
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="../public/images/etl.png" class="w-5 h-5 mr-2" alt="ETL">
                    ETL(Extract, Transform, Load)
                  </span>
                </div>
                <div class="skill-item">
                  <span class="flex items-center px-4 py-2 bg-black rounded-full text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" class="w-5 h-5 mr-2" alt="Data">
                    Data Modeling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function ExperienceSection(){return`
  <section id="experience" class="rockstar-section bg-rockstar">
    <div class="section-content">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll">Professional Experience</h2>
      
      <div class="space-y-24">
        <!-- Data Analyst at ARKEA BANKING SERVICE -->
        <div class="appear-on-scroll">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-bold">Data Analyst - Alternance @ARKEA BANKING SERVICE</h3>
            <span class="text-yellow-400">Sept 2024 - Sept. 2025</span>
          </div>
          <p class="text-lg italic mb-2">Oracle Analytics, SQL, Data engineering - Brest, FR</p>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <ul class="list-disc pl-5 space-y-3">
                <li>Designed and implemented dynamic Oracle Analytics Cloud dashboards by first analyzing client workflows and pain points, then structuring data models for intuitive self-service analytics.</li>
                <li>Built scalable data pipelines to ingest and transform multi-source data into lakehouse formats, enhancing data accessibility and processing speed for analytics teams.</li>
                <li>Developed a Python-based conversion tool to transform legacy Hadoop PIG scripts into optimized Starburst-compatible SQL, preserving business logic and partitioning schemes.</li>
              </ul>
            </div>
            <div class="rounded-lg overflow-hidden">
              <div class="bg-gradient-to-r from-blue-900 to-purple-900 h-64 flex items-center justify-center rounded-lg">
                <p class="text-xl text-white font-bold">Image placeholder: ARKEA Project</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Full-Stack Developer at FREERAY -->
        <div class="appear-on-scroll">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-bold">Full-Stack Developer | Intern @FREERAY</h3>
            <span class="text-yellow-400">May 2024 - Present</span>
          </div>
          <p class="text-lg italic mb-2">React.js, Node.js, MySQL, TCP/IP - Rabat, MA</p>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <ul class="list-disc pl-5 space-y-3">
                <li>Developed solar monitoring dashboard that reduced client reporting time by 40% through React visualization of 15+ data metrics.</li>
                <li>Designed MySQL database with 18+ tables to centralize solar project management and device tracking.</li>
                <li>Optimized solar device data collection by implementing TCP/IP protocol, reducing data latency by 30% for 50+ connected Huawei devices.</li>
              </ul>
            </div>
            <div class="rounded-lg overflow-hidden">
              <div class="bg-gradient-to-r from-yellow-900 to-red-900 h-64 flex items-center justify-center rounded-lg">
                <p class="text-xl text-white font-bold">Image placeholder: FREERAY Solar Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function ProjectsSection(){return`
  <section id="projects" class="rockstar-section bg-rockstar">
    <div class="section-content">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll">Projects</h2>
      
      <div class="grid md:grid-cols-2 gap-12 mt-8">
        <!-- Job Market Analytics Scraper -->
        <div class="appear-on-scroll bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all">
          <h3 class="text-2xl font-bold mb-3">Job Market Analytics Scraper</h3>
          <div class="flex items-center text-yellow-400 mb-4">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
            <span class="text-sm">Python • Scrapy • SQLite • Streamlit</span>
          </div>
          <div class="bg-gradient-to-r from-purple-900 to-indigo-900 h-40 flex items-center justify-center rounded-lg mb-4">
            <p class="text-lg text-white font-bold">Image placeholder: Job Market Analytics</p>
          </div>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li>Developed a data pipeline to scrape, analyze and visualize job market trends from LinkedIn and Indeed using Python and Scrapy.</li>
            <li>Implemented automated data collection with GitHub Actions, storing structured data in SQLite for analysis.</li>
            <li>Built an interactive dashboard using Streamlit to visualize key insights about job market demands and skill trends.</li>
          </ul>
          <a href="https://github.com/ELALAMIADAM/Job-Market-Analytics-Scraper" target="_blank" class="text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center">
            View Project 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        <!-- Smart Menu Web App for Restaurant -->
        <div class="appear-on-scroll bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all">
          <h3 class="text-2xl font-bold mb-3">Smart Menu Web App for Restaurant</h3>
          <div class="flex items-center text-yellow-400 mb-4">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
            <span class="text-sm">UX/UI • Github • React • TailWind</span>
          </div>
          <div class="bg-gradient-to-r from-red-900 to-orange-800 h-40 flex items-center justify-center rounded-lg mb-4">
            <p class="text-lg text-white font-bold">Image placeholder: Smart Menu App</p>
          </div>
          <p class="mb-4">
            As part of a team project, we created a digital ordering solution for a table-service restaurant. Starting from Scratch, our mission was to analyze customer behavior and reduce service friction through UX research, prototyping, and web development.
          </p>
          <a href="https://github.com/ELALAMIADAM/Smart-Menu-Web-App-for-Restaurant" target="_blank" class="text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center">
            View Project 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        <!-- Market Sales Management Application -->
        <div class="appear-on-scroll bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all">
          <h3 class="text-2xl font-bold mb-3">Market Sales Management Application</h3>
          <div class="flex items-center text-yellow-400 mb-4">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
            <span class="text-sm">Github • React • Flask • SQLite</span>
          </div>
          <div class="bg-gradient-to-r from-green-900 to-teal-800 h-40 flex items-center justify-center rounded-lg mb-4">
            <p class="text-lg text-white font-bold">Image placeholder: Sales Management App</p>
          </div>
          <p class="mb-4">
            The application developed for market sales management enables users to efficiently track and manage sales transactions while providing robust analytical tools for performance evaluation. This solution empowers businesses to make data-driven decisions and optimize their sales strategies for enhanced profitability.
          </p>
          <a href="https://github.com/ELALAMIADAM/logiciel-caisse" target="_blank" class="text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center">
            View Project 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        <!-- AI-Powered Career Management Platform -->
        <div class="appear-on-scroll bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all">
          <h3 class="text-2xl font-bold mb-3">AI-Powered Career Management Platform</h3>
          <div class="flex items-center text-yellow-400 mb-4">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
            <span class="text-sm">Next.js • Node.js • NLP • PostgreSQL</span>
          </div>
          <div class="bg-gradient-to-r from-blue-900 to-cyan-800 h-40 flex items-center justify-center rounded-lg mb-4">
            <p class="text-lg text-white font-bold">Image placeholder: Career Management Platform</p>
          </div>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li>Developed a full-stack AI-powered career management platform using Next.js, Node.js, and TypeScript, integrating OpenAI for resume optimization and job matching.</li>
            <li>Implemented a RESTful API with JWT authentication, PostgreSQL database, and Sequelize ORM for secure data management.</li>
            <li>Designed AI-driven features including automated cover letter generation, resume analysis, and interview preparation with custom practice questions.</li>
          </ul>
          <a href="https://github.com/ELALAMIADAM/careervoid" target="_blank" class="text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center">
            View Project 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      
        <!-- Virtual Museum -->
        <div class="appear-on-scroll bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all">
          <h3 class="text-2xl font-bold mb-3">Virtual Museum</h3>
          <div class="flex items-center text-yellow-400 mb-4">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
            <span class="text-sm">Github • JavaScript • Babylon.js</span>
          </div>
          <div class="bg-gradient-to-r from-purple-900 to-pink-800 h-40 flex items-center justify-center rounded-lg mb-4">
            <p class="text-lg text-white font-bold">Image placeholder: Virtual Museum</p>
          </div>
          <p class="mb-4">
            Development of a first-person immersive platform using JavaScript and Babylon.js. Allows users to explore a virtual museum, interact with other visitors in real time, and discover interactive exhibits.
          </p>
          <a href="https://github.com/ayoubachak/museum-babylon" target="_blank" class="text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center">
            View Project 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  `}function ContactSection(){return`
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
