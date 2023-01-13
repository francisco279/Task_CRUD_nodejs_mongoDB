import mongoose        from "mongoose"; //
import { MONGODB_URI } from "./config"

//conect to BD
(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
