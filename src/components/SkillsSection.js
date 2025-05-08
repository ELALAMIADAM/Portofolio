export function SkillsSection() {
  return `
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
  `;
} 