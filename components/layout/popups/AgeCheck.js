import { useState, useEffect } from 'react'
import AlertWindow from './AlertWindow'
import Modal from './ModalContainer'

const AgeCheck = () => {
  const [isOfAge, setOfAge] = useState(null)
  const [rejected, setRejected] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem('isOfAge')
    if (data) {
      setOfAge(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isOfAge', JSON.stringify(isOfAge))
  }, [isOfAge])

  const handleConfirmed = () => {
    setOfAge(true)
  }
  const handleRejected = () => {
    setOfAge(false)
    setRejected(true)
  }

  if (!isOfAge) {
    return (
      <Modal>
        <AlertWindow
          initialTitle={'You Must Be At Least 21 Years Of Age To Use This Site'}
          initialMessage={'Do you meet this requirement?'}
          confirmedButtonText={'Yes, I am at least 21'}
          rejectedButtonText={'No, I am under 21'}
          handleConfirmed={handleConfirmed}
          handleRejected={handleRejected}
          rejectedTitle={
            'You Must Be At Least 21 Years Of Age To Use This Site'
          }
          rejectedMessage={`Because you have stated you are not at least 21 years of age, you
            cannot be permitted to use this site. We apologize for the
            inconvenience.`}
          rejected={rejected}
          trigger={isOfAge}
        />
      </Modal>
    )
  }

  return null
}

export default AgeCheck
