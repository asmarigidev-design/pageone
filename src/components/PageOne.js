import React, { useEffect, useRef } from 'react';  
import Navbar from './Sidebar/Navbar.js';  // کامپوننت نوار کناری – Sidebar component
import iconn from '../assets/iconn.png';

function PageOne() {  
    const textRef = useRef(null);  // مرجع برای عنصر متنی – Ref for text element

useEffect(() => {
  let animationFrameId;

  const handleMouseMove = (e) => {
    if (window.innerWidth < 767) return;

    const x = e.clientX / 15;
    const y = e.clientY / 15;

    animationFrameId = requestAnimationFrame(() => {
      if (textRef.current) {
        textRef.current.style.backgroundPosition = `${x}px ${y}px`;
      }
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(animationFrameId);
  };
}, []);
 

    return (   
        <div>  
            <Navbar />   {/* نمایش نوار کناری – Render sidebar */}
            <div className="page">  
                <div className='text' ref={textRef}>  {/* عنصر با افکت حرکت ماوس – Element with mousemove effect */}
                    <div></div> 

                    {/* محتوای صفحه شامل تصویر و متن – Page content with image and text */}
                    <div className="page">
                        <div className="image-text-container" style={{ position: 'relative' }}>
                            <div className="circlee circle1"></div>
                            <div className="circlee circle2"></div>
                            <img src={iconn} alt="" className="image-style" />
                            <span className="text-style">GS</span>
                        </div>

                        {/* شعار صفحه – Page slogan */}
                        <div className="font-style">
                            <p>flagrant delit de gourmandise</p>
                        </div>
                    </div>
                </div>  
            </div>   
        </div>  
    );  
}  

export default PageOne;
