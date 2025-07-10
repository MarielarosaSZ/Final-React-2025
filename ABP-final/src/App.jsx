import { use, useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'


function App() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  
  useEffect(() => {axios.get("https://fakestoreapi.com/products").then(
                  (res)=> {setProducts(res.data)})}, [])


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      
      <h1 className='text-3xl text-blue-600 text-center font-bold' >CATÁLOGO DE PRODUCTOS</h1>
      <input className="border p-2 m-2" type="text" placeholder='Buscar Productos' value={search} 
              onChange={(e) => setSearch(e.target.value)} />
      <h2 className='text-2xl text-blue-600'>{search}</h2>
      
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {filteredProducts.map((p) => (
          <li key={p.id} className="border p-4 m-2 rounded-lg shadow-lg">
             <h2 className="font-bold text-lg mb-2">{p.title}</h2>
             <p className="mb-2">{p.description}</p>
             <p className="font-bold">Price: ${p.price}</p>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
