import { Grid, Button, Box } from '@mui/material'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import SuccessMessage from '../../forms/SuccessMessage'
import * as Yup from 'yup'
import FormikTextField from '../../forms/FormikTextField'
import FormikSelectionField from '../../forms/FormikSelectionField'
import FormikCommentBox from '../../forms/FormikCommentBox'

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const endpoint =
    'https://e9m0oupm7a.execute-api.us-east-1.amazonaws.com/default/sendEmail'

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
    <Box mt={4}>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={formValidation}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          handleSubmit(values, setSubmitting, resetForm)
        }>
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormikTextField name='fullName' label='Full Name' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormikTextField name='emailAddress' label='Email Address' />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormikTextField label='Company Name' name='companyName' />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormikTextField label='Phone Number' name='phone' />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormikSelectionField
                  name='subject'
                  label='Subject of Interest'
                  options={subjects}
                />
              </Grid>

              <Grid item xs={12}>
                <FormikCommentBox label='Comments' name='comments' />
              </Grid>

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

export default ContactForm

const subjects = [
  'General',
  'Testing Services',
  'Lab Technologies',
  'Scientists',
  'Careers',
]
const initialValues = {
  fullName: '',
  emailAddress: '',
  companyName: '',
  phone: '',
  subject: '',
  comments: '',
}
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const formValidation = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  emailAddress: Yup.string().email('Invalid Email').required('Required'),
  companyName: Yup.string().required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid Phone Number')
    .required('Required'),
  subject: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
})
