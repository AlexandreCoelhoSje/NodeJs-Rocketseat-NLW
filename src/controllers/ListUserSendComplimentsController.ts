import { request, Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";

export class ListUserSendComplimentsController {

    async handler(request: Request, response: Response) {

        const { user_id } = request;
        
        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(user_id);
        
        return response.json(compliments);
    }
}