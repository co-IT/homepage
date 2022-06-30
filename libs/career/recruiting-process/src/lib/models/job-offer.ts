export interface JobOffer {
  id: number;
  title: string;
  description: string;
  city: string;
  country: string;
  applyUrl: string;
  offerUrl: string;
  tags: string[];
  location: string;
  isRemote: boolean;
}
