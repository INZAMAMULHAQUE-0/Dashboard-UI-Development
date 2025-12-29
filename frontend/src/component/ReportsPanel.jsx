import React, { useState } from 'react';
import { motion } from 'motion/react';
import WorkWithPlatforms from './WorkWithPlatforms.jsx';

export function TopbarTitle() {
  const [isTimeframeOn, setIsTimeframeOn] = useState(true);

  return (
    <motion.div 
      className="topbar-title-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="title-row">
        <h1 className="page-title">New report</h1>
        <div className="timeframe-section">
          <label 
            className={`toggle-label ${isTimeframeOn ? 'active' : ''}`}
            onClick={() => setIsTimeframeOn(!isTimeframeOn)}
          >
            <span className={`toggle-dot ${isTimeframeOn ? 'on' : 'off'}`}></span>
            Timeframe
          </label>
          <motion.button 
            className="timeframe-btn"
            whileHover={{ backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.98 }}
          >
            Sep 1 - Nov 30, 2023 ▾
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

const badges = [
  { label: 'Top sales', icon: '💪' },
  { label: 'Sales streak', icon: '🔥' },
  { label: 'Top review', icon: '👍' },
];

const platformsData = [
  { name: 'Dribbble', icon: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg', percent: '45.3%', amount: '$71,048', large: true },
  { name: 'Instagram', icon: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg', percent: '28.1%', amount: '$44,072', border: true },
  { name: 'Google', icon: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg', percent: '14.1%', amount: '$22,114' },
  { name: 'Other', icon: null, percent: '7.1%', amount: '$11,135' },
];

const bottomUser = { name: 'Eren Y.', avatar: 'https://i.pravatar.cc/40?img=3', revenue: '$117,115', sales: 22, leads: 84, kpi: 0.79, percent: '32%', w: 7, l: 15 };

export default function ReportsPanel(){
  const [isMikasaExpanded, setIsMikasaExpanded] = useState(true);

  return (
    <motion.aside 
      className="reports-panel-full"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sales Table */}
      <div className="sales-table card">
        <div className="table-header">
          <span>Sales</span>
          <span>Revenue</span>
          <span>Leads</span>
          <span>KPI</span>
          <span>W/L</span>
        </div>

        {/* Armin A. Row */}
        <motion.div 
          className="table-row"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ backgroundColor: '#fafafa' }}
          style={{ 
            background: '#ffffffff',
            borderLeft: '3px solid #E91E63',
            borderRadius: '8px',
            marginBottom: '8px'
          }}
        >
          <div className="user-cell">
            <img className="avatar-img" src="https://i.pravatar.cc/40?img=11" alt="Armin A." />
            <span style={{ fontWeight: 500, color: '#374151' }}>Armin A.</span>
          </div>
          <span className="revenue">$209,633</span>
          <div className="metric">
            <span className="badge-num dark">41</span>
            <span style={{ color: '#6B7280' }}>118</span>
          </div>
          <span className="kpi-value">0.84</span>
          <div className="wl">
            <span className="wl-percent">31%</span>
            <span className="badge-num dark">12</span>
            <span className="wl-loss">29</span>
          </div>
          <motion.button 
            className="expand-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'default',
              padding: 0
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="#F3F4F6" />
              <path d="M8 10L12 14L16 10" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>

        {/* Mikasa A. Row */}
        <motion.div 
          className="table-row"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ backgroundColor: 'rgba(251, 237, 243, 0.9)' }}
          style={{ 
            background: 'linear-gradient(90deg, rgba(251, 237, 243, 0.7) 0%, rgba(255, 250, 251, 0.5) 100%)',
            borderLeft: '3px solid #E91E63',
            borderRadius: '8px',
            marginBottom: '4px'
          }}
        >
          <div className="user-cell">
            <img className="avatar-img" src="https://i.pravatar.cc/40?img=5" alt="Mikasa A." />
            <span style={{ fontWeight: 500, color: '#374151' }}>Mikasa A.</span>
          </div>
          <span className="revenue">$156,841</span>
          <div className="metric">
            <span className="badge-num" style={{ color: '#ffffffff', backgroundColor: '#374151',borderRadius: '7px' }}>54</span>
            <span style={{ color: '#000000ff', backgroundColor: '#e6e4e4a3',borderRadius: '20px' }}>103</span>
          </div>
          <span className="kpi-value">0.89</span>
          <div className="wl">
            <span className="wl-percent">39%</span>
            <span className="badge-num"  style={{ color: '#ffffffff', backgroundColor: '#374151',borderRadius: '7px' }}>21</span>
            <span className="wl-loss">33</span>
          </div>
          <motion.button 
            className="expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsMikasaExpanded(prev => !prev);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isMikasaExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: 0
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="#c3335e" />
              <path d="M8 10L12 14L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
        
        <div className="badges-row">
          {badges.map((b, i) => (
            <motion.span 
              style={{ backgroundColor: b.color='#FFFF' }}
              key={b.label} 
              className="badge-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >{b.label} {b.icon}</motion.span>
          ))}
        </div>
      </div>

      {/* Work with platforms - Conditionally rendered based on Mikasa row expand/collapse */}
      {isMikasaExpanded && <WorkWithPlatforms />}

      {/* Sales Dynamic */}
      <div className="sales-dynamic card">
        <div className="dynamic-header">
          <span className="section-title">Sales dynamic</span>
          <motion.div 
            className="chart-expand-btn"
            whileHover={{ scale: 1.1 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L6 2M2 2L2 6M2 2L6 6M14 14L10 14M14 14L14 10M14 14L10 10" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
        <div className="sparkline-container">
          <div className="week-labels">
            {['W1', '', 'W3', '', 'W5', '', 'W7', '', 'W9', '', 'W11'].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
          <motion.div 
            className="sparkline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg viewBox="0 0 320 80" className="sparkline-svg" preserveAspectRatio="none">
              {/* Red line */}
              <motion.path 
                d="M0,55 Q40,50 80,45 T160,35 T240,40 T320,25" 
                fill="none" 
                stroke="#EF4444" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Dark line */}
              <motion.path 
                d="M0,60 Q40,55 80,50 T160,42 T240,45 T320,30" 
                fill="none" 
                stroke="#374151" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              {/* Platform dots */}
              <circle cx="80" cy="45" r="8" fill="#fff" stroke="#EA4C89" strokeWidth="2"/>
              <image href="https://cdn.worldvectorlogo.com/logos/behance-1.svg" x="76" y="41" width="8" height="8"/>
              
              <circle cx="160" cy="35" r="8" fill="#fff" stroke="#EA4C89" strokeWidth="2"/>
              <image href="https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg" x="156" y="31" width="8" height="8"/>
              
              <circle cx="200" cy="40" r="8" fill="#fff" stroke="#EA4C89" strokeWidth="2"/>
              <image href="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" x="196" y="36" width="8" height="8"/>
            </svg>
            {/* Gradient bar at bottom */}
            <div className="gradient-bar">
              <div className="gradient-green"></div>
              <div className="gradient-yellow"></div>
              <div className="gradient-red"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom User */}
      <motion.div 
        className="bottom-user card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ backgroundColor: '#fafafa' }}
      >
        <img className="avatar-img" src={bottomUser.avatar} alt={bottomUser.name} />
        <span className="user-name">{bottomUser.name}</span>
        <span className="user-revenue">{bottomUser.revenue}</span>
        <span className="badge-num dark">{bottomUser.sales}</span>
        <span className="leads-value">{bottomUser.leads}</span>
        <span className="kpi-value">{bottomUser.kpi}</span>
        <span className="wl-percent">{bottomUser.percent}</span>
        <span className="badge-num green">{bottomUser.w}</span>
        <span className="wl-loss">{bottomUser.l}</span>
      </motion.div>
    </motion.aside>
  );
}
