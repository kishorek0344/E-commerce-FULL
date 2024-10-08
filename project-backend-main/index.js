const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    // origin: 'https://e-commerce-website-flame-six.vercel.app',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
console.log("Allowed origin: ", process.env.FRONTEND_URL);

const PORT = process.env.PORT || 8080

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connnect to DB");
    console.log("Server is running " + PORT);
  });
});
