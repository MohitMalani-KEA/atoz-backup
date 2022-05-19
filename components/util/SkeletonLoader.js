import React from 'react'
import { Box, Container, Skeleton } from '@mui/material'

const SkeletonLoader = () => {
  return (
    <Box sx={{ width: '100%', background: 'white' }}>
      <Container style={{ paddingTop: 16, paddingBottom: 16 }}>
        <Skeleton animation='wave' height={90} />
        <Skeleton animation='wave' height={65} />
        <Skeleton animation='wave' height={135} />
        <Skeleton animation='wave' height={90} />
        <Skeleton animation='wave' height={65} />
        <Skeleton animation='wave' height={135} />
      </Container>
    </Box>
  )
}

export default SkeletonLoader

export function Loader() {
  return <SkeletonLoader />
}
