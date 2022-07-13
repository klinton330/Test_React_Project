import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((datapoints) => datapoints.value)
  const MaximumValue = Math.max(...dataPointValue)

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.key}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={MaximumValue}
        />
      ))}
    </div>
  )
}

export default Chart
