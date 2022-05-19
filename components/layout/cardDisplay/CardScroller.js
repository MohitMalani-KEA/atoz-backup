import { Container, styled, useMediaQuery } from '@mui/material'
import GlassCard from './GlassCard'
import theme from '../../../src/theme'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { useRef } from 'react'

const CardScroller = ({ bgImage, dataArray }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const scroller = useRef()

  const ScrollBlock = styled('div')({
    width: '100%',
    position: 'relative',
    backgroundImage: `url(${bgImage})`,
    background: 'none',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  })

  return (
    <Container>
      {dataArray && (
        <ScrollBlock>
          {dataArray.length > 3 && !mobile && (
            <>
              <LeftArrow target={scroller} />
              <RightArrow target={scroller} />
            </>
          )}
          <ScrollWrap ref={scroller}>
            {dataArray.map((data, index) => {
              return <GlassCard data={data} key={index} />
            })}
          </ScrollWrap>
        </ScrollBlock>
      )}
    </Container>
  )
}

export default CardScroller

const ScrollWrap = styled('div')({
  display: 'flex',
  overflow: 'auto',
  scrollBehavior: 'smooth',
  msOverflowStyle: 'none' /* IE and Edge */,
  scrollbarWidth: 'none' /* Firefox */,
  /* Hide scrollbar for Chrome, Safari and Opera */
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '& .cardWrap:last-child': {
    marginRight: 0,
  },
})
