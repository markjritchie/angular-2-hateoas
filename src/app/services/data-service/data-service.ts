import {Wish} from '../../interfaces/wish';
import {WISHES} from './mocks/mock-wishes';
import {Injectable} from 'angular2/core';
import {PEOPLE} from './mocks/mock-people';


@Injectable()
export class DataService {

    constructor() { }
    getWishes() {
        return Promise.resolve(WISHES);
        //return [{ description: "Something great from the service", price: 12, buyer: null, uri: null }, { description: "Something even better", price: 15, buyer: null, uri: null }];
    }
    
     getPeople() {
        return Promise.resolve(PEOPLE);
        //return [{ description: "Something great from the service", price: 12, buyer: null, uri: null }, { description: "Something even better", price: 15, buyer: null, uri: null }];
    }

}
