import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {
  public members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  memberClicked(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
