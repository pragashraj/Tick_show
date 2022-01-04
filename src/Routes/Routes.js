import Home from "../Pages/Home/Home"
import Movies from "../Pages/Movies/Movies"
import Theatres from "../Pages/Theatres/Theatres"
import SelectedMovie from "../Pages/Movies/SelectedMovie"

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
    ]
}


export default routes