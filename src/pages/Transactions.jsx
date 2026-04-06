import { useEffect,useState } from "react"
import useStore from "../store/useStore";
import { Trash, Plus} from "lucide-react";


const Transactions = () => {
    
    const addTransaction = useStore((state) => state.addTransaction)
    const deleteTransaction = useStore((state) => state.deleteTransaction)
    const loadTransactions = useStore((state) => state.loadTransactions)
    const transactions = useStore((state) => state.transactions)


  useEffect(() => {
    loadTransactions()
  }, [])
  const [showForm, setShowForm] = useState(false)

const [formData, setFormData] = useState({
  amount: "",
  category: "Food",
  type: "expense",
  date: ""
})
const [filter, setFilter] = useState("All");
const [sort, setSort] = useState("latest")
const filteredTransactions =
  filter === "All"
    ? transactions
    : transactions.filter((t) => t.category === filter)

const sortedTransactions = [...filteredTransactions].sort((a, b) => {
  if (sort === "latest") return new Date(b.date) - new Date(a.date)
  if (sort === "amount") return b.amount - a.amount
  return 0
})
const role = useStore((state) => state.role)
return (
  <div className="flex flex-col h-full">

    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-semibold text-sm">Recent Transactions</h3>
      <div className="flex gap-2 items-center">

  {/* Filter */}
  <select
    className="text-xs border rounded px-2 py-1"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="All">All</option>
    <option value="Food">Food</option>
    <option value="Travel">Travel</option>
    <option value="Shopping">Shopping</option>
    <option value="Groceries">Groceries</option>
    <option value="salary">Salary</option>
    <option value="freelance">freelance</option>
  </select>

  {/* Sort */}
  <select
    className="text-xs border rounded px-2 py-1"
    value={sort}
    onChange={(e) => setSort(e.target.value)}
  >
    <option value="latest">Latest</option>
    <option value="amount">Amount</option>
  </select>

</div>

      {/* Add button */}

      {role === "admin" && (
  <button onClick={() => setShowForm(true)} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
    <Plus size={18} />
  </button>
)}
      
    </div>

    {/*  table */}
    <div className="overflow-y-auto flex-1">
      <table className="w-full text-xs">
  <thead className="text-gray-500 border-b">
    <tr>
      <th className="py-2 text-left">Date</th>
      <th className="text-left">Amount</th>
      <th className="text-left">Category</th>
      <th className="text-left">Action</th>
    </tr>
  </thead>

  <tbody>
    {sortedTransactions?.length === 0 ? (
      <tr>
        <td colSpan="4" className="text-center py-4 text-gray-400">
          No transactions found
        </td>
      </tr>
    ) : (
      sortedTransactions?.map((t) => (
        <tr key={t.id} className="border-b hover:bg-gray-50">
          <td className="py-2">{t.date}</td>

          <td
            className={
              t.type === "income"
                ? "text-green-500"
                : "text-red-500"
            }
          >
            ₹{t.amount}
          </td>

          <td>{t.category}</td>

          <td>
            {role === "admin" && (
              <button
                onClick={() => deleteTransaction(t.id)}
                className="text-red-500 text-xs"
              >
                <Trash size={15} />
              </button>
            )}
          </td>
        </tr>
      ))
    )}
  </tbody>
</table>

      {/* The Popup to Add data */}
      {showForm && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    
    <div className="bg-white p-4 rounded-lg shadow w-[300px]">
      <h3 className="font-semibold mb-2">Add Transaction</h3>

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        className="w-full border p-2 mb-2 rounded"
        value={formData.amount}
        onChange={(e) =>
          setFormData({ ...formData, amount: e.target.value })
        }
      />

      {/* Category */}
      <select
        className="w-full border p-2 mb-2 rounded"
        value={formData.category}
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Groceries</option>
        <option>Salary</option>
        <option>Frelance</option>
      </select>

      {/* Type */}
      <select
        className="w-full border p-2 mb-2 rounded"
        value={formData.type}
        onChange={(e) =>
          setFormData({ ...formData, type: e.target.value })
        }
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {/* Date */}
      <input
        type="date"
        className="w-full border p-2 mb-3 rounded"
        value={formData.date}
        onChange={(e) =>
          setFormData({ ...formData, date: e.target.value })
        }
      />

      {/* Actions */}
      <div className="flex justify-between">
        <button
          onClick={() => setShowForm(false)}
          className="text-sm text-gray-500"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            addTransaction({
              id: Date.now(),
              amount: Number(formData.amount),
              category: formData.category,
              type: formData.type,
              date: formData.date
            })

            setShowForm(false)
          }}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          Add
        </button>
      </div>
    </div>

  </div>
)}
    </div>

  </div>
)
    
}

export default Transactions;