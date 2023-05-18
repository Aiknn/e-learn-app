import { Link } from "react-router-dom";

export const ExploreCourses = () => {
    return (
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Ұнаған курсты табыңыз</h1>
                    <p className="col-md-8 fs-4">Сіз нені үйренгенді қалайсыз?</p>
                    <Link to="/search" type="button" className="btn main-color btn-lg text-white">Курстарды қараңыз</Link>
                </div>
            </div>        
        </div>
    );
}