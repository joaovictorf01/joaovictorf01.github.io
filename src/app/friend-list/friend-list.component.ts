import { Component } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../FriendModel';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent {
  friends: Friend[] = [];
  welcomeMessage: string = 'Bem-vindo ao Niver App! Gerencie as datas de aniversário dos seus amigos aqui.';

  constructor(private friendService: FriendService) { }
  ngOnInit() {
    this.loadFriends();
  }

  loadFriends() {
    this.friends = this.friendService.getFriends();
  }
}
