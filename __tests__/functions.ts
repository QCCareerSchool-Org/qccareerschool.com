import { fakerEN as faker } from '@faker-js/faker';

import * as functions from '../src/functions';

describe('example', () => {
  it('should work', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('general library functions', () => {

  describe('isCallingCode44', () => {
    const func = functions.isCallingCode44;

    it('should exist', () => {
      expect(func).not.toBeUndefined();
    });

    it('should return a boolean', () => {
      const countryCode = faker.location.countryCode();
      expect(typeof func(countryCode)).toBe('boolean');
    });

    [ 'GB', 'IM', 'GG', 'JE' ].forEach(countryCode => {
      test(`should return true for country code ${countryCode}`, () => {
        expect(func(countryCode)).toBe(true);
      });
    });

    test(`should return false for any other country code`, () => {
      expect(func('CA')).toBe(false);
    });
  });

  describe('isCallingCode61', () => {
    test('should exist', () => {
      expect(functions.isCallingCode61).not.toBeUndefined();
    });

    [ 'AU', 'CX', 'CC' ].forEach(countryCode => {
      test(`should return true for country code ${countryCode}`, () => {
        expect(functions.isCallingCode61(countryCode)).toBe(true);
      });
    });

    test(`should return false for any other country code`, () => {
      expect(functions.isCallingCode61('CA')).toBe(false);
    });
  });

  describe('isCallingCode64', () => {
    test('should exist', () => {
      expect(functions.isCallingCode64).not.toBeUndefined();
    });

    [ 'NZ', 'PN' ].forEach(countryCode => {
      test(`should return true for country code ${countryCode}`, () => {
        expect(functions.isCallingCode64(countryCode)).toBe(true);
      });
    });

    test(`should return false for any other country code`, () => {
      expect(functions.isCallingCode64('CA')).toBe(false);
    });
  });

  describe('isCallingCode1', () => {
    test('should exist', () => {
      expect(functions.isCallingCode64).not.toBeUndefined();
    });

    [ 'CA', 'US', 'AG', 'AI', 'AS', 'BB', 'BM', 'BS', 'DM', 'DO', 'GD', 'GU', 'JM', 'KN', 'KY', 'LC', 'MP', 'MS', 'PR', 'SX', 'TC', 'TT', 'VC', 'VG', 'VI', 'UM' ].forEach(countryCode => {
      test(`should return true for country code ${countryCode}`, () => {
        expect(functions.isCallingCode1(countryCode)).toBe(true);
      });
    });

    test(`should return false for any other country code`, () => {
      expect(functions.isCallingCode1('DE')).toBe(false);
    });
  });

});
