import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethod = forwardRef<HTMLInputElement, PaymentMethodProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PaymentMethodContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
    )
  },
)
