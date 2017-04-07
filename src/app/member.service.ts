import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Member } from './member.model';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = this.angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(id: string) {
    return this.angularFire.database.object('members/' + id);
  }
}
