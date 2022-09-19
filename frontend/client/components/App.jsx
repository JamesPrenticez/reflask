import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Home from './Home'
import Customers from './customers'


export default function App() {
  return (
    <main className="min-h-screen bg-theme-primary text-theme-secondary">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/customers" element={<Customers/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}