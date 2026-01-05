'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const wiproImpact = [
    'Developed and enhanced responsive UI components using modern JavaScript frameworks',
    'Integrated REST APIs and handled dynamic data flows within application modules',
    'Worked closely with backend teams to align API contracts and UI behavior',
    'Participated in requirement discussions, task breakdown, and sprint planning',
    'Used Postman for API testing and validation during development cycles',
    'Collaborated through Jira for task tracking, issue resolution, and sprint workflows',
    'Delivered features and fixes following enterprise development and review standards',
    'Worked on code refactoring and cleanup to improve readability and maintainability',
    'Followed structured development processes including code reviews and approval flows',
    'Assisted in debugging production and pre-production issues in coordination with team members',
  ];

  return (
    <section className="px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="relative">
          {/* Two Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-20"
          >
            {/* Left Card - Entrepreneurship */}
            <motion.div variants={itemVariants} className="group h-full">
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300" />
                <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-cyan-500/30 p-6 hover:border-cyan-500/50 hover:bg-white/12 transition-all duration-300 h-full flex flex-col">
                  {/* Card Node */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50" />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center border border-cyan-300/50">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    Entrepreneurship
                  </h3>
                  <p className="text-cyan-300 font-semibold text-sm mb-4 text-center">
                    Cafe Caffea
                  </p>
                  <p className="text-gray-400 text-xs mb-4 text-center leading-relaxed">
                    Founder / Operator · Product, Operations & Technology Ownership
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 text-center leading-relaxed">
                    I founded and operate Cafe Caffea, managing real-world business operations, people coordination, and decision-making. Alongside running the business, I identified operational gaps and independently designed and built a supporting digital system to improve efficiency, visibility, and control.
                  </p>

                  {/* Experience Highlights */}
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {[
                      'Owned end-to-end responsibility for planning, execution, and continuous improvement of Cafe operations',
                      'Handled operational decision-making, issue resolution, and coordination across daily workflows',
                      'Analyzed real business pain points and translated them into product requirements',
                      'Designed system flows and user journeys based on actual customer and staff usage scenarios',
                      'Built a full-stack web platform to support ordering, menu management, and admin workflows',
                      'Implemented role-based access patterns to separate customer-facing and admin functionality',
                      'Deployed, maintained, and iterated the application while managing business operations',
                      'Balanced technical development with business ownership, prioritization, and time management',
                    ].map((bullet, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-2 text-gray-300 text-sm leading-relaxed"
                      >
                        <span className="text-cyan-400 flex-shrink-0 mt-0.5">✓</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                      Tech Stack
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3">
                      React · Node.js · Express · MongoDB · REST APIs · Authentication · Vercel
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Hands-on entrepreneurship combined with full-stack product development
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card - Wipro */}
            <motion.div variants={itemVariants} className="group h-full">
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300" />
                <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-blue-500/30 p-6 hover:border-blue-500/50 hover:bg-white/12 transition-all duration-300 h-full flex flex-col">
                  {/* Card Node */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-lg opacity-50" />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center border border-blue-300/50">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    Project Engineer
                  </h3>
                  <p className="text-blue-300 font-semibold text-sm mb-4 text-center">
                    Wipro Ltd.
                  </p>
                  <p className="text-gray-400 text-xs mb-4 text-center leading-relaxed">
                    Pune, India · Aug 2021 – Jan 2024
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 text-center leading-relaxed">
                    Worked as a Project Engineer in an enterprise environment, contributing to front-end development, API integration, and UI improvements as part of cross-functional teams. Focused on building maintainable features, improving user experience, and delivering changes through structured development processes.
                  </p>

                  {/* Experience Highlights */}
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {wiproImpact.map((bullet, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-2 text-gray-300 text-sm leading-relaxed"
                      >
                        <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wide">
                      Tech Stack
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      React.js · JavaScript · HTML5 · CSS3 · REST APIs · Postman · Jira · Figma
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
