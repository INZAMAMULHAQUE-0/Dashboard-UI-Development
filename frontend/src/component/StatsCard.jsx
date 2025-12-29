import React from 'react';
import { motion } from 'motion/react';

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

export default function StatsCard({title, value, subtitle, small, delay = 0}){
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
