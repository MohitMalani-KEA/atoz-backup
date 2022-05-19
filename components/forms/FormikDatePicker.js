import React from 'react'
import { useField, useFormikContext } from 'formik'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterMoment from '@mui/lab/AdapterMoment'

const FormikDatePicker = ({ name, ...rest }) => {
  const [field] = useField(name)
  const { setFieldValue, values } = useFormikContext()

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        {...rest}
        {...field}
        value={values.date}
        onChange={(value) => setFieldValue('date', value)}
        renderInput={(props) => (
          <TextField {...props} format='MM/dd/yyyy' fullWidth />
        )}
      />
    </LocalizationProvider>
  )
}

export default FormikDatePicker
