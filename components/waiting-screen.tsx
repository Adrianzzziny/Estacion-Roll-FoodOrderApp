"use client"

import { useEffect, useState } from "react"
import { Clock, ChefHat, CheckCircle } from "lucide-react"

interface WaitingScreenProps {
  orderNumber: number
  customerName: string
  diningOption: string
  onComplete: () => void
}

export default function WaitingScreen({ orderNumber, customerName, diningOption, onComplete }: WaitingScreenProps) {
  const [timeLeft, setTimeLeft] = useState(15) // 15 segundos para demo
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (timeLeft > 0 && !isComplete) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !isComplete) {
      setIsComplete(true)
      setTimeout(() => {
        onComplete()
      }, 10000)
    }
  }, [timeLeft, isComplete, onComplete])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const formatOrderNumber = (num: number) => {
    return num.toString().padStart(3, "0")
  }

  const progress = ((15 - timeLeft) / 15) * 100

  if (isComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle size={48} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">¡Pedido Listo!</h1>

          <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
            <div className="text-2xl font-bold text-white mb-2">
              #{formatOrderNumber(orderNumber)} - {customerName}
            </div>
            <p className="text-white/60 mb-4">Tu pedido está preparado</p>

            <div className="border-t border-white/10 pt-4">
              <p className="text-white text-lg">
                {diningOption === "Para Comer Aquí"
                  ? "Puedes recoger tu pedido en el mostrador"
                  : "Tu pedido está listo para llevar"}
              </p>
            </div>
          </div>

          <div className="text-white/60 text-sm">
            El personal te llamará:{" "}
            <span className="text-white font-semibold">
              "{customerName}, pedido #{formatOrderNumber(orderNumber)}"
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        {/* Cooking Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mx-auto border-4 border-white/10">
            <ChefHat size={64} className="text-white animate-pulse" />
          </div>

          {/* Progress Ring */}
          <svg className="absolute inset-0 w-32 h-32 mx-auto -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
        </div>

        {/* Order Info */}
        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-2">
            #{formatOrderNumber(orderNumber)} - {customerName}
          </h2>
          <p className="text-white/60 mb-4">{diningOption}</p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock size={20} className="text-white/60" />
            <span className="text-white/60">Tiempo estimado:</span>
          </div>

          <div className="text-4xl font-bold text-white mb-2">{formatTime(timeLeft)}</div>
          <p className="text-white/60 text-sm">minutos restantes</p>
        </div>

        {/* Status Message */}
        <div className="flex items-center gap-2 justify-center text-white/80">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>Preparando tu pedido con amor...</span>
        </div>
      </div>
    </div>
  )
}
