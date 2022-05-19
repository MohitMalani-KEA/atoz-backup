import Head from 'next/head'
import Parallax from '../../../components/util/Parallax'
import ParallaxWindow from '../../../components/layout/ParallaxWindow'
import MainWrap from '../../../components/layout/MainWrap'
import bgImage from '../../../public/backgrounds/print5-bg.svg'
import Border from '../../../components/layout/Border'
import ContentBlock from '../../../components/layout/ContentBlock'
import newsImage from '../../../public/contact/newsletter.jpg'
import NewsletterSignupForm from '../../../components/layout/resources/NewsletterSignupForm'
import { useState, useEffect } from 'react'

const NewsletterSignUpPage = () => {
  const [isSubscribed, setSubscribed] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('isSubscribed')
    if (data) {
      setSubscribed(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isSubscribed', JSON.stringify(isSubscribed))
  }, [isSubscribed])
  const handleOverride = (
    values,
    setSubmitting,
    resetForm,
    subscribe,
    status
  ) => {
    if (status === 'sending') {
      setSubmitting(true)
    }
    subscribe(values)
    resetForm()
    setSubscribed(true)
    setSubmitting(false)
  }

  const description = `Subscribe to the ATOZ Laboratories newsletter to get notified when we have important updates to share.`

  return (
    <>
      <Head>
        <title>ATOZ | Newsletter Signup</title>
        <meta name='description' content={description} />
      </Head>

      <Parallax image={bgImage} />

      <MainWrap>
        <ParallaxWindow location='top' />
        <Border />

        <ContentBlock
          image={newsImage}
          title='ATOZ Newsletter Signup'
          subtitle='Be the first to know when we release an update'>
          <NewsletterSignupForm submitOverride={handleOverride} />
        </ContentBlock>

        <Border />
        <ParallaxWindow location='bottom' />
      </MainWrap>
    </>
  )
}

export default NewsletterSignUpPage
