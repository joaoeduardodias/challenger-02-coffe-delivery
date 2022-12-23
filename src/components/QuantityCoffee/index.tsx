import { Minus, Plus } from 'phosphor-react'
import { QuantityCoffeeContainer } from './styles'

interface QuantityCoffeeProps {
  quantity: number
  onChangeQuantity: (action: 'add' | 'remove') => void
}

export function QuantityCoffee({
  quantity,
  onChangeQuantity,
}: QuantityCoffeeProps) {
  return (
    <QuantityCoffeeContainer>
      <button
        disabled={quantity <= 1}
        onClick={(e) => onChangeQuantity('remove')}
      >
        <Minus size={14} weight="fill" />
      </button>
      <span>{quantity}</span>
      <button onClick={(e) => onChangeQuantity('add')}>
        <Plus size={14} weight="fill" />
      </button>
    </QuantityCoffeeContainer>
  )
}
