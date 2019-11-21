const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  organisation: String,
  city: String,
  brand: String,
  director: String,
  inn: Number,
  kpp: Number,
  ogrn: Number,
  bank: Number,
  bik: Number,
  corAccount: Number,
  raschetAccount: Number,
  companyAddress: String,
  deliveryAddress: String,
  phone: Number,
  companyEmail: String,
  operatorPhone: Number,
  operatorEmail: String,
});


module.exports = mongoose.model('Company', userSchema);