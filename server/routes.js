const express = require('express');
const images = require('./images');
const home = require('./home');

const routerImages = express.Router();
const routerHome = express.Router();

routerImages.post('/images', images.get);
routerImages.get('/images/:image', images.post);
routerImages.patch('/images/:image', images.update);
routerImages.delete('/images/:image', images.delete);

routerHome.post('/images/homes/:home', home.postByHomeId);
routerHome.get('/images/homes/:home', home.getByHomeId);
routerHome.patch('/images/homes/:home', home.updateByHomeId);
routerHome.delete('/images/homes/:home', home.deleteByHomeId);

module.exports = { routerImages, routerHome };
