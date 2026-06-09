import React from 'react';
import profilePic from '../../assets/Akhil.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[var(--color-cream)] pt-[76px] pb-6 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start text-left order-2 lg:order-1 lg:mt-0">
            <p className="text-lg font-bold text-[var(--color-olive-green)] mb-2">
              Hey, I'm Kodari Akhil,
            </p>
            <h1 className="text-5xl lg:text-6xl font-black uppercase leading-[1.1] mb-4 text-[var(--color-dark-green)]">
              Frontend <br/>
              Developer
            </h1>
            <p className="text-base text-[var(--color-dark-green)]/90 mb-6 max-w-md leading-relaxed font-bold">
              Frontend Developer specializing in React.js, React Native, Next.js and TypeScript. Building scalable web and mobile applications, international e-commerce platforms, and seamless API integrations.
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[var(--color-dark-green)] text-[var(--color-cream)] px-5 py-2.5 text-sm rounded-full font-bold hover:bg-[var(--color-olive-green)] transition-all shadow-lg hover:-translate-y-1">
                RESUME
                <span className="bg-white text-[var(--color-dark-green)] rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
              </a>
              
              <a href="https://github.com/Akhil-K708" target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-[var(--color-dark-green)] text-[var(--color-dark-green)] px-5 py-2 text-sm rounded-full font-bold hover:bg-[var(--color-dark-green)] hover:text-[var(--color-cream)] transition-all shadow-lg hover:-translate-y-1">
                GITHUB
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a href="#contact" className="flex items-center gap-2 border-2 border-[var(--color-dark-green)] text-[var(--color-dark-green)] px-5 py-2 text-sm rounded-full font-bold hover:bg-[var(--color-dark-green)] hover:text-[var(--color-cream)] transition-all shadow-lg hover:-translate-y-1">
                CONTACT
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="w-72 md:w-[20rem] lg:w-[25rem] h-[24rem] lg:h-[28rem] bg-[var(--color-light-tan)]/20 rounded-b-full overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[var(--color-copper)] rounded-full blur-3xl opacity-10"></div>
              <img 
                src={profilePic} 
                alt="Kodari Akhil" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 justify-center items-center lg:items-end order-3 lg:mt-0">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-[var(--color-dark-green)]/10">
          <div>
            <h4 className="font-bold text-sm uppercase mb-2 text-[var(--color-dark-green)]">React Ecosystem</h4>
            <p className="text-xs text-[var(--color-dark-green)]/70 font-medium">Building dynamic interfaces with React.js and React Native.</p>
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