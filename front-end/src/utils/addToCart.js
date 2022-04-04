import React from 'react'
import productApi from '../api/productApi'

const addToCart = async (productId) => {
  try {
    await productApi.addToCart(productId)
  } catch (error) { console.log(error)}
}

export default addToCart