import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoComponent } from './injecao.component';

describe('InjecaoComponent', () => {
  let component: InjecaoComponent;
  let fixture: ComponentFixture<InjecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
