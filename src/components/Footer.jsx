import React, { useEffect, useRef } from 'react';
import { Heart, Code, Palette } from 'lucide-react';

const Footer = () => {
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
  }, []);

  return (
    <footer className="relative py-16 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={el => shapesRef.current[0] = el}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-30 animate-float"
          style={{ bottom: '-20%', left: '5%' }}
        />
        
        <div
          ref={el => shapesRef.current[1] = el}
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 opacity-30 animate-float-delayed"
          style={{ bottom: '-10%', right: '10%' }}
        />
        
        
        
        <div
          ref={el => shapesRef.current[6] = el}
          className="absolute w-38 h-38 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 opacity-32 animate-float"
          style={{ bottom: '30%', right: '5%' }}
        />
        
        
        
        <div
          ref={el => shapesRef.current[8] = el}
          className="absolute w-50 h-50 bg-gradient-to-br from-rose-100 to-rose-50 opacity-26 animate-float-delayed"
          style={{ bottom: '5%', left: '25%', transform: 'rotate(60deg)' }}
        />
        
        <div
          ref={el => shapesRef.current[9] = el}
          className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 opacity-30 animate-float-rotate"
          style={{ top: '40%', left: '8%' }}
        />
        
        
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-2">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Shah Fawad Khan</h3>
            <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
              Crafted with passion
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 mb-2 flex items-center justify-center md:justify-end gap-2">
              <Code className="w-4 h-4 text-blue-600" />
              Built with React, GSAP & Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">Designed for excellence</p>
          </div>
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer