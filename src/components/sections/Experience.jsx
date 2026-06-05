import React from 'react';
import { EXPERIENCE } from '../../constants';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-[76px] bg-[var(--color-dark-green)] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-[var(--color-cream)] text-center uppercase tracking-wide">
          Work Experience
        </h2>
        
        <div className="space-y-12 bg-[var(--color-olive-green)]/10 p-6 md:p-10 rounded-3xl border border-[var(--color-olive-green)]/20 shadow-xl">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-[var(--color-olive-green)] animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[var(--color-dark-green)] border-4 border-[var(--color-copper)] rounded-full"></div>
              <h4 className="text-2xl font-bold text-[var(--color-cream)]">{exp.role}</h4>
              <p className="text-[var(--color-copper)] font-bold text-lg mt-1 mb-1">{exp.company}</p>
              <p className="text-sm font-medium text-[var(--color-light-tan)] mb-4">{exp.startDate} - {exp.endDate} • {exp.location}</p>
              <ul className="space-y-3 text-[var(--color-cream)]/80 list-disc list-outside ml-4 text-base">
                {exp.points.map((point, index) => (
                  <li key={index} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;