import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Software from "./components/Software";
import Awards from "./components/Awards";
import Account from "./components/Account";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import {Outlet, createBrowserRouter} from "react-router-dom"


const AppLayout=()=>{
  return(
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </div>
  )
}
export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:'/',
            element:<Hero/>
        },
        {
            path:'/why',
            element:<Choose/>
        },
        {
            path:'/soft',
            element:<Software/>
        },
        {
            path:'/awards',
            element:<Awards/>
        },
        {
            path:'/account',
            element:<Account/>
        }
    ]
}
])
// const root=ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<RouterProvider router={appRouter}/>)
// export default App