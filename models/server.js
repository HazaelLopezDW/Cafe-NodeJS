const express = require('express');
const cors = require('cors');
 

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            userPath: '/api/usuarios',
        }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    routes(){
        this.app.use(this.paths.userPath, require('../routes/usuarios.routes'));
    }

    middlewares(){

        // CORS
        this.app.use(cors());

        // Directorio publico 
        this.app.use(express.static('public'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }
}

module.exports = Server