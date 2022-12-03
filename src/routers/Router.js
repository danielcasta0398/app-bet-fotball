import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={ <h1>Hola Santi</h1> } />
        </Routes>
    </HashRouter>
  )
}

export default Router