import React from 'react'
import { ClockLoader } from 'react-spinners'

const Loader = () => {

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ClockLoader color="#2f4b8b" size={100} />
    </div>
  )
}

export default Loader