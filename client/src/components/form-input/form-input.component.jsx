import React from 'react'
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles'

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
)

export default FormInput
