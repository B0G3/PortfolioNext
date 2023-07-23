"use client"
import { useEffect, useRef, useState } from "react"

export default function Portrait(){
    const [xdirection, setxDirection] = useState(true); // 0 - left 1 - right
    const [ydirection, setyDirection] = useState(true); // 0 - bottom 1 - top
    const svgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleMouseMove = (event : MouseEvent) => {
        if(!svgRef.current) return;
        setxDirection(event.clientX > (svgRef.current.offsetLeft+svgRef.current.clientWidth/2));
        setyDirection(event.clientY < (svgRef.current.offsetTop+svgRef.current.clientHeight/2-10));
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);
  
    return (
      <div ref={svgRef} className="w-40 h-40 md:mr-8 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shapeRendering="crispEdges">
            <title>Pixel art portrait</title>
            <desc>Pixel art portrait presenting a young man wearing black turtleneck</desc>
            <path stroke="#000" d="M12 1h3M10 2h2M15 2h4M9 3h1M19 3h3M9 4h1M22 4h4M9 5h1M26 5h1M8 6h1M26 6h1M8 7h1M26 7h1M8 8h1M26 8h1M8 9h1M26 9h1M8 10h1M26 10h1M7 11h1M25 11h1M7 12h1M25 12h1M7 13h1M24 13h1M7 14h1M24 14h1M7 15h1M24 15h1M8 16h1M24 16h1M9 17h1M24 17h1M9 18h1M23 18h1M10 19h1M23 19h1M10 20h1M22 20h1M8 21h2M23 21h1M6 22h2M24 22h2M5 23h1M26 23h2M4 24h1M28 24h1M3 25h1M29 25h1M2 26h1M29 26h1M2 27h1M30 27h1M1 28h1M30 28h1M1 29h1M31 29h1M1 30h1M31 30h1M1 31h1M31 31h1" />
            <path stroke="#ffffff" d="M12 2h3M10 3h3M14 3h5M10 4h1M12 4h1M18 4h4M10 5h2M21 5h5M9 6h2M22 6h2M25 6h1M9 7h1M25 7h1M9 8h1M25 8h1M9 9h1M25 9h1M9 10h1M24 10h2M8 11h2M24 11h1M8 12h1M23 12h2M8 13h1M23 13h1M8 14h1M23 14h1M8 15h3M23 15h1M9 16h2M15 16h1M23 16h1M10 17h1M16 17h4M22 17h2M10 18h2M22 18h1M11 19h1M21 19h2M11 20h1M21 20h1M10 21h2M20 21h3M8 22h3M20 22h4M6 23h3M23 23h3M5 24h2M25 24h3M4 25h2M27 25h2M3 26h2M28 26h1M3 27h1M28 27h2M2 28h2M29 28h1M2 29h1M29 29h2M2 30h1M30 30h1M2 31h1M30 31h1" />
            <path stroke="#a1826b" d="M13 3h1M11 4h1M13 4h1M17 4h1M12 5h1M18 5h3M11 6h1M20 6h2M24 6h1M10 7h2M16 7h1M21 7h3M13 8h1M15 8h1M19 8h1M22 8h1M14 9h1M18 9h1" />
            <path stroke="#705642" d="M14 4h3M13 5h2M16 5h2M12 6h2M16 6h1M18 6h2M12 7h2M15 7h1M18 7h3M24 7h1M10 8h3M16 8h3M20 8h2M23 8h2M10 9h1M13 9h1M15 9h3M19 9h6M13 10h2M18 10h1M21 10h2M12 11h1M14 12h3M19 12h4" />
            <path stroke="#593f2b" d="M15 5h1M14 6h2M17 6h1M14 7h1M17 7h1M14 8h1M11 9h2M12 10h1M15 10h3M19 10h2M23 10h1M13 11h3M18 11h1M21 11h3" />
            <path stroke="#8a634f" d="M10 10h2M10 11h2M11 12h1M12 13h1" />
            <path stroke="#e8b695" d="M16 11h2M19 11h2M9 12h2M13 12h1M17 12h2M9 13h3M13 13h2M17 13h3M22 13h1M9 14h6M17 14h1M19 14h1M22 14h1M12 15h6M19 15h4M12 16h3M16 16h7M13 17h3M20 17h2M13 18h4M19 18h3M14 19h7M16 20h5" />
            <path stroke="#97765e" d="M12 12h1" />
            <path stroke={(!xdirection && ydirection)?"#000":"#fff"} d="M15 13h1M20 13h1" />
            <path stroke={(xdirection && ydirection)?"#000":"#fff"} d="M16 13h1M21 13h1" />
            <path stroke={(!xdirection && !ydirection)?"#000":"#fff"} d="M15 14h1M20 14h1" />
            <path stroke={(xdirection && !ydirection)?"#000":"#fff"} d="M16 14h1M21 14h1" />
            <path stroke="#c3856f" d="M18 14h1M11 15h1M18 15h1M11 16h1M11 17h2M12 18h1M17 18h2M13 19h1M14 20h2M17 21h2" />
            <path stroke="#0e0e0e" d="M12 19h1M12 20h2M12 21h5M19 21h1M13 22h7M16 23h4M9 30h2M22 30h1M9 31h2M22 31h2" />
            <path stroke="#2e2e2e" d="M11 22h2M9 23h4M21 23h2M7 24h4M23 24h2M6 25h4M25 25h2M5 26h3M26 26h2M4 27h3M26 27h2M4 28h2M3 29h2M11 29h1M3 30h2M11 30h2M3 31h2M11 31h2" />
            <path stroke="#1e1e1e" d="M13 23h3M20 23h1M11 24h12M10 25h15M8 26h18M7 27h19M6 28h22M5 29h6M12 29h17M5 30h4M13 30h9M23 30h7M5 31h4M13 31h9M24 31h6" />
            <path stroke="#282828" d="M28 28h1" />
          </svg>
      </div>
    )
}