import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Nov', num: 2400, 
  },
  {
    name: 'Dec', num: 1398,
  },
  {
    name: 'Jan', num: 9800, 
  },
  {
    name: 'Feb', num: 3908, 
  },
  {
    name: 'Mar', num: 4800,
  },
  {
    name: 'Apr', num: 3800,
  },
  {
    name: 'May', num: 4300,
  },
  {
    name: 'Jun', num: 4300,
  },
  {
    name: 'Jul', num: 4300,
  },
  {
    name: 'Aug', num: 4300,
  },
  {
    name: 'Sep', num: 4300,
  },  
  {
    name: 'Oct', num: 4300,
  }
]

export default function Diagram(props) {
  

    return (
      <div className="diagram">
        <h3>Clicks</h3> 
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid vertical="false" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="num" stroke="#3A80BA" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    )
}

