import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UploadServiceService } from './FileUpload/service/upload-service.service';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

let app:AppComponent
let fixture:ComponentFixture<AppComponent>

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[HttpClientModule],
      providers:[UploadServiceService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FileUpload'`, () => {
    expect(app.title).toEqual('FileUpload');
  });
  it ('On file change', () =>{
    const mockFile = new File([''], 'filename', { type: 'text/pdf' });
    const mockEvt = { target: { files: [mockFile] } };
    app.onFilechange(mockEvt)

    expect(app.file).toEqual(mockEvt.target.files[0])
  })

  it('upload',()=>{
    const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
    app.file = mockFile;
    
    app.upload()
  })
 
  it('upload without file',()=>{
    app.upload()
  })
 
});
