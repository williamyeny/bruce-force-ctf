const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {
  //req.body.author = req.user._id;
  req.body.author = req.query.user_id || req.user._id;
  req.body.store = req.params.id;
  const newReview = new Review(req.body);
  await newReview.save();
  req.flash('success', 'Review Saved!');
  res.redirect('back');
};

//The way to hijack a review is to have a postman post request:
//example:
//localhost:7777/reviews/1?user_id=2
//req.body: x-www-form: text : hijack!! ; rating: 5
