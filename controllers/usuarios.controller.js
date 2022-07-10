const { response } = require("express")

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'Get Api - Controlador'
    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post Api - Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req, res) => {
    res.json({
        msg: 'Put Api - Controlador'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete Api - Controlador'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch Api - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}