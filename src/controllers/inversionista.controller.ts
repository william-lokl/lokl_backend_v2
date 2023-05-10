import { Router, Request, Response } from "express";
import investmentService from "../services/investment.services";

class InversionistaController{
    router: Router;

    constructor(){
        this.router = Router()
        this.routes()
    }

    async getAllInvestment(_req: Request, res: Response) {
        const { status, message, data } = await investmentService.getAllInvestment()
        status
          ? res.status(200).json({ status, message, data })
          : res.status(202).json({ status, message });
    }

    routes() {
        this.router.get("/get-all",this.getAllInvestment);
    }
}

const inversionistaController = new InversionistaController();
export default inversionistaController.router;