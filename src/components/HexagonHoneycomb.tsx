import React, { useState, useEffect, useRef } from 'react';

const HexagonHoneycomb: React.FC = () => {
  const [showRipple, setShowRipple] = useState(false);
  const [isVisionUI, setIsVisionUI] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hexagonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const honeycomb = [1, 2, 3, 2];
  // Tech skills - exactly 8 items as specified
  const icons = ['Power Apps', 'Power Automate', 'Power BI', '.Net Core', 'SharePoint', 'Azure', 'Co-Pilot', 'Outsystem'];

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
        --color-primary: #742774;
        --color-secondary: #A254A0;
        --color-tertiary: #0078D4;
        --color-quaternary: #742774;
        --color-surface: #201F1E;
        --bg: linear-gradient(
          to bottom,
          color-mix(in srgb, var(--color-quaternary), black 70%),
          var(--color-surface)
        );
        --color-on-surface: var(--color-primary);
        --icon-filter: saturate(3.4) brightness(0.5) invert(1);
        --ripple-filter: blur(1rem);
        --hover-filter: brightness(1.2);
        --hexagon-size: 8vmin;
        --gap: 0.1vmin;
      }

      @media (any-pointer: fine) {
        .hexagon-container {
          --icon-filter: saturate(3.4) brightness(0.5) invert(1);
          --ripple-filter: blur(1rem);
        }
      }

      .hexagon-container.vision-ui {
        --color-surface-container: rgba(116, 39, 116, 0.35);
        --color-on-surface: white;
        --hover-filter: brightness(1.5);
      }

      @media (any-pointer: fine) {
        .hexagon-container.vision-ui {
          --icon-filter: saturate(0.4);
          --ripple-filter: blur(0.2rem);
        }
      }

      .hexagon:hover {
        filter: var(--hover-filter) !important;
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
          --hexagon-size: 6vmin;
        }
      }

      @media (max-width: 480px) {
        .hexagon-container {
          --hexagon-size: 5vmin;
        }
      }

      @media (min-width: 1200px) {
        .hexagon-container {
          --hexagon-size: 7vmin;
        }
      }

      @media (max-height: 600px) {
        .hexagon-container {
          --hexagon-size: 6vh;
        }
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
              background: `var(--color-surface-container, color-mix(in srgb, var(--color-secondary), var(--color-primary) var(--mix-percentage)))`,
              backdropFilter: 'blur(1rem)',
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
          >
            <div
              style={{
                content: `var(--icon)`,
                display: 'grid',
                placeItems: 'center',
                position: 'absolute',
                fontSize: '1.2vmin',
                fontWeight: '600',
                color: 'white',
                inset: '0',
                pointerEvents: 'none',
                padding: '0.5rem',
                textAlign: 'center',
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
    <section className="py-20 relative overflow-hidden">
      <div 
        className={`hexagon-container ${isVisionUI ? 'vision-ui' : ''}`}
        style={{
          width: '100%',
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'var(--bg)',
          color: 'var(--color-on-surface)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            content: '""',
            position: 'absolute',
            inset: '0',
            pointerEvents: 'none',
            background: `radial-gradient(at center, transparent 80%, #201F1E)`,
            opacity: isVisionUI ? 0.8 : 0,
            filter: isVisionUI ? 'blur(0)' : 'blur(0.5rem)',
            transition: 'opacity 0.6s ease-in-out, filter 0.6s ease-in-out',
          }}
        />
        
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-10">
          <h2 className="text-4xl font-bold text-white mb-2">Tech Skills Showcase</h2>
          <p className="text-white/80">Click on any hexagon to see the ripple effect</p>
        </div>

        <div 
          ref={containerRef}
          className={`honeycomb-wrapper ${showRipple ? 'show-ripple' : ''}`}
          style={{
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: showRipple ? 'none' : 'auto',
          }}
        >
          {renderHoneycomb()}
        </div>
        
        <div 
          className={`switch ${isVisionUI ? 'checked' : ''}`}
          onClick={toggleTheme}
          style={{
            '--mix-percentage': 'calc(2 * 6 * 3%)',
            width: '8vmin',
            aspectRatio: '2',
            position: 'absolute',
            display: 'flex',
            top: '4vmin',
            right: '4vmin',
            background: `var(--color-surface-container, color-mix(in srgb, var(--color-secondary), var(--color-primary) var(--mix-percentage)))`,
            backdropFilter: 'blur(1rem)',
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
            fontSize: '2vmin',
          } as React.CSSProperties}
        >
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              position: 'absolute',
              left: '0',
              top: '0',
              height: '100%',
              width: '75%',
              background: `var(--color-surface-container, color-mix(in srgb, var(--color-secondary), var(--color-primary) calc(4 * 6 * 3%)))`,
              backdropFilter: 'blur(1rem)',
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
              transition: 'transform 0.3s ease',
              transform: isVisionUI ? 'translateX(25%)' : 'translateX(0)',
            }}
          >
            {isVisionUI ? '⚡' : '💻'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexagonHoneycomb;
