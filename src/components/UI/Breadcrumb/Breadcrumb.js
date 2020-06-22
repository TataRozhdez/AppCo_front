import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {NavLink} from 'react-router-dom'
import './Breadcrumb.scss'

const Breadcrumb = (props) => {

  return (
    <div className="breadcrumb">
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />} 
        aria-label="breadcrumb"
        item={NavLink}
      >
      
       {props.links.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.to} 
              exact={link.exact}
              disabled={link.disabled}
            >
              {link.label}
            </NavLink>
          )
        })} 
      </ Breadcrumbs>
    </div>
  )
}

export default Breadcrumb


