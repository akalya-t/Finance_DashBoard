import { create } from "zustand"

import { fetchTransactions } from "../api"

const useStore = create((set) => ({
   theme: "light",
role: "viewer",

toggleTheme: () =>
  set((state) => {
    const newTheme = state.theme === "dark" ? "light" : "dark"

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("theme", newTheme)

    return { theme: newTheme }
  }),

toggleRole: () =>
  set((state) => ({
    role: state.role === "admin" ? "viewer" : "admin"
  })),
  transactions: [],
  loading:false,

  // Load data (API simulation)
  loadTransactions: async() => {
    set({loading:true})
    const stored = localStorage.getItem("transactions")

    if (stored) {
      set({ transactions: JSON.parse(stored),loading:false })
    } else { 
        const data=await fetchTransactions()
      set({ transactions: data,loading:false })
    }
  },

  // Add transaction
  addTransaction: (transaction) =>
    set((state) => {
      const updated = [...state.transactions, transaction]

      localStorage.setItem("transactions", JSON.stringify(updated))

      return { transactions: updated }
    }),

  //  delete
  deleteTransaction: (id) =>
    set((state) => {
      const updated = state.transactions.filter((t) => t.id !== id)

      localStorage.setItem("transactions", JSON.stringify(updated))

      return { transactions: updated }
    })
})
)

export default useStore