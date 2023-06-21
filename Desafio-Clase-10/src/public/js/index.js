const socket = io();
socket.emit('message', 'soy un nuevo usuario')
socket.on('evento_para_todos', data => {
    console.log(data);
  })
console.log('esto es js');

const addProduct = () => {
    let payload = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        status: true,
        thumbnail: document.getElementById('thumbnail').value,
        code: document.getElementById('code').value,
        stock: document.getElementById('stock').value
    }
    socket.on('new_product', payload);
    return false
}