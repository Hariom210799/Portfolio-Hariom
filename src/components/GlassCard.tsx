'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  title,
  icon,
  children,
  className = '',
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with icon and title */}
        {(icon || title) && (
          <div className="flex items-center gap-3 mb-4">
            {icon && <div className="text-blue-400 text-xl">{icon}</div>}
            {title && (
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            )}
          </div>
        )}

        {/* Children content */}
        <div className="text-gray-300">{children}</div>
      </div>
    </motion.div>
  );
}
