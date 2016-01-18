import {Component, Input} from 'angular2/core';
import {Wish} from '../../interfaces/wish'


@Component({
  selector: 'wishlist-item',
    //template: '<h1>Found it</h1>ssssss',
  templateUrl: 'app/components/wishlist-item/wishlist-item.html',
/*  styleUrls: ['app/components/wishlist-item/wishlist-item.css'],
  providers: [],
  directives: [],
  pipes: []*/
})
export class WishlistItem {
    @Input() wish: Wish;

  constructor() {}

}
