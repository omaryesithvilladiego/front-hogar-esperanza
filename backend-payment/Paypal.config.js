// server/paypalConfig.js
const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'live', // Cambia a 'live' en producción
  client_id: 'AcZ7t29pQqAMSrqv2YJemLPBbrEr7JvQG1BGSpXIcjm7FmaZm3_y550PPo2skhvz4Iu9E49u-lw4pamP',
  client_secret: 'EPM6tT-aPeJFZ_biz7n81CPa0zLrFGCqDtTb1jiIU6nA9tYE2ytqM_qUMUs1LWrPq0ZDbywoEBt1UkHs'
});

module.exports = paypal;
