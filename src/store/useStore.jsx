import { create } from "zustand"

import { fetchTransactions } from "../api"

const useStore = create((set) => ({
   theme: "light",
role: "viewer",

toggleTheme: () =>
  set(() => {
    const isDark = document.documentElement.classList.contains("dark")

    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }

    return { theme: isDark ? "light" : "dark" }
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