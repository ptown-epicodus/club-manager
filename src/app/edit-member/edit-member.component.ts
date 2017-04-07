import { Component, Input, OnInit } from '@angular/core';

import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  public memberName: string = 'player';
  public groupName: string = 'team';

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete) {
    if(confirm("Are you sure you want to delete this " + this.memberName + " from the " + this.groupName + "?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }

}
