import { CKEditor } from "ckeditor4-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";
import ReactToastify, { notify } from "../../../ReactToastify";
import apiClient, { urlImg } from "../../../services/api";
import url from "../../../url";
import ButtonAction from "./ButtonAction";

const ProjetConfig = () => {
    const authCtx = useContext(AppContext);
    const { user, onUserChange } = authCtx;
    const [libelle, setLibelle] = useState([]);
    const [slogan, setSlogan] = useState([]);
    const [image, setImage] = useState([]);
    const [deleteImg, setDeleteImg] = useState("");
    const [listCategorie, setListCategorie] = useState([]);
    const [montantAttendu, setMontantAttendu] = useState("");
    const [url_video, setUrlVideo] = useState("");
    const [date_debut, setDateDebut] = useState("");
    const [date_fin, setDateFin] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");
    const [editeSlug, setEditeSlug] = useState([]);
    const [refresh, setRefresh] = useState([]);

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        apiClient
            .get("projetAndCategorie", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((res) => {
                if (res.status === 200) {
                    setDatas(res.data.product);
                    setListCategorie(res.data.categorie);
                    //console.log(datas)
                } else {
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 422) {
                    notify("error", error.response.data.message);
                } else {
                    notify("error", error.response.data.message);
                }
            });
    }, [refresh]);
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("libelle", libelle);
        data.append("slogan", slogan);
        data.append("montant_attendu", montantAttendu);
        data.append("url_video", url_video);
        data.append("date_debut", date_debut);
        data.append("date_fin", date_fin);
        data.append("description", description);
        data.append("categorie_id", categorie);
        for (let i = 0; i < image.length; i++) {
            data.append("images[]", image[i]);
        }
        //console.log(data)
        apiClient
            .post("projet", data, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((res) => {
                if (res.data.status === 200) {
                    notify("success", res.data.response);
                    setRefresh(refresh + 1);
                    setLibelle([]);
                    setSlogan([]);
                    setImage([]);
                    setCategorie([]);
                    setDescription([]);
                    setMontantAttendu("");
                    setUrlVideo("");
                    setDateDebut("");
                    setDateFin("");
                } else {
                    notify("error", res.data.response);
                    setRefresh(refresh + 1);
                }
            })
            .catch((error) => {
                notify("error", error.response.data.message);
                setRefresh(refresh + 1);
            });
    };
    const handleSubmitEdite = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("libelle", libelle);
        data.append("slogan", slogan);
        data.append("montant_attendu", montantAttendu);
        data.append("url_video", url_video);
        data.append("date_debut", date_debut);
        data.append("date_fin", date_fin);
        data.append("description", description);
        data.append("categorie_id", categorie);
        for (let i = 0; i < image.length; i++) {
            //console.log(image[i])
            data.append("images[]", image[i]);
        }
        data.append("_method", "PATCH");
        console.log(data);
        apiClient
            .post(`product/${editeSlug}`, data, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((res) => {
                if (res.data.status === 200) {
                    notify("success", res.data.response);
                    setRefresh(refresh + 1);
                    setLibelle([]);
                    setSlogan([]);
                    setImage([]);
                    setCategorie([]);
                    setDescription([]);
                    setMontantAttendu("");
                    setUrlVideo("");
                    setDateDebut("");
                    setDateFin("");
                } else {
                    notify("error", res.data.response);
                    setRefresh(refresh + 1);
                }
            })
            .catch((error) => {
                notify("error", error.response.data.message);
            });
    };

    const setDataEdite = (data) => {
        //console.log(data);
        setLibelle(data.libelle);
        setSlogan(data.slogan);
        setMontantAttendu(data.montant_attendu);
        setUrlVideo(data.url_video);
        setDateDebut(data.date_debut);
        setDateFin(data.date_fin);
        setImage(data.image);
        setCategorie(data.categorie_slug);
        setDescription(data.description);
        setEditeSlug(data.slug);
    };
    const onDelete = (slug) => {
        apiClient
            .delete(`projet/${slug}`, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((res) => {
                if (res.data.status === 200) {
                    notify("success", res.data.response);
                    setRefresh(refresh + 1);
                } else {
                    notify("error", res.data.response);
                    setRefresh(refresh + 1);
                }
            })
            .catch((error) => {
                notify("error", error.response.data.message);
            });
    };

    const onDeleteImg = () => {
        apiClient
            .delete(`image/detele/${deleteImg}`, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((res) => {
                if (res.data.status === 200) {
                    notify("success", res.data.response);
                    setRefresh(refresh + 1);
                } else {
                    notify("error", res.data.response);
                    setRefresh(refresh + 1);
                }
            })
            .catch((error) => {
                notify("error", error.response.data.message);
            });
    };
    const handleChange = (e) => {
        const imagesArray = [];
        let isValid = "";

        for (let i = 0; i < e.target.files.length; i++) {
            imagesArray.push(e.target.files[i]);
        }
        setImage(imagesArray);
    };
    return (
        <>
            <ReactToastify />
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
                    <div className="tab-pane container active" id="projet">
                        {/*<h2 className="text-center my-5">Nom du projet</h2>*/}
                        <div className="col-12 mt-4">
                            <h2>À propos</h2>
                            <hr />
                            <CKEditor
                                initData="<p>Entrez votre commentaire !</p>"
                                onInstanceReady={() => {
                                    /*alert("Editor is ready!");*/
                                }}
                            />
                            <div className="my-2 d-flex justify-content-center">
                                <button className="btn btn-sm btn-afdefis">
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <h2>Comment le financement sera-t-il utilisé?</h2>
                            <hr />
                            <CKEditor
                                initData="<p>Entrez votre commentaire !</p>"
                                onInstanceReady={() => {
                                    /*alert("Editor is ready!");*/
                                }}
                            />
                            <div className="my-2 d-flex justify-content-center">
                                <button className="btn btn-sm btn-afdefis">
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="contreparties">
                        <button className="btn btn-sm btn-afdefis">
                            Créer une contrepartie
                        </button>
                        <h2 className="title-2">Choisissez une contrepartie</h2>
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
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis
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
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis
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
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis
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
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </p>
                                        <img
                                            className=""
                                            src="https://source.unsplash.com/random/800x600/?product=2"
                                            alt=""
                                        />
                                        <p className="text-justify px-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 my-2">
                                    <div className="card p-3">
                                        <p className="text-justify px-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Adipisci quaerat architecto illo
                                            quis, eveniet atque officia
                                            blanditiis ipsa rerum, accusantium
                                            quam voluptatum cumque placeat odio
                                            velit labore! Accusamus, itaque
                                            impedit. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="commentaires">
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
                                                        fontSize: "1rem",
                                                    }}
                                                >
                                                    Ouedraogo Salif
                                                </span>{" "}
                                                <br />
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Adipisci quaerat architecto illo
                                                quis, eveniet atque officia
                                                blanditiis ipsa rerum,
                                                accusantium quam voluptatum
                                                cumque placeat odio velit
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
                                                        fontSize: "1rem",
                                                    }}
                                                >
                                                    Traore Ali
                                                </span>{" "}
                                                <br />
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Adipisci quaerat architecto illo
                                                quis, eveniet atque officia
                                                blanditiis ipsa rerum,
                                                accusantium quam voluptatum
                                                cumque placeat odio velit
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
        </>
    );
};

export default ProjetConfig;
