import React from 'react'
import NavBar from '../NavBar'
import MUITest from './MUITest'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../utils_redux/store'

const MainApp = () => {
  return (
    <>
        <Provider store={store}>
        <NavBar/>
        <Routes>
            <Route path='/' element=<MUITest/> />
        </Routes>
        </Provider>
    </>
  )
}

export default MainApp