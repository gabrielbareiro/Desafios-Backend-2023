const socket = io();
socket.emit("message", "soy un nuevo usuario");

socket.on("producto", (data) => {
  render(data);
});
