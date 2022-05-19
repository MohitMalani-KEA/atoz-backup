import dynamic from 'next/dynamic'
import { styled } from '@mui/material'
import Navbar from './navigation/Navbar'
import Footer from './navigation/Footer'
import { useRouter } from 'next/router'

const DynamicSlider = dynamic(() => import('./popups/Slider'))
const DynamicAgeCheck = dynamic(() => import('./popups/AgeCheck'))

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <SiteWrap>
      <Navbar />
      <PageWrap>{children}</PageWrap>
      <Footer />

      {router.pathname == '/' && (
        <DynamicSlider title='NEW! 24-Hour Turn Around Time'></DynamicSlider>
      )}
      <DynamicAgeCheck />
    </SiteWrap>
  )
}

export default Layout

const SiteWrap = styled('div')({
  position: 'relative',
})
const PageWrap = styled('div')({
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  minHeight: '80vh',
  '& .anchor': {
    display: 'block',
    position: 'relative',
    top: '-105px',
    visibility: 'hidden',
  },
})
