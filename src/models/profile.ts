import { Picture } from './picture';
import { Portrait } from './portrait';
import { Testimonial } from './testimonial';

export interface Profile {
  id: number;
  sex: string;
  firstName: string;
  lastName: string;
  company: string | null;
  emailAddress: string | null;
  website: string | null;
  intro: string | null;
  additional: string | null;
  slogan: string | null;
  services: string | null;
  city: string | null;
  provinceCode: string | null;
  countryCode: string | null;
  phoneNumber: string | null;
  noindex: boolean;
  active: boolean;
  facebook: string | null;
  twitter: string | null;
  pinterest: string | null;
  instagram: string | null;
  linkedin: string | null;
  timestamp: number;
  styleName: string;
  dark: boolean;
  backgroundName: string | null;
  backgroundUrl: string | null;
  professions: string[];
  certifications: string[];
  images: Picture[];
  testimonials: Testimonial[];
  portrait: Portrait | null;
}
