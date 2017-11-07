import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneleComponent } from './panele.component';

describe('PaneleComponent', () => {
  let component: PaneleComponent;
  let fixture: ComponentFixture<PaneleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
