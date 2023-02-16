import React from 'react'

//if showNotification state == true, display notification informing user they have entered a letter twice
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification
