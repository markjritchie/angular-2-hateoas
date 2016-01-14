import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {WishApp} from '../app/wish';

beforeEachProviders(() => [WishApp]);

describe('App: Wish', () => {
  it('should have the `defaultMeaning` as 42', inject([WishApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([WishApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

