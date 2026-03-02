import { Chart, Series, Title, Tooltip, XAxis, YAxis } from "@highcharts/react"
import ordersData from "../data/data.json"
import "../App.css"

export function CustomerTypeChart() {
  const newCustomers = ordersData.orders
    .filter((order) => order.customerType === "new")
    .map((order) => ({
      x: new Date(order.timestamp).getTime(),
      y: Math.round(order.quantity * order.unitPrice * 100) / 100,
      name: order.product,
    }))

  const returningCustomers = ordersData.orders
    .filter((order) => order.customerType === "returning")
    .map((order) => ({
      x: new Date(order.timestamp).getTime(),
      y: Math.round(order.quantity * order.unitPrice * 100) / 100,
      name: order.product,
    }))

  return (
    <div className="chart-container">
      <Chart>
        <Title>Wartość zamówień w czasie</Title>
        <XAxis type="datetime" title={{ text: "Data zamówienia" }} />
        <YAxis title={{ text: "Wartość zamówienia (€)" }} />
        <Series
          type="scatter"
          data={newCustomers}
          options={{
            name: "Nowi klienci",
            color: "#4A90E2",
            marker: {
              symbol: "circle",
              radius: 6,
            },
          }}
        />
        <Series
          type="scatter"
          data={returningCustomers}
          options={{
            name: "Powracający klienci",
            color: "#50C878",
            marker: {
              symbol: "diamond",
              radius: 7,
            },
          }}
        />
        <Tooltip pointFormat="<b>{point.name}</b><br/>Wartość: <b>€{point.y:.2f}</b>" />
      </Chart>
    </div>
  )
}
