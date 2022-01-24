import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AppBar from './Components/AppBar/AppBar'
import Footer from './Components/Footer/Footer'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import DrawerPanel from './Components/Drawer/DrawerPanel'

import routes from './Routes/Routes'

const App = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <div>
            <AppBar handleDrawer = {handleDrawer}/>
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
            <DrawerPanel open = {openDrawer} handleDrawer = {handleDrawer}/>
        </div>
    )
}

export default App