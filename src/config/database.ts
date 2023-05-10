/*import { createConnections } from "typeorm";

class Database {
  constructor() {}

  async connectionDB() {
    const connections = await createConnections([
      {
        name: "default",
        type: "bigquery",
        projectId: "your-project-id",
        keyFilename: "path/to/credentials.json",
        dataset: "your-dataset-name",
        synchronize: false,
        logging: false,
        entities: process.env.LOCAL ? ["src/models/*.entity{.ts,.js}"] : ["dist/models/*.entity{.ts,.js}"],
      }
    ])
    .then(() => {
      console.log("Connection to BigQuery Create Successfully");
    })
    .catch((err: any) => {
      console.log(err);
      console.log({
        message: "Invalid credentials or configuration for BigQuery connection",
      });
    });
  }
}

export default new Database();*/
