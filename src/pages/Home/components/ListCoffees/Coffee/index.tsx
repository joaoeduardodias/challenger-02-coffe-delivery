import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { QuantityCoffee } from '../../../../../components/QuantityCoffee'
import {
  CoffeeInTheCart,
  CoffeesContext,
} from '../../../../../contexts/CoffeesContext'
import { formatterPrice } from '../../../../../utils/formattedPrice'
import {
  AddCoffeeToCart,
  CardFooter,
  CoffeeContainer,
  Description,
  Tag,
  TagsContainer,
  Title,
} from './styles'

interface CoffeeProps {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export function Coffee({
  description,
  name,
  photo,
  price,
  tags,
  id,
}: CoffeeProps) {
  const [quantityCoffee, setQuantityCoffee] = useState<number>(1)

  const { addCoffeeInCart } = useContext(CoffeesContext)

  function handleDecrease() {
    setQuantityCoffee((state) => state - 1)
  }
  function handleIncrease() {
    setQuantityCoffee((state) => state + 1)
  }

  function handleAddCoffeeToCart() {
    const coffee: CoffeeInTheCart = {
      id,
      description,
      name,
      photo,
      price,
      tags,
      quantity: quantityCoffee,
    }

    addCoffeeInCart(coffee)
  }

  return (
    <CoffeeContainer>
      <img src={`/coffees/${photo}`} />
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={`${id}-${tag}`}>{tag}</Tag>
        ))}
      </TagsContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>

      <CardFooter>
        <strong>
          <span>R$</span> {formatterPrice(price)}
        </strong>
        <div>
          <QuantityCoffee
            quantity={quantityCoffee}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />

          <AddCoffeeToCart
            aria-label="Adicionar ao carrinho"
            onClick={handleAddCoffeeToCart}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </AddCoffeeToCart>
        </div>
      </CardFooter>
    </CoffeeContainer>
  )
}
