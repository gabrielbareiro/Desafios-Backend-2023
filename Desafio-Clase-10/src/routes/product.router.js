import { Router } from "express";
import ProductManager from "../services/productManager.js";

const router = Router();
let productos = new ProductManager("./src/db/products.json");

router
    .get('/', async (req, res) => {
        try {
            let products = await productos.getProducts();
            let { limit } = req.query;
            if (limit) {
                products.length = limit;
                res.render({products});
            } else {
                res.render({products});
            }
        } catch (error) {
            res.status(400).json({success: false, error: 'Error al buscar los productos'});
        }
    })

    .get ('/:pid', async (req, res) => {
        try {
            const product = await productos.getProductById(parseInt(req.params.pid));
            res.render({product});
        } catch (error) {
            res.status(404).json({success: false, error: `El producto con el id: ${req.params.pid} no existe!`});
        }
    })

    .post ('/', async (req, res) => {
        try {
            let product = req.body;
            await productos.addProducts(product);
            res.send({status: 'Success', message : 'Poducto agregado con exito!'})
        } catch (error) {
            res.status(400).send({ status: "Error", message: "Producto invalido, verifique los datos de entrada." });
        }
    })

    .put ('/:pid', async (req, res) => {
        try {
            const {body, params: { pid } } = req;
            console.log(body);
            await productos.updateProducts(pid, body);
            res.send({ status: "Success", message: `Producto actualizado con exito!` });
        } catch (error) {
            res.status(400).send({ status: "Error", message: "No se pudo actualizar, verifique los datos de entrada." });
        }      
    })

    .delete ('/:pid', async (req, res) => {
        try {
            const pid = parseInt(req.params.pid)
            await productos.deleteProduct(pid);
            res.send({ status: "Success", message: `Producto eliminado con exito!` });
        } catch (error) {
            res.status(400).send({ status: "Error", message: "error al eliminar un producto" });
        }
    })

export default router