const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    },
    _brandId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    underReparation: {
        type: Boolean,
        default: true,
        required: true
    }
})

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;