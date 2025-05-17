import { useState, useEffect, useRef } from 'react';
import '../../styles/CustomCursor.css';

const CustomCursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mobileCheck = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };
    if (mobileCheck()) return;

    const updatePosition = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setDotPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleLinkHoverStart = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-hover')
      ) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleLinkHoverStart);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHoverStart);
    };
  }, []);

  // Animation for ring drag effect
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      if (dotRef.current) {
        dotRef.current.style.left = dotPosition.x + 'px';
        dotRef.current.style.top = dotPosition.y + 'px';
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [dotPosition]);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${clicked ? 'cursor-dot--clicked' : ''} ${
          linkHovered ? 'cursor-dot--hover' : ''
        }`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${clicked ? 'cursor-ring--clicked' : ''} ${
          linkHovered ? 'cursor-ring--hover' : ''
        }`}
      />
    </>
  );
};

export default CustomCursor;