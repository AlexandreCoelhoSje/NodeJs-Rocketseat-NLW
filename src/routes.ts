import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController  = new CreateComplimentController();
const listUserReceiveComplimentsController  = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController  = new ListUserSendComplimentsController();
const listTagsController  = new ListTagsController();
const listUsersController  = new ListUsersController();

router.post("/users", createUserController.handler);
router.get("/users", listUsersController.handler);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handler);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handler);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handler);
router.get("/tags", ensureAuthenticated, listTagsController.handler);

router.post("/login", authenticateUserController.handler);
router.post("/compliments", ensureAuthenticated, createComplimentController.handler);


export { router }