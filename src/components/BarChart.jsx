import { Bar } from "react-chartjs-2"
import useStore from "../store/useStore"

const BarChart = () => {
  const transactions = useStore((state) => state.transactions)

  // Convert date → week
  const getWeek = (date) => {
    const day = new Date(date).getDate()
    return Math.ceil(day / 7)
  }

  //  Categories 
  const categories = ["Food", "Travel", "Shopping"]

  // Initialize weekly structure
  const weekData = {
    1: { Food: 0, Travel: 0, Shopping: 0 },
    2: { Food: 0, Travel: 0, Shopping: 0 },
    3: { Food: 0, Travel: 0, Shopping: 0 },
    4: { Food: 0, Travel: 0, Shopping: 0 }
  }

  //  Fill data
  transactions.forEach((t) => {
    if (t.type === "expense" && categories.includes(t.category)) {
      const week = getWeek(t.date)
      weekData[week][t.category] += t.amount
    }
  })

  //  Chart Data
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", ],
    datasets: [
      {
        label: "Food",
        data: Object.values(weekData).map((w) => w.Food),
        backgroundColor: "#f87171" // red
      },
      {
        label: "Travel",
        data: Object.values(weekData).map((w) => w.Travel),
        backgroundColor: "#60a5fa" // blue
      },
      {
        label: "Shopping",
        data: Object.values(weekData).map((w) => w.Shopping),
        backgroundColor: "#fbbf24" // yellow
      }
    ]
  }

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow w-full h-[300px] md:h-[350px]">
      <h3 className="text-gray-700 dark:text-white font-semibold mb-2">
        Weekly Spending Overview
      </h3>

      <div className="w-full h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default BarChart