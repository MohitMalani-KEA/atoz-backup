import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { styled, Typography, Button } from '@mui/material'

const RescheduleMessage = () => {
  const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    // message for those who are not fully approved
    <MessageWrap>
      <animated.div style={styles} className='centerWrap'>
        <Typography variant='h5' gutterBottom color='primary'>
          <b>Please Reschedule Your Visit</b>
        </Typography>
        <Typography paragraph color='secondary'>
          {`In order to protect our workplace from the spread of the COVID-19
          virus, we ask that you reschedule your visit to a later date. Please
          contact our team for more information. We thank you for your
          cooperation.`}
        </Typography>
        <Button
          variant='contained'
          color='primary'
          href={`mailto:laboratory@atoz-labs.com?subject=I'd like to reschedule my ATOZ office visit`}>
          Contact Us
        </Button>
      </animated.div>
    </MessageWrap>
  )
}

export default RescheduleMessage

const MessageWrap = styled('div')({
  height: '100%',
  minHeight: '300px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  zIndex: 5,
  '& .centerWrap': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
