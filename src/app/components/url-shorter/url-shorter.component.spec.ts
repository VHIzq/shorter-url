import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShorterComponent } from './url-shorter.component';

describe('UrlShorterComponent', () => {
  let component: UrlShorterComponent;
  let fixture: ComponentFixture<UrlShorterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlShorterComponent]
    });
    fixture = TestBed.createComponent(UrlShorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
