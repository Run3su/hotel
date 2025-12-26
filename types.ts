
export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  type: 'room' | 'apartment';
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'adventure' | 'wellness' | 'culture';
}

export interface CulinaryFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}
