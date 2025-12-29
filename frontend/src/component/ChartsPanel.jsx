import React, { useState } from 'react';
import { motion } from 'motion/react';

const platforms = [
  { name: 'Dribbble', icon: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg', amount: '$227,459', percent: '43%', color: '#EA4C89' },
  { name: 'Instagram', icon: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg', amount: '$142,823', percent: '27%', color: '#E4405F' },
  { name: 'Behance', icon: 'https://cdn.worldvectorlogo.com/logos/behance-1.svg', amount: '$89,935', percent: '11%', color: '#1769FF' },
  { name: 'Google', icon: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg', amount: '$37,028', percent: '7%', color: '#4285F4' },
];

const referrerBars = [
  { icon: 'https://cdn.worldvectorlogo.com/logos/behance-1.svg', height: 85, name: 'Behance' },
  { icon: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg', height: 100, name: 'Dribbble' },
  { icon: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg', height: 70, name: 'Google' },
  { icon: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg', height: 45, name: 'Instagram' },
];

export default function ChartsPanel(){
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('amount'); // 'amount', 'percent', 'name'
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc', 'desc'

  const sortedPlatforms = [...platforms].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc' 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    }
    if (sortBy === 'amount') {
      const aVal = parseInt(a.amount.replace(/[$,]/g, ''));
      const bVal = parseInt(b.amount.replace(/[$,]/g, ''));
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }
    if (sortBy === 'percent') {
      const aVal = parseInt(a.percent);
      const bVal = parseInt(b.percent);
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }
    return 0;
  });

  const handleSort = (type) => {
    if (sortBy === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder('desc');
    }
    setFilterOpen(false);
  };

  return (
    <motion.div 
      className="charts-panel"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Platform Stats */}
      <div className="platform-stats card">
        <div className="panel-header-row">
          <motion.button 
            className="sort-dropdown-btn"
            whileHover={{ backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4H14M4 8H12M6 12H10" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 4L5 7L8 4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.button>
          
          <motion.button 
            className="filter-btn-pill"
            whileHover={{ backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            Filters
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 4H12M4 7H10M6 10H8" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </motion.button>

          {/* Filter Dropdown */}
          {filterOpen && (
            <motion.div 
              className="filter-dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button 
                className={`filter-option ${sortBy === 'amount' ? 'active' : ''}`}
                onClick={() => handleSort('amount')}
              >
                Sort by Amount {sortBy === 'amount' && (sortOrder === 'desc' ? '↓' : '↑')}
              </button>
              <button 
                className={`filter-option ${sortBy === 'percent' ? 'active' : ''}`}
                onClick={() => handleSort('percent')}
              >
                Sort by Percent {sortBy === 'percent' && (sortOrder === 'desc' ? '↓' : '↑')}
              </button>
              <button 
                className={`filter-option ${sortBy === 'name' ? 'active' : ''}`}
                onClick={() => handleSort('name')}
              >
                Sort by Name {sortBy === 'name' && (sortOrder === 'desc' ? '↓' : '↑')}
              </button>
            </motion.div>
          )}
        </div>
        
        <div className="platform-list">
          {sortedPlatforms.map((p, i) => (
            <motion.div 
              key={p.name} 
              className="platform-row"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ backgroundColor: '#f9fafb' }}
            >
              <div className="platform-info">
                <span className="platform-icon-img">
                  <img src={p.icon} alt={p.name} />
                </span>
                <span className="platform-name">{p.name}</span>
              </div>
              <div className="platform-stats-values">
                <span className="platform-amount">{p.amount}</span>
                <span className="platform-percent">{p.percent}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Referrer Category Chart */}
      <div className="referrer-chart card">
        <div className="panel-header-row">
          <motion.button 
            className="sort-dropdown-btn"
            whileHover={{ backgroundColor: '#e5e5e5' }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 4V12M3 4L6 7M3 4L0 7M8 12V4M8 12L11 9M8 12L5 9M13 4V12M13 4L16 7M13 4L10 7" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 4L5 7L8 4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.button>
          
          <motion.button 
            className="filter-btn-pill"
            whileHover={{ backgroundColor: '#e5e5e5' }}
            whileTap={{ scale: 0.98 }}
          >
            Filters
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 4H12M4 7H10M6 10H8" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </motion.button>

          <motion.button 
            className="checkbox-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="14" height="14" rx="2" stroke="#9CA3AF" strokeWidth="1.3"/>
              <path d="M4 8L7 11L12 5" stroke="#9CA3AF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        <div className="referrer-bar-chart">
          {referrerBars.map((bar, i) => (
            <motion.div 
              key={bar.name}
              className="referrer-bar-container"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            >
              <div className="referrer-bar-icon">
                <img src={bar.icon} alt={bar.name} />
              </div>
              <div 
                className="referrer-bar striped" 
                style={{ height: `${bar.height}px` }}
              ></div>
            </motion.div>
          ))}
        </div>

        <div className="referrer-label">
          <span className="deals-text">Deals amount</span>
          <span className="sub-label">by referrer category <span className="dropdown-arrow">▾</span></span>
        </div>
      </div>
    </motion.div>
  );
}

export function PlatformValueChart() {
  const [activeTab, setActiveTab] = useState('Revenue');
  const [hoveredBar, setHoveredBar] = useState(null);
  
  const monthsData = [
    {
      month: 'Sep',
      bars: [
        { height: 55, striped: false },
        { height: 70, striped: true },
      ],
      value: '$6,901',
      valueColor: '#374151',
      icon: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg'
    },
    {
      month: 'Oct',
      bars: [
        { height: 85, striped: false },
        { height: 110, striped: true },
      ],
      value: '$11,035',
      valueColor: '#EC4899',
      icon: 'https://cdn.worldvectorlogo.com/logos/behance-1.svg'
    },
    {
      month: 'Nov',
      bars: [
        { height: 70, striped: false },
        { height: 90, striped: true },
      ],
      value: '$9,288',
      valueColor: '#10B981',
      icon: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg'
    },
  ];

  const yAxisLabels = ['$14,500', '$11,000', '$7,500', '$4,000'];

  const tabs = ['Revenue', 'Leads', 'W/L'];

  return (
    <motion.div 
      style={{
        background: '#F8F9FA',
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: '#FDF2F8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg" 
              alt="Dribbble" 
              style={{ width: '22px', height: '22px' }}
            />
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#6B7280' }}>Platform value</span>
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#111827', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Dribbble 
              <span style={{ fontSize: '10px', color: '#9CA3AF' }}>▾</span>
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          background: '#FFFFFF',
          borderRadius: '10px',
          padding: '4px',
          gap: '2px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}>
          {tabs.map(tab => (
            <motion.button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                border: 'none',
                background: activeTab === tab ? '#111827' : 'transparent',
                color: activeTab === tab ? '#FFFFFF' : '#6B7280',
                transition: 'all 0.2s ease',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', gap: '0', alignItems: 'stretch' }}>
        {/* Left Pink Stats Panel */}
        <motion.div 
          style={{
            background: '#DB2777',
            borderRadius: '0px 20px 0px 20px',
            padding: '16px',
            display: 'flex',
            gap: '12px',
            minWidth: '160px',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {/* Vertical "Average monthly" label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: '10px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.6)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              whiteSpace: 'nowrap',
            }}>Average monthly</span>
          </div>

          {/* Stats Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Revenue</span>
              <span style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF' }}>$18,552</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Leads</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>373</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>97/276</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Win/lose</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>16%</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>51/318</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chart Area */}
        <div style={{ flex: 1, display: 'flex', gap: '12px' }}>
          {/* Bars Section */}
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            paddingBottom: '50px',
            position: 'relative',
          }}>
            {/* Grid Lines */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: 0,
              right: '0',
              bottom: '50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              pointerEvents: 'none',
            }}>
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} style={{ width: '100%', height: '1px', background: '#E5E7EB' }} />
              ))}
            </div>

            {/* Bars */}
            {monthsData.map((monthData, monthIdx) => (
              <motion.div
                key={monthData.month}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  zIndex: 1,
                }}
                onMouseEnter={() => setHoveredBar(monthIdx)}
                onMouseLeave={() => setHoveredBar(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + monthIdx * 0.1 }}
              >
                {/* Value Label */}
                <motion.div
                  style={{
                    background: '#FDF2F8',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#DB2777',
                  }}
                  animate={{
                    scale: hoveredBar === monthIdx ? 1.1 : 1,
                    y: hoveredBar === monthIdx ? -3 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {monthData.value}
                </motion.div>

                {/* Bars */}
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
                  {monthData.bars.map((bar, barIdx) => (
                    <motion.div
                      key={barIdx}
                      style={{
                        width: '28px',
                        borderRadius: '6px 6px 0 0',
                        background: bar.striped 
                          ? `repeating-linear-gradient(-45deg, #F9A8D4, #F9A8D4 3px, #FBCFE8 3px, #FBCFE8 6px)`
                          : '#E5E7EB',
                        transformOrigin: 'bottom',
                      }}
                      initial={{ height: 0 }}
                      animate={{ 
                        height: bar.height,
                        filter: hoveredBar === monthIdx ? 'brightness(0.95)' : 'brightness(1)'
                      }}
                      transition={{ delay: 0.4 + monthIdx * 0.1 + barIdx * 0.05, duration: 0.5, ease: 'easeOut' }}
                      whileHover={{ filter: 'brightness(0.9)' }}
                    />
                  ))}
                </div>

                {/* Avatar */}
                <motion.div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '2px solid #F3F4F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '4px',
                  }}
                  whileHover={{ scale: 1.1, borderColor: '#EC4899' }}
                >
                  <img 
                    src={monthData.icon} 
                    alt={monthData.month}
                    style={{ width: '18px', height: '18px' }}
                  />
                </motion.div>

                {/* Month Label */}
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#9CA3AF' }}>{monthData.month}</span>
              </motion.div>
            ))}
          </div>

          {/* Y-Axis */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingBottom: '80px',
            paddingTop: '15px',
          }}>
            {yAxisLabels.map((label, idx) => (
              <motion.span
                key={label}
                style={{ fontSize: '11px', fontWeight: 500, color: '#9CA3AF' }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
