import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
  timestamp: number;
}

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<CursorPosition[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    
    const updateCursor = (e: MouseEvent) => {
      setIsVisible(true);
      cancelAnimationFrame(animationFrame);
      
      animationFrame = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        setTrail((prev) => {
          const newTrail = [
            { x: e.clientX, y: e.clientY, timestamp: Date.now() },
            ...prev.slice(0, 7), // Keep last 8 trail points
          ];
          return newTrail;
        });
      });
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    document.addEventListener("mouseenter", updateCursor);
    document.addEventListener("mouseleave", hideCursor);

    // Clean up trail points that are too old
    const cleanup = setInterval(() => {
      setTrail((prev) =>
        prev.filter((point) => Date.now() - point.timestamp < 400)
      );
    }, 100);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", updateCursor);
      document.removeEventListener("mouseleave", hideCursor);
      clearInterval(cleanup);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-75 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-2 h-2 bg-[#00ff00]"></div>
      </div>

      {/* Trail */}
      {trail.slice(1).map((point, index) => {
        const opacity = (trail.length - index) / trail.length * 0.2;
        const size = ((trail.length - index) / trail.length) * 3 + 1;
        
        return (
          <div
            key={`${point.timestamp}-${index}`}
            className="fixed pointer-events-none z-40"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              transform: "translate(-50%, -50%)",
              opacity: opacity,
              transition: "opacity 0.1s ease-out",
            }}
          >
            <div
              className="bg-[#00ff00] rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            ></div>
          </div>
        );
      })}
    </>
  );
};

export default CustomCursor;

