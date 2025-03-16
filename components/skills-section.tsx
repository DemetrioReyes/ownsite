'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "HTML", "TypeScript", "CSS", "javascript"],
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "javascript", "MongoDB", "REST APIs", "MySQL"],
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "Docker", "CI/CD", "Agile", "TDD", "Scrum"],
    color: "from-green-400 to-green-600"
  }
]

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Card className="p-6 bg-gray-900 border-gray-800 h-full">
            <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-500" />
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

