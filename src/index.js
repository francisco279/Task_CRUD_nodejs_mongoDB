import app from "./app"; //import app (server, configuration and routes)
import './database' //connect to DB

//starting the server
app.listen(3000);
console.log("server on port", 3000);
