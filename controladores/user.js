'use strict'

const User = require('../modelos/user');
const servicios = require('../servicios')

function signUp(req, res){
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  })

  user.save((err) =>{
    if(err) res.status(500).send({ message: `Error al crear usuario ${err}`});

    return res.status(200).send({ token: servicios.createToken(user) });
  })
}

function signIn(){
  user.find({email: req.body.email}, (err, user) =>{
    if(err) return res.status(500).send({message: `Error al registrarse ${err}`});
    if(!user) return res.status(404).send({message: 'No existe el usuario'});

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}
