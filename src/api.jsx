import React from 'react';
import { mockData } from './data/data';


export const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 800)
  })
}