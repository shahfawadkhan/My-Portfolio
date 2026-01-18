import React, { useEffect, useRef } from 'react';
import mypic from '../assets/mypic.png';

const About = () => {
  const sectionRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const shapes = shapesRef.current;
    shapes.forEach((shape) => {
      if (shape) {
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        shape.style.animationDuration = `${duration}s`;
        shape.style.animationDelay = `${delay}s`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            sectionRef.current.classList.add('animate-in');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="about-section relative w-full min-h-screen overflow-hidden bg-white flex items-center py-20 md:py-24 px-2 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={el => shapesRef.current[0] = el}
          className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-30 animate-float will-change-transform"
          style={{ top: '5%', left: '8%' }}
        />
        
        <div
          ref={el => shapesRef.current[1] = el}
          className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 opacity-35 animate-float-delayed will-change-transform"
          style={{ top: '65%', right: '5%' }}
        />
        
        <div
          ref={el => shapesRef.current[2] = el}
          className="absolute w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-indigo-100 to-indigo-50 opacity-30 animate-float-rotate will-change-transform"
          style={{ bottom: '15%', left: '10%', transform: 'rotate(45deg)' }}
        />
        
        <div
          ref={el => shapesRef.current[3] = el}
          className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 opacity-35 animate-float-fast will-change-transform"
          style={{ top: '20%', right: '25%' }}
        />
        
        <div
          ref={el => shapesRef.current[4] = el}
          className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-25 animate-float-delayed will-change-transform"
          style={{ bottom: '30%', right: '35%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4 order-1 lg:order-1">
            <p className="about-greeting text-sm md:text-base lg:text-lg text-gray-500 tracking-widest uppercase font-semibold">
              Get to Know
            </p>
            
            <h2 className="about-title text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              About Me
            </h2>

            <div className="about-description space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I'm a passionate web developer dedicated to creating innovative digital solutions that make a difference. With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code and thoughtful design.
              </p>
            </div>

            <div className="about-stats grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">3+</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">20+</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="about-image flex items-center justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl transform scale-105"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-sm bg-white/30 border border-white/50 shadow-2xl p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/80">
                  <img 
                    src={mypic} 
                    alt="Shah Fawad Khan" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 animate-pulse pointer-events-none" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-300/30 animate-pulse pointer-events-none" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section .about-greeting,
        .about-section .about-title,
        .about-section .about-description,
        .about-section .about-stats,
        .about-section .about-image {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .about-section .about-image {
          transform: translateY(30px);
        }

        .about-section.animate-in .about-greeting {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }

        .about-section.animate-in .about-title {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .about-section.animate-in .about-description {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.3s;
        }

        .about-section.animate-in .about-stats {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        .about-section.animate-in .about-image {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -30px) rotate(5deg);
          }
          50% {
            transform: translate(-15px, -50px) rotate(-5deg);
          }
          75% {
            transform: translate(30px, -25px) rotate(3deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-25px, 30px) rotate(-5deg);
          }
          50% {
            transform: translate(20px, 45px) rotate(5deg);
          }
          75% {
            transform: translate(-20px, 20px) rotate(-3deg);
          }
        }

        @keyframes float-rotate {
          0%, 100% {
            transform: translate(0, 0) rotate(45deg);
          }
          50% {
            transform: translate(25px, -35px) rotate(65deg);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.15);
          }
          66% {
            transform: translate(-20px, -40px) scale(0.95);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }

        .animate-float-rotate {
          animation: float-rotate 22s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 15s ease-in-out infinite;
        }

        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default About;