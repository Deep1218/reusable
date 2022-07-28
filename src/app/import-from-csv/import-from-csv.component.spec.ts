import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFromCsvComponent } from './import-from-csv.component';
import { ImportFromCsvService } from './service/import-from-csv.service';

describe('ImportFromCsvComponent', () => {
  let component: ImportFromCsvComponent;
  let fixture: ComponentFixture<ImportFromCsvComponent>;
  let importFromCsvSevice :ImportFromCsvService
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportFromCsvComponent ],
      providers:[ImportFromCsvService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFromCsvComponent);
    component = fixture.componentInstance;
    const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
    const mockEvt = { target: { files: [mockFile] } };

    component.importedDataEvent = mockEvt
    
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on Edit', () => {
    let obj = [
      {
        edit:true,
        id:1,
        name:"ABC"
      },
      {
        edit:false,
        id:2,
        name:"XYZ"
      },
      {
        edit:false,
        id:3,
        name:"PQR"
      }
    ]
    let obj1 = [
      {
        edit:false,
        id:1,
        name:"ABC"
      },
      {
        edit:true,
        id:2,
        name:"XYZ"
      },
      {
        edit:false,
        id:3,
        name:"PQR"
      }
    ]
    component.importedData = obj
    component.onEdit(1)
    fixture.detectChanges()
    expect(component.importedData).toEqual(obj1)
  })
  it('on Save', ()=> {
    importFromCsvSevice = TestBed.inject(ImportFromCsvService)
    let obj = [
      {
        edit:false,
        id:1,
        name:"ABC"
      },
      {
        edit:true,
        id:2,
        name:"XYZ"
      },
      {
        edit:false,
        id:3,
        name:"PQR"
      }
    ]
    component.importedData = obj
    component.onSave(1)
    let obj1 = [
      {
        edit:false,
        id:1,
        name:"ABC"
      },
      {
        edit:false,
        id:2,
        name:"XYZ"
      },
      {
        edit:false,
        id:3,
        name:"PQR"
      }
    ]
    fixture.detectChanges()
    expect(component.importedData).toEqual(obj1)
    expect(importFromCsvSevice.importedData.value).toEqual(component.importedData)
  })
});
