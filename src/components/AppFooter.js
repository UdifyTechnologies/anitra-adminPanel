import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer"> */}
        Anitra
        {/* </a> */}
        <span className="ms-1">&copy; 2022 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        {/* <a target="_blank" rel="noopener noreferrer"> */}
        Anitra Admin Panel
        {/* </a> */}
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
