import React from "react";
import { Link } from "react-router-dom";
import url from "../../../url";
import ProductCard from "./includes/ProductCard";

const HomeProduitList = ({ datas = [], title }) => {
    return (
        <div className="container-fuild py-3">
            {/*<div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
            <h2 className="h3 mb-0 me-3 title-1">{title}</h2>
            <div className="row pt-3">
              <Link
                className="btn btn-outline-accent btn-sm txt-white-hover"
                to={url.produits}
              >
                Plus de products
                <i className="ci-arrow-right ms-1 me-n1"></i>
              </Link>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {datas.map((data, idx) => {
              return (
                <ProductCard key={idx} idx={idx} data={data} />
              );
            })}
          </div>*/}
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
                          <h2 className="text-secondary">On vous aide à passer de l'idée à l'action</h2>
                          <p>
                          Lorem Ipsum is simply dummy text of the printing and 
                          typesetting industry. Lorem Ipsum has been the industry's standard 
                          dummy text ever since the 1500s, when an unknown printer took a galley 
                          of type and scrambled it to make a type specimen book. It has survived 
                          not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged. It was popularised in the 1960s with the 
                          release of Letraset sheets containing Lorem Ipsum passages,
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

export default HomeProduitList;
