import React from 'react'
import {
  styled,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@mui/material'
import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown'
import theme from '../../../src/theme'
import { PortableText } from '../../../src/sanity'

const GetFAQs = ({ faqData, uniqueHeaders }) => {
  // filter all faqs by section title
  const sortFAQs = (header) => {
    const sortedFaqs = faqData.filter((faq) => {
      return faq.sectionTitle == header
    })
    return sortedFaqs
  }

  return (
    <>
      {/* for each unique section title, iterate through each of its faqs */}
      {uniqueHeaders?.sort().map((header, i) => {
        const faqs = sortFAQs(header)
        return (
          <div key={i}>
            <Typography
              variant='h3'
              color='secondary'
              style={{
                marginBottom: theme.spacing(3),
                textTransform: 'capitalize',
              }}>
              {header}
            </Typography>
            <Box mb={3}>
              {faqs.map((faq, i) => {
                return (
                  <Accordion key={i}>
                    <AccordionSummary expandIcon={<AiFillCaretDown />}>
                      <Typography variant='h6'>{`${i + 1}. ${
                        faq.question
                      }`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexDirection: 'column' }}>
                      <TextWrap>
                        <Typography
                          component={PortableText}
                          blocks={faq.answer}
                          paragraph
                        />
                      </TextWrap>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </Box>
          </div>
        )
      })}
    </>
  )
}

export default GetFAQs

const TextWrap = styled('div')({
  fontSize: 16,
  '& li': {
    marginBottom: theme.spacing(2),
    '& ul': {
      marginTop: theme.spacing(2),
    },
  },
})
