import React, { useState } from 'react';
import { motion } from 'motion/react';

const sharedItems = [
  { label: 'Cargo2go', color: '#10B981' },
  { label: 'Cloudz3r', color: '#EF4444', badge: 2 },
  { label: 'Idioma', color: '#8B5CF6' },
  { label: 'Syllables', color: '#F59E0B' },
  { label: 'x-0b', color: 'rgba(99, 102, 241, 1)' },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [expandedSections, setExpandedSections] = useState({
    sharedWithMe: true,
    shareWithMe: true,
    myReports: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <motion.aside 
      className="sidebar-full"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.div 
        className="sidebar-header"
        whileHover={{ backgroundColor: '#f9fafb' }}
      >
        <div className="logo">
          <div className="logo-icon">C</div>
          <span className="logo-text">Codename.com</span>
          <svg className="logo-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 5L6 8L9 5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>

      {/* Quick Links */}
      <div className="sidebar-section">
        <motion.button 
          className="sidebar-item with-icon"
          whileHover={{ backgroundColor: '#f9fafb' }}
          onClick={() => setActiveItem('Starred')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L10 5.5L15 6L11.5 9.5L12.5 14.5L8 12L3.5 14.5L4.5 9.5L1 6L6 5.5L8 1Z" stroke="#9CA3AF" strokeWidth="1.2" fill="none"/>
          </svg>
          <span>Starred</span>
        </motion.button>
        <motion.button 
          className="sidebar-item with-icon"
          whileHover={{ backgroundColor: '#f9fafb' }}
          onClick={() => setActiveItem('Recent')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#9CA3AF" strokeWidth="1.2"/>
            <path d="M8 4V8L10.5 10.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span>Recent</span>
        </motion.button>
      </div>

      {/* Main Nav */}
      <div className="sidebar-section nav-section">
        <motion.button 
          className="sidebar-item"
          whileHover={{ backgroundColor: '#f9fafb' }}
          onClick={() => setActiveItem('Sales list')}
        >
          <span>Sales list</span>
        </motion.button>
        <motion.button 
          className="sidebar-item"
          whileHover={{ backgroundColor: '#f9fafb' }}
          onClick={() => setActiveItem('Goals')}
        >
          <span>Goals</span>
        </motion.button>
        <motion.button 
          className="sidebar-item active"
          whileHover={{ backgroundColor: '#FEE2E2' }}
          onClick={() => setActiveItem('Dashboard')}
        >
          <span>Dashboard</span>
          <motion.span 
            className="plus-btn"
            whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.95 }}
          >+</motion.span>
        </motion.button>
      </div>

      {/* Fishbone Structure - Dashboard Sub-items */}
      <div className="fishbone-section">
        {/* Codename */}
        <div className="fishbone-item">
          <div className="fishbone-branch"></div>
          <motion.button 
            className="fishbone-label active"
            style={{ backgroundColor: '#ffffff' }}
            whileHover={{ backgroundColor: '#f9fafb' }}
          >
            Codename
          </motion.button>
        </div>

        {/* Shared with me */}
        <div className="fishbone-item">
          <div className="fishbone-branch"></div>
          <motion.button 
            className="fishbone-label expandable"
            style={{ backgroundColor: '#ffffff' }}
            whileHover={{ backgroundColor: '#f9fafb' }}
            onClick={() => toggleSection('sharedWithMe')}
          >
            Shared with me
            <svg className={`fishbone-arrow ${expandedSections.sharedWithMe ? 'expanded' : ''}`} width="8" height="8" viewBox="0 0 8 8">
              <path d="M2 5L4 3L6 5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </motion.button>
        </div>

        {/* Shared items - nested fishbone */}
        {expandedSections.sharedWithMe && (
          <motion.div 
            className="fishbone-nested"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.2 }}
          >
            {sharedItems.map((item, i) => (
              <div key={i} className="fishbone-item nested">
                <div className="fishbone-branch nested"></div>
                <motion.button 
                  className="fishbone-label"
                  whileHover={{ backgroundColor: '#f9fafb' }}
                >
                  <span className="color-dot" style={{ backgroundColor: item.color }}></span>
                  {item.label}
                  {item.badge && <span className="badge-red">{item.badge}</span>}
                </motion.button>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Reports Section */}
      <div className="sidebar-section reports-section">
        <div className="section-header">
          <span>Reports</span>
          <motion.button 
            className="plus-btn-small"
            whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb' }}
            whileTap={{ scale: 0.95 }}
          >+</motion.button>
        </div>

        {/* Reports Fishbone */}
        <div className="fishbone-section">
          {/* Share with me */}
          <div className="fishbone-item">
            <div className="fishbone-branch"></div>
            <motion.button 
              className="fishbone-label expandable"
              whileHover={{ backgroundColor: '#f9fafb' }}
              onClick={() => toggleSection('shareWithMe')}
            >
              Share with me
              <svg className={`fishbone-arrow ${expandedSections.shareWithMe ? 'expanded' : ''}`} width="8" height="8" viewBox="0 0 8 8">
                <path d="M2 5L4 3L6 5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </motion.button>
          </div>

          {expandedSections.shareWithMe && (
            <motion.div 
              className="fishbone-nested"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.2 }}
            >
              <div className="fishbone-item nested">
                <div className="fishbone-branch nested"></div>
                <motion.button className="fishbone-label" whileHover={{ backgroundColor: '#f9fafb' }}>
                  Deals by user
                </motion.button>
              </div>
              <div className="fishbone-item nested">
                <div className="fishbone-branch nested"></div>
                <motion.button className="fishbone-label" whileHover={{ backgroundColor: '#f9fafb' }}>
                  Deal duration
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* My reports */}
          <div className="fishbone-item">
            <div className="fishbone-branch"></div>
            <motion.button 
              className="fishbone-label expandable"
              style={{ backgroundColor: '#ffffff' }}
              whileHover={{ backgroundColor: '#f9fafb' }}
              onClick={() => toggleSection('myReports')}
            >
              My reports
              <svg className={`fishbone-arrow ${expandedSections.myReports ? 'expanded' : ''}`} width="8" height="8" viewBox="0 0 8 8">
                <path d="M2 5L4 3L6 5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </motion.button>
          </div>

          {expandedSections.myReports && (
            <motion.div 
              className="fishbone-nested"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.2 }}
            >
              <div className="fishbone-item nested">
                <div className="fishbone-branch nested"></div>
                <motion.button className="fishbone-label" whileHover={{ backgroundColor: '#f9fafb' }}>
                  Emails received
                </motion.button>
              </div>
              <div className="fishbone-item nested">
                <div className="fishbone-branch nested"></div>
                <motion.button className="fishbone-label" whileHover={{ backgroundColor: '#f9fafb' }}>
                  Deal duration
                </motion.button>
              </div>
              <div className="fishbone-item nested">
                <div className="fishbone-branch nested"></div>
                <motion.button className="fishbone-label highlight" whileHover={{ backgroundColor: '#FEF2F2' }}>
                  New report
                </motion.button>
              </div>
              <div className="fishbone-item nested">
                <div className="fishbone-branch nested"></div>
                <motion.button className="fishbone-label" whileHover={{ backgroundColor: '#f9fafb' }}>
                  Analytics
                  <span className="badge-blue">7</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Manage Folders */}
      <div className="fishbone-section manage-section">
        <div className="fishbone-item">
          <div className="fishbone-branch"></div>
          <motion.button 
            className="fishbone-label"
            whileHover={{ backgroundColor: '#f9fafb' }}
          >
            Manage folders
          </motion.button>
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="sidebar-bottom">
        <motion.button 
          className="bottom-icon-btn notification"
          whileHover={{ backgroundColor: '#f9fafb', scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9" stroke="#6B7280" strokeWidth="1.3"/>
            <circle cx="11" cy="8" r="3" stroke="#6B7280" strokeWidth="1.2"/>
            <path d="M5 18C5 15 7.5 13 11 13C14.5 13 17 15 17 18" stroke="#6B7280" strokeWidth="1.2"/>
          </svg>
          <span className="notif-dot"></span>
        </motion.button>
        <motion.button 
          className="bottom-icon-btn"
          whileHover={{ backgroundColor: '#f9fafb', scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="2" stroke="#6B7280" strokeWidth="1.3"/>
            <path d="M10 1V3M10 17V19M1 10H3M17 10H19M3.5 3.5L5 5M15 15L16.5 16.5M3.5 16.5L5 15M15 5L16.5 3.5" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </motion.button>
      </div>
    </motion.aside>
  );
}
