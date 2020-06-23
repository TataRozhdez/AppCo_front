import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb'
import './Stats.scss'
import Diagram from '../../components/UI/Diagrams/Diagram'

export default function Stats(props) {
  const row = props.location.state.row

  const links = [
    {to: '/', label: 'Main page', exact: true, disable: false},
    {to: '/users', label: 'User satistics', exact: false, disabledd: false},
    {to: '/users', label: `${row.user.first_name} ${row.user.last_name}`, exact: false, disabled: true}
  ]

  return (
    <div>
      <Header />  
      <div className="userStatistic">
        <Breadcrumb 
          links={links}
        />
        <h2>{row.user.first_name} {row.user.last_name}</h2>
        <Diagram 
          nameX={row.data}
          numY="clicks"
          header="Clicks"
        />
        <Diagram 
          nameX={row.data}
          numY="views"
          header="Views"
        />
      </div>
      <Footer />
    </div>
  )
}

