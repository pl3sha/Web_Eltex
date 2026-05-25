export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  rating?: number;
  categoryId?: string;
  categoryName?: string;
  imageFile?: File | null;
}
