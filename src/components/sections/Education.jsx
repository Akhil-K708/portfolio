import React from 'react';
import { EDUCATION } from '../../constants';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-[76px] bg-[var(--color-cream)] py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-[var(--color-dark-green)] text-center uppercase tracking-wide">
          Education Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--color-olive-green)]/20 md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {EDUCATION.map((edu, index) => (
              <div key={edu.id} className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-[var(--color-cream)] border-4 border-[var(--color-copper)] rounded-full -translate-x-1/2 z-10 shadow-lg"></div>

                <div className="hidden md:block w-[45%]"></div>

                <div className="w-full pl-12 md:pl-0 md:w-[45%] animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-[var(--color-light-tan)]/40 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="text-xl font-black text-[var(--color-dark-green)] mb-2">{edu.degree}</h4>
                    <p className="text-[var(--color-olive-green)] font-bold text-sm mb-6">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm font-black text-[var(--color-copper)]">
                      <span className="bg-[var(--color-cream)] border border-[var(--color-light-tan)]/30 px-4 py-2 rounded-full shadow-sm">{edu.score}</span>
                      <span className="bg-[var(--color-cream)] border border-[var(--color-light-tan)]/30 px-4 py-2 rounded-full shadow-sm">{edu.year}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;