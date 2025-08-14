"use client"

import { useEffect } from "react"
import { Check, Clock, Receipt, User } from "lucide-react"

interface PaymentSuccessScreenProps {
  total: number
  diningOption: string
  customerName: string
  orderNumber: number
  onContinue: () => void
}

export default function PaymentSuccessScreen({
  total,
  diningOption,
  customerName,
  orderNumber,
  onContinue,
}: PaymentSuccessScreenProps) {
  useEffect(() => {
    // Auto-continuar después de 3 segundos
    const timer = setTimeout(() => {
      onContinue()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onContinue])

  const formatOrderNumber = (num: number) => {
    return num.toString().padStart(3, "0")
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Check size={48} className="text-white" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-white mb-4">¡Pago Exitoso!</h1>
        <p className="text-white/60 mb-8">Tu pedido ha sido procesado correctamente</p>

        {/* Order Details */}
        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Receipt size={20} className="text-white/60" />
            <span className="text-white/60">Número de pedido</span>
          </div>
          <div className="text-4xl font-bold text-white mb-4">#{formatOrderNumber(orderNumber)}</div>

          <div className="flex items-center gap-3 mb-4">
            <User size={20} className="text-white/60" />
            <span className="text-white/60">Cliente:</span>
            <span className="text-white font-semibold">{customerName}</span>
          </div>

          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/60">Modalidad:</span>
              <span className="text-white">{diningOption}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/60">Total pagado:</span>
              <span className="text-white font-bold">S/{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="flex items-center gap-2 text-white/60 mb-4">
          <Clock size={16} />
          <span className="text-sm">Preparando tu pedido...</span>
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-white text-black font-bold py-3 px-6 rounded-2xl hover:bg-white/90 transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
