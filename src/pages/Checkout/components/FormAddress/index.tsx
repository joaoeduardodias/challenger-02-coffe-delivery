import { useFormContext } from 'react-hook-form'
import {
  BaseInput,
  FormAddressContainer,
  InputOptional,
  InputWrapper,
  NormalInput,
  SmallInput,
  TagOptional,
} from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function FormAddress() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <FormAddressContainer>
      <InputWrapper>
        <NormalInput
          type="text"
          id="zip_code"
          placeholder="CEP"
          {...register('zip_code')}
        />
        {errors?.zip_code && <p>{errors?.zip_code.message}</p>}
      </InputWrapper>
      <InputWrapper>
        <BaseInput
          type="text"
          id="street"
          placeholder="Rua"
          {...register('street')}
        />
        {errors?.street && <p>{errors?.street.message}</p>}
      </InputWrapper>
      <div>
        <InputWrapper>
          <NormalInput
            type="number"
            id="number"
            placeholder="Número"
            {...register('number')}
          />
          {errors?.number && <p>{errors?.number.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <InputOptional>
            <BaseInput
              type="text"
              id="complement"
              placeholder="Complemento"
              {...register('complement')}
            />
            <TagOptional>Opcional</TagOptional>
          </InputOptional>
        </InputWrapper>
      </div>
      <div>
        <InputWrapper>
          <NormalInput
            type="text"
            id="district"
            placeholder="Bairro"
            {...register('district')}
          />
          {errors?.district && <p>{errors?.district.message}</p>}
        </InputWrapper>
        <InputWrapper>
          <BaseInput
            type="text"
            id="city"
            placeholder="Cidade"
            {...register('city')}
          />
          {errors?.city && <p>{errors?.city.message}</p>}
        </InputWrapper>
        <InputWrapper>
          <SmallInput
            type="text"
            id="state"
            placeholder="UF"
            {...register('state')}
          />
          {errors?.state && <p>{errors?.state.message}</p>}
        </InputWrapper>
      </div>
    </FormAddressContainer>
  )
}
