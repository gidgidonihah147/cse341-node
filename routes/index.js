const routes = require ('express').Router();

routes.get('/', (req, res) => {
    res.send('Tristin Parker');
});

module.exports=routes;