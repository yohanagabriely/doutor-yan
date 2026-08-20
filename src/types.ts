export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  imageUrl: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatarUrl: string;
  stars: number;
  treatment: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export interface AppointmentFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  treatment: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
}
