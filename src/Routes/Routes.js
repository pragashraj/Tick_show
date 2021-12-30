import Home from "../Pages/Home/Home"
import Movies from "../Pages/Movies/Movies"
import Theatres from "../Pages/Theatres/Theatres"

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
    ]
}


export default routes