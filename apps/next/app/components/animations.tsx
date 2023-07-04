'use client'
import { motion } from 'framer-motion'
export const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)

export const FadeOut = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)
