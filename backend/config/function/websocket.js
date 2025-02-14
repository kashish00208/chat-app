const socketIo = require("socket.io");
module.exports = async (strapi) {
    const server = strapi.server;
    const io = socketIo(server.httpServer,{cors:{origin:'*'}});
    socket.on('connectio',(message)=>{
        console.log("Message from client",message)

        socketIo.emit("message",message)
    });
    socketIo.on("disconnect",()=>{
        console.log("User disconnected");
    })
    
}