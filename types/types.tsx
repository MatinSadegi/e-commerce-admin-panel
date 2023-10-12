export interface FormData {
  title: string;
  category: string;
  subcategory: string;
  price: number;
  description: string;
  image:  {public_id :string , url:string};
  inventory: string;
  quantity: { sm: number; md: number; lg: number; xl: number };
  slug:string
}
