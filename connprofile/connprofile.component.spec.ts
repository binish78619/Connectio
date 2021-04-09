import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnprofileComponent } from './connprofile.component';

describe('ConnprofileComponent', () => {
  let component: ConnprofileComponent;
  let fixture: ComponentFixture<ConnprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
