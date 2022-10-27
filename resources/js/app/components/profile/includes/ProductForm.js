import faker from "@faker-js/faker";
import React from "react";
import ButtonAction from "./ButtonAction";
import ProcductTable from "./ProductTable";

const ProductForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        /*setAuthError(false);
        setUnknownError(false);*/

        /*apiClient.post('login',{
            email:email,
            password:password
        }).then((res)=>{
            if(res.status === 200){
                const data ={
                    isAuth: true,
                    type: res.data.type,
                    name: res.data.name,
                    token: res.data.access_token
                }
                console.log(data)
                onUserChange(data);
                setUser(data)
            }
        }).catch((error)=>{

            console.log(error);
            if (error.response && error.response.status === 422) {
                setAuthError(true);
            } else {
                setUnknownError(true);
                console.error(error);
            }
        })*/
    };

    return (
        <>
            <div className="container mt-3 d-flex position-relative">
                <h2 className="mt-2">Projets</h2>
                <button
                    type="button"
                    className="btn btn-afdefis position-absolute end-0 mx-3"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                >
                    Créer
                </button>
            </div>

            

            <div className="card py-2 table-responsive">
                <ProcductTable />
            </div>
        </>
    );
};

export default ProductForm;
