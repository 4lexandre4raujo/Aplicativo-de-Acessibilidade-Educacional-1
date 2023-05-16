import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailleTutorialBorderButtonPage } from './braille-tutorial-border-button.page';

describe('BrailleTutorialBorderButtonPage', () => {
  let component: BrailleTutorialBorderButtonPage;
  let fixture: ComponentFixture<BrailleTutorialBorderButtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrailleTutorialBorderButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
