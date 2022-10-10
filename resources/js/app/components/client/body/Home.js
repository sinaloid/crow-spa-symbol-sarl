import React, { Suspense, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";
import apiClient from "../../../services/api";
import BestSeller from "./BestSeller";
import Carousel from "./Carousel";
import DiscountedProduct from "./DiscountedProduct";
import DownloadApp from "./DownloadApp";
import HomeProduitList from "./HomeProduitList";
import HomeProduitListCarousel from "./HomeProduitListCarousel";
import HowIsWork from "./HowIsWork";
import HowIsWorkVideo from "./HowIsWorkVideo";
import Brand from "./includes/Brand";
import NewProduct from "./NewProduct";
import Recommandation from "./Recommadation";

const Home = () => {
    const appTypeCtx = useContext(AppContext);
    const { appType } = appTypeCtx;
    const path = window.location.pathname;

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        apiClient
            .get(`productAll`)
            .then((res) => {
                if (res.status === 200) {
                    setDatas(res.data);
                } else {
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 422) {
                    //notify("error", error.response.data.message);
                } else {
                    //notify("error", error.response.data.message);
                }
            });
    }, []);
    return (
        <>
            <div className="row bg-white">
                <div className="col-12 col-lg-5 order-2 order-lg-1 p-0 p-3 p-md-5">
                    <h1><span className="text-primary">Donner vie</span> <br/> à vos projets</h1>
                    <p>
                        Pionnier du financement participatif, AfricaDefis 
                        est la plateforme d'investissement dans des projets d'avenir à forte rentabilité
                    </p>
                    <Link to="#" className="btn btn-afdefis-secondary mb-3 me-3">Lancer mon projet</Link>
                    <Link to="#" className="btn btn-afdefis mb-3 me-3">Découvrir les projets</Link>
                </div>
                <div className="col-12 col-lg-7 order-1 order-lg-2 p-0">
                    <Carousel />
                </div>
            </div>

            <HowIsWorkVideo />
            <HowIsWork />

            {datas.reduction != [] && (
                <HomeProduitListCarousel
                    datas={datas.reduction}
                    title={"Les projets à la une"}
                />
            )}
            {datas.marque != [] && <Brand datas={datas.marque} />}

            {datas.meilleurVente != [] && (
                <HomeProduitListCarousel
                    datas={datas.meilleurVente}
                    title={"Bientôt lancés, suivez-les dès maintenant !"}
                />
            )}

            <div className="py-2">
                {datas.recommandation != [] && (
                    <HomeProduitList
                        datas={datas.recommandation}
                        title={"Découvrir le manifesto Ulule"}
                    />
                )}
                {datas.nouveau != [] && (
                    <BestSeller
                        datas={datas.nouveau}
                        title={"Recevez notre newsletter !"}
                    />
                )}
            </div>
            {!appType.mobile && <DownloadApp />}
        </>
    );
};

export default Home;
