
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'


export default function RootLayoutPage () {
    return <>
        <header>
            <Nav/>
        </header>
        <Outlet/>
   
    </>
}
