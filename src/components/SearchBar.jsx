import React from 'react'

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <div className='flex flex-col items-center'>
        <input
          className='w-full border-2 border-black px-2 py-1 rounded-lg mb-3 bg-white' 
          type="text" 
          placeholder='Search...' 
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
         />
        <div className='mb-4'>
            <input 
              type="checkbox" 
              checked={inStockOnly} 
              name="inStock" 
              id="inStock" 
              className='mr-2 cursor-pointer'
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
           />
            <label htmlFor="inStock" className='text-md font-bold'>Only show products in stock</label>
        </div>
    </div>
  )
}

export default SearchBar