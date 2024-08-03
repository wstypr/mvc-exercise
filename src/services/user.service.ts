import { UserType } from "./../types/entity";
import UserRepository from "../repositories/user.repository";

const UserService = {
  getAll: async () => {
    const users = await UserRepository.getAll();
    return users;
  },
  create: async (data: UserType) => {
    try {
      const newUser = await UserRepository.create(data);
      return newUser;
    } catch (error) {
      console.log("user service error", error);
    }
  },
  update: async (id: string, data: UserType) => {
    try {
      await UserRepository.update(id, data);
    } catch (error) {
      console.log("user service error", error);
    }
  },
  delete: async (id: string) => {
    try {
      await UserRepository.delete(id);
    } catch (error) {
      console.log("user service error", error);
    }
  },
};

export default UserService;
