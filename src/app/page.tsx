'use client';

import { useState } from 'react';
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    //ohexsep
    { id: 'overview', label: 'Overview' },
    { id: 'contact', label: 'Hire me' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <>
      {/* Tab Navigation - Fixed at top as main navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            H
          </div>

          {/* Tabs in center */}
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex flex-col min-h-screen bg-black text-white pt-20">
        <main className="flex-1 overflow-hidden">
          {/* Tab Content */}
          <div>
            {activeTab === 'overview' && <Hero onTabChange={setActiveTab} />}
            {activeTab === 'projects' && <Projects />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'experience' && <Experience />}
            {activeTab === 'education' && <Education />}
            {activeTab === 'contact' && <Contact />}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm py-2 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              © 2026 {process.env.NEXT_PUBLIC_AUTHOR_NAME || "Hariom"}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Crafted with passion using Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
