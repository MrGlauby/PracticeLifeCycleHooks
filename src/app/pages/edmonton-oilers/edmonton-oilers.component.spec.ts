import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmontonOilersComponent } from './edmonton-oilers.component';

describe('EdmontonOilersComponent', () => {
  let component: EdmontonOilersComponent;
  let fixture: ComponentFixture<EdmontonOilersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdmontonOilersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdmontonOilersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
