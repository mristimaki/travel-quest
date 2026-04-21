import { Link } from 'react-router'

function Navbar() {
    return <nav>
        <Link to="/">Explore</Link>
        <Link to="/bucketlist">Bucketlist</Link>
    </nav>
}

export default Navbar