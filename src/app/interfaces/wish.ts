import {Person} from './person'

export interface Wish {
    description: string;
    price: number;
    buyer: Person;
    uri: string;
}