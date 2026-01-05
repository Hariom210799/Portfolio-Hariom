'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const mastersFocusAreas = [
    'Algorithms',
    'Database Systems',
    'Operating Systems',
    'Advanced Software Engineering',
    'AI/ML',
  ];

  const bachelorCoursework = [
    'Data Structures',
    'Algorithms',
    'DBMS',
    'Operating Systems',
    'Networking',
    'Discrete Mathematics',
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
  ];

  return (
    <section className="px-6 bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        {/* Spotlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Master's Degree - Primary Spotlight */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300" />
            <div className="relative rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 border border-purple-500/30 p-8 md:p-10 hover:border-purple-500/50 transition-all duration-300">
              {/* Badge */}
              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold">
                Current
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-purple-300 font-semibold text-lg">Pace University</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-400 text-xs mb-1">GPA</p>
                  <p className="text-white text-xl font-bold">4.0</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-400 text-xs mb-1">Status</p>
                  <p className="text-green-400 font-semibold">Ongoing</p>
                </div>
                <div className="col-span-2 md:col-span-2 bg-white/5 rounded-lg p-4 border border-white/10 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white font-semibold">New York, USA</p>
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div>
                <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide">
                  Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mastersFocusAreas.map((area, index) => (
                    <motion.span
                      key={area}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 text-sm hover:border-purple-400/60 transition-colors"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bachelor's Degree - Secondary Spotlight */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
            <div className="relative rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/20 p-8 md:p-10 hover:border-blue-500/40 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Bachelor of Technology in Computer Science & Engineering
                  </h3>
                  <p className="text-blue-300 font-semibold text-lg">MGM&apos;s College of Engineering</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-400 text-xs mb-1">GPA</p>
                  <p className="text-white text-xl font-bold">8.46</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs">Duration</p>
                    <p className="text-white font-semibold text-sm">2017 – 2021</p>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-2 bg-white/5 rounded-lg p-4 border border-white/10 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white font-semibold">Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wide">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {bachelorCoursework.map((course, index) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-300 text-sm hover:border-blue-400/60 transition-colors"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          {/* Removed */}
        </motion.div>
      </div>
    </section>
  );
}

