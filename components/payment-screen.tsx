"use client"

import { useState } from "react"
import { Check, CreditCard, Smartphone, ArrowLeft } from "lucide-react"

interface PaymentScreenProps {
  total: number
  diningOption: string
  onBack: () => void
  onPaymentComplete: () => void
}

export default function PaymentScreen({ total, diningOption, onBack, onPaymentComplete }: PaymentScreenProps) {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const paymentMethods = [
    {
      id: "pos",
      title: "Tarjeta de Débito/Crédito",
      subtitle: "Acerca tu tarjeta al POS",
      icon: CreditCard,
      color: "from-gray-600 to-gray-800",
    },
    {
      id: "yape",
      title: "Yape",
      subtitle: "Escanea el código QR",
      icon: Smartphone,
      color: "from-purple-600 to-purple-800",
    },
    {
      id: "plin",
      title: "Plin",
      subtitle: "Escanea el código QR",
      icon: Smartphone,
      color: "from-blue-600 to-blue-800",
    },
  ]

  const handlePaymentSelect = (paymentId: string) => {
    setSelectedPayment(paymentId)
  }

  const handleProceedPayment = () => {
    if (!selectedPayment) return

    setIsProcessing(true)
    // Simular procesamiento de pago
    setTimeout(() => {
      onPaymentComplete()
    }, 3000)
  }

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Procesando pago...</h2>
          <p className="text-white/60">Por favor espera un momento</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Volver al carrito</span>
        </button>
        <div className="text-right">
          <p className="text-white/60 text-sm">{diningOption}</p>
        </div>
      </div>

      {/* Payment Content */}
      <div className="max-w-2xl mx-auto">
        {/* Order Summary */}
        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Resumen del pedido</h2>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Total a pagar:</span>
            <span className="text-3xl font-bold text-white">S/{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">¿Cómo deseas pagar?</h3>

          <div className="grid gap-4">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              const isSelected = selectedPayment === method.id

              return (
                <button
                  key={method.id}
                  onClick={() => handlePaymentSelect(method.id)}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? "border-white bg-white/10"
                      : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>

                    <div className="flex-1 text-left">
                      <h4 className="text-lg font-bold text-white mb-1">{method.title}</h4>
                      <p className="text-white/60 text-sm">{method.subtitle}</p>
                    </div>

                    {isSelected && (
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Check size={20} className="text-black" />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Proceed Button */}
        {selectedPayment && (
          <button
            onClick={handleProceedPayment}
            className="w-full bg-white text-black font-bold py-4 px-6 rounded-2xl text-lg hover:bg-white/90 transition-colors"
          >
            Proceder con el pago
          </button>
        )}
      </div>
    </div>
  )
}
