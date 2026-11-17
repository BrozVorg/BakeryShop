
import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Clock3
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            pâtisserie<span>.</span>
            <small>ARTISAN BAKERY</small>
          </a>

          <p>
            Создаём маленькие сладкие моменты,
            которые хочется разделить с близкими.
            Авторские коржи, свежая выпечка
            и десерты с любовью к каждой детали.
          </p>

          <div className="footer-location">
            <MapPin size={16} />
            <span>Сочи, Россия</span>
          </div>
        </div>

        {/* NAVIGATION */}

        <div className="footer-column">
          <h3>Навигация</h3>

          <a href="/#home">Главная</a>
          <a href="/#categories">Каталог</a>
          <a href="/#layers">Коржи для тортов</a>
          <a href="/#desserts">Десерты и выпечка</a>
          <a href="/#delivery">Доставка</a>
        </div>

        {/* INFORMATION */}

        <div className="footer-column">
          <h3>Покупателям</h3>

          <a href="/#layers-order">Как заказать коржи</a>
          <a href="/#desserts-order">Заказ десертов</a>
          <a href="/#delivery">Условия доставки</a>
          <a href="/#contacts">Контакты</a>
        </div>

        {/* CONTACTS */}

        <div className="footer-column footer-contacts">
          <h3>Мы на связи</h3>

          <p>
            Будем рады ответить на ваши вопросы
            и помочь с выбором продукции.
          </p>

          <div className="footer-contact-item">
            <Clock3 size={16} />
            <span>Время работы уточняется</span>
          </div>

          <a href="/#contacts" className="footer-contact-link">
            Связаться с нами
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Pâtisserie. Все права защищены.
        </span>

        <span className="footer-made">
          Создано с любовью к сладкому.
        </span>

        <a href="/#home" className="footer-top">
          Наверх
          <ArrowUp size={16} />
        </a>

      </div>

    </footer>
  );
}
