import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}
export class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({ email });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }
        
        const passwordMatch = await compare(password, user.password);
        

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            emai: user.email
        },
        "b0ca81d582e0d1ef9536df4acc3e0d27", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}