const express = require('express')
const cors = require('cors')
require('dotenv').config()




class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'


        //middlewares
        this.middlewares()
        

        //Rutas de mi aplicacion
        this.routes()
        this.listen()
    }


    middlewares() {
        // Directorio Publico
        this.app.use(express.static('public'))

        //Parseo y lectura del Body

        this.app.use(express.json())

        //CORS
        this.app.use(cors())

    }

    routes() {

       this.app.use( this.usuariosPath , require('../routes/user'))

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        })
    }


}




module.exports = Server