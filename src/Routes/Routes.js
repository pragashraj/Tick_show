import Home from "../Pages/Home/Home"
import Movies from "../Pages/Movies/Movies"
import Theatres from "../Pages/Theatres/Theatres"
import SelectedMovie from "../Pages/Movies/SelectedMovie"
import Contact from "../Pages/Contact/Contact"

const routes = {
    data: [
        {
          name: "Home",
          path: "/",
          component: <Home/>,
          type: "main",
        },
        {
            name: "Movies",
            path: "/movies",
            component: <Movies/>,
            type: "",
        },
        {
            name: "Theatres",
            path: "/theatres",
            component: <Theatres/>,
            type: "",
        },
        {
            name: "SelectedMovie",
            path: "/selectedMovie",
            component: <SelectedMovie/>,
            type: "",
        },
        {
            name: "Contact",
            path: "/contacts",
            component: <Contact/>,
            type: "",
        },
    ]
}


export default routes