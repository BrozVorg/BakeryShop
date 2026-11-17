
export type ProductCategory = "layers" | "desserts";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: ProductCategory;
  badge?: string;
}

export const products: Product[] = [
  // КОРЖИ
  {
    id: 1,
    name: "Ванильные коржи",
    description: "Воздушный бисквит с нежным ванильным ароматом.",
    price: 450,
    unit: "комплект",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    category: "layers",
    badge: "Популярное"
  },
  {
    id: 2,
    name: "Шоколадные коржи",
    description: "Насыщенный шоколадный вкус и мягкая текстура.",
    price: 490,
    unit: "комплект",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    category: "layers"
  },
  {
    id: 3,
    name: "Красный бархат",
    description: "Нежный бисквит с бархатистой текстурой.",
    price: 520,
    unit: "комплект",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800",
    category: "layers",
    badge: "Новинка"
  },
  {
    id: 4,
    name: "Медовые коржи",
    description: "Ароматные коржи с медовым вкусом.",
    price: 480,
    unit: "комплект",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    category: "layers"
  },

  // ГОТОВЫЕ ИЗДЕЛИЯ
  {
    id: 5,
    name: "Французские эклеры",
    description: "Заварное тесто с нежным сливочным кремом.",
    price: 180,
    unit: "шт.",
    image: "/BakeryShop/images/eclairs.jpg",
    category: "desserts",
    badge: "Популярное"
  },
  {
    id: 6,
    name: "Клубничный чизкейк",
    description: "Сливочный десерт с ягодным наполнением.",
    price: 350,
    unit: "порция",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
    category: "desserts"
  },
  {
    id: 7,
    name: "Круассаны",
    description: "Хрустящая слоёная выпечка с нежной текстурой.",
    price: 190,
    unit: "шт.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
    category: "desserts",
    badge: "Свежая выпечка"
  },
  {
    id: 8,
    name: "Меренговый рулет",
    description: "Воздушная меренга с нежным кремом.",
    price: 320,
    unit: "порция",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
    category: "desserts"
  }
];
