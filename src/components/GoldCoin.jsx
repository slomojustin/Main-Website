import { motion } from 'framer-motion'

const GoldCoin = ({ size = 60 }) => {
  return (
    <motion.div
      className="relative inline-block"
      animate={{ 
        rotateY: [0, 360],
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d'
      }}
    >
      <img
        src="/gold-coin.png"
        alt="Gold Coin"
        width={size}
        height={size}
        style={{ 
          filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.6))',
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </motion.div>
  )
}

export default GoldCoin
