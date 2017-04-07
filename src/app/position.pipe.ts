import { Pipe, PipeTransform } from '@angular/core';

import { Member } from './member.model';

@Pipe({
  name: 'position',
  pure: true
})
export class PositionPipe implements PipeTransform {

  transform(input: Member[], filterOption: string): Member[] {
    switch(filterOption) {
      case 'all':
        return input;
      case 'forward':
      case 'guard':
      case 'point guard':
      case 'center':
      case 'forward-center':
      case 'swingman':
        return input.filter(function(member: Member) {
          return member.position == filterOption;
        });
      default:
        return input;
    }
  }

}
