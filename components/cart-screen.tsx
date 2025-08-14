"use client"

// Reutilizamos los datos del menú
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

const allMenuData = {
  "Para Compartir": [
    { id: 1, name: "Estación 1", description: "Makis x 6 + Gyozas x 2 + Bebida", price: 19 },
    { id: 2, name: "Estación 2", description: "Makis X 12 + Gyozas x 3 + Bebida", price: 28 },
    { id: 3, name: "Estación 3", description: "Makis x 24 + Gyozas X 4 + Bebida X 2", price: 49 },
  ],
  "Adicionales Para Compartir": [
    { id: 1, name: "Gyozas X 3", description: "3 unidades de gyozas", price: 6 },
    { id: 2, name: "Ebi Furai X 3", description: "3 unidades de Ebi Furai", price: 6 },
    { id: 3, name: "Gunkan X 1", description: "1 unidad de gunkan", price: 6 },
  ],
  "Poke Bowls": [
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
  ],
  Adicionales: [
    { id: 1, name: "Ebi Furai X 6", description: "Langostinos al panko", price: 13 },
    { id: 2, name: "Gyozas X 6", description: "Empanaditas Japonesas, rellenas de cerdo.", price: 13 },
    { id: 3, name: "Sandwich Estación", description: "Relleno de trucha, palta y queso.", price: 22 },
    { id: 4, name: "Sandwich Tropical", description: "Relleno de trucha, mango, palta y queso.", price: 22 },
    { id: 5, name: "Gunkan X 3", description: "Cobertura de Trucha marinada y palta.", price: 15 },
  ],
  Promociones: [
    { id: 1, name: "Makis X 24", description: "24 unidades de makis", price: 38 },
    { id: 2, name: "Makis X 36", description: "36 unidades de makis", price: 55 },
    { id: 3, name: "Makis X 48", description: "48 unidades de makis", price: 72 },
    { id: 4, name: "Makis X 60", description: "60 unidades de makis", price: 83 },
  ],
  Combos: [
    { id: 1, name: "ESTACIÓN 4", description: "Makis x6 + Alitas x3", price: 23 },
    { id: 2, name: "ESTACIÓN 5", description: "Gyozas x 6 + Salchi clásica", price: 23 },
    { id: 3, name: "ESTACIÓN 6", description: "Makis x 12 + Salchi clásica", price: 29 },
    { id: 4, name: "ESTACIÓN 7", description: "Makis x 12 + Alitas x 3 + Gyozas x 3", price: 36 },
    { id: 5, name: "ESTACIÓN 8", description: "Makis x 12 + Alitas x 6", price: 39 },
    { id: 6, name: "ESTACIÓN 9", description: "Makis x 18+ Alitas x 8", price: 46 },
  ],
  Salchipapas: [
    { id: 1, name: "CLÁSICA", description: "Hot dog y papas fritas. ¡La clásica más brava de todas!", price: 12 },
    {
      id: 2,
      name: "SALCHI ESTACIÓN",
      description: "Una combinación de hot dog, chorizo, papas fritas y plátanos fritos. ¡La fiesta de la casa!",
      price: 17,
    },
    { id: 3, name: "ALITAS: CRISPY, BBQ, SPICY Y ACEVICHADAS", description: "6 alitas, incluyen papas.", price: 12 },
  ],
  "Frituras Extras": [
    { id: 1, name: "PAPAS", description: "Porción de papas fritas", price: 8 },
    { id: 2, name: "TEQUEÑOS X 12", description: "Tequeños rellenos de queso.", price: 15 },
    { id: 3, name: "PAPAS CON QUESO Y TOCINO", description: "Papas fritas con queso y tocino.", price: 13 },
    { id: 4, name: "CHICKEN FINGERS x 6", description: "6 unidades de chicken fingers", price: 14 },
  ],
}

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  category: string
  flavors?: string[]
}

interface CartScreenProps {
  cartItems: CartItem[]
  setCartItems: (items: CartItem[]) => void
  onBack?: () => void
  onGoToPayment?: () => void // Added onGoToPayment prop
  diningOption: "dine-in" | "takeout" | null
}

export default function CartScreen({ cartItems, setCartItems, onBack, onGoToPayment, diningOption }: CartScreenProps) {
  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== itemId))
    } else {
      setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = diningOption === "takeout" ? 5 : 0 // Solo cobra delivery para "Para Llevar"
  const total = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Menú
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold">🛒</h1>
              <p className="text-white/70 text-sm">Tu Pedido</p>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍱</div>
            <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
            <p className="text-white/70 mb-6">Agrega algunos deliciosos platillos para comenzar</p>
            <button
              onClick={onBack}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              Ver Menú
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Items del carrito */}
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    {/* Imagen placeholder */}
                    <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white/50 text-xs">Imagen</div>
                    </div>

                    {/* Información del producto */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-white/50 text-xs mb-1">{item.category}</p>
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-white/70 text-sm">{item.description}</p>
                          {item.flavors && item.flavors.length > 0 && (
                            <div className="mt-2">
                              <p className="text-white/50 text-xs mb-1">Sabores seleccionados:</p>
                              <div className="flex flex-wrap gap-1">
                                {item.flavors.map((flavor, index) => (
                                  <span
                                    key={index}
                                    className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs"
                                  >
                                    {flavor}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-white/50 hover:text-red-400 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Controles de cantidad y precio */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="font-bold text-lg min-w-[2rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-xl">S/{(item.price * item.quantity).toFixed(2)}</p>
                          {item.quantity > 1 && <p className="text-white/50 text-sm">S/{item.price.toFixed(2)} c/u</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen del pedido */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
              <h3 className="font-bold text-xl mb-4">Resumen del Pedido</h3>

              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <p className="text-white/70 text-sm">Modalidad:</p>
                <p className="font-semibold">{diningOption === "dine-in" ? "Para Comer Aquí" : "Para Llevar"}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Subtotal</span>
                  <span>S/{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">{diningOption === "takeout" ? "Delivery (Tapers)" : "Delivery"}</span>
                  <span>{deliveryFee > 0 ? `S/${deliveryFee.toFixed(2)}` : "Gratis"}</span>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>S/{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="space-y-4">
              <button
                onClick={onGoToPayment}
                className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                Proceder al Pago
              </button>
              <button
                onClick={onBack}
                className="w-full bg-white/10 text-white py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                Agregar Más Productos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
