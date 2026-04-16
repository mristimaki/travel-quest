import useBucketlistStore from "../stores/useBucketlistStore";
import DestinationCard from "../components/DestinationCard";
import { useState } from "react";

function BucketlistPage() {
    const destinations = useBucketlistStore((state) => state.destinations);
    const addDestination = useBucketlistStore((state) => state.addDestination);
    const removeDestination = useBucketlistStore((state) => state.removeDestination);
    const [name, setName] = useState('');
    const [region, setRegion] = useState('');
    const [notes, setNotes] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        addDestination({
            name: { common: name },
            region: region,
            notes: notes,
            cca3: name.toLowerCase().replace(/\s/g, '-')
        })
        setName('');
        setRegion('');
        setNotes('');
    }

    return (
        <>
        <h1>Bucketlist</h1>

        {destinations.length === 0 && <p>Nothing in your bucketlist yet..</p>}
        <ul>
            {destinations.map((country) => (
            <div key={country.cca3}>
                <DestinationCard destination={country} showAdd={false} />
                <button onClick={() => removeDestination(country.cca3)}>Remove</button>
            </div>
            ))}
        </ul>

        <form onSubmit={handleSubmit}>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Destination name"
            />
            <input 
                value={region} 
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Region"
            />
            <input 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes.."    
            />
            <button>Add</button>
        </form>
        </>
    )
}

export default BucketlistPage