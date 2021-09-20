'use strict';

const cipherExercise = require('.');

const simple = {
  message: 'abc',
  shifted: 'cde',
  shifted3: 'def',
  shifted4: 'efg'
};

const tricky = {
  message: 'xyz',
  shifted: 'zab'
};

const words = {
  message: 'abc abc',
  shifted: 'cde cde'
};

const complex = {
  message: 'my very secret message',
  shifted: 'oa xgta ugetgv oguucig'
};

describe('cipher-exercise', () => {
  

  const { decrypt, encrypt } = cipherExercise || {};


  it('is an object', () => expect(typeof cipherExercise).toBe('object'));
  it('has a decrypt property', () => expect(decrypt).toBeDefined());
  it('has a encrypt property', () => expect(encrypt).toBeDefined());

  describe('encrypt', () => {
    it('is a function', () => expect(typeof encrypt).toBe('function'));
    it('that takes 1 parameter', () => expect(encrypt).toHaveLength(1));

    describe('when called', () => {
      let result;

      describe('with a simple message', () => {
        beforeEach(() => {
          result = encrypt(simple.message, 2);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2', () => expect(result).toBe(simple.shifted));
      });

      describe('with a tricky message', () => {
        beforeEach(() => {
          result = encrypt(tricky.message);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2 and wrap', () => expect(result).toBe(tricky.shifted));
      });

      describe('with a multi-word message', () => {
        beforeEach(() => {
          result = encrypt(words.message);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters (but NOT spaces) are shifted by 2', () => expect(result).toBe(words.shifted));
      });

      describe('with a complex message', () => {
        beforeEach(() => {
          result = encrypt(complex.message);
        });

        it('returns a string', () => expect(typeof result).toBe('string'));
        it('in which the letters are shifted by 2', () => expect(result).toBe(complex.shifted));
      });
    });
  });

  describe('decrypt', () => {
    it('is a function', () => expect(typeof decrypt).toBe('function'));
    it('that takes 1 parameter', () => expect(decrypt).toHaveLength(1));

    describe('when called, reverses the effects of encrypt', () => {
      let result;

      describe('with a simple message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(simple.message)
          );
        });

        it('restores the message', () => expect(result).toBe(simple.message));
      });

      describe('with a tricky message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(tricky.message)
          );
        });

        it('restores the message', () => expect(result).toBe(tricky.message));
      });

      describe('with a multi-word message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(words.message)
          );
        });

        it('restores the message', () => expect(result).toBe(words.message));
      });

      describe('with a complex message', () => {
        beforeEach(() => {
          result = decrypt(
            encrypt(complex.message)
          );
        });

        it('restores the message', () => expect(result).toBe(complex.message));
      });

    });
  });

  //Tests for the interface - probably mock user input for shifting char
  describe('shift by 3 characters', () => {

    let result;    
    result = encrypt(simple.message, 3)
  
    it('shifts characters by 3', () => expect(result).toBe(simple.shifted3));
  });

  describe('shift by 4 characters', () => {

    let result;    
    result = encrypt(simple.message, 4)
  
    it('shifts characters by 4', () => expect(result).toBe(simple.shifted4));
  });  

  describe('unshift by 3 characters', () => {

    let result;    
    result = decrypt(simple.shifted3, 3)
  
    it('unshifts characters by 3', () => expect(result).toBe(simple.message));
  });  

  describe('unshift by 4 characters', () => {

    let result;    
    result = decrypt(simple.shifted4, 4)
  
    it('unshifts characters by 4', () => expect(result).toBe(simple.message));
  }); 
});
