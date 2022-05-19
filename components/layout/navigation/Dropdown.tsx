import { FC } from 'react'
import { Paper, styled, Typography } from '@mui/material'
import Link from 'next/link'
import { useTransition, animated as a } from '@react-spring/web'

interface Props {
  isHovered: boolean
  sublinks: Array<{ label: string; url: string; external?: boolean }>
}

const Dropdown: FC<Props> = ({ sublinks, isHovered }: Props) => {
  const transition = useTransition(isHovered, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      tension: 500,
      friction: 30,
    },
  })
  return transition(
    (styles, item) =>
      item && (
        <DropdownWrap style={styles} onClick={(e) => e.stopPropagation()}>
          {sublinks.map((sublink, i) => {
            const { label, url } = sublink
            return (
              <Link href={url} passHref key={i}>
                <DirectoryLink gutterBottom noWrap>
                  {label}
                </DirectoryLink>
              </Link>
            )
          })}
        </DropdownWrap>
      )
  )
}

export default Dropdown

const DropdownWrap = styled(a(Paper))({
  padding: 16,
  position: 'absolute',
  top: 60,
  left: 0,
  minWidth: '100%',
  borderRadius: '0 0 25px 25px',
})
const DirectoryLink = styled(Typography)({
  '&:hover': {
    textDecoration: 'underline',
  },
})
