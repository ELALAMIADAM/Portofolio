export function ProjectsSection() {
  return `
  <section id="projects" class="rockstar-section bg-rockstar">
    <div class="section-content">
    <h2 class="text-2xl md:text-4xl font-bold mt-20 pt-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center">Projects</h2>
      
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
          <p class="text-white/80 text-base">Developed a full-stack app to connect blood donors and recipients, addressing delays in emergency blood supply. Implemented Vue.js frontend and Node.js backend with JWT authentication and geolocation matching. Resulted in a 40\% faster donor response time, recognized for social impact.</p>
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
  `;
}