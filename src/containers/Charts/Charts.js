import React, { Component } from 'react'
import './Charts.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb'
import TableUsers from '../../components/UI/TableUsers/TableUsers'
import Input from '../../components/UI/Input/Input'
import MyButton from '../../components/UI/MyButton/MyButton'
import jsonUsers from '../../users.json'
import userJson from '../../users_statistic.json'


export class Charts extends Component {

  state = {
    formSeLection: false,
    formControls: {
      numberId: {
        type: 'number',
        value: '',
        label: 'Enter ID number'
      },
      datePick: {
        type: 'date',
        value: '',
        label: 'Or enter date'
      }
    },
    userFromId: {},
    usersFromDate: {

    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    const formControls = this.state.formControls

    if (formControls.numberId.value) {
      const userFromInput = jsonUsers.filter( e => 
        e.id === +formControls.numberId.value
      )

      if (userFromInput) {
        userFromInput.map(i => {
          const userDate = userJson.filter( e => e.user_id === i.id )
          const date = userDate.map(obj => {
            return { date: obj.date,
              clicks: obj.clicks, 
              page_views: obj.page_views
            }
          })
    
          return this.setState({
            userFromId: {
              id: i.id,
              email: i.email,
              first_name: i.first_name,
              gender: i.gender,
              ip_address: i.ip_address,
              last_name: i.last_name,
              date
            }
          })
        })
      } 
    } 
    
    if (formControls.datePick.value) {
      const userFromInput = userJson.filter( e => 
        e.date === formControls.datePick.value
      ) 
      console.log('userFromInput' ,userFromInput)
      if (userFromInput) {
        userFromInput.map(i => {

          let users = []
          
          users = users.push(jsonUsers.filter( e => e.id === i.user_id))

          console.log('user', users)

          // userId.map(obj => {
          //   // console.log('o', obj)
            
          //   return { email: obj.email,
          //     first_name: obj.first_name, 
          //     gender: obj.gender,
          //     id: obj.id,
          //     ip_address: obj.ip_address,
          //     last_name: obj.last_name,
          //   }
          // })
    
          return this.setState({
            usersFromDate: {
              date: i.date,
              users: users
            }
          })
        })
      }
    }
  }
  
  onChangeHandler = (event, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}
   
    control.value = event.target.value
    formControls[controlName] = control

    this.setState({
      formControls
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={index}
          type={control.type}
          value={control.value}
          label={control.label}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className="charts">
        <Header />
        <Breadcrumb />
        <h1>Users statistics</h1>
        
        {
          !this.state.formSeLection ?
            <form onSubmit={this.submitHandler}>
              {this.renderInputs() }
              <hr />
              <MyButton 
                textBtn="Submit" 
                onClick={this.onChangeHandler}
              />
            </form>  :
            <TableUsers 
              // users={this.state.userFromId}
              // usersStatistic={this.state.userFromDate}
            />
        }
        {console.log('userFromId', this.state.userFromId)}
        {console.log('usersFromDate', this.state.usersFromDate)}
        <Footer />
      </div>
    )
  }
}

export default Charts 
