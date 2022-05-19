import React from 'react'
import { useField, useFormikContext } from 'formik'
import { TextField, styled, MenuItem, FormHelperText } from '@mui/material'
import theme from '../../src/theme'

const FormikSelectionField = ({ name, options, ...rest }) => {
  const [field, meta] = useField(name)
  const { setFieldValue } = useFormikContext()

  const handleChange = (e) => {
    const { value } = e.target
    setFieldValue(name, value)
  }

  const selectConfig = {
    ...field,
    select: true,
    fullWidth: true,
    onChange: handleChange,
  }

  return (
    <>
      <TextField
        {...rest}
        {...selectConfig}
        id={name}
        name={name}
        error={meta.error && meta.touched}>
        {options?.map((option, i) => {
          return (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          )
        })}
      </TextField>
      {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
    </>
  )
}

export default FormikSelectionField

const ErrorText = styled(FormHelperText)({
  paddingLeft: theme.spacing(2),
  color: theme.palette.error.main,
})
