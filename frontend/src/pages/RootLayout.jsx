import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

export default function RootLayoutPage () {
    return <>
    <header>
        <Nav/>
    </header>
    <Outlet/>
    </>
}
