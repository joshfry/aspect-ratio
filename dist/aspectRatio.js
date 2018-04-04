"use strict";

// get the greatest common denominator
var getGcd = function getGcd(a, b) {
  if (!b) return a;
  return getGcd(b, a % b);
};

// get a fraction returned as an object
var getFraction = function getFraction(w, h) {
  var gcd = getGcd(w, h);
  var numerator = w / gcd;
  var denominator = h / gcd;
  return { numerator: numerator, denominator: denominator };
};

// get the aspect ratio as a string
var getAspectRatioString = function getAspectRatioString(w, h) {
  var fr = getFraction(w, h);
  return fr.numerator + ":" + fr.denominator;
};

// get the aspect ratio percentage
var getAspectRatioPercentage = function getAspectRatioPercentage(w, h) {
  var fr = getFraction(w, h);
  // small first to produce a %
  if (fr.numerator > fr.denominator) return fr.denominator / fr.numerator;
  return fr.numerator / fr.denominator;
};

exports.getGcd = getGcd;
exports.getFraction = getFraction;
exports.getAspectRatioString = getAspectRatioString;
exports.getAspectRatioPercentage = getAspectRatioPercentage;