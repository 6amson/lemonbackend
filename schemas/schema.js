const mongoose = require('mongoose');


const riskObjectSchema = new mongoose.Schema({
    riskScore: {
        type: Number,
        required: true,
        unique: true,
    },
    riskOptions:
     {
        nigerianStock: {
            type: Number,
            required: true,
        },
        foreignStock: {
            type: Number,
            required: true,
        },
        techStock: {
            type: Number,
            required: true,
        },
        emergingStock: {
            type: Number,
            required: true,
        },
        nigerianBond: {
            type: Number,
            required: true,
        },
        foreignBond: {
            type: Number,
            required: true,
        },
        commodities: {
            type: Number,
            required: true,
        },
        realEstate: {
            type: Number,
            required: true,
        },
        tBills: {
            type: Number,
            required: true,
        },
        alternative: {
            type: Number,
            required: true,
        },
    },
});


const RiskObject = mongoose.model('riskObject', riskObjectSchema);

module.exports = RiskObject;