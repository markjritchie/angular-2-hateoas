import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {WishlistApp} from '../app/wishlist';

beforeEachProviders(() => [WishlistApp]);

describe('App: Wishlist', () => {
  it('should have the `defaultMeaning` as 42', inject([WishlistApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([WishlistApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

