import React, { useState } from 'react'

const Login = (props) => {
  const [input, setInput] = useState('')
  const onChange = (val) => setInput(val)
  const handleClick = () => {
    localStorage.setItem('token', input)
    props.history.push('/dashboard')
  }
  return (
    <div>
      {/* 
      TODO: Your login page implementation
      */}
      <form>
        <input data-test='login__pwd' type='password' onChange={(e) => onChange(e.target.value)} />
        <button data-test='login__submit' type='submit' onClick={() => handleClick()}>login</button>
      </form>
    </div>
  )
}

export default Login