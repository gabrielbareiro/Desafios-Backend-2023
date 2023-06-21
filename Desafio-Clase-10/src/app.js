import express from "express";
import handlebars from "express-handlebars"

import productRoutes from "./routes/product.router.js";
import cartRoutes from "./routes/cart.router.js";
import  viewsRouter  from "./routes/views.router.js";

import __dirname from "./utils.js";
import { Server } from "socket.io";


const 
    app = express(),
    PORT = process.env.PORT || 8080

app
  .engine('handlebars', handlebars.engine())
  .set('views', __dirname+'/views')
  .set('view engine', 'handlebars')

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.static(`${__dirname}/public`))
  .use("/api/products", productRoutes)
  .use("/api/carts", cartRoutes)
  .use('/realtimeproducts', viewsRouter)



const httpServer = app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});
const socketServer = new Server(httpServer)

socketServer.on ('connection', socket => {
  console.log('new connection');
  socket.on('message', data => {
    console.log(data);
  })
  socketServer.emit('evento_para_todos', 'este mensaje es para todos')
  socket.on('new_product', data => {
    console.log(data);
  })
})

