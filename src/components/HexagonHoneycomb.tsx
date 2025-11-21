import React, { useState, useEffect, useRef } from 'react';

const HexagonHoneycomb: React.FC = () => {
  const [showRipple, setShowRipple] = useState(false);
  const [isVisionUI, setIsVisionUI] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hexagonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const honeycomb = [1, 2, 3, 2];
  
  // Tech skills with detailed descriptions
  const techSkills = [
    { name: 'Power Apps', description: 'Low-code app development platform for building business applications' },
    { name: 'Power Automate', description: 'Workflow automation tool for streamlining business processes' },
    { name: 'Power BI', description: 'Business intelligence and data visualization platform' },
    { name: '.Net Core', description: 'Cross-platform framework for building modern applications' },
    { name: 'SharePoint', description: 'Collaboration and document management platform' },
    { name: 'Azure', description: 'Cloud computing platform for building and deploying applications' },
    { name: 'Co-Pilot', description: 'AI-powered assistant for productivity and development' },
    { name: 'Outsystem', description: 'Low-code platform for enterprise application development' }
  ];
  
  const icons = techSkills.map(skill => skill.name);

  const ripple = (target: HTMLDivElement) => {
    if (showRipple) return;

    const targetRect = target.getBoundingClientRect();
    const hexagonElements = hexagonRefs.current.filter(Boolean) as HTMLDivElement[];
    
    const data = hexagonElements
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.round(
          Math.sqrt(
            Math.pow(rect.x - targetRect.x, 2) +
              Math.pow(rect.y - targetRect.y, 2)
          )
        );
        return { element, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    const [max] = data.slice(-1);
    
    data.forEach((item) =>
      item.element.style.setProperty(
        "--ripple-factor",
        `${(item.distance * 100) / max.distance}`
      )
    );

    setShowRipple(true);

    const cleanUp = () => {
      requestAnimationFrame(() => {
        setShowRipple(false);
        data.forEach((item) =>
          item.element.style.removeProperty("--ripple-factor")
        );
        max.element.removeEventListener("animationend", cleanUp);
      });
    };

    max.element.addEventListener("animationend", cleanUp);
  };

  const toggleTheme = () => {
    setIsVisionUI(!isVisionUI);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @property --index {
        syntax: "<number>";
        initial-value: 0;
        inherits: true;
      }

      @property --ripple-factor {
        syntax: "<number>";
        initial-value: 0;
        inherits: true;
      }

      .hexagon-container {
        --hexagon-size: 12vmin;
        --gap: 0.1vmin;
      }

      @media (any-pointer: fine) {
        .hexagon-container {
          --ripple-filter: blur(1rem);
        }
      }

      .hexagon-container.vision-ui {
        --hover-filter: brightness(1.5);
      }

      @media (any-pointer: fine) {
        .hexagon-container.vision-ui {
          --ripple-filter: blur(0.2rem);
        }
      }

      .hexagon {
        transition: all 0.3s ease;
      }


      .hexagon:hover {
        transform: translateY(-5px);
        filter: brightness(1.2);
        box-shadow: 0 10px 30px hsla(295, 45%, 30%, 0.4);
      }

      @keyframes ripple {
        from {
          transform: scale(1);
          opacity: 1;
        }

        50% {
          transform: scale(max(0.8, calc(var(--ripple-factor) / 100)));
          opacity: 0.42;
        }

        65% {
          opacity: 1;
        }
        70% {
          transform: scale(1.5);
          filter: var(--ripple-filter);
        }

        to {
          transform: scale(1);
          opacity: 1;
        }
      }

      .honeycomb-wrapper.show-ripple {
        pointer-events: none;
      }

      .honeycomb-wrapper.show-ripple .hexagon {
        cursor: default;
        --duration: 0.45s;
        animation: ripple var(--duration) ease-in-out;
        animation-duration: max(
          var(--duration),
          calc(var(--duration) * var(--ripple-factor) / 100)
        );
        animation-delay: calc(var(--ripple-factor) * 8ms);
      }

      @media (max-width: 768px) {
        .hexagon-container {
          --hexagon-size: 10vmin;
        }
      }

      @media (max-width: 480px) {
        .hexagon-container {
          --hexagon-size: 8vmin;
        }
      }

      @media (min-width: 1200px) {
        .hexagon-container {
          --hexagon-size: 10vmin;
        }
      }

      @media (max-height: 600px) {
        .hexagon-container {
          --hexagon-size: 8vh;
        }
      }

      .tooltip {
        position: fixed;
        background: hsl(var(--primary) / 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid hsl(var(--primary-light) / 0.3);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        color: hsl(var(--primary-foreground));
        font-size: 0.9rem;
        pointer-events: none;
        z-index: 1000;
        max-width: 300px;
        box-shadow: var(--shadow-elevated);
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .tooltip.show {
        opacity: 1;
        transform: translateY(0);
      }

      .tooltip-title {
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: hsl(var(--primary-foreground));
      }

      .tooltip-desc {
        color: hsl(var(--primary-foreground) / 0.9);
        line-height: 1.4;
      }
    `;
    document.head.appendChild(style);

    const timer1 = setTimeout(() => {
      if (hexagonRefs.current[0]) {
        ripple(hexagonRefs.current[0]);
      }
    }, 300);

    return () => {
      clearTimeout(timer1);
      document.head.removeChild(style);
    };
  }, []);

  const renderHoneycomb = () => {
    let iconIndex = -1;
    let hexagonIndex = 0;

    return honeycomb.map((column, columnIndex) => {
      const cells = [];
      for (let cellIndex = 0; cellIndex < column; cellIndex++) {
        iconIndex++;
        const currentIndex = iconIndex;
        cells.push(
          <div
            key={`${columnIndex}-${cellIndex}`}
            ref={(el) => {
              hexagonRefs.current[hexagonIndex] = el;
              hexagonIndex++;
            }}
            className="hexagon"
            style={{
              '--index': cellIndex + 1,
              '--icon': `"${icons[iconIndex]}"`,
              '--mix-percentage': `calc(${columnIndex} * ${cellIndex + 1} * 3%)`,
              width: 'var(--hexagon-size)',
              aspectRatio: '1',
              position: 'relative',
              background: isVisionUI 
                ? `linear-gradient(135deg, hsl(var(--primary-light) / 0.4), hsl(var(--accent) / 0.3))`
                : `linear-gradient(135deg, hsl(var(--primary) / ${0.15 + (columnIndex * (cellIndex + 1)) * 0.01}), hsl(var(--primary-light) / ${0.1 + (columnIndex * (cellIndex + 1)) * 0.01}))`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${isVisionUI ? 'hsl(var(--primary-light) / 0.3)' : 'hsl(var(--primary) / 0.2)'}`,
              clipPath: `polygon(
                98.66024% 45%, 99.39693% 46.5798%, 99.84808% 48.26352%, 100% 50%,
                99.84808% 51.73648%, 99.39693% 53.4202%, 98.66025% 55%, 78.66025% 89.64102%,
                77.66044% 91.06889%, 76.42788% 92.30146%, 75% 93.30127%, 73.4202% 94.03794%,
                71.73648% 94.48909%, 70% 94.64102%, 30% 94.64102%, 28.26352% 94.48909%,
                26.5798% 94.03794%, 25% 93.30127%, 23.57212% 92.30146%, 22.33956% 91.06889%,
                21.33975% 89.64102%, 1.33975% 55%, 0.60307% 53.4202%, 0.15192% 51.73648%,
                0% 50%, 0.15192% 48.26352%, 0.60307% 46.5798%, 1.33975% 45%,
                21.33975% 10.35898%, 22.33956% 8.93111%, 23.57212% 7.69854%, 25% 6.69873%,
                26.5798% 5.96206%, 28.26352% 5.51091%, 30% 5.35898%, 70% 5.35898%,
                71.73648% 5.51091%, 73.4202% 5.96206%, 75% 6.69873%, 76.42788% 7.69854%,
                77.66044% 8.93111%, 78.66025% 10.35898%
              )`,
              cursor: 'pointer',
            } as React.CSSProperties}
            onClick={(e) => ripple(e.currentTarget)}
            onMouseEnter={(e) => {
              setHoveredIndex(currentIndex);
              const tooltip = document.getElementById('tech-tooltip');
              if (tooltip) {
                const rect = e.currentTarget.getBoundingClientRect();
                tooltip.style.left = `${rect.left + rect.width / 2}px`;
                tooltip.style.top = `${rect.top - 10}px`;
                tooltip.style.transform = 'translate(-50%, -100%)';
              }
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                position: 'absolute',
                fontSize: '1.8vmin',
                fontWeight: '600',
                color: isVisionUI ? 'hsl(var(--primary-foreground))' : 'hsl(var(--primary))',
                inset: '0',
                pointerEvents: 'none',
                padding: '1rem',
                textAlign: 'center',
                lineHeight: '1.2',
              }}
            >
              {icons[iconIndex]}
            </div>
          </div>
        );
      }
      return (
        <div
          key={columnIndex}
          className="column"
          style={{
            '--column': columnIndex,
            margin: '0 -0.2vmin',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } as React.CSSProperties}
        >
          {cells}
        </div>
      );
    });
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div 
        className="container mx-auto relative"
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, hsl(var(--primary) / 0.05) 0%, transparent 70%)`,
            opacity: isVisionUI ? 0.8 : 0.5,
            transition: 'opacity 0.6s ease-in-out',
          }}
        />
        
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{
            background: 'var(--gradient-hero)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Tech Skills Showcase
          </h2>
          <p className="text-muted-foreground text-lg">Click on any hexagon to see the ripple effect</p>
        </div>


        <div 
          ref={containerRef}
          className={`honeycomb-wrapper ${showRipple ? 'show-ripple' : ''} relative z-10`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: showRipple ? 'none' : 'auto',
          }}
        >
          {renderHoneycomb()}
        </div>
        
        {/* Theme Toggle */}
        <button 
          className={`absolute top-8 right-8 z-20 power-card px-4 py-2 rounded-full transition-all duration-300 hover:scale-105`}
          onClick={toggleTheme}
          style={{
            background: isVisionUI ? 'var(--gradient-primary)' : 'hsl(var(--card))',
            color: isVisionUI ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
            border: `1px solid ${isVisionUI ? 'hsl(var(--primary-light))' : 'hsl(var(--border))'}`,
          }}
        >
          <span className="text-xl">{isVisionUI ? '⚡' : '💻'}</span>
        </button>

        {/* Tooltip */}
        <div 
          id="tech-tooltip"
          className={`tooltip ${hoveredIndex !== null ? 'show' : ''}`}
        >
          {hoveredIndex !== null && techSkills[hoveredIndex] && (
            <>
              <div className="tooltip-title">{techSkills[hoveredIndex].name}</div>
              <div className="tooltip-desc">{techSkills[hoveredIndex].description}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HexagonHoneycomb;
