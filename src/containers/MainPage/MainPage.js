import React, { Component } from 'react'
import MyButton from '../../components/UI/MyButton/MyButton'
import mobile_jpg from '../../resources/images/mobile.png'
import './MainPage.scss'
import Cards from '../../components/UI/Cards/Cards'
import logoFoot from '../../resources/images/AppCo.png'
import Input from '../../components/UI/Input/Input'
import {Link} from 'react-router-dom'

export class MainPage extends Component {

  render() {
    return (
      <main>
        <div className="main_block">
          <h1>AppCo</h1>
          <div className="main_content">
            <p className="title"><strong>Brainstorming</strong> for desired perfect Usability</p>
            <p className="post-title">
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>
            <Link to="/users">
              <MyButton textBtn="Views Stats"/>
            </Link>
          </div>
            <div className="mobile-image">
              <img 
                src={mobile_jpg} 
                alt="mob_img"
              />
            </div>
        </div>
        <div className="center_block">
          <p className="first_line">Why <strong>small business owners love</strong> AppCo?</p>
          <p className="second_line">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <Cards />
        </div>
        <div className="footer">
          <Input 
            label="Subscribe" 
            type="email"
          />
          <div>
            <img src={logoFoot} alt="logo_foter" />
            <span>All rights reserved by ThemeTags</span>
            <span>Copyrights © 2019.</span>  
          </div>
        </div>
      </main>
    )
  }
}

export default MainPage
