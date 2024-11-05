import { useState } from 'react'
import './App.css'
 
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import About from './components/about/About'
import ProductList from './components/product/ProductList'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <About/>
      <ProductList/>
    </>
  )
}

export default App
