import React, { useState } from 'react';
import { motion } from 'motion/react';

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

const salesData = [
  { name: 'Armin A.', avatar: 'A', color: '#F59E0B', revenue: '$209,633', sales: 41, leads: 118, kpi: 0.84, percent: '31%', w: 12, l: 29 },
  { name: 'Mikasa A.', avatar: 'M', color: '#10B981', revenue: '$156,841', sales: 57, leads: 103, kpi: 0.89, percent: '39%', w: 21, l: 33, highlight: true },
];

const badges = [
  { label: 'Top sales', icon: '🔥' },
  { label: 'Sales streak', icon: '🔥' },
  { label: 'Top review', icon: '⭐' },
];

const pieData = [
  { name: 'Dribbble', percent: '28.1%', amount: '$44,072', color: '#EA4C89' },
  { name: 'Instagram', percent: '14.1%', amount: '$22,114', color: '#E4405F' },
  { name: 'Google', percent: '5.4%', amount: '$8,469', color: '#4285F4' },
  { name: 'Other', percent: '7.1%', amount: '$11,135', color: '#9CA3AF' },
];

export default function ReportsPanel(){
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
        {salesData.map((user, i) => (
          <motion.div 
            key={user.name}
            className={`table-row ${user.highlight ? 'highlight' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ backgroundColor: '#fafafa' }}
          >
            <div className="user-cell">
              <div className="avatar-small" style={{ backgroundColor: user.color }}>{user.avatar}</div>
              <span>{user.name}</span>
            </div>
            <span className="revenue">{user.revenue}</span>
            <div className="metric">
              <span className="badge-num" style={{ backgroundColor: user.highlight ? '#10B981' : '#F59E0B' }}>{user.sales}</span>
              <span>{user.leads}</span>
            </div>
            <span>{user.kpi}</span>
            <div className="wl">
              <span>{user.percent}</span>
              <span className="badge-num green">{user.w}</span>
              <span>{user.l}</span>
            </div>
            <motion.button 
              className="expand-btn"
              whileHover={{ scale: 1.2 }}
            >{user.highlight ? '🔼' : '🔽'}</motion.button>
          </motion.div>
        ))}
        
        <div className="badges-row">
          {badges.map((b, i) => (
            <motion.span 
              key={b.label} 
              className="badge-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >{b.label} {b.icon}</motion.span>
          ))}
        </div>
      </div>

      {/* Work with platforms */}
      <div className="platforms-section card">
        <div className="section-title">Work with platforms</div>
        <div className="pie-container">
          <div className="pie-chart">
            <div className="pie-center">
              <div className="pie-percent">45.3%</div>
              <div className="pie-amount">$71,048</div>
            </div>
          </div>
          <div className="pie-legend">
            {pieData.map((item, i) => (
              <motion.div 
                key={item.name}
                className="legend-item"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                <span className="legend-name">{item.name}</span>
                <span className="legend-percent">{item.percent}</span>
                <span className="legend-amount">{item.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="top-value">
          <span className="top-badge">🏆 3</span>
          <span className="top-amount">$156,841</span>
        </div>
      </div>

      {/* Sales Dynamic */}
      <div className="sales-dynamic card">
        <div className="section-title">Sales dynamic</div>
        <div className="sparkline-container">
          <div className="week-labels">
            {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11'].map(w => (
              <span key={w}>{w}</span>
            ))}
          </div>
          <motion.div 
            className="sparkline"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg viewBox="0 0 300 50" className="sparkline-svg">
              <path 
                d="M0,40 L30,35 L60,38 L90,30 L120,25 L150,20 L180,22 L210,15 L240,18 L270,10 L300,5" 
                fill="none" 
                stroke="#10B981" 
                strokeWidth="2"
              />
              <path 
                d="M0,40 L30,35 L60,38 L90,30 L120,25 L150,20 L180,22 L210,15 L240,18 L270,10 L300,5 L300,50 L0,50 Z" 
                fill="url(#gradient)" 
                opacity="0.2"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom User */}
      <motion.div 
        className="bottom-user card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="avatar-small purple">E</div>
        <span className="user-name">Eren Y.</span>
        <span className="user-revenue">$117,115</span>
        <span className="badge-num orange">22</span>
        <span>84</span>
        <span>0.79</span>
        <span>32%</span>
        <span className="badge-num green">7</span>
        <span>15</span>
      </motion.div>
    </motion.aside>
  );
}
