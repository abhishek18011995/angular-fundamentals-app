import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let duration: string;
    switch (value) {
      case 1: {
        duration = 'Half Hour';
        break;
      }
      case 2: {
        duration = '1 Hour';
        break;
      }
      case 3: {
        duration = 'Half Day';
        break;
      }
      case 4: {
        duration = 'Full Day';
        break;
      }
      default: {
        duration = null;
      }
    }
    return duration;
  }

}
