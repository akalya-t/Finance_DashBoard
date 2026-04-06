# 💰 Finance Dashboard UI

A clean and interactive **Finance Dashboard** built using React.
This project focuses on **UI design, state management, and data handling** without relying on a backend.

---

## Features

###  Dashboard Overview

* Displays **Total Balance, Income, and Expenses**
* **Bar Chart**: Weekly spending (Food, Travel, Shopping)
* **Doughnut Chart**: Category-wise expense distribution

---

###  Transactions

* View all transactions in a **scrollable table**
* Add new transactions using a **form popup**
* Delete transactions
* **Filter by category**
* **Sort by date or amount**
* Handles **empty state gracefully**

---

###  Role-Based UI

* **Viewer**: Can only view data
* **Admin**: Can add and delete transactions
* Toggle role using UI controls

---

###  Dark / Light Mode

* Toggle between dark and light themes
* Theme preference is **persisted using localStorage**

---

### Insights (Basic)

* Charts provide visual insights into:

  * Spending patterns
  * Category distribution

---

###  State Management

* Built using **Zustand**
* Centralized state for:

  * Transactions
  * Theme
  * Role
* Data persisted in **localStorage**

---

## Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **Zustand** (State Management)
* **Chart.js + react-chartjs-2**
* **Lucide React Icons**

---

## Project Structure

```
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── MainContent.jsx
│   ├── BarChart.jsx
│   ├── DoughnutChart.jsx
│   └── Transactions.jsx
│
├── store/
│   └── useStore.js
│
├── data/
│   └── data.jsx
│
├── App.jsx
└── main.jsx
```

---

##  Setup Instructions

1. Clone the repository

```bash
git clone <your-repo-link>
cd finance-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

---

##  Approach

* Used a **single source of truth (transactions)** for all UI elements
* Derived:

  * Balance
  * Income
  * Expenses
  * Chart data
* Built a **responsive layout** with sidebar + dashboard
* Focused on **clean UI, usability, and maintainability**

---

##  Optional Enhancements (Future Scope)

* Edit transactions
* Export data (CSV/JSON)
* Advanced filtering
* Backend integration

---

## Notes

* This project uses **mock data and localStorage** instead of a backend
* Designed to demonstrate **frontend architecture and UI thinking**

---

## 🙌 Author

**Akalya**


---
