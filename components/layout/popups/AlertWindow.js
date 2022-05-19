import { styled } from '@mui/system'
import { Paper, Box, Typography, Button } from '@mui/material'
import theme, { ColorStripe } from '../../../src/theme'
import { useRouter } from 'next/router'

const AlertWindow = ({
  initialTitle,
  rejectedTitle,
  initialMessage,
  rejectedMessage,
  confirmedButtonText,
  rejectedButtonText,
  handleConfirmed,
  handleRejected,
  trigger,
  rejected,
  useChildren,
  children,
}) => {
  const router = useRouter()

  if (!trigger && useChildren && !rejected) {
    return (
      <AlertWrap>
        <ColorStripe />
        <AlertBox>
          {initialTitle && (
            <Typography
              variant='h5'
              component='h1'
              color='textSecondary'
              gutterBottom>
              {initialTitle}
            </Typography>
          )}
          {initialMessage && (
            <Typography paragraph>{initialMessage}</Typography>
          )}
          {children}
          <ButtonWrap sx={{ mt: 2 }}>
            {rejectedButtonText && (
              <Button
                color='primary'
                variant='outlined'
                onClick={handleRejected}>
                {rejectedButtonText}
              </Button>
            )}
          </ButtonWrap>
        </AlertBox>
      </AlertWrap>
    )
  }

  if (useChildren && rejected) {
    return (
      <AlertWrap>
        <ColorStripe />
        <AlertBox>
          {rejectedTitle && (
            <Typography
              variant='h5'
              component='h1'
              color='textSecondary'
              gutterBottom>
              {rejectedTitle}
            </Typography>
          )}
          {rejectedMessage && (
            <Typography paragraph>{rejectedMessage}</Typography>
          )}
          <ButtonWrap sx={{ mt: 2 }}>
            <Button
              color='primary'
              variant='contained'
              onClick={() => router.back()}>
              Back
            </Button>
          </ButtonWrap>
        </AlertBox>
      </AlertWrap>
    )
  }

  if (!trigger && !rejected) {
    return (
      <AlertWrap>
        <ColorStripe />
        <AlertBox>
          {initialTitle && (
            <Typography
              variant='h5'
              component='h1'
              color='textSecondary'
              gutterBottom>
              {initialTitle}
            </Typography>
          )}
          {initialMessage && (
            <Typography paragraph>{initialMessage}</Typography>
          )}
          <ButtonWrap sx={{ mt: 2 }}>
            {confirmedButtonText && (
              <Button
                color='primary'
                variant='contained'
                onClick={handleConfirmed}>
                {confirmedButtonText}
              </Button>
            )}
            {rejectedButtonText && (
              <Button
                color='primary'
                variant='outlined'
                onClick={handleRejected}>
                {rejectedButtonText}
              </Button>
            )}
          </ButtonWrap>
        </AlertBox>
      </AlertWrap>
    )
  }

  if (rejected) {
    return (
      <AlertWrap>
        <ColorStripe />
        <AlertBox>
          {rejectedTitle && (
            <Typography
              variant='h5'
              component='h1'
              color='textSecondary'
              gutterBottom>
              {rejectedTitle}
            </Typography>
          )}
          {rejectedMessage && (
            <Typography paragraph>{rejectedMessage}</Typography>
          )}
        </AlertBox>
      </AlertWrap>
    )
  }
}

export default AlertWindow

const AlertWrap = styled(Paper)({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  maxWidth: 600,
})
const AlertBox = styled('div')({
  padding: theme.spacing(2),
  height: '100%',
})
const ButtonWrap = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  '& > button': {
    marginLeft: theme.spacing(1),
  },
})
