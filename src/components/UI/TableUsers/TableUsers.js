import React from 'react'
import RenderTable from './RenderTable'


const items = {
    users: [
      {
        id: 1,
        first_name: 'Samuel',
        last_name: 'Frost',
        email: 'test@mail.ru',
        gender: 'male',
        ip_address: '192.168.32.05',
        total_clicks: '290 883',
        total_page_views: '290 883'
      }
    ]
  }

            // const newUserDate = userDate.map(obj => {
          //   let refObj = {}
          //   refObj = obj.date
          //   return refObj
          // })

function TableUsers(props) {
  return (
    <div>
      <RenderTable 
        trow={items.users}
        // onSelectId={this.onSelectUser} 
      />
    </div>
  )
}

export default TableUsers


