import { useEffect, useRef } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

export function QuantumGraphBackground() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const nucleus = {
      x: centerX,
      y: centerY,
      particles: Array.from({ length: 12 }, (_, i) => ({
        angle: (Math.PI * 2 * i) / 12,
        distance: 0,
        radius: 6,
        color: i % 2 === 0 ? '#d946ef' : '#a855f7',
        pulsePhase: Math.random() * Math.PI * 2,
        orbitRadius: 15 + (i % 3) * 5,
      })),
    };

    const orbits = [
      {
        radius: 180,
        electrons: Array.from({ length: 3 }, (_, i) => ({
          angle: (Math.PI * 2 * i) / 3 + Math.PI / 6,
          speed: 0.018,
          radius: 5,
        })),
        color: '#06b6d4',
        tilt: Math.PI / 6,
        rotationY: 0,
      },
      {
        radius: 280,
        electrons: Array.from({ length: 4 }, (_, i) => ({
          angle: (Math.PI * 2 * i) / 4,
          speed: 0.014,
          radius: 5,
        })),
        color: '#8b5cf6',
        tilt: Math.PI / 2.5,
        rotationY: Math.PI / 3,
      },
      {
        radius: 380,
        electrons: Array.from({ length: 5 }, (_, i) => ({
          angle: (Math.PI * 2 * i) / 5 + Math.PI / 10,
          speed: 0.011,
          radius: 4.5,
        })),
        color: '#ec4899',
        tilt: Math.PI / 1.8,
        rotationY: -Math.PI / 4,
      },
    ];

    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.01;
      
      const mouseDx = mousePos.current.x - centerX;
      const mouseDy = mousePos.current.y - centerY;
      const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
      const mouseInfluence = Math.max(0, 1 - mouseDist / 400);
      
      ctx.fillStyle = 'rgba(7, 2, 16, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 30; i++) {
        const angle = time * 0.2 + i * 0.7;
        const distance = 120 + Math.sin(time * 0.5 + i) * 40;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        const alpha = 0.05 + Math.sin(time * 2 + i) * 0.05;
        ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      orbits.forEach((orbit) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        
        ctx.rotate(orbit.rotationY);
        
        const radiusX = orbit.radius;
        const radiusY = orbit.radius * Math.abs(Math.cos(orbit.tilt));
        
        ctx.strokeStyle = `${orbit.color}60`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `${orbit.color}30`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `${orbit.color}15`;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();

        orbit.electrons.forEach((electron) => {
          const speed = electron.speed * (1 + mouseInfluence * 2);
          electron.angle += speed;

          const angleX = electron.angle;
          const x = centerX + Math.cos(angleX) * orbit.radius;
          const y = centerY + Math.sin(angleX) * orbit.radius * Math.abs(Math.cos(orbit.tilt));
          
          const z = Math.sin(angleX) * orbit.radius * Math.sin(orbit.tilt);

          const depthFactor = (z + orbit.radius) / (orbit.radius * 2);
          const currentRadius = electron.radius * (0.6 + depthFactor * 0.4);
          const opacity = 0.5 + depthFactor * 0.5;

          ctx.globalAlpha = opacity * 0.4;
          ctx.strokeStyle = orbit.color;
          ctx.lineWidth = currentRadius * 0.8;
          ctx.beginPath();
          const trailLength = 0.5;
          for (let i = 0; i < 15; i++) {
            const trailAngle = angleX - (i * trailLength) / 15;
            const tx = centerX + Math.cos(trailAngle) * orbit.radius;
            const ty = centerY + Math.sin(trailAngle) * orbit.radius * Math.abs(Math.cos(orbit.tilt));
            const alpha = (15 - i) / 15;
            
            if (i === 0) {
              ctx.moveTo(tx, ty);
            } else {
              ctx.globalAlpha = alpha * opacity * 0.3;
              ctx.lineTo(tx, ty);
            }
          }
          ctx.stroke();
          ctx.globalAlpha = 1;

          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, currentRadius * 6);
          glowGradient.addColorStop(0, `${orbit.color}${Math.floor(opacity * 180).toString(16).padStart(2, '0')}`);
          glowGradient.addColorStop(0.3, `${orbit.color}${Math.floor(opacity * 100).toString(16).padStart(2, '0')}`);
          glowGradient.addColorStop(0.6, `${orbit.color}${Math.floor(opacity * 40).toString(16).padStart(2, '0')}`);
          glowGradient.addColorStop(1, `${orbit.color}00`);
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(x, y, currentRadius * 6, 0, Math.PI * 2);
          ctx.fill();

          const electronGradient = ctx.createRadialGradient(
            x - currentRadius * 0.3, 
            y - currentRadius * 0.3, 
            0, 
            x, 
            y, 
            currentRadius * 1.2
          );
          electronGradient.addColorStop(0, '#ffffff');
          electronGradient.addColorStop(0.2, '#ffffff');
          electronGradient.addColorStop(0.5, orbit.color);
          electronGradient.addColorStop(1, `${orbit.color}dd`);
          ctx.fillStyle = electronGradient;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(x, y, currentRadius * 1.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;

          ctx.strokeStyle = `${orbit.color}${Math.floor(opacity * 150).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(x, y, currentRadius * 2, 0, Math.PI * 2);
          ctx.stroke();
        });
      });

      nucleus.particles.forEach((particle) => {
        particle.angle += 0.015;
        particle.pulsePhase += 0.02;
        
        const orbitX = Math.cos(particle.angle) * particle.orbitRadius;
        const orbitY = Math.sin(particle.angle) * particle.orbitRadius;

        const x = centerX + orbitX;
        const y = centerY + orbitY;
        const pulse = Math.sin(particle.pulsePhase) * 0.2 + 0.8;

        const nucleusGlow = ctx.createRadialGradient(x, y, 0, x, y, particle.radius * 4);
        nucleusGlow.addColorStop(0, `${particle.color}cc`);
        nucleusGlow.addColorStop(0.5, `${particle.color}60`);
        nucleusGlow.addColorStop(1, `${particle.color}00`);
        ctx.fillStyle = nucleusGlow;
        ctx.beginPath();
        ctx.arc(x, y, particle.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        const particleGradient = ctx.createRadialGradient(
          x - particle.radius * 0.3,
          y - particle.radius * 0.3,
          0,
          x,
          y,
          particle.radius * pulse
        );
        particleGradient.addColorStop(0, '#ffffff');
        particleGradient.addColorStop(0.3, '#ffffff');
        particleGradient.addColorStop(0.6, particle.color);
        particleGradient.addColorStop(1, `${particle.color}ee`);
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, particle.radius * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `${particle.color}aa`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, particle.radius * pulse, 0, Math.PI * 2);
        ctx.stroke();
      });

      const centralGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      centralGlow.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      centralGlow.addColorStop(0.3, 'rgba(217, 70, 239, 0.4)');
      centralGlow.addColorStop(0.6, 'rgba(168, 85, 247, 0.2)');
      centralGlow.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = centralGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 3; i++) {
        const waveRadius = ((time * 100 + i * 100) % 300) + 30;
        const waveAlpha = 1 - (waveRadius - 30) / 270;
        
        ctx.strokeStyle = `rgba(168, 85, 247, ${waveAlpha * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ background: 'transparent' }}
      />
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 85, 247, 0.03) 2px, rgba(168, 85, 247, 0.03) 4px)',
        }}
        initial={{ y: 0 }}
        animate={{ y: [0, 100] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
    </div>
  );
}
