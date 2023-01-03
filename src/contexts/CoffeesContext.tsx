import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../services/api'

interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}
export interface CoffeeInTheCart extends Coffee {
  quantityOfCoffee: number
}

interface CoffeesContextType {
  coffees: Coffee[]
  counterCoffeesInCart: () => number
  addCoffeeInTheCart: (data: CoffeeInTheCart) => void
  removeCoffeeInTheCart: (id: number) => void
  alterQuantityOfCoffee: (id: number, quantity: number) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [coffeesInTheCart, setCoffeesInTheCart] = useState<CoffeeInTheCart[]>(
    [],
  )

  useEffect(() => {
    async function Coffees() {
      const { data } = await api.get<Coffee[]>('/coffees')
      setCoffees(data)
    }
    Coffees()
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesInTheCart)
    localStorage.setItem('coffeesDelivery:coffees-cart-1.0.0', stateJSON)
  }, [coffeesInTheCart])

  function addCoffeeInTheCart(coffee: CoffeeInTheCart) {
    const verifyCoffeeAlreadyExistsInCart = coffeesInTheCart.find(
      (item) => item.id === coffee.id,
    )

    if (verifyCoffeeAlreadyExistsInCart) {
      const updatedQuantityCoffee = coffeesInTheCart.map((item) => {
        if (item.id === coffee.id) {
          return { ...coffee, quantityOfCoffee: item.quantityOfCoffee + 1 }
        } else {
          return coffee
        }
      })
      setCoffeesInTheCart(updatedQuantityCoffee)
    } else {
      setCoffeesInTheCart((state) => [...state, coffee])
    }
  }

  function removeCoffeeInTheCart(id: number) {
    const coffeeExist = coffeesInTheCart.find((coffee) => coffee.id === id)

    if (!coffeeExist) return

    const updatedCoffeesInCart = coffeesInTheCart.filter(
      (coffee) => coffee !== coffeeExist,
    )

    setCoffeesInTheCart(updatedCoffeesInCart)
  }

  function alterQuantityOfCoffee(id: number, newQuantity: number) {
    const coffee = coffeesInTheCart.find((coffee) => coffee.id === id)

    if (!coffee) return

    const updatedQuantityCoffee = coffeesInTheCart.map((coffee) => {
      if (coffee.id === id) {
        return { ...coffee, quantityOfCoffee: newQuantity }
      } else {
        return coffee
      }
    })
    setCoffeesInTheCart(updatedQuantityCoffee)
  }

  function counterCoffeesInCart() {
    const coffeesInCart = coffeesInTheCart.reduce((acc, coffee) => {
      const quantity = coffee.quantityOfCoffee
      return acc + quantity
    }, 0)

    return coffeesInCart
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        addCoffeeInTheCart,
        counterCoffeesInCart,
        removeCoffeeInTheCart,
        alterQuantityOfCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
