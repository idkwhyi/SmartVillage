import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">Desa Kalasey</div>
            <div className="nav-menu">
                <div>Beranda</div>
                <div>Berita</div>
                <div>Loker</div>
            </div>
            <div className="button">
                <button className="login">Login</button>
                <button className="register">Daftar</button>
            </div>
        </div>
    )
}