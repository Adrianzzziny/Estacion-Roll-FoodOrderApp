"use client"

import { useState } from "react"

interface DiningOptionScreenProps {
  onOptionSelect: (option: "dine-in" | "takeout") => void
}

export default function DiningOptionScreen({ onOptionSelect }: DiningOptionScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      onOptionSelect(option === "comer-aqui" ? "dine-in" : "takeout")
    }, 500) // Small delay to show selection feedback
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="oriental-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="2" fill="white" opacity="0.3" />
                <path
                  d="M30,30 Q60,10 90,30 Q70,60 90,90 Q60,70 30,90 Q50,60 30,30"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <circle cx="20" cy="20" r="1" fill="white" opacity="0.2" />
                <circle cx="100" cy="100" r="1" fill="white" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#oriental-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">寿司</h1>
          <p className="text-white/80 text-lg font-semibold tracking-wide">Auténtica comida oriental</p>
          <p className="text-white/60 text-sm mt-2 font-medium">Fresca y deliciosa, directo a tu mesa</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button
            onClick={() => handleOptionSelect("comer-aqui")}
            className={`flex-1 py-4 px-8 rounded-lg border-4 transition-all duration-300 font-medium text-lg ${
              selectedOption === "comer-aqui"
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-white/30 hover:border-white/60 hover:bg-white/10"
            }`}
          >
            Para comer aquí
          </button>

          <button
            onClick={() => handleOptionSelect("para-llevar")}
            className={`flex-1 py-4 px-8 rounded-lg border-4 transition-all duration-300 font-medium text-lg ${
              selectedOption === "para-llevar"
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-white/30 hover:border-white/60 hover:bg-white/10"
            }`}
          >
            Para llevar
          </button>
        </div>

        {selectedOption && (
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Has seleccionado: {selectedOption === "comer-aqui" ? "Comer aquí" : "Para llevar"}
            </p>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-0.5 bg-white/30"></div>
      </div>
    </div>
  )
}
