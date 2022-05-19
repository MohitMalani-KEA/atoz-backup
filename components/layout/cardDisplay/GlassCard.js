import theme from '../../../src/theme'
import { styled, Button, Typography, Box } from '@mui/material'
import Link from 'next/link'
import GlassPaper from '../GlassPaper'

const GlassCard = ({ data }) => {
  return (
    <CardWrap className='cardWrap'>
      <GlassPaper
        style={{
          justifyContent: 'flex-start',
        }}>
        <LabelSection>
          <Typography variant='h5' align='center' gutterBottom>
            {data.label}
          </Typography>
          {data.icon}
        </LabelSection>

        <DescriptionSection>
          <Typography>{data.description}</Typography>
          <Box mt={2}>
            <Link href={data.url} passHref>
              <Button
                color='primary'
                variant='contained'
                style={{
                  color: 'white',
                  fontWeight: '400',
                  textDecoration: 'none',
                }}>
                Learn more
              </Button>
            </Link>
          </Box>
        </DescriptionSection>
      </GlassPaper>
    </CardWrap>
  )
}

export default GlassCard

const CardWrap = styled('div')({
  minWidth: 350,
  display: 'flex',
  marginRight: theme.spacing(2),
})
const LabelSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  maxHeight: '180px',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '7rem',
  },
})
const DescriptionSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
})
