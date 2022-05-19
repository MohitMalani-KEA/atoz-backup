import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSpring, animated as a } from '@react-spring/web'

const Parallax = ({ image, reverse }) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  const bgStyle = useSpring({
    config: {
      friction: 30,
      tension: 200,
    },
    from: {
      opacity: 0,
    },
    opacity: .85,
    zIndex: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    transform: reverse ? `translateY(${offsetY * -0.05}px)` : `translateY(${offsetY * 0.2}px)`,
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a.div style={bgStyle}>
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible' }}>
        <Image
          src={image}
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority={true}
        />
      </div>
    </a.div>
  )
}

export default Parallax
