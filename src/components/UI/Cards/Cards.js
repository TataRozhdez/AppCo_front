import React from 'react'
import './Cards.scss'
import cardImg1 from '../../../resources/images/cardImg_(1).png'
import cardImg2 from '../../../resources/images/cardImg_(2).png'
import cardImg3 from '../../../resources/images/cardImg_(3).png'


function Cards() {
  const content = {
    1: {
      image: cardImg1,
      title: 'Clean Design',
      text: 'Increase sales by showing true dynamics of your website.'
    },
  
    2: {
      image: cardImg2,
      title: 'Secure Data',
      text: 'Build your online store’s trust using Social Proof & Urgency.'
    },
  
    3: {
      image: cardImg3,
      title: 'Retina Ready',
      text: 'Realize importance of social proof in customer’s purchase decision.'
    }
  }
    
  return (
    
    <div className="cards">
      {Object.values(content).map((keyName, i) => (
        <div className="card" key={i}>
          <img src={keyName.image} alt="label" />
          <h3>{keyName.title}</h3>
          <p>{keyName.text}</p> 
        </div>  
      ))}
    </div> 
  )
}

export default Cards



