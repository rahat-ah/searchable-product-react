import React from 'react'
import ProductCatagoryRow from './ProductCatagoryRow'
import ProductRow from './ProductRow'

function ProductTable({products , filterText, inStockOnly}) {
    let lastCategory = null;
    const rows = []

    products.forEach((product) => {
        if (filterText && product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
          }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCatagoryRow
                  productCategory={product.category}
                  key={Math.random()} />
              );
        }
        
        rows.push(
            <ProductRow
              product={product}
              key={product.name} />
            
          );
        lastCategory = product.category;  
    });
  return (
    <table className='w-full'>
        <thead>
            <tr className='flex items-center justify-around text-xl capitalize mb-2'>
                <th>name</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        {/* <ProductCatagoryRow />
        <ProductRow /> */}
    </table>
  )
}

export default ProductTable