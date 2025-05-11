export function SkillsSection() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      var filterButtons = document.querySelectorAll('#skills-filter-row button');
      var skillPills = document.querySelectorAll('.skill-pill');
      filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var type = btn.getAttribute('data-skilltype');
          filterButtons.forEach(b => {
            b.classList.remove('bg-gradient-to-r', 'from-red-500', 'via-orange-500', 'to-yellow-500', 'text-white', 'font-bold', 'ring-2', 'ring-orange-400', 'scale-105');
          });
          btn.classList.add('bg-gradient-to-r', 'from-red-500', 'via-orange-500', 'to-yellow-500', 'text-white', 'font-bold', 'ring-2', 'ring-orange-400', 'scale-105');
          skillPills.forEach(function(pill) {
            if (type === 'all' || pill.getAttribute('data-skilltype') === type) {
              pill.style.display = '';
            } else {
              pill.style.display = 'none';
            }
          });
        });
      });
    });
  }
  return `
  <section id="skills" class="rockstar-section bg-rockstar">
    <div class="section-content relative">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#f5cb5c] via-[#e63946] to-[#4cc9f0] bg-clip-text text-transparent text-center">Skills</h2>
      <div class="flex flex-wrap gap-3 mb-4 justify-center" id="skills-filter-row">
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-sm font-bold shadow ring-2 ring-orange-200 scale-105 transition-all" data-skilltype="all">All</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="dev">Dev</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="data">Data/AI</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-orange-700 transition-all" data-skilltype="Tools">Tools</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-yellow-700 transition-all" data-skilltype="soft">Soft Skills</button>

      </div>
      <div class="flex flex-wrap gap-3 justify-center" id="skills-list">
        <a href="https://www.java.com/fr/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/java.png" class="h-5 w-5 object-contain mr-2" alt="Java"/>Java</a>
        <a href="https://www.python.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/python.png" class="h-5 w-5 object-contain mr-2" alt="Python"/>Python</a>        
        <a href="https://react.dev/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/react.png" class="h-5 w-5 object-contain mr-2" alt="React"/>React</a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/nextjs.png" class="h-5 w-5 object-contain mr-2" alt="Next.js"/>Next.js</a>
        <a href="https://expressjs.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/expressjs.png" class="h-5 w-5 object-contain mr-2" alt="Express.js"/>Express.js</a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/tailwind.png" class="h-5 w-5 object-contain mr-2" alt="TailwindCSS"/>TailwindCSS</a>
        <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/js.png" class="h-5 w-5 object-contain mr-2" alt="JavaScript"/>Javascript</a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/ts.png" class="h-5 w-5 object-contain mr-2" alt="Typescript"/>Typescript</a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/nodejs.png" class="h-5 w-5 object-contain mr-2" alt="Node.js"/>Node.js</a>
        <a href="https://github.com/ELALAMIADAM/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/github.png" class="h-5 w-5 object-contain mr-2" alt="Github"/>Github</a>
        <a href="https://www.docker.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="src/images/docker.png" class="h-5 w-5 object-contain mr-2" alt="Docker"/>Docker</a>
        <a href="https://www.oracle.com/analytics/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/oracle.png" class="h-5 w-5 object-contain mr-2" alt="Oracle Analytics"/>Oracle Analytics</a>
        <a href="https://www.starburst.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/starburst.png" class="h-5 w-5 object-contain mr-2" alt="Starburst"/>Starburst</a>
        <a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/ETL.png" class="h-5 w-5 object-contain mr-2" alt="ETL"/>ETL</a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/mysql.png" class="h-5 w-5 object-contain mr-2" alt="MySQL"/>MySQL</a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/postgres.png" class="h-5 w-5 object-contain mr-2" alt="PostgreSQL"/>PostgreSQL</a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/mongo.png" class="h-5 w-5 object-contain mr-2" alt="MongoDB"/>MongoDB</a>
        <a href="https://streamlit.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="src/images/streamlit.png" class="h-5 w-5 object-contain mr-2" alt="Streamlit"/>Streamlit</a>
        <span class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="src/images/3135715.png" class="h-5 w-5 object-contain mr-2" alt="Teamwork"/>Teamwork</span>
        <span class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="src/images/190411.png" class="h-5 w-5 object-contain mr-2" alt="Communication"/>Communication</span>
        <span class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="src/images/1828884.png" class="h-5 w-5 object-contain mr-2" alt="Problem Solving"/>Problem Solving</span>
      </div>
      <p class="text-center text-white/70 mt-6">...and many more!</p>
    </div>
  </section>
  `;
}