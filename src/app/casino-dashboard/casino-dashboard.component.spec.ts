import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoDashboardComponent } from './casino-dashboard.component';

describe('CasinoDashboardComponent', () => {
  let component: CasinoDashboardComponent;
  let fixture: ComponentFixture<CasinoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasinoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
