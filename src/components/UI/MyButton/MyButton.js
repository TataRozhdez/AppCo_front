import React  from 'react'
import './MyButton.scss'

 const MyButton = props => (
      <button 
        className="myButton"
      >
        {props.textBtn}
      </button>
 )

export default MyButton