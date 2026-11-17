
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Package,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Header />

        <main className="not-found">
          <span className="eyebrow">404</span>
          <h1>Товар не найден</h1>
          <p>Возможно, товар был удалён или адрес указан неверно.</p>
          <Link to="/" className="primary-button">
            Вернуться в каталог
            <ArrowLeft size={18} />
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const isLayer = product.category === "layers";

  return (
    <>
      <Header />

      <main className="product-page">

        {/* BREADCRUMBS */}

        <div className="breadcrumbs">
          <Link to="/">Главная</Link>
          <span>/</span>
          <Link to={isLayer ? "/#layers" : "/#desserts"}>
            {isLayer ? "Коржи для тортов" : "Десерты и выпечка"}
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* PRODUCT DETAILS */}

        <section className="product-detail">

          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.name}
            />

            {product.badge && (
              <span className="product-badge">
                {product.badge}
              </span>
            )}
          </div>

          <div className="product-detail-info">

            <span className="eyebrow">
              {isLayer
                ? "КОРЖИ ДЛЯ ТОРТОВ"
                : "КОНДИТЕРСКИЕ ИЗДЕЛИЯ"}
            </span>

            <h1>{product.name}</h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="detail-price">
              {product.price.toLocaleString("ru-RU")} ₽
              <span>/ {product.unit}</span>
            </div>

            <div className="detail-divider" />

            <div className="detail-characteristics">
              <div>
                <span>Категория</span>
                <strong>
                  {isLayer ? "Коржи для тортов" : "Десерты и выпечка"}
                </strong>
              </div>

              <div>
                <span>Единица продажи</span>
                <strong>{product.unit}</strong>
              </div>

              <div>
                <span>Состав</span>
                <strong>Уточняется</strong>
              </div>

              <div>
                <span>Вес</span>
                <strong>Уточняется</strong>
              </div>
            </div>

            <div className="detail-delivery">
              {isLayer ? (
                <>
                  <Package size={21} />
                  <div>
                    <strong>Доставка по России</strong>
                    <p>
                      Через Ozon и Wildberries.
                      Условия зависят от площадки.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <MapPin size={21} />
                  <div>
                    <strong>Доставка по Сочи</strong>
                    <p>
                      Готовые изделия доставляются
                      по городу Сочи.
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="detail-order">
              <h3>Способы заказа</h3>

              {isLayer ? (
                <div className="detail-order-buttons">
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
              ) : (
                <div className="detail-order-buttons">
                  <button disabled className="order-button whatsapp">
                    WhatsApp
                  </button>
                  <button disabled className="order-button telegram">
                    Telegram
                  </button>
                </div>
              )}

              <p className="order-placeholder">
                Контакты и ссылки на заказ будут добавлены позже.
              </p>
            </div>

          </div>
        </section>

        {/* ADDITIONAL INFORMATION */}

        <section className="product-extra">
          <span className="eyebrow">PÂTISSERIE</span>
          <h2>Внимание к каждой <em>детали</em></h2>

          <p>
            Мы стремимся создавать продукцию,
            которая делает обычные моменты особенными.
            Подробная информация о составе, весе и
            характеристиках этого изделия будет добавлена
            после согласования с кондитерской.
          </p>

          <Link to="/" className="back-to-catalog">
            <ArrowLeft size={17} />
            Вернуться в каталог
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}
