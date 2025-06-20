import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import TypedText from './TypedText'

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-purple-400 text-lg font-medium">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          Hello, I'm{' '}
          <span className="gradient-text animate-gradient bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
            Agraja
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8 h-16">
          <TypedText
            strings={[
              'BTech Student',
              'Web Developer',
              'Tech Enthusiast',
              'Problem Solver'
            ]}
          />
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          21-year-old 4th year BTech student at SCMS School of Engineering and Technology, 
          passionate about creating innovative web solutions and exploring cutting-edge technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Get to know me
          </motion.a>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
          >
            View my work
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: 'https://github.com/Agraja-P', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/agraja-p-1b5276274/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:agrajaprahlad@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-effect rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero