import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { QuantityCoffee } from '../../../../components/QuantityCoffee'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { formatterPrice } from '../../../../utils/formattedPrice'
import { CoffeeCartContainer, CoffeeCartContent, Divider } from './styles'

interface CoffeeCartProps {
  id: number
  name: string
  photo: string
  price: number
  quantity: number
}

export function CoffeeCart({
  id,
  name,
  photo,
  price,
  quantity,
}: CoffeeCartProps) {
  const { removeCoffeeInCart, changeQuantityCoffee } =
    useContext(CoffeesContext)

  function handleIncrease() {
    changeQuantityCoffee(id, 'increase')
  }

  function handleDecrease() {
    changeQuantityCoffee(id, 'decrease')
  }

  return (
    <CoffeeCartContainer>
      <CoffeeCartContent>
        <img src={`/coffees/${photo}`} />

        <h4>{name}</h4>

        <div>
          <QuantityCoffee
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            quantity={quantity}
          />
          <button onClick={() => removeCoffeeInCart(id)}>
            <Trash size={16} />
            remover
          </button>
        </div>

        <strong>
          <span>R$</span>
          {formatterPrice(price * quantity)}
        </strong>
      </CoffeeCartContent>
      <Divider />
    </CoffeeCartContainer>
  )
}
