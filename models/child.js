const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fulfillmentSchema = new Schema({
    phone: {
        type: Number,
        pattern: /^(\+0?1\s?)?\(?\d{3}\d{3}\d{4}/,
        max: 19999999999,
        required: true,
    },
    details: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    userName: String,
}, {
    timestamps: true
});
  
const childSchema = new Schema({
    date: {
        type: Date,
        min: function() {
            let today = new Date().toLocaleDateString('en-US', {timeZone: 'UTC'});
            return today;
        },
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    numOfKids:{
        type: Number,
        min: 1,
        required: true,
    },
    namesAgesOfKids: {
        type: String,
        required: true,
    },
    specialInstructions: String,
    fulfilled: [fulfillmentSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    userName: String,
}, {
    timestamps: true
});

module.exports = mongoose.model("Child", childSchema);