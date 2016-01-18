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
import {DataService} from './data-service';


describe('DataService Service', () => {

  beforeEachProviders(() => [DataService]);


  it('should ...', inject([DataService], (service:DataService) => {

  }));

});
