import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailleLearningMenuPage } from './braille-learning-menu.page';

describe('BrailleLearningMenuPage', () => {
  let component: BrailleLearningMenuPage;
  let fixture: ComponentFixture<BrailleLearningMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrailleLearningMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
