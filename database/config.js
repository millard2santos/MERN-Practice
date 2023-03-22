const mongoose = require('mongoose')



const db = async() => {

    try {
       await mongoose.connect(process.env.MONGODB_CNN, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
       })


       console.log('conectado a la base de datos');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }

}


module.exports = {
    db
}