class ICategory {
  CategoryId: number;
  Name: string;
}

export class Category extends ICategory {
  constructor(category: Category) {
    super();
    const {
      CategoryId = 0,
      Name = '',
    } = category;
    this.CategoryId = CategoryId;
    this.Name = Name;
  }
}
