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

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember) {
    let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
      name: localUpdatedMember.name
    });
  }

  deleteMember(localMemberToDelete) {
    let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
