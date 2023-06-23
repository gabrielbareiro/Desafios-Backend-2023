import express from "express";
import handlebars from "express-handlebars";
import { Server as webSocketServer } from "socket.io";
import http from "http";

import productRoutes from "./routes/product.router.js";
import cartRoutes from "./routes/cart.router.js";
import viewsRouter from "./routes/views.router.js";
import __dirname from "./utils.js";
import Sockets from "./Socket.js";

const app = express(),
  PORT = process.env.PORT || 8080,
  server = http.createServer(app),
  httpServer = server.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
}),
  io = new webSocketServer(httpServer);

app
  .engine("handlebars", handlebars.engine())
  .set("views", __dirname + "/views")
  .set("view engine", "handlebars");

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.static(`${__dirname}/public`))
  // .use("/api/products", productRoutes)
  // .use("/api/carts", cartRoutes)
  .use("/views", viewsRouter);

Sockets(io);
