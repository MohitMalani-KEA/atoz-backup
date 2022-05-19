import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTransition, animated as a } from '@react-spring/web'

const RightArrow = ({ target }) => {
  const [atEnd, setEnd] = useState(false)

  const transition = useTransition(!atEnd, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const ArrowWrap = styled(a.div)({
    position: 'absolute',
    top: '45%',
    right: 0,
    zIndex: 2,
    paddingRight: 8,
  })

  useEffect(() => {
    target.current?.addEventListener(
      'scroll',
      () => {
        let maxEnd = target.current?.scrollWidth - target.current?.clientWidth
        if (target.current.scrollLeft === maxEnd) {
          setEnd(true)
        }
        if (target.current.scrollLeft !== maxEnd) {
          setEnd(false)
        }
      },
      { passive: true }
    )
    return target.current?.removeEventListener('scroll', () => {})
  }, [target])

  const handleClick = () => {
    target.current.scrollLeft = target.current?.scrollLeft + 341
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
            <ChevronRightIcon style={{ fontSize: '1.5rem' }} />
          </Button>
        </ArrowWrap>
      )
  )
}

export default RightArrow
