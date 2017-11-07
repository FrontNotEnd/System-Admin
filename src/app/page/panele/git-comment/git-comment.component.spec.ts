import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCommentComponent } from './git-comment.component';

describe('GitCommentComponent', () => {
  let component: GitCommentComponent;
  let fixture: ComponentFixture<GitCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
