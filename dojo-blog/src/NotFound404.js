import { Link } from "react-router-dom"

const NotFound404 = () => {
    return ( 
        <div className="not-found">
            <h2>Page Not Found</h2>
            <Link to="/">Return Home</Link>
        </div>
     );
}
 
export default NotFound404;