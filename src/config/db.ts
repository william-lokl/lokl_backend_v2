import { BigQuery } from '@google-cloud/bigquery';
import * as path from 'path';

class Database {
    private bigquery: BigQuery;
    constructor() {}

    async connectionDB() {
        const credentialsPath = path.resolve(__dirname, '../../credentials.json');
        this.bigquery = new BigQuery({
            projectId: "lokl-nodemailer",
            keyFilename: credentialsPath
        });

        const query = 'SELECT 1';
        try {
            await this.runQuery(query);
            console.log('Conexion exitosa');
          } catch (error) {
            console.error('Error al ejecutar la consulta:', error);
          }
    }

    async runQuery(query: string): Promise<any[]> {
        const options = {
            query: query,
            location: 'US',
        };

        const [rows] = await this.bigquery.query(options);
        return rows;
    }
}

export default new Database();
