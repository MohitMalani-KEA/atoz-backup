import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Button, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { animated as a, useTransition } from '@react-spring/web'

const LeftArrow = ({ target }) => {
  let [isScrolled, setScrolled] = useState(false)

  const transition = useTransition(isScrolled, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const ArrowWrap = styled(a.div)({
    position: 'absolute',
    top: '45%',
    left: 0,
    zIndex: 2,
    paddingLeft: 8,
  })

  useEffect(() => {
    target.current?.addEventListener(
      'scroll',
      () => {
        if (target.current.scrollLeft === 0) {
          setScrolled(false)
        }
        if (target.current.scrollLeft > 0) {
          setScrolled(true)
        }
      },
      { passive: true }
    )
    return target.current?.removeEventListener('scroll', () => {})
  }, [target])

  const handleClick = () => {
    target.current.scrollLeft = target.current?.scrollLeft - 341
  }

  return transition(
    (styles, item) =>
      item && (
        <ArrowWrap style={styles}>
          <Button
            color='primary'
            size='large'
            variant='contained'
            onClick={handleClick}>
            <ChevronLeftIcon style={{ fontSize: '1.5rem' }} />
          </Button>
        </ArrowWrap>
      )
  )
}

export default LeftArrow
