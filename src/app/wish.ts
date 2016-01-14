import {Component} from 'angular2/core';


@Component({
  selector: 'wish-app',
  providers: [],
  templateUrl: 'app/wish.html',
  directives: [],
  pipes: []
})
export class WishApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
