import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
function NotFound() {
    return (
        <div className="not-found">
            <h2>404 Page-Not Found</h2>
            <Link to="/" >Go to Home</Link>
        </div>
    )
}
export default NotFound;