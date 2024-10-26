import express from "express";
import cors from "cors";


const app = express();
app.disable("x-powered-by");
app.use(express.json());

const allowedOrigins = ["http://localhost:5173"];
const options = {
  origin: allowedOrigins,
  credentials: true
}
app.use(cors(options));
app.set("trust proxy", 1);


export default app;
