import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import {
  AddCoffeeToCart,
  CardFooter,
  CoffeeContainer,
  Description,
  QuantityCoffee,
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

  function handleAlterQuantityCoffee(action: 'remove' | 'add') {
    if (action === 'remove') {
      setQuantityCoffee((state) => state - 1)
    }
    if (action === 'add') {
      setQuantityCoffee((state) => state + 1)
    }
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
          <span>R$</span> 9,90
        </strong>
        <div>
          <QuantityCoffee>
            <button
              disabled={quantityCoffee <= 1}
              onClick={(e) => handleAlterQuantityCoffee('remove')}
            >
              <Minus size={14} weight="fill" />
            </button>
            <span>{quantityCoffee}</span>
            <button onClick={(e) => handleAlterQuantityCoffee('add')}>
              <Plus size={14} weight="fill" />
            </button>
          </QuantityCoffee>
          <AddCoffeeToCart aria-label="Adicionar ao carrinho">
            <ShoppingCartSimple size={22} weight="fill" />
          </AddCoffeeToCart>
        </div>
      </CardFooter>
    </CoffeeContainer>
  )
}
