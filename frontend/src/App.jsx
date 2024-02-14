import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import HomePage from "./pages/Home"
import AuthenticationPage from './pages/Authentication'
import RootLayoutPage from "./pages/RootLayout"
import { DraggerContext } from "./store/dragger-context";

import useDragger from "./hooks/useDragger"

// test 
function App() {
  
  
  
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayoutPage/>, 
      children: [
        {path: '/', element: <HomePage/> }, 
        {path: '/auth', element: <AuthenticationPage/>},
      ]
    }
    
  ])

  return <DraggerContext.Provider> 
      <RouterProvider router={router}/> 
  </DraggerContext.Provider> 
}

export default App;
