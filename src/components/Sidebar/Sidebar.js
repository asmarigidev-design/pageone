import React, { useState } from 'react';
import './Sidebar.css';
import { IonIcon } from '@ionic/react';
import { links } from './data';
import iconn from '../../assets/iconn.png';
import { menuOutline, arrowBackOutline, peopleCircleOutline } from 'ionicons/icons';

const Sidebar = () => {
  // مدیریت وضعیت باز یا بسته بودن سایدبار - Sidebar expand/collapse state
  const [isExpanded, setIsExpanded] = useState(false);

  // لینک فعال فعلی را نگه می‌دارد - Tracks currently active link
  const [activeLink, setActiveLink] = useState('');

  // وضعیت منوهای جمع‌شده را نگه می‌دارد - Tracks collapsed menus
  const [collapsedMenus, setCollapsedMenus] = useState({});

  // تغییر وضعیت باز/بسته بودن سایدبار - Toggle sidebar expansion
  const toggleMenu = () => {
    setIsExpanded(prev => !prev);
  };

  // انتخاب لینک فعال - Set active link on click
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  // تغییر وضعیت منوی جمع‌شده - Toggle collapse state of menu
  const handleCollapseClick = (menuKey) => {
    setCollapsedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // کلاس آیکون براساس وضعیت سایدبار - Icon class based on sidebar state
  const getIconClass = () => (isExpanded ? 'expanded-icon' : 'collapsed-icon');

  return (
    <div className={`l-navbar ${isExpanded ? 'expander' : ''}`} id="navbar">
      <nav className="nav">
        <div>
          <div className="nav__brand">
            <IonIcon
              icon={isExpanded ? arrowBackOutline : menuOutline}
              className={`nav__toggle ${getIconClass()}`}
              id="nav-toggle"
              onClick={toggleMenu}
            />
          </div>

          <div className="nav__list">
            <ul className="list">
              {links.map(({ id, url, text, icon, className }) => (
                <li
                  key={id}
                  className={`${className} ${activeLink === id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(id)}
                >
                  <a href={url}>
                    {id === 10 ? (
                      <>
                        <span className="text-only">facebook</span>
                        <span className="icon-only">{icon}</span>
                      </>
                    ) : (
                      <>
                        <IonIcon icon={icon} />
                        <span>{text}</span>
                      </>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* منوی قابل جمع شدن برای تیم - Collapsible team menu */}
            <div
              className={`nav__link collapse ${collapsedMenus.team ? 'showCollapse' : ''}`}
              onClick={() => handleCollapseClick('team')}
            >
              <IonIcon icon={peopleCircleOutline} />
              <span>Team</span>
            </div>

            {/* آیتم‌های زیرمنوی تیم - Team submenu items */}
            {collapsedMenus.team && (
              <ul className="submenu">
                <li><a href="/team/management">Management</a></li>
                <li><a href="/team/development">Development</a></li>
                <li><a href="/team/design">Design</a></li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* بخش محتوای اصلی - Main content section */}
      <div className={`content-page ${isExpanded ? 'expander' : ''}`}>
        <div className="overlay"></div>
        <div className="page">
          <div className="image-text-container" style={{ position: 'relative' }}>
            <div className="circlee circle1"></div>
            <div className="circlee circle2"></div>
            <img src={iconn} alt="GS logo" className="image-style" />
            <span className="text-style">GS</span>
          </div>

          <div className="font-style">
            <p>flagrant delit de gourmandise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
