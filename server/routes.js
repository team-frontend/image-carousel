const express = require('express');
const images = require('./images');
const house = require('./house');

const routerImages = express.Router();
const routerHome = express.Router();

routerImages.post('/images', images.getById);
routerImages.get('/images/:image', images.getById);
routerImages.patch('/images/:image', images.updateById);
routerImages.delete('/images/:image', images.deleteById);

routerHome.post('/images/houses/:house', house.postByHouseId);
routerHome.get('/images/houses/:house', house.getByHouseId);
routerHome.patch('/images/houses/:house', house.updateByHouseId);
routerHome.delete('/images/houses/:house', house.deleteByHouseId);

module.exports = { routerImages, routerHome };
