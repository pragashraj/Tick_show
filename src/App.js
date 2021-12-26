import React from 'react'

import Movies from './Pages/Movies/Movies'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <div>
            <NavBar/>
            <Movies/>
            <Footer/>
        </div>
    )
}

export default App