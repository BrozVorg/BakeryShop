
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isLayer = product.category === "layers";

  return (
    <article className="product-card">

      <Link
        to={`/product/${product.id}`}
        className="product-card-link"
        aria-label={`Подробнее о товаре ${product.name}`}
      >
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />

          {product.badge && (
            <span className="product-badge">
              {product.badge}
            </span>
          )}

          <span className="product-unit">
            {product.unit}
          </span>
        </div>
      </Link>

      <div className="product-info">

        <span className="product-category">
          {isLayer ? "КОРЖИ ДЛЯ ТОРТОВ" : "КОНДИТЕРСКИЕ ИЗДЕЛИЯ"}
        </span>

        <Link
          to={`/product/${product.id}`}
          className="product-title-link"
        >
          <h3>{product.name}</h3>
        </Link>

        <p>{product.description}</p>

        <div className="product-bottom">
          <div>
            <span className="product-price">
              {product.price.toLocaleString("ru-RU")} ₽
            </span>

            <span className="product-price-unit">
              / {product.unit}
            </span>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="product-button"
            aria-label={`Подробнее о товаре ${product.name}`}
          >
            <ArrowUpRight size={19} />
          </Link>
        </div>

      </div>
    </article>
  );
}
