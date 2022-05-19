import React from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from './Radio'
import { FormHelperText, styled } from '@mui/material'
import theme from '../../src/theme'

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  options,
  onChange,
  ...props
}) => {
  const fieldName = name || field.name

  return (
    <React.Fragment>
      <RadioGroup {...field} {...props} name={fieldName}>
        {options?.map((option, i) => (
          <Radio
            value={option.value}
            checked={field.value === option.value}
            onChange={field.onChange}
            label={option.label}
            id={fieldName}
            key={i}
          />
        ))}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <ErrorText>{errors[fieldName]}</ErrorText>
      )}
    </React.Fragment>
  )
}

export default FormikRadioGroup

const ErrorText = styled(FormHelperText)({
  color: theme.palette.error.main,
})
