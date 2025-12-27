import React from 'react';
import { motion } from 'motion/react';

const platforms = [
  { name: 'Dribbble', icon: '🏀', amount: '$227,459', percent: '43%', color: '#EA4C89' },
  { name: 'Instagram', icon: '📷', amount: '$142,823', percent: '27%', color: '#E4405F' },
  { name: 'Behance', icon: '🅱️', amount: '$89,935', percent: '11%', color: '#1769FF' },
  { name: 'Google', icon: '🔍', amount: '$37,028', percent: '7%', color: '#4285F4' },
];

const referrerIcons = [
  { icon: '🅱️', color: '#1769FF' },
  { icon: '🏀', color: '#EA4C89' },
  { icon: '🔍', color: '#4285F4' },
];

export default function ChartsPanel(){
  return (
    <motion.div 
      className="charts-panel"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Platform Stats */}
      <div className="platform-stats card">
        <div className="panel-header">
          <svg className="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 4H16M2 9H16M2 14H16" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>Filters</span>
          <span className="filter-btn">☰</span>
        </div>
        <div className="platform-list">
          {platforms.map((p, i) => (
            <motion.div 
              key={p.name} 
              className="platform-row"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ backgroundColor: '#f9fafb' }}
            >
              <span className="platform-icon" style={{ backgroundColor: p.color }}>{p.icon}</span>
              <span className="platform-name">{p.name}</span>
              <span className="platform-amount">{p.amount}</span>
              <span className="platform-percent">{p.percent}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Referrer Category Chart */}
      <div className="referrer-chart card">
        <div className="panel-header">
          <svg className="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 4H16M2 9H16M2 14H16" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>Filters</span>
          <span className="filter-btn">☰</span>
        </div>
        <div className="referrer-icons">
          {referrerIcons.map((r, i) => (
            <motion.div 
              key={i}
              className="referrer-icon"
              style={{ backgroundColor: r.color }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1 }}
            >{r.icon}</motion.div>
          ))}
        </div>
        <div className="referrer-label">
          <span>Deals amount</span>
          <span className="sub-label">by referrer category ▾</span>
        </div>
      </div>
    </motion.div>
  );
}

export function PlatformValueChart() {
  const months = ['Sep', 'Oct', 'Nov'];
  const bars = [
    { height: 60, value: '$6,901', color: '#E5E7EB' },
    { height: 100, value: '$11,035', color: '#F472B6' },
    { height: 80, value: '$9,288', color: '#10B981' },
    { height: 50, value: '', color: '#E5E7EB' },
    { height: 40, value: '', color: '#E5E7EB' },
  ];

  return (
    <motion.div 
      className="platform-value-chart card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="chart-header">
        <div className="chart-icon">📈</div>
        <div className="chart-title">
          <span>Platform value</span>
          <span className="chart-subtitle">Dribbble ▾</span>
        </div>
        <div className="chart-tabs">
          <button className="tab active">Revenue</button>
          <button className="tab">Leads</button>
          <button className="tab">W/L</button>
        </div>
      </div>

      <div className="chart-content">
        <div className="chart-tooltip">
          <div className="tooltip-box">
            <div className="tooltip-title">Revenue</div>
            <div className="tooltip-value">$18,552</div>
            <div className="tooltip-row">Leads<span>373</span> <span className="sub">97/276</span></div>
            <div className="tooltip-row">Win/loss <span>16%</span> <span className="sub">51/318</span></div>
          </div>
          <div className="avg-label">Average monthly</div>
        </div>
        
        <div className="bar-chart">
          {bars.map((bar, i) => (
            <motion.div 
              key={i}
              className="bar-container"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            >
              {bar.value && <span className="bar-value">{bar.value}</span>}
              <div className="bar" style={{ height: bar.height, backgroundColor: bar.color }}></div>
              <div className="bar-dot" style={{ backgroundColor: bar.color === '#E5E7EB' ? '#9CA3AF' : bar.color }}>🔴</div>
            </motion.div>
          ))}
        </div>
        
        <div className="chart-months">
          {months.map(m => <span key={m}>{m}</span>)}
        </div>
      </div>
    </motion.div>
  );
}
