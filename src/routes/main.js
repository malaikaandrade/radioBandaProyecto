// ************ Require's ************
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// ************ Controller Require ************
let mainController = require('../controllers/mainController');

// ********** Rutas ***********
//get home page 
router.get('/', mainController.index);
router.get('/talleres', mainController.talleresIndex);
router.get('/tallerDanza', mainController.tallerDanza);
router.get('/tallerCapoeira', mainController.tallerCapoeira);
router.get('/tallerPercusiones', mainController.tallerPercusiones);
router.get('/memorial', mainController.memorial);
router.get('/programacion', mainController.programacion);

// Acá exportamos el resultado
module.exports = router;