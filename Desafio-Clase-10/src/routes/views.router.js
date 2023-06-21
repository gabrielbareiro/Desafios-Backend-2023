import express from "express";
import ProductManager from "../services/productManager.js";
const router = express.Router()
let productos = new ProductManager("./src/db/products.json");


router
    .get('/', async (req, res) => {
        let products = await productos.getProducts()
    res.render('realTimeProducts',{products});
    })


export default router