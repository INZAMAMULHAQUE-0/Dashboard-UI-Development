import React from 'react';
import { motion } from 'motion/react';

// Platform data matching the image exactly
const platformsData = [
  { 
    name: 'Dribbble', 
    icon: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg',
    percent: '28.1%', 
    amount: '$44,072',
    bgColor: '#FDF2F8'
  },
  { 
    name: 'Instagram', 
    icon: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg',
    percent: '14.1%', 
    amount: '$22,114',
    bgColor: '#FFF7ED'
  },
  { 
    name: 'Google', 
    icon: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg',
    percent: '5.4%', 
    amount: '$8,469',
    bgColor: '#F0FDF4'
  },
  { 
    name: 'Other', 
    icon: null,
    percent: '7.1%', 
    amount: '$11,135',
    bgColor: '#F9FAFB'
  },
];

// Styles object for pixel-perfect match
const styles = {
  card: {
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  title: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#6B7280',
  },
  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  upBadge: {
    background: '#c3335e',
    padding: '4px 10px',
    borderRadius: '10px',
    fontSize: '12px',
    color: '#FFFFFF',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    height: '22px',
  },
  topAmount: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr',
    gap: '16px',
    alignItems: 'stretch',
  },
  dribbbleCard: {
    background: 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '140px',
  },
  dribbbleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dribbbleIcon: {
    width: '24px',
    height: '24px',
  },
  dribbbleName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
  },
  dribbbleStats: {
    marginTop: 'auto',
  },
  dribbblePercent: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111827',
    lineHeight: '1.1',
  },
  dribbbleAmount: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#10B981',
    marginTop: '2px',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    position: 'relative',
  },
  stripeBackground: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    width: '60%',
    background: 'repeating-linear-gradient(135deg, transparent, transparent 8px, rgba(249, 250, 251, 0.8) 8px, rgba(249, 250, 251, 0.8) 16px)',
    borderRadius: '12px',
    zIndex: 0,
  },
  platformCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '12px',
    background: '#FFFFFF',
    border: '1px solid #F3F4F6',
    position: 'relative',
    zIndex: 1,
  },
  platformCardBordered: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '12px',
    background: '#FFFFFF',
    border: '1px solid #E5E7EB',
    position: 'relative',
    zIndex: 1,
  },
  iconBadge: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  platformIcon: {
    width: '18px',
    height: '18px',
  },
  platformInfo: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  platformName: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#374151',
  },
  platformStats: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginLeft: 'auto',
  },
  percent: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#374151',
  },
  amount: {
    fontSize: '12px',
    color: '#9CA3AF',
  },
  bottomRow: {
    display: 'flex',
    gap: '8px',
    position: 'relative',
    zIndex: 1,
  },
  smallCard: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 10px',
    borderRadius: '10px',
    background: 'transparent',
  },
  metaIcon: {
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherLabel: {
    fontSize: '12px',
    color: '#6B7280',
    marginRight: '4px',
  },
};

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.3 }
  }),
};

export default function WorkWithPlatforms() {
  return (
    <motion.div
      style={styles.card}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.01, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.title}>Work with platforms</span>
        <div style={styles.badgeContainer}>
          <motion.span 
            style={styles.upBadge}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 2L8 6H2L5 2Z" fill="#FFFFFF"/>
            </svg>
            3
          </motion.span>
          <motion.div 
            style={{
              background: '#c3335e',
              padding: '4px 10px',
              borderRadius: '10px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span style={styles.topAmount}>$156,841</span>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div style={styles.content}>
        {/* Dribbble Large Card - Left */}
        <motion.div
          style={styles.dribbbleCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={styles.dribbbleHeader}>
            <img 
              src="https://png.pngtree.com/png-vector/20190110/ourlarge/pngtree-vector-basket-ball-icon-png-image_312695.jpg" 
              alt="Dribbble" 
              style={styles.dribbbleIcon}
            />
            <span style={styles.dribbbleName}>Dribbble</span>
          </div>
          <div style={styles.dribbbleStats}>
            <div style={styles.dribbblePercent}>45.3%</div>
            <div style={styles.dribbbleAmount}>$71,048</div>
          </div>
        </motion.div>

        {/* Right Section with Platforms */}
        <div style={styles.rightSection}>
          {/* Striped Background Accent */}
          <div style={styles.stripeBackground}></div>

          {/* Instagram Row - Bordered */}
          <motion.div
            style={styles.platformCardBordered}
            custom={0}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >
            <div style={{ ...styles.iconBadge, background: '#FFF7ED' }}>
              <img 
                src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" 
                alt="Instagram" 
                style={styles.platformIcon}
              />
            </div>
            <span style={styles.platformName}>Instagram</span>
            <div style={styles.platformStats}>
              <span style={styles.percent}>28.1%</span>
              <span style={styles.amount}>$44,072</span>
            </div>
          </motion.div>

          {/* Google Row */}
          <motion.div
            style={{ ...styles.platformCard, background: 'transparent', border: 'none', padding: '6px 0' }}
            custom={1}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ ...styles.iconBadge, background: '#F0FDF4' }}>
              <img 
                src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" 
                alt="Google" 
                style={styles.platformIcon}
              />
            </div>
            <span style={styles.platformName}>Google</span>
            <div style={styles.platformStats}>
              <span style={styles.percent}>14.1%</span>
              <span style={styles.amount}>$22,114</span>
            </div>
          </motion.div>

          {/* Bottom Row: Meta and Other */}
          <div style={styles.bottomRow}>
            {/* Meta */}
            <motion.div
              style={styles.smallCard}
              custom={2}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <div style={styles.metaIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="6" cy="9" r="3" fill="#374151"/>
                  <circle cx="12" cy="9" r="3" fill="#374151"/>
                  <path d="M6 6C6 4.5 7.5 3 9 3C10.5 3 12 4.5 12 6" stroke="#374151" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span style={styles.percent}>5.4%</span>
              <span style={styles.amount}>$8,469</span>
            </motion.div>

            {/* Other */}
            <motion.div
              style={styles.smallCard}
              custom={3}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <div style={styles.metaIcon}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="3" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span style={styles.otherLabel}>Other</span>
              <span style={styles.percent}>7.1%</span>
              <span style={styles.amount}>$11,135</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
