import React,{useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../context/context";
import { urlImg } from "../../../../services/api";
import url from "../../../../url";

const ProductCard = ({ data, idx }) => {
  const cartCtx = useContext(AppContext);
  const { cart, onCartChange } = cartCtx;
  let tabProduit = []
  let findItem = false
  const prod = {
    id: data.slug,
    produit: data.libelle,
    prix: data.prix,
    quantite: 1
  }
  //console.log(cart.content)
  const addProduit = () => {

    tabProduit = cart.content.map((item) => {
      if(data.slug == item.id){
        item.quantite++
        findItem = true
      }
      return item
    })

    //console.log(tabProduit)
    if(!findItem){
      onCartChange({content:[...cart.content,prod],compteur: cart.compteur + 1})
    }else{
      onCartChange({content:tabProduit, compteur: cart.compteur + 1})
    }
  } 

  return (
    <div key={idx} className="col" style={{'lineHeight':'125%'}}>
      <div className="card shadow-sm">
        
        <div className="card-body">
          <Link to="" className="text-muted categorie-name">
            {data.categorie}
          </Link>
          <h3 className="text-primary">
            <Link to="" className="produit-name">
            {data.libelle}
            </Link>
          </h3>
          <img
          className=""
          width={"100%"}
          src={urlImg+""+data.image}
          //src={data.image}
          alt={data.image}
          loading="lazy"
        />
        <div className="d-flex justify-content-between" style={{fontSize:"0.75rem"}}>
            <div className="product-price py-2 text-primary">
            {data.commentaire + " "} Commentaires
              {/*<span className="text-accent text-bold">
                <small></small>
              </span>*/}
            </div>
            <div className="star-rating py-2">
              {data.contribution + " "} contributions
            </div>
          </div>
          <p>
            {data.description}
          </p>
          <div className="d-flex justify-content-between">
            <div className="product-price py-2">
              <span className="text-accent text-bold">
                <small>{Intl.NumberFormat().format(data.montant_recolte) + " "}FCFA</small> 
              </span><br />
              <span className="text-accent">
                <small>{Intl.NumberFormat().format(data.montant_attendu) + " "}FCFA</small>
              </span>
            </div>
            <div className="star-rating py-2">
              {data.jour_restant + " "} jours <br />
              restant
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center ">
              <Link data = {data} to={{
                pathname:`/projet/${data.slug}`,
                state: data
                }} className="btn btn-sm btn-afdefis">
                  Investir
              </Link>
              {/*<button type="button" className="btn btn-sm btn-afdefis star-rating" onClick={()=>{addProduit()}}>
                Investir
              </button>*/}
          </div>
          <div className="progress rounded-0 mt-3">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{'width':data.montant_recolte*100/data.montant_attendu+'%'}}>{""+data.montant_recolte*100/data.montant_attendu}%</div>
        </div>
        </div>
        
      </div>
       
    </div>
  );
};

export default ProductCard;
