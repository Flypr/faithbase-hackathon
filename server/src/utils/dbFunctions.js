import dbPromise from "./dbPromise.js";
import { AppError } from "../middleware/errorHandler.js";


const getPacients = async () => {
  try {
    const db = await dbPromise;
    const pacients = await db.all("SELECT * FROM Pacients;");
    return pacients;
  } catch (error) {
    console.log(error);
  }
  throw new AppError("Database error", 500, "There is an issue with the database dbPromise constructor", true);
}

export default { getPacients };
