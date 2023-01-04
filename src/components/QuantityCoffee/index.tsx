import { Minus, Plus } from 'phosphor-react'
import { QuantityCoffeeContainer } from './styles'

interface QuantityCoffeeProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityCoffee({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityCoffeeProps) {
  return (
    <QuantityCoffeeContainer>
      <button disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </button>
    </QuantityCoffeeContainer>
  )
}
