import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampaBayLightningComponent } from './tampa-bay-lightning.component';

describe('TampaBayLightningComponent', () => {
  let component: TampaBayLightningComponent;
  let fixture: ComponentFixture<TampaBayLightningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TampaBayLightningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TampaBayLightningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
