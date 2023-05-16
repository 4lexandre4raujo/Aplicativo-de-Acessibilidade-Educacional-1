import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailleTalkBoardPage } from './braille-talk-board.page';

describe('BrailleTalkBoardPage', () => {
  let component: BrailleTalkBoardPage;
  let fixture: ComponentFixture<BrailleTalkBoardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrailleTalkBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
