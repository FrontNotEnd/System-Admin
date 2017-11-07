import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUiComponent } from './all-ui.component';

describe('AllUiComponent', () => {
  let component: AllUiComponent;
  let fixture: ComponentFixture<AllUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
