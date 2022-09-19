import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Layout from './layout/Layout'
import Home from './pages/Home'
import Customers from './pages/Customers'

export default function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/customers" element={<Customers/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}