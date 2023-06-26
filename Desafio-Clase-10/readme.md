# Desafio-Clase-10

Estoy usando la version v18.15.0 de node.js, para el desarrollo uso el script: "node --watch ./src/app.js"

El servidor corre con el script:

```bash
npm start
```

#### Todos los end points probados

#### Endpoints probados para productos en tiempo real:

##### POST: agrego un producto.


  title = "Longos - Assorted Sandwich"
  description = "mauris non ligula pellentesque ultrices phasellus"
  price  = 656
  thumbnail = "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  code = "47593-305",
  stock = 414

```http
localhost:8080/realtimeproducts
```
##### GET: devuelvo todos los productos añadidos hasta el momento, si hay un limite devuelvo la cantidad requerida.

```http
localhost:8080/home
localhost:8080/home?limit=5
```
