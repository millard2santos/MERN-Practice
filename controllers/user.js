
const User = require('../models/user')



const getUser = (req, res) =>{

    const {q, nombre = 'No name', apikey, page =1, limit} = req.query

    res.json({
        msg: 'get Api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const postUser = async(req, res) => {

    const body = req.body
    const user = new User( body )

    await user.save()


    res.json({
        msg: 'post Api - controlador',
        user
    })
}

const putUser = (req, res) => {

    const {nombre, edad} = req.body
    const id = req.params.id

    res.json({
        msg: 'put Api - controlador',
        nombre,
        edad,
        id
    })
}

const patchUser = (req, res) => {
    res.json({
        msg: 'patch Api - controlador'
    })
}

const deleteUser = (req, res) =>{
    res.json({
        msg: 'delete Api - controlador'
    })
}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    patchUser

}