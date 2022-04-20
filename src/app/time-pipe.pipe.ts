import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "TimePipe"
})
export class CustomeTimePipe implements PipeTransform{
  transform(time) : String{
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];
    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? ' AM' : ' PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  }
}