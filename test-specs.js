// const size = '2';
// const type = 'aparment';
// const city = 'Overland Park';

//console.log(homeCriteria(size, type, city))

// console.log(`test-specs.js`)
// console.log(typeof size === 'string');
// console.log(typeof homeCriteria === 'function');
// console.log(typeof homeCriteria() === 'string');

describe('homeCriteria', function() {
   it('is a function', function() {
      expect(typeof homeCriteria).toBe('function');
   })
   it('returns a string', function() {
      expect(typeof homeCriteria()).toBe('string');
   })
})