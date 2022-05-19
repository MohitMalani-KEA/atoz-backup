import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Grid, Button, Typography, Box } from '@mui/material'
import FormikTextField from '../../forms/FormikTextField'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

const NewsletterSignupForm = ({ submitOverride }) => {
  const postURL = `${process.env.mailchimp_action}?u=${process.env.name_u}&id=${process.env.name_id}`
  const initialValues = {
    MERGE1: '',
    MERGE2: '',
    MERGE0: '',
  }
  const formValidation = Yup.object().shape({
    MERGE1: Yup.string().required('Required'),
    MERGE2: Yup.string().required('Required'),
    MERGE0: Yup.string().email('Invalid Email').required('Required'),
  })

  // if subscription value does not exist (not found in local storage)
  return (
    <MailchimpSubscribe
      url={postURL}
      render={({ subscribe, status }) => {
        // submit logic
        const handleSubmit = async (values, setSubmitting, resetForm) => {
          if (status === 'sending') {
            setSubmitting(true)
          }
          subscribe(values)
          resetForm()
          setSubscribed(true)
          setSubmitting(false)
        }
        // conditional success message
        if (status === 'success') {
          return (
            <>
              <Typography variant='h4' paragraph>
                {`Thank You For Subscribing`}
              </Typography>
              <Typography paragraph>
                {`We'll be in touch with you soon.`}
              </Typography>
            </>
          )
        }

        //  standard return
        return (
          <>
            <Formik
              initialValues={{ ...initialValues }}
              validationSchema={formValidation}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // if an override is provided to this component
                if (submitOverride) {
                  return submitOverride(
                    values,
                    setSubmitting,
                    resetForm,
                    subscribe,
                    status
                  )
                }
                // default handle submit function
                return handleSubmit(values, setSubmitting, resetForm)
              }}>
              {() => (
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormikTextField name='MERGE1' label='First Name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormikTextField name='MERGE2' label='Last Name' />
                    </Grid>
                    <Grid item xs={12}>
                      <FormikTextField name='MERGE0' label='Email Address' />
                    </Grid>
                    <Grid item xs={12} align='center'>
                      <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        disabled={status === 'sending'}>
                        Signup
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>

            {/* show error */}
            {status === 'error' && (
              <Box mt={3}>
                <Typography color='error' paragraph>
                  Something went wrong! Please try again.
                </Typography>
              </Box>
            )}
          </>
        )
      }}
    />
  )
}

export default NewsletterSignupForm
