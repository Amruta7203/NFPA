import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSprinklerSystemComponent } from './fire-sprinkler-system.component';

describe('FireSprinklerSystemComponent', () => {
  let component: FireSprinklerSystemComponent;
  let fixture: ComponentFixture<FireSprinklerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireSprinklerSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireSprinklerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
