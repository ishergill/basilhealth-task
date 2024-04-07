import React from 'react';
import './App.css';
// import  Navbar  from './components/Common/Navbar';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout children={<Orders />} />} />
          <Route path="/order/:order_id" element={<MainLayout children={<OrderDetails />}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
