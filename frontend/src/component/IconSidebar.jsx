import React from 'react';
import { motion } from 'motion/react';

export default function IconSidebar() {
  return (
    <motion.div 
      className="icon-sidebar"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Top Icons */}
      <div className="icon-sidebar-top">
        {/* Logo/Home */}
        <motion.button 
          className="icon-sidebar-btn logo-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="icon-logo">C</div>
        </motion.button>

        {/* Cloud/Refresh */}
        <motion.button 
          className="icon-sidebar-btn"
          whileHover={{ scale: 1.1, backgroundColor: '#e8e2e1' }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png" 
            alt="Cloud" 
            className="icon-sidebar-img"
          />
        </motion.button>

        {/* Link/Connection - Active */}
        <motion.button 
          className="icon-sidebar-btn active pink"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/455/455691.png" 
            alt="Link" 
            className="icon-sidebar-img white"
          />
        </motion.button>

        {/* Document */}
        <motion.button 
          className="icon-sidebar-btn"
          whileHover={{ scale: 1.1, backgroundColor: '#e8e2e1' }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2991/2991112.png" 
            alt="Document" 
            className="icon-sidebar-img"
          />
        </motion.button>

        {/* Command/Keyboard */}
        <motion.button 
          className="icon-sidebar-btn"
          whileHover={{ scale: 1.1, backgroundColor: '#e8e2e1' }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/4185/4185724.png" 
            alt="Command" 
            className="icon-sidebar-img"
          />
        </motion.button>

        {/* Pen/Edit */}
        <motion.button 
          className="icon-sidebar-btn"
          whileHover={{ scale: 1.1, backgroundColor: '#e8e2e1' }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" 
            alt="Edit" 
            className="icon-sidebar-img"
          />
        </motion.button>
      </div>

      {/* Bottom Icons */}
      <div className="icon-sidebar-bottom">
        {/* User/Profile */}
        <motion.button 
          className="icon-sidebar-btn notification"
          whileHover={{ scale: 1.1, backgroundColor: '#e8e2e1' }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" 
            alt="User" 
            className="icon-sidebar-img"
          />
          <span className="notif-dot red"></span>
        </motion.button>

        {/* Settings */}
        <motion.button 
          className="icon-sidebar-btn"
          whileHover={{ scale: 1.1, backgroundColor: '#e8e2e1' }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" 
            alt="Settings" 
            className="icon-sidebar-img"
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
