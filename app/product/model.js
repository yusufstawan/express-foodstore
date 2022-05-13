const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const productSchema = Schema({
  name: {
    type: String,
    minLength: [3, 'Panjang nama makanan minimal 3 karakter'],
    maxLength: [255, 'Panjang nama makanan maksimal 255 karakter'],
    required: [true, 'Nama produk harus diisi'],
  }
})
