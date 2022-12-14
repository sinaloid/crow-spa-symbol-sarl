import React, { Suspense, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";
import apiClient from "../../../services/api";
import url from "../../../url";
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
            .get(`projetAll`)
            .then((res) => {
                if (res.status === 200) {
                    setDatas(res.data);
                    console.log(res.data)
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
                    <h1><span className="text-primary">Donner vie</span> <br/> √† vos projets</h1>
                    <p>
                        Pionnier du financement participatif, AfricaDefis 
                        est la plateforme d'investissement dans des projets d'avenir √† forte rentabilit√©
                    </p>
                    <Link to={"profile/"+url.dashboard_produit +"/" +url.dashboard_produit_ajout} className="btn btn-afdefis-secondary mb-3 me-3">Lancer mon projet</Link>
                    <Link to={url.produits} className="btn btn-afdefis mb-3 me-3">D√©couvrir les projets</Link>
                </div>
                <div className="col-12 col-lg-7 order-1 order-lg-2 p-0">
                    <Carousel />
                </div>
            </div>

            <HowIsWorkVideo />
            <HowIsWork />

            {datas.projetALaUne != [] && (
                <HomeProduitListCarousel
                    datas={datas.projetALaUne}
                    title={"Les projets √† la une "}
                />
            )}
            {datas.marque != [] && <Brand datas={datas.marque} />}

            {datas.all != [] && (
                <HomeProduitListCarousel
                    datas={datas.all}
                    title={"Les nouveaux projets !"}
                />
            )}

            <div className="py-2">
                {datas.recommandation != [] && (
                    <HomeProduitList
                        datas={datas.recommandation}
                        title={"D√©couvrir"}
                    />
                )}
                {datas.projetFinance != [] && (
                    <BestSeller
                        datas={datas.projetFinance}
                        title={"Les projets financ√©s !"}
                    />
                )}
            </div>
            <div className="row bg-white p-3">
                    <div className="col-12 col-md-6">
                        <h2 className="title-2 mt-2">QU'EST CE QUE AFRICADEFIS ?</h2>
                        <p className="">
                            L‚Äôobjet donc du pr√©sent projet, est de mettre √† la disposition de projets √†
                             fort potentiel et impact, des personnes ayant une capacit√© de financement 
                             assez √©lev√©e. Autrement, il s‚Äôagit de mettre en place des plateformes, √† travers 
                             lesquelles des investisseurs viendraient investir dans des projets √† √©conomiquement 
                             viables et socialement rentables.
                        </p>
                        <div>
                            <Link to="#" className="btn btn-afdefis-secondary mb-3 me-3">En savoir plus</Link>
                          </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="title-2 mt-2">DOCUMENTS ADMINISTRATIFS</h2>
                        <p className="">
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                            with the release of Letraset sheets containing Lorem Ipsum passages,
                        </p>
                        <div>
                            <Link to="#" className="btn btn-afdefis mb-3 me-3">D√©couvrir les documents</Link>
                          </div>
                    </div>
            </div>
            {!appType.mobile && <DownloadApp />}
        </>
    );
};

export default Home;
