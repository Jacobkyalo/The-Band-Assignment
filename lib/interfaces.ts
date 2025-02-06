export interface NavLink {
  link: string;
  text: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
}
