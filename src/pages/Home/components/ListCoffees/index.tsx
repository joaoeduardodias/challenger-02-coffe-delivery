import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Coffee } from './Coffee'
import { List, ListCoffeesContainer } from './styles'

export function ListCoffees() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <ListCoffeesContainer>
      <h3>Nossos cafés</h3>

      <List>
        {coffees.map((coffee) => (
          <Coffee
            description={coffee.description}
            id={coffee.id}
            name={coffee.name}
            photo={coffee.photo}
            price={coffee.price}
            tags={coffee.tags}
            key={coffee.id}
          />
        ))}
      </List>
    </ListCoffeesContainer>
  )
}
