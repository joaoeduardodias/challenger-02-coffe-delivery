import { createContext, ReactNode, useEffect, useRef, useState } from 'react'
import api from '../services/api'

interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}
export interface CoffeeInCart extends Coffee {
  quantity: number
}

interface CoffeesContextType {
  coffees: Coffee[]
  coffeesInCart: CoffeeInCart[]
  counterCoffeesInCart: () => number
  addCoffeeInCart: (data: CoffeeInCart) => void
  removeCoffeeInCart: (id: number) => void
  changeQuantityCoffee: (id: number, type: 'increase' | 'decrease') => void
  sumPriceTotal: () => number
  cleanCart: () => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeInCart[]>(() => {
    const storageCoffees = localStorage.getItem(
      'coffeesDelivery:coffees-cart-1.0.0',
    )

    if (storageCoffees) {
      return JSON.parse(storageCoffees)
    }

    return []
  })

  useEffect(() => {
    async function Coffees() {
      const { data } = await api.get<Coffee[]>('/coffees')
      setCoffees(data)
    }
    Coffees()
  }, [])

  const prevCoffeesCartRef = useRef<CoffeeInCart[]>()

  useEffect(() => {
    prevCoffeesCartRef.current = coffeesInCart
  })

  const coffeesPreviousValue = prevCoffeesCartRef.current ?? coffeesInCart

  useEffect(() => {
    if (coffeesPreviousValue !== coffeesInCart) {
      localStorage.setItem(
        'coffeesDelivery:coffees-cart-1.0.0',
        JSON.stringify(coffeesInCart),
      )
    }
  }, [coffeesInCart, coffeesPreviousValue])

  function addCoffeeInCart(coffee: CoffeeInCart) {
    const verifyCoffeeAlreadyExistsInCart = coffeesInCart.find(
      (item) => item.id === coffee.id,
    )

    if (verifyCoffeeAlreadyExistsInCart) {
      alert('Produto já está no carrinho!')
      return
    }
    setCoffeesInCart((state) => [...state, coffee])
  }

  function removeCoffeeInCart(id: number) {
    const coffeeExist = coffeesInCart.find((coffee) => coffee.id === id)

    if (!coffeeExist) return

    const updatedCoffeesInCart = coffeesInCart.filter(
      (coffee) => coffee !== coffeeExist,
    )

    setCoffeesInCart(updatedCoffeesInCart)
  }

  function changeQuantityCoffee(id: number, type: 'increase' | 'decrease') {
    const coffee = coffeesInCart.find((coffee) => coffee.id === id)
    if (!coffee) {
      alert('Café não está no carrinho!')
      return
    }

    const updatedQuantityCoffee = coffeesInCart.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity:
            type === 'increase' ? coffee.quantity + 1 : coffee.quantity - 1,
        }
      } else {
        return coffee
      }
    })
    setCoffeesInCart(updatedQuantityCoffee)
  }

  function counterCoffeesInCart() {
    const counterQuantityCoffee = coffeesInCart.reduce((acc, coffee) => {
      const quantity = coffee.quantity
      return acc + quantity
    }, 0)

    return counterQuantityCoffee
  }

  function sumPriceTotal() {
    const priceTotal = coffeesInCart.reduce((acc, coffee) => {
      const price: number = coffee.price * coffee.quantity

      return acc + price
    }, 0)

    return priceTotal
  }

  function cleanCart() {
    setCoffeesInCart([])
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeesInCart,
        addCoffeeInCart,
        counterCoffeesInCart,
        removeCoffeeInCart,
        changeQuantityCoffee,
        sumPriceTotal,
        cleanCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
