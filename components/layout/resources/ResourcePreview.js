import { Box, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { PortableText } from '../../../src/sanity'
import Trail from '../../util/Trail'

const ResourcePreview = ({ post }) => {
  // if post exists
  if (post) {
    return (
      <Trail>
        <Typography
          variant='h4'
          color='secondary'
          style={{ textTransform: 'capitalize' }}>
          {post?.title}
        </Typography>
        <Typography variant='h5' color='secondary'>
          {post?.category}
        </Typography>
        <Typography
          component={PortableText}
          blocks={post?.updateContent.preview}
          paragraph
        />
        <Box>{getButton(post)}</Box>
      </Trail>
    )
  }
  // if no posts available
  return (
    <Trail>
      <Typography variant='h5' color='secondary'>
        There are no news updates available at this time.
      </Typography>
    </Trail>
  )
}

export default ResourcePreview

const getButton = (post) => {
  if (post?.category == 'White Paper') {
    return (
      <Link
        href={`/resources/white-papers/details/${post.updateContent.slug.current}`}
        passHref>
        <Button variant='contained' color='primary'>
          Read More
        </Button>
      </Link>
    )
  }
  if (post?.updateContent.url) {
    return (
      <Button
        href={post.updateContent.url}
        target='_blank'
        rel='noreferrer'
        variant='contained'
        color='primary'>
        Read More
      </Button>
    )
  }

  if (post?.updateContent.slug) {
    return (
      <Link
        href={`/resources/details/${post.updateContent.slug.current}`}
        passHref>
        <Button variant='contained' color='primary'>
          Read More
        </Button>
      </Link>
    )
  }

  return null
}
