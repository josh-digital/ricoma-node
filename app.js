require("dotenv").config();

const express = require("express");

const app = express();
const companyRouter = require("./api/company/company.router");
const productRouter = require("./api/product/product.router");
app.use(express.json());

// app.get("/api", (req, res) => {
//   res.json({
//     success: 1,
//     message: "api working",
//   });
// });

app.use("/api/company", companyRouter);
app.use("/api/product", productRouter);
app.listen(4000, () => {
  console.log("server up & running");
});
