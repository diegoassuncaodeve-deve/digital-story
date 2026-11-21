
import '../App.css'
import products from '../data/products'
import { useParams, Link } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return <h2>Produto não encontrado.</h2>
  }

  return (
    <main>
      <section className="product-details">
        <img src={product.image} alt={product.name} />

        <div className="product-info">
          <h2>{product.name}</h2>

          <p className="old-price">
            R$ {product.price.toFixed(2)}
          </p>

          <p className="new-price">
            R$ {product.priceDiscount.toFixed(2)}
          </p>

          <button>Adicionar ao carrinho</button>

          <br /><br />

          <Link to="/produtos">Voltar aos produtos</Link>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails