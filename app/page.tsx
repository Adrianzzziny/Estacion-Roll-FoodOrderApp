"use client"

import { useState } from "react"
import DiningOptionScreen from "@/components/dining-option-screen"
import NameInputScreen from "@/components/name-input-screen"
import MenuScreen from "@/components/menu-screen"
import CartScreen from "@/components/cart-screen"
import PaymentScreen from "@/components/payment-screen"
import PaymentSuccessScreen from "@/components/payment-success-screen"
import WaitingScreen from "@/components/waiting-screen"

type Screen = "dining" | "name" | "menu" | "cart" | "payment" | "success" | "waiting"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dining")
  const [diningOption, setDiningOption] = useState<"dine-in" | "takeout" | null>(null)
  const [customerName, setCustomerName] = useState<string>("")
  const [orderNumber, setOrderNumber] = useState<number>(0)

  // Estados para las selecciones del menú
  const [selectedMakis, setSelectedMakis] = useState<number[]>([])
  const [selectedParaCompartir, setSelectedParaCompartir] = useState<number | null>(null)
  const [selectedAdicionales, setSelectedAdicionales] = useState<number[]>([])
  const [selectedSimpleItems, setSelectedSimpleItems] = useState<{ [key: string]: number[] }>({
    "Poke Bowls": [],
    Adicionales: [],
    Promociones: [],
    Combos: [],
    Salchipapas: [],
    "Frituras Extras": [],
  })
  const [selectedPromotion, setSelectedPromotion] = useState<number | null>(null)
  const [selectedPromotionFlavors, setSelectedPromotionFlavors] = useState<{
    promotionId: number
    flavors: number[]
  } | null>(null)

  const [cartItems, setCartItems] = useState<any[]>([])

  const handleDiningOptionSelect = (option: "dine-in" | "takeout") => {
    setDiningOption(option)
    setCurrentScreen("name")
  }

  const handleNameSubmit = (name: string) => {
    setCustomerName(name)
    setOrderNumber((prev) => prev + 1)
    setCurrentScreen("menu")
  }

  const handleBackToName = () => {
    setCurrentScreen("name")
  }

  const handleBackToDining = () => {
    // Reset all menu selections
    setSelectedMakis([])
    setSelectedParaCompartir(null)
    setSelectedAdicionales([])
    setSelectedSimpleItems({
      "Poke Bowls": [],
      Adicionales: [],
      Promociones: [],
      Combos: [],
      Salchipapas: [],
      "Frituras Extras": [],
    })
    setSelectedPromotion(null)
    setSelectedPromotionFlavors(null)

    setCustomerName("")
    setDiningOption(null)
    setCurrentScreen("dining")
  }

  const handleBackToDiningFromName = () => {
    setDiningOption(null)
    setCurrentScreen("dining")
  }

  const addToCart = (item: any) => {
    setCartItems((prev) => [...prev, { ...item, id: `${item.category}-${Date.now()}` }])
  }

  const getDiningOptionText = () => {
    if (diningOption === "dine-in") return "Para Comer Aquí"
    if (diningOption === "takeout") return "Para Llevar"
    return null
  }

  const handleGoToPayment = () => {
    setCurrentScreen("payment")
  }

  const handleBackToCart = () => {
    setCurrentScreen("cart")
  }

  const handlePaymentComplete = () => {
    setCurrentScreen("success")
  }

  const handleSuccessComplete = () => {
    setCurrentScreen("waiting")
  }

  const handleWaitingComplete = () => {
    // Reset everything and go back to dining selection
    setSelectedMakis([])
    setSelectedParaCompartir(null)
    setSelectedAdicionales([])
    setSelectedSimpleItems({
      "Poke Bowls": [],
      Adicionales: [],
      Promociones: [],
      Combos: [],
      Salchipapas: [],
      "Frituras Extras": [],
    })
    setSelectedPromotion(null)
    setSelectedPromotionFlavors(null)
    setCartItems([])
    setDiningOption(null)
    setCustomerName("")
    setOrderNumber(0)
    setCurrentScreen("dining")
  }

  const handleBackToMenu = () => {
    setCurrentScreen("menu")
  }

  if (currentScreen === "dining") {
    return <DiningOptionScreen onOptionSelect={handleDiningOptionSelect} />
  }

  if (currentScreen === "name") {
    return (
      <NameInputScreen
        diningOption={getDiningOptionText() || ""}
        onNameSubmit={handleNameSubmit}
        onBack={handleBackToDiningFromName}
      />
    )
  }

  if (currentScreen === "cart") {
    const total =
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (diningOption === "takeout" ? 5 : 0)

    return (
      <CartScreen
        cartItems={cartItems}
        setCartItems={setCartItems}
        onBack={handleBackToMenu}
        onGoToPayment={handleGoToPayment}
        diningOption={diningOption}
      />
    )
  }

  if (currentScreen === "payment") {
    const total =
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (diningOption === "takeout" ? 5 : 0)

    return (
      <PaymentScreen
        total={total}
        diningOption={getDiningOptionText() || ""}
        onBack={handleBackToCart}
        onPaymentComplete={handlePaymentComplete}
      />
    )
  }

  if (currentScreen === "success") {
    const total =
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (diningOption === "takeout" ? 5 : 0)

    return (
      <PaymentSuccessScreen
        total={total}
        diningOption={getDiningOptionText() || ""}
        customerName={customerName}
        orderNumber={orderNumber}
        onContinue={handleSuccessComplete}
      />
    )
  }

  if (currentScreen === "waiting") {
    return (
      <WaitingScreen
        orderNumber={orderNumber}
        customerName={customerName}
        diningOption={getDiningOptionText() || ""}
        onComplete={handleWaitingComplete}
      />
    )
  }

  return (
    <div className="relative">
      <MenuScreen
        selectedMakis={selectedMakis}
        setSelectedMakis={setSelectedMakis}
        selectedParaCompartir={selectedParaCompartir}
        setSelectedParaCompartir={setSelectedParaCompartir}
        selectedAdicionales={selectedAdicionales}
        setSelectedAdicionales={setSelectedAdicionales}
        selectedSimpleItems={selectedSimpleItems}
        setSelectedSimpleItems={setSelectedSimpleItems}
        selectedPromotion={selectedPromotion}
        setSelectedPromotion={setSelectedPromotion}
        selectedPromotionFlavors={selectedPromotionFlavors}
        setSelectedPromotionFlavors={setSelectedPromotionFlavors}
        addToCart={addToCart}
        onBackToDiningOption={handleBackToDining}
        diningOption={getDiningOptionText()}
      />

      {/* Botón flotante para ir al carrito */}
      <button
        onClick={() => setCurrentScreen("cart")} // Fixed navigation to go to cart instead of payment
        className="fixed bottom-6 right-6 bg-white text-black w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center font-bold text-xl z-50"
      >
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  )
}
