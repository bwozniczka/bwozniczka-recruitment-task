import "./App.css"
import { Chart, Series, Title } from "@highcharts/react"

function App() {
  return (
    <>
      <Chart>
        <Title>Line Chart</Title>
        <Series type="line" data={[1, 2, 3]} />
      </Chart>
    </>
  )
}

export default App
