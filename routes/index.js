const routes = require ('express').Router();

routes.use('/contacts',require('./contacts'))
routes.use('/',(req, res) => {
    res.send('Tristin Parker - Base site without a redirect towards contacts.');
});

module.exports=routes;