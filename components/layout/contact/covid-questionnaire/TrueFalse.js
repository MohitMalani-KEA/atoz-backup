import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
} from '@mui/material'
import FormikRadioGroup from '../../../forms/FormikRadioGroup'
import { formatDate } from '../../../../utils/dateFormat'
import FormikTextField from '../../../forms/FormikTextField'
import FormikDatePicker from '../../../forms/FormikDatePicker'

const TrueFalse = ({ setSubmitSuccess, setApproved }) => {
  //handle form submit
  const handleSubmit = async (values, resetForm) => {
    const {
      fullyVaccinated,
      symptomsExperienced,
      proximityToCovid,
      awaitingTestResults,
      internationalTravel,
      date,
    } = values

    const endpointApproved = `https://e9m0oupm7a.execute-api.us-east-1.amazonaws.com/default/sendCovidEmail`
    const endpointWarning = `https://e9m0oupm7a.execute-api.us-east-1.amazonaws.com/sendCovidWarningEmail`

    // check for approval
    if (
      fullyVaccinated === 'Yes' &&
      symptomsExperienced === 'No' &&
      proximityToCovid === 'No' &&
      awaitingTestResults === 'No' &&
      internationalTravel === 'No'
    ) {
      // approved
      // format date for email
      const finalValues = {
        ...values,
        date: formatDate(date.toString()),
      }
      // stringify JSON for endpoint
      const body = JSON.stringify(finalValues)
      const requestOptions = {
        method: 'POST',
        body: body,
      }
      await fetch(endpointApproved, requestOptions).then(
        (res) => {
          resetForm()
          window.scrollTo(0, 0)
          setSubmitSuccess(true)
        },
        (err) => console.error(err)
      )
    } else {
      // flagged
      const finalValues = {
        ...values,
        date: formatDate(date.toString()),
      }
      const body = JSON.stringify(finalValues)
      const requestOptions = {
        method: 'POST',
        body: body,
      }
      await fetch(endpointWarning, requestOptions).then(
        (res) => {
          resetForm()
          window.scrollTo(0, 0)
          setApproved(false)
        },
        (err) => console.error(err)
      )
    }
  }

  return (
    <div>
      <Box mb={3}>
        <Divider />
      </Box>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={formValidation}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          handleSubmit(values, setSubmitting, resetForm)
        }>
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <Box mb={2}>
              <Typography>
                {`I am fully vaccinated. (To be considered fully vaccinated, you must be two weeks beyond receipt of the second dose of the PFIZER or MODERNA vaccine or the single dose Johnson & Johnson vaccine.`}
              </Typography>
              <Field
                name='fullyVaccinated'
                component={FormikRadioGroup}
                color='primary'
                options={options}
              />
            </Box>

            <Typography style={{ fontWeight: 'bold' }} paragraph>
              {`If you are not fully vaccinated or do not wish to disclose your
              vaccination status, you must (i) wear a mask that covers your nose
              and mouth, (ii) maintain 6 feet of separation from others while
              navigating all common areas within our space and (iii) answer the
              following questions on the date of your visit. Should you answer
              “yes” to any of the questions below, please reschedule your office
              visit.`}
            </Typography>

            <Box mb={2}>
              <Typography>
                {`Have you experienced symptoms such as fever or chills, cough,
              shortness of breath or difficulty breathing, fatigue, muscle or
              body aches, headache, new loss of taste or smell, sore throat,
              congestion or runny nose, nausea or vomiting or diarrhea in the
              past 48 hours?`}
              </Typography>
              <Field
                name='symptomsExperienced'
                component={FormikRadioGroup}
                color='primary'
                options={options}
              />
            </Box>

            <Box mb={2}>
              <Typography>
                {`Have you been in close contact in the last 14 days with anyone
                who is known by you to have laboratory-confirmed COVID-19 or
                anyone who has any symptoms consistent with COVID-19? Close
                contact is defined as being within 6 feet of an
                infected/symptomatic individual for a cumulative total of 15
                minutes within a 24-hour period.`}
              </Typography>
              <Field
                name='proximityToCovid'
                component={FormikRadioGroup}
                color='primary'
                options={options}
              />
            </Box>

            <Box mb={2}>
              <Typography>
                {`Are you currently awaiting the results of a COVID-19 test?`}
              </Typography>
              <Field
                name='awaitingTestResults'
                component={FormikRadioGroup}
                color='primary'
                options={options}
              />
            </Box>

            <Box mb={2}>
              <Typography>
                {`Have you traveled internationally in the past 10 days and have
                not received a negative COVID-19 test result administered 3-5
                days following your return?`}
              </Typography>
              <Field
                name='internationalTravel'
                component={FormikRadioGroup}
                color='primary'
                options={options}
              />
            </Box>

            <Box mb={3}>
              <Divider />
            </Box>

            <Typography style={{ fontWeight: 'bold' }} paragraph>
              {`I affirm that my responses to the questions above are true and
              correct and that I will comply with the requirements set forth
              above.`}
            </Typography>

            <Grid container spacing={2}>
              <Grid item sm={6}>
                <FormikTextField label='Name' name='name' />
              </Grid>

              <Grid item sm={6}>
                <FormikDatePicker label='date' name='Date' />
              </Grid>

              <Grid item xs={12}>
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
    </div>
  )
}

export default TrueFalse

const initialValues = {
  fullyVaccinated: '',
  symptomsExperienced: '',
  proximityToCovid: '',
  awaitingTestResults: '',
  internationalTravel: '',
  name: '',
  date: new Date(),
}

const formValidation = Yup.object().shape({
  fullyVaccinated: Yup.string().required('Required'),
  symptomsExperienced: Yup.string().required('Required'),
  proximityToCovid: Yup.string().required('Required'),
  awaitingTestResults: Yup.string().required('Required'),
  internationalTravel: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
})

const options = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
]
