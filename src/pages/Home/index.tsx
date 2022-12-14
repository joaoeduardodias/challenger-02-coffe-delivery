import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import illustrationImage from '../../assets/illustration.svg'
import { Header } from '../../components/Header'
import { HeroContainer, HomeContainer, Icon, ItemsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <HeroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ItemsContainer>
            <div>
              <Icon backgroundColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </Icon>

              <span>Compra simples e segura</span>
            </div>
            <div>
              <Icon backgroundColor="gray">
                <Package size={16} weight="fill" />
              </Icon>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Icon backgroundColor="yellow">
                <Timer size={16} weight="fill" />
              </Icon>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Icon backgroundColor="purple">
                <Coffee size={16} weight="fill" />
              </Icon>
              <span>O café chega fresquinho até você</span>
            </div>
          </ItemsContainer>
        </div>
        <img src={illustrationImage} alt="Copo de café com cereais ao lado" />
      </HeroContainer>
    </HomeContainer>
  )
}
