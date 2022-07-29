import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ImportFromCsvComponent } from './import-from-csv/import-from-csv.component';
import { ImportFromCsvService } from './import-from-csv/service/import-from-csv.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let importFromCsvSevice :ImportFromCsvService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ImportFromCsvComponent
      ],
    }).compileComponents();
   fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance
    const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
    const mockEvt = { target: { files: [mockFile] } };

    app.importedDataEvent = mockEvt
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reusable'`, () => {
    expect(app.title).toEqual('reusable');
  });
  
  it('importedDataEvent function should have been called', fakeAsync(()=>{
    const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
    const mockEvt = { target: { files: [mockFile] } };
    app.handleImportedData(mockEvt)
    tick(100)
    fixture.detectChanges()
    expect(app.importedDataEvent).toEqual(mockEvt)
  }))

  it('click on Upload Btn', () => {
   
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
    app.importedData = obj
    importFromCsvSevice = TestBed.inject(ImportFromCsvService)
    importFromCsvSevice.importedData.next(obj)
    let onUploadBtn = fixture.nativeElement.querySelector("#upload")
    onUploadBtn.click()
    expect(app.importedData).toEqual(importFromCsvSevice.importedData.value)
  })
});
