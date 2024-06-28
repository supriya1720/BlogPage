import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Blog from './Blog.jsx'
import Services from './Services.jsx';
import About from './About.jsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home.jsx'
import BriefDiv from './BriefDiv.jsx'
function App() {
  const router=createBrowserRouter([
    {
      path:"/Home",
      element:<><Home/></>
   },
   {
    path:"/",
    element:<><Home/></>
 },
    {
        path:"/Blog",
        element:<><Blog/></>
    },
    {
        path:"/Services",
        element:<><Services/></>
    },
    {
        path:"/About",
        element:<><About/></>
    },
    {
      path:"/BriefDiv",
      element:<><BriefDiv/></>
    }
])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  
  )
}
export default App;