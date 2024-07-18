import React from "react";
export default function Cards(prop){
    return (
        <div class="card m-3">
            <img src={prop.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prop.titulo}</h5>
                <p className="card-text">{prop.text}</p>
                <a href={prop.enlace} class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};