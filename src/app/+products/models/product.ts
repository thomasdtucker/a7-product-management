class IProduct {
  ProductId?: number;
  CategoryIds?: any[];
  Description?: string;
  Name?: string;
  Url?: string;
}

export class Product extends IProduct {
  constructor(product: Product) {
    super();
    const {
      ProductId = 0,
      CategoryIds = [],
      Description = '',
      Name = '',
      Url = '',
    } = product;
    this.ProductId = ProductId;
    this.CategoryIds = CategoryIds;
    this.Description = Description;
    this.Name = Name;
    this.Url = Url;
  }
}
