import React from "react";
import { Link } from "react-router-dom";
import { urlImg } from "../../../../services/api";
import url from "../../../../url";

const Brand = ({ datas = [] }) => {
    return (
        <div className="container-fluid">
            {/*<section className="row pt-3 mb-4 pt-md-4">
                {/*<!-- Heading-->/}
                <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4">
                    <h2 className="h3 mb-0 pt-3 me-3 title-1 text-center">
                        Donnez du pouvoir à votre argent en finançant des
                        projets innovants
                    </h2>
                    <div className="row pt-3">
                        <a
                            className="btn btn-outline-accent btn-sm txt-white-hover"
                            href="#"
                        >
                            Voir toutes les marques
                            <i className="ci-arrow-right ms-1 me-n1"></i>
                        </a>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    {datas.map((data, idx) => {
                        return (
                            <div key={idx} className="col mx-auto">
                                <div className="card shadow-sm p-1">
                                    <img
                                        className=""
                                        width="100%"
                                        height="100"
                                        style={{ objectFit: "cover" }}
                                        src={urlImg + "/marques/" + data.logo}
                                        alt=""
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>*/}

            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row bg-white pt-3">
                        <div className="col-12 col-md-6 mb-3">
                            <img
                                className=""
                                width={"100%"}
                                //src={urlImg+""+data.image}
                                src={`https://source.unsplash.com/random/800x600/?product=1`}
                                alt="ulitration"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <h2 className="text-secondary">Donnez du pouvoir à votre argent en finançant des
                        projets innovants</h2>
                          <p>
                          Placez votre épargne dans des projets en fonction de la thématique, 
                          de leur impact et du rendement. Grâce à votre engagement, les projets 
                          voient le jour et vous percevez jusqu’à 7% d’intérêts par an.
                          Lorem Ipsum is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's standard 
                          dummy text ever since the 1500s, when an unknown printer took a galley 
                          of type and scrambled it 
                          </p>
                          <div>
                            <Link to={"profile/"+url.dashboard_produit +"/" +url.dashboard_produit_ajout} className="btn btn-afdefis-secondary mb-3 me-3">Lancer mon projet</Link>
                            <Link to={url.produits} className="btn btn-afdefis mb-3 me-3">Découvrir les projets</Link>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
