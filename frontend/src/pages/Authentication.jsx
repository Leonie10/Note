import FormAuthentification from '../components/UI/FormAuthentication';
import { Link } from "react-router-dom";


export default function AuthenticationPage(){
    return (
        <>
        <FormAuthentification/>
        <Link to="/"> home</Link>
        </>
    )
}
