
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

import { products } from "../data/products";

export default function Home() {
  const layers = products.filter(
    product => product.category === "layers"
  );

  const desserts = products.filter(
    product => product.category === "desserts"
  );

  return (
    <>
      <Header />

      <main>
        <Hero />

        <CategorySection />

        <ProductSection
          id="layers"
          eyebrow="ОСНОВА ВАШЕГО ШЕДЕВРА"
          title="Коржи для тортов"
          description="Нежные коржи для ваших кондитерских идей."
          products={layers}
        />

        <section id="layers-order" className="catalog-order">
          <span className="eyebrow">УДОБНЫЕ СПОСОБЫ ПОКУПКИ</span>
          <h3>Как заказать коржи?</h3>
          <p>
            Выберите удобный способ оформления заказа.
            Доставка доступна по России.
          </p>

          <div className="order-buttons">
            <button disabled className="order-button ozon">
              Ozon
            </button>
            <button disabled className="order-button wildberries">
              Wildberries
            </button>
            <button disabled className="order-button whatsapp">
              WhatsApp
            </button>
            <button disabled className="order-button telegram">
              Telegram
            </button>
          </div>
        </section>

        <ProductSection
          id="desserts"
          eyebrow="СВЕЖАЯ ВЫПЕЧКА"
          title="Десерты и выпечка"
          description="Изготовленные с любовью сладости для особенных моментов."
          products={desserts}
        />

        <section id="desserts-order" className="catalog-order">
          <span className="eyebrow">ДОСТАВКА ПО СОЧИ</span>
          <h3>Как заказать десерты?</h3>
          <p>
            Свяжитесь с нами через удобный мессенджер,
            чтобы уточнить наличие и оформить заказ.
          </p>

          <div className="order-buttons">
            <button disabled className="order-button whatsapp">
              WhatsApp
            </button>
            <button disabled className="order-button telegram">
              Telegram
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

