'use strict';

// Require our linked list implementation
const multiBracketValidation = require('../multi-bracket-validation.js');



describe('queue with stacks', () => {
  it('should return a boolean representing whether or not the brackets in the string are balanced', () => {
    

    expect(multiBracketValidation('{}')).toEqual(true);
    expect(multiBracketValidation('{}()[]')).toEqual(true);
    expect(multiBracketValidation('{{{}}')).toEqual(false);
    expect(multiBracketValidation('}])')).toEqual(false);


  });



});
