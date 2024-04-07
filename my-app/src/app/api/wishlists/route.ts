import Wishlist from "@/db/models/Wishlist";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const userId = request.headers.get("x-user-id") as string;
    const wishlist = await Wishlist.create({
      productId: body.productId,
      userId: userId,
    });

    return NextResponse.json({ data: wishlist });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
};

export const GET = async (request: Request) => {
  try {
    const userId = request.headers.get("x-user-id") as string;

    if (!userId) {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        {
          status: 404,
        },
      );
    }
    const getWishlist = await Wishlist.showWishlistByUserId(userId);

    return new Response(JSON.stringify(getWishlist), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
};

export const DELETE = async (request: Request) => {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        {
          status: 404,
        },
      );
    }

    const body = await request.json();
    const { _id } = body;
    await Wishlist.deleteWishlistById(_id);

    return NextResponse.json(
      {
        message: "Wishlist has been Deleted",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
};
