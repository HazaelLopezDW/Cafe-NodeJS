const express = require('express')
 

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    routes(){
        this.app.get('/api',  (req, res) => {
            res.json({
                msg: 'Get Api'
            })
        });

        this.app.post('/api',  (req, res) => {
            res.json({
                msg: 'Post Api'
            })
        });

        this.app.put('/api',  (req, res) => {
            res.json({
                msg: 'Put Api'
            })
        });

        this.app.delete('/api',  (req, res) => {
            res.json({
                msg: 'Delete Api'
            })
        });

        this.app.patch('/api',  (req, res) => {
            res.json({
                msg: 'Patch Api'
            })
        });
    }

    middlewares(){
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