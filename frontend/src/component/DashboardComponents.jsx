import React, { useState } from 'react';
import { motion } from 'motion/react';
import WorkWithPlatforms from './WorkWithPlatforms.jsx';

// ========== TOPBAR TITLE COMPONENT ==========

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

// ========== STATS CARD COMPONENTS ==========

export function UserTabsBar() {
  return (
    <div className="user-tabs-bar">
      <div className="user-tabs-left">
        <motion.button 
          className="add-user-btn"
          whileHover={{ scale: 1.05, backgroundColor: '#111827' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Add" className="tab-icon" />
        </motion.button>
        
        <motion.div 
          className="user-tab"
          whileHover={{ backgroundColor: '#111827' }}
        >
          <img className="user-tab-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Armin" />
          <span className="user-tab-name">Armin A.</span>
        </motion.div>
        
        <motion.div 
          className="user-tab active"
          whileHover={{ backgroundColor: '#111827' }}
        >
          <img className="user-tab-avatar" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Eren" />
          <span className="user-tab-name">Eren Y.</span>
        </motion.div>
        
        <motion.div 
          className="user-tab highlight"
          whileHover={{ backgroundColor: '#111827' }}
        >
          <img className="user-tab-avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mikasa" />
          <span className="user-tab-name">Mikasa A.</span>
        </motion.div>
        
        <motion.div 
          className="user-tab icon-only"
          whileHover={{ scale: 1.05, backgroundColor: '#fff' }}
        >
          <div className="user-tab-icon">C</div>
        </motion.div>
      </div>
      
      <div className="user-tabs-right">
        <motion.button 
          className="tab-action-btn"
          whileHover={{ backgroundColor: '#111827' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/681/681494.png" alt="Users" className="tab-icon" />
        </motion.button>
        
        <motion.button 
          className="tab-action-btn"
          whileHover={{ backgroundColor: '#111827' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/724/724933.png" alt="Download" className="tab-icon" />
        </motion.button>
        
        <motion.button 
          className="tab-action-btn"
          whileHover={{ backgroundColor: '#111827' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/724/724954.png" alt="Share" className="tab-icon" />
        </motion.button>
      </div>
    </div>
  );
}

export function RevenueCard() {
  return (
    <div className="revenue-row">
      <motion.div 
        className="revenue-card-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="revenue-header">
          <span className="revenue-label">Revenue</span>
        </div>
        <div className="revenue-amount">
          <span className="amount">$528,976</span>
          <span className="cents">.82</span>
          <span className="badge-red">↑ 7.9%</span>
          <span className="badge-red">$27,335.09</span>
        </div>
        <div className="revenue-compare">
          vs prev. $501,641.73  Jun 1 - Aug 31, 2023 ▾
        </div>
      </motion.div>

      <div className="top-stats-row">
        {/* Top Sales */}
        <motion.div 
          className="top-stat-card light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ backgroundColor: '#111827', color: '#fff' }}
        >
          <div className="top-stat-label">Top sales</div>
          <div className="top-stat-value">72</div>
          <div className="top-stat-user">
            <span className="user-dot teal"></span>
            Mikasa
            <span className="arrow">›</span>
          </div>
        </motion.div>

        {/* Best Deal - Dark Card */}
        <motion.div 
          className="top-stat-card dark"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          whileHover={{ backgroundColor: '#fff', color: '#111827' }}
        >
          <div className="top-stat-header">
            <span className="top-stat-label">Best deal</span>
            <span className="star-icon">☆</span>
          </div>
          <div className="top-stat-value">$42,300</div>
          <div className="top-stat-company">
            Rolf Inc.
            <motion.span 
              className="arrow-btn"
              whileHover={{ scale: 1.1 }}
            >›</motion.span>
          </div>
        </motion.div>

        {/* Deals */}
        <motion.div 
          className="top-stat-card light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ backgroundColor: '#111827', color: '#fff' }}
        >
          <div className="top-stat-label">Deals</div>
          <div className="top-stat-value">266</div>
          <div className="top-stat-sub">
            <span className="diamond">◇</span> 5
          </div>
        </motion.div>

        {/* Value - Highlighted */}
        <motion.div 
          className="top-stat-card light highlight-pink"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          whileHover={{ backgroundColor: '#111827', color: '#fff', borderColor: '#111827' }}
        >
          <div className="top-stat-label">Value</div>
          <div className="top-stat-badge pink">528k</div>
          <div className="top-stat-change pink">
            <span className="arrow-up">⬆</span> 7.9%
          </div>
        </motion.div>

        {/* Win Rate */}
        <motion.div 
          className="top-stat-card light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ backgroundColor: '#111827', color: '#fff' }}
        >
          <div className="top-stat-label">Win rate</div>
          <div className="top-stat-value muted">44%</div>
          <div className="top-stat-change muted">
            <span className="arrow-up">⬆</span> 1.2%
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function UserStatsBar() {
  return (
    <div className="user-stats-container">
      <motion.div 
        className="user-stats-bar"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="user-stat-card">
          <img className="user-avatar-img" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User A" />
          <span className="stat-amount">$209,633</span>
          <span className="stat-percent">39.63%</span>
        </div>
        <div className="user-stat-card">
          <img className="user-avatar-img" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User E" />
          <span className="stat-amount">$156,841</span>
          <span className="stat-percent">29.65%</span>
        </div>
        <div className="user-stat-card">
          <img className="user-avatar-img" src="https://randomuser.me/api/portraits/women/68.jpg" alt="User M" />
          <span className="stat-amount">$117,115</span>
          <span className="stat-percent">22.14%</span>
        </div>
        <div className="user-stat-card">
          <img className="user-avatar-img" src="https://randomuser.me/api/portraits/men/75.jpg" alt="User C" />
          <span className="stat-amount">$45,386</span>
          <span className="stat-percent">8.58%</span>
        </div>
      </motion.div>

      <div className="details-btn-wrapper">
        <motion.button 
          className="details-btn"
          whileHover={{ scale: 1.05, backgroundColor: '#333333' }}
          whileTap={{ scale: 0.95 }}
        >Details</motion.button>
      </div>
    </div>
  );
}

export function SmallStatCard({ title, value, subtitle, highlight, delay = 0, icon }) {
  return (
    <motion.div 
      className={`stat-card-small ${highlight ? 'highlight' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}
    >
      <div className="stat-title">{title} {icon && <span className="stat-icon">{icon}</span>}</div>
      <div className="stat-value">{value}</div>
      {subtitle && <div className="stat-subtitle">{subtitle}</div>}
    </motion.div>
  );
}

export function StatsCard({title, value, subtitle, small, delay = 0}){
  return (
    <motion.div 
      className={`card ${small? 'small-card':''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        transition: { duration: 0.2 }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div style={{fontSize:12,color:'#6B7280'}}>{title}</div>
      <motion.div 
        style={{fontSize:20,fontWeight:700,marginTop:6}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >{value}</motion.div>
      {subtitle && <div style={{fontSize:12,color:'#9CA3AF',marginTop:8}}>{subtitle}</div>}
    </motion.div>
  )
}

// ========== REPORTS PANEL COMPONENTS ==========

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

// export function ReportsPanel(){
//   return (
//     <motion.aside 
//       className="reports-panel-full"
//       initial={{ x: 100, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Sales Table */}
//       <div className="sales-table card">
//         <div className="table-header">
//           <span>Sales</span>
//           <span>Revenue</span>
//           <span>Leads</span>
//           <span>KPI</span>
//           <span>W/L</span>
//         </div>
//         {salesData.map((user, i) => (
//           <motion.div 
//             key={user.name}
//             className={`table-row ${user.highlight ? 'highlight' : ''}`}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 + i * 0.1 }}
//             whileHover={{ backgroundColor: '#fafafa' }}
//           >
//             <div className="user-cell">
//               <div className="avatar-small" style={{ backgroundColor: user.color }}>{user.avatar}</div>
//               <span>{user.name}</span>
//             </div>
//             <span className="revenue">{user.revenue}</span>
//             <div className="metric">
//               <span className="badge-num" style={{ backgroundColor: user.highlight ? '#10B981' : '#F59E0B' }}>{user.sales}</span>
//               <span>{user.leads}</span>
//             </div>
//             <span>{user.kpi}</span>
//             <div className="wl">
//               <span>{user.percent}</span>
//               <span className="badge-num green">{user.w}</span>
//               <span>{user.l}</span>
//             </div>
//             <motion.button 
//               className="expand-btn"
//               whileHover={{ scale: 1.2 }}
//             >{user.highlight ? '🔼' : '🔽'}</motion.button>
//           </motion.div>
//         ))}
        
//         <div className="badges-row">
//           {badges.map((b, i) => (
//             <motion.span 
//               key={b.label} 
//               className="badge-tag"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 + i * 0.1 }}
//             >{b.label} {b.icon}</motion.span>
//           ))}
//         </div>
//       </div>

//       {/* Work with platforms */}
//       <div className="platforms-section card">
//         <div className="section-title">Work with platforms</div>
//         <div className="pie-container">
//           <div className="pie-chart">
//             <div className="pie-center">
//               <div className="pie-percent">45.3%</div>
//               <div className="pie-amount">$71,048</div>
//             </div>
//           </div>
//           <div className="pie-legend">
//             {pieData.map((item, i) => (
//               <motion.div 
//                 key={item.name}
//                 className="legend-item"
//                 initial={{ opacity: 0, x: 10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.6 + i * 0.1 }}
//               >
//                 <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
//                 <span className="legend-name">{item.name}</span>
//                 <span className="legend-percent">{item.percent}</span>
//                 <span className="legend-amount">{item.amount}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         <div className="top-value">
//           <span className="top-badge">🏆 3</span>
//           <span className="top-amount">$156,841</span>
//         </div>
//       </div>

//       {/* Sales Dynamic */}
//       <div className="sales-dynamic card">
//         <div className="section-title">Sales dynamic</div>
//         <div className="sparkline-container">
//           <div className="week-labels">
//             {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11'].map(w => (
//               <span key={w}>{w}</span>
//             ))}
//           </div>
//           <motion.div 
//             className="sparkline"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <svg viewBox="0 0 300 50" className="sparkline-svg">
//               <path 
//                 d="M0,40 L30,35 L60,38 L90,30 L120,25 L150,20 L180,22 L210,15 L240,18 L270,10 L300,5" 
//                 fill="none" 
//                 stroke="#10B981" 
//                 strokeWidth="2"
//               />
//               <path 
//                 d="M0,40 L30,35 L60,38 L90,30 L120,25 L150,20 L180,22 L210,15 L240,18 L270,10 L300,5 L300,50 L0,50 Z" 
//                 fill="url(#gradient)" 
//                 opacity="0.2"
//               />
//               <defs>
//                 <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#10B981" />
//                   <stop offset="100%" stopColor="transparent" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom User */}
//       <motion.div 
//         className="bottom-user card"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//       >
//         <div className="avatar-small purple">E</div>
//         <span className="user-name">Eren Y.</span>
//         <span className="user-revenue">$117,115</span>
//         <span className="badge-num orange">22</span>
//         <span>84</span>
//         <span>0.79</span>
//         <span>32%</span>
//         <span className="badge-num green">7</span>
//         <span>15</span>
//       </motion.div>
//     </motion.aside>
//   );
// }

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
            <span className="badge-num green">12</span>
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
            <span className="badge-num teal">54</span>
            <span style={{ color: '#6B7280' }}>103</span>
          </div>
          <span className="kpi-value">0.89</span>
          <div className="wl">
            <span className="wl-percent">39%</span>
            <span className="badge-num green">21</span>
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
              <circle cx="12" cy="12" r="11" fill="#14B8A6" />
              <path d="M8 10L12 14L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
        
        <div className="badges-row">
          {badges.map((b, i) => (
            <motion.span 
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
