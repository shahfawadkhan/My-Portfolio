import React, { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Mail, href: 'mailto:sfawadkhan92@gmail.com', gradient: 'from-blue-500 to-blue-600', label: 'Email' },
  { icon: Github, href: 'https://github.com/shahfawadkhan', gradient: 'from-gray-700 to-gray-900', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shah-fawad-khan-ba9380285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', gradient: 'from-blue-600 to-blue-800', label: 'LinkedIn' },
  
];

const Contact = () => {
  const sectionRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    // Randomize shape animations
    const shapes = shapesRef.current;
    shapes.forEach((shape) => {
      if (shape) {
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        shape.style.animationDuration = `${duration}s`;
        shape.style.animationDelay = `${delay}s`;
      }
    });

    // Animation function
    const animateIn = () => {
      const elements = [
        { el: sectionRef.current?.querySelector('.contact-subtitle'), delay: 200 },
        { el: sectionRef.current?.querySelector('.contact-title'), delay: 400 },
        { el: sectionRef.current?.querySelector('.contact-description'), delay: 600 },
        { el: sectionRef.current?.querySelector('.contact-socials'), delay: 800 },
        { el: sectionRef.current?.querySelector('.contact-cta'), delay: 1000 }
      ];

      elements.forEach(({ el, delay }) => {
        if (el) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
        }
      });
    };

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = [
              sectionRef.current?.querySelector('.contact-subtitle'),
              sectionRef.current?.querySelector('.contact-title'),
              sectionRef.current?.querySelector('.contact-description'),
              sectionRef.current?.querySelector('.contact-socials'),
              sectionRef.current?.querySelector('.contact-cta')
            ];
            
            elements.forEach((el) => {
              if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
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
      id="contact" 
      className="relative w-full min-h-screen overflow-hidden bg-white flex items-center py-2 px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={el => shapesRef.current[0] = el}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-30 animate-float"
          style={{ top: '15%', left: '10%' }}
        />
        
        <div
          ref={el => shapesRef.current[1] = el}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 opacity-35 animate-float-delayed"
          style={{ top: '60%', right: '8%' }}
        />
        
        <div
          ref={el => shapesRef.current[2] = el}
          className="absolute w-72 h-72 bg-gradient-to-br from-indigo-100 to-indigo-50 opacity-30 animate-float-rotate"
          style={{ bottom: '10%', left: '15%', transform: 'rotate(45deg)' }}
        />
        
        <div
          ref={el => shapesRef.current[3] = el}
          className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 opacity-35 animate-float-fast"
          style={{ top: '35%', right: '20%' }}
        />
        
        <div
          ref={el => shapesRef.current[4] = el}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-25 animate-float-delayed"
          style={{ bottom: '30%', right: '35%' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <p 
          className="contact-subtitle text-lg md:text-xl text-gray-500 mb-4 tracking-wider uppercase transition-all duration-1000 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          Get In Touch
        </p>
        
        <h2 
          className="contact-title text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          Let's Build Something <br className="hidden md:block" />
          <span className="bg-black bg-clip-text text-transparent">Amazing</span>
        </h2>

        <p 
          className="contact-description text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life and create something extraordinary.
        </p>

        <div 
          className="contact-socials flex justify-center gap-6 mb-12 transition-all duration-1000 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:rotate-6`}>
                  <Icon size={28} className="text-white md:w-8 md:h-8" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>

        <div 
          className="contact-cta transition-all duration-1000 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          <a
            href="mailto:sfawadkhan92@gmail.com"
            className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-black text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105 group"
          >
            Start a Conversation
            <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
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

export default Contact;