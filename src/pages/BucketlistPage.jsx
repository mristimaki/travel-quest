import useBucketlistStore from "../stores/useBucketlistStore"
import DestinationCard from "../components/DestinationCard"

function BucketlistPage() {
    const destinations = useBucketlistStore((state) => state.destinations)

    if (destinations.length === 0) return <p>Nothing in your bucketlist yet..</p>
    return (
        <>
        <h1>Bucketlist</h1>
        <ul>
            {destinations.map((country) => (
            <DestinationCard key={country.cca3} destination={country} />
            ))}
        </ul>
        </>
    )
}

export default BucketlistPage