const routes = require('express').Router();

routes.use('/movies', require('./movies'))
routes.use('/wishlist', require('./wishlist'))
routes.use('/', require('./swagger'));



module.exports = routes;