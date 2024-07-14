import React from "react";

export default function Jumbotron() {
    return (
        <div>
            <div className="jumbotron bg-secondary mx-2 pb-5 pt-0 ps-4 pe-3">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis autem temporibus laudantium aperiam voluptates enim veritatis cumque incidunt dignissimos saepe officiis, est ipsum ratione itaque debitis sapiente esse sint.</p>
                <footer className="my-4" />
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
            </div>
        </div>
    )
};