import { useState, useEffect } from 'react'
import Modal from './ModalContainer'
import AlertWindow from './AlertWindow'
import NewsletterSignupForm from '../news/NewsletterSignupForm'

const ContentGate = () => {
  const [isSubscribed, setSubscribed] = useState(null)
  const [rejected, setRejected] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem('isSubscribed')
    if (data) {
      setSubscribed(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isSubscribed', JSON.stringify(isSubscribed))
  }, [isSubscribed])

  const handleConfirmed = () => {
    setSubscribed(true)
  }
  const handleRejected = () => {
    setSubscribed(false)
    setRejected(true)
  }
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

  if (!isSubscribed) {
    return (
      <Modal>
        <AlertWindow
          initialTitle={'Sign Up For Our Newsletter To Access This Content'}
          initialMessage={`Thank you for your interest in our white papers. Please signup for our newsletter in order to view this content so you don’t miss any of our important announcements. In doing so, you’ll have instant access to all future white papers as well. We promise never to spam you and you may opt out at any time. Thank you for your interest in ATOZ.`}
          rejectedButtonText={'No, thank you'}
          rejectedTitle={'Thank You For Considering'}
          rejectedMessage={
            'Unfortunately, since you did not agree to signup for our newsletter, we cannot allow you to view this content. There is plenty of other material on this site though. Please continue to browse and learn more about ATOZ Laboratories.'
          }
          handleConfirmed={handleConfirmed}
          handleRejected={handleRejected}
          trigger={isSubscribed}
          rejected={rejected}
          useChildren>
          <NewsletterSignupForm submitOverride={handleOverride} />
        </AlertWindow>
      </Modal>
    )
  }

  return null
}

export default ContentGate
