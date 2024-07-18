import React from "react";
import NavBar from "./navbar/navbar";
import Jumbotron from "./jumbotron/jumbotron";
import Cards from "./card/cards"
import Footer from "./footer/footer";

const Home = () => {
	return (
		<>
			<div> {/*barra de navegacion*/}
				<NavBar />
			</div>

			<main className="container">
				<Jumbotron />
				<div className="row"> {/*cartas repetidas*/}
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://placehold.co/200"} titulo={"TITULO"} text={"Algun texto aqui"} enlace={"www.michell.com"} />
					</div>
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://placehold.co/200"} titulo={"TITULO"} text={"Algun texto aqui"} enlace={"www.michell.com"} />
					</div>
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://placehold.co/200"} titulo={"TITULO"} text={"Algun texto aqui"} enlace={"www.michell.com"} />
					</div>
					<div className="col-sm-1 col-md-3">
						<Cards img={"https://placehold.co/200"} titulo={"TITULO"} text={"Algun texto aqui"} enlace={"www.michell.com"} />
					</div> {/*hasta aqui estan las cartas repetidas*/}
				</div>
			</main>
			<footer>
				<Footer />
			</footer>

		</>

	);
};
export default Home;
