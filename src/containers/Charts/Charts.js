import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb'
import TableUsers from '../../components/UI/TableUsers/TableUsers'

export default class Charts extends Component {
  render() {
    return (
      <div>
        <Header />
        <Breadcrumb />
        <TableUsers />
        <Footer />
      </div>
    )
  }
}
