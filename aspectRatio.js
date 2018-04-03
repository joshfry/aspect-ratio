// get the greatest common denominator
const getGcd = (a, b) => {
  if (!b) return a;
  return getGcd(b, a % b);
};

// get a fraction returned as an object
const getFraction = (w, h) => {
  const gcd = getGcd(w, h);
  const numerator = w / gcd;
  const denominator = h / gcd;
  return { numerator, denominator };
};

// get the aspect ratio as a string
const getAspectRatioString = (w, h) => {
  const fr = getFraction(w, h);
  return `${fr.numerator}:${fr.denominator}`;
};

// get the aspect ratio percentage
const getAspectRatioPercentage = (w, h) => {
  const fr = getFraction(w, h);
  // small first to produce a %
  if (fr.numerator > fr.denominator) return fr.denominator / fr.numerator;
  return fr.numerator / fr.denominator;
};

exports.getGcd = getGcd;
exports.getFraction = getFraction;
exports.getAspectRatioString = getAspectRatioString;
exports.getAspectRatioPercentage = getAspectRatioPercentage;
