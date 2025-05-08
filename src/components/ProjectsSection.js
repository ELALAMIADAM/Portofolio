export function ProjectsSection() {
  return `
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
  `;
} 