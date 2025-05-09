export function EducationSection() {
  return `
  <section id="education" class="rockstar-section bg-rockstar">
    <div class="section-content">
      <h2 class="rockstar-subheading text-gradient appear-on-scroll text-center text-4xl font-extrabold mb-12">Education</h2>
      
      <div class="space-y-16">
        <!-- ENIB Brest -->
        <div class="appear-on-scroll flex flex-col md:flex-row items-center md:items-start md:gap-8 bg-black bg-opacity-60 rounded-2xl p-6 shadow-lg">
          <div class="flex-shrink-0 flex items-center justify-center w-full md:w-1/6 mb-6 md:mb-0">
            <div class="">
              <img src="https://wiki.lesfabriquesduponant.net/images/4/48/Logo-enib.png" alt="ENIB Brest Logo" class="object-contain h-20 max-w-xs" />
            </div>
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="https://www.enib.fr/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">Brest national school of engineering</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 md:mt-0">Sept. 2023 - Sept. 2025</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Software Engineer's Degree | Brest, FR</p>
          </div>
        </div>
        
        <!-- ENSAM Meknes -->
        <div class="appear-on-scroll flex flex-col md:flex-row items-center md:items-start md:gap-8 bg-black bg-opacity-50 rounded-2xl p-6 shadow-lg">
          <div class="flex-shrink-0 flex items-center justify-center w-full md:w-1/6 mb-5 md:mb-0">
            <div class="">
              <img src="https://media.licdn.com/dms/image/v2/C4D0BAQGdzavIDZgbEA/company-logo_200_200/company-logo_200_200/0/1630503044596/cole_nationale_suprieure_d_arts_et_mtiers_ensam_mknes_______logo?e=2147483647&v=beta&t=i0T8AX3IfqDqhCR_CIqwbxpx3k8t_1ljYY1zm1huKr8" alt="ENSAM Meknes Logo" class="object-contain h-24 max-w-xs" />
            </div>
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="http://www.ensam-umi.ac.ma/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">National Higher School of Arts and Crafts</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 md:mt-0">Sept. 2019 - July 2023</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Engineer's Degree | Meknes, MA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}