const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fulfillmentSchema = new Schema({
    phone: {
        type: Number,
        pattern: /^(\+0?1\s?)?\(?\d{3}\d{3}\d{4}/,
        required: true,
    },
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
            // let day = String(today.getDate()).padStart(2, '0');
            // let month = String(today.getMonth() + 1).padStart(2, '0');
            // let year = today.getFullYear();
            // today = `${month}/${day}/${year}`;
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
    },
    userName: String,
}, {
    timestamps: true
});

module.exports = mongoose.model("Child", childSchema);