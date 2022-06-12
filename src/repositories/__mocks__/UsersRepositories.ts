import { User } from "../../entities/User"
import { v4 as uuid } from "uuid"
import { hash } from "bcryptjs";
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(User)
export class UsersRepositories {

    userData: User = {
        name: "Test Name",
        email: "test@test.com.br",
        password: "12345",
        admin: true,
        created_at: new Date(),
        updated_at: new Date(),
    }

    async findOne({ email }: User) {

        if (this.userData.email == email)
            return this.userData;
        else
            return false;
    }

    async create({ name, email, admin, password }: User) {

        const passwordHash = await hash(password, 8);

        const newUser: User = {
            id: uuid(),
            name: name,
            email: email,
            password: passwordHash,
            admin: admin,
            created_at: new Date(),
            updated_at: new Date(),
        }

        return newUser;
    }

    async save() {
        return true;
    }
}
