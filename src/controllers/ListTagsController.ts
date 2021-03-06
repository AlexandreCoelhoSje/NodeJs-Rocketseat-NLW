import { Request, Response } from "express";
import { ListTagsService } from "../service/ListTagsService";


export class ListTagsController {

    async handler(request: Request, response: Response) {

        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute();

        return response.json(tags);
    }
}