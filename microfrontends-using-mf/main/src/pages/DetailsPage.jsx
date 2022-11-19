
import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


import useProductStore from "common/useProductStore";


export default function DetailsPage() {

  let { id } = useParams();
  const { productDetailById, productDetails } = useProductStore();


  useEffect(() => {
    (async () => {
      await productDetailById(id)
    })()
  }, [])

  console.log('page detail id: ', id)

  return (
    <div className="bg-white container-fluid p-5" style={{ 'margin-top': '20px' }}>

      {productDetails && (productDetails.map((product, index) => (
        <div className="row" key={index}>
          <div className="col">
            <img src={product.strDrinkThumb} alt="product" className="img-fluid img-thumbnail" />
          </div>



          <div className="col">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">idDrink</span> {product.idDrink} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strDrink</span> {product.strDrink} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strDrinkAlternate</span> {product.strDrinkAlternate} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strTags</span> {product.strTags} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strVideo</span> {product.strVideo} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strCategory</span> {product.strCategory} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIBA</span> {product.strIBA} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strAlcoholic</span> {product.strAlcoholic} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strGlass</span> {product.strGlass} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strInstructions</span> {product.strInstructions} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strInstructionsES</span> {product.strInstructionsES} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strInstructionsDE</span> {product.strInstructionsDE} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strInstructionsFR</span> {product.strInstructionsFR} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strInstructionsIT</span> {product.strInstructionsIT} </li>

              {/* <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strInstructionsZH-HANS</span> {product.strInstructionsZH-HANS} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strInstructionsZH-HANT</span> {product.strInstructionsZH-HANT} </li> */}

              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strDrinkThumb</span> {product.strDrinkThumb} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient1</span> {product.strIngredient1} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient2</span> {product.strIngredient2} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient3</span> {product.strIngredient3} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient4</span> {product.strIngredient4} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient5</span> {product.strIngredient5} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient6</span> {product.strIngredient6} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient7</span> {product.strIngredient7} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient8</span> {product.strIngredient8} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient9</span> {product.strIngredient9} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient10</span> {product.strIngredient10} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient11</span> {product.strIngredient11} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient12</span> {product.strIngredient12} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient13</span> {product.strIngredient13} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient14</span> {product.strIngredient14} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strIngredient15</span> {product.strIngredient15} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure1</span> {product.strMeasure1} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure2</span> {product.strMeasure2} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure3</span> {product.strMeasure3} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure4</span> {product.strMeasure4} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure5</span> {product.strMeasure5} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure6</span> {product.strMeasure6} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure7</span> {product.strMeasure7} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure8</span> {product.strMeasure8} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure9</span> {product.strMeasure9} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure10</span> {product.strMeasure10} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure11</span> {product.strMeasure11} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure12</span> {product.strMeasure12} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strMeasure13</span> {product.strMeasure13} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strDrink14</span> {product.strDrink14} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strDrink15</span> {product.strDrink15} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strImageSource</span> {product.strImageSource} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strImageAttribution</span> {product.strImageAttribution} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">strCreativeCommonsConfirmed</span> {product.strCreativeCommonsConfirmed} </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"> <span className="badge bg-primary rounded-pill">dateModified</span> {product.dateModified} </li>
            </ul>
          </div>






        </div>


      )))}


    </div>
  )
}
