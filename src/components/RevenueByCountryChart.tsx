import { Chart, Series, Title, Tooltip, XAxis } from "@highcharts/react"
import ordersData from "../data/data.json"
import "../App.css"

export function RevenueByCountryChart() {
  const revenueByCountryAndCategory = ordersData.orders.reduce(
    (acc, order) => {
      const revenue = order.quantity * order.unitPrice
      const country = order.country
      const category = order.category

      if (!acc[country]) {
        acc[country] = {}
      }
      acc[country][category] = (acc[country][category] || 0) + revenue
      return acc
    },
    {} as Record<string, Record<string, number>>,
  )

  const avgDeliveryByCountry = ordersData.orders.reduce(
    (acc, order) => {
      const country = order.country
      if (!acc[country]) {
        acc[country] = { total: 0, count: 0 }
      }
      acc[country].total += order.deliveryDays
      acc[country].count += 1
      return acc
    },
    {} as Record<string, { total: number; count: number }>,
  )

  const countries = Object.keys(revenueByCountryAndCategory).sort((a, b) => {
    const totalA = Object.values(revenueByCountryAndCategory[a]).reduce(
      (sum, val) => sum + val,
      0,
    )
    const totalB = Object.values(revenueByCountryAndCategory[b]).reduce(
      (sum, val) => sum + val,
      0,
    )
    return totalB - totalA
  })

  const categories = Array.from(
    new Set(ordersData.orders.map((order) => order.category)),
  )

  const seriesData = categories.map((category) => ({
    name: category,
    data: countries.map(
      (country) =>
        Math.round(
          (revenueByCountryAndCategory[country]?.[category] || 0) * 100,
        ) / 100,
    ),
  }))

  const avgDeliveryData = countries.map((country) => {
    const data = avgDeliveryByCountry[country]
    return data ? Math.round((data.total / data.count) * 10) / 10 : 0
  })

  return (
    <div className="chart-container">
      <Chart
        options={{
          plotOptions: {
            column: {
              stacking: "normal",
            },
          },
          yAxis: [
            {
              title: { text: "Przychód (€)" },
            },
            {
              title: { text: "Średni czas dostawy (dni)" },
              opposite: true,
            },
          ],
        }}
      >
        <Title>Przychody i czas dostawy według krajów</Title>
        <XAxis categories={countries} title={{ text: "Kraj" }} />
        {seriesData.map((series) => (
          <Series
            key={series.name}
            type="column"
            data={series.data}
            options={{
              name: series.name,
              tooltip: {
                valuePrefix: "€",
              },
            }}
          />
        ))}
        <Series
          type="line"
          data={avgDeliveryData}
          options={{
            name: "Średni czas dostawy",
            yAxis: 1,
            color: "#E74C3C",
            marker: {
              enabled: true,
              radius: 5,
            },
            tooltip: {
              valueSuffix: " dni",
            },
          }}
        />
        <Tooltip shared />
      </Chart>
    </div>
  )
}
