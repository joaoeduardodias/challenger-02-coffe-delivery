import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { Cart, HeaderContainer, Location } from './styles'

export function Header() {
  const { counterCoffeesInCart } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} />
      </NavLink>

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>

        <nav>
          <NavLink to="/checkout">
            <Cart total={counterCoffeesInCart}>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
