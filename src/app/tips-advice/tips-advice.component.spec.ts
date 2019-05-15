import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAdviceComponent } from './tips-advice.component';

describe('TipsAdviceComponent', () => {
  let component: TipsAdviceComponent;
  let fixture: ComponentFixture<TipsAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
