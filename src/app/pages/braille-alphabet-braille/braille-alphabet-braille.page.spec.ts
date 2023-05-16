import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrailleAlphabetBraillePage } from './braille-alphabet-braille.page';

describe('BrailleAlphabetBraillePage', () => {
  let component: BrailleAlphabetBraillePage;
  let fixture: ComponentFixture<BrailleAlphabetBraillePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrailleAlphabetBraillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
