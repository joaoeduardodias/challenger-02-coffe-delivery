import {
  BaseInput,
  FormAddressContainer,
  InputOptional,
  NormalInput,
  SmallInput,
  TagOptional,
} from './styles'

export function FormAddress() {
  return (
    <FormAddressContainer>
      <NormalInput
        type="text"
        name="zip_code"
        id="zip_code"
        placeholder="CEP"
      />
      <BaseInput type="text" name="street" id="street" placeholder="Rua" />
      <div>
        <NormalInput
          type="number"
          name="number"
          id="number"
          placeholder="Número"
        />
        <InputOptional>
          <BaseInput
            type="text"
            name="complement"
            id="complement"
            placeholder="Complemento"
          />
          <TagOptional>Opcional</TagOptional>
        </InputOptional>
      </div>
      <div>
        <NormalInput
          type="text"
          name="district"
          id="district"
          placeholder="Bairro"
        />
        <BaseInput type="text" name="city" id="city" placeholder="Cidade" />
        <SmallInput type="text" name="state" id="state" placeholder="UF" />
      </div>
    </FormAddressContainer>
  )
}
