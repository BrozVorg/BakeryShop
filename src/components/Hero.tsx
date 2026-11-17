
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="eyebrow">
          ИСКУССТВО СОЗДАВАТЬ ВКУС
        </span>

        <h1>
          Сладкие моменты
          <br />
          <em>начинаются здесь</em>
        </h1>

        <p>
          Авторские коржи, свежая выпечка и изысканные
          десерты, созданные с любовью к каждой детали.
        </p>

        <a href="#categories" className="primary-button">
          Открыть каталог
          <ArrowRight size={18} />
        </a>

        <div className="hero-note">
          <MapPin size={15} />
          Сочи · Авторская кондитерская
        </div>
      </div>

      <a href="#categories" className="scroll-down">
        <span>ЛИСТАЙТЕ НИЖЕ</span>
        <ArrowRight size={16} />
      </a>
    </section>
  );
}
