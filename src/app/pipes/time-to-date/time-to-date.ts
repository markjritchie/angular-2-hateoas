import {Pipe} from 'angular2/core';
import {Person} from '../.././interfaces/person'

@Pipe({
  name: 'TimeToDate'
})
export class TimeToDate {

  transform(array: Array<Person>, args: string): Array<Person> {
        if (typeof args[0] === "undefined") {
            return array;
        }

        let direction   = args[0][0];
        let column      = args[0].slice(1);

      alert(array);
      //alert(JSON.stringify(array));

        array.sort((a: any, b: any) => {

//            let left    = Number(new Date(a[column]));
//            let right   = Number(new Date(b[column]));
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
