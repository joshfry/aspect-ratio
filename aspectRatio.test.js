const {
  getGcd,
  getFraction,
  getAspectRatioString,
  getAspectRatioPercentage,
} = require('./aspectRatio');

describe('getGcd', () => {
  it('should return the greatest common denominator', () => {
    expect(getGcd(8, 8)).toBe(8);
    expect(getGcd(8, 10)).toBe(2);
    expect(getGcd(10, 20)).toBe(10);
  });
});

describe('getFraction', () => {
  it('should return an object containing nominator and denominator values', () => {
    expect(getFraction(8, 8).numerator).toBe(1);
    expect(getFraction(8, 8).denominator).toBe(1);
    expect(getFraction(8, 10).numerator).toBe(4);
    expect(getFraction(8, 10).denominator).toBe(5);
    expect(getFraction(10, 20).numerator).toBe(1);
    expect(getFraction(10, 20).denominator).toBe(2);
  });
});

describe('getAspectRatioString', () => {
  it('should return an object containing nominator and denominator values', () => {
    expect(getAspectRatioString(8, 8)).toBe('1:1');
    expect(getAspectRatioString(8, 10)).toBe('4:5');
    expect(getAspectRatioString(10, 20)).toBe('1:2');
  });
});

describe('getAspectRatioPercentage', () => {
  it('should return a percentage based on widht and height', () => {
    expect(getAspectRatioPercentage(8, 8)).toBe(1);
    expect(getAspectRatioPercentage(8, 10)).toBe(0.8);
    expect(getAspectRatioPercentage(10, 20)).toBe(0.5);
  });
});
