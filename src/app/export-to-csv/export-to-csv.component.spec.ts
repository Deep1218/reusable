import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ExportService } from '../export.service';

import { ExportToCsvComponent } from './export-to-csv.component';
import * as XLSX from 'xlsx';
import { DebugElement } from '@angular/core';


describe('ExportToCsvComponent', () => {
  let component: ExportToCsvComponent;
  let fixture: ComponentFixture<ExportToCsvComponent>;
  let exportService:ExportService;
  
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportToCsvComponent ],
      providers:[ExportService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    exportService = TestBed.inject(ExportService)
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('To save file in excel format', () =>{
    let exportSpy = spyOn(exportService, 'exportToExcel').and.callThrough();

    let excelbtn = fixture.nativeElement.querySelector("#exportToExcel")
    excelbtn.click();

    expect(exportSpy).toHaveBeenCalled()
  })

  it('To save file in csv format', () =>{
    let exportSpy = spyOn(exportService, 'exportToCsv').and.callThrough();

    let csvbtn = fixture.nativeElement.querySelector("#exportToCsv")
    csvbtn.click();

    expect(exportSpy).toHaveBeenCalled()
  })
});
