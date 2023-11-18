import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div className="footer">

            <div className="h2">Nama Desa</div>
        
            <div className="content-container">
                <div className="social-container">
                    <div className="h3 title">Social</div>
                    <div className="list-content">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Whatsapp</a></li>
                    </div>
                </div>
                <div className="links-container">
                    <div className="h3 title">Links</div>
                    <div className="list-content">
                        <li><Link to="/">Beranda</Link></li>
                        
                        <li><a href="#">Berita</a></li>
                        <li><Link to="/market">Pasar Online</Link></li>
                        <li><a href="#">Pekerjaan</a></li>
                    </div>
                </div>
                <div className="location-container">
                    <div className="h3 title">Location</div>
                    <div className="list-content">Jalan Meranti No.14 Bogor</div>
                </div>
            
            </div>
        </div>
    )
}