import { xContentTypeOptions } from "helmet";
import Server from "./server";
const server = Server.init(Number(process.env.PORT));
server.start();
