'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

type Project = typeof portfolioData.projects[0];

interface ModalState {
  isOpen: boolean;
  project: Project | null;
}

export default function Projects() {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    project: null,
  });

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
      transition: { duration: 0.4 },
    },
  };

  const openModal = (project: Project) => {
    setModal({
      isOpen: true,
      project,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      project: null,
    });
  };

  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of projects I&apos;ve built that showcase my skills in full-stack
            development and AI integration
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative h-full">
                {/* Glow background */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />

                {/* Card */}
                <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden h-full flex flex-col transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                  {/* Image Section */}
                  <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center scrollbar scrollbar-thumb-blue-500 scrollbar-track-white/10">
                    {project.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* Gradient placeholder background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-blue-800/30" />

                        {/* Grid overlay */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              'linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        />

                        {/* Icon placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="m4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col gap-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                      {(project as any).oneLiner || (project as any).description || ''}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {((project as any).techStackText
                        ? (project as any).techStackText.split(' · ')
                        : (project as any).techStack
                      ).map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/50 text-xs text-blue-300 hover:bg-blue-500/30 hover:border-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links and Arrow */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex gap-3">
                        <a
                          href={(project as any).links?.repoUrl || (project as any).repoUrl || ''}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-blue-400 transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                          title="GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        {((project as any).links?.liveUrl || (project as any).liveUrl) && (
                          <a
                            href={(project as any).links?.liveUrl || (project as any).liveUrl || ''}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-blue-400 transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>

                      {/* Arrow Button */}
                      <motion.button
                        whileHover={{ x: 4 }}
                        onClick={() => openModal(project)}
                        className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for project details */}
        <AnimatePresence>
          {modal.isOpen && modal.project && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
              >
                <div className="rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 shadow-2xl">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                        {modal.project.title}
                      </h2>
                      <p className="text-gray-400 text-sm">Project Overview</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-gray-300 hover:text-white flex-shrink-0"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">Description</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {(modal.project as any).oneLiner || (modal.project as any).description || ''}
                    </p>
                  </div>

                  {/* Highlights / What I Built */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">
                      {(modal.project as any).whatIBuilt ? 'What I Built' : 'Key Highlights'}
                    </h3>
                    <ul className="space-y-2">
                      {((modal.project as any).whatIBuilt
                        ? (modal.project as any).whatIBuilt
                        : (modal.project as any).highlights
                      ).map((item: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-blue-400 mt-1 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {((modal.project as any).techStackText
                        ? (modal.project as any).techStackText.split(' · ')
                        : (modal.project as any).techStack
                      ).map((tech: string, index: number) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/50 text-sm text-blue-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-6 border-t border-white/10">
                    <a
                      href={(modal.project as any).links?.repoUrl || (modal.project as any).repoUrl || ''}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </a>
                    {((modal.project as any).links?.liveUrl || (modal.project as any).liveUrl) && (
                      <a
                        href={(modal.project as any).links?.liveUrl || (modal.project as any).liveUrl || ''}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
