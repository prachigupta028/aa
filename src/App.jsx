import React from 'react'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Data from "./Data.jsx"


const App = () => {
  return (
    <>
    <div className='head'>
    <div><Header /></div>
    
    <div><Data /></div>
    
    <div><Footer /></div>
    </div>
    </>
  )
}

export default App