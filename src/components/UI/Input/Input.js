import React from 'react'
import './Input.scss'


const Input = (props) => {
  const htmlFor = `${props.type}-${Math.random()}`

  return (
    <div className="input">
      <input 
        type={props.type} 
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={htmlFor}>{props.label}</label>
      
    </div>
  )
}

export default Input