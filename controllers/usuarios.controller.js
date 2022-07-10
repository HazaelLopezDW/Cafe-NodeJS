const { response } = require("express")

const usuariosGet = (req, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'Get Api - Controlador',
        q,
        nombre,
        apikey, 
        page, 
        limit
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post Api - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'Put Api - Controlador',
        id
    });
}

const usuariosDelete = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'Delete Api - Controlador'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch Api - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}