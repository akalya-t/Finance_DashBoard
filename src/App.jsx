import React from 'react'
import './App.css'
import Transactions from './pages/transactions'
import Dashboard from './pages/Dashboard';

import { Routes,Route } from 'react-router-dom';
import { useEffect } from "react"
import useStore from "./store/useStore"




const App = () => {
  const loadTransactions = useStore((state) => state.loadTransactions)

  useEffect(() => {
    loadTransactions()
  }, []);
  useEffect(() => {
  const theme = localStorage.getItem("theme")
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  }
}, [])
  return (
    <> 
    <div className="flex"> 
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
      
      </Routes>  
   </div>
     
    </>
  )
}

export default App