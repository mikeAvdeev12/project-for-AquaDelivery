const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  organisation: String,
  brand: String,
  director: String,
  inn: Number,
  kpp: Number,
  ogrn: Number,
  bankName: String,
  bik: Number,
  corAccount: Number,
  raschetAccount: Number,
  companyAddress: String,
  deliveryAddress: String,
  phone: Number,
  companyEmail: String,
  operatorPhone: Number,
  operatorEmail: String,
  contractIsSigned:Boolean,
  plan:String,
  invoices: Array,
});


module.exports = mongoose.model('User', userSchema);
// module.exports = userSchema;