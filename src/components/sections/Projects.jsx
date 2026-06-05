import React from 'react';
import { PROJECTS } from '../../constants';
import ZufetoImg from '../../assets/Zufeto.png';
import RitualImg from '../../assets/Ritual.png';
import JjrImg from '../../assets/Jjr.png';
import TechlifeImg from '../../assets/Techlife.png';

const Projects = () => {
  
  const getProjectImage = (projectName) => {
    if (projectName.includes('Zufeto')) return ZufetoImg;
    if (projectName.includes('Ritual')) return RitualImg;
    if (projectName.includes('JJR')) return JjrImg;
    if (projectName.includes('Techlife')) return TechlifeImg;
    return null;
  };

  return (
    <section id="projects" className="scroll-mt-[76px] bg-[var(--color-olive-green)] py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-[var(--color-cream)] text-center uppercase tracking-wide">
          Featured Projects
        </h2>
        
        <div className="flex flex-col gap-12 md:gap-24 relative pb-24"> 
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            
            let bgColor, textColor, tagBg, tagText;
            if (index % 4 === 0) {
              bgColor = 'bg-[var(--color-dark-green)]'; textColor = 'text-[var(--color-cream)]'; tagBg = 'bg-[var(--color-cream)]'; tagText = 'text-[var(--color-dark-green)]';
            } else if (index % 4 === 1) {
              bgColor = 'bg-[var(--color-cream)]'; textColor = 'text-[var(--color-dark-green)]'; tagBg = 'bg-[var(--color-dark-green)]'; tagText = 'text-[var(--color-cream)]';
            } else if (index % 4 === 2) {
              bgColor = 'bg-[var(--color-light-tan)]'; textColor = 'text-[var(--color-dark-green)]'; tagBg = 'bg-[var(--color-dark-green)]'; tagText = 'text-[var(--color-cream)]';
            } else {
              bgColor = 'bg-[var(--color-copper)]'; textColor = 'text-[var(--color-cream)]'; tagBg = 'bg-[var(--color-cream)]'; tagText = 'text-[var(--color-dark-green)]';
            }

            return (
              <div 
                key={project.id} 
                className={`relative md:sticky md:top-[96px] w-full h-auto md:h-[450px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} ${bgColor} border border-black/10 group`}
              >
                <div className="w-full md:w-[40%] h-64 md:h-full relative bg-black/10 overflow-hidden shrink-0 flex items-center justify-center p-6 md:p-8">
                   <img 
                      src={getProjectImage(project.name)} 
                      alt={`${project.name} interface`} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
                
                <div className="w-full md:w-[60%] p-6 md:p-14 flex flex-col justify-center">
                  <h3 className={`text-3xl md:text-5xl font-black mb-4 md:mb-6 ${textColor}`}>{project.name}</h3>
                  <p className={`text-sm md:text-lg mb-6 md:mb-8 leading-relaxed ${textColor}/90 font-medium`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-0">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold ${tagBg} ${tagText} shadow-sm`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-black/10">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold ${tagBg} ${tagText} hover:scale-105 transition-transform shadow-lg`}>
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    ) : (
                      <span className={`inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold bg-black/10 ${textColor}/70 border border-black/10 cursor-not-allowed`}>
                        In Development
                      </span>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;