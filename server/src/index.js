import dbPromise from "./middleware/database.js";
import app from "./app.js";
import { AppError } from "./middleware/errorHandler.js";
const port = process.env.PORT || 3001;


const setup = async () => {
  try {
    const db = await dbPromise;
    if (!db) {
      throw new AppError("Database connection error", 500, "Database middleware error", true);
    }
    await db.migrate();
  } catch (error) {
    console.error("Error migrating database:", error);
  }
  app.listen(port, () => {
    console.log(`FaithBase Server listening at ${port}`);
  });
};
setup();
