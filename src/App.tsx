import { useState } from 'react'
import './App.css'
import FormPage from './components/formPage'
import { FormData } from './types'

function App() {
  const formHandler = (formdata: FormData) => {
    console.log("lol")
  }
  return (
   <div className="container">
      <div className="leftSide"><FormPage onSave={formHandler}></FormPage></div>
      <div className="rightSide"></div>
   </div>
  )
}

export default App
