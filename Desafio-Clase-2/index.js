class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    static products = []

    //-------------Metodo para generar un id incremental-------------

    idNumerico = () => ProductManager.products.length + 1;

    //-------------Agrego un producto-------------

    addProducts(product) {
        if (product.title !== ""
            && product.description !== ""
            && product.price > 0
            && product.thumbnail !== ""
            && product.code > 0
            && product.stock > 0
        ) {
            if ((ProductManager.products.some(num => num.code == product.code)) !== true) {
                product.id = this.idNumerico()
                ProductManager.products.push(product)
                console.log(`producto agragado ${product.title}, su id es:"${product.id}"`);
                console.log(`total de productos: ${ProductManager.products.length}`);
            } else {
                console.log("este producto ya fue agregado");
            }
        } else {
            console.log("Todos los campos son obligatorios");
        }
    }

    //-------------Devuelvo todos los productos guardados-------------

    getProducts = () => {
        let allProducts = ProductManager.products.map(products => products.title)
        return console.log(`estos son todos los productos agregados: ${allProducts}`);
    }

    //-------------Busco un producto por su id-------------

    getProductById(id) {
        let product = ProductManager.products.find(product => product.id === id)
        if (product) {
            return console.log(product.title);
        } else {
            console.log("Not found");
        }
    }
}

let productos = new ProductManager()

productos.addProducts({
    title: "pitusas",
    description: "dulces",
    price: 170,
    thumbnail: "https://www.mialmacenamigo.com.ar/wp-content/uploads/0041-1.jpg",
    code: 787,
    stock: 2
})

productos.addProducts({
    title: "manaos",
    description: "gaseosas",
    price: 450,
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_716200-MLA43739181284_102020-O.jpg",
    code: 187,
    stock: 9
})

productos.addProducts({
    title: "banana",
    description: "fruta",
    price: 550,
    thumbnail: "https://www.cucinare.tv/wp-content/uploads/2020/08/Bananas1.jpg",
    code: 1787,
    stock: 88
})

productos.getProductById(2)

productos.getProducts()