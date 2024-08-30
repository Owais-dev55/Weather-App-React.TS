import React from 'react'

const CurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
  return (
    <>
{currentTime}
    </>
  )
}

export default CurrentTime