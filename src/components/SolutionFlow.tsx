'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import * as LucideIcons from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SolutionFlow() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % portfolioData.solutionFlow.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Brain: <LucideIcons.Brain className="w-8 h-8" />,
      Palette: <LucideIcons.Palette className="w-8 h-8" />,
      Code2: <LucideIcons.Code2 className="w-8 h-8" />,
      Rocket: <LucideIcons.Rocket className="w-8 h-8" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Detailed Deploy Card - Top - Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="group relative">
            {/* Glow background */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur transition-all duration-300" />

            {/* Card */}
            <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-10 space-y-8 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
              {/* Header Section */}
              <div className="text-center space-y-2 mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                    How I Build Solutions
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  My process for crafting exceptional products that solve real problems
                </p>
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
                  {/* Header with Icon */}
                  <div className="space-y-4">
                    <motion.div
                      className="relative w-24 h-24"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-40" />
                      <div className="relative w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/50 text-blue-300">
                        {getIcon(portfolioData.solutionFlow[activeStep].iconName)}
                      </div>
                    </motion.div>

                    <div>
                      <div className="text-sm font-semibold text-blue-400 mb-2">
                        Step {activeStep + 1} of {portfolioData.solutionFlow.length}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {portfolioData.solutionFlow[activeStep].title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {portfolioData.solutionFlow[activeStep].description}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Steps */}
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

                  {/* Progress indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>Progress</span>
                      <span>{Math.round(((activeStep + 1) / portfolioData.solutionFlow.length) * 100)}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeStep + 1) / portfolioData.solutionFlow.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  onClick={() => setActiveStep((prev) => (prev - 1 + portfolioData.solutionFlow.length) % portfolioData.solutionFlow.length)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Step Indicators */}
                <div className="flex gap-2">
                  {portfolioData.solutionFlow.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeStep
                          ? 'bg-blue-500 w-8'
                          : 'bg-white/20 w-2 hover:bg-white/30'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % portfolioData.solutionFlow.length)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
