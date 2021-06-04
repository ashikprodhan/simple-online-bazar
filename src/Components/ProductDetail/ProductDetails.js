import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams} from "react-router-dom";
import { selectedProducts ,removeSelectedProduct} from '../../redux/actions/ProductAction';
const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const {image,title,price ,category ,description} = product;
    let {productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    const fetchPdDetails = async () =>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err);
        })
        dispatch(selectedProducts(res.data));
    }
    useEffect(()=>{
        if(productId && productId !=="") fetchPdDetails();
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    },[productId])
     
    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (

         <div>
           <div class="card mb-3" width="540px">
  <div class="row g-0">
    <div class="col-md-4">
      <img width="150px" src={image} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description} </p>
        <p class="card-text text-primary"> Price <small >${price}</small></p>
        <button className="btn btn-success">Add to cart</button>
   </div>
       
    </div>
  </div>
</div>
         </div>
         
        )}
      </div>
    );
};

export default ProductDetails;