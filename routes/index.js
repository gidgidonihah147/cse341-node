const routes = require('express').Router();

routes.use('/contacts', require('./contacts'))
routes.use('/', require('./swagger'));
routes.use('/',(req, res) => {
    res.send('Tristin Parker - Base site without a redirect towards http://localhost:3000/contacts or http://localhost:3000/api-docs.');
});


module.exports = routes;