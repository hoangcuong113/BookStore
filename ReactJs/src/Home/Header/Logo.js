import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link
            className="navbar-brand"
            to="/"
            style={{ color: "#1196cf" }}
        >
            <b>DealBook</b>.xyz
        </Link>
    )
}

export default Logo
