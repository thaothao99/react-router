import React from 'react'
import { Link } from 'react-router-dom'

function Layout(props) {
  const handleClick = () => {
    localStorage.removeItem('token')
    props.history.push('/login')
  }
  return (
    <div>
      <h2><b>Menu</b></h2>
      <ul>
        <li><Link to='/dashboard'>/dashboard</Link></li>
        <li><Link to='/setting'>/setting</Link></li>
      </ul>
      <button type="submit" onClick={() => handleClick()}>Log out</button>

    </div>

  )
}
export default Layout