import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryModuleComponent } from './summary-module.component';

describe('SummaryModuleComponent', () => {
  let component: SummaryModuleComponent;
  let fixture: ComponentFixture<SummaryModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
