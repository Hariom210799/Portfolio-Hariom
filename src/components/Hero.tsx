'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import * as LucideIcons from 'lucide-react';

export default function Hero({ onTabChange }: { onTabChange?: (tab: string) => void }) {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % portfolioData.solutionFlow.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Brain: <LucideIcons.Brain className="w-6 h-6" />,
      Palette: <LucideIcons.Palette className="w-6 h-6" />,
      Code2: <LucideIcons.Code2 className="w-6 h-6" />,
      Rocket: <LucideIcons.Rocket className="w-6 h-6" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <section className="min-h-fit flex items-center justify-center px-6 py-14 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: About Me */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 justify-center"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  {portfolioData.headline}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
                {portfolioData.tagline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-300 max-w-md leading-relaxed"
            >
              {portfolioData.subheadline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <button
                onClick={() => onTabChange?.('projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={portfolioData.links.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 text-white font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </motion.div>

            {/* Social Links Preview */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-2">
              <a
                href={portfolioData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href={portfolioData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${portfolioData.links.email}`}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Deploy Card - Auto Rotating */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="group relative w-full max-w-md">
              {/* Glow background */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur transition-all duration-300" />

              {/* Card */}
              <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 space-y-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                {/* Header Section */}
                <div className="text-center space-y-2 mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                      How I Build Solutions
                    </span>
                  </h2>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    {/* Header with Icon - Side by Side */}
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="relative w-20 h-20 flex-shrink-0"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-40" />
                        <div className="relative w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/50 text-blue-300">
                          {getIcon(portfolioData.solutionFlow[activeStep].iconName)}
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <div className="text-sm font-semibold text-blue-400 mb-1">
                          Step {activeStep + 1} of {portfolioData.solutionFlow.length}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {portfolioData.solutionFlow[activeStep].title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {portfolioData.solutionFlow[activeStep].description}
                        </p>
                      </div>
                    </div>

                    {/* Detailed Steps - Dynamic based on step */}
                    <div className="space-y-3 border-t border-white/10 pt-6">
                      <h4 className="text-sm font-semibold text-gray-400">Key Focus Areas</h4>
                      <div className="space-y-2">
                        {activeStep === 0 && (
                          <>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Requirements analysis
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              User research
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Technical planning
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Risk assessment
                            </motion.div>
                          </>
                        )}
                        {activeStep === 1 && (
                          <>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              System architecture
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              UI/UX design
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Database schema
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              API design
                            </motion.div>
                          </>
                        )}
                        {activeStep === 2 && (
                          <>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Clean code practices
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Testing & QA
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Performance optimization
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Documentation
                            </motion.div>
                          </>
                        )}
                        {activeStep === 3 && (
                          <>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Seamless deployment pipelines
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Monitoring and observability
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Zero-downtime releases
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 text-sm text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              Continuous improvement feedback
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
