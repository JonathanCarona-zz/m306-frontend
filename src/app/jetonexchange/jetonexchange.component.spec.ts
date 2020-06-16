import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetonexchangeComponent } from './jetonexchange.component';

describe('JetonexchangeComponent', () => {
  let component: JetonexchangeComponent;
  let fixture: ComponentFixture<JetonexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetonexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetonexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
