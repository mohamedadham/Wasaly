const mongoose = require('mongoose')

const rate = new mongoose.Schema({
    rating: {
        type: Number,
        min: [1, 'Minimum rating is 1'],
        max: [5, 'Maximum rating is 5'],
        default: 1
    },
    reviews: [{
        type: String,
        default: null
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User'
    }
});

const serviceOwnerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
    distance: { type: Number, required: true },
    region: { type: Number, required: true },
    transportation: { type: String, required: true},
    rating: {type: Number, default: 0},
    rates: [rate],
    productOwner: { 
        status: { 
            type: String,  
            enum: ['Not connected', 'Pending', 'Connected', 'Rejected'], 
            default: "Not connected"
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
    }
})



module.exports= mongoose.model('ServiceOwner', serviceOwnerSchema)