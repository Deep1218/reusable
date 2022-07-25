import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToCsvComponent } from './export-to-csv.component';

describe('ExportToCsvComponent', () => {
  let component: ExportToCsvComponent;
  let fixture: ComponentFixture<ExportToCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportToCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
