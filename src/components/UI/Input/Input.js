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
      <button onClick={props.onClick}>{props.label}</button>
      
    </div>
  )
}

export default Input