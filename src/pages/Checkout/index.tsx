import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { formatterPrice } from '../../utils/formattedPrice'
import { CoffeeCart } from './components/CoffeeCart'
import { FormAddress } from './components/FormAddress'
import { SectionTitle } from './components/SectionTitle'
import {
  Address,
  ButtonMethodPayment,
  CardValues,
  CartContainer,
  CheckoutContainer,
  ListCoffeesInCart,
  MethodPayment,
  Payment,
  SectionBase,
} from './styles'

export function Checkout() {
  const { coffeesInCart, sumPriceTotal } = useContext(CoffeesContext)

  const theme = useTheme()
  const priceTotalCoffee = sumPriceTotal()
  const deliveryPrice = 5.5
  const totalPrice = priceTotalCoffee + deliveryPrice
  const [methodPaymentSelected, setMethodPaymentSelected] = useState<string>('')

  function handleSelectMethodPayment(method: 'CREDIT' | 'DEBIT' | 'MONEY') {
    setMethodPaymentSelected(method)
  }

  return (
    <CheckoutContainer>
      <SectionBase>
        <strong>Complete seu pedido</strong>
        <Address>
          <SectionTitle
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine color={theme['yellow-dark']} size={22} />}
          />
          <FormAddress />
        </Address>
        <Payment>
          <SectionTitle
            icon={<CurrencyDollar size={22} color={theme.purple} />}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />

          <MethodPayment>
            <ButtonMethodPayment
              onClick={(e) => handleSelectMethodPayment('CREDIT')}
              isSelected={methodPaymentSelected === 'CREDIT'}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </ButtonMethodPayment>
            <ButtonMethodPayment
              onClick={(e) => handleSelectMethodPayment('DEBIT')}
              isSelected={methodPaymentSelected === 'DEBIT'}
            >
              <Bank size={16} />
              cartão de débito
            </ButtonMethodPayment>
            <ButtonMethodPayment
              onClick={(e) => handleSelectMethodPayment('MONEY')}
              isSelected={methodPaymentSelected === 'MONEY'}
            >
              <Money size={16} />
              dinheiro
            </ButtonMethodPayment>
          </MethodPayment>
        </Payment>
      </SectionBase>
      <SectionBase>
        <strong>Cafeś selecionados</strong>
        <CartContainer>
          <ListCoffeesInCart>
            {coffeesInCart.map((coffee) => (
              <CoffeeCart key={coffee.id} {...coffee} />
            ))}
          </ListCoffeesInCart>

          <CardValues>
            <div>
              <p>Total de itens</p>
              <span>R${` ${formatterPrice(priceTotalCoffee)}`}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R${` ${formatterPrice(deliveryPrice)}`}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R${` ${formatterPrice(totalPrice)}`}</strong>
            </div>

            <button disabled={coffeesInCart.length <= 0}>
              Confirmar pedido
            </button>
          </CardValues>
        </CartContainer>
      </SectionBase>
    </CheckoutContainer>
  )
}
