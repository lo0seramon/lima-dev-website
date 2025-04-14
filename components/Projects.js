import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ title, description, tags, image, links }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/50 z-10"></div>
        <div className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition-transform duration-500">
          {/* Replace with actual image */}
          <div className="w-full h-full flex items-center justify-center text-dark/30">
            Project Image
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-dark/60 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/5 text-primary/80 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark/60 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span>{link.text}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with cart, checkout, and admin dashboard",
      tags: ["Next.js", "Node.js", "MongoDB"],
      links: [
        { text: "Live Demo", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tags: ["React", "Firebase", "Tailwind"],
      links: [
        { text: "Live Demo", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio website",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      links: [
        { text: "Live Demo", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    }
  ];

  const filters = ['all', 'web', 'mobile', 'design'];

  return (
    <section id="projects" className="py-20 bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-dark/60">
              A selection of my recent work
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex gap-4 p-1 bg-white rounded-full shadow-sm">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full capitalize transition-colors ${
                    filter === f
                      ? 'bg-primary text-white'
                      : 'text-dark/60 hover:text-dark'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;