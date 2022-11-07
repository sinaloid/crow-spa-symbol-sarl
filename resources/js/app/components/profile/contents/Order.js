import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/context";
import apiClient from "../../../services/api";
import { BarChart } from "../charts/BarChart";
import { PieChart } from "../charts/PieChart";
import CardInfo from "../includes/CardInfo";
import OrderTable from "../includes/OrderTable";

const Order = () => {
    const authCtx = useContext(AppContext);
    const { user, onUserChange } = authCtx;
    const [data, setData] = useState([]);
    useEffect(() => {
        apiClient
            .get('compteur',{
              headers: { Authorization: `Bearer ${user.token}` },
          })
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data.response);
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

    const autorisation = (view) => {
        if (user.type == 2) {
            return view;
        }
    };
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Investissements</h1>
                
            </div>

            <div className="container mt-4 d-flex position-relative p-0">
                <h2 className="mt-2">Liste</h2>
                <button
                    type="button"
                    className="btn btn-afdefis position-absolute end-0 mx-3"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                >
                    Créer
                </button>
            </div>

            <div className="card shadow-sm table-responsive">
                <OrderTable />
            </div>
        </>
    );
};

export default Order;
