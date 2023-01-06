import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import confirmedOrderIllustration from '../../assets/confirmedOrder.svg'
import {
  ConfirmationContainer,
  IconClock,
  IconMap,
  IconMoney,
  InfoWithIcon,
  OrderDetailsContainer,
} from './styles'

export function Confirmation() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </address>
              <address>Farrapos - Porto Alegre, RS</address>
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
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </InfoWithIcon>
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </ConfirmationContainer>
  )
}
