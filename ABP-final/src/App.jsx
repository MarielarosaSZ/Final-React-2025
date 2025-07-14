import React from 'react'
import {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import './index.css'
import Stats from './componentes/Stats.jsx'

function App() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [mostrar, setMostrar] = useState(true)
  const [oscuro, setOscuro] = useState(false) 
  const [pagina, setPagina] = useState(1)

  const containerRef = useRef(null)
  const toggleDarkMode = () => {setOscuro(!oscuro);
          containerRef.current.classList.toggle('modo-oscuro')}
  
  const limite=10
        
  useEffect(() => {axios.get("https://dummyjson.com/products?limit=${limite}&skip{(pag-1)*limite}").then(
                  (res)=> {setProducts(res.data.products)}).catch(err => console.error(err))}, [pagina])
  

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  const totalProducts = filteredProducts.length;
  const precioMax = Math.max(...filteredProducts.map(p => p.price));
  const precioMin = Math.min(...filteredProducts.map(p => p.price));
  const precioProm = (filteredProducts.reduce((sum, p) => sum + p.price, 0) / totalProducts).toFixed(2);
  return (
    <div ref={containerRef}>
      
      <h1 className='text-3xl text-blue-600 text-center font-bold' >CATÁLOGO DE PRODUCTOS</h1>

      <button className="bg-blue-800 text-white p-2 m-2 rounded" onClick={toggleDarkMode}> {oscuro ? "Claro" : "Oscuro"}</button>

      <input className="border p-2 m-2" type="text" placeholder='Buscar Productos' value={search} 
              onChange={(e) => setSearch(e.target.value)} />
      
      <button className="bg-amber-300"  disable={pagina === 1} onClick={()=>{setPagina(pagina-1)}} > Anterior    </button>
      <button className="bg-amber-500"> {pagina} </button>
      <button className="bg-amber-300" disable={filteredProducts.length <= limite} onClick={()=>{setPagina(pagina+1)}} > "     "     Siguiente</button>

      
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {filteredProducts.map((p) => (
          <li key={p.id} className="border p-4 m-2 rounded-lg shadow-lg">
             <h2 className="font-bold text-lg mb-2">{p.title}</h2>
             {/*<p className="mb-2">{p.description}</p>*/}
             <p className="font-bold">Price: ${p.price}</p>
          </li>
        ))}
      </ul>

      {filteredProducts.length === 0 && (
          <h2 className="text-red-500 font-bold">No se encontraron productos</h2>)}

      <button className="bg-blue-500 text-white p-2 m-2 rounded" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar Estadísticas' : 'Mostrar Estadísticas'} </button>

      {mostrar && <Stats  total={totalProducts} max={precioMax} min={precioMin} prom={precioProm} />}
      
       
    </div>
  )
}

export default App
