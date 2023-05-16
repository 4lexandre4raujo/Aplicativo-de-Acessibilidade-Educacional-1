import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailleTutorialBraillePage } from './braille-tutorial-braille.page';

describe('BrailleTutorialBraillePage', () => {
  let component: BrailleTutorialBraillePage;
  let fixture: ComponentFixture<BrailleTutorialBraillePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrailleTutorialBraillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
