import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {NavLink} from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './Breadcrumb.scss'

const links = [
  {to: '/', label: 'Main page', exact: true},
  {to: '/users', label: 'User satistics', exact: false},
  {to: '/user/:id', label: 'Samuel Frost', exact: false}
]

export default function Breadcrumb() {

  return (
    <div className="breadcrumb">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {links.map((link, index) => {

          return (
            <NavLink
              key={index}
              to={link.to} 
              exact={link.exact}
            >
              {link.label}
            </NavLink>
          )

        })}
      </Breadcrumbs>
    </div>
  );
}
