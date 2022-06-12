import { User } from "../../src/entities/User";
jest.mock("../../src/repositories/UsersRepositories")
import { CreateUserService } from "../../src/services/CreateUserService"

describe("Create User", () => {

    it("Should be able to create a new user", async () => {

        const createUserService = new CreateUserService();

        const userData: User = {
            name: "Test Name",
            email: "test2@test.com.br",
            password: "12345",
            admin: true
        }

        const user = await createUserService.execute(userData);
        expect(user).toHaveProperty("id");
    })

    it("User already exist", async () => {

        const createUserService = new CreateUserService();

        const userData = {
            name: "Test Name",
            email: "test@test.com.br",
            password: "12345",
            admin: true
        }
      
        await expect(createUserService.execute(userData)).rejects.toThrow("User already exists");
    })
})