import React, { useRef, useState } from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import { links } from './data'; // مسیر داده‌ها – Data source
import logo from '../../assets/arrow.png';

function Navbar() {  
    const [showLink, setShowLinks] = useState(false);  // وضعیت نمایش منو – Menu visibility state
    const [hoveredId, setHoveredId] = useState(null); // ذخیره شناسه عنصر هاور شده – Track hovered item ID
    const linksContainerRef = useRef(null);  // مرجع برای container لینک‌ها – Ref for links container

    return (  
        <div>
        <nav>   
            <div className="container">  
                <div className="nav-logo">  
                    {/* دکمه تغییر وضعیت منو با آیکون متفاوت – Toggle button with dynamic icon */}
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLink)}>  
                        <div className="icon-container">  
                            {showLink ? (  
                                <div className="icon-left">  
                                    <FaArrowLeft />  
                                </div>  
                            ) : (  
                                <div className="icon-right">  
                                    <FaBars />  
                                </div>
                            )}  
                        </div>  
                    </button>  
                </div>  

                <div className='asl' dir="rtl">
                    <h3 className='top'>ENGLISH</h3>

                    {/* container لینک‌ها با کلاس پویا بر اساس وضعیت showLink – Dynamic class based on showLink */}
                    <div className={`links-container nav-links leftwit ${showLink ? 'open' : ''}`} ref={linksContainerRef}>  
                        <ul className="list"> 

                            {/* پیمایش روی داده‌های لینک – Map through link data */}
                            {links.map((link) => {  
                                const { id, url, text, icon, className } = link;  
                                return ( 
                                    <li   
                                        key={id}   

                                        // فقط به عنصر با id برابر 9 کلاس 'top' داده می‌شود – Apply 'top' class only to item with id 9
                                        className={id === 9 ? 'top' : className} 

                                        // اعمال استایل خاص برای id برابر 9 – Special style for item with id 9
                                        style={id === 9 ? { display: 'flex', alignItems: 'center', width: '0' } : { display: 'flex', alignItems: 'center' }} 

                                        // حذف رویداد هاور برای id برابر 9 – Disable hover events for item with id 9
                                        onMouseEnter={id === 9 ? null : () => setHoveredId(id)} 
                                        onMouseLeave={id === 9 ? null : () => setHoveredId(null)} 
                                    > 
                                        { 
                                            id === 10 ? (
                                                // حذف border-radius برای عنصر با id برابر 10 – Remove border-radius for item with id 10
                                                <div
                                                    style={{
                                                        width: hoveredId === id ? '6px' : '12px', 
                                                        height: hoveredId === id ? '6px' : '12px', 
                                                        marginLeft: '15px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderRadius: '0' 
                                                    }}
                                                >
                                                    {icon} {/* آیکون برای id 10 – Icon for item with id 10 */}
                                                </div>
                                            ) : (
                                                // دایره با انیمیشن هاور – Circle with hover animation
                                                <div   
                                                    className={id === 9 ? '' : 'circle'} 
                                                    style={{  
                                                        width: hoveredId === id ? '6px' : '12px', 
                                                        height: hoveredId === id ? '6px' : '12px', 
                                                        borderRadius: '50%', 
                                                        backgroundColor: hoveredId === id ? 'rgb(255, 255, 255)' : 'rgb(124, 124, 124)', 
                                                        transition: 'width 0.1s, height 0.1s, background-color 0.1s', 
                                                        marginLeft: '15px',
                                                    }}
                                                ></div>
                                            )
                                        }

                                        {/* لینک با شفافیت متغیر بر اساس هاور – Link with hover-based opacity */}
                                        <a   
                                            href={url}   
                                            style={{   
                                                marginLeft: '20px',   
                                                opacity: hoveredId === id ? 1 : 0, 
                                                transition: 'opacity 0.5s', 
                                            }}  
                                        >  
                                            {id === 10 ? 'facebook' : text} {/* متن خاص برای id 10 – Custom text for id 10 */}
                                        </a>  
                                    </li>  
                                );  
                            })}  
                        </ul>  
                    </div>                
                </div>  
            </div>  
        </nav>  

        {/* بخش اسکرول پایین – Scroll down section */}
        <div className="arrow">
            <div className="scroll">
                <p>SCROLL</p> 
                <p>DOWN</p>
                <img src={logo} alt="" />
            </div>
        </div>
        
        </div>
    );  
}  

export default Navbar;
