'use strict'

const express = require('express');
const controlador = require('../controladores/product');
const userCtrl = require('../controladores/user');
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/product', (controlador.getProducts));
api.get('/product/:productId', (controlador.getProduct));
api.post('/product', (controlador.saveProduct));
api.put('/product/:productId', (controlador.updateProduct));
api.delete('/product/:productId', (controlador.deleteProduct));
api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);
api.get('/private', auth,  function(req, res){
  res.status(200).send({message: 'tienes acceso'})
})

module.exports = api;
