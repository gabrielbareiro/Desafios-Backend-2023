const render = (data) => {
  let html = data
    .map(function (data, index) {
      return `
          <div  class="card m-1 col-6" style="max-width: 400px;">
            <div class="row g-0">
              <div class="col-md-4">
                    <img src="${data.thumbnail}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                        <p class="card-text"><small class="text-body-secondary">Price: ${data.price}</small></p>
                         <div class= "row">
                         <p class="card-text col-sm-6"><small class="text-body-secondary ">Stock: ${data.stock}</small></p>
                        <button id="${data.id}"type="button" onclick= "deleteProduct(${data.id})" class="delete btn btn-outline-danger col-sm-6">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      `;
    })
    .join(" ");
  document.getElementById("products").innerHTML = html;
};

const addProduct = (e) => {
  let payload = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    status: true,
    thumbnail: document.getElementById("thumbnail").value,
    code: document.getElementById("code").value,
    stock: document.getElementById("stock").value,
  };
  socket.emit("new_product", payload);
  console.log("producto enviado");
  document.getElementById("form").reset();
  return false;
};

const deleteProduct = (id) => {
  console.log(id);
  socket.emit("delete_product", id);
  console.log("producto eliminado");
  return false;
};
