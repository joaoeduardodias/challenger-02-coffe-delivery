import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { QuantityCoffee } from '../../components/QuantityCoffee'
import { FormAddress } from './components/FormAddress'
import { SectionTitle } from './components/SectionTitle'
import {
  Address,
  ButtonMethodPayment,
  CardValues,
  CartContainer,
  CheckoutContainer,
  CoffeeCart,
  Divider,
  ListCoffeesInCart,
  MethodPayment,
  Payment,
  SectionBase,
} from './styles'

export function Checkout() {
  const theme = useTheme()
  const [quantityCoffee, setQuantityCoffee] = useState<number>(1)

  const [methodPaymentSelected, setMethodPaymentSelected] = useState<string>('')

  function handleSelectMethodPayment(method: 'CREDIT' | 'DEBIT' | 'MONEY') {
    setMethodPaymentSelected(method)
  }

  function handleAlterQuantityCoffee(action: 'remove' | 'add') {
    if (action === 'remove') {
      setQuantityCoffee((state) => state - 1)
    }
    if (action === 'add') {
      setQuantityCoffee((state) => state + 1)
    }
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
            <CoffeeCart>
              <img src="/coffees/americano.png" />

              <h4>expresso tradicional</h4>

              <div>
                <QuantityCoffee
                  onChangeQuantity={handleAlterQuantityCoffee}
                  quantity={quantityCoffee}
                />
                <button>
                  <Trash size={16} />
                  remover
                </button>
              </div>

              <strong>
                <span>R$</span> 9,90
              </strong>
            </CoffeeCart>
            <Divider />
          </ListCoffeesInCart>

          <CardValues>
            <div>
              <p>Total de itens</p> <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p> <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong> <strong>R$ 33,20</strong>
            </div>
            <button>Confirmar pedido </button>
          </CardValues>
        </CartContainer>
      </SectionBase>
    </CheckoutContainer>
  )
}
