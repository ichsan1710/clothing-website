import { User } from "@/types";
import { database } from "../config/mongodb";
import { z } from "zod";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

interface Login {
  email: string;
  password: string;
}

interface newUser {
  name: string;
  username: string; // validation: required, unique
  email: string; // validation: required, unique, email format
  password: string; // validation: required, length min 5
}

const Validation = z.object({
  username: z.string({
    required_error: "Username cant be empty",
  }),
  email: z
    .string({
      required_error: "Email cant be empty",
    })
    .email(),
  password: z
    .string({
      required_error: "Password cant be empty",
    })
    .min(5),
});

class UserModel {
  static async getUserByEmail(email: string) {
    return (await database
      .collection("users")
      .findOne({ email })) as User | null;
  }

  static async create(newUser: newUser) {
    const validation = Validation.safeParse(newUser);
    if (!validation.success) {
      const errors = validation.error;
      throw errors;
    }

    const user = {
      ...newUser,
      password: bcryptjs.hashSync(newUser.password),
    };

    const [validateUser] = await database
      .collection("users")
      .find({
        $or: [
          {
            username: user.username,
          },
          {
            email: user.email,
          },
        ],
      })
      .toArray();
    if (validateUser) throw new Error("Email/Username Already Registered");
    const data = await database.collection("users").insertOne(user);
    return data;
  }

  static async getUserById(id: string) {
    const _id = new ObjectId(id);
    const data = (await database
      .collection("users")
      .findOne({ _id })) as User | null;
    if (!data) {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        { status: 404 },
      );
    }
    return data;
  }

  static async login(data: Login) {
    try {
      const { email, password } = data;
      const user = await this.getUserByEmail(email);
      if (!user) {
        throw new Error("Invalid Username or Password");
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async findAll() {
    return (await database.collection("users").find({}).toArray()) as User[];
  }
}

export default UserModel;
