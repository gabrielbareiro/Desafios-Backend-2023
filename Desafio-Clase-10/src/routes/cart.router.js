import { Router } from 'express';
import CartManager from '../services/cartManager.js'
import ProductManager from '../services/productManager.js'

const router = Router ();
let carritos = new CartManager('./src/db/carts.json')
let productos = new ProductManager ('./src/db/products.json');

router
        .post ('/', async (req, res) => {
            try {
                await carritos.addCart();
                res.send({status: 'Success', message : 'Carrito creado con exito'});
            } catch (error) {
                res.status(400).send({status: 'Error', error: 'Error al crear el carrito'});
            }
        })

        .get ('/:cid', async (req, res) => {
            try {
                let {cid} = req.params
                let cart = await carritos.getCartById(parseInt(cid));
                res.send({cart});
            } catch (error) {
                res.status(400).send({status: 'Error', error: 'Carrito no encontrado'})
            }
        })

        .post ('/:cid/products/:pid', async (req, res) => {
            try {
                let product = await productos.getProductById(parseInt(req.params.pid));
                await carritos.addProductToCart(req.params.cid, product.id);
                res.send({status: 'Success', message: 'Producto añadido con exito!'})
            } catch (error) {
                res.status(400).send({status: 'Error', error: 'Error al cargar el producto al carrito'})
            }
        })


export default router

