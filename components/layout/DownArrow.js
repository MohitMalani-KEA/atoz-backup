import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown'
import { styled } from '@mui/material'
import { useState, useEffect } from 'react'
import { useSpring, animated as a } from '@react-spring/web'
import { useRouter } from 'next/router'

const DownArrow = () => {
  const [scrollY, setScrollY] = useState(null)
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  const arrowStyles = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(1)',
    },
    to: {
      opacity: scrollY < 300 ? 1 : 0,
      transform: hovered ? 'scale(1.1)' : 'scale(1)',
    },
  })

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  const handleClick = () => {
    router.push('/#our-lab-tech')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ArrowWrap>
      <a.div
        style={arrowStyles}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <AiFillCaretDown />
      </a.div>
    </ArrowWrap>
  )
}

export default DownArrow

const ArrowWrap = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  width: '100%',
  '& svg': {
    fontSize: '3rem',
    color: 'white',
    marginBottom: 16,
  },
})
