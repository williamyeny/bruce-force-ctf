const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const autoIncrement = require('mongoose-auto-increment');

const reviewSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  author: {
    //type: mongoose.Schema.ObjectId,
    type:Number,
    ref: 'User',
    required: 'You must supply an author!'
  },
  store: {
    //type: mongoose.Schema.ObjectId,
    type:Number,
    ref: 'Store',
    required: 'You must supply a store!'
  },
  text: {
    type: String,
    required: 'Your review must have text!'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
});


reviewSchema.plugin(autoIncrement.plugin, 'Review');

function autopopulate(next) {
  this.populate('author');
  next();
}

reviewSchema.pre('find', autopopulate);
reviewSchema.pre('findOne', autopopulate);
//autoIncrement.initialize(mongoose.connection);

module.exports = mongoose.model('Review', reviewSchema);
