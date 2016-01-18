import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {WishlistRepository} from './wishlist-repository';


describe('WishlistRepository Service', () => {

  beforeEachProviders(() => [WishlistRepository]);


  it('should ...', inject([WishlistRepository], (service:WishlistRepository) => {

  }));

});
