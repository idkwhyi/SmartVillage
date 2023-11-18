import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"><Link to="/">Kalasey</Link></div>
            <div className="nav-menu">
                <a href="#">Berita</a>
                <Link to="pasar">Pasar Online</Link>
                <a href="#">Pekerjaan</a>
            </div>
            <div className="button">
                <button className="login nav-button">Login</button>
                <button className="register nav-button">Daftar</button>
            </div>
        </div>
    )
}