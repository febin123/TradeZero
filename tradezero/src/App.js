import React,{Suspense, lazy} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Outlet, createBrowserRouter} from "react-router-dom"
import useOnlineStatus from "./utilis/useOnlineStatus";



//Start of Lazing loading
const Choose=lazy(()=>import("./components/Choose"))
const Hero=lazy(()=>import("./components/Hero"))
const Software=lazy(()=>import("./components/Software"))
const Awards=lazy(()=>import("./components/Awards"))
const Account=lazy(()=>import("./components/Account"))
//end of lazy loading
const AppLayout=()=>{
    const onlineStatus=useOnlineStatus()
   
    
    if(onlineStatus=== false)
    return(
      <h1 className='text-white'>🔴Looks like you are Offline!! </h1>
    )

  
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
            element:<Suspense fallback={<h1>Loading page...</h1>}><Hero/></Suspense>
        },
        {
            path:'/why',
            element: <Suspense fallback={<h1>Loading page...</h1>}><Choose/></Suspense> 
        },
        {
            path:'/soft',
            element:<Suspense fallback={<h1>Loading page...</h1>}><Software/></Suspense>
        },
        {
            path:'/awards',
            element:<Suspense fallback={<h1>Loading page...</h1>}><Awards/></Suspense>
        },
        {
            path:'/account',
            element:<Suspense fallback={<h1>Loading page...</h1>}><Account/></Suspense>
        }
    ]
}
])
