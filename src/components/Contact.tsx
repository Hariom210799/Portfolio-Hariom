'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.links.email,
      href: `mailto:${portfolioData.links.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: portfolioData.links.github,
      href: portfolioData.links.github,
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: portfolioData.links.linkedin,
      href: portfolioData.links.linkedin,
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life.
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        {/* Centered Contact Info Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl"
          >
            <div className="group relative">
              {/* Glow background */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-15 blur transition-all duration-300" />

              {/* Card */}
              <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {portfolioData.name}
                </h3>
                <p className="text-gray-400 mb-6">{portfolioData.tagline}</p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactLinks.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="group/link flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${contact.color} text-white`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-400 group-hover/link:text-gray-300 transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-white font-semibold truncate group-hover/link:text-blue-300 transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-white/10" />

                {/* Info */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Let&apos;s Talk!</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I&apos;m always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hello, feel free to get in touch!
                  </p>
    
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
