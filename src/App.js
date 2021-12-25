import React from 'react'

import Theatres from './Pages/Theatres/Theatres'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <div>
            <NavBar/>
            <Theatres/>
            <Footer/>
        </div>
    )
}

export default App