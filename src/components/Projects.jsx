import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Utensils, Heart, User,QrCode } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'Veg Hunt',
      description: 'A comprehensive vegetable restaurant review website that helps users discover and review vegetarian restaurants in their area. Features include restaurant listings, user reviews, ratings, and detailed information about menu items and pricing.',
      icon: Utensils,
      gradient: 'from-green-400 to-emerald-600',
      tags: ['HTML', 'Python', 'CSS', 'Javascript'],
      github: 'https://github.com/AishwaryaB777/Veg-Hunt',
      live: '#'
    },
    {
  title: 'QR Code Generator',
  description: 'A responsive and fast QR code generator that allows users to create and download QR codes for URLs, text, or custom data. Built with modern tools and a clean UI for a seamless experience.',
  icon: QrCode,
  gradient: 'from-indigo-500 to-purple-600',
  tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
  github: 'https://github.com/Agraja-P/QR-code-creator', // Replace with your actual GitHub repo URL
  live: '#' // Replace with your actual live demo link
}
,
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing my skills, projects, and experience. Built with modern React and advanced animations, featuring smooth interactions and a mobile-first design approach.',
      icon: User,
      gradient: 'from-purple-400 to-indigo-600',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/Agraja-P/Portfolio',
      live: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400">
            Some of the projects I've worked on
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-2xl card-hover group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects