import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { FormAddress } from './components/FormAddress'
import { SectionTitle } from './components/SectionTitle'
import {
  Address,
  ButtonMethodPayment,
  CheckoutContainer,
  MethodPayment,
  Payment,
  SectionBase,
} from './styles'

export function Checkout() {
  const theme = useTheme()
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
        <div>
          <div>
            <div>
              <img src="/coffees/americano.png" />
              <div>
                <p>Expresso Tradicional</p>
                <strong>R$ 9,90</strong>
                <div>
                  <div>
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </div>
                  <button>
                    <Trash size={16} />
                    remover
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src="/coffees/latte.png" />
              <div>
                <p>Latte</p>
                <strong>R$ 19,80</strong>
                <div>
                  <div>
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </div>
                  <button>
                    <Trash size={16} />
                    remover
                  </button>
                </div>
              </div>
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </SectionBase>
    </CheckoutContainer>
  )
}
