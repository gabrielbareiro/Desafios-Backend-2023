# Desafio-Clase-8

## Primera entrega del desafio final para el curso de programacion backend de CODERHOUSE

Estoy usando la version v18.15.0 de node.js, para el desarrollo uso el script: "node --watch ./src/app.js"

El servidor corre con el script:

```bash
npm start
```


#### Todos los end points fueron probados en Postman

#### Endpoints probados para productos:

##### POST: agrego un producto.
    Body:
```bash
{
  "title": "Longos - Assorted Sandwich",
  "description": "mauris non ligula pellentesque ultrices phasellus",
  "price": 656,
  "status": true,
  "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  "code": "47593-305",
  "stock": 414
}
```
```http
localhost:8080/api/products
```
##### GET: devuelvo todos los productos, si hay un limite devuelvo la cantidad requerida.
```http
localhost:8080/api/products
localhost:8080/api/products?limit=5
```
##### PUT: Actualizo un producto, un item a la vez.
    Body:
```bash
{
    "stock": 967
  }
```
```http
localhost:8080/api/products/20
```
##### DELETE: Elimino un producto por id.
```http
localhost:8080/api/products/20
```
#### Endpoints probados para el Carrito:

##### POST: Creo el carrito vacio con un id autogenerado 
```http
localhost:8080/api/carts
```
##### GET: Devuelvo los productos de un carrito por su id
```http
localhost:8080/api/carts/1
```
##### POST: Agrego un producto por medio de su id al carrito con un id determinado.
```http
localhost:8080/api/carts/2/products/5
```