export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  shortDesc: string;
  tags: string[];
  overview: string;
  deliverables: string[];
  techStack: string[];
  results: string[];
  clientName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
}
