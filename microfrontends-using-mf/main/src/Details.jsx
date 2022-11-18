
import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


import useProductStore from "common/useProductStore";


export default function Details() {
  
  let { id } = useParams();
  const {productDetailById, productDetails} = useProductStore();


  useEffect(() => {
    (async () => {
        await productDetailById(id)
    })()
}, [])

  console.log('page detail id: ', id)

  return (
    <div className="bg-white">
      
      {JSON.stringify( productDetails )}
    

    </div>
  )
}
