import React from "react";

export default function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                {/* BOTON MENU HAMBURGUESA */}
                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*elementos que estan dentro de la barra de navegacion*/}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}