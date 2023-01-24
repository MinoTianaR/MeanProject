const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    }
})

const Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;