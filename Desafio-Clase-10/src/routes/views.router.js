import {Router} from "express";
import ProductManager from "../services/productManager.js";

const router = Router()


let productos = new ProductManager("./src/db/products.json");



router
    .get('/realtimeproducts', async (req, res) => {
    res.render('realTimeProducts');
    })
    .get('/home', async (req, res) => {
        try {
            let products = await productos.getProducts();
            let { limit } = req.query;
            if (limit) {
                products.length = limit;
                res.render('home',{products});
            } else {
                res.render('home',{products});
            }
        } catch (error) {
            res.status(400).json({success: false, error: 'Error al buscar los productos'});
        }
    })



export default router;