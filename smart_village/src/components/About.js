import React from "react";
// import VillageImage from "..gambar desa evan.jpg";

export default function About(){
    return (
        <div className="about">
            <div className="text-container">
                <div className="about-title">
                    Info Desa
                </div>
                <div className="about-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas obcaecati id perferendis tempora cum deleniti, repudiandae delectus tenetur hic fugit reiciendis dignissimos iusto exercitationem magni corrupti! Facere, quasi tempore.
                </div>
            </div>
            <div className="village-images">
                <img className="bg-villages" src={require('../images/minecraft-village.png')} alt="path_image"></img>
            </div>
        </div>
    )
}