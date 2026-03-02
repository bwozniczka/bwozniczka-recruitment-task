import "./App.css"
import { RevenueByCountryChart } from "./components/RevenueByCountryChart"
import { DeviceUsageChart } from "./components/DeviceUsageChart"
import { CustomerTypeChart } from "./components/CustomerTypeChart"
import ordersData from "./data/data.json"

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Dashboard Analityczny</h1>
        <div className="header-meta">
          <p>
            <strong>Źródło:</strong> {ordersData.meta.source}
          </p>
          <p>
            <strong>Waluta:</strong> {ordersData.meta.currency}
          </p>
          <p>
            <strong>Wygenerowane:</strong> {ordersData.meta.generatedAt}
          </p>
        </div>
      </div>
      <RevenueByCountryChart />
      <div className="charts-row">
        <div className="chart-wrapper">
          <DeviceUsageChart />
        </div>
        <div className="chart-wrapper">
          <CustomerTypeChart />
        </div>
      </div>
    </div>
  )
}

export default App
