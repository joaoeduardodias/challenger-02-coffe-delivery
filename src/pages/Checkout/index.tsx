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
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <strong>Complete seu pedido</strong>
        <div>
          <div>
            <MapPinLine size={22} />
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
          <form action="">
            <input
              type="text"
              name="zip_code"
              id="zip_code"
              placeholder="CEP"
            />
            <input type="text" name="street" id="street" placeholder="Rua" />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Número"
            />
            <input
              type="text"
              name="complement"
              id="complement"
              placeholder="Complemento"
            />
            <input
              type="text"
              name="district"
              id="district"
              placeholder="Bairro"
            />
            <input type="text" name="city" id="city" placeholder="Cidade" />
            <input type="text" name="state" id="state" placeholder="UF" />
          </form>
        </div>
        <div>
          <div>
            <CurrencyDollar size={22} />
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>

            <div>
              <button>
                <CreditCard size={16} />
                Cartão de crédito
              </button>
              <button>
                <Bank size={16} />
                cartão de débito
              </button>
              <button>
                <Money size={16} />
                dinheiro
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
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
      </div>
    </CheckoutContainer>
  )
}
