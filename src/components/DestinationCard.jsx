import { Link } from "react-router-dom";
import useBucketlistStore from "../stores/useBucketlistStore";

// Displays a card with country information and allows saving to bucketlist
function DestinationCard({ destination, showAdd }) {
    const addDestination = useBucketlistStore((state) => state.addDestination)

    return (
        <>
        <Link to={`/destination/${destination.cca3}`}>
            <div>
                <img src={destination.flags.svg} alt={destination.name.common} />
                <p>{destination.name.common}</p>
                <p>{destination.region}</p>
                <p>{destination.capital[0]}</p>
            </div>
        </Link>
        {showAdd && <button onClick={() => addDestination(destination)}>
            Save to bucketlist
        </button>}
        </>
    )
}

export default DestinationCard