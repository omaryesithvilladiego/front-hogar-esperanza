// server/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { createPayment, executePayment } = require('../controllers/paymentcontroller');

router.post('/create-payment', createPayment);
router.get('/execute-payment', executePayment);

module.exports = router;
