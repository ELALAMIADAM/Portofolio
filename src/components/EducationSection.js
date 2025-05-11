export function EducationSection() {
  return `
  <section id="education" class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#090909] to-[#1a1a1a] py-16">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center">Education</h2>
      <div class="space-y-10">
        <!-- ENIB Brest -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="https://wiki.lesfabriquesduponant.net/images/4/48/Logo-enib.png" alt="ENIB Brest Logo" class="object-contain h-16" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="https://www.enib.fr/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">Brest national school of engineering</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 md:mt-0 font-semibold">Sept. 2023 - Sept. 2025</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Software Engineer's Degree | Brest, FR</p>
          </div>
        </div>
        <!-- ENSAM Meknes -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="https://media.licdn.com/dms/image/v2/C4D0BAQGdzavIDZgbEA/company-logo_200_200/company-logo_200_200/0/1630503044596/cole_nationale_suprieure_d_arts_et_mtiers_ensam_mknes_______logo?e=2147483647&v=beta&t=i0T8AX3IfqDqhCR_CIqwbxpx3k8t_1ljYY1zm1huKr8" alt="ENSAM Meknes Logo" class="object-contain h-16" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="http://www.ensam-umi.ac.ma/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">National Higher School of Arts and Crafts</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 ml-4 md:mt-0 font-semibold">Sept. 2019 - July 2023</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Engineer's Degree | Meknes, MA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}