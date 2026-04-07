import { Menu,Sun,MoonStar,User,UserPlus } from 'lucide-react';

import useStore from "../store/useStore";

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
import BarChart from './BarChart';
import DoughnutChart from './DoughNutChart';
import Transactions from '../pages/Transactions';

const MainContent = ({setSidebarOpen}) => {
   const transactions = useStore((state) => state.transactions)
  const theme = useStore((state) => state.theme)
const toggleTheme = useStore((state) => state.toggleTheme)

const role = useStore((state) => state.role)
const toggleRole = useStore((state) => state.toggleRole)
   //  Derived values
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = income - expenses
  return (
    <main className="flex-1 p-4 ">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 ">
        <button className="p-2 text-xl font-bold lg:hidden" onClick={()=>{setSidebarOpen(true)}}>
          <Menu/>
        </button>
        <h1 className="lg:text-2xl  font-bold">FINANCE DASHBOARD</h1>
        <div className="flex gap-3 p-2"> 

          {/* Toggle Theme */}
        <button onClick={toggleTheme}
         > {theme==="dark"?<Sun size={18}/>:<MoonStar size={18}/> }
        </button>
         
         {/* RoleBased-- */}
          <button
  onClick={toggleRole}
  className="flex flex-col items-center text-xs px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
>
  {role === "admin" ? <User size={18} /> : <UserPlus size={18} />}

  <span className="text-[10px] mt-1">
    {role === "admin" ? "Admin" : "Viewer"}
  </span>
</button>

      
         </div>
       

      </header>
       <div className="p-3 space-y-6">
      
      {/* Cards */}
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4  ">
        
        <div className=" p-3 rounded-lg shadow bg-white">
          <h3 className="text-gray-500 text-sm">Balance</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            ₹{balance}
          </p>
        </div>

        <div className="p-3 rounded-lg shadow bg-white">
          <h3 className="text-gray-500 text-sm">Income</h3>
          <p className="text-2xl font-bold text-green-500">
            ₹{income}
          </p>
        </div>

        <div className="p-3 rounded-lg shadow bg-white">
          <h3 className="text-gray-500 text-sm">Expenses</h3>
          <p className="text-2xl font-bold text-red-500">
            ₹{expenses}
          </p>
        </div>

      </div>

    </div>
    {/* Charts */}
     <div className="grid  grid-cols-1 lg:grid-cols-3  gap-4 mt-4">
  
     <div className=" p-4 rounded-xl shadow lg:col-span-2 space-y-4 dark:bg-gray-900 text-gray-800 dark:text-white ">
    <BarChart />
     <DoughnutChart />
  </div>
   <div className=" bg-white dark:bg-gray-900 p-4 rounded-xl shadow h-[600px] flex flex-col">
    <Transactions />
  </div>

</div>
    </main>
  )
}

export default MainContent