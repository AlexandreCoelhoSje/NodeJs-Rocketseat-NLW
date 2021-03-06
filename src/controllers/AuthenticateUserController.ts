import { Request, Response } from "express";
import { AuthenticateUserService } from "../service/AuthenticateUserService";


export class AuthenticateUserController {

    async handler(request: Request, response: Response) {

        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({            
            email, 
            password
        });

        return response.json(token);
    }
}