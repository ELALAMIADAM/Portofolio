export function ExperienceSection() {
  // Auto-scroll carousel script for ARKEA BANKING SERVICE experience
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      var track = document.getElementById('experience-carousel-track');
      if (track) {
        var images = track.children;
        var current = 0;
        setInterval(function() {
          current = (current + 1) % images.length;
          track.style.transform = 'translateX(-' + (current * 224) + 'px)'; // 224px = 14rem = w-56
        }, 2000);
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
                </div>
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
  `;
}