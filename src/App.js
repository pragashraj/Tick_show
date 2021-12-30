import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer/Footer'
import routes from './Routes/Routes'

const App = () => {
    return (
        <div>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    { routes.data.map((route,i) => {
                        return <Route index = {route.type === "main"} path = {route.path} element = {route.component} key = {i}/> 
                    }) }
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App