import { useState } from 'react'
import './App.css'
import ProductTable from './components/ProductTable'
import SearchBar from './components/SearchBar'

function App() {
  const [searchText, setSearchText] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)
  
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]



  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='bg-gray-100 p-4 rounded-xl'>
      <h1 className='mb-4 text-2xl capitalize bg-orange-500 p-3 text-white font-bold rounded'>Searchable products</h1>
        <SearchBar 
          filterText={searchText} 
          inStockOnly={inStockOnly}
          onFilterTextChange={setSearchText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable 
          products={products}
          filterText={searchText} 
          inStockOnly={inStockOnly}
        />
      </div>
    </div>
  )
}

export default App
