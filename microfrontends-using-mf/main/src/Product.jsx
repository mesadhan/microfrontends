import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import useProductStore from 'common/useProductStore';
import useCartStore from 'common/useCartStore';

export default function Product() {

    const { cart, toggleCartPanel, addToCartIfNotInCart, setCartPanelVisibility } = useCartStore();
    const { products, getFilteredList } = useProductStore();
  
   
    return (

        <>
            <div className="mt-4">

                <div className="flex-container">

                    {products?.length ? products?.map((product, index) => (

                        <div key={product.idDrink} data-test="productComponent" className="productComponent" style={{ display: 'flex' }}>


                            <div className="flex-item card-border" >
                                <Link to={{ pathname: `/${product.idDrink}`, state: product.idDrink }} className="">
                                    <img width={310} height={300} src={product.strDrinkThumb} className="" alt={product.strDrink} />
                                </Link>
                                <div style={{ padding: '5px' }}>

                                    <button onClick={e => addToCartIfNotInCart(product)} style={{ float: "right", margin: '5px' }} className="btn btn-primary btn-sm">Add To Cart</button>
                                    <div style={{ color: "#EA2D27" }} className="" >{product.strDrink}</div>
                                    <div className="" >{product.idDrink}</div>

                                    <Link to={{ pathname: `/${product.idDrink}`, state: product.idDrink }} className="">Details</Link>
                                    
                                </div>
                            </div>

                        </div>

                    )) : <p>No Data Found</p>
                    }
                </div>

            </div>

        </>


    )
}