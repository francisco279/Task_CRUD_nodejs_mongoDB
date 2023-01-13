import express     from "express"; // import express
import { engine }  from "express-handlebars"; //import handlebars engine
import indexRoutes from "./routes/index.routes"; //import the routes
import path        from "path";
import morgan      from "morgan";

//express server
const app = express();
app.set("views", path.join(__dirname, "views")); //set the views folder
//handlebars configuration
app.engine(
  ".hbs",
  engine({
    layoutsDir:    path.join(app.get("views"), "layouts"), //common views
    partialsDir:   path.join(app.get("views"), "partials"), //common views
    defaultLayout: "main",
    extname:       ".hbs",
  })
);

app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev")); // to show console messages 
app.use(express.urlencoded({extended: false})) //to receive forms data
//routes
app.use(indexRoutes);

//statics files (public files)
app.use(express.static(path.join(__dirname, "public"))); 
export default app;
