import { Coffee } from './Coffee'
import { List, ListCoffeesContainer } from './styles'

export function ListCoffees() {
  return (
    <ListCoffeesContainer>
      <h3>Nossos cafés</h3>

      <List>
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
      </List>
    </ListCoffeesContainer>
  )
}
