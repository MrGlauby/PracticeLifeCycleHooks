import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorontoMapleLeafsComponent } from './toronto-maple-leafs.component';

describe('TorontoMapleLeafsComponent', () => {
  let component: TorontoMapleLeafsComponent;
  let fixture: ComponentFixture<TorontoMapleLeafsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorontoMapleLeafsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorontoMapleLeafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
