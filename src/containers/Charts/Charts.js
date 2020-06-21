import React, { Component } from 'react'
import './Charts.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb'
import Input from '../../components/UI/Input/Input'
import usersJson from '../../users.json'
import userStatisticsJson from '../../users_statistic.json'
import RenderTable from '../../components/UI/TableUsers/RenderTable'


export class Charts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formSeLection: false,
      formControls: {
        numberId: {
          type: 'number',
          value: '',
          label: 'Enter ID number'
        },
        datePick: {
          type: 'date',
          value: '2019-10-02',
          label: 'Or enter date'
        }
      },
      usersFromInput: {}
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    const formControls = this.state.formControls

    if (formControls.numberId.value) {
      const user = usersJson
        .filter( e => 
        e.id === +formControls.numberId.value
      )
      .map(i => {
        return {
          user: i,
          data: userStatisticsJson.find(ij => ij.user_id === i.id)
        }
      })
    
    this.setState({
      formSeLection: true,
      usersFromInput: user
      })
    }
    
    if (formControls.datePick.value) {
      const users = userStatisticsJson
        .filter( e => e.date === formControls.datePick.value)
        .map(u => {
          return {
            user: usersJson.find(uj => uj.id === u.user_id),
            data: u
          }
        });
 
      this.setState({ 
        formSeLection: true,
        usersFromInput: users
      })
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

    // const ref = React.createRef();
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={index}
          // ref={ref}
          type={control.type}
          value={control.value}
          label={control.label}
          onClick={this.submitHandler}
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
        <div className="contentUsers">
          <h1>Users statistics</h1>
            {
              !this.state.formSeLection ?
                this.renderInputs() :
                <RenderTable
                  users={this.state.usersFromInput} 
                  // usersStatistic={this.state.userFromDate}
                />
            }
        </div>
        
        {console.log('userFromId', this.state.usersFromInput)}
        <Footer />
      </div>
    )
  }
}

export default Charts 
