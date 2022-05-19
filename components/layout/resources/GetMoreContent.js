import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import UrlCheck from './UrlCheck'
import { Box, styled } from '@mui/system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import theme, { ColorStripe } from '../../../src/theme'

const GetMoreContent = ({ nextPost, previousPost }) => {
  if (nextPost || previousPost) {
    return (
      <div>
        <Box pt={3} pb={1}>
          <ColorStripe />
        </Box>
        <DirectoryWrap container>
          <Grid item xs={12}>
            <Typography
              sx={{ mt: 2 }}
              variant='h4'
              color='secondary'
              gutterBottom>
              More Updates From ATOZ Labs
            </Typography>
          </Grid>

          <Grid container item spacing={2} mt={2}>
            <Grid item md={6}>
              {previousPost ? (
                <UrlCheck link={previousPost}>
                  <GoToButton>
                    <ArrowBackIcon className='left' />
                    <Typography
                      sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {previousPost.title}
                    </Typography>
                  </GoToButton>
                </UrlCheck>
              ) : null}
            </Grid>

            <Grid item md={6}>
              {nextPost ? (
                <UrlCheck link={nextPost}>
                  <GoToButton>
                    <Typography
                      sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {nextPost.title}
                    </Typography>
                    <ArrowForwardIcon className='right' />
                  </GoToButton>
                </UrlCheck>
              ) : null}
            </Grid>
          </Grid>
        </DirectoryWrap>
      </div>
    )
  }
  return null
}

export default GetMoreContent

const DirectoryWrap = styled(Grid)({
  marginTop: 16,
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
})
const GoToButton = styled(Paper)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: 16,
  cursor: 'pointer',
  height: '100%',
  transition: `.2s ease`,
  '&:hover': {
    boxShadow: theme.shadows[3],
    color: theme.palette.primary.dark,
  },
  '& svg.left': {
    marginRight: 8,
    marginBottom: 8,
  },
  '& svg.right': {
    marginLeft: 8,
    marginBottom: 8,
  },
})
