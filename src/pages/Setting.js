import React from 'react'

const Setting = (props) => {
  return <div>
    <p>
      {window.location.href.split('=')[1] ? (`Setting page - Section: ${window.location.href.split('=')[1]}`) : `Setting page`}</p>
  </div>
}

export default Setting