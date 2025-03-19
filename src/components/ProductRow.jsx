import React from 'react'

function ProductRow({product}) {
    const name = product.stocked ? product.name : 
    <span className='text-red-500'>
        {product.name}
    </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow