const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//import routes
const analytics = require("./routes/analytics");

//config env file
dotenv.config({ path: "./.env" });

// Connect Database
const connectDb = require("./db/index");

// initalize app
const app = express();
//Enable cors
app.use(cors());

//body parser
app.use(express.json());

//Set Security Headers
app.use(helmet());

// //Prevent Xss attacks
// app.use(xss());

//prevent http param pollution(giving same elements in array to expliot the mechanisim)
app.use(hpp());

const corsOptions = {
  origin: "http://localhost:3000/", // Replace with your client's URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

//Logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Connect Db
connectDb();

// Mount Routers
app.use("/api/analytics", analytics);

//port number
const PORT = process.env.PORT || 8080;

// app listening to the port
const server = app.listen(
  PORT,
  console.log(`App is Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`.red);
  server.close(() => process.exit(1));
});
