import React from 'react'
import './Input.scss'

export default function Input() {
  return (
    <div className="input">
      <input 
        type="email" id="email"
        pattern=".+@globex.com" 
        placeholder="Enter your email" 
        required 
      />
      <label htmlFor="email">Subscribe</label>
    </div>
  )
}
