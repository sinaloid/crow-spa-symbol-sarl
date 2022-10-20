import React from "react";
import { Link } from "react-router-dom";
import url from "../../../../url";

const Contreparties = () => {
    return (
        <>
            <div className="col-12 col-md-10 mx-auto">
                <div className="container mt-5">
                    <h2 className="title-2">Choisissez une contrepartie</h2>
                    <p>
                    Investissez dans le projet et recevez des contreparties en échange.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">
                                        Invest. 1
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h2
                                        className="card-title pricing-card-title"
                                        style={{ fontSize: "1rem" }}
                                    >
                                        100.000 FCFA{" "}
                                        <small className="text-muted fw-light">
                                            ou plus
                                        </small>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci quaerat
                                        architecto illo quis
                                    </p>

                                    <Link
                                        to={url.checkout}
                                        className="w-100 btn btn-lg btn-afdefis-primary"
                                    >
                                        Choisir
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">
                                        Invest. 2
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h2
                                        className="card-title pricing-card-title"
                                        style={{ fontSize: "1rem" }}
                                    >
                                        500.000 FCFA{" "}
                                        <small className="text-muted fw-light">
                                            ou plus
                                        </small>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci quaerat
                                        architecto illo quis
                                    </p>
                                    <Link
                                        to={url.checkout}
                                        className="w-100 btn btn-lg btn-afdefis"
                                    >
                                        Choisir
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">
                                        Invest. 3
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h2
                                        className="card-title pricing-card-title"
                                        style={{ fontSize: "1rem" }}
                                    >
                                        1.000.000 FCFA{" "}
                                        <small className="text-muted fw-light">
                                            ou plus
                                        </small>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci quaerat
                                        architecto illo quis
                                    </p>
                                    <Link
                                        to={url.checkout}
                                        className="w-100 btn btn-lg btn-afdefis-secondary"
                                    >
                                        Choisir
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contreparties;
