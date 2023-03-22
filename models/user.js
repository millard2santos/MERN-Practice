
const { Schema, model} = require('mongoose')

const UserSchema = Schema( {
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    correo: {
        type: String,
        required : [true, 'el correo es obligatorio'],
        unique:true
    },
    password: {
        type: String,
        required : [true, 'la contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type:String,
        required : true,
        enun: ['ADMIN_ROLE', 'USER_ROLE']

    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
})




module.exports = model( 'User', UserSchema )