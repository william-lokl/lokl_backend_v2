import { Router, Request, Response } from "express";

class HomeController{
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    async home(_req: Request, res: Response) {
        const status = true;
        const message = "Welcome"
        const data = {};
        status
          ? res.status(200).json({ status, message, data })
          : res.status(202).json({ status, message });
    }

    routes() {
        this.router.get("", this.home);
    }
}

const homeController = new HomeController();
export default homeController.router;