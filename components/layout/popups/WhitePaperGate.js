import React from 'react'
import AlertWindow from './AlertWindow'
import Modal from './ModalContainer'
import { useRouter } from 'next/router'
import WhitePaperSignupForm from '../resources/WhitePaperSignupForm'

const WhitePaperGate = ({ trigger, setTrigger, asset }) => {
  const router = useRouter()
  const handleReject = () => {
    setTrigger ? setTrigger(false) : router.push('/')
  }
  if (trigger) {
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
          handleRejected={handleReject}
          useChildren>
          <WhitePaperSignupForm setTrigger={setTrigger} asset={asset} />
        </AlertWindow>
      </Modal>
    )
  }
  return null
}

export default WhitePaperGate
