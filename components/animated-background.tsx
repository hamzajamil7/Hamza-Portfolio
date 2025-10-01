"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Star {
      x: number
      y: number
      z: number
      size: number

      constructor() {
        const width = canvas?.width ?? window.innerWidth
        const height = canvas?.height ?? window.innerHeight
        this.x = Math.random() * width - width / 2
        this.y = Math.random() * height - height / 2
        this.z = Math.random() * width
        this.size = Math.random() * 1.5 + 0.5
      }

      update() {
        this.z -= 2
        if (this.z <= 0) {
          this.z = canvas!.width
          this.x = Math.random() * canvas!.width - canvas!.width / 2
          this.y = Math.random() * canvas!.height - canvas!.height / 2
        }
      }

      draw() {
        if (!ctx) return

        const x = (this.x / this.z) * canvas!.width + canvas!.width / 2
        const y = (this.y / this.z) * canvas!.height + canvas!.height / 2
        const s = (1 - this.z / canvas!.width) * this.size

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(x, y, s, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      stars = []
      for (let i = 0; i < 500; i++) {
        stars.push(new Star())
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.fillStyle = "#1a1a1e"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.update()
        star.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    init()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }} />
}
