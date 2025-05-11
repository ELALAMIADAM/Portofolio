export function ProjectsSection() {
  return `
  <section id="projects" class="rockstar-section bg-rockstar ">
    <div class="section-content">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll mt-32">Projects</h2>
      
      <div class="grid md:grid-cols-2 gap-12 mt-8 mb-20">
        <!-- Timesheet Management App (inspired card) -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden hover:shadow-2xl transition-all">
          <div class="bg-white flex items-center justify-center p-6 pb-0 rounded-t-2xl">
            <img src="/images/timesheet-dashboard.png" alt="Timesheet Management App Screenshot" class="rounded-xl shadow border border-neutral-300 max-w-full max-h-80 object-contain"/>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-2xl font-bold mb-1 text-white underline underline-offset-4 decoration-2 decoration-white/60">Timesheet Management App</h3>
            <div class="flex items-center gap-2 mb-2">
              <a href="https://github.com/yourusername/timesheet-app" target="_blank" class="ml-auto text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <span class="block text-white/80 text-base mb-2">View Project</span>
            <p class="text-white/80 text-base mb-4">An Employee Timesheet Management Website featuring weekly timesheet submission and a dashboard.</p>
          </div>
        </div>
        <!-- Job Market Analytics Scraper (restyled) -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden hover:shadow-2xl transition-all">
          <div class="bg-gradient-to-r from-purple-900 to-indigo-900 flex items-center justify-center p-6 pb-0 rounded-t-2xl">
            <img src="/images/job-market-analytics.png" alt="Job Market Analytics Scraper Screenshot" class="rounded-xl shadow border border-neutral-300 max-w-full max-h-80 object-contain"/>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-2xl font-bold mb-1 text-white underline underline-offset-4 decoration-2 decoration-white/60">Job Market Analytics Scraper</h3>
            <div class="flex items-center gap-2 mb-2">
              <a href="https://github.com/ELALAMIADAM/Job-Market-Analytics-Scraper" target="_blank" class="ml-auto text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <span class="block text-white/80 text-base mb-2">View Project</span>
            <p class="text-white/80 text-base mb-4">Developed a data pipeline to scrape, analyze and visualize job market trends from LinkedIn and Indeed using Python and Scrapy. Built an interactive dashboard using Streamlit to visualize key insights about job market demands and skill trends.</p>
          </div>
        </div>
        <!-- Smart Menu Web App for Restaurant (restyled) -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden hover:shadow-2xl transition-all">
          <div class="bg-gradient-to-r from-red-900 to-orange-800 flex items-center justify-center p-6 pb-0 rounded-t-2xl">
            <img src="/images/smart-menu-app.png" alt="Smart Menu Web App Screenshot" class="rounded-xl shadow border border-neutral-300 max-w-full max-h-80 object-contain"/>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-2xl font-bold mb-1 text-white underline underline-offset-4 decoration-2 decoration-white/60">Smart Menu Web App for Restaurant</h3>
            <div class="flex items-center gap-2 mb-2">
              <a href="https://github.com/ELALAMIADAM/Smart-Menu-Web-App-for-Restaurant" target="_blank" class="ml-auto text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <span class="block text-white/80 text-base mb-2">View Project</span>
            <p class="text-white/80 text-base mb-4">A digital ordering solution for restaurants, reducing service friction through UX research, prototyping, and web development.</p>
          </div>
        </div>
        <!-- Market Sales Management Application (restyled) -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden hover:shadow-2xl transition-all">
          <div class="bg-gradient-to-r from-green-900 to-teal-800 flex items-center justify-center p-6 pb-0 rounded-t-2xl">
            <img src="/images/sales-management-app.png" alt="Market Sales Management App Screenshot" class="rounded-xl shadow border border-neutral-300 max-w-full max-h-80 object-contain"/>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-2xl font-bold mb-1 text-white underline underline-offset-4 decoration-2 decoration-white/60">Market Sales Management Application</h3>
            <div class="flex items-center gap-2 mb-2">
              <a href="https://github.com/ELALAMIADAM/logiciel-caisse" target="_blank" class="ml-auto text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <span class="block text-white/80 text-base mb-2">View Project</span>
            <p class="text-white/80 text-base mb-4">A market sales management app to track and manage sales transactions, with robust analytics for performance evaluation and business optimization.</p>
          </div>
        </div>
        <!-- AI-Powered Career Management Platform (restyled) -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden hover:shadow-2xl transition-all">
          <div class="bg-gradient-to-r from-blue-900 to-cyan-800 flex items-center justify-center p-6 pb-0 rounded-t-2xl">
            <img src="/images/career-management-platform.png" alt="AI-Powered Career Management Platform Screenshot" class="rounded-xl shadow border border-neutral-300 max-w-full max-h-80 object-contain"/>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-2xl font-bold mb-1 text-white underline underline-offset-4 decoration-2 decoration-white/60">AI-Powered Career Management Platform</h3>
            <div class="flex items-center gap-2 mb-2">
              <a href="https://github.com/ELALAMIADAM/careervoid" target="_blank" class="ml-auto text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <span class="block text-white/80 text-base mb-2">View Project</span>
            <p class="text-white/80 text-base mb-4">A full-stack AI-powered career management platform using Next.js, Node.js, and TypeScript, integrating OpenAI for resume optimization and job matching.</p>
          </div>
        </div>
        <!-- Virtual Museum (restyled) -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden hover:shadow-2xl transition-all">
          <div class="bg-gradient-to-r from-purple-900 to-pink-800 flex items-center justify-center p-6 pb-0 rounded-t-2xl">
            <img src="/images/virtual-museum.png" alt="Virtual Museum Screenshot" class="rounded-xl shadow border border-neutral-300 max-w-full max-h-80 object-contain"/>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-2xl font-bold mb-1 text-white underline underline-offset-4 decoration-2 decoration-white/60">Virtual Museum</h3>
            <div class="flex items-center gap-2 mb-2">
              <a href="https://github.com/ayoubachak/museum-babylon" target="_blank" class="ml-auto text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            <span class="block text-white/80 text-base mb-2">View Project</span>
            <p class="text-white/80 text-base mb-4">A first-person immersive platform using JavaScript and Babylon.js. Explore a virtual museum, interact with visitors, and discover interactive exhibits.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}