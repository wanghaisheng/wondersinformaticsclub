var multiline = require('multiline');
// static page
// About
exports.about = function (req, res, next) {
  res.render('static/about', {
    pageTitle: '关于我们'
  });
};

// FAQ
exports.faq = function (req, res, next) {
  res.render('static/faq');
};

exports.manual = function (req, res) {
  res.render('static/manual');
};

exports.robots = function (req, res, next) {
  res.type('text/plain');
  res.send(multiline(function () {;
/*
# See http://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
#
# To ban all spiders from the entire site uncomment the next two lines:
# User-Agent: *
# Disallow: /
*/
  }));
};

exports.products = function (req, res, next) {
  res.render('static/products');
};

exports.resources = function (req, res, next) {
  res.render('static/resources');
};

exports.groups = function (req, res, next) {
  res.render('static/groups');
};