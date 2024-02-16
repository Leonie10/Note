import { useState } from 'react';
import Container from '../components/Container/Container';
import { DraggerContext } from '../store/dragger-context';



export default function HomePage(){

    const [data, setData] = useState()

    return <DraggerContext.Provider value={{item: []}}>
            <Container />
    </DraggerContext.Provider>
}



    // items NO CONNEXION
    // items CONNEXION