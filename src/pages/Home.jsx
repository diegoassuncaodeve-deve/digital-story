
import '../App.css'
import { useState } from 'react'
import products from '../data/products'
import { Link } from 'react-router-dom'

function Home() {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <header>
        <h1>Digital Store</h1>

        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/produtos">Ver produtos</Link>
      </header>

      <main>
        <section className="banner">
          <div>
            <h2>Queima de estoque!</h2>
            <p>Encontre os melhores tênis com ofertas especiais.</p>
            <Link to="/produtos">Ver ofertas</Link>
          </div>
        </section>

        <section className="products">
          <h2>Produtos em destaque</h2>

          <div className="product-list">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />

                <h3>{product.name}</h3>

                <p className="old-price">
                  R$ {product.price.toFixed(2)}
                </p>

                <p className="new-price">
                  R$ {product.priceDiscount.toFixed(2)}
                </p>

                <Link to={`/produto/${product.id}`}>
                  Ver detalhes
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
