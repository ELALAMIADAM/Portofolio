export function ProjectsSection() {
  return `
  <section id="projects" class="rockstar-section bg-rockstar">
    <div class="section-content">
    <h2 class="text-2xl md:text-4xl font-bold mt-20 pt-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-center">Projects</h2>
      
      <div class="grid md:grid-cols-2 gap-8 mt-8 mb-20"> 
        <!-- Tetris with AI -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500">
          <!-- Project Preview Image (shown by default, hidden on hover for live projects) -->
          <div class="project-preview absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
            <img src="/images/tetris.png" alt="Tetris Game Preview" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-4 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-white text-xl font-bold">Hover to see details</p>
                <p class="text-cyan-300 text-sm mt-2">Click links to play live!</p>
              </div>
            </div>
          </div>
          
          <!-- Project Details (hidden by default, shown on hover) -->
          <div class="project-details relative z-20 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Tetris with AI - Deep Q-Learning</h3>
              <div class="flex gap-4">
                <a href="https://github.com/ELALAMIADAM/tetris" target="_blank" class="text-white/80 hover:text-white transition-colors z-30">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://elalamiadam.github.io/tetris/" target="_blank" class="text-white/80 hover:text-white transition-colors z-30">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-cyan-300">Completion</span>
                <span class="text-sm font-bold text-cyan-300">100%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style="width: 100%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">TensorFlow.js</span>
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">Double DQN</span>
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">Reinforcement Learning</span>
            </div>
            <p class="text-white/80 text-base">An advanced Tetris game featuring a Double DQN AI that learns to play through reinforcement learning. The AI uses 30+ reward factors and can be trained in background mode. Features classic gameplay with multiple difficulty levels, sound effects, and the ability to watch the AI learn and play in real-time.</p>
          </div>
        </div>

        <!-- Blood Donation App -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-yellow-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Blood Donation App</h3>
              <a href="https://github.com/ELALAMIADAM/blood-connect" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-yellow-300">Completion</span>
                <span class="text-sm font-bold text-yellow-300">95%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">Node.js</span>
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">PostgreSQL</span>
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">JWT</span>
            </div>
            <p class="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">Developed a full-stack app to connect blood donors and recipients, addressing delays in emergency blood supply. Implemented Vue.js frontend and Node.js backend with JWT authentication and geolocation matching. Resulted in a 40% faster donor response time, recognized for social impact.</p>
          </div>
        </div>

        <!-- Job Market Analytics Scraper -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-purple-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Job Market Analytics Scraper</h3>
              <a href="https://github.com/ELALAMIADAM/Job-Market-Analytics-Scraper" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-purple-300">Completion</span>
                <span class="text-sm font-bold text-purple-300">90%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Python</span>
              <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Scrapy</span>
              <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Streamlit</span>
            </div>
            <p class="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">Developed a data pipeline to scrape, analyze and visualize job market trends from LinkedIn and Indeed using Python and Scrapy. Built an interactive dashboard using Streamlit to visualize key insights about job market demands and skill trends.</p>
          </div>
        </div>

        <!-- Smart Menu Web App -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-red-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Smart Menu Web App</h3>
              <a href="https://github.com/ELALAMIADAM/Smart-Menu-Web-App-for-Restaurant" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-red-300">Completion</span>
                <span class="text-sm font-bold text-red-300">85%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-red-500 to-pink-500 h-2.5 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">Figma</span>
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">UX/UI</span>
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">Tailwind CSS</span>
            </div>
            <p class="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">A digital ordering solution for restaurants, reducing service friction through UX research, prototyping, and web development.</p>
          </div>
        </div>

        <!-- Wood Block Puzzle AI Game -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-orange-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Wood Block Puzzle AI Game</h3>
              <a href="https://github.com/ELALAMIADAM/Block-Puzzle-" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-orange-300">Completion</span>
                <span class="text-sm font-bold text-orange-300">100%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-orange-500 to-red-500 h-2.5 rounded-full" style="width: 100%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">Tensorflow</span>
              <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">RL/DQN</span>
            </div>
            <p class="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">Built a React puzzle game with a self-learning AI using TensorFlow.js. Designed game mechanics, DQN-based reinforcement learning, and interactive UI to train and visualize AI performance. Demonstrated full-stack JS skills in game dev and ML.</p>
          </div>
        </div>
        
        <!-- Market Sales Management Application -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-green-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Market Sales Management</h3>
              <a href="https://github.com/ELALAMIADAM/logiciel-caisse" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-green-300">Completion</span>
                <span class="text-sm font-bold text-green-300">80%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full" style="width: 80%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">Flask</span>
              <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">SQLite</span>
            </div>
            <p class="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">A market sales management app to track and manage sales transactions, with robust analytics for performance evaluation and business optimization.</p>
          </div>
        </div>

        <!-- AI-Powered Career Management Platform -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">AI Career Management Platform</h3>
              <a href="https://github.com/ELALAMIADAM/careervoid" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-blue-300">Completion</span>
                <span class="text-sm font-bold text-blue-300">75%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Next.js</span>
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">NLP</span>
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Node.js</span>
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">PostgreSQL</span>
            </div>
            <p class="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">A full-stack AI-powered career management platform using Next.js, Node.js, and TypeScript, integrating OpenAI for resume optimization and job matching.</p>
          </div>
        </div>

        <!-- Emergency Location Sender -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-gray-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Emergency Location Sender</h3>
              <a href="https://github.com/ELALAMIADAM/send-position-with-speech" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-gray-300">Completion</span>
                <span class="text-sm font-bold text-gray-300">100%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-gray-500 to-gray-700 h-2.5 rounded-full" style="width: 100%"></div>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-white text-black rounded-full text-sm">Java</span>
              <span class="px-3 py-1 bg-white text-black rounded-full text-sm">Android Studio</span>
              <span class="px-3 py-1 bg-white text-black rounded-full text-sm">GPS/SMS</span>
            </div>
            <p class="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">Android app that automatically detects emergency button presses (even when screen is off) and sends GPS coordinates via SMS to predefined contacts, with auto-response to location requests. Built with Java using Accessibility Service and FusedLocationProvider.</p>
          </div>
        </div>
        
        <!-- Virtual Museum -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-purple-500">
          <!-- Project Preview Image (shown by default, hidden on hover for live projects) -->
          <div class="project-preview absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0">
            <img src="/images/musuem.png" alt="Virtual Museum Preview" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-4 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-white text-xl font-bold">Hover to see details</p>
                <p class="text-purple-300 text-sm mt-2">Click links to explore live!</p>
              </div>
            </div>
          </div>
          
          <!-- Project Details (hidden by default, shown on hover) -->
          <div class="project-details relative z-20 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Virtual Museum</h3>
              <div class="flex gap-4">
                <a href="https://github.com/ayoubachak/museum-babylon" target="_blank" class="text-white/80 hover:text-white transition-colors z-30">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://ayoubachak.github.io/museum-babylon/" target="_blank" class="text-white/80 hover:text-white transition-colors z-30">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-purple-300">Completion</span>
                <span class="text-sm font-bold text-purple-300">100%</span>
              </div>
              <div class="w-full bg-neutral-800 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full" style="width: 100%"></div>
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
    </div>
  </section>
  
  <style>
    .project-card {
      min-height: 400px;
      position: relative;
    }
    
    /* For projects with live previews */
    .project-card .project-preview {
      background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%);
    }
    
    .project-card .project-details {
      background: rgba(23, 23, 23, 0.95);
      backdrop-filter: blur(10px);
    }
    
    /* Ensure links are clickable even when details are visible */
    .project-card a {
      position: relative;
      z-index: 40;
    }
  </style>
  `;
}
