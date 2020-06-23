import React from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import './Diagrams.scss'

const data = []

const dateStatistic = (nameX, numY) => {
  const arr = Object.values(nameX).map((item) => {
    if (numY === 'clicks') {
      return {
        name: item.date,
        num: item.clicks
      }
    } else {
      return {
        name: item.date,
        num: item.page_views
      }
    }
  })
  data.push(...arr)
}

export default function Diagram(props) {
    return (
      <div className="diagram">
        {dateStatistic(props.nameX, props.numY)}
        <h3>{props.header}</h3> 
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            // width={700}
            // height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="num" stroke="#3A80BA" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        
      </div>
    )
}

