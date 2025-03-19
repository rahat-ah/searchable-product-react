import React from 'react'

function ProductCatagoryRow({productCategory}) {
  return (
    <tr>
        <td className='text-center'>{productCategory}</td>
    </tr>
  )
}

export default ProductCatagoryRow