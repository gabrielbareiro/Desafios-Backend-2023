import  express  from "express";
import ProductManager from './class/productManager.js'

let productos = new ProductManager('./src/data/products.txt')

const app = express();
const PORT = process.env.PORT || 8080

app
    .use(express.json())

    .use(express.urlencoded({extended:true}))  

    .get ('/products', async (req, res) => {
    let products= await productos.getProducts();
    let {limit} = req.query;
    if (limit) {
        products.length = limit;
        res.json(products);
    }else res.json(products)
    })

    .get ('/products/:pid', async (req, res) => {
        console.log(req.params.pid);
        const products = await productos.getProductById(parseInt(req.params.pid));
        if(!products) return res.send({error:'El producto no extiste!'});
        res.json(products);
    })

    .listen (PORT, () => {
        console.log(`server run on port: ${PORT}`);
    });
