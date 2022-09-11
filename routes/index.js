const routes = require ('express').Router();

routes.get('/', (req, res) => {
    res.send('Tristin Parker - Fall 2022 CSE 341 Course Week 1 Test!!');
});

module.exports=routes;