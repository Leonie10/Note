import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import HomePage from "./pages/Home"
import AuthenticationPage from './pages/Authentication'
import RootLayoutPage from "./pages/RootLayout"
import SignUpPage from "./pages/SignUp";

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayoutPage/>, 
      children: [
        {path: '/', element: <HomePage/> }, 
        {path: '/auth', element: <AuthenticationPage/>},
        {path: '/signup', element: <SignUpPage/>}
      ]
    }
    
  ])

  return <RouterProvider router={router}/>
}

export default App;
