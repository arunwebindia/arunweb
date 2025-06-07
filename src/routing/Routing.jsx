import { createBrowserRouter} from "react-router-dom";
import Home from '../pages/home/Index'
import About from '../pages/about/Index'
import Layout from "../pages/layout/Layout";
import ContactUs from "../pages/contact/ContactUs";
import Project from "../pages/project/Index";
import Admin from '../admin/layout/Index'
import PageNotFound from "../pages/PageNotFound/PageNotFound";
const Routing=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[{
            index:true,
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<ContactUs/>
        },
        {
            path:'/project',
            element:<Project/>,
        }
    ]
    },
    {
        path:'/admin',
        element:<Admin/>
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
])

export default Routing;
