import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './ProductComponent.css'

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => { 
        const { id, title, price, image, category } = product;

        return (
            <Link className="col-md-4"   to={`/product/${id}`} key={product.id} style={{ textDecoration: 'none',color:"black" }} ><div >
            <div className="card mt-3 cardsize">
                <div className="align-items-center p-1 text-center">
                    <img src={image} className=" " width="100px" height="100px" alt="" />
                    <div className="info"> <p className="fw-bolder " >{title}</p>
                            <p className="lineHeight">{category}</p>
                                 <p className="lineHeight">Price $ {price} </p>
                         <button className="btn btn-sm btn-primary" >Buy Now</button>
                    </div>

                </div>
            </div>
           
        </div>
        </Link>

           
        )
    })

    return (
        <>{renderList}</>
    );
};

export default ProductComponent;