export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  description?: string;
}

export type Category = 'all' | 'women' | 'men' | 'accessories';