import { Component } from '@angular/core';
import { Friend } from '../FriendModel';
import { FriendService } from '../friend.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent {
  constructor(private friendService: FriendService,
    private router: Router) { }
  onSubmit(friendForm: NgForm) {
    const newFriend = new Friend(Date.now(), friendForm.value.name, new Date(friendForm.value.birthday));
    this.friendService.addFriend(newFriend);
    friendForm.reset();
    this.router.navigate(['/friends']);

    alert("amigo adicionado com sucesso")
  }
}
