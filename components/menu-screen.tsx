"use client"

import { useState } from "react"

const categories = [
  "Makis x12",
  "Para Compartir",
  "Poke Bowls",
  "Adicionales",
  "Promociones",
  "Combos",
  "Salchipapas",
  "Frituras Extras",
]

const makisData = [
  {
    id: 1,
    name: "Acevichado",
    description: "Relleno de Sakana y palta. Cobertura de pescado y salsa Acevichada.",
    price: 22,
  },
  {
    id: 2,
    name: "Crispy",
    description: "Empanizado, relleno de trucha, palta y queso crema.",
    price: 22,
  },
  {
    id: 3,
    name: "Crispy Acevichado",
    description: "Empanizado, relleno de trucha, palta y queso crema. Cubierto con salsa Acevichada.",
    price: 22,
  },
  {
    id: 4,
    name: "California",
    description: "Relleno de Sakana, palta y queso crema. Cubierto con semillas de ajonjolí.",
    price: 22,
  },
  {
    id: 5,
    name: "Avocado",
    description: "Relleno de Sakana y queso crema. Cubierto con láminas de palta y ajonjolí.",
    price: 22,
  },
  {
    id: 6,
    name: "Spicy",
    description: "Relleno de Sakana y palta, cobertura de pescado y bañado en salsa Spicy.",
    price: 22,
  },
  {
    id: 7,
    name: "Pollo a la brasa",
    description: "Relleno de Sakana y papas, bañado en ají pollero.",
    price: 22,
  },
  {
    id: 8,
    name: "Fuego",
    description: "Relleno de Trucha, Sakana y queso crema. Cobertura de palta y Sriracha.",
    price: 22,
  },
  {
    id: 9,
    name: "Tropical",
    description: "Relleno de Sakana y palta. Cobertura de mango laminado.",
    price: 22,
  },
  {
    id: 10,
    name: "Makiller",
    description: "Futomaki al panko, relleno de Sakana y palta.",
    price: 22,
  },
  {
    id: 11,
    name: "Parrillero",
    description: "Relleno de chorizo y palta. Cobertura de pescado y chimichurri.",
    price: 22,
  },
]

const pokeBowlsData = [
  {
    id: 1,
    name: "Estación",
    description: "Langostinos al panko, trucha marinada, palta, canchita chulpi y zanahoria. Base de Shari.",
    price: 23,
  },
  {
    id: 2,
    name: "Tropical",
    description: "Langostinos al panko, palta, zanahoria y mango. Base de shari.",
    price: 23,
  },
  {
    id: 3,
    name: "Clásico",
    description: "Trucha marinada, kiuri, zanahoria, col morada, palta. Base de Shari.",
    price: 23,
  },
]

const adicionalesData = [
  {
    id: 1,
    name: "Ebi Furai X 6",
    description: "Langostinos al panko",
    price: 13,
  },
  {
    id: 2,
    name: "Gyozas X 6",
    description: "Empanaditas Japonesas, rellenas de cerdo.",
    price: 13,
  },
  {
    id: 3,
    name: "Sandwich Estación",
    description: "Relleno de trucha, palta y queso.",
    price: 22,
  },
  {
    id: 4,
    name: "Sandwich Tropical",
    description: "Relleno de trucha, mango, palta y queso.",
    price: 22,
  },
  {
    id: 5,
    name: "Gunkan X 3",
    description: "Cobertura de Trucha marinada y palta.",
    price: 15,
  },
]

const paraCompartirData = [
  {
    id: 1,
    name: "Estación 1",
    description: "Makis x 6 + Gyozas x 2 + Bebida",
    price: 19,
  },
  {
    id: 2,
    name: "Estación 2",
    description: "Makis X 12 + Gyozas x 3 + Bebida",
    price: 28,
  },
  {
    id: 3,
    name: "Estación 3",
    description: "Makis x 24 + Gyozas X 4 + Bebida X 2",
    price: 49,
  },
]

const adicionalesParaCompartir = [
  {
    id: 1,
    name: "Gyozas X 3",
    description: "3 unidades de gyozas",
    price: 6,
  },
  {
    id: 2,
    name: "Ebi Furai X 3",
    description: "3 unidades de Ebi Furai",
    price: 6,
  },
  {
    id: 3,
    name: "Gunkan X 1",
    description: "1 unidad de gunkan",
    price: 6,
  },
]

const promocionesData = [
  {
    id: 1,
    name: "Makis X 24",
    description: "24 unidades de makis",
    price: 38,
  },
  {
    id: 2,
    name: "Makis X 36",
    description: "36 unidades de makis",
    price: 55,
  },
  {
    id: 3,
    name: "Makis X 48",
    description: "48 unidades de makis",
    price: 72,
  },
  {
    id: 4,
    name: "Makis X 60",
    description: "60 unidades de makis",
    price: 83,
  },
]

const combosData = [
  {
    id: 1,
    name: "ESTACIÓN 4",
    description: "Makis x6 + Alitas x3",
    price: 23,
  },
  {
    id: 2,
    name: "ESTACIÓN 5",
    description: "Gyozas x 6 + Salchi clásica",
    price: 23,
  },
  {
    id: 3,
    name: "ESTACIÓN 6",
    description: "Makis x 12 + Salchi clásica",
    price: 29,
  },
  {
    id: 4,
    name: "ESTACIÓN 7",
    description: "Makis x 12 + Alitas x 3 + Gyozas x 3",
    price: 36,
  },
  {
    id: 5,
    name: "ESTACIÓN 8",
    description: "Makis x 12 + Alitas x 6",
    price: 39,
  },
  {
    id: 6,
    name: "ESTACIÓN 9",
    description: "Makis x 18+ Alitas x 8",
    price: 46,
  },
]

const salchipapasData = [
  {
    id: 1,
    name: "CLÁSICA",
    description: "Hot dog y papas fritas. ¡La clásica más brava de todas!",
    price: 12,
  },
  {
    id: 2,
    name: "SALCHI ESTACIÓN",
    description: "Una combinación de hot dog, chorizo, papas fritas y plátanos fritos. ¡La fiesta de la casa!",
    price: 17,
  },
  {
    id: 3,
    name: "ALITAS: CRISPY, BBQ, SPICY Y ACEVICHADAS",
    description: "6 alitas, incluyen papas.",
    price: 12,
  },
]

const friturasExtrasData = [
  {
    id: 1,
    name: "PAPAS",
    description: "Porción de papas fritas",
    price: 8,
  },
  {
    id: 2,
    name: "TEQUEÑOS X 12",
    description: "Tequeños rellenos de queso.",
    price: 15,
  },
  {
    id: 3,
    name: "PAPAS CON QUESO Y TOCINO",
    description: "Papas fritas con queso y tocino.",
    price: 13,
  },
  {
    id: 4,
    name: "CHICKEN FINGERS x 6",
    description: "6 unidades de chicken fingers",
    price: 14,
  },
]

interface MenuScreenProps {
  selectedMakis: number[]
  setSelectedMakis: (makis: number[]) => void
  selectedParaCompartir: number | null
  setSelectedParaCompartir: (id: number | null) => void
  selectedAdicionales: number[]
  setSelectedAdicionales: (adicionales: number[]) => void
  selectedSimpleItems: Record<string, number[]>
  setSelectedSimpleItems: (items: Record<string, number[]>) => void
  selectedPromotion: number | null
  setSelectedPromotion: (id: number | null) => void
  selectedPromotionFlavors: {
    promotionId: number
    flavors: number[]
  } | null
  setSelectedPromotionFlavors: (flavors: { promotionId: number; flavors: number[] } | null) => void
  addToCart: (item: any) => void
  onBackToDiningOption: () => void
  diningOption: string | null
}

export default function MenuScreen({
  selectedMakis,
  setSelectedMakis,
  selectedParaCompartir,
  setSelectedParaCompartir,
  selectedAdicionales,
  setSelectedAdicionales,
  selectedSimpleItems,
  setSelectedSimpleItems,
  selectedPromotion,
  setSelectedPromotion,
  selectedPromotionFlavors,
  setSelectedPromotionFlavors,
  addToCart,
  onBackToDiningOption,
  diningOption,
}: MenuScreenProps) {
  const [activeCategory, setActiveCategory] = useState("Makis x12")
  const [showMakiModal, setShowMakiModal] = useState(false)
  const [tempPromotionFlavors, setTempPromotionFlavors] = useState<number[]>([])
  const [selectedCombo, setSelectedCombo] = useState<number | null>(null)
  const [tempComboFlavors, setTempComboFlavors] = useState<number[]>([])
  const [showComboModal, setShowComboModal] = useState(false)
  const [selectedParaCompartirStation, setSelectedParaCompartirStation] = useState<number | null>(null)
  const [tempParaCompartirFlavors, setTempParaCompartirFlavors] = useState<number[]>([])
  const [showParaCompartirModal, setShowParaCompartirModal] = useState(false)
  const [selectedParaCompartirFlavors, setSelectedParaCompartirFlavors] = useState<number[]>([])
  const [selectedPromotionModal, setSelectedPromotionModal] = useState<number | null>(null) // Declare the variable here
  const [selectedSimpleItemsForContinue, setSelectedSimpleItemsForContinue] = useState<{ [key: string]: number[] }>({})
  const [uniqueIdCounter, setUniqueIdCounter] = useState(0)

  const getComboRequiredFlavors = (comboId: number) => {
    switch (comboId) {
      case 1:
        return 1 // Estación 4: Makis x6
      case 3:
        return 2 // Estación 6: Makis x12
      case 4:
        return 2 // Estación 7: Makis x12
      case 5:
        return 2 // Estación 8: Makis x12
      case 6:
        return 3 // Estación 9: Makis x18
      default:
        return 0
    }
  }

  const comboHasMakis = (comboId: number) => {
    return [1, 3, 4, 5, 6].includes(comboId) // Estaciones 4, 6, 7, 8, 9
  }

  const getRequiredFlavorsCount = (promotionId: number) => {
    switch (promotionId) {
      case 1:
        return 4 // Makis x 24
      case 2:
        return 6 // Makis x 36
      case 3:
        return 8 // Makis x 48
      case 4:
        return 10 // Makis x 60
      default:
        return 0
    }
  }

  const getParaCompartirRequiredFlavors = (stationId: number) => {
    switch (stationId) {
      case 1:
        return 1 // Estación 1: Makis x6
      case 2:
        return 2 // Estación 2: Makis x12
      case 3:
        return 4 // Estación 3: Makis x24
      default:
        return 0
    }
  }

  const handleMakisContinue = () => {
    if (selectedMakis.length >= 1) {
      const flavors = selectedMakis.map((id) => makisData.find((m) => m.id === id)?.name || "").filter(Boolean)

      addToCart({
        name: "Makis x12",
        description: `Sabores: ${flavors.join(", ")}`,
        price: 22,
        quantity: 1,
        category: "Makis x12",
        flavors,
      })

      setSelectedMakis([])
    }
  }

  const handleParaCompartirContinue = () => {
    if (selectedParaCompartir) {
      const dish = paraCompartirData.find((d) => d.id === selectedParaCompartir)
      if (dish) {
        const flavors = selectedParaCompartirFlavors
          .map((id) => makisData.find((m) => m.id === id)?.name || "")
          .filter(Boolean)

        addToCart({
          name: dish.name,
          description: dish.description,
          price: dish.price,
          quantity: 1,
          category: "Para Compartir",
          flavors,
        })

        selectedAdicionales.forEach((id) => {
          const adicional = adicionalesParaCompartir.find((a) => a.id === id)
          if (adicional) {
            addToCart({
              name: adicional.name,
              description: adicional.description,
              price: adicional.price,
              quantity: 1,
              category: "Adicional Para Compartir",
            })
          }
        })
      }

      setSelectedParaCompartir(null)
      setSelectedAdicionales([])
      setSelectedParaCompartirFlavors([])
    }
  }

  const handleMakiSelect = (makiId: number) => {
    setSelectedMakis((prev) => {
      if (prev.includes(makiId)) {
        return prev.filter((id) => id !== makiId)
      } else if (prev.length < 2) {
        return [...prev, makiId]
      } else {
        return [prev[1], makiId]
      }
    })
  }

  const handleParaCompartirSelect = (stationId: number) => {
    if (selectedParaCompartir === stationId) {
      setSelectedParaCompartir(null)
      setSelectedAdicionales([])
      setSelectedParaCompartirFlavors([])
    } else {
      setSelectedParaCompartirStation(stationId)
      setTempParaCompartirFlavors([])
      setShowParaCompartirModal(true)
    }
  }

  const handleAdicionalSelect = (adicionalId: number) => {
    setSelectedAdicionales((prev) => {
      if (prev.includes(adicionalId)) {
        return prev.filter((id) => id !== adicionalId)
      } else {
        return [adicionalId]
      }
    })
  }

  const handleSimpleItemSelect = (itemId: number, category: string) => {
    if (category === "Promociones") {
      setSelectedPromotion(itemId) // Fix promotion modal by setting selectedPromotion
      setSelectedPromotionModal(itemId)
      setTempPromotionFlavors([])
      setShowMakiModal(true)
    } else if (category === "Combos" && comboHasMakis(itemId)) {
      setSelectedCombo(itemId)
      setTempComboFlavors([])
      setShowComboModal(true)
    } else {
      const currentSelected = selectedSimpleItemsForContinue[category] || []
      if (currentSelected.includes(itemId)) {
        setSelectedSimpleItemsForContinue((prev) => ({
          ...prev,
          [category]: currentSelected.filter((id) => id !== itemId),
        }))
      } else {
        setSelectedSimpleItemsForContinue((prev) => ({
          ...prev,
          [category]: [...currentSelected, itemId],
        }))
      }
    }
  }

  const handlePromotionFlavorSelect = (makiId: number) => {
    const requiredCount = getRequiredFlavorsCount(selectedPromotion!)

    setTempPromotionFlavors((prev) => {
      if (prev.includes(makiId)) {
        return prev.filter((id) => id !== makiId)
      } else if (prev.length < requiredCount) {
        return [...prev, makiId]
      } else {
        return [...prev.slice(1), makiId]
      }
    })
  }

  const handleComboFlavorSelect = (makiId: number) => {
    const requiredCount = getComboRequiredFlavors(selectedCombo!)

    setTempComboFlavors((prev) => {
      if (prev.includes(makiId)) {
        return prev.filter((id) => id !== makiId)
      } else if (prev.length < requiredCount) {
        return [...prev, makiId]
      } else {
        return [...prev.slice(1), makiId]
      }
    })
  }

  const confirmPromotionSelection = () => {
    if (selectedPromotion && tempPromotionFlavors.length >= 1) {
      const promotion = promocionesData.find((p) => p.id === selectedPromotion)
      const flavors = tempPromotionFlavors.map((id) => makisData.find((m) => m.id === id)?.name || "").filter(Boolean)

      if (promotion) {
        addToCart({
          name: promotion.name,
          description: `Sabores: ${flavors.join(", ")}`,
          price: promotion.price,
          quantity: 1,
          category: "Promociones",
          flavors,
        })
      }

      setShowMakiModal(false)
      setSelectedPromotion(null)
      setTempPromotionFlavors([])
    }
  }

  const confirmComboSelection = () => {
    if (selectedCombo && tempComboFlavors.length >= 1) {
      const combo = combosData.find((c) => c.id === selectedCombo)
      const flavors = tempComboFlavors.map((id) => makisData.find((m) => m.id === id)?.name || "").filter(Boolean)

      if (combo) {
        addToCart({
          name: combo.name,
          description: `${combo.description} - Sabores: ${flavors.join(", ")}`,
          price: combo.price,
          quantity: 1,
          category: "Combos",
          flavors,
        })
      }

      setShowComboModal(false)
      setSelectedCombo(null)
      setTempComboFlavors([])
    }
  }

  const closeMakiModal = () => {
    setShowMakiModal(false)
    setSelectedPromotion(null)
    setTempPromotionFlavors([])
  }

  const closeComboModal = () => {
    setShowComboModal(false)
    setSelectedCombo(null)
    setTempComboFlavors([])
  }

  const closeParaCompartirModal = () => {
    setShowParaCompartirModal(false)
    setSelectedParaCompartirStation(null)
    setTempParaCompartirFlavors([])
    setSelectedParaCompartirFlavors([])
  }

  const handleParaCompartirFlavorSelect = (makiId: number) => {
    const requiredCount = getParaCompartirRequiredFlavors(selectedParaCompartirStation!)

    setTempParaCompartirFlavors((prev) => {
      if (prev.includes(makiId)) {
        return prev.filter((id) => id !== makiId)
      } else if (prev.length < requiredCount) {
        return [...prev, makiId]
      } else {
        return [...prev.slice(1), makiId]
      }
    })
  }

  const confirmParaCompartirSelection = () => {
    if (tempParaCompartirFlavors.length >= 1 && selectedParaCompartirStation) {
      setSelectedParaCompartir(selectedParaCompartirStation)
      setSelectedParaCompartirFlavors(tempParaCompartirFlavors)
      setShowParaCompartirModal(false)
      setSelectedParaCompartirStation(null)
      setTempParaCompartirFlavors([])
    }
  }

  const handleSimpleItemsContinue = () => {
    const selectedIds = selectedSimpleItemsForContinue[activeCategory] || []
    const categoryData = getCurrentCategoryData()

    selectedIds.forEach((itemId, index) => {
      const item = categoryData.find((item) => item.id === itemId)
      if (item) {
        const currentCounter = uniqueIdCounter + index + 1
        setUniqueIdCounter((prev) => prev + selectedIds.length)

        addToCart({
          id: `${activeCategory}-${item.id}-${Date.now()}-${currentCounter}-${Math.random().toString(36).substr(2, 9)}`,
          name: item.name,
          description: item.description,
          price: item.price,
          quantity: 1,
          category: activeCategory,
        })
      }
    })

    // Reset selections
    setSelectedSimpleItemsForContinue((prev) => ({
      ...prev,
      [activeCategory]: [],
    }))
  }

  const MakiCard = ({ maki }: { maki: (typeof makisData)[0] }) => {
    const isSelected = selectedMakis.includes(maki.id)
    const selectionNumber = selectedMakis.indexOf(maki.id) + 1

    return (
      <div
        onClick={() => handleMakiSelect(maki.id)}
        className={`
          relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer
          transition-all duration-300 hover:bg-white/10 hover:scale-105
          border-2 ${isSelected ? "border-white shadow-lg shadow-white/20" : "border-white/20"}
        `}
      >
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
            {selectionNumber}
          </div>
        )}

        <div className="w-full h-32 bg-white/10 rounded-xl mb-4 flex items-center justify-center">
          <div className="text-white/50 text-sm">Imagen</div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-white">{maki.name}</h3>
        <p className="text-white/70 text-sm mb-3 line-clamp-2">{maki.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl text-white">{maki.price}</span>
          <button
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${isSelected ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
            `}
          >
            {isSelected ? "Seleccionado" : "Seleccionar"}
          </button>
        </div>
      </div>
    )
  }

  const ParaCompartirCard = ({ dish }: { dish: (typeof paraCompartirData)[0] }) => {
    const isSelected = selectedParaCompartir === dish.id

    return (
      <div
        onClick={() => handleParaCompartirSelect(dish.id)}
        className={`
          relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer
          transition-all duration-300 hover:bg-white/10 hover:scale-105
          border-2 ${isSelected ? "border-white shadow-lg shadow-white/20" : "border-white/20"}
        `}
      >
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
            ✓
          </div>
        )}

        <div className="w-full h-32 bg-white/10 rounded-xl mb-4 flex items-center justify-center">
          <div className="text-white/50 text-sm">Imagen</div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-white">{dish.name}</h3>
        <p className="text-white/70 text-sm mb-3 line-clamp-2">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl text-white">{dish.price}</span>
          <button
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${isSelected ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
            `}
          >
            {isSelected ? "Seleccionado" : "Seleccionar"}
          </button>
        </div>
      </div>
    )
  }

  const AdicionalCard = ({ adicional }: { adicional: (typeof adicionalesParaCompartir)[0] }) => {
    const isSelected = selectedAdicionales.includes(adicional.id)

    return (
      <div
        onClick={() => handleAdicionalSelect(adicional.id)}
        className={`
          relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer
          transition-all duration-300 hover:bg-white/10 hover:scale-105
          border-2 ${isSelected ? "border-white shadow-lg shadow-white/20" : "border-white/20"}
        `}
      >
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-sm font-bold">✓</span>
          </div>
        )}

        <div className="w-full h-24 bg-white/10 rounded-xl mb-3 flex items-center justify-center">
          <div className="text-white/50 text-xs">Imagen</div>
        </div>

        <h4 className="font-semibold text-sm mb-1 text-white">{adicional.name}</h4>
        <p className="text-white/70 text-xs mb-2 line-clamp-1">{adicional.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-white">{adicional.price}</span>
          <button
            className={`
              px-2 py-1 rounded-full text-xs font-medium transition-all duration-300
              ${isSelected ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
            `}
          >
            {isSelected ? "✓" : "+"}
          </button>
        </div>
      </div>
    )
  }

  const GenericCard = ({
    item,
    category,
  }: { item: { id: number; name: string; description: string; price: number }; category: string }) => {
    const isSelected = (selectedSimpleItemsForContinue[category] || []).includes(item.id)

    return (
      <div
        onClick={() => handleSimpleItemSelect(item.id, category)}
        className={`
          relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer
          transition-all duration-300 hover:bg-white/10 hover:scale-105
          ${isSelected ? "border-2 border-white bg-white/10" : "border border-white/20"}
        `}
      >
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-sm font-bold">✓</span>
          </div>
        )}

        <div className="aspect-square bg-white/10 rounded-xl mb-3 flex items-center justify-center">
          <img
            src={`/abstract-geometric-shapes.png?key=m2lxu&height=120&width=120&query=${encodeURIComponent(item.name)}`}
            alt={item.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
        <p className="text-white/70 text-sm mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{item.price}</span>
          <button
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${isSelected ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
            `}
          >
            {isSelected ? "Seleccionado" : "Seleccionar"}
          </button>
        </div>
      </div>
    )
  }

  const getCurrentCategoryData = () => {
    switch (activeCategory) {
      case "Poke Bowls":
        return pokeBowlsData
      case "Adicionales":
        return adicionalesData
      case "Promociones":
        return promocionesData
      case "Combos":
        return combosData
      case "Salchipapas":
        return salchipapasData
      case "Frituras Extras":
        return friturasExtrasData
      default:
        return []
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-20S46.6 0 30 0zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onBackToDiningOption}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white/80 hover:border-white/60 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Cambiar modalidad
              </button>
              {diningOption && (
                <span className="text-white/60 text-sm">
                  Modalidad: <span className="text-white font-medium">{diningOption}</span>
                </span>
              )}
            </div>
          </div>

          <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full border-2 font-medium text-sm
                  transition-all duration-300 whitespace-nowrap
                  ${
                    activeCategory === category
                      ? "bg-white text-black border-white shadow-lg"
                      : "bg-transparent text-white border-white/30 hover:border-white/60 hover:bg-white/5"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        {activeCategory === "Makis x12" ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Makis x12</h2>
              <p className="text-white/70 mb-4">Selecciona 1 o 2 sabores para tus 12 makis</p>
              {selectedMakis.length > 0 && (
                <div className="bg-white/10 rounded-full px-6 py-2 inline-block">
                  <span className="text-sm">{selectedMakis.length}/2 sabores seleccionados</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {makisData.map((maki) => (
                <MakiCard key={maki.id} maki={maki} />
              ))}
            </div>

            {selectedMakis.length >= 1 && (
              <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={handleMakisContinue}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  {selectedMakis.length === 1 ? "Continuar con 1 sabor" : "Continuar con 2 sabores"}
                </button>
              </div>
            )}
          </div>
        ) : activeCategory === "Para Compartir" ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Para Compartir</h2>
              <p className="text-white/70 mb-4">Selecciona una estación y añade hasta 1 adicional por S/6</p>
              {selectedParaCompartir && (
                <div className="bg-white/10 rounded-full px-6 py-2 inline-block">
                  <span className="text-sm">Estación seleccionada + {selectedAdicionales.length}/1 adicional</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paraCompartirData.map((dish) => (
                <ParaCompartirCard key={dish.id} dish={dish} />
              ))}
            </div>

            {selectedParaCompartir && (
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Añade Adicionales</h3>
                  <p className="text-white/70 text-sm">Cada adicional por solo S/6 - Selecciona 1</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {adicionalesParaCompartir.map((adicional) => (
                    <AdicionalCard key={adicional.id} adicional={adicional} />
                  ))}
                </div>
              </div>
            )}

            {selectedParaCompartir && (
              <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={handleParaCompartirContinue}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Continuar {selectedAdicionales.length > 0 && `(+${selectedAdicionales.length} adicional)`}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">{activeCategory}</h2>
              <p className="text-white/70 mb-4">Selecciona los platillos que desees</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {(() => {
                  let data
                  switch (activeCategory) {
                    case "Poke Bowls":
                      data = pokeBowlsData
                      break
                    case "Adicionales":
                      data = adicionalesData
                      break
                    case "Promociones":
                      data = promocionesData
                      break
                    case "Combos":
                      data = combosData
                      break
                    case "Salchipapas":
                      data = salchipapasData
                      break
                    case "Frituras Extras":
                      data = friturasExtrasData
                      break
                    default:
                      data = []
                  }

                  return data.map((item) => <GenericCard key={item.id} item={item} category={activeCategory} />)
                })()}
              </div>

              {(selectedSimpleItemsForContinue[activeCategory] || []).length > 0 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleSimpleItemsContinue}
                    className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300"
                  >
                    Continuar con {(selectedSimpleItemsForContinue[activeCategory] || []).length} producto
                    {(selectedSimpleItemsForContinue[activeCategory] || []).length !== 1 ? "s" : ""}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {showMakiModal && selectedPromotion && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black border-2 border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Selecciona los sabores para {promocionesData.find((p) => p.id === selectedPromotion)?.name}
                  </h2>
                  <p className="text-white/70">
                    Puedes seleccionar de 1 hasta {getRequiredFlavorsCount(selectedPromotion)} sabores diferentes
                  </p>
                </div>
                <button
                  onClick={closeMakiModal}
                  className="text-white/70 hover:text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-white/10 rounded-full px-6 py-2 inline-block">
                  <span className="text-sm">
                    {tempPromotionFlavors.length}/{getRequiredFlavorsCount(selectedPromotion)} sabores seleccionados
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                {makisData.map((maki) => {
                  const isSelected = tempPromotionFlavors.includes(maki.id)
                  const selectionNumber = tempPromotionFlavors.indexOf(maki.id) + 1

                  return (
                    <div
                      key={maki.id}
                      onClick={() => handlePromotionFlavorSelect(maki.id)}
                      className={`
                        relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer
                        transition-all duration-300 hover:bg-white/10 hover:scale-105
                        border-2 ${isSelected ? "border-white shadow-lg shadow-white/20" : "border-white/20"}
                      `}
                    >
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {selectionNumber}
                        </div>
                      )}

                      <div className="w-full h-32 bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                        <div className="text-white/50 text-sm">Imagen</div>
                      </div>

                      <h3 className="font-bold text-lg mb-2 text-white">{maki.name}</h3>
                      <p className="text-white/70 text-sm mb-3 line-clamp-2">{maki.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl text-white">{maki.price}</span>
                        <button
                          className={`
                            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${isSelected ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
                          `}
                        >
                          {isSelected ? "Seleccionado" : "Seleccionar"}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="sticky bottom-0 bg-black/90 backdrop-blur-sm border-t border-white/20 p-6">
                <button
                  onClick={confirmPromotionSelection}
                  disabled={tempPromotionFlavors.length < 1}
                  className={`
                    w-full py-4 rounded-full font-bold text-lg transition-all duration-300
                    ${
                      tempPromotionFlavors.length >= 1
                        ? "bg-white text-black hover:scale-105 shadow-lg"
                        : "bg-white/20 text-white/50 cursor-not-allowed"
                    }
                  `}
                >
                  Confirmar Selección ({tempPromotionFlavors.length} sabor
                  {tempPromotionFlavors.length !== 1 ? "es" : ""})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showComboModal && selectedCombo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black border-2 border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Selecciona los sabores para {combosData.find((c) => c.id === selectedCombo)?.name}
                  </h2>
                  <p className="text-white/70">
                    Puedes seleccionar de 1 hasta {getComboRequiredFlavors(selectedCombo)} sabores diferentes
                  </p>
                </div>
                <button
                  onClick={closeComboModal}
                  className="text-white/70 hover:text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-white/10 rounded-full px-6 py-2 inline-block">
                  <span className="text-sm">
                    {tempComboFlavors.length}/{getComboRequiredFlavors(selectedCombo)} sabores seleccionados
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                {makisData.map((maki) => {
                  const isSelected = tempComboFlavors.includes(maki.id)
                  const selectionNumber = tempComboFlavors.indexOf(maki.id) + 1

                  return (
                    <div
                      key={maki.id}
                      onClick={() => handleComboFlavorSelect(maki.id)}
                      className={`
                        relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer
                        transition-all duration-300 hover:bg-white/10 hover:scale-105
                        border-2 ${isSelected ? "border-white shadow-lg shadow-white/20" : "border-white/20"}
                      `}
                    >
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {selectionNumber}
                        </div>
                      )}

                      <div className="w-full h-32 bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                        <div className="text-white/50 text-sm">Imagen</div>
                      </div>

                      <h3 className="font-bold text-lg mb-2 text-white">{maki.name}</h3>
                      <p className="text-white/70 text-sm mb-3 line-clamp-2">{maki.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl text-white">{maki.price}</span>
                        <button
                          className={`
                            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${isSelected ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
                          `}
                        >
                          {isSelected ? `Sabor ${selectionNumber}` : "Seleccionar"}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="sticky bottom-0 bg-black/90 backdrop-blur-sm border-t border-white/20 p-6">
                <button
                  onClick={confirmComboSelection}
                  disabled={tempComboFlavors.length < 1}
                  className={`
                    w-full py-4 rounded-full font-bold text-lg transition-all duration-300
                    ${
                      tempComboFlavors.length >= 1
                        ? "bg-white text-black hover:scale-105 shadow-lg"
                        : "bg-white/20 text-white/50 cursor-not-allowed"
                    }
                  `}
                >
                  Confirmar Selección ({tempComboFlavors.length} sabor{tempComboFlavors.length !== 1 ? "es" : ""})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showParaCompartirModal && selectedParaCompartirStation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black border-2 border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Selecciona los sabores para{" "}
                    {paraCompartirData.find((p) => p.id === selectedParaCompartirStation)?.name}
                  </h2>
                  <p className="text-white/70">
                    Puedes seleccionar de 1 hasta {getParaCompartirRequiredFlavors(selectedParaCompartirStation)}{" "}
                    sabores diferentes
                  </p>
                </div>
                <button
                  onClick={closeParaCompartirModal}
                  className="text-white/70 hover:text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-white/10 rounded-full px-6 py-2 inline-block">
                  <span className="text-sm">
                    {tempParaCompartirFlavors.length}/{getParaCompartirRequiredFlavors(selectedParaCompartirStation)}{" "}
                    sabores seleccionados
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                {makisData.map((maki) => {
                  const isSelected = tempParaCompartirFlavors.includes(maki.id)
                  const selectionNumber = tempParaCompartirFlavors.indexOf(maki.id) + 1

                  return (
                    <div
                      key={maki.id}
                      onClick={() => handleParaCompartirFlavorSelect(maki.id)}
                      className={`
                        relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 cursor-pointer
                        transition-all duration-300 hover:bg-white/10 hover:scale-105
                        border-2 ${isSelected ? "border-white shadow-lg shadow-white/20" : "border-white/20"}
                      `}
                    >
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {selectionNumber}
                        </div>
                      )}

                      <div className="w-full h-32 bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                        <div className="text-white/50 text-sm">Imagen</div>
                      </div>

                      <h3 className="font-bold text-lg mb-2 text-white">{maki.name}</h3>
                      <p className="text-white/70 text-sm mb-3 line-clamp-2">{maki.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl text-white">{maki.price}</span>
                        <button
                          className={`
                            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${isSelected ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}
                          `}
                        >
                          {isSelected ? `Sabor ${selectionNumber}` : "Seleccionar"}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="sticky bottom-0 bg-black/90 backdrop-blur-sm border-t border-white/20 p-6">
              <button
                onClick={confirmParaCompartirSelection}
                disabled={tempParaCompartirFlavors.length < 1}
                className={`
                  w-full py-4 rounded-full font-bold text-lg transition-all duration-300
                  ${
                    tempParaCompartirFlavors.length >= 1
                      ? "bg-white text-black hover:scale-105 shadow-lg"
                      : "bg-white/20 text-white/50 cursor-not-allowed"
                  }
                `}
              >
                Confirmar Selección ({tempParaCompartirFlavors.length} sabor
                {tempParaCompartirFlavors.length !== 1 ? "es" : ""})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
