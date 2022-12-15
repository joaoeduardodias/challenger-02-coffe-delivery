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
export function Coffee() {
  const [quantityCoffee, setQuantityCoffee] = useState<number>(1)

  const typeCoffee = 'Expresso' // alter variable

  function handleAlterQuantityCoffee(action: 'remove' | 'add') {
    if (action === 'remove') {
      setQuantityCoffee((state) => quantityCoffee - 1)
    }
    if (action === 'add') {
      setQuantityCoffee((state) => quantityCoffee + 1)
    }
  }

  return (
    <CoffeeContainer>
      <img src={`src/assets/Type=${typeCoffee}.png`} />
      <TagsContainer>
        <Tag>tradicional</Tag>
        <Tag>árabe</Tag>
      </TagsContainer>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <strong>
          <span>R$</span> 9,90
        </strong>
        <div>
          <QuantityCoffee>
            <button onClick={(e) => handleAlterQuantityCoffee('remove')}>
              <Minus size={14} weight="fill" />
            </button>
            <span>{quantityCoffee}</span>
            <button onClick={(e) => handleAlterQuantityCoffee('add')}>
              <Plus size={14} weight="fill" />
            </button>
          </QuantityCoffee>
          <AddCoffeeToCart>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddCoffeeToCart>
        </div>
      </CardFooter>
    </CoffeeContainer>
  )
}
