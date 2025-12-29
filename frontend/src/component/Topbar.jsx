import React from 'react';
import { motion } from 'motion/react';

export default function Topbar() {
  return (
    <motion.header 
      className="topbar-full"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Left: Search */}
      <div className="topbar-left">
        <div className="topbar-search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#9CA3AF" strokeWidth="1.5"/>
            <path d="M11 11L14 14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder='Try searching "insights"' className="topbar-search-input" />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="topbar-right">
        <motion.button 
          className="topbar-icon-btn"
          whileHover={{ backgroundColor: '#f5f5f5ff' }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 4H16M2 9H16M2 14H16" stroke="#141517ff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.button>
        <motion.div 
          className="topbar-avatar gradient"
          whileHover={{ scale: 1.05 }}
        >
          <div className="avatar-gradient"></div>
        </motion.div>
        <motion.button 
          className="topbar-add-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
}


