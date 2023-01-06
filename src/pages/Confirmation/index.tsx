import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import confirmedOrderIllustration from '../../assets/confirmedOrder.svg'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/PaymentMethodOptions'
import {
  ConfirmationContainer,
  IconClock,
  IconMap,
  IconMoney,
  InfoWithIcon,
  OrderDetailsContainer,
} from './styles'

interface LocationType {
  state: OrderData
}

export function Confirmation() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <ConfirmationContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon>
            <IconMap>
              <MapPin size={16} weight="fill" />
            </IconMap>
            <div>
              <address>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
              </address>
              <address>
                {state.district} - {state.city}, {state.state}
              </address>
            </div>
          </InfoWithIcon>
          <InfoWithIcon>
            <IconClock>
              <Clock size={16} weight="fill" />
            </IconClock>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20min - 30min</strong>
              </p>
            </div>
          </InfoWithIcon>
          <InfoWithIcon>
            <IconMoney>
              <CurrencyDollar size={16} weight="fill" />
            </IconMoney>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            </div>
          </InfoWithIcon>
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </ConfirmationContainer>
  )
}
