'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function Terminal() {
  const [text, setText] = useState("")
  const fullText = `> const aboutMe = {
>   experience: "8+ years in software development",
>   specialization: "scalable web applications & backend development",
>   passion: "clean code & innovative solutions",
>   seeking: "new opportunities to create impactful applications"
> }

> console.log(aboutMe)`

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="p-6 bg-gray-900 border-gray-800 font-mono">
      <div className="flex gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-green-400 whitespace-pre-wrap"
      >
        {text}
      </motion.div>
    </Card>
  )
}

