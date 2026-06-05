import React from 'react';
import { PERSONAL_INFO } from '../../constants';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-[76px] bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[var(--color-dark-green)] uppercase tracking-wide">Let's Connect</h2>
        <p className="text-[var(--color-dark-green)]/70 mb-16 text-lg font-medium">
          Feel free to reach out for collaborations, opportunities, or just a quick hello.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-[var(--color-cream)] p-8 rounded-3xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300 border border-[var(--color-light-tan)]/40 hover:border-[var(--color-copper)] hover:shadow-xl group animate-on-scroll opacity-0 translate-y-12">
            <div className="w-16 h-16 bg-[var(--color-dark-green)] rounded-full flex items-center justify-center text-[var(--color-light-tan)] group-hover:bg-[var(--color-copper)] group-hover:text-white transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-[var(--color-dark-green)] font-black text-xl">Email</h3>
            <p className="text-[var(--color-olive-green)] text-sm font-bold">{PERSONAL_INFO.email}</p>
          </a>

          <a href={`tel:${PERSONAL_INFO.phone}`} className="bg-[var(--color-cream)] p-8 rounded-3xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300 border border-[var(--color-light-tan)]/40 hover:border-[var(--color-copper)] hover:shadow-xl group animate-on-scroll opacity-0 translate-y-12" style={{ transitionDelay: `150ms` }}>
            <div className="w-16 h-16 bg-[var(--color-dark-green)] rounded-full flex items-center justify-center text-[var(--color-light-tan)] group-hover:bg-[var(--color-copper)] group-hover:text-white transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 className="text-[var(--color-dark-green)] font-black text-xl">Phone</h3>
            <p className="text-[var(--color-olive-green)] text-sm font-bold">{PERSONAL_INFO.phone}</p>
          </a>

          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="bg-[var(--color-cream)] p-8 rounded-3xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300 border border-[var(--color-light-tan)]/40 hover:border-[var(--color-copper)] hover:shadow-xl group animate-on-scroll opacity-0 translate-y-12" style={{ transitionDelay: `300ms` }}>
            <div className="w-16 h-16 bg-[var(--color-dark-green)] rounded-full flex items-center justify-center text-[var(--color-light-tan)] group-hover:bg-[var(--color-copper)] group-hover:text-white transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h3 className="text-[var(--color-dark-green)] font-black text-xl">LinkedIn</h3>
            <p className="text-[var(--color-olive-green)] text-sm font-bold">/in/kodari-akhil</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;