import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/context";
import { Link, useParams } from "react-router-dom";
import { CKEditor } from "ckeditor4-react";
import apiClient, { SITE_URL, urlImg } from "../../../../services/api";
import url from "../../../../url";

const ProductDetail = () => {
    const cartCtx = useContext(AppContext);
    const { cart, onCartChange } = cartCtx;
    const { id } = useParams();

    const [data, setDatas] = useState([]);
    useEffect(() => {
        apiClient
            .get(`pro/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    setDatas(res.data.response);
                    console.log(res.data.response);
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

    let tabProduit = [];
    let findItem = false;
    const prod = {
        id: data.slug,
        produit: data.libelle,
        prix: data.prix,
        quantite: 1,
    };
    //console.log(cart.content)
    const addProduit = () => {
        tabProduit = cart.content.map((item) => {
            if (data.slug == item.id) {
                item.quantite++;
                findItem = true;
            }
            return item;
        });

        //console.log(tabProduit)
        if (!findItem) {
            onCartChange({
                content: [...cart.content, prod],
                compteur: cart.compteur + 1,
            });
        } else {
            onCartChange({ content: tabProduit, compteur: cart.compteur + 1 });
        }
    };
    return (
        <div className="container-fluid px-0 mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="row p-2 pb-3">
                            <div className="col-12">
                                <h1 className="text-center">{data.libelle}</h1>
                                <p className="text-center mt-1">
                                    {data.slogan}
                                </p>
                            </div>
                            <div className="col-12 col-lg-8">
                                <iframe
                                    width="420"
                                    height="315"
                                    className="w-100"
                                    src={data.url_video !="" ? data.url_video : "https://www.youtube.com/embed/tgbNymZ7vqY"}
                                ></iframe>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="product">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-afdefis">
                                                Suivre
                                                <i
                                                    className="fa fa-heart fa-xl mx-1"
                                                    style={{ color: "#fff" }}
                                                ></i>
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-afdefis"
                                            data-bs-toggle="modal"
                                            data-bs-target="#myModal"
                                        >
                                            Partager
                                            <i
                                                className="fa fa-share-alt fa-xl mx-1"
                                                style={{ color: "#fff" }}
                                            ></i>
                                        </button>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between my-2 align-items-center"
                                        style={{ lineHeight: "140%" }}
                                    >
                                        <div className="d-flex align-items-center">
                                            {data.contribution}
                                            <br /> contributions
                                        </div>
                                        {data.jour_restant + " "} <br />
                                        jours restants
                                    </div>
                                    <hr />
                                    <small className="dis-price text-bold">
                                        {Intl.NumberFormat().format(
                                            data.montant_recolte
                                        ) + " "}
                                        FCFA
                                    </small>
                                    <div className="progress rounded-0">
                                        <div
                                            className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                            style={{
                                                width:
                                                    (data.montant_recolte *
                                                        100) /
                                                        data.montant_attendu +
                                                    "%",
                                            }}
                                        >
                                            {(data.montant_recolte * 100) /
                                                data.montant_attendu}
                                        </div>
                                    </div>
                                    <small className="dis-price">
                                        {(data.montant_recolte * 100) /
                                            data.montant_attendu +
                                            "% de "}
                                    </small>
                                    <small className="text-bold">
                                        {Intl.NumberFormat().format(
                                            data.montant_attendu
                                        ) + " "}
                                        FCFA
                                    </small>

                                    <div className="cart mt-4 align-items-center">
                                        <Link
                                            className="btn btn-afdefis-secondary  text-uppercase mr-2 mb-4 px-4 w-100"
                                            to={url.contreparties}
                                        >
                                            Investir
                                        </Link>
                                        <br />
                                        <i className="fa fa-long-arrow-left"></i>
                                        <Link
                                            to={url.home}
                                            className="mx-1 link"
                                            style={{
                                                textDecoration: "none",
                                            }}
                                        >
                                            Retour
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex">
                                
                                <div className="d-inline-block">
                                    <div>
                                        <div className="d-inline-block mx-1">
                                            <i class="fa-solid fa-location-dot"></i>{" "}
                                            Bobo Dioulasso
                                        </div>{" "}
                                        <div className="d-inline-block mx-1">
                                            <i class="fa-sharp fa-solid fa-clipboard-list"></i>{" "}
                                            {" " + data.categorie}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div class="modal fade" id="myModal">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">
                                                    Partager le projet sur les
                                                    réseaux sociaux
                                                </h4>
                                                <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                ></button>
                                            </div>

                                            <div class="modal-body">
                                                <span className="d-inline-block me-3 my-1">
                                                    <i
                                                        class="fa-brands fa-facebook fa-3x"
                                                        title="Partager sur Facebook"
                                                        type="button"
                                                        style={{
                                                            color: "#4267B2",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (
                                                                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                                                    navigator.userAgent
                                                                )
                                                            ) {
                                                                window.open(
                                                                    "fb-messenger://share/?" +
                                                                        SITE_URL +
                                                                        "projet" +
                                                                        "slug",
                                                                    "facebook-share-dialog",
                                                                    "width=800,height=600"
                                                                );
                                                            } else {
                                                                window.open(
                                                                    "https://www.facebook.com/sharer/sharer.php?u=" +
                                                                        SITE_URL +
                                                                        "projet" +
                                                                        "slug",
                                                                    "facebook-share-dialog",
                                                                    "width=800,height=600"
                                                                );
                                                            }
                                                        }}
                                                    ></i>
                                                </span>
                                                {"   "}
                                                <span className="d-inline-block me-3 my-1">
                                                    <i
                                                        class="fa-brands fa-telegram fa-3x"
                                                        title="Partager sur Telegram"
                                                        type="button"
                                                        style={{
                                                            color: "#00B2FF",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(
                                                                "https://t.me/share/url?url=" +
                                                                    encodeURIComponent(
                                                                        SITE_URL +
                                                                            "/projet/" +
                                                                            "slug"
                                                                    ) +
                                                                    "&text=" +
                                                                    encodeURIComponent(
                                                                        document.title
                                                                    ),
                                                                "",
                                                                "width=800,height=600"
                                                            );
                                                        }}
                                                    ></i>
                                                </span>
                                                {"   "}
                                                <span className="d-inline-block me-3 my-1">
                                                    <i
                                                        class="fa-brands fa-twitter fa-3x"
                                                        title="Partager sur Twitter"
                                                        type="button"
                                                        style={{
                                                            color: "#1DA1F2",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(
                                                                "https://twitter.com/intent/tweet?url=" +
                                                                    SITE_URL,
                                                                "" +
                                                                    document.title,
                                                                "width=800,height=600"
                                                            );
                                                        }}
                                                    ></i>
                                                </span>
                                                {"   "}
                                                <span className="d-inline-block me-3 my-1">
                                                    <i
                                                        class="fa-brands fa-linkedin fa-3x"
                                                        title="Partager sur Linkedin"
                                                        type="button"
                                                        style={{
                                                            color: "#0A66C2",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(
                                                                "https://www.linkedin.com/shareArticle?mini=true&summary=africadefis&title=Projet Crowfunding&url=" +
                                                                    encodeURIComponent(
                                                                        SITE_URL +
                                                                            "/projet/" +
                                                                            "slug"
                                                                    ),
                                                                "name",
                                                                "width=800,height=600"
                                                            );
                                                        }}
                                                    ></i>
                                                </span>
                                                {"   "}
                                                <span className="d-inline-block me-3 my-1">
                                                    <i
                                                        class="fa-brands fa-whatsapp fa-3x"
                                                        title="Partager sur Whatsapp"
                                                        type="button"
                                                        style={{
                                                            color: "#25D366",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (
                                                                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                                                    navigator.userAgent
                                                                )
                                                            ) {
                                                                window.open(
                                                                    "whatsapp://send?text=" +
                                                                        encodeURIComponent(
                                                                            SITE_URL +
                                                                                "/projet/" +
                                                                                "slug"
                                                                        ),
                                                                    "name",
                                                                    "width=800,height=600"
                                                                );
                                                            } else {
                                                                window.open(
                                                                    "https://web.whatsapp.com/send?text=" +
                                                                        encodeURIComponent(
                                                                            SITE_URL +
                                                                                "/projet/" +
                                                                                "slug"
                                                                        ),
                                                                    "name",
                                                                    "width=800,height=600"
                                                                );
                                                            }
                                                        }}
                                                    ></i>
                                                </span>
                                                {"   "}
                                                <span className="d-inline-block me-3 my-1">
                                                    <i
                                                        class="fa-solid fa-envelope fa-3x"
                                                        title="Partager par Email"
                                                        type="button"
                                                        style={{
                                                            color: "#4267B2",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(
                                                                "mailto:?subject=Projet Crowfunding&body=" +
                                                                    SITE_URL +
                                                                    "/projet/" +
                                                                    "slug"
                                                            );
                                                        }}
                                                    ></i>
                                                </span>
                                                {"   "}
                                                <span className="d-inline-block me-3 my-1">
                                                    <i
                                                        class="fa-solid fa-link fa-3x"
                                                        title="Copier le lien"
                                                        type="button"
                                                        data-bs-dismiss="modal"
                                                        style={{
                                                            color: "#4267B2",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            navigator.clipboard.writeText(
                                                                SITE_URL +
                                                                    "/projet/slug"
                                                            );
                                                        }}
                                                    ></i>
                                                </span>
                                            </div>
                                            <div class="modal-footer">
                                                <button
                                                    type="button"
                                                    class="btn btn-afdefis"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Fermer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card1 my-4">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a
                                    className="nav-link active link link-dark"
                                    data-bs-toggle="tab"
                                    href="#projet"
                                >
                                    <span>Projet</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link link link-dark"
                                    data-bs-toggle="tab"
                                    href="#contreparties"
                                >
                                    <span>Contreparties</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link link link-dark"
                                    data-bs-toggle="tab"
                                    href="#faqs"
                                >
                                    <span>FAQs</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link link link-dark"
                                    data-bs-toggle="tab"
                                    href="#infos"
                                >
                                    <span>Actualités</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link link link-dark"
                                    data-bs-toggle="tab"
                                    href="#commentaires"
                                >
                                    <span>Commentaires</span>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content py-4">
                            <div
                                className="tab-pane container active"
                                id="projet"
                            >
                                {/*<h2 className="text-center my-5">Nom du projet</h2>*/}
                                <ul>
                                    <li>
                                        <span
                                            className="text-bold"
                                            style={{ fontSize: "1rem" }}
                                        >
                                            À propos
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit.
                                        </p>
                                    </li>
                                    <li>
                                        <span
                                            className="text-bold"
                                            style={{ fontSize: "1rem" }}
                                        >
                                            Comment le financement sera-t-il
                                            utilisé?
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="tab-pane container fade"
                                id="contreparties"
                            >
                                <h2 className="title-2">
                                    Choisissez une contrepartie
                                </h2>
                                <p>
                                    Investissez dans le projet et recevez des
                                    contreparties en échange.
                                </p>
                                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
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
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Adipisci quaerat
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
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Adipisci quaerat
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
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Adipisci quaerat
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
                            <div className="tab-pane container fade" id="faqs">
                                faqs
                            </div>
                            <div className="tab-pane container fade" id="infos">
                                <div className="row">
                                    <div className="col-12 col-md-8">
                                        <div className="col-12 my-2">
                                            <div className="card p-3">
                                                <p>8/10/2022</p>
                                                <img
                                                    className=""
                                                    src="https://source.unsplash.com/random/800x600/?product=1"
                                                    alt=""
                                                />
                                                <p className="text-justify px-2">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Adipisci quaerat
                                                    architecto illo quis,
                                                    eveniet atque officia
                                                    blanditiis ipsa rerum,
                                                    accusantium quam voluptatum
                                                    cumque placeat odio velit
                                                    labore! Accusamus, itaque
                                                    impedit. Lorem ipsum dolor
                                                    sit amet consectetur
                                                    adipisicing elit.
                                                </p>
                                                <img
                                                    className=""
                                                    src="https://source.unsplash.com/random/800x600/?product=2"
                                                    alt=""
                                                />
                                                <p className="text-justify px-2">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Adipisci quaerat
                                                    architecto illo quis,
                                                    eveniet atque officia
                                                    blanditiis ipsa rerum,
                                                    accusantium quam voluptatum
                                                    cumque placeat odio velit
                                                    labore! Accusamus, itaque
                                                    impedit. Lorem ipsum dolor
                                                    sit amet consectetur
                                                    adipisicing elit.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 my-2">
                                            <div className="card p-3">
                                                <p className="text-justify px-2">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Adipisci quaerat
                                                    architecto illo quis,
                                                    eveniet atque officia
                                                    blanditiis ipsa rerum,
                                                    accusantium quam voluptatum
                                                    cumque placeat odio velit
                                                    labore! Accusamus, itaque
                                                    impedit. Lorem ipsum dolor
                                                    sit amet consectetur
                                                    adipisicing elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane container fade"
                                id="commentaires"
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <p>
                                            <Link
                                                to="/connexion"
                                                className="link-click text-bold"
                                            >
                                                Connectez vous
                                            </Link>{" "}
                                            ou{" "}
                                            <Link
                                                to="/inscription"
                                                className="link-click text-bold"
                                            >
                                                inscrivez vous{" "}
                                            </Link>
                                            pour pouvoir faire des commentaires.
                                        </p>
                                        <div className="card my-2">
                                            <div className="row">
                                                <div className="col-4 col-md-2 text-center pt-2">
                                                    <img
                                                        className="circle"
                                                        src="https://source.unsplash.com/random/800x600/?product=1"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="col-8 col-md-10 px-2">
                                                    <p>
                                                        <span
                                                            className="text-bold"
                                                            style={{
                                                                fontSize:
                                                                    "1rem",
                                                            }}
                                                        >
                                                            Ouedraogo Salif
                                                        </span>{" "}
                                                        <br />
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit.
                                                        Adipisci quaerat
                                                        architecto illo quis,
                                                        eveniet atque officia
                                                        blanditiis ipsa rerum,
                                                        accusantium quam
                                                        voluptatum cumque
                                                        placeat odio velit
                                                        labore! Accusamus
                                                    </p>
                                                    <div>
                                                        <span>
                                                            <i className="fa-regular fa-clock"></i>{" "}
                                                            1h{"  "}
                                                        </span>
                                                        {"  "}|
                                                        <span>
                                                            {"  "}
                                                            <i className="fa-sharp fa-regular fa-comment"></i>{" "}
                                                            Repondre{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card my-2">
                                            <div className="row">
                                                <div className="col-4 col-md-2  text-center pt-2">
                                                    <img
                                                        className="circle"
                                                        src="https://source.unsplash.com/random/800x600/?product=1"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="col-8 col-md-10 px-2">
                                                    <p>
                                                        <span
                                                            className="text-bold"
                                                            style={{
                                                                fontSize:
                                                                    "1rem",
                                                            }}
                                                        >
                                                            Traore Ali
                                                        </span>{" "}
                                                        <br />
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit.
                                                        Adipisci quaerat
                                                        architecto illo quis,
                                                        eveniet atque officia
                                                        blanditiis ipsa rerum,
                                                        accusantium quam
                                                        voluptatum cumque
                                                        placeat odio velit
                                                        labore! Accusamus
                                                    </p>
                                                    <div>
                                                        <span>
                                                            <i className="fa-regular fa-clock"></i>{" "}
                                                            1h{" "}
                                                        </span>{" "}
                                                        |
                                                        <span>
                                                            {" "}
                                                            <i className="fa-sharp fa-regular fa-comment"></i>{" "}
                                                            Repondre{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <hr />
                                        <CKEditor
                                            initData="<p>Entrez votre commentaire !</p>"
                                            onInstanceReady={() => {
                                                /*alert("Editor is ready!");*/
                                            }}
                                        />
                                        <div className="my-2 d-flex justify-content-center">
                                            <button className="btn btn-sm btn-afdefis">
                                                Commenter
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
