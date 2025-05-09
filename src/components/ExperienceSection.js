export function ExperienceSection() {
  // Auto-scroll carousel script for ARKEA BANKING SERVICE experience
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      // ARKEA BANKING SERVICE carousel
      var track = document.getElementById('experience-carousel-track');
      var descs = document.querySelectorAll('.experience-arkeabs-desc');
      if (track && descs.length) {
        var images = track.children;
        var current = 0;
        var imageWidth = images[0]?.offsetWidth || 0;
        function updateDesc(idx) {
          descs.forEach(function(li, i) {
            if (i === idx) {
              li.classList.remove('hidden');
            } else {
              li.classList.add('hidden');
            }
          });
        }
        function scrollCarousel() {
          imageWidth = images[0]?.offsetWidth || 0; // recalculate in case of resize
          current = (current + 1) % images.length;
          track.style.transform = 'translateX(-' + (current * imageWidth) + 'px)';
          updateDesc(current);
        }
        setInterval(scrollCarousel, 2000);
        window.addEventListener('resize', function() {
          // Reset transform on resize to avoid misalignment
          imageWidth = images[0]?.offsetWidth || 0;
          track.style.transform = 'translateX(-' + (current * imageWidth) + 'px)';
        });
        updateDesc(0);
      }
      // FREERAY carousel
      var freerayTrack = document.getElementById('freeray-carousel-track');
      var freerayDescs = document.querySelectorAll('.experience-freeray-desc');
      if (freerayTrack && freerayDescs.length) {
        var freerayImages = freerayTrack.children;
        var freerayCurrent = 0;
        var freerayImageWidth = freerayImages[0]?.offsetWidth || 0;
        function updateFreerayDesc(idx) {
          freerayDescs.forEach(function(li, i) {
            if (i === idx) {
              li.classList.remove('hidden');
            } else {
              li.classList.add('hidden');
            }
          });
        }
        function scrollFreerayCarousel() {
          freerayImageWidth = freerayImages[0]?.offsetWidth || 0;
          freerayCurrent = (freerayCurrent + 1) % freerayImages.length;
          freerayTrack.style.transform = 'translateX(-' + (freerayCurrent * freerayImageWidth) + 'px)';
          updateFreerayDesc(freerayCurrent);
        }
        setInterval(scrollFreerayCarousel, 2000);
        window.addEventListener('resize', function() {
          freerayImageWidth = freerayImages[0]?.offsetWidth || 0;
          freerayTrack.style.transform = 'translateX(-' + (freerayCurrent * freerayImageWidth) + 'px)';
        });
        updateFreerayDesc(0);
      }
    });
  }
  return `
  <section id="experience" class="rockstar-section bg-rockstar mt-24">
    <div class="section-content">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll">Professional Experience</h2>
      
      <div class="space-y-24">
        <!-- Data Analyst at ARKEA BANKING SERVICE -->
        <div class="appear-on-scroll">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-bold">Data Analyst - Alternance @ARKEA BANKING SERVICE - Brest, FR</h3>
            
            <span class="text-yellow-400">Sept 2024 - Sept. 2025</span>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <ul class="list-disc pl-5 space-y-3">
                <li class="experience-arkeabs-desc" data-index="0">Designed and implemented dynamic Oracle Analytics Cloud dashboards by first analyzing client workflows and pain points, then structuring data models for intuitive self-service analytics.</li>
                <li class="experience-arkeabs-desc hidden" data-index="1">Built scalable data pipelines to ingest and transform multi-source data into lakehouse formats, enhancing data accessibility and processing speed for analytics teams.</li>
                <li class="experience-arkeabs-desc hidden" data-index="2">Developed a Python-based conversion tool to transform legacy Hadoop PIG scripts into optimized Starburst-compatible SQL, preserving business logic and partitioning schemes.</li>
              </ul>
            </div>
            <div class="rounded-lg overflow-hidden">
              <div class="h-64 flex items-center justify-center rounded-lg relative">
                <div id="experience-carousel-track" class="flex transition-transform duration-700 w-[56rem] h-full">
                  <img
                    src="https://www.techtarget.com/rms/onlineimages/Oracle_Explain_ability_mobile.jpg"
                    alt="ARKEA Project 1"
                    class="object-cover flex-shrink-0 mx-auto"
                  />
                  <img
                    src="https://www.techtarget.com/rms/onlineimages/Oracle_Explain_ability_mobile.jpg"
                    alt="ARKEA Project 2"
                    class="object-cover flex-shrink-0 mx-auto"
                  />
                  <img
                    src="https://www.techtarget.com/rms/onlineimages/Oracle_Explain_ability_mobile.jpg"
                    alt="ARKEA Project 3"
                    class="object-cover flex-shrink-0 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-4 mb-4 justify-center">
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/oracle.png" alt="Oracle Analytics" class="h-8 w-8 object-contain" title="Oracle Analytics" />
            </span>
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/starburst.png" alt="Starburst" class="h-8 w-8 object-contain" title="Starburst" />
            </span>
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/ETL.png" alt="ETL" class="h-8 w-8 object-contain" title="ETL" />
            </span>
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/vs-code-logo.png" alt="VS Code" class="h-8 w-8 object-contain" title="VS Code" />
            </span>
          </div>
        </div>
        
        <!-- Full-Stack Developer at FREERAY -->
        <div class="appear-on-scroll">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-bold">Full-Stack Developer | Intern @FREERAY - Rabat, MA</h3>
            <span class="text-yellow-400">May 2024 - Present</span>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <ul class="list-disc pl-5 space-y-3">
                <li class="experience-freeray-desc" data-index="0">Developed solar monitoring dashboard that reduced client reporting time by 40% through React visualization of 15+ data metrics.</li>
                <li class="experience-freeray-desc hidden" data-index="1">Designed MySQL database with 18+ tables to centralize solar project management and device tracking.</li>
                <li class="experience-freeray-desc hidden" data-index="2">Optimized solar device data collection by implementing TCP/IP protocol, reducing data latency by 30% for 50+ connected Huawei devices.</li>
              </ul>
            </div>
            <div class="rounded-lg overflow-hidden">
              <div class="h-64 flex items-center justify-center rounded-lg relative">
                <div id="freeray-carousel-track" class="flex transition-transform duration-700 w-[56rem] h-full">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                    alt="FREERAY Project 1"
                    class="object-cover flex-shrink-0 mx-auto"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                    alt="FREERAY Project 2"
                    class="object-cover flex-shrink-0 mx-auto"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                    alt="FREERAY Project 3"
                    class="object-cover flex-shrink-0 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-4 mb-4 justify-center">
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/react.png" alt="React.js" class="h-8 w-8 object-contain" title="React.js" />
            </span>
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/node.png" alt="Node.js" class="h-8 w-8 object-contain" title="Node.js" />
            </span>
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/mysql.png" alt="MySQL" class="h-8 w-8 object-contain" title="MySQL" />
            </span>
            <span class="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-400">
              <img src="./public/Images/tcpip.png" alt="TCP/IP" class="h-8 w-8 object-contain" title="TCP/IP" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}