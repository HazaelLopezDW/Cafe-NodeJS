const Router = require('express');
const router = Router();

router.get('/',  (req, res) => {
    res.json({
        msg: 'Get Api'
    })
});

router.post('/',  (req, res) => {
    res.json({
        msg: 'Post Api'
    })
});

router.put('/:id',  (req, res) => {
    res.json({
        msg: 'Put Api'
    })
});

router.delete('/:id',  (req, res) => {
    res.json({
        msg: 'Delete Api'
    })
});

router.patch('/',  (req, res) => {
    res.json({
        msg: 'Patch Api'
    })
});

module.exports = router;