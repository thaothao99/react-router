import React, { useState } from 'react'

const Login = (props) => {
  const [input, setInput] = useState('')
  const onChange = (val) => setInput(val)
  const handleClick = (e) => {
    e.preventDefault();
    if (input === '123') {
      localStorage.setItem('token', input)
      props.history.push('/dashboard')
    }
    setInput('')
  }
  return (
    <div>
      {/* 
      TODO: Your login page implementation
      */}
      <form>
        <input data-test='login__pwd' type='password' value={input} onChange={(e) => onChange(e.target.value)} />
        <button data-test='login__submit' type='submit' onClick={(e) => handleClick(e)}>login</button>
      </form>
    </div>
  )
}

export default Login