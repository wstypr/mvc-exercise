import UserModel from "../models/user.schema";
import type { UserType } from "../types/entity";

const UserRepository = {
  getAll: async () => {
    const users = await UserModel.find();
    return users;
  },
  create: async ({ name, password }: UserType) => {
    try {
      const newUser = await new UserModel({
        name,
        password,
      }).save();
      return newUser;
    } catch (error) {
      console.log("user repository error", error);
    }
  },
  update: async (id: string, data: UserType) => {
    try {
      await UserModel.findByIdAndUpdate(id, data);
    } catch (error) {
      console.log("user repository error", error);
    }
  },
  delete: async (id: string) => {
    try {
      await UserModel.findByIdAndDelete(id);
    } catch (error) {
      console.log("user repository error", error);
    }
  },
};

export default UserRepository;
