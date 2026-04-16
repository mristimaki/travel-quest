import useBucketlistStore from "../stores/useBucketlistStore";
import DestinationCard from "../components/DestinationCard";

function BucketlistPage() {
    const destinations = useBucketlistStore((state) => state.destinations);
    const removeDestination = useBucketlistStore((state) => state.removeDestination);

    if (destinations.length === 0) return <p>Nothing in your bucketlist yet..</p>
    return (
        <>
        <h1>Bucketlist</h1>
        <ul>
            {destinations.map((country) => (
            <div key={country.cca3}>
                <DestinationCard destination={country} />
                <button onClick={() => removeDestination(country.cca3)}>Remove</button>
            </div>
            ))}
        </ul>
        </>
    )
}

export default BucketlistPage