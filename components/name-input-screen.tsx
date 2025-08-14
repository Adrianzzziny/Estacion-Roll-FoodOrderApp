"use client"

import type React from "react"

import { useState } from "react"

interface NameInputScreenProps {
  diningOption: string
  onNameSubmit: (name: string) => void
  onBack: () => void
}

export default function NameInputScreen({ diningOption, onNameSubmit, onBack }: NameInputScreenProps) {
  const [name, setName] = useState("")

  const handleSubmit = () => {
    if (name.trim()) {
      onNameSubmit(name.trim())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && name.trim()) {
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative">
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Regresar
      </button>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4">寿司</h1>
        <p className="text-xl text-white/80 mb-2">Modalidad seleccionada: {diningOption}</p>
        <p className="text-lg text-white/60">Para continuar, ingresa tu nombre</p>
      </div>

      {/* Name input */}
      <div className="w-full max-w-md">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ingresa tu nombre"
          className="w-full px-6 py-4 text-2xl text-center bg-transparent border-4 border-white/30 rounded-2xl text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
          maxLength={20}
          autoFocus
        />

        {/* Continue button */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          className={`w-full mt-8 py-4 px-8 text-xl font-semibold rounded-2xl transition-all duration-300 ${
            name.trim()
              ? "bg-white text-black hover:scale-105 hover:shadow-lg"
              : "bg-white/20 text-white/50 cursor-not-allowed"
          }`}
        >
          Continuar al Menú
        </button>
      </div>

      {/* Helper text */}
      <p className="text-white/40 text-sm mt-8 text-center max-w-md">
        Tu nombre será usado para identificar tu pedido cuando esté listo
      </p>
    </div>
  )
}
