// server/controllers/paymentController.js
const paypal = require('../Paypal.config');
const Donation = require('../models/donationmodel');
const sendDonationReceipt = require('../nodemailerConfig');

const createPayment = async (req, res) => {
  const { name, phone, amount, message } = req.body;

  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    },
    transactions: [{
      item_list: {
        items: [{
          name: 'Donation',
          sku: 'donation',
          price: amount,
          currency: 'USD',
          quantity: 1
        }]
      },
      amount: {
        currency: 'USD',
        total: amount
      },
      description: 'Donation for the foundation.'
    }]
  };

  try {
    const payment = await new Promise((resolve, reject) => {
      paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });
    res.json(payment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const executePayment = async (req, res) => {
  const { paymentId, PayerID } = req.query;

  const execute_payment_json = {
    payer_id: PayerID,
    transactions: [{
      amount: {
        currency: 'USD',
        total: '10.00' // Ajusta el total si es necesario
      }
    }]
  };

  try {
    const payment = await new Promise((resolve, reject) => {
      paypal.payment.execute(paymentId, execute_payment_json, async (error, payment) => {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });

    // Guarda la donación en la base de datos
    const newDonation = new Donation({
      name: payment.payer.payer_info.first_name,
      phone: payment.payer.payer_info.phone, // Cambia según los datos disponibles
      amount: payment.transactions[0].amount.total,
      message: 'Donation completed successfully!'
    });
    await newDonation.save();

    // Envía el correo de confirmación
    await sendDonationReceipt(
      payment.payer.payer_info.email,
      payment.transactions[0].amount.total,
      'Gracias por tu apoyo.'
    );

    res.json(payment);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createPayment, executePayment };
