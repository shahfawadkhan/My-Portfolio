import React, { useEffect, useRef } from 'react';

const SKILL_ICONS = [
  { 
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E"
  },
  { 
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6"
  },
  { 
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "#7952B3"
  },
  { 
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4"
  },
  { 
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB"
  },
  { 
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000"
  },
  { 
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#000000"
  },
  { 
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933"
  },
  { 
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248"
  },
  { 
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1"
  },
  { 
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900"
  },
  { 
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED"
  },
  { 
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032"
  },
  { 
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717"
  },
  { 
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28"
  }
];

const SkillsIcons = () => {
  const sectionRef = useRef(null);
  const shapesRef = useRef([]);
  const iconsRef = useRef([]);

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

    const animateIn = () => {
      const title = sectionRef.current?.querySelector('.skills-title');
      const subtitle = sectionRef.current?.querySelector('.skills-subtitle');

      if (title) {
        setTimeout(() => {
          title.style.opacity = '1';
          title.style.transform = 'translateY(0)';
        }, 200);
      }

      if (subtitle) {
        setTimeout(() => {
          subtitle.style.opacity = '1';
          subtitle.style.transform = 'translateY(0)';
        }, 400);
      }

      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0) scale(1)';
          }, 600 + index * 50);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = sectionRef.current?.querySelector('.skills-title');
            const subtitle = sectionRef.current?.querySelector('.skills-subtitle');
            
            if (title) {
              title.style.opacity = '0';
              title.style.transform = 'translateY(30px)';
            }
            if (subtitle) {
              subtitle.style.opacity = '0';
              subtitle.style.transform = 'translateY(30px)';
            }

            iconsRef.current.forEach((icon) => {
              if (icon) {
                icon.style.opacity = '0';
                icon.style.transform = 'translateY(30px) scale(0.8)';
              }
            });

            animateIn();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative w-full min-h-screen overflow-hidden bg-white flex items-center py-12 sm:py-16 px-4 sm:px-6"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={el => shapesRef.current[0] = el}
          className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-30 animate-float"
          style={{ top: '10%', left: '5%' }}
        />
        
        <div
          ref={el => shapesRef.current[1] = el}
          className="absolute w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 opacity-35 animate-float-delayed"
          style={{ top: '60%', right: '8%' }}
        />
        
        <div
          ref={el => shapesRef.current[2] = el}
          className="absolute w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-indigo-100 to-indigo-50 opacity-30 animate-float-rotate"
          style={{ bottom: '10%', left: '12%', transform: 'rotate(45deg)' }}
        />
        
        <div
          ref={el => shapesRef.current[3] = el}
          className="absolute w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 opacity-35 animate-float-fast"
          style={{ top: '30%', right: '20%' }}
        />
        
        <div
          ref={el => shapesRef.current[4] = el}
          className="absolute w-44 sm:w-48 md:w-56 h-44 sm:h-48 md:h-56 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 opacity-30 animate-float-delayed"
          style={{ top: '45%', left: '40%' }}
        />

        <div
          ref={el => shapesRef.current[5] = el}
          className="absolute w-36 sm:w-40 md:w-44 h-36 sm:h-40 md:h-44 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-25 animate-float-fast"
          style={{ bottom: '25%', right: '30%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p 
            className="skills-subtitle text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-2 sm:mb-3 md:mb-4 tracking-wider uppercase transition-all duration-1000 opacity-0"
            style={{ transform: 'translateY(30px)' }}
          >
            Technologies I Work With
          </p>
          
          <h2 
            className="skills-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 transition-all duration-1000 opacity-0"
            style={{ transform: 'translateY(30px)' }}
          >
            Tech Stack
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {SKILL_ICONS.map((skill, index) => (
            <div
              key={index}
              ref={el => iconsRef.current[index] = el}
              className="group flex flex-col items-center justify-center transition-all duration-700 opacity-0 w-full"
              style={{ transform: 'translateY(30px) scale(0.8)' }}
            >
              <div className="relative w-full flex flex-col items-center">
                <div className="mb-2 sm:mb-3 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <img 
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
                
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300 leading-tight px-1">
                  {skill.name}
                </span>
                
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: skill.color, zIndex: -1 }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default SkillsIcons;