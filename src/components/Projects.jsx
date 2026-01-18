import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import chat from '../assets/chat.png';
import ecom from '../assets/ecom.png';
import sc from '../assets/sc.png';
import task from '../assets/task.png';

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, real-time inventory management, and advanced search functionality.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-500 to-blue-600",
    image: ecom,
    link: "https://github.com/shahfawadkhan/Ecommerce.git"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and analytics dashboard.",
    tech: ["React", "Firebase", "Tailwind", "Redux", "Node.js", "MongoDB"],
    gradient: "from-teal-500 to-teal-600",
    image: task,
    link: "https://github.com/shahfawadkhan/TaskManagement-MERN.git"
  },
  {
    title: "Real-time Chat Application",
    description: "Secure, scalable chat platform with real-time messaging, multimedia sharing, and seamless group conversation management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    gradient: "from-indigo-500 to-indigo-600",
    image: chat,
    link: "https://github.com/shahfawadkhan/Chat-App.git"
  },
  {
    title: "School Management System",
    description: "Comprehensive platform for managing student records, attendance, grading, and communication between staff, students, and parents.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    gradient: "from-amber-500 to-amber-600",
    image: sc,
    link: "https://github.com/shahfawadkhan/school-management-system.git"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectRefs = useRef([]);
  const timelineRef = useRef(null);
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

    const animateIn = () => {
      const headerElements = [
        { el: headerRef.current?.querySelector('.header-subtitle'), delay: 200 },
        { el: headerRef.current?.querySelector('.header-title'), delay: 400 },
        { el: headerRef.current?.querySelector('.header-description'), delay: 600 },
      ];

      headerElements.forEach(({ el, delay }) => {
        if (el) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
        }
      });

      if (timelineRef.current) {
        setTimeout(() => {
          timelineRef.current.style.opacity = '1';
          timelineRef.current.style.transform = 'scaleY(1)';
        }, 800);
      }

      projectRefs.current.forEach((project, index) => {
        if (project) {
          const delay = 1000 + (index * 200);
          setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0) translateX(0)';
          }, delay);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const headerElements = [
              headerRef.current?.querySelector('.header-subtitle'),
              headerRef.current?.querySelector('.header-title'),
              headerRef.current?.querySelector('.header-description'),
            ];

            headerElements.forEach((el) => {
              if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
              }
            });

            if (timelineRef.current) {
              timelineRef.current.style.opacity = '0';
              timelineRef.current.style.transform = 'scaleY(0)';
            }

            projectRefs.current.forEach((project, index) => {
              if (project) {
                const isLeft = index % 2 === 0;
                project.style.opacity = '0';
                project.style.transform = isLeft ? 'translateX(-30px)' : 'translateX(30px)';
              }
            });

            animateIn();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative w-full min-h-screen overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => {
          const positions = [
            { top: '5%', left: '3%' }, { top: '12%', left: '18%' },
            { top: '8%', right: '8%' }, { top: '2%', right: '25%' },
            { top: '35%', left: '5%' }, { top: '42%', left: '22%' },
            { top: '38%', right: '6%' }, { top: '45%', right: '28%' },
            { top: '50%', left: '45%' }, { bottom: '15%', left: '8%' },
            { bottom: '8%', left: '25%' }, { bottom: '10%', right: '10%' },
            { bottom: '5%', right: '30%' }, { top: '18%', left: '48%' },
            { top: '28%', right: '18%' }, { top: '60%', left: '12%' },
            { top: '68%', right: '22%' }, { bottom: '18%', left: '42%' }
          ];
          
          const colors = [
            'from-blue-100 to-blue-50', 'from-purple-100 to-purple-50',
            'from-cyan-100 to-cyan-50', 'from-pink-100 to-pink-50',
            'from-indigo-100 to-indigo-50', 'from-teal-100 to-teal-50',
            'from-violet-100 to-violet-50', 'from-rose-100 to-rose-50',
            'from-amber-100 to-amber-50', 'from-emerald-100 to-emerald-50',
            'from-sky-100 to-sky-50', 'from-fuchsia-100 to-fuchsia-50',
            'from-lime-100 to-lime-50', 'from-orange-100 to-orange-50',
            'from-blue-100 to-blue-50', 'from-purple-100 to-purple-50',
            'from-cyan-100 to-cyan-50', 'from-pink-100 to-pink-50'
          ];
          
          const sizes = ['w-72 h-72', 'w-56 h-56', 'w-64 h-64', 'w-48 h-48', 'w-60 h-60', 'w-52 h-52'];
          const animations = ['animate-float', 'animate-float-delayed', 'animate-float-fast', 'animate-float-rotate'];
          
          return (
            <div
              key={i}
              ref={el => shapesRef.current[i] = el}
              className={`absolute ${sizes[i % sizes.length]} rounded-full bg-gradient-to-br ${colors[i]} opacity-${25 + (i % 8)} ${animations[i % animations.length]}`}
              style={positions[i]}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-24">
          <p 
            className="header-subtitle text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold mb-4 transition-all duration-1000 opacity-0"
            style={{ transform: 'translateY(30px)' }}
          >
            Portfolio
          </p>
          <h2 
            className="header-title text-5xl md:text-6xl font-bold text-gray-900 mb-5 tracking-tight transition-all duration-1000 opacity-0"
            style={{ transform: 'translateY(30px)' }}
          >
            Featured Projects
          </h2>
          <p 
            className="header-description text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 opacity-0"
            style={{ transform: 'translateY(30px)' }}
          >
            Building digital experiences with modern technologies
          </p>
        </div>

        <div className="relative">
          <div 
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-teal-200 hidden lg:block transform -translate-x-1/2 transition-all duration-1000 opacity-0"
            style={{ transform: 'translateX(-50%) scaleY(0)', transformOrigin: 'top' }}
          ></div>

          <div className="space-y-24">
            {PROJECTS.map((project, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={el => projectRefs.current[index] = el}
                  className="relative transition-all duration-1000 opacity-0"
                  style={{ transform: isLeft ? 'translateX(-30px)' : 'translateX(30px)' }}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isLeft ? 'lg:grid-flow-dense' : ''}`}>
                    
                    <div className={`relative group ${!isLeft ? 'lg:col-start-2' : ''}`}>
                      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                      
                      <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                    </div>

                    <div className={`relative ${!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className={`${!isLeft ? 'lg:text-right' : ''}`}>
                        <div className={`inline-block h-1 w-16 bg-gradient-to-r ${project.gradient} rounded-full mb-5`}></div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                          {project.description}
                        </p>
                        
                        <div className="mb-8">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Tech Stack
                          </p>
                          <div className={`flex flex-wrap gap-2 ${!isLeft ? 'lg:justify-end' : ''}`}>
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="tech-badge px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className={`${!isLeft ? 'lg:flex lg:justify-end' : ''}`}>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:shadow-xl active:scale-95 transition-all duration-300`}
                          >
                            <span>View Project</span>
                            <ExternalLink size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-dot absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient} border-4 border-white shadow-lg`}></div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${project.gradient} opacity-30 animate-ping`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(5deg); }
          50% { transform: translate(-15px, -50px) rotate(-5deg); }
          75% { transform: translate(30px, -25px) rotate(3deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-25px, 30px) rotate(-5deg); }
          50% { transform: translate(20px, 45px) rotate(5deg); }
          75% { transform: translate(-20px, 20px) rotate(-3deg); }
        }

        @keyframes float-rotate {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          50% { transform: translate(25px, -35px) rotate(65deg); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.15); }
          66% { transform: translate(-20px, -40px) scale(0.95); }
        }

        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 18s ease-in-out infinite; }
        .animate-float-rotate { animation: float-rotate 22s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 15s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Projects;