const routes = require('express').Router();

routes.use('/contacts', require('./contacts'))
routes.use('/', require('./swagger'));
routes.use('/',(req, res) => {
    res.send('Tristin Parker - Base site without a redirect towards contacts or api-docs.');
});


module.exports = routes;