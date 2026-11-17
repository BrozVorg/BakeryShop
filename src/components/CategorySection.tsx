
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: "layers",
    number: "01",
    title: "Коржи для тортов",
    subtitle: "ИДЕАЛЬНАЯ ОСНОВА ДЛЯ ВАШИХ ИДЕЙ",
    description:
      "Нежные, воздушные коржи, которые станут основой вашего идеального торта.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000",
    link: "#layers",
  },
  {
    id: "desserts",
    number: "02",
    title: "Десерты и выпечка",
    subtitle: "МАЛЕНЬКИЕ РАДОСТИ КАЖДОГО ДНЯ",
    description:
      "Свежая выпечка и изысканные десерты для особенных моментов.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000",
    link: "#desserts",
  },
];

export default function CategorySection() {
  return (
    <section className="categories section" id="categories">

      <div className="section-heading">
        <span className="eyebrow">НАША ПРОДУКЦИЯ</span>

        <h2>
          Создано для <em>удовольствия</em>
        </h2>

        <p>
          Выберите то, что сделает ваш день немного слаще.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <a
            href={category.link}
            className="category-card"
            key={category.id}
          >
            <img
              src={category.image}
              alt={category.title}
              loading="lazy"
            />

            <div className="category-content">
              <span className="category-number">
                {category.number}
              </span>

              <span className="category-subtitle">
                {category.subtitle}
              </span>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <span className="category-link">
                Смотреть каталог
                <ArrowUpRight size={20} />
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
