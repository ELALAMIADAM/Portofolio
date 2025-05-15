export function ExperienceSection() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      // ARKEA BANKING SERVICE carousel
      var track = document.getElementById('experience-carousel-track');
      var descs = document.querySelectorAll('.experience-arkeabs-desc');
      var arkeaInterval;
      var arkeaPaused = false;
      if (track && descs.length) {
        var images = track.children;
        var current = 0;
        var imageWidth = track.offsetWidth;
        function updateDesc(idx) {
          descs.forEach(function (li, i) {
            if (i === idx) {
              li.classList.remove('hidden');
            } else {
              li.classList.add('hidden');
            }
          });
          // Logo highlight logic
          var logo0 = document.getElementById('exp-logo-0');
          var logo1 = document.getElementById('exp-logo-1');
          var logo2 = document.getElementById('exp-logo-2');
          var logo3 = document.getElementById('exp-logo-3');
          var logo5 = document.getElementById('exp-logo-5');
          if (logo0 && logo1 && logo2 && logo3 && logo5) {
            // Reset all
            [logo0, logo1, logo2, logo3, logo5].forEach(function(el) {
              el.classList.remove('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','text-white','font-bold','scale-105');
              el.classList.add('border-neutral-700','bg-neutral-900/70','text-white');
            });
            if(idx === 0) {
              logo0.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo3.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } else if(idx === 1) {
              logo1.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo3.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo5.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } else if(idx === 2) {
              logo2.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo3.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo5.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } 
          }
        }
        function scrollCarousel() {
          if (arkeaPaused) return;
          imageWidth = track.offsetWidth;
          current = (current + 1) % images.length;
          track.style.transform = `translateX(-${current * imageWidth}px)`;
          updateDesc(current);
        }
        arkeaInterval = setInterval(scrollCarousel, 2000);
        track.addEventListener('mouseenter', function () {
          arkeaPaused = true;
        });
        track.addEventListener('mouseleave', function () {
          arkeaPaused = false;
        });
        window.addEventListener('resize', function () {
          imageWidth = track.offsetWidth;
          track.style.transform = `translateX(-${current * imageWidth}px)`;
        });
        updateDesc(0);
      }

      // FREERAY carousel
      var freerayTrack = document.getElementById('freeray-carousel-track');
      var freerayDescs = document.querySelectorAll('.experience-freeray-desc');
      var freerayInterval;
      var freerayPaused = false;
      if (freerayTrack && freerayDescs.length) {
        var freerayImages = freerayTrack.children;
        var freerayCurrent = 0;
        var freerayImageWidth = freerayTrack.offsetWidth;
        function updateFreerayDesc(idx) {
          freerayDescs.forEach(function (li, i) {
            if (i === idx) {
              li.classList.remove('hidden');
            } else {
              li.classList.add('hidden');
            }
          });
          // Logo highlight logic for FREERAY
          var logo0 = document.getElementById('freeray-logo-0');
          var logo1 = document.getElementById('freeray-logo-1');
          var logo2 = document.getElementById('freeray-logo-2');
          var logo3 = document.getElementById('freeray-logo-3');
          var logo4 = document.getElementById('freeray-logo-4');
          if (logo0 && logo1 && logo2 && logo3 && logo4) {
            [logo0, logo1, logo2, logo3, logo4].forEach(function(el) {
              el.classList.remove('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              el.classList.add('border-neutral-700','bg-neutral-900/80','text-white');
            });
            if(idx === 0) {
              logo4.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo0.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo1.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } else if(idx === 1) {
              logo2.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } else if(idx === 2) {
              logo3.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            }
          }
        }
        function scrollFreerayCarousel() {
          if (freerayPaused) return;
          freerayImageWidth = freerayTrack.offsetWidth;
          freerayCurrent = (freerayCurrent + 1) % freerayImages.length;
          freerayTrack.style.transform = `translateX(-${freerayCurrent * freerayImageWidth}px)`;
          updateFreerayDesc(freerayCurrent);
        }
        freerayInterval = setInterval(scrollFreerayCarousel, 2000);
        freerayTrack.addEventListener('mouseenter', function () {
          freerayPaused = true;
        });
        freerayTrack.addEventListener('mouseleave', function () {
          freerayPaused = false;
        });
        window.addEventListener('resize', function () {
          freerayImageWidth = freerayTrack.offsetWidth;
          freerayTrack.style.transform = `translateX(-${freerayCurrent * freerayImageWidth}px)`;
        });
        updateFreerayDesc(0);
      }
    });
  }
  return `
  <section id="experience" class="rockstar-section bg-rockstar bg-cover bg-center bg-no-repeat">
    <div class="section-content">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center mt-34">Professional Experience</h2>
      
      <div class="flex flex-col gap-24">
        <!-- Data Analyst at ARKEA BANKING SERVICE -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-white">Data Analyst | Apprenticeship</h3>
            <a href="https://www.arkea-banking-services.com/public/cms/c_5386/fr/accueil" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="/profile/images/arkea.png" alt="ARKEA" class="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span class="text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@ARKEA</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div class="min-h-[300px]">
              <div class="experience-arkeabs-desc" data-index="0">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Clients struggled with inefficient workflows and unclear data insights.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Designed dynamic Oracle Analytics Cloud dashboards for self-service analytics.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Analyzed workflows, identified pain points, and structured intuitive data models.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Empowered users with dashboards, cutting manual reporting by 30%.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-arkeabs-desc hidden" data-index="1">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Analytics teams faced challenges with data accessibility and processing speed.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Create scalable data pipelines to unify and integrate multi-source data for seamless analytics.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Built data pipelines to ingest and transform data into lakehouse formats.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Enhanced data accessibility and processing speed for analytics teams.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-arkeabs-desc hidden" data-index="2">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Legacy Hadoop PIG scripts needed modernization for Starburst compatibility.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Develop a conversion tool to transform PIG scripts to Starburst SQL.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Created Python-based conversion tool while preserving business logic and partitioning schemes.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Successfully migrated legacy scripts to optimized Starburst-compatible SQL.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700">
              <div class="h-64 flex items-center justify-center rounded-lg relative">
                <div id="experience-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="/profile/images/viz.png" alt="oracle analytics" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/profile/images/datalakehouse.png" alt="datalakehouse" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/profile/images/Pig-Latin-script.png" alt="Pig-Latin-script" class="w-full h-full object-contain flex-shrink-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="experience-logos-row">
            <span id="exp-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/oracle.png" alt="Oracle Analytics" class="h-6 w-6 object-contain" /> Oracle Analytics
            </span>
            <span id="exp-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/sql.png" alt="SQL" class="h-6 w-6 object-contain" /> SQL
            </span>
            <span id="exp-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/ETL.png" alt="ETL" class="h-6 w-6 object-contain" /> ETL
            </span>
            <span id="exp-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/python.png" alt="python" class="h-6 w-6 object-contain" /> Python
            </span>
            <span id="exp-logo-5" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/starburst.png" alt="Starburst" class="h-6 w-6 object-contain" /> Starburst
            </span>
          </div>
        </div>
        
        <!-- Full-Stack Developer at FREERAY -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600 mb-12">
          <div class="flex justify-between items-center ">
            <h3 class="text-2xl font-bold text-white">Full-Stack Developer | Intern</h3>
            <a href="https://freeray.ma" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="/profile/images/freeray_logo.jpeg" alt="FREERAY" class="h-8 w-8 object-contain rounded-full group-hover:scale-110 transition-transform duration-300" />
              <span class="text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@FREERAY</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div class="min-h-[300px]">
              <div class="experience-freeray-desc" data-index="0">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Solar monitoring clients needed better data visualization and reporting tools.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Develop a comprehensive solar monitoring dashboard with real-time data visualization.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Built React-based dashboard with 15+ data metrics and implemented MySQL database with 18+ tables.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Reduced client reporting time by 40% and improved data accessibility for project management.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-freeray-desc hidden" data-index="1">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Need for centralized solar project management and device tracking system.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Design and implement a robust database system for solar project management.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Created MySQL database architecture with 18+ tables and implemented efficient data relationships.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Established a scalable database system that improved project tracking and device management efficiency.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-freeray-desc hidden" data-index="2">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>High latency in solar device data collection affecting real-time monitoring.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Optimize data collection for 50+ connected Huawei solar devices.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Implemented TCP/IP protocol and optimized data transmission protocols.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Reduced data latency by 30% and improved real-time monitoring capabilities.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700">
              <div class="h-64 flex items-center justify-center rounded-lg relative">
                <div id="freeray-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="/profile/images/dash.webp" alt="FREERAY Project 1" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/profile/images/hq720.jpg" alt="FREERAY Project 2" class="w-full h-full object-contain flex-shrink-0"/>
                  <img src="/profile/images/mceclip12.png" alt="FREERAY Project 3" class="w-full h-full object-contain flex-shrink-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="freeray-logos-row">
            <span id="freeray-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/react.png" alt="React.js" class="h-6 w-6 object-contain" /> React
            </span>
            <span id="freeray-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/nodejs.png" alt="Node.js" class="h-6 w-6 object-contain" /> Node.js
            </span>
            <span id="freeray-logo-4" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/expressjs.png" alt="express" class="h-6 w-6 object-contain" /> Express
            </span>
            <span id="freeray-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/mysql.png" alt="MySQL" class="h-6 w-6 object-contain" /> MySQL
            </span>
            <span id="freeray-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/profile/images/tcp.png" alt="TCP/IP" class="h-6 w-6 object-contain" /> TCP/IP
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}