var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://globalassets.starbucks.com/assets/0aec516c617c4df7904452542ab706b6.jpg',
    title: 'Latte',
    description: "Dark, rich espresso",
    price: 5.5
  }),
  new Product({
    imagePath: 'https://globalassets.starbucks.com/assets/b0525676a0194652be7f4993210b381a.jpg',
    title: 'Espresso',
    description: "Espresso Roast",
    price: 4.5
  }),
  new Product({
    imagePath: 'https://globalassets.starbucks.com/assets/7e2d6987b7404f13ab8eae0b2712dde9.jpg',
    title: 'Mocha',
    description: "Bittersweet Mocha",
    price: 7
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
