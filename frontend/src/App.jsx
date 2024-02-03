import { RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css'
import HomePage from "./pages/Home"
import AuthentificationPage from './pages/Authentification'
import RootLayoutPage from "./pages/RootLayout"

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <RootLayoutPage/>},
    {path: '/', element: <HomePage/> }, 
    {path: '/auth', element: <AuthentificationPage/>}
  ])

  return <RouterProvider router={router}/>
}

export default App;
