import {Component, Input} from 'angular2/core';
import {Person} from '../../interfaces/person'

@Component({
  selector: 'person-avatar',
  templateUrl: 'app/components/person-avatar/person-avatar.html',
  styleUrls: ['app/components/person-avatar/person-avatar.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class PersonAvatar {
  @Input() person: Person;
  constructor() {}

}
