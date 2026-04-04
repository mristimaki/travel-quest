import { useEffect, useState } from "react"
import DestinationCard from "../components/DestinationCard";


function ExplorePage() {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);  

        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca3')
            .then(response => response.json())
            .then(data => {
                setDestinations(data)
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
    return (
        <>
            <h1>Explore</h1>
            <ul>
                {destinations.map((country) => (
                <DestinationCard key={country.cca3} destination={country} />
            ))}
        </ul>
        </>
    )
}

export default ExplorePage
