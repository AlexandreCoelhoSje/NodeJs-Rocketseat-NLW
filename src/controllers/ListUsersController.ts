import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

export class ListUsersController {

    async handler(request: Request, response: Response) {

        const listUsersService = new ListUsersService();

        const users = await listUsersService.execute();

        return response.json(users);
    }
}