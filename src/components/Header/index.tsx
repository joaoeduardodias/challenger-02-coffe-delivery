import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import { Cart, HeaderContainer, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} />

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>

        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
