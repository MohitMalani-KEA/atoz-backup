import React from 'react'
import { PortableText } from '../../../src/sanity'
import BioBlock from './BioBlock'
import { Typography } from '@mui/material'

const GetScientists = ({ leadershipData }) => {
  if (leadershipData) {
    return (
      <>
        {leadershipData.map((bio, index) => {
          return (
            <BioBlock
              name={bio.name}
              role={bio.jobTitle}
              image={bio.image}
              key={index}>
              <Typography component={PortableText} blocks={bio.bioDetails} />
            </BioBlock>
          )
        })}
      </>
    )
  }
  return null
}

export default GetScientists
