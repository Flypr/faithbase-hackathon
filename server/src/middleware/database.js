import sqlite3 from "sqlite3";
import { open } from "sqlite";


async function getDatabase() {

  let path = './faithbase.db';

  try {
    const db = await open({
      filename: path,
      driver: sqlite3.Database
    });
    await db.exec(`PRAGMA journal_mode=WAL;`);
    console.log(`Connected to database at ${path}`);
    return db;
  } catch (error) {
    console.error(`Failed to connect to database at ${path}.`, error);
    // Continue to the next path
  }
}

const dbPromise = getDatabase();

export default dbPromise;
