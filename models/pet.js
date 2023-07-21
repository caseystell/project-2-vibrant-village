const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fulfillmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});
  
const petSchema = new Schema({
    petCare: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        min: function() {
            let today = new Date();
            let day = String(today.getDate()).padStart(2, '0');
            let month = String(today.getMonth() + 1).padStart(2, '0');
            let year = today.getFullYear();
            today = `${month}/${day}/${year}`;
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
    typeOfPets: {
        type: String,
        enum: ["Bird", "Cat", "Dog", "Fish", "Rabbit", "Rat"], // I'd really like the user to be able to select more than 1
        required: true,
    },
    numOfPets: {
        type: Number,
        min: 1,
        required: true,
    },
    namesAgesOfPets: {
        type: String,
        required: true,
    },
    specialInstructions: String,
    fulfilled: [fulfillmentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model("Pet", petSchema);