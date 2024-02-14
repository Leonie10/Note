import Container from '../components/Container/Container';
import { DraggerContext } from '../store/dragger-context';



export default function HomePage(){
    return <DraggerContext.Provider>
            <Container/>
    </DraggerContext.Provider>
}
