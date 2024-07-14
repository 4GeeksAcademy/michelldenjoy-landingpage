import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// importacion del navbar
import NavBar from "./navbar/navbar";

// importacion del jumbotron
import Jumbotron from "./jumbotron/jumbotron";
//importacion de las cartas
import Card from "./cards/card";

//create your first component
const Home = () => {
	const datosCartas = [
		{
			id: 1,
			imagen: "https://placehold.co/600x400",
			titulo: "Carta 1",
			texto: "texto1",
			url: "#",
		},
		{
			id: 2,
			imagen: "https://placehold.co/600x400",
			titulo: "Carta 2",
			texto: "texto2",
			url: "#",
		},
		{
			id: 3,
			imagen: "https://placehold.co/600x400",
			titulo: "Carta 3",
			texto: "texto3",
			url: "#",
		},
		{
			id: 4,
			imagen: "https://placehold.co/600x400",
			titulo: "Carta 4",
			texto: "texto4",
			url: "#",
		}
	]

	return (
		<div>
			<div>
				<NavBar />
			</div>
			<main>
				<Jumbotron />
				<div className="container">
					<div className="row">
						{datosCartas.map((datoCarta) => (
							<div className="col-sm-12 col-md-3">
								<Card
									key={datoCarta.id}
									datos={datoCarta}
								/>
							</div>
						))}
					</div>

				</div>
			</main>
			<footer>

			</footer>
		</div>
	);


};

export default Home;
