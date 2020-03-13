import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <p data-test='db__welcome'>
        Welcome to dashboard page
      </p>
      <ul>
        <li><Link to='/dashboard'>/dashboard</Link></li>
        <li><Link to='/setting'>/setting</Link></li>
      </ul>
    </div>
  )
}

export default Dashboard