
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          pâtisserie<span>.</span>
          <small>ARTISAN BAKERY</small>
        </a>

        <nav className={`navigation ${isOpen ? "active" : ""}`}>
          <a href="/#home" onClick={closeMenu}>Главная</a>
          <a href="/#layers" onClick={closeMenu}>Коржи</a>
          <a href="/#desserts" onClick={closeMenu}>Десерты</a>
          <a href="/#delivery" onClick={closeMenu}>Доставка</a>
          <a href="/#contacts" onClick={closeMenu}>Контакты</a>
        </nav>

        <a href="#categories" className="header-button">
          Наш каталог
          <ArrowRight size={16} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>
    </header>
  );
}
