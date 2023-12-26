import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Software from "./components/Software";
// import Awards from "./components/Awards";
// import Account from "./components/Account";
// import Choose from "./components/Choose";
// import Footer from "./components/Footer";
import {Outlet, createBrowserRouter} from "react-router-dom"

const AppLayout=()=>{
  return(
    <div>
    <Navbar/>
    <Outlet/>
    {/* <Awards/>
    <Account/>
    <Choose/>
    <Footer/> */}
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
            path:'/soft',
            element:<Software/>
        },
    ]
}
])
// const root=ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<RouterProvider router={appRouter}/>)
// export default App