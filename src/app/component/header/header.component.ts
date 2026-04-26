import { Component,Input,OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  toggleChat: boolean = true;
  toggleSingle: boolean = true;
  decryptedInfoUser: string = '';
  orgCode: string = '';
  protal: string = '';
  userSecurityDetails: any;
  allCompany: any;
  @Input() headerTitle: string = "";
  childData: string = "";

  constructor(
    route: ActivatedRoute,
    private router: Router,
  ) {
    const userMenu = route.snapshot.data;
    
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.childData = this.headerTitle;
    console.log(this.childData, "xxxxxxxxxxxxxxxxxxx", this.headerTitle);
  }
  logout() {
  }

  getAllCompany() {
  }

  togglechatbar() {
    this.toggleChat = !this.toggleChat;
  }
  singleChatWindow() {
    this.toggleSingle = !this.toggleSingle;
  }
}
