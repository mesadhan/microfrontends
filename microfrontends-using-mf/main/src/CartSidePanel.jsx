import React, { useEffect } from "react";
import { Fragment, useState } from 'react'
import useCartStore from "common/useCartStore";
import { Link } from "react-router-dom";

export default function CartSidePanel() {

  const { cart, isShowCartPanel, toggleCartPanel, removeFromCart } = useCartStore();


  return (
    <div >
      {isShowCartPanel && (
        <div className="cart-panel p-3">
          
          <div className="cart-panel-header">
            <div className="row">
              <div className="col-10">
                <h4>Cart Size - {cart.length}</h4>
              </div>
              <div className="col-2">
                <button onClick={toggleCartPanel} className="btn btn-danger btn-sm" type="button">Close</button>
              </div>
            </div>
          </div>

          <div className="cart-panel-body mt-2">
            {cart.length > 0 ? (

              cart.map((product, index) => (
                <div key={index} className="card-box p-2 mb-2">
              
                  <div className="row border-1">
                    <div className="col-3">
                        <img src={product.strDrinkThumb} alt="product" className="img-fluid" />
                    </div>
                    <div className="col-7">
                      <p>{product.strDrink}</p>
                      <span>Quantity: {product.quantity} | ID: {product.idDrink}</span>
                    </div>
                    <div className="col-2">
                      <button onClick={() => removeFromCart(product.idDrink)} className="btn btn-outline-danger btn-sm" type="button">X</button>
                    </div>
                  </div>


                </div>
              ))
            ) : (
              <div className="cart-item mt-5">
                <h4>Cart is empty</h4>
              </div>
            )}
          </div>

           <button
            type="button" onClick={() => toggleCartPanel(false)}
            className="btn btn-warning btn-block w-100">
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      )}
    </div>
  )

}