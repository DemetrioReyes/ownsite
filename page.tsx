'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from 'lucide-react'
import { Card } from "@/components/ui/card"
import SkillsSection from "./components/skills-section"
import Terminal from "./components/terminal"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Demetrio Reyes Martinez
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | Python | NodeJs | Back-end | Front-End | ML/DL
          </motion.p>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-8"
        >
          <Terminal />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>
          <SkillsSection />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out through any of the following channels:
          </p>
          <Card className="p-8 bg-gray-800 border-gray-700 shadow-lg">
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://github.com/justdemo23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors p-2 bg-gray-900 rounded-lg"
              >
                <Github className="h-6 w-6" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/demetrio-reyes-martinez-499765341"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors p-2 bg-gray-900 rounded-lg"
              >
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
              <button
                onClick={() => window.location.href = 'mailto:rdemetrio72@yahoo.com'}
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors p-2 bg-gray-900 rounded-lg"
              >
                <Mail className="h-6 w-6" />
                <span>Email</span>
              </button>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

