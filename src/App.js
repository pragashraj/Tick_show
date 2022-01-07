import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AppBar from './Components/AppBar/AppBar'
import Footer from './Components/Footer/Footer'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import routes from './Routes/Routes'

const App = () => {
    return (
        <div>
            <AppBar/>
            <BrowserRouter>
                <Routes>
                    { routes.data.map((route,i) => {
                        return <Route 
                            index = {route.type === "main"} 
                            path = {route.path} 
                            element = {route.component} 
                            key = {i}
                        /> 
                    }) }
                    <Route path = "*" element = {<PageNotFound/>} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App