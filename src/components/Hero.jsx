import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ scrollToSection }) => {
  const heroRef = useRef(null);
  const shapesRef = useRef([]);
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '../public/resume.pdf'; 
    link.download = 'Shah_Fawad_Khan_Resume.pdf';
    link.target = '_blank'; 
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

    const title = heroRef.current?.querySelector('.hero-title');
    const subtitle = heroRef.current?.querySelector('.hero-subtitle');
    const description = heroRef.current?.querySelector('.hero-description');
    const name = heroRef.current?.querySelector('.hero-name');
    const cta = heroRef.current?.querySelector('.hero-cta');

    if (name) {
      setTimeout(() => {
        name.style.opacity = '1';
        name.style.transform = 'translateY(0)';
      }, 200);
    }

    if (title) {
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 500);
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 800);
    }

    if (description) {
      setTimeout(() => {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
      }, 1000);
    }

    if (cta) {
      setTimeout(() => {
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 1300);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const bubbles = bubblesRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Bubble {
      constructor() {
        this.reset();
        this.y = Math.random() * -canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.radius = 15 + Math.random() * 25;
        this.speed = 1 + Math.random() * 2;
        this.opacity = 0.3 + Math.random() * 0.4;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = 0.02 + Math.random() * 0.03;
        
        const colors = [
          { r: 147, g: 197, b: 253 },
          { r: 196, g: 181, b: 253 },
          { r: 165, g: 180, b: 252 },
          { r: 103, g: 232, b: 249 },
          { r: 153, g: 246, b: 228 },
          { r: 251, g: 207, b: 232 }
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.vx = 0;
        this.vy = this.speed;
        this.friction = 0.95;
      }

      update() {
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 0.5;

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= this.friction;
        this.vy = this.vy * this.friction + this.speed * (1 - this.friction);

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = this.radius + 80;

        if (distance < minDistance) {
          const force = (minDistance - distance) / minDistance;
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * 8;
          this.vy -= Math.sin(angle) * force * 8;
        }

        if (this.y > canvas.height + 50) {
          this.reset();
        }
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.fill();

        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const bubbleCount = Math.min(20, Math.floor(canvas.width / 30));
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      bubblesRef.current = [];
    };
  }, []);

  return (
    <div ref={heroRef} className="relative w-full min-h-screen overflow-hidden bg-white">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[5]"
      />
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={el => shapesRef.current[0] = el}
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-40 animate-float"
          style={{ top: '10%', left: '5%' }}
        />
        
        <div
          ref={el => shapesRef.current[1] = el}
          className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 opacity-40 animate-float-delayed"
          style={{ top: '60%', right: '10%' }}
        />
        
        <div
          ref={el => shapesRef.current[2] = el}
          className="absolute w-0 h-0 opacity-30 animate-float-slow hidden sm:block"
          style={{
            top: '40%',
            right: '5%',
            borderLeft: '100px solid transparent',
            borderRight: '100px solid transparent',
            borderBottom: '173px solid rgb(219, 234, 254)',
          }}
        />
        
        <div
          ref={el => shapesRef.current[3] = el}
          className="absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-indigo-100 to-indigo-50 opacity-30 animate-float-rotate"
          style={{ bottom: '10%', left: '15%', transform: 'rotate(45deg)' }}
        />
        
        <div
          ref={el => shapesRef.current[4] = el}
          className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 opacity-40 animate-float-fast"
          style={{ top: '25%', right: '30%' }}
        />
        
        <div
          ref={el => shapesRef.current[5] = el}
          className="absolute w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 opacity-30 animate-float-delayed"
          style={{ bottom: '25%', right: '40%' }}
        />

        <div
          ref={el => shapesRef.current[6] = el}
          className="absolute w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 opacity-35 animate-float-fast"
          style={{ top: '15%', right: '15%' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20 text-center">
        <p 
          className="hero-name text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-3 sm:mb-4 tracking-wider uppercase transition-all duration-1000 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          Hi, I'm
        </p>
        
        <h1 
          className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight transition-all duration-1000 opacity-0 px-2"
          style={{ transform: 'translateY(30px)' }}
        >
          Shah Fawad Khan
        </h1>
        
        <p 
          className="hero-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 sm:mb-8 font-light transition-all duration-1000 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          Web Developer
        </p>

        <p className="hero-description text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl transition-all duration-1000 opacity-0 px-4">
          Crafting beautiful, responsive, and user-friendly web experiences with modern technologies
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 transition-all duration-1000 opacity-0" style={{ transform: 'translateY(30px)' }}>
          <button 
            onClick={handleResumeDownload}
            className="w-full sm:w-auto px-8 py-3 sm:px-9 sm:py-3.5 bg-gray-900 text-white rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            Resume
          </button>
          <button 
            onClick={() => scrollToSection && scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3 sm:px-9 sm:py-3.5 bg-white text-gray-900 border-2 border-gray-900 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-scroll"></div>
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

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 40px) scale(1.1);
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

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 25s ease-in-out infinite;
        }

        .animate-float-rotate {
          animation: float-rotate 22s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 15s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;