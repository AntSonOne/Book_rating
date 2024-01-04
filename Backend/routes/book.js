const express = require('express');
const auth = require('../middleware/auth');
const bookCtrl = require('../controllers/book');
const router = express.Router();


router.post('/', auth, bookCtrl.createBook);

router.get('/:id', auth, bookCtrl.getOneBook);

router.put('/:id', auth, bookCtrl.modifyBook);

router.delete('/:id', auth, bookCtrl.deleteBook);

router.get('/', auth, bookCtrl.getAllBooks);

module.exports = router;