import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBoardPageComponent } from './client.board.page.component';

describe('ClientBoardPageComponent', () => {
  let component: ClientBoardPageComponent;
  let fixture: ComponentFixture<ClientBoardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBoardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
