import ProductManager from "./services/productManager.js";
let productos = new ProductManager("./src/db/products.json");

export default (io) => {
  io.on("connection", async (socket) => {
    let data = await productos.getProducts();
    console.log("new connection");
    socket.emit("producto", data);

    socket.on("new_product", async (data) => {
      await productos.addProducts(data);
      const product = await productos.getProducts();
      socket.emit("producto", product);
    });

    socket.on("delete_product", async (data) => {
      await productos.deleteProduct(data);
      const product = await productos.getProducts();
      socket.emit("producto", product);
    });
  });
};
