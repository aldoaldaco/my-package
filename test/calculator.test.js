const calculator = require('../libs/calculator');
const faker = require('faker');

describe('Calculator Sum Suite', () => {
  it('Check for positive numbers', () => {
    expect(calculator.sum(2,2)).toBe(4);
  });
  it('Check for negative numbers', () => {
    expect(calculator.sum(-22,-12)).toBe(-34);
  });
  it('Check when there are type cohersion', () => {
    expect(calculator.sum()).toEqual('Error');
  });
});

describe('Calculator Mul Suite', () => {
  test('Check the parameters are numbers', () => {
    expect(calculator.mul(2,4)).toEqual(8);
  });
  test('Check when the function has not parameters', () => {
    expect(calculator.mul()).toEqual('Error');
  });
});

describe('Division Suite', () => {
  test('No parameters given', () => {
    expect(calculator.div()).toEqual('Error');
  });
  test('Parameters are Numbers', () => {
    const fakeA = faker.random.number();
    const fakeB = faker.random.number();
    expect(calculator.div(fakeA, fakeB)).toEqual(fakeA/fakeB);
  });
  test('Second Parameter is 0', () => {
    const fakeA = faker.random.number();
    expect(calculator.div(fakeA, 0)).toEqual('No hago cosas de derivadas');
  });
});


