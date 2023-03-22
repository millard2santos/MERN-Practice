const express = require('express')
require('dotenv').config()




class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT


        //middlewares
        this.middlewares()

        //Rutas de mi aplicacion
        this.routes()
        this.listen()
    }


    middlewares() {
        // Directorio Publico
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.get('/api', (req, res) => res.json({
            msg: 'get Api'
        }))
        this.app.put('/api', (req, res) => res.json({
            msg: 'put Api'
        }))
        this.app.post('/api', (req, res) => res.json({
            msg: 'post Api'
        }))
        this.app.delete('/api', (req, res) => res.json({
            msg: 'delete Api'
        }))
        this.app.patch('/api', (req, res) => res.json({
            msg: 'patch Api'
        }))

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        })
    }


}




module.exports = Server