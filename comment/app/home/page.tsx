import {Data} from './data'

export default async function Home() {

    const apiUrl = 'https://rickandmortyapi.com/api/location/3';

    const response = await fetch(apiUrl);
  
        const data = await response.json();
        // Crear una instancia de la clase Data con los datos de la respuesta
        const locationData = new Data(
            data.id,
            data.name,
            data.type,
            data.dimension,
            data.residents,
            data.url,
            data.created
        );

        console.log(locationData)
        return (
            <h1>HOLA</h1>
        )
}
