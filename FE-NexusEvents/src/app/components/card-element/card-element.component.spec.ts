import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardElementComponent } from './card-element.component';

describe('CardElementComponent', () => {
  let component: CardElementComponent;
  let fixture: ComponentFixture<CardElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
