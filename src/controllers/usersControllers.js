const path = require('path');

const controller = {
    login(req, res){
        res.sendFile(path.resolve(__dirname, '../views/login.html'));
    },
    register(req, res){
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    },
    product(req, res){
        res.sendFile(path.resolve(__dirname, '../views/product.html'))
    },
}
module.exports = controller;