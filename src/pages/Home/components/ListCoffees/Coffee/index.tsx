import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { QuantityCoffee } from '../../../../../components/QuantityCoffee'
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
          <span>R$</span> {formatterPrice(price)}
        </strong>
        <div>
          <QuantityCoffee
            quantity={quantityCoffee}
            onChangeQuantity={handleAlterQuantityCoffee}
          />

          <AddCoffeeToCart aria-label="Adicionar ao carrinho">
            <ShoppingCartSimple size={22} weight="fill" />
          </AddCoffeeToCart>
        </div>
      </CardFooter>
    </CoffeeContainer>
  )
}
