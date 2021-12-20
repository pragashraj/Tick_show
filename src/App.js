import React from 'react'

import Home from './Pages/Home/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <div>
            <NavBar/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default App