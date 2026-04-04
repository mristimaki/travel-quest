import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
    return (
        <Link to={`/destination/${destination.cca3}`}>
            <div>
                <img src={destination.flags.svg} alt={destination.name.common} />
                <p>{destination.name.common}</p>
                <p>{destination.region}</p>
                <p>{destination.capital[0]}</p>
            </div>
        </Link>
    )
}

export default DestinationCard