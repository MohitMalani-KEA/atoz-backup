import {
  Grid,
  Button,
  Box,
  Typography,
  FormHelperText,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import SuccessMessage from '../../forms/SuccessMessage'
import * as Yup from 'yup'
import theme from '../../../src/theme'
import FormikTextField from '../../forms/FormikTextField'

const NewCustomerForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (values, setSubmitting, resetForm) => {
    const endpoint =
      'https://e9m0oupm7a.execute-api.us-east-1.amazonaws.com/default/newCustomerSignUp'
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
    setSubmitting(false)
  }

  if (submitSuccess) {
    return <SuccessMessage />
  }

  return (
    <Box mt={3}>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={formValidation}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          handleSubmit(values, setSubmitting, resetForm)
        }>
        {({ isSubmitting, errors, handleChange }) => (
          <Form>
            <Grid container spacing={3}>
              {/* user info section */}
              <Grid item xs={12}>
                <Typography variant='h4' color='secondary'>
                  Primary Contact Information
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormikTextField label='First Name' name='firstName' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormikTextField label='Last Name' name='lastName' />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormikTextField label='Email' name='email' />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormikTextField label='Phone Number' name='phone' />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormikTextField label='Job Title' name='jobTitle' />
              </Grid>

              {/* business info section */}

              <Grid item xs={12}>
                <Typography
                  variant='h4'
                  color='secondary'
                  style={{ marginTop: theme.spacing(2) }}>
                  Business Information
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <FormikTextField label='Business Name' name='businessName' />
              </Grid>

              <Grid item xs={12} md={8}>
                <FormikTextField
                  label='Business Description'
                  name='businessDescription'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormikTextField
                  label='Business Street'
                  name='businessStreet'
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormikTextField label='Business City' name='businessCity' />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormikTextField label='Business State' name='businessState' />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormikTextField
                  label='Business Country'
                  name='businessCountry'
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormikTextField
                  label='Business Postal Code'
                  name='businessPostal'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormikTextField
                  label='Business License Number'
                  name='licenseNumber'
                />
              </Grid>

              {/* terms and conditions */}
              <Grid item xs={12}>
                <Typography
                  variant='h4'
                  color='secondary'
                  style={{ marginTop: theme.spacing(2) }}>
                  Terms And Conditions
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Field
                      component={Checkbox}
                      type='checkbox'
                      name='termsAgreed'
                      id='termsAgreed'
                      onChange={handleChange}
                    />
                  }
                  label='I agree to the ATOZ Laboratories terms and conditions'
                />

                {errors.termsAgreed && (
                  <FormHelperText style={{ color: theme.palette.error.main }}>
                    Please read and agree to our terms and conditions
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <Button
                  style={{ fontWeight: 400, textDecoration: 'none' }}
                  variant='outlined'
                  color='primary'
                  href={terms}
                  target='_blank'
                  rel='noreferrer'>
                  View terms and conditions
                </Button>
              </Grid>

              {/* submit form */}
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
    </Box>
  )
}

export default NewCustomerForm

const initialValues = {
  businessName: '',
  businessDescription: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  jobTitle: '',
  businessStreet: '',
  businessCity: '',
  businessState: '',
  businessCountry: '',
  businessPostal: '',
  licenseNumber: '',
  termsAgreed: false,
}

const formValidation = Yup.object().shape({
  businessName: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('This field only accepts numbers')
    .required('Required'),
  jobTitle: Yup.string().required('Required'),
  businessDescription: Yup.string().required('Required'),
  businessStreet: Yup.string().required('Required'),
  businessCity: Yup.string().required('Required'),
  businessState: Yup.string().required('Required'),
  businessCountry: Yup.string().required('Required'),
  businessPostal: Yup.string().required('Required'),
  licenseNumber: Yup.string().required('Required'),
  termsAgreed: Yup.bool().oneOf(
    [true],
    'Please read and agree to our terms and conditions'
  ),
})

const terms = '/ATOZ Terms And Conditions.pdf'
