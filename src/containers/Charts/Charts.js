import React, { Component } from 'react'
import './Charts.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb'
import Input from '../../components/UI/Input/Input'
import usersJson from '../../users.json'
import userStatisticsJson from '../../users_statistic.json'
import RenderTable from '../../components/UI/TableUsers/RenderTable'
import { Redirect } from 'react-router'

const links = [
  {to: '/', label: 'Main page', exact: true},
  {to: '/users', label: 'User satistics', exact: false}
]

export class Charts extends Component {

  constructor(props) {
    super(props)
    this.onRowSelect = this.onRowSelect.bind(this)

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
          value: '',
          label: 'Or enter date'
        }
      },
      usersFromInput: {
        user: {},
        data: {}
      }
    }
  }

  totalClick = (el) => {
    const total = {
      clicksTotal: 0,
      pageViewTotal: 0
    }

    userStatisticsJson
      .filter(j => j.user_id === el)
      .forEach(elem => {
        total.clicksTotal += elem.clicks
        total.pageViewTotal += elem.page_views
      })      
      return total
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
          data: {...userStatisticsJson.filter(ij => ij.user_id === i.id)},
          total: this.totalClick(i.id)
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
            data: u,
            total: this.totalClick(u.user_id)
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

  onRowSelect = row => {

    this.setState({
      row: row
    })
  }

  render() {
    return (
      <div className="charts">
        <Header />
        <div className="contentUsers">
          <Breadcrumb 
            links={links}
          />
          <h1>Users statistics</h1>
            {
              !this.state.formSeLection 
                ? this.renderInputs() 
                : <RenderTable
                    users={this.state.usersFromInput}
                    onRowSelect={this.onRowSelect} 
                  />
            }
        </div> 
        { this.state.row
            ? <Redirect
                to={{
                    pathname: `/user/:${this.state.row.user.id}`,
                    state: { row: this.state.row }
                  }}
              />
            : null
        } 
        <Footer />
      </div>
    )
  }
}

export default Charts 
