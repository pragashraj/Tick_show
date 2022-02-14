import Home from "../Pages/Home/Home"
import Movies from "../Pages/Movies/Movies"
import Theatres from "../Pages/Theatres/Theatres"
import SelectedMovie from "../Pages/Movies/SelectedMovie"
import Contact from "../Pages/Contact/Contact"
import Events from "../Pages/Events/Events"
import SignUp from "../Pages/SignUp/SignUp"
import SignIn from "../Pages/SignIn/SignIn"
import LoginAsAdmin from '../Pages/SignIn/LoginAsAdmin'
import AdminPanel from '../Pages/Admin/AdminPanel'

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
        {
            name: "Events",
            path: "/events",
            component: <Events/>,
            type: "",
        },
        {
            name: "SignUp",
            path: "/signup",
            component: <SignUp/>,
            type: "",
        },
        {
            name: "SignIn",
            path: "/signin",
            component: <SignIn/>,
            type: "",
        },
        {
            name: "LoginAsAdmin",
            path: "/loginasadmin",
            component: <LoginAsAdmin/>,
            type: "",
        },
        {
            name: "AdminPanel",
            path: "/admin-panel",
            component: <AdminPanel/>,
            type: "",
        },
    ]
}


export default routes