import { Box, Button, styled, Typography, Divider } from '@mui/material'
import theme from '../../../src/theme'
import { PortableText } from '../../../src/sanity'

const CareerCard = ({ jobData }) => {
  return (
    <CardWrap>
      <Typography variant='h3' color='secondary' gutterBottom>
        {jobData.title}
      </Typography>
      <Divider />
      {jobData.descriptionBlock.map((block, i) => {
        return (
          <Box key={i} mt={2}>
            <Typography variant='h5' color='secondary' gutterBottom>
              {block.descriptionTitle}
            </Typography>
            <Typography
              paragraph
              component={PortableText}
              blocks={block.sectionDetails}
            />
          </Box>
        )
      })}

      <Box mt={3}>
        <Button
          variant='contained'
          color='primary'
          href={`mailto:${jobData.contactEmail.join('; ')}?subject=${
            jobData.title
          } Inquiry`}>
          Apply Now
        </Button>
      </Box>
    </CardWrap>
  )
}

export default CareerCard

const CardWrap = styled('div')({
  width: '100%',
  paddingBottom: theme.spacing(3),
  fontSize: 16,
  '& li': {
    marginBottom: theme.spacing(2),
    fontSize: 16,
    '& ul': {
      marginTop: theme.spacing(2),
    },
  },
})
