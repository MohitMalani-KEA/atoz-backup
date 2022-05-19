import { Grid, Button } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikTextField from '../../forms/FormikTextField'

const WhitePaperSignupForm = ({ setTrigger, asset }) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
  }
  const formValidation = Yup.object().shape({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
  })

  const handleSubmit = () => {
    setTrigger(false)
    window.open(asset, '_blank')
  }

  return (
    <>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={formValidation}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          handleSubmit(values, setSubmitting, resetForm)
        }>
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormikTextField name='firstname' label='First Name' />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormikTextField name='lastname' label='Last Name' />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField name='email' label='Email' />
              </Grid>
              <Grid item xs={12} align='center'>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  variant='contained'
                  color='primary'>
                  Download White Paper
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default WhitePaperSignupForm

// const handleChange = (e, index) => {
//     const { value } = e.target
//     const updateData = { fields: [...values.fields] }
//     updateData.fields[index].value = value
//     return setValues(updateData)
//   }
