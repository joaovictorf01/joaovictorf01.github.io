import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendAddComponent } from './friend-add.component';

describe('FriendAddComponent', () => {
  let component: FriendAddComponent;
  let fixture: ComponentFixture<FriendAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendAddComponent]
    });
    fixture = TestBed.createComponent(FriendAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
