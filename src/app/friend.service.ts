import { Injectable } from '@angular/core';
import { Friend } from './FriendModel';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor() { }

  private friends: Friend[] = [];
  addFriend(friend: Friend): void {
    this.friends.push(friend);
  }

  getFriends(): Friend[] {
    return this.friends;
  }

  getFriendById(id: number): Friend | undefined {
    return this.friends.find(friend => friend.id === id);
  }
}
