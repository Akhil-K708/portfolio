import React from 'react';
import profilePic from '../../assets/akhil.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[var(--color-cream)] pt-[76px] pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-start">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          <div className="flex flex-col items-start text-left order-2 lg:order-1 lg:mt-12">
            <p className="text-lg font-bold text-[var(--color-olive-green)] mb-4">
              Hey, I'm Kodari Akhil,
            </p>
            <h1 className="text-5xl lg:text-6xl font-black uppercase leading-[1.1] mb-6 text-[var(--color-dark-green)]">
              UI/UX <span className="font-serif italic font-normal normal-case text-[var(--color-copper)]">&</span> <br/>
              Frontend <br/>
              Developer
            </h1>
            <p className="text-base text-[var(--color-dark-green)]/80 mb-8 max-w-sm leading-relaxed font-medium">
              Independently designing and developing stunning web & mobile apps — specializing in UI/UX, React, and Next.js to build responsive, type-safe, and scalable digital experiences from scratch.
            </p>
            <a href="#contact" className="flex items-center gap-4 bg-[var(--color-dark-green)] text-[var(--color-cream)] px-6 py-3 rounded-full font-bold hover:bg-[var(--color-olive-green)] transition-all shadow-lg hover:-translate-y-1">
              CONTACT ME
              <span className="bg-white text-[var(--color-dark-green)] rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>

          <div className="flex justify-center items-start order-1 lg:order-2">
            <div className="w-72 md:w-[22rem] lg:w-[28rem] h-[28rem] lg:h-[32rem] bg-[var(--color-light-tan)]/20 rounded-b-full overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[var(--color-copper)] rounded-full blur-3xl opacity-10"></div>
              <img 
                src={profilePic} 
                alt="Kodari Akhil" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-8 lg:gap-12 justify-center items-center lg:items-end order-3 lg:mt-12">
            <div className="text-center lg:text-right">
              <h3 className="text-5xl lg:text-6xl font-black text-[var(--color-dark-green)] mb-2">1+</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-olive-green)]">Years Experience</p>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-5xl lg:text-6xl font-black text-[var(--color-dark-green)] mb-2">4+</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-olive-green)]">Web & Mobile Apps</p>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-5xl lg:text-6xl font-black text-[var(--color-dark-green)] mb-2">100%</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-olive-green)]">Responsive UI</p>
            </div>
          </div>
          
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[var(--color-dark-green)]/10">
          <div>
            <h4 className="font-bold text-sm uppercase mb-2 text-[var(--color-dark-green)]">React Ecosystem</h4>
            <p className="text-xs text-[var(--color-dark-green)]/70 font-medium">Building dynamic interfaces with React.js, React Native, and Next.js.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase mb-2 text-[var(--color-dark-green)]">Type-Safe Code</h4>
            <p className="text-xs text-[var(--color-dark-green)]/70 font-medium">Ensuring robust architectures and scalability using TypeScript.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase mb-2 text-[var(--color-dark-green)]">Cross-Platform</h4>
            <p className="text-xs text-[var(--color-dark-green)]/70 font-medium">Delivering seamless experiences across Web, Android, and iOS.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase mb-2 text-[var(--color-dark-green)]">Backend Integration</h4>
            <p className="text-xs text-[var(--color-dark-green)]/70 font-medium">Seamless connectivity with Spring Boot, WebSockets, and REST APIs.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;