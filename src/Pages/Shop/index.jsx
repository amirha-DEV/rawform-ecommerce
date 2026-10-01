import React from 'react'
import ShopHeader from './ShopHeader'
import FilterBar from './FilterBar'
import ProductGrid from './ProductGrid'

export default function Shop() {
  return (
    <div>
      <ShopHeader/>
      <FilterBar/>
      <ProductGrid/>
    </div>
  )
}
