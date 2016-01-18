import {Component, OnInit} from 'angular2/core';
import {WishlistItem} from  "./components/wishlist-item/wishlist-item";
import {Wish} from './interfaces/wish'
import {Person} from './interfaces/person'
import {DataService} from './services/data-service/data-service'
import {TimeToDate} from './pipes/time-to-date/time-to-date'
//import 'angular-material';

@Component({
  selector: 'wishlist-app',
  providers: [DataService /*, "ngMaterial" */],
  styleUrls: ['app/wishlist.css'],
  templateUrl: 'app/wishlist.html',
  directives: [WishlistItem],
  pipes: [TimeToDate]
})
export class WishlistApp implements OnInit {
    public selectedWish: Wish;
    public wishes:Wish[];
    public people:Person[];

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.getWishes();
        this.getPeople();
    }

    getWishes() {
        this._dataService.getWishes().then(wishes => this.wishes = wishes);
    }
    
    getPeople() {
        this._dataService.getPeople().then(people => this.people = this.sortPeople(people));
    }

    //people: Array<Person> = [new Person{"Mark", new Date(1968,4,22)}];
    //people = Person[] = { name: "Mark", dob: new Date(1968, 4, 22)};
  
    onSelect(wish: Wish) { this.selectedWish = wish; }
    
    sortPeople(array: Array<Person>): Array<Person> {

        let direction   = "+";
        let column      = "dob";

        array.sort((a: any, b: any) => {

            let left    = Number(this.toNextDate(a[column]));
            let right   = Number(this.toNextDate(b[column]));

            return (direction === "-") ? right - left : left - right;
        });

        return array;
    }
    
    toNextDate(date: Date){
        let today = new Date();
        let year = today.getFullYear();
        let nextDate = new Date(year, date.getMonth(), date.getDate());
        if(today > nextDate)
            nextDate.setFullYear(year + 1);
        window.console.log(nextDate);
        return nextDate;
    }
}


