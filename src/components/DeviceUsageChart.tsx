import { Chart, Series, Title, Tooltip } from "@highcharts/react"
import ordersData from "../data/data.json"
import "../App.css"

export function DeviceUsageChart() {
  const deviceUsage = ordersData.orders.reduce(
    (acc, order) => {
      acc[order.device] = (acc[order.device] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )
  const revenueByDevice = ordersData.orders.reduce(
    (acc, order) => {
      const revenue = order.quantity * order.unitPrice
      acc[order.device] = (acc[order.device] || 0) + revenue
      return acc
    },
    {} as Record<string, number>,
  )

  const chartData = Object.entries(deviceUsage).map(([device, count]) => {
    const revenue = revenueByDevice[device] || 0
    return {
      name: device.charAt(0).toUpperCase() + device.slice(1),
      y: count,
      revenue: revenue,
    }
  })

  return (
    <div className="chart-container">
      <Chart
        options={{
          colors: ["#7cb5ec", "#90ed7d", "#f7a35c"],
        }}
      >
        <Title>Rozkład zamówień według urządzeń</Title>
        <Series type="pie" data={chartData} options={{ innerSize: "60%" }} />
        <Tooltip pointFormat="{point.percentage:.1f}%<br/>Przychód: <b>€{point.revenue:.2f}</b>" />
      </Chart>
    </div>
  )
}
