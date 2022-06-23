import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaHeaderComponent } from './cinema-header.component';

describe('CinemaHeaderComponent', () => {
  let component: CinemaHeaderComponent;
  let fixture: ComponentFixture<CinemaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
