
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import { PositionElementsContext } from '../store/elements-context'


export default function RootLayoutPage () {
    return <>
        <header>
            <Nav/>
        </header>
        <Outlet/>
   
    </>
}
