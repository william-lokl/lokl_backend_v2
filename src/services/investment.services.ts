import database from "../config/db";
import { HttpResponse } from "../utils/HttpResponse"

class InvestmentService {

    async getAllInvestment(){
        const httpResponse = new HttpResponse();
        try {
            const query = "select * from LOKLAPP.Usuarios";
            const results = await database.runQuery(query);

            httpResponse.findAll(results);
            return httpResponse;
        } catch (error) {
            httpResponse.error;
            return httpResponse;
        }
    }

}

const investmentService = new InvestmentService();
export default investmentService;