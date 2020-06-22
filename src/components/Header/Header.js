import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <Link to="/">AppCo</Link>
    </div>
  )
}
