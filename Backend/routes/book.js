const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const bookCtrl = require('../controllers/book');

router.get('/', bookCtrl.getAllBooks);

router.get('/bestrating', bookCtrl.getBestRatedBooks);

router.post('/', auth, multer.upload, multer.optimize, bookCtrl.createBook);

router.get('/:id', bookCtrl.getOneBook);

router.put('/:id', auth, multer.upload, multer.optimize, bookCtrl.modifyBook);

router.delete('/:id', auth, bookCtrl.deleteBook);

router.post('/:id/rating', auth, bookCtrl.rateOneBook);

module.exports = router;