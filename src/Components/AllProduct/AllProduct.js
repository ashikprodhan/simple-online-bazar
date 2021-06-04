import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions/ProductAction';

import ProductComponent from '../ProductComponent/ProductComponent';

const AllProduct = () => {
      const products = useSelector(state => state.allProducts.products);
      const dispatch = useDispatch();

    //   const fetchProducts = async () => {
    //     const response = await axios
    //       .get("https://fakestoreapi.com/products")
    //       .catch((err) => {
    //         console.log("Err: ", err);
    //       });
    //     dispatch(setProducts(response.data));
    //   };
    
    //   useEffect(() => {
    //     fetchProducts();
    //   }, []);
    
    //   console.log("Products :", products);

  
      useEffect(()=>{
          const url ="https://fakestoreapi.com/products";
            fetch(url)
            .then(res => res.json())
            .then(data => dispatch(setProducts(data)))
      },[])
    // console.log("product",products );
    return (
      <div className="container mb-5 mt-5">
         <div className="row  d-flex justify-content-between ">
            <ProductComponent></ProductComponent>
        </div>
        </div>
    );
};

export default AllProduct;