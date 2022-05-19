import React from 'react'
import { useField, useFormikContext } from 'formik'
import { TextField, styled, FormHelperText } from '@mui/material'
import theme from '../../src/theme'

const FormikCommentBox = ({ name, ...rest }) => {
  const [field, meta] = useField(name)
  const { setFieldValue } = useFormikContext()

  const handleChange = (e) => {
    const { value } = e.target
    setFieldValue(name, value)
  }

  const fieldConfig = {
    ...field,
    fullWidth: true,
    multiline: true,
    rows: 5,
    margin: 'dense',
    onChange: handleChange,
  }
  return (
    <>
      <TextField
        {...rest}
        {...fieldConfig}
        name={name}
        error={meta.error && meta.touched}
      />
      {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
    </>
  )
}

export default FormikCommentBox

const ErrorText = styled(FormHelperText)({
  paddingLeft: theme.spacing(2),
  color: theme.palette.error.main,
})
