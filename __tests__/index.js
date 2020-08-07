const evaluate = require('..');
require('../index');

test('AND COMPLETE', () => {
  expect(evaluate(['AND', 'A', 'B'], { A: '', B: '' })).toEqual(true);
});

test('AND MISSING FIELD', () => {
  expect(evaluate(['AND', 'A', 'B'], { A: '' })).toEqual(false);
});

test('AND MISSING ALL FIELDS', () => {
  expect(evaluate(['AND', 'A', 'B'], {})).toEqual(false);
});

test('OR COMPLETE', () => {
  expect(evaluate(['OR', 'A', 'B'], { A: '', B: '' })).toEqual(true);
});

test('OR MISSING FIELD', () => {
  expect(evaluate(['OR', 'A', 'B'], { A: '' })).toEqual(true);
});

test('OR MISSING ALL FIELDS', () => {
  expect(evaluate(['OR', 'A', 'B'], {})).toEqual(false);
});

test('XOR COMPLETE', () => {
  expect(evaluate(['XOR', 'A', 'B'], { A: '', B: '' })).toEqual(false);
});

test('XOR MISSING FIELD', () => {
  expect(evaluate(['XOR', 'A', 'B'], { A: '' })).toEqual(true);
});

test('XOR MISSING ALL FIELDS', () => {
  expect(evaluate(['XOR', 'A', 'B'], {})).toEqual(false);
});

test('NAND COMPLETE', () => {
  expect(evaluate(['NAND', 'A', 'B'], { A: '', B: '' })).toEqual(false);
});

test('NAND MISSING FIELD', () => {
  expect(evaluate(['NAND', 'A', 'B'], { A: '' })).toEqual(true);
});

test('NAND MISSING ALL FIELDS', () => {
  expect(evaluate(['NAND', 'A', 'B'], {})).toEqual(true);
});

test('NOR COMPLETE', () => {
  expect(evaluate(['NOR', 'A', 'B'], { A: '', B: '' })).toEqual(false);
});

test('NOR MISSING FIELD', () => {
  expect(evaluate(['NOR', 'A', 'B'], { A: '' })).toEqual(false);
});

test('NOR MISSING ALL FIELDS', () => {
  expect(evaluate(['NOR', 'A', 'B'], {})).toEqual(true);
});

test('XNOR COMPLETE', () => {
  expect(evaluate(['XNOR', 'A', 'B'], { A: '', B: '' })).toEqual(true);
});

test('XNOR MISSING FIELD', () => {
  expect(evaluate(['XNOR', 'A', 'B'], { A: '' })).toEqual(false);
});

test('XNOR MISSING ALL FIELDS', () => {
  expect(evaluate(['XNOR', 'A', 'B'], {})).toEqual(true);
});
