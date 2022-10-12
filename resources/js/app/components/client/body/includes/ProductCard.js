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
            {/*data.categorie*/ "Nom de la catégorie"}
          </Link>
          <h3 className="text-primary">
            <Link to="" className="produit-name">
            {/*data.libelle*/"Nom du projet"}
            </Link>
          </h3>
          <img
          className=""
          width={"100%"}
          //src={urlImg+""+data.image}
          src={`https://source.unsplash.com/random/800x600/?product=${data}`}
          alt={data.image}
          loading="lazy"
        />
        <div className="d-flex justify-content-between">
            <div className="product-price py-2 text-primary">
            106 Questions
              {/*<span className="text-accent text-bold">
                <small></small>
              </span>*/}
            </div>
            <div className="star-rating py-2">
              25 contributions
            </div>
          </div>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            There is no one who...
          </p>
          <div className="d-flex justify-content-between">
            <div className="product-price py-2">
              <span className="text-accent text-bold">
                <small>{/*Intl.NumberFormat().format(data.prix)+*/" 5 000 000 "}FCFA</small> 
              </span><br />
              <span className="text-accent">
                <small>{/*Intl.NumberFormat().format(data.prix)+*/ " Sur 8 000 000 "}FCFA</small>
              </span>
            </div>
            <div className="star-rating py-2">
              15 jours <br />
              restant
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center ">
              <Link data = {data} to={{
                pathname:`/produit/${data.slug}`,
                state: data
                }} className="btn btn-sm btn-afdefis">
                  Investir
              </Link>
              {/*<button type="button" className="btn btn-sm btn-afdefis star-rating" onClick={()=>{addProduit()}}>
                Investir
              </button>*/}
          </div>
          <div className="progress rounded-0 mt-3">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{'width':'70%'}}>70%</div>
        </div>
        </div>
        
      </div>
       
    </div>
  );
};

export default ProductCard;
