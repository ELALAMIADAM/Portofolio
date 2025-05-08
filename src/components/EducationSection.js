export function EducationSection() {
  return `
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
  `;
} 