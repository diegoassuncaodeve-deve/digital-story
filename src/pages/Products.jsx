
import '../App.css'
import products from '../data/products'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <main>
      <section className="products">
        <h2>Todos os produtos</h2>

        <div className="product-list">
          {products.map((product) => (
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
  )
}

export default Products
