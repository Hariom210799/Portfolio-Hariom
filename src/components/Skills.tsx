'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
}

interface SkillsData {
  [category: string]: Skill[];
}

const skillsData: SkillsData = {
  Languages: [
    { name: 'Java', proficiency: 'expert' },
    { name: 'Python', proficiency: 'expert' },
    { name: 'C', proficiency: 'advanced' },
    { name: 'C++', proficiency: 'advanced' },
    { name: 'C#', proficiency: 'advanced' },
    { name: 'JavaScript', proficiency: 'expert' },
    { name: 'TypeScript', proficiency: 'advanced' },
    { name: 'SQL', proficiency: 'expert' },
    { name: 'Go', proficiency: 'intermediate' },
  ],
  'Frameworks & Libraries': [
    { name: 'Spring Boot', proficiency: 'expert' },
    { name: 'Hibernate', proficiency: 'advanced' },
    { name: 'JPA', proficiency: 'advanced' },
    { name: 'React.js', proficiency: 'expert' },
    { name: 'Angular', proficiency: 'advanced' },
    { name: 'Node.js', proficiency: 'expert' },
    { name: 'Express.js', proficiency: 'expert' },
    { name: 'REST APIs', proficiency: 'expert' },
    { name: 'Flask', proficiency: 'intermediate' },
    { name: 'Pandas', proficiency: 'advanced' },
    { name: 'NumPy', proficiency: 'advanced' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', proficiency: 'advanced' },
    { name: 'Docker', proficiency: 'expert' },
    { name: 'Jenkins', proficiency: 'advanced' },
    { name: 'Maven', proficiency: 'expert' },
    { name: 'Docker Compose', proficiency: 'advanced' },
  ],
  Databases: [
    { name: 'MySQL', proficiency: 'expert' },
    { name: 'PostgreSQL', proficiency: 'advanced' },
    { name: 'MongoDB', proficiency: 'expert' },
    { name: 'Redis', proficiency: 'advanced' },
    { name: 'SQLite', proficiency: 'intermediate' },
    { name: 'DynamoDB', proficiency: 'intermediate' },
  ],
  Tools: [
    { name: 'Visual Studio', proficiency: 'expert' },
    { name: 'Postman', proficiency: 'expert' },
    { name: 'Swagger UI', proficiency: 'advanced' },
    { name: 'GitHub', proficiency: 'expert' },
    { name: 'GitLab', proficiency: 'advanced' },
    { name: 'Jira', proficiency: 'advanced' },
    { name: 'Confluence', proficiency: 'intermediate' },
    { name: 'Slack', proficiency: 'advanced' },
    { name: 'Kubernetes', proficiency: 'intermediate' },
  ],
};

const skillIcons: Record<string, string> = {
  Java: '☕',
  Python: '🐍',
  C: '©️',
  'C++': '➕',
  'C#': '#️⃣',
  JavaScript: '🟨',
  TypeScript: '🔵',
  SQL: '🗄️',
  Go: '🐹',
  'Spring Boot': '🍃',
  Hibernate: '🛏️',
  JPA: '📦',
  'React.js': '⚛️',
  Angular: '🔴',
  'Node.js': '🟩',
  'Express.js': '⚫',
  'REST APIs': '🔌',
  Flask: '🧪',
  TensorFlow: '🔶',
  Pandas: '🐼',
  NumPy: '🔢',
  AWS: '☁️',
  Docker: '🐳',
  Jenkins: '👷',
  Maven: '📦',
  Terraform: '🏗️',
  'Docker Compose': '🎼',
  MySQL: '🐬',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  Redis: '🔴',
  SQLite: '📁',
  Elasticsearch: '🔍',
  DynamoDB: '⚡',
  Cassandra: '🔷',
  'Visual Studio': '💜',
  Postman: '🔶',
  'Swagger UI': '📚',
  GitHub: '⚫',
  GitLab: '🟠',
  Jira: '🔵',
  Confluence: '📖',
  Slack: '💜',
  Kubernetes: '☸️',
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Languages');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Object.keys(skillsData);

  const filteredSkills = useMemo(() => {
    const categorySkills = skillsData[activeTab] || [];
    if (!searchQuery.trim()) return categorySkills;
    return categorySkills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="px-6 bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-gray-800">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setSearchQuery('');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                activeTab === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/20'
              }`}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <div className="relative rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-6 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{skillIcons[skill.name] || '🔹'}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-400 capitalize">
                        {skill.proficiency}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No skills found matching &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
