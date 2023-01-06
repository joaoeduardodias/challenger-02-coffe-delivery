import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { formatterPrice } from '../../utils/formattedPrice'
import { CoffeeCart } from './components/CoffeeCart'
import { FormAddress } from './components/FormAddress'
import { SectionTitle } from './components/SectionTitle'
import {
  Address,
  CardValues,
  CartContainer,
  CheckoutContainer,
  ListCoffeesInCart,
  Payment,
  SectionBase,
} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { PaymentMethodOptions } from './components/PaymentMethodOptions'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  zip_code: zod.string().min(5, 'Informe o CEP'),
  street: zod.string().min(4, 'Informe a Rua'),
  number: zod.string().min(2, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(3, 'Informe o Bairro'),
  city: zod.string().min(4, 'Informe a Cidade'),
  state: zod.string().min(2, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const { coffeesInCart, sumPriceTotal, cleanCart } = useContext(CoffeesContext)
  const theme = useTheme()
  const priceTotalCoffee = sumPriceTotal()
  const deliveryPrice = 5.5
  const totalPrice = priceTotalCoffee + deliveryPrice

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })
  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/confirmation', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
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

            <PaymentMethodOptions />
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

              <button type="submit" disabled={coffeesInCart.length <= 0}>
                Confirmar pedido
              </button>
            </CardValues>
          </CartContainer>
        </SectionBase>
      </CheckoutContainer>
    </FormProvider>
  )
}
