import express from "express";
import productRoutes from "./routes/product.router.js";
import cartRoutes from "./routes/cart.router.js";
import __dirname from "./utils.js";

const app = express();
const PORT = process.env.PORT || 8080;

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.static(`${__dirname}/public`))
  .use("/api/products", productRoutes)
  .use("/api/carts", cartRoutes);

const connectedServer = app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
