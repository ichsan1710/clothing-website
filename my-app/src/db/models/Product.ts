import { database } from "@/db/config/mongodb";

class Product {
  static async getProducts() {
    const data = await database.collection("products").find().toArray();
    return data;
  }

  static async getProductBySlug(slug: string) {
    return await database.collection("products").findOne({
      slug: slug,
    });
  }

  static async getFeaturedProducts() {
    const data = await this.getProducts();
    const featured = data.slice(0, 5);
    return featured;
  }

  static async getProductByPage(max: number) {
    const data = await this.getProducts();

    const featured = data.slice(0, max);

    return featured;
  }
}

export default Product;
