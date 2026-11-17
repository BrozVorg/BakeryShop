
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

interface ProductSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
}

export default function ProductSection({
  id,
  eyebrow,
  title,
  description,
  products
}: ProductSectionProps) {

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll
    ? products
    : products.slice(0, 4);

  return (
    <section className="products-section section" id={id}>

      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>

        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div className="product-grid">
        {visibleProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {products.length > 4 && (
        <button
          className="show-more-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Свернуть" : "Показать все товары"}
          <ArrowRight size={17} />
        </button>
      )}

    </section>
  );
}
