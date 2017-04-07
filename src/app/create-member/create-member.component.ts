import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css'],
  providers: [MemberService]
})
export class CreateMemberComponent implements OnInit {
  public memberName: string = 'member';
  public groupName: string = 'club';

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
  }

  submitForm(name: string) {
    let newMember: Member = new Member(name);
    this.memberService.addMember(newMember);
  }

}
