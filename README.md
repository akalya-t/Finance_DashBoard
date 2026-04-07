#  Finance Dashboard - 

A clean  **Finance Dashboard** built using ReactJs ,Vite and Tailwindcss .
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
* Toggle role using UI controls(Button)
---

###  Dark / Light Mode

* I tried to create this feature , But I couldn't, Ive to work on this later.

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
* Derived Values:
  * Balance
  * Income
  * Expenses
  * Chart data
* Built a **responsive layout** with sidebar + dashboard
* Focused on **clean UI, usability, and maintainability**

---

## By

**Akalya**
As part of the assessment for Zorvyn front end dev Intern role.


---
