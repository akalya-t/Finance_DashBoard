import { Doughnut } from "react-chartjs-2"
import useStore from "../store/useStore"

const DoughnutChart = () => {
  const transactions = useStore((state) => state.transactions)

  const categoryMap = {}

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount
    }
  })

  
  const categoryColors = {
    Food: "#f87171",
    Travel: "#60a5fa",
    Shopping: "#fbbf24",
    Groceries: "#34d399",
    Rent: "#a78bfa",
    Electricity: "#fb923c",
    Gas: "#22c55e",
    Restaurant: "#f472b6",
    Saloon: "#38bdf8"
  }

  const labels = Object.keys(categoryMap)

  const data = {
    labels,
    datasets: [
      {
        data: Object.values(categoryMap),
        backgroundColor: labels.map(
          (label) => categoryColors[label] || "#94a3b8"
        ),
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%", // donut hole
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
  return (
  <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow w-full h-[300px] md:h-[350px] flex flex-col">
    
    <h3 className="text-gray-700 dark:text-white font-semibold mb-2 text-center">
      Spending by Category
    </h3>
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-[320px] h-[220px] md:h-[260px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>

  </div>
)
  
}

export default DoughnutChart