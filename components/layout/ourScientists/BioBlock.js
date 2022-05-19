import { styled, Container, Typography, Grid, Paper } from '@mui/material'
import theme from '../../../src/theme'
import Trail from '../../util/Trail'

const BioBlock = ({ name, role, image, children }) => {
  const ContentContainer = styled('div')({
    width: '100%',
    background: theme.palette.secondary.light,
    '&:nth-of-type(odd)': {
      background: 'white',
    },
    '& > div': {
      padding: theme.spacing(3),
    },
  })

  return (
    <ContentContainer>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems='center'
          justifyContent='space-between'
          direction='row-reverse'>
          <Grid item xs={12}>
            <Trail>
              {/* conditional name */}
              {name && (
                <Typography variant='h3' color='textSecondary'>
                  {name}
                </Typography>
              )}

              {/* conditional role */}
              {role && (
                <Typography variant='h5' color='secondary' gutterBottom>
                  {role}
                </Typography>
              )}

              {/* children */}
              {children && <ChildWrapper>{children}</ChildWrapper>}
            </Trail>
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <Trail>
              <ImageWrap />
            </Trail>
          </Grid> */}
        </Grid>
      </Container>
    </ContentContainer>
  );
}

export default BioBlock

const ChildWrapper = styled('div')({
  fontSize: 16,
  '& li': {
    marginBottom: theme.spacing(2),
    '& ul': {
      marginTop: theme.spacing(2),
    },
  },
})

const ImageWrap = styled(Paper)({
  height: '400px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
})
