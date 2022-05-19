import React from 'react'
import ResourcePreview from './ResourcePreview'
import { Pagination } from '@mui/material'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

const ResourceContainer = ({ urlFilter, currentPosts, pageCount }) => {
  const router = useRouter()
  const handlePageChange = (e, value) => {
    router.push(
      urlFilter ? `/resources/${urlFilter}/${value}` : `/resources/${value}`
    )
  }

  if (currentPosts && pageCount) {
    return (
      <>
        {/* populate news posts */}
        <>
          {currentPosts?.map((post, i) => {
            return (
              <Box pb={2} key={i}>
                <ResourcePreview post={post} />
              </Box>
            )
          })}
        </>

        <Box pt={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={pageCount}
            className='pagination'
            color='primary'
            onChange={handlePageChange}
          />
        </Box>
      </>
    )
  }

  return null
}

export default ResourceContainer
