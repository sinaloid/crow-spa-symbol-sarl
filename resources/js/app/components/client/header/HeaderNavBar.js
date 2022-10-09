import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import url from "../../../url";
import logo from "../../../assets/img/logo/logo.jpeg";
import { deleteUser } from "../../../context/action";
import { AppContext, initialUser } from "../../../context/context";
import Panier from "./Panier";

const HeaderNavBar = () => {
    const authCtx = useContext(AppContext);
    const { user, onUserChange } = authCtx;

    const deconnect = () => {
        onUserChange(initialUser);
        deleteUser();
    };
    return (
        <div className="row bg-white nav-header border-bottom sticky-top">
            <nav
                className="navbar navbar-expand-lg py-0 border-bottom "
                aria-label="Fourth navbar example"
            >
                <div className="container">
                    <Link className="navbar-brand bg-white" to="#">
                        <img
                            className="logo"
                            src={logo}
                            alt="africadevis logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link
                                    to={url.home}
                                    className="nav-link link link-dark px-2 active"
                                    aria-current="page"
                                >
                                    <span
                                        className="py-1"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse.show"
                                    >
                                        Accueil
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link
                                    to={url.produits}
                                    className="nav-link link link-dark px-2"
                                >
                                    <span
                                        className="py-1"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse.show"
                                    >
                                        Projets
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <a
                                    href="https://market.africadefis.com"
                                    className="nav-link link link-dark px-2"
                                >
                                    <span
                                        className="py-1"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse.show"
                                    >
                                        Market
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to={url.faqs}
                                    className="nav-link dropdown-toggle link link-dark px-2"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    <span
                                        className="py-1"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse.show"
                                    >
                                        FAQs
                                    </span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            to={url.home}
                                            className="nav-link link link-dark px-2"
                                            aria-current="page"
                                        >
                                            <span
                                                className="py-1"
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                            >
                                                Investisseurs
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={url.home}
                                            className="nav-link link link-dark px-2"
                                            aria-current="page"
                                        >
                                            <span
                                                className="py-1"
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                            >
                                                Porteurs de projet
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to={url.apropos}
                                    className="nav-link link link-dark px-2"
                                >
                                    <span
                                        className="py-1"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse.show"
                                    >
                                        A propos
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            {user.isAuth ? (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            to={
                                                url.dashboard +
                                                "/" +
                                                url.dashboard_home
                                            }
                                            className="nav-link link link-dark px-2"
                                        >
                                            <span
                                                className="py-1"
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                            >
                                                Compte
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={url.home}
                                            className="nav-link link link-dark px-2"
                                            onClick={() => deconnect()}
                                        >
                                            <span
                                                className="py-1"
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                            >
                                                Déconnexion
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            to="/inscription"
                                            className="nav-link link link-dark px-2"
                                        >
                                            <span
                                                className="py-1"
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                            >
                                                S'inscrire
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/connexion"
                                            className="nav-link link link-dark px-2"
                                        >
                                            <span
                                                className="py-1"
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                            >
                                                Se connecter
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            )}
                            <li className="nav-item">
                                <Link
                                    to="#"
                                    className="nav-link link link-dark px-2"
                                >
                                    <span
                                        id="ic-panier"
                                        className="hide"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse.show"
                                    >
                                        <Panier classe="" size="" />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderNavBar;