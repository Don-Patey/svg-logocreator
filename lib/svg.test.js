
const Svg = require('../index')
const shapeObj = require('../index')
const shapeColor = require('../index')

test('svg shape  is properly generated)', () => {
    expect(Svg).toBe(shapeObj);
});

test('svg shape color is properly generated)', () => {
    expect(shapeColor).toBe(shapeObj)});