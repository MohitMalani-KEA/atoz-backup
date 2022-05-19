import React from 'react'
import { Formik, Form } from 'formik'
import SuccessMessage from './SuccessMessage'
import { Grid, Button } from '@mui/material'

const FormikWrap = ({
  initialValues,
  formValidation,
  endpoint,
  children,
  setSubmitSuccess,
  submitSuccess,
}) => {
  const handleSubmit = async (values, resetForm) => {
    const body = JSON.stringify(values)
    const requestOptions = {
      method: 'POST',
      body,
    }
    await fetch(endpoint, requestOptions).then(
      (res) => {
        resetForm()
        setSubmitSuccess(true)
      },
      (err) => console.error(err)
    )
  }

  if (submitSuccess) {
    return <SuccessMessage />
  }

  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={formValidation}
      onSubmit={(values, { setSubmitting, resetForm }) =>
        handleSubmit(values, setSubmitting, resetForm)
      }>
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={3}>
          
            {children}

            <Grid item xs={12} align='center'>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default FormikWrap
