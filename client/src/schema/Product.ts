type Product = {
  _id: string;
  name: string;
  desc: string;
  price: number;
  addedDate: Date;
  img_url: string;
  categoryId: number;
  subcategoryId: number;
}

export default Product;