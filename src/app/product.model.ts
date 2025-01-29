export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  stock: number;
  thumbnail: string;
  category: Category | String;
}

export interface Category {
  name: string;
}