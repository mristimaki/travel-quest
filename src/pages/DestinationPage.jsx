import { useParams } from "react-router";
import { useEffect, useState } from "react";

function DestinationPage() {
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        fetch(`https://restcountries.com/v3.1/alpha/${id}?fields=name,capital,region,flags,population,area,languages,currencies`)
        .then(response => response.json())
        .then(data => {
            setDestination(data)
        })
        .catch(err => {
            setError(err.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong: {error}</p>
    if (!destination) return null
    return (
        <>
            <img src={destination.flags.svg} alt={destination.name.common} />
            <h1>{destination.name.common}</h1>
            <p>{destination.region}</p>
            <p>Population: {destination.population}</p>
            <p>Area: {destination.area} km²</p>
            <p>Languages: {Object.values(destination.languages).join(', ')}</p>
            <p>Currency: {Object.values(destination.currencies).map(c => c.name).join(', ')}</p>
        </>
    )
}

export default DestinationPage