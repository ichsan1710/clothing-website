import { database } from "@/db/config/mongodb";
import { ObjectId } from "mongodb";

type WishlistType = {
  _id: ObjectId;
  productId: string;
  userId: string;
};

type InputWishlist = Omit<WishlistType, "_id">;

class Wishlists {
  static getCollection() {
    return database.collection("wishlists");
  }
  static async create(body: InputWishlist) {
    const result = await this.getCollection().insertOne({
      productId: new ObjectId(body.productId),
      userId: new ObjectId(body.userId),
    });
    return {
      _id: result.insertedId,
      ...body,
    };
  }

  static async getWishlistByUserId(userId: string, productId: string) {
    const id = new ObjectId(userId);

    const instanceProductId = new ObjectId(productId);
    const data = await this.getCollection().findOne({
      userId: id,
      productId: instanceProductId,
    });

    return data;
  }

  static async showWishlistByUserId(userId: string) {
    const id = new ObjectId(userId);

    const data = await this.getCollection()
      .aggregate([
        {
          $match: {
            userId: id,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "productDetails",
          },
        },
        {
          $unwind: "$productDetails",
        },
        {
          $project: {
            _id: 1,
            userId: 1,
            productId: 1,
            createdAt: 1,
            updatedAt: 1,
            "productDetails.name": 1,
            "productDetails.slug": 1,
            "productDetails.description": 1,
            "productDetails.excerpt": 1,
            "productDetails.price": 1,
            "productDetails.tags": 1,
            "productDetails.thumbnail": 1,
            "productDetails.images": 1,
          },
        },
      ])
      .toArray();

    return data;
  }

  static async deleteWishlistById(id: string) {
    const data = await database.collection("wishlists").deleteOne({
      _id: new ObjectId(id),
    });
    return data;
  }
}

export default Wishlists;
