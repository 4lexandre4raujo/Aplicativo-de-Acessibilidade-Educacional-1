import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailleTutorialMorsePage } from './braille-tutorial-morse.page';

describe('BrailleTutorialMorsePage', () => {
  let component: BrailleTutorialMorsePage;
  let fixture: ComponentFixture<BrailleTutorialMorsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrailleTutorialMorsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
