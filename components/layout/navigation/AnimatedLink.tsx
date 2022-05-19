import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material'
import { useSpring, animated as a } from '@react-spring/web'
import theme, { ColorStripe } from '../../../src/theme'
import Link from 'next/link'
import { ReactNode, FC } from 'react'
import Dropdown from './Dropdown'

interface Props {
  children?: ReactNode
  url?: string
  externalUrl?: string
  sublinks?: Array<{ label: string; url: string; external?: boolean }>
}

const AnimatedLink: FC<Props> = ({ children, url, sublinks }: Props) => {
  const router = useRouter()
  const [isActive, setActive] = useState(false)
  const [isHovered, setHovered] = useState(false)
  const stripeStyles = useSpring({
    height: isActive || isHovered ? 5 : 0,
    opacity: isActive ? 1 : isHovered ? 0.7 : 0,
    config: {
      tension: 500,
      friction: 30,
    },
  })
  const AnimatedStripe = a(ColorStripe)

  useEffect(() => {
    if (url) {
      const urlBase = url.split('/')[1]
      if (window.location.pathname.includes(urlBase)) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
  }, [router.pathname, url])

  // NOT CURRENTLY IN USE
  //
  // if (externalUrl) {
  //   return (
  //     <a href={externalUrl} target='_blank' rel='noreferrer'>
  //       <LinkWrap
  //         onMouseEnter={() => setHovered(true)}
  //         onMouseLeave={() => setHovered(false)}>
  //         {children}
  //         <AnimatedStripe
  //           style={{ ...stripeStyles, borderRadius: '25px 25px 0 0' }}
  //         />
  //       </LinkWrap>
  //     </a>
  //   )
  // }

  if (url) {
    return (
      <Link href={url} passHref>
        <LinkWrap
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          {children}
          {sublinks ? (
            <Dropdown sublinks={sublinks} isHovered={isHovered} />
          ) : null}
          <AnimatedStripe
            style={{ ...stripeStyles, borderRadius: '25px 25px 0 0' }}
          />
        </LinkWrap>
      </Link>
    )
  }

  return null
}

export default AnimatedLink

const LinkWrap = styled('li')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 18,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  height: '100%',
  cursor: 'pointer',
})
