import React from "react";
import img1 from "./assets/imgs/01.png";
import img2 from "./assets/imgs/02.png";
import img3 from "./assets/imgs/03.png";

const HowIsWork = () => {
    return (
        <section className="pt-2 mb-4 mb-md-5">
            <h2 className="h3 text-center mb-grid-gutter py-4 title-1">
                Comment lancer votre campagne de financement participatif ?{" "}
            </h2>
            <div className="row g-0 bg-light rounded-3">
                <div className="col-md-4 border-end">
                    <div className="py-3">
                        <div
                            className="d-flex align-items-center mx-auto py-3 px-2"
                            style={{ maxWidth: "362px" }}
                        >
                            <div className="ps-2">
                                <div className="text-center mb-2">
                                    <p className="circle">
                                    <span>1</span>
                                    </p>
                                </div>
                                <h2 className="text-center">Inscription</h2>
                                <p className="text-bold text-center">Créez votre compte</p>
                                <p className="mb-3 pt-1 text-center">
                                    Inscrivez vous, votre association ou entreprise gratuitement et
                                    facilement en quelques clics. Personnalisez
                                    votre page de profile. Puis, accédez à
                                    votre tableau de bord.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 border-end">
                    <div className="py-3">
                        <div
                            className="d-flex align-items-center mx-auto py-3 px-2"
                            style={{ maxWidth: "362px" }}
                        >
                            <div className="ps-2">
                            <div className="text-center mb-2">
                                    <p className="circle">
                                    <span>2</span>
                                    </p>
                                </div>
                                <h2 className="text-center">Création</h2>
                                <p className="text-bold text-center">
                                    Lancez votre campagne de crowdfunding
                                </p>
                                <p className="mb-3 pt-1 text-center">
                                    Rendez-vous dans l’onglet Mes crowdfundings
                                    de votre tableau de bord. Remplissez tous
                                    les champs et personnalisez votre campagne
                                    pour la rendre unique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="py-3">
                        <div
                            className="d-flex align-items-center mx-auto py-3 px-2"
                            style={{ maxWidth: "362px" }}
                        >
                            <div className="ps-2">
                            <div className="text-center mb-2">
                                    <p className="circle">
                                    <span>3</span>
                                    </p>
                                </div>
                                <h2 className="text-center">Partage</h2>
                                <p className="text-bold text-center">Diffusez votre campagne de crowdfunding</p>

                                <p className="mb-3 pt-1 text-center">
                                    Pour atteindre vos objectifs, captez vos
                                    futurs donateurs et Partagez votre campagne
                                    de financement avec votre famille, vos
                                    amis, par email et sur vos réseaux
                                    sociaux.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowIsWork;
