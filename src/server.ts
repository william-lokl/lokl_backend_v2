import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import compression from "compression";
import useragent from "express-useragent";
import routes from "./controllers/index";
import database from "./config/db";

export default class Server{
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.config();
        this.routes();
    }

    static init(port: number): Server {
        return new Server(port);
    }

    config() {
        dotenv.config();
        try {
			database.connectionDB();
		} catch (error) {
			console.log("🚀 ~ file: server.ts:31 ~ Server ~ config ~ error:", error)
		}
        this.app.use(useragent.express());
        this.app.set("port", process.env.PORT || this.port || 3000);
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use((req, res, next) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
          res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
          next();
        });
        this.app.use(helmet());
        this.app.use(compression());
    }

    routes(): void {
        this.app.use("/", routes.homeController);
        this.app.use("/api/investment", routes.inversionistaController)
    }

    
    start(): void {
        this.app.listen(this.app.get("port"), () => {
          console.log("Server listening on port", this.app.get("port"));
        });
    }
}