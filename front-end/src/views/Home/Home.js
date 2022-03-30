import React from 'react'
import News from './components/News'
import Collect from './components/Collect'
import Product from './components/Product'
import TopProduct from './components/TopProduct'
import Banner from './components/Banner'
import '../../styles/home.scss';
import withLayout from '../../hoc/withLayout'
import { useFetchProducts, useProducts } from '../../store/product/hook'
export default function Home() {
  //useFetchProducts()
  //const products = useProducts() 
  //console.log(products)
  return (
    <div className="w-screen overflow-hidden relative">
      <Banner />
      <Collect />
      <Product />
      <TopProduct />
      <News />
    </div>
  )
}
